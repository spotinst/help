# Configure Tortuga (UniCloud) Grid Engine

## Overview

Complete all the procedures in this article including:

- Configure Tortuga and Grid Engine
- Install the Ocean Controller
- Create an Elastigroup
- Submit a Test Job

## Configure Tortuga And Grid Engine

### Step 1: Create Elastigroup Hardware Profile

Tortuga uses hardware profiles to manage node registration. For Elastigroup a remote hardware profile with permission to control the name-format will be created so that Spot can manage VMs.

```
> create-hardware-profile --name elastigroup
> update-hardware-profile --name elastigroup --location remote
> update-hardware-profile --name elastigroup --name-format "*"
```

### Step 2: Create Elastigroup Software Profile

```
> create-software-profile --name execd-elastigroup --no-os-media-required
> set-profile-mapping --software-profile execd-elastigroup --hardware-profile elastigroup
```

## Step 3: Associate Software Profile With UGE

```
> enable-component --software-profile execd-elastigroup --no-sync execd
> uge-cluster update default --add-execd-swprofile execd-elastigroup
```

### Step 4: Auto Queue Registration Hostgroup

#### Create a Hostgroup

```
> qconf -ahgrp @elastigroup
```

#### Create a Queue

The first command will launch an editor with the queue name configured. Save this template.

```
> qconf -aq burst.q
> qconf -mattr queue hostlist "@elastigroup" burst.q
```

The second command will associate the @elastigroup hostgroup with the queue.

### Step 5: Allow Auto-Registration For Queue

Finally, associate the hostgroup with the Tortuga software-profile:

```bash
> echo "@elastigroup" >$SGE_ROOT/$SGE_CELL/common/config.execd-elastigroup
```

## Install the Ocean Controller

```bash
$ source $SGE_ROOT/default/common/settings.sh
$ curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/hpc/gridengine/controller/scripts/install.sh | \
SPOTINST_TOKEN=redacted \
SPOTINST_ACCOUNT=redacted \
SGE_CLUSTER_NAME="tortuga-uge-cluster" \
bash
```

### Cluster Name

All clusters must be uniquely identified with a Spot Account. To do this set SGE_CLUSTER_NAME during the install of the Ocean Controller. Retain this value, which will be used again when creating the Elastigroup.

### Create an Elastigroup

When creating a Spot Elastigroup there are a few properties that must be set for nodes to register with Tortuga and the Grid Engine primary. The following are recommended settings that are compatible with most UGE installations.

### Capacity

**Min**: 1
**Target**: [desired target]
**Max**: [desired max]

### Compute Image

**Publisher**: OpenLogic
**Offer**: CentOS
**SKU**: 7.5

### Login

**User Name**: centos
**Authentication Type**: SSH Public Key
**Public Key**: [public key of root user on primary]

### Required Tags

| Tag                | Description                                                                            |
| ------------------ | -------------------------------------------------------------------------------------- |
| installerHostName  | Hostname of the primary [**get-node-list**]                                            |
| installerIpAddress | IP Address of the primary [**ifconfig -a**]                                            |
| cfmPassword        | Password for the cfmUser. Can be found with: **cat \$TORTUGA_ROOT/private/.cfmsecret** |

### Optional Tags

| Tag             | Default                | Description                                                                                      |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| port            | 8443                   | Port the primary is listening on                                                                 |
| cfmUser         | cfm                    | The admin user for UGE                                                                           |
| dns_nameservers | **installerIpAddress** | Where the Tortuga DNS server is installed. Defaults to the value set for **installerIpAddress**. |

### User Data

```python
#!/usr/bin/env python

import sys
import subprocess
import platform
import time
import shutil
import urllib2
import base64
import ssl
import json
import os
import signal

installerHostName = None
installerIpAddress = None
port = 8443
cfmUser = 'cfm'
cfmPassword = None
override_dns_domain = True
dns_search = ''
dns_domain = ''
dns_nameservers = []


def bootstrapFromMetadataTags():
  url = 'http://169.254.169.254/metadata/instance/compute/tags?api-version=2018-10-01&format=text'

  request = urllib2.Request(url, headers={"Metadata" : "true"})
  contents = urllib2.urlopen(request).read()

  tags = contents.split(";")

  for tag in tags:
    keyval = tag.split(":", 1)

    if keyval[0] == "installerHostName":
      global installerHostName
      installerHostName = keyval[1]
    elif keyval[0] == "installerIpAddress":
      global installerIpAddress
      installerIpAddress = keyval[1]
    elif keyval[0] == "port":
      global port
      port = keyval[1]
    elif keyval[0] == "cfmUser":
      global cfmUser
      cfmUser = keyval[1]
    elif keyval[0] == "cfmPassword":
      global cfmPassword
      cfmPassword = keyval[1]
    elif keyval[0] == "override_dns_domain":
      global override_dns_domain
      override_dns_domain = ast.literal_eval(keyval[1])
    elif keyval[0] == "dns_search":
      global dns_search
      dns_search = keyval[1]
    elif keyval[0] == "dns_domain":
      global dns_domain
      dns_domain = keyval[1]
    elif keyval[0] == "dns_nameservers":
      global dns_ary
      dns_ary = keyval[1].split(",")
      dns_ary.append(installerIpAddress)
      dns_nameservers = dns_ary

def runCommand(cmd, retries=1):
    for nRetry in range(retries):
        p = subprocess.Popen(cmd, shell=True)

        retval = p.wait()
        if retval == 0:
            break

        time.sleep(5 + 2 ** (nRetry * 0.75))
    else:
        return -1

    return retval


def _installPackage(pkgList, yumopts=None, retries=10):
    cmd = 'yum'

    if yumopts:
        cmd += ' ' + yumopts

    cmd += ' -y install %s' % (pkgList)

    retval = runCommand(cmd, retries)
    if retval != 0:
        raise Exception('Error installing package [%s]' % (pkgList))


def installEPEL(vers):
    epelbaseurl = ('http://dl.fedoraproject.org/pub/epel'
                   '/epel-release-latest-%s.noarch.rpm' % (vers))

    runCommand('rpm -ivh %s' % (epelbaseurl))


def _isPackageInstalled(pkgName):
    return (runCommand('rpm -q --quiet %s' % (pkgName)) == 0)


def installPuppet(vers):
    pkgname = 'puppetlabs-release-pc1'

    url = 'http://yum.puppetlabs.com/%s-el-%s.noarch.rpm' % (pkgname, vers)

    bRepoInstalled = _isPackageInstalled(pkgname)

    if not bRepoInstalled:
        retval = runCommand('rpm -ivh %s' % (url), 5)
        if retval != 0:
            sys.stderr.write(
                'Error: unable to install package \"{0}\"\n'.format(pkgname))

            sys.exit(1)

    # Attempt to install puppet
    if not _isPackageInstalled('puppet-agent'):
        _installPackage('puppet-agent')


def bootstrapPuppet():
    cmd = ('/opt/puppetlabs/bin/puppet agent'
           ' --logdest /tmp/puppet_bootstrap.log'
           ' --onetime --server %s --waitforcert 120' % (installerHostName))

    runCommand(cmd)


def get_default_dns_domain():
    results = installerHostName.rstrip().split('.', 1)

    return results[1] if len(results) == 2 else None


def update_resolv_conf():
    with open('/etc/resolv.conf', 'w') as fp:
        if dns_search:
            fp.write('search %s\n' % dns_search)

        fp.write('nameserver %s\n' % installerIpAddress)

def update_network_configuration():
    nameserver_found = False
    domain_found = False

    fn = '/etc/sysconfig/network-scripts/ifcfg-eth0'

    with open(fn) as fp:
        with open(fn + '.NEW', 'w') as fpOut:
            for buf in fp.readlines():
                if buf.startswith('PEERDNS='):
                    fpOut.write('PEERDNS=no\n')
                    continue
                elif buf.startswith('DNS1='):
                    nameserver_found = True
                    fpOut.write('DNS1={0}\n'.format(installerIpAddress))
                    continue
                elif buf.startswith('DOMAIN='):
                    domain_found = True
                    fpOut.write('DOMIAN={0}\n'.format(dns_search))
                    continue

                fpOut.write(buf)

            if not nameserver_found:
                fpOut.write('DNS1={0}\n'.format(installerIpAddress))

            if not domain_found:
                fpOut.write('DOMAIN={0}\n'.format(dns_search))

    shutil.move(fn, fn + '.orig')
    shutil.move(fn + '.NEW', fn)

def setHostName():
    url = 'https://%s:%s/v1/identify-node' % (installerIpAddress, port)

    req = urllib2.Request(url)

    req.add_header(
        'Authorization',
        'Basic ' + base64.standard_b64encode(
            '%s:%s' % (cfmUser, cfmPassword)))

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    for nCount in range(300):
        try:
            response = urllib2.urlopen(req, context=ctx)
            break
        except urllib2.HTTPError as ex:
            if ex.code == 401:
                raise Exception(
                    'Invalid Tortuga webservice credentials')
        except:
            print("Registration error. Retrying...")

        time.sleep(5)
    else:
        raise Exception('Unable to communicate with Tortuga webservice')

    d = json.load(response)

    if response.code != 200:
        if 'error' in d:
            errmsg = 'Tortuga webservice error: msg=[%s]' % (
                error['message'])
        else:
            errmsg = 'Tortuga webservice internal error'

        raise Exception(errmsg)

    h = d['node']['name']

    runCommand('hostname %s' % h)

    with open('/etc/hostname', 'a') as fp:
        fp.write('%s\n' % h)

    return h


def main():
    runCommand('setenforce permissive')

    bootstrapFromMetadataTags()

    setHostName()

    update_resolv_conf()

    # update_network_configuration()


    vals = platform.dist()

    vers = vals[1].split('.')[0]

    # Install EPEL repository, if necessary
    if not _isPackageInstalled('epel-release'):
        installEPEL(vers)

    with open('/etc/hosts', 'a+') as fp:
        fp.write('%s\t%s\n' % (installerIpAddress, installerHostName))

    installPuppet(vers)

    update_resolv_conf()

    bootstrapPuppet()

if __name__ == "__main__":

    main()
```

### Third-party Integration

Add the `HPC Grid Engine` Integration:

<img src="/elastigroup/_media/configure-tortuga-unicloud-grid-engine_1.png" />

### Submit a Test Job

```
qsub -r yes -q burst.q $SGE_ROOT/examples/jobs/sleeper.sh 60
```
