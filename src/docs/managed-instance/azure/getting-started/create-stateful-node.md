# Create a New Stateful Node

This procedure describes how to create a new stateful node from scratch in Elastigroup Azure.

## Prerequisite

Ensure your Azure account is connected to your Spot account. For more information, see [Connect your Azure Account](https://docs.spot.io/connect-your-cloud-provider/azure-account).

## Get Started

1. In the Spot Console under Elastigroup, click Stateful Nodes.
2. Click Create Node.
3. Click Start from scratch.

<img src="/elastigroup/_media/azure-new-stateful-1.png" width="1000" />

The following steps are included in the creation wizard:

* Basics
* Compute
* Networking
* Advanced
* Review

## Step 1: Basics

Enter the information described below. Required fields are indicated with an asterisk (*).

### Basic Settings

* Name: Enter a name for the node. Spot recommends using a naming convention based on the specific workload the node will manage, for example dev-eu1-worker.
* Description: Add a few words indicating the purpose of this node.
* Resource Group: Select a resource group where the VMs will be launched.  
* Region: Select a region where the VMs will be launched.  
* Availability Zones (AZ): Selecting availability zones is optional. Spot recommends selecting multiple availability zones to expand the Spot markets available for the Stateful Node.  

<img src="/elastigroup/_media/azure-new-stateful-2.png" />

### Persist Storage

You can choose to persist the OS disk and data disks for the node by snapshotting the disk or reattaching existing ones between VM replacements.  

<img src="/elastigroup/_media/azure-new-stateful-9.png" />

* The re-attach persistency method is supported only for regional or a single AZ selection. If you select the multiple AZs with the re-attach method, Spot will use the snapshot persistency method in case the current AZ is not available for the new VM.
* Persisting the OS disk will disable editing the Login, Image and Custom Data/Shutdown scripts fields after the VM is created. This also applies to the process of importing a stateful node.   
* Editing the persist storage isn’t available when the stateful node is paused.

Learn more about [persisting storage methods](managed-instance/azure/features/persist-os-data-disks?id=persist-os-and-data-disks).  

### Persist Network

You can choose persisting both private and public IPs for the underlying VM between VM replacements.  

<img src="/elastigroup/_media/azure-new-stateful-10.png" />

* Persisting the network disables the ability to edit all the Network interfaces configurations after the VM is created. This also applies to the process of importing a stateful node.   
* Editing the persist network isn’t available when the stateful node is paused.

Learn more about [persisting network](managed-instance/azure/features/persist-network).

When you have completed the information in the Basics tab, click Next to continue.

## Step 2: Compute

### Image

Specify the image to be used for launching VMs on the stateful node.  

The list of images is affected by the region you select in the Basics tab.  

<img src="/elastigroup/_media/azure-new-stateful-21.png" />

Choose one of the following types of images:

* [Marketplace](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/cli-ps-findimage). An image available in the Azure Marketplace. You will need to select options from each of the following dropdowns:
  * Publisher.  
  * Offer.  
  * SKU.  

* Custom. One of your custom made VM images. Select options from each of the following dropdowns:
  * Image Resource Group.  

* [Image Name](https://docs.microsoft.com/en-us/dynamics-nav/how-to--get-the-microsoft-azure-image-name).  

* [Shared Image](https://docs.microsoft.com/en-us/azure/virtual-machines/shared-image-galleries). Enables you to create a stateful node with an image from your organization’s Shared Image Gallery.
  * Select options from each of the following dropdowns:
    - Image Resource Group.  
    - Gallery Name.  
    - Image Name.  
    - Version. If you need the most recent version, choose Latest from the list.

  * Learn how to [define cross-subscription images](elastigroup/features-azure/shared-image-galleries?id=cross-subscription-shared-galleries).

#### Define Custom or Shared Specialized Image

Custom and shared images are indicated as Generalized or Specialized. When you choose a Specialized image, the following applies:

* The Login fields will be disabled.
* The Custom Data script field will be disabled.

When OS disk persistency is turned on, the Image section is disabled in edit and import modes of the wizard.

<img src="/elastigroup/_media/azure-new-stateful-11.png" />

When the data disk persistency is turned on, custom and shared images that contain data disk definitions won’t be available (they will be filtered out).

### Login

Specify the authentication details to be used for launching VMs on the stateful node.  

<img src="/elastigroup/_media/azure-new-stateful-12.png" />

Enter the following information:
* User name
* Authentication type (relevant for Linux OS only)
* Password

When OS persistency is turned on, the Login section is disabled in edit and import modes of the wizard.

<img src="/elastigroup/_media/azure-new-stateful-13.png" />

#### VM Sizes

The selection of VM sizes is enabled after the image and login details have been entered.  

**You need to select at least one Spot VM size and one On-demand (OD) VM size.**

<img src="/elastigroup/_media/azure-new-stateful-5.png" />

Each VM size provides the following information:

* VM Size: List of relevant VM sizes. This list can change according to the selected image (associated OS type) and the region selected in the Basics tab.  
* Spot and Preferred: Select Spot VM sizes. At least one VM needs to be defined as a Spot VM. Selecting a VM size as preferred indicates that Spot should launch the preferred VM sizes prior to the remaining VM sizes that are defined as Spot sizes.   
* Type
* vCPUs
* RAM (GiB)
* Storage (GiB)
* Spot Cost/ Month: The cost per month according to Azure pricing.  
* On-demand Cost/ Month: The cost per month according to Azure on-demand pricing.
* On-Demand: Select an on-demand VM size. At least one VM needs to be defined as on- demand. This is applicable when you have on-demand as the preferred lifecycle or significant as it provides a fallback in case Spot VMs are unavailable.  

You can select the columns to view by clicking the column selector in the furthest right column in the table.   

The list of VMs can be filtered according to VM size.  

<img src="/elastigroup/_media/azure-new-stateful-14.png" width="450" />

>**Tip**: To maximize cost savings, provide the stateful node with all possible Spot VMs compatible with the expected workload. The more VM sizes you select, the higher the chances that the stateful node will find an available Spot VM to run on.  

#### Availability Settings

* Draining Timeout: Set the amount of time (seconds) that the stateful node will allow to de-register and drain VMs before termination.
* Fallback to On-Demand: A stateful node provides a fallback mechanism in case no Spot VMs are available. Mark this option if you would like the option to automatically fall back to an on-demand VM in such a case.
* Continuous Optimization: Choose when stateful node may move workloads from on-demand to spot VMs. You may choose from:
- Once Available: The stateful node moves the workloads when your Spot VM types become available.
- Custom: Define one or more time windows to allow the move.

<img src="/elastigroup/_media/azure-new-stateful-6.png" />

#### Capacity Reservation Group 

Capacity reservation group (CRG) can be utilized in Stateful Node and Elastigroup. 
 
![azure-new-stateful-22](https://github.com/spotinst/help/assets/106514736/804beca7-7cec-4d06-b0e5-e330073377e5)

Complete the following steps to utilize your capacity reservation group: 

1. Check the ‘Utilize CRG’ checkbox. 
2. Select the CRG you want Elastigroup to use: 
 * **Automatic**: Elastigroup searches for available CRG slots in your subscription and utilizes the available slots in the configuration of each group.  
 * **Manual**: Provide details for the CRG you want to be utilized as part of the Stateful node or Elastigroup. 
3. Select how you want Elastigroup to use your CRG- 
 * **Prioritize over Spot**: Provides CRG utilization as a priority before Elastigroup picks up the next OD market. 
 * **Prioritize over On-Demand**: Provides CRG utilization as a priority before Elastigroup picks up the next OD market. 

You must create a CRG in Azure before Elastigroup can utilize the CRG.  

CRG will only be available for selection when it correlates with the enabled VMs in the Elastigroup configuration. 

When you have completed the information in the Compute tab, click Next to continue.

## Step 3: Networking

Define the networking settings for your stateful node. At least one network interface is required. You can define multiple network interfaces if needed.

<img src="/elastigroup/_media/azure-new-stateful-15.png" />

### General Networking Definitions

* Virtual Network: The virtual network that will be associated with your VM. The dropdown menu presents a list of virtual networks and their associated resource groups. The list of Virtual Networks is affected by the region you selected in the Basics tab. This field is mandatory.  
* Public IP SKU for all network interfaces: If you need to assign a public IP to your VM - select the SKU for all the public IP addresses that will be defined for the VM.

### Specific Network Interface Definitions

* Subnet: Define the subnet that the network interface will be assigned to. This field is mandatory.
* Network Security Group: The network security group that will be associated with the network interface. In the dropdown menu, the network security groups are listed under the resource groups (optional value).

<img src="/elastigroup/_media/azure-new-stateful-16.png" />

* Application Security Groups: The application Security Groups that will be associated with your network interface. Choose one or more application security groups for your network interface (optional value).  

<img src="/elastigroup/_media/azure-new-stateful-17.png" />

* Assign Public IP: Select this option to auto-assign a public IP to the launched VMs.

Note: this action will be enabled once the public IP SKU is defined. When the network 	persistency is turned on, the Networking section is disabled during the edit and import 	modes of the wizard.

<img src="/elastigroup/_media/azure-new-stateful-18.png" />

When you have completed the information in the Networking tab, click Next to continue.

## Step 4: Advanced

This step is optional.  

### Scheduling

You can define actions to occur at specific times on the VM. You can shut down the VM and turn it back on with the same persisted resources (Storage & Network) at specific times. This is done by defining the times in the Cron expressions.   

Click + Add Task, select an action type, and enter the times you want to define with Cron expressions.  

<img src="/elastigroup/_media/azure-new-stateful-19.png" />

### Custom Data

Custom data is useful for launching VMs with all required configurations and software installations. Stateful Node can load custom data (i.e., custom scripts) during the provisioning of VMs.  

When a Specialized Shared Image is specified, Custom Data is not available.

When the OS disk persistency is turned on, the Custom Data section is disabled during the edit and import modes of the wizard.  

### Shutdown Script

Defining a shutdown script requires the Spot agent to be installed on the VM.
Click Add Python 2.x/3.x script OR Add Windows script (depending on the OS defined in the selected image) to add the script for installing the Spot agent within the custom data. You can find more information on shutdown scripts on this [page](https://docs.spot.io/elastigroup/features-azure/shutdown-script-in-elastigroup-for-azure?id=install-the-spot-agent).

When the OS disk persistency is turned on, the Shutdown Script section is disabled during edit and import modes of the wizard.

### Tags

Click + Add Tag to add tags you want the VMs to be created with. Tagged stateful nodes can be filtered by tag keys and values on the Stateful Nodes page.

<img src="/elastigroup/_media/azure-new-stateful-20.png" />

All tags created in the Spot console are updated in the Azure console and can be viewed there as well.  

When you have completed the information in the Advanced tab, click Next to continue.

## Step 5: Review

There are two ways you can review your configuration:

* Summary:

<img src="/elastigroup/_media/azure-import-stateful-4.png" />

Click the edit button located near each section’s title in order to edit the section’s configuration (you will be navigated to the relevant tab in the wizard).   

**OR**

* JSON:

<img src="/elastigroup/_media/azure-import-stateful-5.png" />

You can make changes in the configuration by editing the JSON directly by turning on Edit mode. You can collapse and expand each section of the JSON. You can export the configuration to a JSON file and you can also copy it to your clipboard.

Note: Changes made in the JSON file won’t be reflected in the Summary page. If you make changes in the JSON file and then navigate back to one of the wizard tabs, the changes won’t be saved.  

Learn more about using API to [configure your stateful node](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeCreate).

To create the Stateful Node, click Create.

## What's Next?

* Learn how to [import a stateful node](managed-instance/azure/getting-started/import-stateful-node).
* Learn how to [manage your existing stateful nodes](https://docs.spot.io/managed-instance/azure/tutorials/manage?id=manage-stateful-nodes).  
