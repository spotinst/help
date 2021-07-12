# CloudFoundry BOSH

BOSH is an open source tool for release engineering, deployment, lifecycle management, and monitoring of distributed systems. We will install the BOSH server (Director) using BOSH CLI. Once a VM with Director is running, we are going to use BOSH CLI to send commands to the Director.

## How It Works

Example component interaction: How components interact when creating a new VM.

1. Through the CLI, the `operator` takes an action (`deploy / scale up`) which requires creating a new VM in the cloud.
2. The CLI passes the instruction to the Director.
3. The `Director` uses the `CPI` to tell `Spot` to launch an EC2 Instance.
4. `Spot` provides the `Director` with information (IP addresses and IDs).
5. The Director uses `CPI` to update the Registry with the configuration information for the EC2 Instance.
6. The Agent running on the VM requests the configuration information for the VM from the Registry.
7. The Registry responds with the IP addresses and IDs.
8. The Agent uses the IP addresses and IDs to configure the VM.

## Step 1. Installation

`BOSH CLI` is a command line interface to the Director. Follow these [instructions](https://bosh.io/docs/cli-v2/#install) to install it.

## Step 2. Set up IaaS Providers

Prepare both Spot and AWS accounts. Please follow these [instructions](https://support.spot.io/provisioning-and-cicd/provisioning-and-cicd/more-provisioning-tools/cloudfoundry-bosh/) to prepare your AWS account. Then, generate a new Spot [API token](https://console..com/spt/auth/signIn).

Clone the Director templates.

`git clone https://github.com/cloudfoundry/bosh-deployment deployment`

## Step 3. Setup BOSH Environment & Download the Spot Manifest

An environment consists of the Director and deployments that it orchestrates. First, we need to deploy the Director which then would be able to manage other deployments.
We are going to use `bosh create-env` command to install the Director. `bosh create-env` command provides a way to install initial VM with BOSH Director on any IaaS. In our case, we will use both Spot and AWS as our infrastructure providers.

First, get configuration files for your BOSH environment and run `bosh create-env` as follows:

`$ git clone https://github.com/cloudfoundry/bosh-deployment deployment`

Then, download the `Spot CPI manifest`.

`# wget http://-public.s3.amazonaws.com/integrations/bosh/aws/cpi.yml`

The Spot CPI exposes several cloud properties that can be configured in the VM Types section.
For example:

```yaml
vm_types:
    - name: default
        cloud_properties:
        instance_type: m3.medium
        availability_zone: us-east-1a
        spotinst_product: Linux/UNIX
        spotinst_risk: 100
```

`spotinst_product` **[String, optional]**: Product name. Defaults to `Linux/UNIX` (can be set to `Linux/UNIX (Amazon VPC)` if your account has both EC2 VPC and EC2 Classic platforms).

`spotinst_risk` **[Integer, optional]**: The percentage of Spot instances that would spin up from the target capacity. Set to 0 to use On-Demand instances. Defaults to `100` (all instances should be Spot).

`spotinst_disabled` **[Boolean, optional]**: Set to `true` to disable the Spot CPI for a specific deployment. Defaults to `false` (use Spot CPI always).

## Step 4. Create a New State Directory

Create a new state directory. This state is used by BOSH to store information about your BOSH Director, keep track of both managed infrastructure and configuration.

`$ mkdir state`

## Step 5. Create a New Variable File

Create a new variables file. For example,`.envrc`.

```sh
export SPOTINST_TOKEN="redacted"
export SPOTINST_ACCOUNT="act-12345"
export AWS_ACCESS_KEY="AKI..."
export AWS_SECRET_ACCESS_KEY="redacted"
export AWS_REGION="us-west-2"
export AWS_ZONE="us-west-2a"
export AWS_KEY_NAME="key"
export AWS_SECURITY_GROUPS="[bosh]"
export AWS_SUBNET_ID="subnet-12345"
export AWS_ELASTIC_IP="1.2.3.4"
export SSH_PRIVATE_KEY="/path/to/private.key"
```

## Step 6. Create a New Environment

Finally, create the environment using `bosh create-env`.

```sh
$ source .envrc && bosh create-env deployment/bosh.yml \ --state state/state.json \
--vars-store state/creds.yml \
-o cpi.yml \
-o deployment/external-ip-with-registry-not-recommended.yml \ -o deployment/jumpbox-user.yml \
-v director_name=bosh-aws \
-v internal_cidr=10.0.0.0/24 \
-v internal_gw=10.0.0.1 \
-v internal_ip=10.0.0.6 \
-v spotinst_token=$SPOTINST_TOKEN \
-v spotinst_account=$SPOTINST_ACCOUNT \
-v access_key_id=$AWS_ACCESS_KEY \
-v secret_access_key=$AWS_SECRET_ACCESS_KEY \
-v region=$AWS_REGION \
-v az=$AWS_ZONE \
-v default_key_name=$AWS_KEY_NAME \
-v default_security_groups=$AWS_SECURITY_GROUPS \ -v subnet_id=$AWS_SUBNET_ID \
-v external_ip=$AWS_ELASTIC_IP \
--var-file private_key=$SSH_PRIVATE_KEY
```

## Step 7. Configure an Alias for Your Environment

Once the instance with BOSH Director is running, point your CLI to it, saving the environment with the alias `spotinst`.

`$ bosh -e $AWS_ELASTIC_IP alias-env spotinst --ca-cert <(bosh int state/ creds.yml --path /director_ssl/ca)`

## Step 8. Log in to Your Director

```
$ export BOSH_CLIENT=admin
$ export BOSH_CLIENT_SECRET=$(bosh int state/creds.yml --path / admin_password)
$ bosh -e spotinst login
```

Follow these [instructions](https://bosh.io/docs/cloud-config.html#update) to update your cloud configuration on the Director.

Now we are ready to deploy!

## Step 9. Deploy

Each BOSH deployment needs to provide a specially structured configuration file – deployment manifest. This file defines what resources are going to be deployed, what services are going to be running on each of resources and properties that will be passed to services configuration files.
Here is an example to deploy a simple `Zookeeper` service.

First, we need to upload Stemcell. A Stemcell is an operating system image that BOSH uses to create VMs.

```
$ wget --content-disposition https://s3.amazonaws.com/bosh-aws-light-stemcells/light-bosh-stemcell-3541.2-aws-xen-hvm-ubuntu-trusty-go_agent.tgz
$ bosh -e spotinst upload-stemcell light-bosh-stemcell-3541.2-aws-xen-hvm- ubuntu-trusty-go_agent.tgz
```

Then, we need to download the Zookeeper deployment.

```
$ wget https://raw.githubusercontent.com/cppforlife/zookeeper-release/master/manifests/zookeeper.yml
```

And finally, we can run deploy by providing a path to deployment manifest.

```
$ bosh -e spotinst -d zookeeper deploy zookeeper.yml
```
