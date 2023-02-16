# Manage Virtual Node Groups

[Virtual Node Groups](ocean/features/launch-specifications.md) (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.

This tutorial describes how to create, view, edit, and delete VNGs in Ocean.

## Relevance

The following procedures are relevant for users of Ocean Kubernetes on AWS.

## Prerequisites

- An Ocean cluster up and running

## Create a VNG

This procedure describes how to create a VNG from scratch.

1. In the console, go to Ocean/Cloud Clusters and click the Ocean Cluster you want to add a VNG to.
2. Click the Virtual Node Groups tab.

<img src="/ocean/_media/tutorials-manage-vngs-02.png" width="719" height="262" />

3. Click Create New Virtual Node Group.

<img src="/ocean/_media/tutorials-manage-vngs-03.png" />

4. Click Configure Manually or choose to import from an existing [Autoscaling Group](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng-from-an-asg) (AWS) or Node Pool (AKS and GKE).
5. Click Continue.

When you choose Import, a one-time process occurs. Import copies values from the cloud provider node group entity to the Ocean configuration. Afterwards, there is no active connection between these two entities. Ocean will provision new VMs, not as part of a managed Kubernetes service of node group entities.

### New Virtual Node Group Page

1. In the New Virtual Node Group page, enter the VNG parameters you want to customize. Parameters that are left blank use values from the default VNG, as indicated in the illustration below.
2. When you have finished customizing the VNG, click Save. The VNG parameters are described below.

<img src="/ocean/_media/tutorials-manage-vngs-02a1.png" width="496" height="433" />

## Configuration Parameters

- Name: The name you assign to the new VNG.
- Image: The Amazon machine image (AMI) used for the VNG.
- Security Groups: The security groups that apply to the VNG. You can choose up to five groups as per the [AWS limitation](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-security-groups).
- Subnets: The subnets that apply to the VNG. You can choose multiple subnets.
- Root Volume Size: The root volume size in GiB. This field and blockDeviceMappings cannot be used in the same VNG.
- Instance Profile: The iamRole object applicable to the instance profile.
- User Data (Startup Script): The user data script to be set in Base64-encoded MIME.

### Node Selection Parameters

This section enables you to inform Ocean about the labels and taints that are set on the nodes. When they are set, Ocean will use them to choose the right VNG for a pending pod.

- Node Labels: Key/Value pairs defined on the Kubernetes nodes.
- Node [Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/): Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

> **Important**: **You must enter custom labels in both the VNG Node Selection configuration and in the VNG User Data (Startup Script) configuration for the labels to take full effect. For Kubernetes user data, see [Create Custom Labels](https://docs.spot.io/ocean/tutorials/create-custom-labels).** 

## Advanced Parameters

- Maximum Nodes: The upper limit number of instances that you can scale up to.
- Block Device Mapping: Block devices that are exposed to the instance. You can specify virtual devices and EBS volumes. This parameter and rootVolumeSize cannot be in the spec at the same time.
- Tags: Key and Value pairs used to apply tags on the EC2 machine. Specific tags can be applied per VNG.
- Headroom: Spare resource capacity management enabling fast assignment of Pods without waiting for new resources to launch.
- Reserve: The number of units to retain as headroom, where each unit has the defined headroom CPU and memory.
- CPU (millicpu): Optionally configure the number of CPUs to allocate to the headroom. CPUs are denoted in millicores, where 1000 millicores = 1 vCPU.
- Memory (MiB): Optionally configure the amount of memory (MiB) to allocate to the headroom.
- GPUs: Optionally configure the number of GPUs to allocate for headroom unit.

## Example: GPU Instance

If a pod requires a GPU instance, add the relevant GPU image in a VNG. Ocean will spin up instances accordingly. Specific labels are not required in this case. Example:

```
resources:
  limits:
    nvidia.com/gpu: 1
```

You can use a node selector or node affinity that requires your GPU-based pods to select the specific VNG containing the GPU image, based on the custom node label configured in the GPU VNG.

## Choose Instance Types per VNG

To choose spot instance types for a specific VNG, do the following:

1. Go to Clusters in the left menu tree and click the name of the relevant Ocean cluster.
2. Click the Virtual Node Groups tab and click the name of the relevant VNG in the list.

<img src="/ocean/_media/tutorials-manage-vngs-02-1.png" />

3. In the VNG page, scroll down until you see Instance Types and click Customize Instance Types.

<img src="/ocean/_media/tutorials-manage-vngs-02-2.png" />

4. Complete the Instance Types configuration as described below and then click Save.

### Configure Instance Types

The instance types shown in the default VNG are only the instance types supported in the region that the cluster is configured in.

In the custom VNGs, Ocean automatically filters out instance types that are not selected in the default VNG and instance types that do not meet the AMI architecture of the custom VNG.

<img src="/ocean/_media/tutorials-manage-vngs-02-3.png" />

1. Click an arrow to see the available instance options.
2. Unmark the available options, as needed.

The instance types that are grayed out are disabled for the following reasons:

- Does not exist in the default VNG.
- Does not fit the AMI architecture.

When you hover the cursor over the instance type, a tooltip appears stating which reason.

### Use the Sliders

Instead of unmarking individual instances, you can use the vCPU, memory, or GPU sliders. When you use these, the instance types that are not in the range will be unmarked automatically.

<img src="/ocean/_media/tutorials-manage-vngs-02-4.png" />

Above the sliders, Instance Types Selected indicates how many of the available instances you have marked (specifically: number of instances marked/number of instances available). This figure changes automatically when you move the sliders or when click or unclick instances. There are similar indicators in the Types column. For example, the illustration above shows that you have marked two Compute Optimized instances out of four that are available.

### Restore to Default

To restore the instance types in a VNG to the default configuration, click Restore to Default. This behaves as follows:

- For a Custom VNG: The instance types are set to all the instance types that are available in the Default VNG.
- For Default VNG: The instance types are set to the default Ocean configuration, which means that all instance types are available. Then Ocean can choose any combination of instance types that best fit the workload requirements.

Note that when you update the default VNG instance types, Ocean actually updates the Ocean cluster types since these have the same configuration.

<img src="/ocean/_media/tutorials-manage-vngs-02-5.png" />

## Create a VNG from an ASG

The following procedure describes how to create a VNG in an Ocean cluster using the configuration from an existing Amazon autoscaling group. This process is referred to as importing a VNG from an ASG.

1. In the console, go to Ocean/Cloud Clusters and click the Cluster Name you want to add a VNG to.
2. In the summary page for the cluster, click Virtual Node Groups.
3. Click Create New Virtual Node Group.
4. Choose Import configurations from an Autoscaling Group, choose the Autoscaling Group in the dropdown list, and click Continue.

<img src="/ocean/_media/tutorials-manage-vngs-04.png" width="394" height="226" />

5. When the New Virtual Node Group page appears, you will see the fields populated with the values from the Autoscaling Group you chose. Review all of the parameters and update them if necessary.
6. When you are finished reviewing and updating the imported configuration, click Save.

## View VNGs

Ocean provides a dashboard that enables you to track live data per VNG. You can review the resource allocation, number of nodes and pods running, and other information about the VNGs.

1. In the console, go to Ocean/Cloud Clusters and click the Cluster you want to add a VNG to.
2. Click the Virtual Node Groups tab. The Virtual Node Groups tab opens and displays a summary of all the VNGs defined in the Ocean cluster.

<img src="/ocean/_media/tutorials-manage-vngs-05.png" />

### VNG Summary Table

The VNG summary table can display the following columns:

- ID: The identification code of the VNG.
- Name: The user-defined name of the VNG. (If a VNG was defined without a time, it will appear in this column as Unnamed Virtual Node Group.)
- Resource Allocation: Percent of defined resources (CPU, Memory, and GPU) currently used by the VNG.
- Running Pods: Number of pods the VNG currently uses.
- Nodes: Number of nodes the VNG currently uses.
- Node Labels: Number of node labels the VNG uses.
- Node Taints: Number of taints the VNG uses.
- Tags: Number of tags the VNG uses.
- Max Nodes: The maximum number of nodes defined for the VNG.

You can change the sort order in the table by clicking on the column headings.

### Choose Columns

To choose which columns to display in the table, click the three dots on the right.

<img src="/ocean/_media/tutorials-manage-vngs-06.png" width="705" height="215" />

### Filter List

Use the search box to filter items in the table or search for a specific VNG.

### VNG Details

To see the configuration details of a VNG, click on the Name of the VNG.

## Edit a VNG

1. To edit the configuration of a VNG, go to the Virtual Node Groups tab and click on the Name of the VNG.
2. Make the required changes in the configuration and click Save.

### Edit in JSON Format

In the console, you can also review and edit the configuration directly in JSON format. This provides more flexibility and enables you to utilize VNG features that are supported in the API without leaving the Ocean console. (These are usually new features that have been implemented in the API, but are not yet accessible in the UI.)

1. To review and edit a VNG in JSON format, go to the Virtual Node Groups tab and click on the Name of the VNG.
2. Click JSON on the upper right.

<img src="/ocean/_media/tutorials-manage-vngs-07.png" />

In this view, you can see the full JSON configuration of the VNG. If you would like to edit the JSON, just click Edit Mode, make your changes, and click Save.

## Delete a VNG

1. To delete a VNG, go to the Virtual Node Groups tab.
2. In the VNG summary table, mark the VNG(s) to delete and click Delete.

Alternatively, if you are already on the configuration page of a VNG, just click Delete VNG at the bottom.

## What’s Next?

Learn more about using VNGs in the API: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate).
