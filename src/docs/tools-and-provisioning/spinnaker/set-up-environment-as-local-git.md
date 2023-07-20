# Set up Environment as Local Git

This page describes the prerequisites and procedures for setting up the local Git environment for using Spinnaker.

The required procedures include:

- Set up Ubuntu Instance
- Install Software Tools
- Set up Git SSH

Once you have completed these procedures, continue to the next page, [Set up Halyard](tools-and-provisioning/spinnaker/install-configure).

## Prerequisites

The procedures for setting up and completing the Spinnaker integration with Spot assume a working knowledge of and experience working with Spinnaker.

Before you start this procedure, you must have the following:

- Spot account ID
- Spot token

### Isolation

It is highly recommended to have a dedicated Spot account that contains only Spinnaker managed Elastigroups.

### Naming Convention

Ensure that all of your Elastigroups are named according to the Spinnaker naming convention: `{application name}-{stack infrastructure}-v{version number}`

For example, for a Spinnaker app called testapp, create an Elastigroup with the name `testapp-dev-v000`.

### Load Balancer

In addition, the Elastigroup must include a load balancer.

## Set up Ubuntu Instance

The procedures and commands in this document are written for use on an Ubuntu instance. If you set up an instance using a different OS, you will need to make the appropriate adjustments to the commands used.

Create an Ubuntu instance with the following definitions:

- Security group with two inbound rules for allowing an SSH connection and an inbound rule with your IP address.
- Instance with at least 30 GB in root volume.
- Instance type m5.2xlarge recommended.
- A Git user.

## Install Software Tools

1. Before setting up the Git, use the commands below to install the following:
   - git
   - curl
   - netcat
   - redis-server
   - openjdk-11-jdk
   - emacs
   - awscli
   - nginx
   - make
   - python2.7
   - python-pip

```
$ sudo su -
$ add-apt-repository ppa:openjdk-r/ppa
$ apt-get update
$ apt-get -y install git curl netcat redis-server openjdk-11-jdk emacs awscli nginx make python2.7 python-pip
```

2. Install Node.js

`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`

3. To start using nvm, either close your terminal and start a new session, or run the following:

```
$ export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
$ [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
$ nvm install v12.16.0
$ npm install -g yarn
```

## Set up Git SSH

To set up SSH on the Git, complete the following steps:

1. Generate a new SSH key with the following command and supply your email address:

`$ ssh-keygen -t rsa -b 4096 -C "<EMAIL_ADDRESS>"`

2. Add the newly created SSH Key as a trusted SSH Key:

`$ ssh-add ~/.ssh/id_rsa`
If you can’t add the key, run the following command and try again.

```
$ eval "$(ssh-agent)"
$ cat < ~/.ssh/id_rsa.pub
```

3. Copy the token and paste it in GitHub in the following step.
4. Complete this [GitHub procedure](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) to pair the SSH key to your GitHub account.

## What’s Next?

Continue to the next stage of the Spinnaker integration where you will [set up Halyard](tools-and-provisioning/spinnaker/install-configure) and expose Spinnaker to external users.
