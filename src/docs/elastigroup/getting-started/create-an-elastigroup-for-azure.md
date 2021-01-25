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
- Azure Region. Choose a region the Elastigroup will run in.
- Resource Group. Choose a resource group.

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
- Fallback to On-Demand. Elastigroup provides a fallback mechanism in case no Spot-VMs are available. Mark this option if you would like the option to automatically fall back to an on-demand instance in such a case.

When you have completed the information in the General tab, click Next to continue.

## Step 2: Compute

### Operating System and VM Sizes

- Operating System. Choose the OS that will run on your VMs.
- On-Demand VM-Sizes. Choose the regular priority VMs sizes within the Elastigroup. These are used in the event that no Low-Priority VMs are available in the sizes requested. Ensure the selected VMs are available in the desired region.
- Spot-VM Sizes. Select the low priority VM sizes to be available for the Elastigroup. Ensure the selected VM size is available in the desired Region.

> **Tip**: To maximize cost savings, provide the Elastigroup with all possible low-priority VM sizes compatible with the expected workload. The more VM sizes, the better the odds Elastigroup will find an available low-priority VM to run on.

<img src="/elastigroup/_media/gettingstarted-eg-azure-03.png" />

### Image

Choose one of the following types of images:

- Marketplace. An image available in the Azure Marketplace.
- Custom. One of your custom made VM Images.

### Network Interfaces

- Vnet Resource Group. Select the Vnet Resource group you want your Elastigroup Scale Sets to be a part of.
- Virtual Network. Select the specific Virtual Network (VN) for your Elastigroup.
- Set as Primary. The main network interface attached to the VM.
- Subnet ID. Select the specific Subnet inside your VN.
- Resource Group. The resource group where the network interface will be created.
- Security Group. The network security group to associate with the VM.
- Assign Public IP. Mark this checkbox if you want VMs in this Elastigroup to launch with a Public IP. Choose Basic or Standard.

You can define additional network interfaces as needed.

<img src="/elastigroup/_media/gettingstarted-eg-azure-04.png" width="450" height="400" />

### Login

- User Name. Specify the user name you wish to SSH the VM's with.
- Windows Password. The password you use for your Windows login.

### Additional Configuration (optional)

- Managed Identity. Select the Managed Identity for your VMSS instances.
- Tags. Add tag keys and values you want associated with the Elastigroup VMs.
- Custom Data. Custom data is useful for launching VMs with all required configurations and software installations. Elastigroup can load custom user data (i.e., custom scripts) during the provisioning of VMs.
- Shutdown Script. You can configure a shutdown script, but this requires an agent to be installed on the instance. [Learn more](elastigroup/features/azure/shutdown-script-in-elastigroup-for-azure).

<img src="/elastigroup/_media/gettingstarted-eg-azure-05.png" />

### Load Balancers (optional)

You can add a load balancer. Elastigroup will automatically register new VMs to the configured load balancer.

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
