# Import a Stateful VM

In this procedure, you will import the configuration of an existing Azure stateful VM to Spot so that the VM can be managed as an Elastigroup stateful node in Spot.

## Prerequisites
- An Azure subscription connected to Spot
- One or more stateful VMs in you Azure subscription

## Get Started
1. Go to the left menu in the Spot console and under Elastigroup, click Stateful Nodes.
2. On the top right, click Create Node and Import.



## Choose a Resource Group

In the page that opens, choose the Azure resource group from the list. A list of Azure VMs will appear.



## Choose a VM

In the table, click the row of the VM you want to import and click Review & Import.



## Review

In the Review page you can see the entire configuration in JSON format and edit it if necessary.



Under the JSON panel, there is a link to the Spot API with the stateful node configuration.

When you are finished reviewing the configuration, click Create.

## Import Process Steps

During the import process a number of things happen. When the persistency preferences remain with default values (i.e., the OS disk and data disks are activated and network is deactivated), the following actions will be done:

- The Azure VM will be stopped.
- Snapshots will be taken from the Azure VM resources (i.e., the OS disk and the data disks), and the resources will be kept for 96 hours (configurable in the API)
- A new VM will be launched with new resources (using the saved snapshots) and with new private and public IP addresses.
- The Azure VM and its resources will be terminated and deleted at the end of the 96 hour period.

When the network persistency is also activated, the following actions will be done:

- The Azure VM will be terminated.
- Snapshots will be taken from the Azure VM resources (i.e., OS disk and data disks) and the resources will be kept for 96 hours (configurable in the API).
- A new VM will be launched with new resources (using the saved snapshots) and the original private and public IP addresses.
- The Azure VM and the data resources will be deleted at the end of the 96 hour period.

What’s Next?

- Learn how to manage stateful nodes (link to page) in Elastigroup.
