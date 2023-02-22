# Import a Stateful VM

In this procedure, you will import the configuration of an existing Azure stateful VM to Spot so that the VM can be managed as an Elastigroup stateful node in Spot.

## Prerequisites

* An Azure subscription connected to Spot
* One or more VMs in your Azure subscription

## Get Started

1. Go to the left menu in the Spot console and under Elastigroup, click Stateful Nodes.
2. On the top right, click Create Node and Import.

<img src="/elastigroup/_media/azure-import-a-stateful-vm-01.png" />

### Choose a Resource Group

In the page that opens, choose the Azure resource group from the list. A list of Azure VMs will appear.

<img src="/elastigroup/_media/import-stateful-vm-1.png" width="350" />

### Choose a VM

In the table, click the VM you want to import and click Review & Import.

<img src="/elastigroup/_media/azure-import-stateful-6.png" />

**Note: Spot does not support generalized VMs nor ephemeral storage VMs.**

### Review  

In the Review page you can see a summary of the configuration and edit if necessary.

<img src="/elastigroup/_media/azure-import-stateful-4.png" />

You can also view the entire configuration in JSON format and edit the JSON page.

<img src="/elastigroup/_media/azure-import-stateful-5.png" />

Learn more about using API to [configure your stateful node](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeCreate).

When you are finished reviewing the configuration, click Create.

### Import Process Steps

When the persistency preferences remain with default values (i.e., the OS disk and data disks are activated and network is deactivated), the following occurs:

* The Azure VM will be stopped.
* Snapshots will be taken from the Azure VM resources (i.e., the OS disk and the data disks), and the resources will be kept for 96 hours (configurable in the API)
* A new VM will be launched with new resources (using the saved snapshots) and with new private and public IP addresses.
* The Azure VM and its resources will be terminated and deleted at the end of the 96 hour period.

When the network persistency is also activated, the following actions will be done:

* The Azure VM will be terminated.
* Snapshots will be taken from the Azure VM resources (i.e., OS disk and data disks) and the resources will be kept for 96 hours (configurable in the API).
* A new VM will be launched with new resources (using the saved snapshots) and the original private and public IP addresses.
* The original data resources will be deleted at the end of the 96 hour period.

## What's Next?

* Learn how to [create a stateful node from scratch](managed-instance/azure/getting-started/create-stateful-node).
* Learn how to [manage your existing stateful nodes](https://docs.spot.io/managed-instance/azure/tutorials/manage?id=manage-stateful-nodes).  
