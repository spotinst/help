# Create an Elastigroup for Azure

This procedure describes how to create an Elastigroup from scratch in Azure.

## Prerequisite

Before you can start, you must connect your Azure account to Spot. For more information, see [Connect your Azure Account](connect-your-cloud-provider/azure-account).

## Get Started

1. In the Spot Console under Elastigroup, click Groups.
2. Click Create Elastigroup.

<img src="/elastigroup/_media/gettingstarted-eg-azure-01.png" />

The Creation Wizard has the following major parts that you will complete:

- General
- Compute
- Scaling
- Review

## Step 1: General

Enter the information described below. Required fields are indicated with an asterisk (\*).

### Basic Settings

- Elastigroup Name. Enter a name for the Elastigroup. We recommend using a naming convention based on the specific workload the Elastigroup will manage, for example dev-eu1-worker.
- Description: Add a few words indicating the purpose of this Elastigroup.

<img src="/elastigroup/_media/gettingstarted-eg-azure-02.png" />

### Capacity Settings

- Target. The number of low priority VMs in your Elastigroup.
- Minimum. In the case of a scale down policy action, this is the minimum number of low priority VMs that must run in the group. The minimum acceptable value is 0.
- Maximum. In the case of a scale up policy action, this is the maximum number of low priority VMs allowed in the group. The minimum acceptable value is 0.

Choose one of the following:

- On-Demand Count. The number of on-demand VMs to include in the Elastigroup.
- % Spot-VMs. The percentage of low priority VMs to include in the Elastigroup. Use the slider to set the percent. The remaining percentage will be on-demand instances.

### Availability Settings

- Draining Timeout. Set the amount of time (seconds) that Elastigroup will allow to de-register and drain VMs before termination.
- Cluster Orientation. Specify the prediction algorithm strategy. You can choose for the following:
  - Availability. VM selection will be performed to ensure the best market availability within your Elastigroup.
  - Cost. VM types will be prioritized by their costs so the selection is based on this list using availability considerations.
  - Cheapest. VM selection will be performed by launching the cheapest instances at any time.
- Fallback to On-Demand. Elastigroup provides a fallback mechanism in case no spot VMs are available. Mark this option if you would like the option to automatically fall back to an on-demand VM in such a case.
- Continuous Optimization. Choose when Elastigroup may move workloads from on-demand to spot VMs. You may choose from:
  - Once Available. Elastigroup moves the workloads when your spot VM types become available.
  - Custom. Define one or more time windows in which you allow the move.

<img src="/elastigroup/_media/gettingstarted-eg-azure-02b.png" />

When you have completed the information in the General tab, click Next to continue.

## Step 2: Compute

### Operating System and VM Sizes

- Resource Group. Choose a resource group.
- Operating System. Choose the OS that will run on your VMs.
- Region. Choose the Azure region the VMS will run in.
- Availability Zones. Choose one or more availability zones where your VMs will be allowed to run. It is highly recommended to choose multiple availability zones to further diversify the spot markets available to the Elastigroup.
- On-Demand VM-Sizes. Choose the regular priority VMs sizes within the Elastigroup. These are used in the event that no Low-Priority VMs are available in the sizes requested. Ensure the selected VMs are available in the desired region.
- Spot-VM Sizes. Select the low priority VM sizes to be available for the Elastigroup. Ensure the selected VM size is available in the desired Region.

> **Tip**: To maximize cost savings, provide the Elastigroup with all possible low-priority VM sizes compatible with the expected workload. The more VM sizes, the better the odds Elastigroup will find an available low-priority VM to run on.

<img src="/elastigroup/_media/gettingstarted-eg-azure-02a.png" />

### Image

Choose one of the following types of images:

- [Marketplace](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/cli-ps-findimage). An image available in the Azure Marketplace. You will need to select options from each of the following dropdowns:
  - Publisher. The organization that created the image.
  - Offer. The name of a group of related images created by a publisher. Examples: UbuntuServer, WindowsServer.
  - SKU. An instance of an offer, such as a major release of a distribution. Examples: 18.04-LTS, 2019-Datacenter.
- Custom. One of your custom made VM Images. You will need to select options from each of the following dropdowns:
  - Image Resource Group. A list of Resource Groups associated with your subscription.
  - [Image Name](https://docs.microsoft.com/en-us/dynamics-nav/how-to--get-the-microsoft-azure-image-name). This is the label that is assigned to the image.
- [Shared Image](https://docs.microsoft.com/en-us/azure/virtual-machines/shared-image-galleries). Enables you to create an Elastigroup with an image from your organization’s Shared Image Gallery. You will need to select options from each of the following dropdowns:
  - Image Resource Group. A list of Resource Groups associated with your subscription.
  - Gallery Name. The list of shared gallery names associated with the selected Resource Group.
  - Image Name. List of shared images associated with the selected Gallery. See below for more information.
  - Version. The available versions of the selected Image. These will be versions that are available in your selected region. If you need the most recent version, choose Latest from the list.

<img src="/elastigroup/_media/gettingstarted-eg-azure-031.png" />

#### Image Name

All of the image names in the dropdown list have the OS that you chose under Operating System and VM Sizes.

Images are indicated as Generalized or Specialized. When you choose a Specialized image, the following applies:

- You will not specify Login information for the image.
- Custom Data will not be available.

### Network

Enter the information for your network interface. You can define additional network interfaces as needed.

- Vnet Resource Group. Select the Vnet Resource group you want your Elastigroup Scale Sets to be a part of.
- Virtual Network. Select the specific Virtual Network (VN) for your Elastigroup.
- Set as Primary. The main network interface attached to the VM.
- Subnet ID. Select the specific Subnet inside your VN.
- Resource Group. The resource group where the network interface will be created.
- Network Security Group. The network security group to associate with the VM.

<img src="/elastigroup/_media/gettingstarted-eg-azure-03b.png" width="514" height="301" />

- Application Security Group: Provides security micro-segmentation virtual networks in Azure and enables you to define network security policies based on workloads (i.e., applications) instead of explicit IP addresses. Choose one or more application security groups the Elastigroup should belong to.

  <img src="/elastigroup/_media/gettingstarted-eg-azure-03c.png" width="331" height="171" />

  Note that the items appearing in the list of application security groups depend on the Virtual Network that you choose and may be different in each network.

- Assign Public IP. Mark this checkbox if you want VMs in this Elastigroup to launch with a Public IP. You will then need to choose one or more Static Public IPs from the dropdown list. The list will include IPs only from AZs that you have chosen for the Elastigroup.

<img src="/elastigroup/_media/gettingstarted-eg-azure-03d.png" width="273" height="362" />

#### More on Choosing Public IPs

In order to minimize ad hoc creation of new IPs on VM launchers, the following is recommended:

- Choose IPs that are indicated as No zone/Zone redundant. These will ensure the most AZ flexibility.
- The optimal number of public IPs for the pool is twice your maximum capacity. For example, if your maximum capacity is 6 VMs, then choose at least 12 public IP addresses.
- If you choose zonal IPs (e.g., in zones 1, 2, 3), then distribute them equally across the zones.

### Login

- User Name. Specify the user name you wish to SSH the VM's with.
- Windows Password. The password you use for your Windows login.

> **Tip**: When a Specialized Shared [Image](elastigroup/getting-started/create-an-elastigroup-for-azure?id=image) is specified, you do not need to specify login information.

### Additional Configuration (optional)

- Managed Identity. Select the Managed Identity for your VMSS instances.
- Tags. Add tag keys and values you want associated with the Elastigroup VMs.
- Custom Data. Custom data is useful for launching VMs with all required configurations and software installations. Elastigroup can load custom user data (i.e., custom scripts) during the provisioning of VMs. When a Specialized Shared Image is specified, Custom Data is not available.
- Shutdown Script. You can configure a shutdown script, but this requires an agent to be installed on the instance. [Learn more](elastigroup/features/azure/shutdown-script-in-elastigroup-for-azure).

<img src="/elastigroup/_media/gettingstarted-eg-azure-05.png" />

### Load Balancers (optional)

You can add a load balancer. Elastigroup will automatically register new VMs to the configured load balancer.

<img src="/elastigroup/_media/gettingstarted-eg-azure-03aa.png" />

## Step 3: Scaling

Optionally, create scaling policies for your Elastigroup based on Azure Monitor metrics. A policy can be for scale up or scale down.

To create a scaling policy, complete the following steps.

1. Click Add Policy.
2. Set policy name.
3. Specify a Namespace (default is Microsoft.Compute).
4. Set scale based on values: Choose Trigger (Metric Name), Behavior.
5. Set Duration to determine the number of tests (and duration between them) to activate the policy.
6. Choose the action type:
   - Adjustment. Will add instances on up scaling and remove on down scaling policies. You need to set the number of instances.
   - Set the minimum target.
   - Update Capacity. In terms of Target Minimum and Maximum.
   - Percentage Adjustment. Add or Remove a percentage of the group active capacity, for Up and Down scaling respectively.
7. Cool-down.
   - Wait Period is the time (in seconds) that all scaling activities will be suspended after the scaling policy is triggered.

<img src="/elastigroup/_media/gettingstarted-eg-azure-06.png" />

## Step 4: Review

1. Review your configuration in JSON format in the Review tab. You can edit the JSON directly by switching on Edit mode.

<img src="/elastigroup/_media/gettingstarted-eg-azure-07.png" />

2. To create the Elastigroup, click Create.

## What's Next?

Learn how to:

- [Import Existing Azure Resources](elastigroup/azure/getting-started/import-an-existing-azure-resource.md) such as a Scale Set, an Application Gateway, or a VM.
- [Clone an Existing Elastigroup](elastigroup/tutorials/azure/clone-an-existing-elastigroup).
