# Manage AWS Virtual Node Groups

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

This topic describes how to work with [virtual node groups (VNGs)](ocean/features/launch-specifications.md) for AWS Kubernetes.

Virtual node groups provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.

## Prerequisites

An Ocean cluster is up and running.

## Access the Virtual Node Groups Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **virtual node groups** tab

The virtual node groups tab lets you track live data per virtual node group. You can review the resource allocation, number of nodes and pods running, and other information about the virtual node groups.

![aws_vng-aws-list](https://github.com/user-attachments/assets/6bd98303-54ee-44c4-9f96-4bc89b7faa5f)

The virtual node groups Summary List displays the following columns:

* ID: The identification code of the virtual node group.
* Name: The user-defined name of the virtual node group. (If a virtual node group were defined without a name, it would appear as an Unnamed virtual node group.)
* Resource Allocation: Percent of defined resources (CPU, Memory, and GPU) currently running on nodes from this virtual node group.
* Running Pods: Number of pods the VNG currently uses.
* Max Nodes: The maximum number of nodes defined for the virtual node group.
* Node Count: Number of nodes the VNG currently uses.
* Node Labels: Number of node labels the virtual node group uses.
* Node Taints: Number of taints the virtual node group uses.
* Tags: Number of tags the virtual node group uses.

> Notes: 
> - Click the three dots on the right to select which columns to display in the list.
> - Use the search box to filter items in the list or search for a specific virtual node group.
> - To view the configuration details of a virtual node group, click on its Name.

## Create a Virtual Node Group

1. Click **Create VNG** in the virtual node groups tab.

![import-or-manual](https://github.com/user-attachments/assets/63cb8805-eb79-449c-858e-dc3d483bb473)

2. Select one of these options:
   *  Click **Configure Manually**
   *  For AWS Kubernetes only, select to import from an existing [Autoscaling Group](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng-from-an-asg).
   *  For EKS only, select to import from an existing node group.
3. Click **Continue**.

When you select Import, a one-time process occurs. Import copies values from the cloud provider node group entity to the Ocean configuration. Later, there is no active connection between these two entities. Ocean will provision new instance types, not as part of a managed Kubernetes service of node group entities.

4. Review all the virtual node group parameters (listed below) and update if necessary before saving.

>**Note**:
>- Parameters left blank use values from the default virtual node group.
>- To restore attributes to default (template) virtual node group values, click the **Restore to vng template values** for the field or list.

<img width="800" src="https://github.com/user-attachments/assets/d8a0a58e-5b62-47e6-9161-edff6d600431" />

## Configuration Parameters

* Name: The name you assign to the new virtual node group.
* Image: The Amazon machine image (AMI) used for the virtual node group.
* Security Groups: These are the security groups that apply to the virtual node group. As per the [AWS limitation](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-security-groups), you can select up to five groups.
* Subnets: The subnets that apply to the virtual node group. You can choose multiple subnets.
* Root Volume Size: The root volume size in GiB. This field and `blockDeviceMappings` cannot be used in the same VNG.
* Instance Profile: The iamRole object that applies to the instance profile.
* User Data (Startup Script): User data script to set in Base64-encoded MIME.

### Node Selection Parameters

This section lets you inform Ocean about the labels and taints set on the nodes. When they are set, Ocean will use them to select the right VNG for a pending pod.

* Node Labels: Key/Value pairs defined on the Kubernetes nodes.
* Node [Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/): Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

> **Important**: **You must enter custom labels in both the VNG Node Selection configuration and in the VNG User Data (Startup Script) configuration for the labels to take full effect. For Kubernetes user data, see [Create Custom Labels](https://docs.spot.io/ocean/tutorials/create-custom-labels).** 

## Advanced Parameters

* Maximum Nodes: The upper limit number of instances that you can scale up to.
* Minimum Nodes: 
* Spot %: The percentage of spot nodes used in the virtual node group.
* Restrict Scale-Down. When turned on, Ocean will not scale down nodes in this virtual node group for bin-packing purposes unless they are empty.
* Block Device Mapping: Block devices that are exposed to the instance. You can specify virtual devices and EBS volumes. This parameter and rootVolumeSize cannot be in the spec simultaneously.
* Tags: Key and Value pairs are used to apply tags to the EC2 machine. Specific tags can be applied per VNG.
* Headroom: Spare resource capacity management enabling fast assignment of Pods without waiting for new resources to launch.
  * Reserve: The number of units to retain as headroom, each with the defined headroom CPU and memory.
  * CPU (millicpu): You can optionally configure the number of CPUs to allocate to the headroom. CPUs are denoted in millicuries, where 1000 millicuries = 1 vCPU.
  * Memory (MiB): You can optionally configure the amount of memory (MiB) to allocate to the headroom.
  * GPUs: Optionally configure the number of GPUs to allocate for the headroom unit. 

## Example: GPU Instance

Add the relevant GPU image in a virtual node group if a pod requires a GPU instance. Ocean will spin up instances accordingly. Specific labels are not required in this case. Example:

```
resources:
  limits:
    nvidia.com/gpu: 1
```

You can use a node selector or node affinity that requires your GPU-based pods to select the specific virtual node group containing the GPU image based on the custom node label configured in the GPU virtual node group.

## Configure Instance Types

This section describes selecting instance types and sizes in your cluster per virtual node group (custom or template) according to your application needs.

1. In the virtual node groups tab, scroll down to the Instance Types panel and select one of the options:

  * Automatic: Let Ocean Autoscaler select your instance types and sizes according to your applications' needs. In this case, click **Save** to complete the procedure. 
  * Manual Selection: You can manually define a list of instance types from which Ocean can scale. See [Configure Instance Types Manually]()
  * Advanced Selection: Use multiple filters to optimize instance types and sizes based on your application needs (supports all families available on the [Amazon link](https://aws.amazon.com/ec2/instance-types/) cloud). See [Configure Instance Types Using Advanced Filters](). 

<img width="800" src="https://github.com/user-attachments/assets/5cd0bbb7-af8e-40ae-ba40-3b671de497bd" />

### Configure Instance Types Manually

![eks-manage-vngs](https://github.com/user-attachments/assets/4443dc84-eb72-4a58-9855-fa597b3776a2)

The instance types shown in the default virtual node group are only those supported in the cluster's region.

In other virtual node groups, Ocean automatically grays out instance types that are not selected in the default virtual node group or do not meet AMI architecture requirements for the specific virtual node group. Hover over the instance type to view the reason.

You can manually configure the instance types as follows:
  * Click a down arrow to see the available options and check/uncheck as required.
  
>**Note**: When you update the default virtual node group instance types, Ocean updates the Ocean cluster types because these have the same configuration.

### Configure Instance Types Using Advanced Filters

Before configuring with this option, consider the following limitations:

* If the default virtual node group (template) is set with `cluster.instanceTypes`.`filters != null` or `cluster.instanceTypes.whitelist/blacklist != null`, you cannot add filters on the custom virtual node group level. The **Advanced Selection** radio button is grayed with a tooltip on hover and a banner indicating the reason.
  1. Click **set to automatic** in the banner or the tooltip. The dialog that appears reflects the current configuration of the Template/Default VNG and the recommended change.
  2. Set the instanceTypes on the template/Default VNG to null and use filters on the custom virtual node group or accept the settings.
* If any custom VNG is set with `launchSpec.instanceTypesFilters!=null`, you cannot add a whitelist or filters on the template/default VNG level. The **Advanced Selection** and **Manual Selection** radio buttons are grayed, with a tooltip on hover and a banner indicating the reason.
need screen here with good example
  1. Click **view details** in the banner or the tooltip. The dialog that appears includes all the custom VNGs set with `launchSpec.instanceTypesFilters != null`
  2. If you want to set filters on the default virtual node group, click the virtual node group name and then configure by either **Manual Selection** or **Automatic Selection**.
  
<img width="1000" src="https://github.com/user-attachments/assets/cb469345-e56d-400d-9560-4e7df11fbcee" />

The Advanced instance types size filtering controls to the right of the instance types selection list let you filter the following attributes:

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

You can also configure these parameters via the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate)

## Edit a Virtual Node Group

* Click on the name of the virtual node group in the virtual node groups Summary List.

### Edit a Virtual Node Group in JSON Format

You can also review and edit the configuration directly in JSON format in the console. This provides more flexibility and enables you to utilize VNG features supported in the API without leaving the Ocean console. (These are usually new features that have been implemented in the API but are not yet accessible in the console.)

To edit in JSON format:

1.  Click on the name of the virtual node group in the virtual node groups Summary List, and click **JSON** on the upper right.
2.  Click **Edit Mode**, edit and save your changes.

![json-example-edit-mode](https://github.com/user-attachments/assets/13fd52bb-067b-44ba-a03f-139ef0e7d71b)

## Delete a VNG

In the virtual node groups summary list, check the virtual node groups to delete and click **Delete**.
OR
If you are already configuring a virtual node group, click **Delete VNG**.

