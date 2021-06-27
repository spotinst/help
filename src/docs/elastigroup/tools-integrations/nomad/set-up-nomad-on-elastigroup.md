# Set up Nomad on Elastigroup

This procedure covers integrating Elastigroup with Nomad clusters. Managing a Nomad cluster while keeping costs down can be quite a challenge, especially when it comes to heterogeneous environments (made up from different instance types, and sizes). Elastigroup's Nomad integration increases the cluster's efficiency by choosing the right instance size and type for a specific workload, as well as utilizing Spot Instances to minimize costs.

To learn more about how Elastigroup's Nomad integration works see our Nomad integration overview here.

## Prerequisites

- A valid Spot Account
- A Nomad Cluster
- Add the following to your AMI and replace the <NomadServerElasticIP> with the Elastic IP of the primary:

```
# Setup data dir
data_dir = "/tmp/client1"

# Enable the client
client {
    enabled = true
    servers = ["<NomadServerElasticIP>"]
}
```

## Step 1: Open the Creation Wizard

1. Enter the Elastigroup Creation Wizard.
2. Under the Compute tab, open the third-party integration section and select Nomad.

## Step 2: Configure the Host and Port

1. Add your Nomad Primary Host and Port in the integration section.
2. Hit Validate to make sure the connection is made successfully.

## Step 3: Add User Data Script

In the User Data section of the Compute tab's Additional Configurations section add the following user data script:

```bash
#!/bin/bash
sudo nomad agent -config client.hcl -node <CustomNodeName> &
```

The user data script will register new resources with the existing Nomad lead primary-server. Upon execution, the instance will be fully integrated into the current Nomad cluster. During startup, the node name of the instance will be overwritten in order to identify the Instance. The address of the Nomad primary-server should be injected into the configuration in order for the instance to register itself with the server. Upon instance termination, when an instance is about to be detached from the group, Elastigroup will fetch the agent clients and filter the id according to the hostname and instigate a draining procedure before the resource is detached in order to ensure complete draining and graceful termination.

## What's Next?

Head to Elastigroup's [Use Cases](https://console.spotinst.com/#/aws/ec2/elastigroup/create/setup) to explore other supported services and integrations.
