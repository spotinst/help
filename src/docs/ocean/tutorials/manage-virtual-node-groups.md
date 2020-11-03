# Manage Virtual Node Groups

[Virtual Node Groups](ocean/features/launch-specifications.md) (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.

This tutorial describes how to create, view, edit, and delete VNGs in Ocean.

## Relevance

The following procedures are relevant for users of Ocean Kubernetes on AWS.

## Prerequisites
* An Ocean cluster up and running

## Create a VNG

This procedure describes how to create a VNG from scratch.

1. In the console, go to Ocean/Cloud Clusters and click the Ocean Cluster you want to add a VNG to.
2. Click the Virtual Node Groups tab.

<img src="/ocean/_media/tutorials-manage-vngs-02.png" />

3. Click Create New Virtual Node Group.

<img src="/ocean/_media/tutorials-manage-vngs-03.png" />

4. Click Configure Manually (or [Import from an Autoscaling Group](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng-from-an-asg)) and Continue.
5. In the New Virtual Node Group page, enter the VNG parameters and click Save. The VNG parameters are described below.

<img src="/ocean/_media/tutorials-manage-vngs-02a.png" width="741" height="572" />

## Configuration Parameters
* Name: The name you assign to the new VNG.
* Image: The Amazon machine image (AMI) used for the VNG.
* Security Groups: The security groups that apply to the VNG. You can choose up to five groups as per the [AWS limitation](https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-security-groups).
* Subnets: The subnets that apply to the VNG. You can choose multiple subnets.
* Root Volume Size: The root volume size in GiB. This field and blockDeviceMappings cannot be used in the same VNG.
* Instance Profile: The iamRole object applicable to the instance profile.
* User Data (Startup Script): The user data script to be set in Base64-encoded MIME.

### Node Selection Parameters

This section enables you to inform Ocean about the labels and taints that are set on the nodes. When they are set, Ocean will use them to choose the right VNG for a pending pod.
* Node Labels: Key/Value pairs defined on the Kubernetes nodes.
* Node [Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/): Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

---
**Tip**: Be sure to label your instances according to your label selection:
For Kubernetes user data, see [Create Custom Labels](https://docs.spot.io/ocean/tutorials/create-custom-labels).

---

## Advanced Parameters
* Maximum Nodes: The upper limit number of instances that you can scale up to.
* Block Device Mapping: Block devices that are exposed to the instance. You can specify virtual devices and EBS volumes. This parameter and rootVolumeSize cannot be in the spec at the same time.
* Tags: Key and Value pairs used to apply tags on the EC2 machine. Specific tags can be applied per VNG.
* Headroom: Spare resource capacity management enabling fast assignment of Pods without waiting for new resources to launch.
* Reserve: The number of units to retain as headroom, where each unit has the defined headroom CPU and memory.
* CPU (millicpu): Optionally configure the number of CPUs to allocate to the headroom. CPUs are denoted in millicores, where 1000 millicores = 1 vCPU.
* Memory (MiB): Optionally configure the amount of memory (MiB) to allocate to the headroom.
* GPUs: Optionally configure the number of GPUs to allocate for headroom unit.

## Example 1: Run a Windows Node in a Linux Cluster

In this scenario, the default Ocean AMI will include a Linux OS, but for a specific pod, WinPod, a Windows image is required. To ensure that the pod is using a Windows image, do the following:

1. Configure your WinPod pod with a dedicated nodeSelector.

```json
apiVersion: v1
kind: Pod
metadata:
name: WinPod
spec:
  containers:
    - name: WinPodCon
      image: WinPodCon
      imagePullPolicy: IfNotPresent
  nodeSelector:
    runOnWin: true
```

2. Configure your Ocean cluster with a VNG that serves the WinPod nodeSelector label. (See the steps above in [Create a VNG](ocean/tutorials/manage-virtual-node-groups?id=create-a-vng).)
   1. In the VNG configuration, set the image to Windows OS.
   2. In the VNG configuration, go to Node Selection and define the following node label:
      ```
      Key: runOnWin
      Value: true
      ```
    3. Set the User Data script and label your nodes with the above label.

## Example 2: GPU Instance

If a pod requires a GPU instance, add the relevant GPU image in a VNG. Ocean will spin up instances accordingly. Specific labels are not required in this case. Example:

```
resources:
  limits:
    nvidia.com/gpu: 1
```

You don't need to add any extra label for GPU support. You can use taints that require your GPU-based pods to select the specific VNG that contains the GPU image.

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
* ID: The identification code of the VNG.
* Name: The user-defined name of the VNG. (If a VNG was defined without a time, it will appear in this column as Unnamed Virtual Node Group.)
* Resource Allocation: Percent of defined resources (CPU, Memory, and GPU) currently used by the VNG.
* Running Pods: Number of pods the VNG currently uses.
* Nodes: Number of nodes the VNG currently uses.
* Node Labels: Number of node labels the VNG uses.
* Node Taints: Number of taints the VNG uses.
* Tags: Number of tags the VNG uses.
* Max Nodes: The maximum number of nodes defined for the VNG.

You can change the sort order in the table by clicking on the column headings.

### Choose Columns

To choose which columns to display in the table, click the three dots on the right.

<img src="/ocean/_media/tutorials-manage-vngs-06.png" width="705" height="215" />

### Filter List

Use the search box to filter items in the table or search for a specific VNG.

### VNG Details

To see the configuration details of a VNG, click on the Name of the VNG.

## Edit a VNG

To edit the configuration of a VNG, go to the Virtual Node Groups tab and click on the Name of the VNG.
Make the required changes in the configuration and click Save.

## Delete a VNG
1. To delete a VNG, go to the Virtual Node Groups tab.
2. In the VNG summary table, mark the VNG(s) to delete and click Delete.

Alternatively, if you are already on the configuration page of a VNG, just click Delete VNG at the bottom.

## What’s Next?

Learn more about using VNGs in the API: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate).
