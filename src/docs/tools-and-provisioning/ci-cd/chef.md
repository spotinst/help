# Chef

## Integrate Chef with Elastigroup

One of the greatest challenges of using Chef in the Cloud is when using it in dynamic workloads that scale up and down. While on-demand instances can be stopped gracefully and guarantee to run infinitely, Spot Instances are more likely to be terminated over time. The Chef server is unaware of Spot Instance interruptions, which cause a 'Zombie' scenario and potential errors.

Our Chef integration uses Chef API calls to trigger register and deregister operations for instances that were created via Elastigroup.

## Step 1: Create a Security Group

- On your AWS account, create a security group that allows inbound traffic specifically from Spot servers
  - IP Addresses available here: [Spot Permit List IPs](administration/api/whitelist-ips)
  - Ports: `80, 443, 9683`

## Step 2: Create a User

- On your Chef server, create a user that will serve the integration, the user must be granted 'delete' and 'Update' permissions.

## Step 3: Configure Instance Registration

- Add the following script to your Elastigroup's User Data, located under Advanced Settings in the Creation Wizard's Compute tab or in Elastigroup's API. Make sure you add your own SPOTINST_TOKEN and RSA.

```bash
#!/bin/bash

chef_role="role"

chef_environment="env"

chef_organization="org"

chef_server_ip="12.34.56.78"

chef_version="11.4.4"

chef_validation_client_name="spotinst-user"

chef_validation_key="

-----BEGIN RSA PRIVATE KEY-----

MIIEpQIBAAKCAQ.....69qqJC/564=

-----END RSA PRIVATE KEY-----

"

echo "spotinst_chef : Installing Python 2.7"

(apt-get install python jq curl -y -q || yum install python curl jq -y) 2>/dev/null

curl -sL https://bootstrap.pypa.io/get-pip.py | python

curl -fsSL https://s3.amazonaws.com/spotinst-labs/integrations/chef/v1/init.sh | \

SPOTINST_TOKEN="$spotinst_token" \

CHEF_VERSION="$chef_version" \

CHEF_ROLE="$chef_role" \

CHEF_ENVIRONMENT="$chef_environment" \

CHEF_SERVER_IP="$chef_server_ip" \

CHEF_VALIDATION_KEY="$chef_validation_key" \

CHEF_VALIDATION_CLIENT_NAME="$chef_validation_client_name" \

EC2_INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id) \

bash
```

For self-signed authentication, you should inject its crt file to `etc/chef/trusted_certs/chef_nexar_mobi.crt`.

## Step 4: Configure Instance Deregistration

While creating your Elastigroup, on the Compute screen, you will find a '3rd Party Integrations' section. Check the Chef integration and enter the following data:

`API Server` – Public DNS record or Public IP (e.g., ec2-52-206-204-15.compute-1.amazonaws.com or 52.206.204.1)

`Organization` – Organization name (e.g. myOrg)

`Version` – The Chef Version in use. We need this information to send the right API call

`User` – Enter the name of the user you have created in step #2

`Pem Key` – Please enter the new user key

That's it. Your Chef integration is all set.
