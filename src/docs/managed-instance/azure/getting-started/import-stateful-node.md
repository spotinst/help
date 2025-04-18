# Import a Stateful Virtual Machine

This procedure describes how to import the configuration of an existing Azure stateful virtual machine (VM) to Spot so that it can be managed as an Elastigroup stateful node in Spot.

## Prerequisites

* An Azure subscription connected to Spot
* One or more virtual machines in your Azure subscription

## Get Started

1. In the left menu in the Spot console, click **Elastigroup**> **Stateful Nodes**.
2. On the top right, click **Create Node**> **Import**.

<img src="/elastigroup/_media/azure-import-a-stateful-vm-01.png" />

3. Choose the Azure resource group from the dropdown menu. 

<img src="/elastigroup/_media/import-stateful-vm-1.png" width="350" />

4. Click the virtual machine you want to import and click **Review & Import**.

<img src="/elastigroup/_media/azure-import-stateful-6.png" />

**Note: Spot does not support generalized virtual machines nor ephemeral storage virtual machines.**

### Review  

In the Review page you can see a summary of the configuration and edit if necessary.

<img src="/elastigroup/_media/azure-import-stateful-4.png" />

You can also view the entire configuration in JSON format and edit the JSON page.

<img src="/elastigroup/_media/azure-import-stateful-5.png" />

Learn more about using API to [configure your stateful node](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeCreate).

When you are finished reviewing the configuration, click **Create**.

### Import Process Steps

When the persistency preferences remain with default values (i.e., the OS disk and data disks are activated and network is deactivated), the following occurs:

* The Azure virtual machine will be stopped.
* Snapshots will be taken from the Azure virtual machine resources (i.e., the OS disk and the data disks), and the resources will be kept for 96 hours (configurable in the API)
* A new virtual machine will be launched with new resources (using the saved snapshots) and with new private and public IP addresses.
* The Azure virtual machine and its resources will be terminated and deleted at the end of the 96 hour period.

When the network persistency is also activated, the following actions will be done:

* The Azure virtual machine will be terminated.
* Snapshots will be taken from the Azure virtual machine resources (i.e., OS disk and data disks) and the resources will be kept for 96 hours (configurable in the API).
* A new virtual machine will be launched with new resources (using the saved snapshots) and the original private and public IP addresses.
* The original data resources will be deleted at the end of the 96 hour period.

**Note**: The import flow keeps the virtual machine status after the import is completed. 

* If the original virtual machine is running- the new virtual machine will run after the import.
* If the original virtual machine is stopped- after the import, the new virtual machine will be launched and transitioned to the running status, ensuring its functionality and confirming a successful import. The virtual machine will then transition directly to the stopped state.
* Default Behavior of VM size selection: If the `spotSizeAttributes` or `spotSizes` are not set, then the stateful node’s spot sizes are defined with the attributes of the imported virtual machine. 

**Example**:

When the default attributes are used, the list of available spot virtual machine sizes expands to include all the virtual machine sizes that share the same attributes:

<img width="1197" alt="import-stateful-azure" src="https://github.com/user-attachments/assets/c94a32cb-a714-48ae-beea-128cae9e479b">
