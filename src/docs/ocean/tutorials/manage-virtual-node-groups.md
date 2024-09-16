# Manage AWS Virtual Node Groups

Cloud service provider relevance: AWS Kubernetes and EKS

This topic describes how to work with Virtual Mode Groups for AWS Kubernetes.

[Virtual Node Groups](ocean/features/launch-specifications.md) (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.

## Prerequisites

An Ocean cluster is up and running.

## Access the Virtual Node Groups Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **Virtual Node Groups** tab

The Virtual Node Groups tab lets you track live data per Virtual Node Group. You can review the resource allocation, number of nodes and pods running, and other information about the Virtual Node Groups.

The Virtual Node Groups Summary List can display the following columns:

* ID: The identification code of the VNG.
* Name: The user-defined name of the VNG. (If a VNG was defined without a time, it will appear in this column as Unnamed Virtual Node Group.)
* Resource Allocation: Percent of defined resources (CPU, Memory, and GPU) currently used by the VNG.
* Running Pods: Number of pods the VNG currently uses.
* Nodes: Number of nodes the VNG currently uses.
* Node Labels: Number of node labels the VNG uses.
* Node Taints: Number of taints the VNG uses.
* Tags: Number of tags the VNG uses.
* Max Nodes: The maximum number of nodes defined for the VNG.

> Notes: 
> - Click the three dots on the right to select which columns to display in the list.
> - Use the search box to filter items in the list or search for a specific Virtual Node Group.
> - To view the configuration details of a Virtual Node Group, click on its Name.

## Create a Virtual Node Group

1. Click **Create VNG** in the Virtual Node Groups tab.

![import-or-manual](https://github.com/user-attachments/assets/63cb8805-eb79-449c-858e-dc3d483bb473)

2. Select one of these options:
   *  Click **Configure Manually**
   *  For AWS Kubernetes only, select to import from an existing [Autoscaling Group](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng-from-an-asg)
   *  For EKS only, select to import from an existing [node group](NEED LINK)
3. Click **Continue**.

When you select Import, a one-time process occurs. Import copies values from the cloud provider node group entity to the Ocean configuration. Later, there is no active connection between these two entities. Ocean will provision new VMs, not as part of a managed Kubernetes service of node group entities.
Review all of the parameters and update them if necessary before saving.

If you are configuring manually, see [New Virtual Node Group Page]()

### New Virtual Node Group Page

1. On the New Virtual Node Group page, enter the Virtual Node Group parameters you want to customize. Parameters left blank use values from the default VNG, as indicated in the illustration below.
2. After customizing the Virtual Node Group, click **Save**. The VNG parameters are described below.

![create-custom-vng](https://github.com/user-attachments/assets/1dd6db4f-b7e5-40fa-a5d9-26680179a59e)

## Configuration Parameters

* Name: The name you assign to the new Virtual Node Group.
* Image: The Amazon machine image (AMI) used for the Virtual Node Group.
* Security Groups: The security groups that apply to the VNG. You can choose up to five groups as per the [AWS limitation](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-security-groups).
* Subnets: The subnets that apply to the VNG. You can choose multiple subnets.
* Root Volume Size: The root volume size in GiB. This field and `blockDeviceMappings` cannot be used in the same VNG.
* Instance Profile: The iamRole object that is applicable to the instance profile.
* User Data (Startup Script): User data script to set in Base64-encoded MIME.

### Node Selection Parameters

This section lets you inform Ocean about the labels and taints set on the nodes. Ocean will use them to select the right VNG for a pending pod when they are set.

* Node Labels: Key/Value pairs defined on the Kubernetes nodes.
* Node [Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/): Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

> **Important**: **You must enter custom labels in both the VNG Node Selection configuration and in the VNG User Data (Startup Script) configuration for the labels to take full effect. For Kubernetes user data, see [Create Custom Labels](https://docs.spot.io/ocean/tutorials/create-custom-labels).** 

## Advanced Parameters

* Maximum Nodes: The upper limit number of instances that you can scale up to.
* Minimum Nodes: 
* Spot %: The percentage of spot nodes used in the Virtual Node Group.
* Restrict Scale-Down. When turned on, Ocean will not scale down nodes in this Virtual Node Group for bin packing purposes unless they are empty.
* Block Device Mapping: Block devices that are exposed to the instance. You can specify virtual devices and EBS volumes. This parameter and rootVolumeSize cannot be in the spec simultaneously.
* Tags: Key and Value pairs are used to apply tags to the EC2 machine. Specific tags can be applied per VNG.
* Headroom: Spare resource capacity management enabling fast assignment of Pods without waiting for new resources to launch.
  * Reserve: The number of units to retain as headroom, each with the defined headroom CPU and memory.
  * CPU (millicpu): You can optionally configure the number of CPUs to allocate to the headroom. CPUs are denoted in millicuries, where 1000 millicuries = 1 vCPU.
  * Memory (MiB): You can optionally configure the amount of memory (MiB) to allocate to the headroom.
  * GPUs: Optionally configure the number of GPUs to allocate for the headroom unit. 

## Example: GPU Instance

Add the relevant GPU image in a Virtual Node Group if a pod requires a GPU instance. Ocean will spin up instances accordingly. Specific labels are not required in this case. Example:

```
resources:
  limits:
    nvidia.com/gpu: 1
```

You can use a node selector or node affinity that requires your GPU-based pods to select the specific VNG containing the GPU image, based on the custom node label configured in the GPU VNG.

<img src="/ocean/_media/tutorials-manage-vngs-02-5.png" />


## Configure Instance Types per Virtual Node Group

This section describes selecting instance sizes in your cluster per Virtual Node Group (custom or template) according to your application needs. An advanced attributes filter lets you search for the optimal instances for the task from any of the families available on the [Amazon - LINK REQUIRED]() cloud. Once you have sized your instances, Ocean can use your customization to scale processes.

1. In the Virtual Node Groups tab, scroll down to the Instance Types panel and select one of the options:

  * Manual Selection: You can manually define a list of instance types from which Ocean can scale. See [Configure Instance Types Manually]()
  * Automatic: Let Spot select your instance types and sizes according to your applications' needs. In this case, click **Save** to complete the procedure.
  * Advanced Selection: Use attribute filters to select instance types with customized sizes from which Ocean can scale. See [Configure Instance Types Using Advanced Filters]()

![instance-types](https://github.com/user-attachments/assets/5cd0bbb7-af8e-40ae-ba40-3b671de497bd)

### Configure Instance Types Manually

![aws-instance-panel-man-selection](https://github.com/user-attachments/assets/d1f79716-509a-49c3-be33-7583a05c9ecb)

The instance types shown in the default Virtual Node Group are only those supported in the cluster's region.

In other Virtual Node Groups, Ocean automatically grays out instance types that are not selected in the default Virtual Node Group and instance types that do not meet AMI architecture requirements for the specific Virtual Node Group. Hover over the instance type to view the reason.

1. Click the name of the Virtual Node Group to configure.
2. Click COnfigure?????
3. Click a down arrow to see the available instance options. Check/uncheck options as required.

Click **Restore to Default** to restore the instance types in a Virtual Node Group to their default configuration.

* For the default VNG: The instance types are set to the default Ocean configuration to make all instance types available. Then, Ocean can choose any combination of instance types that best fits the workload requirements.
* For other Virtual Node Groups: The instance types are those available in the Default Virtual Node Group.

>**Note**: When you update the default Virtual Node Group instance types, Ocean updates the Ocean cluster types since these have the same configuration.

### Configure Instance Types Using Advanced Filters

![advanced-filtering](https://github.com/user-attachments/assets/cee0e71f-cdf0-4fec-a7d3-b97589ee7627)

In the VM Selection list, view each VM type's currently selected size, vCPU, Memory (GiB), and GPU units.
The Advanced VM Size Filtering controls to the right of the VM Selection list let you filter these attributes for the VMs:
  * Upper and lower limits for No. Of vCPUs (up to 256).
  * Upper and lower limits for the Memory (up to 1024 GiB).
  * Upper and lower limits for the No. Of GPUs (up to 8).
  * GPU type.
  * Exclude Series: You can exclude any series by clicking Exclude in the VM Selection List row for that series (or by typing the series in the Exclude Series field. The series then appears in the Exclude Series filter in the filtering controls.
  * Include Series: You can include VMs in the Include Series field. For example, to select a GPU type, include the series and VM types.
VM Types.
  * Architectures (values taken from your Virtual Node Group template).
  * Disk performance (standard or premium).
  * Minimum no of data disks (up to 64).
  * Minimum no. of NICs (up to 16).
  * Turn Accelerated networking on or off.
  * Click Apply to filter the VM Selection list. All your filters are applied to the VM list. A color-coded bar appears above the list to provide a rating for the applied filter.

## Instance Parameters Available via API

See [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate)

* Categories: One of the following: Accelerated_computing, Compute_optimized, General_purpose, Memory_optimized, Storage_optimized".
* Disk Types: NVMe, EBS, SSD, HDD.
* Excude Families: Types that will not be available for scaling (asterisk wildcard is also supported). For example, C* will exclude instance types from these families: c5, c4, c4a, etc.
* Exclude Metal: Metal types will not be available for scaling when set to true.
* Hypervisor TYpes: nitro, xen.
* Include Families: Types that will be available for scaling (asterisk wildcard is also supported). For example, C* will include instance types from these families: c5, c4, c4a, etc.
* Ena Support: Ena support when set to True.
* Max GPU: Maximum total number of GPUs.
* Min. GPUs: Minimum total number of GPUs.
* Max. Memory (GIB): Maximum amount of Memory (GiB).
* Min. Memory (GiBs): Minimum amount of Memory (GiB).
* Max. Network Performance: Maximum Bandwidth in Gib/s of network performance.
* Min. Network Performance: Minimum Bandwidth in Gib/s of network performance.
* Max. vCPU: Maximum number of vCPUs available.
* Min. vCPU: Minimum number of vCPUs available.
* Min. ENIs: Minimum number of network interfaces (ENIs).

## Edit a Virtual Node Group

* Click on the name of the Virtual Node Group in the Virtual Node Groups Summary List.

### Edit a Virtual Node Group in JSON Format

You can also review and edit the configuration directly in JSON format in the console. This provides more flexibility and enables you to utilize VNG features supported in the API without leaving the Ocean console. (These are usually new features that have been implemented in the API but are not yet accessible in the console.)

* Click on the name of the Virtual Node Group in the Virtual Node Groups Summary List, and click **JSON** on the upper right.

<img src="/ocean/_media/tutorials-manage-vngs-07.png" />

In this view, you can see the full JSON configuration of the VNG. If you would like to edit the JSON, just click Edit Mode, make your changes, and click Save.

## Delete a VNG

In the Virtual Node Groups summary list, check the Virtual Node Groups to delete and click **Delete**.
OR
If you are already configuring a Virtual Node Group, click *8Delete VNG** at the bottom.

