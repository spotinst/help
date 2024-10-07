# Manage Virtual Node Groups (AKS)

Virtual Node Groups (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster. 
This topic describes how to create, view, edit, and delete virtual node groups in Ocean. See also [Default Virtual Node Group](https://docs.spot.io/ocean/features/vngs/?id=default-virtual-node-group).

>**IMPORTANT:** Before starting, make sure you have an up-and-running Ocean cluster.

## Access the Virtual Node Group Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **Virtual Node Groups** tab to display the virtual node groups list.

<details>
   <summary markdown="span">Click for image</summary>
  
![aks-vng-list-1](https://github.com/user-attachments/assets/022151e5-b902-4dca-937c-49ee30696e24)

</details>
  
This list lets you track live data per virtual node group and contains the following information:
*  ID: The identification code of the virtual node group.
*  Name: The user-defined name of the virtual node group. (If a virtual node group was defined without a name, it would appear as Unnamed).
*  Resource Allocation: Percent of defined CPU, Memory, and GPU currently used by the virtual node group.
*  Running Pods: Number of pods used by the virtual node group.
*  Nodes: Number of nodes used by the virtual node group.
*  Node Labels: Number of node labels the virtual node group uses.
*  Node Taints: Number of taints used by the virtual node group.
*  Tags: Number of tags used by the virtual node group.
*  Max Nodes: Maximum number of nodes defined for the virtual node group.

## Create/Edit a Virtual Node Group

To create/edit a Virtual Node Group:

1. In the Virtual Node Groups tab, click **Create VNG** above the list on the right of the screen (or to edit an existing virtual node group, click the link on the virtual node group's name in the list).
2. If you are creating a virtual node group, select one of these options.
   * Configure Manually: All virtual node group fields will be taken from the virtual node group Template.
   * Import configurations from Node Pools: Values are copied from the cloud service provider node group entity to the Ocean configuration. Later, there will be no active connection between these two entities. Ocean will provision new VMs, not as part of a managed Kubernetes service of node group entities.
  
![aks-create-vng-dialog](https://github.com/user-attachments/assets/2ef75104-baf7-45a4-a661-80c564167a40)

3. Click **Continue**.
4. Edit the parameters in the New Virtual Node Group screen. Parameters left blank take values from the virtual node group template.

<details>
   <summary markdown="span">Click for image</summary>
 
  ![aks-new-vng](https://github.com/user-attachments/assets/9e5f9916-8737-4df3-8967-64de04c32600)

</details>

### General Parameters

* Name: The name you assign to the new Virtual Node Group.
* Availability Zones.

### Node Pool Properties

* OS Type and OS SKU.
* OS Disk Type.
* OS Disk Size (up to 2048 GiB). Minimum requirement. Ocean selects a node with at least this size.
* Maximum # pods per node. (from 10 to 250).
* Node Public IP.
* Kubernetes Version.

### Ocean Autoscaler Configuration

* Minimum and maximum nodes for autoscaling.
* Spot %: Percentage of spot nodes you want in the virtual node group.
* Fallback to Regular: Turn on to allow Ocean to launch regular (on-demand) nodes when spot markets are unavailable.

>**Edge case** You may have configured virtual node groups with either Spot % to 100 or turned off Fallback to Regular but still have regular nodes running on them. This occurs for regular nodes from the kube-system namespaces. Kube system pods are mission-critical AKS pods that allow the cluster to function correctly.

![regular-kube](https://github.com/user-attachments/assets/5b2b8e03-7c29-48a2-940f-6aa93dcc21db)

### VM Selection

Here, you can select VM sizes in your cluster per virtual node group (custom or template) that fit your application needs. An advanced attributes filter lets you search for the optimal VMs for the task from any of the VM families available on the [Azure cloud](https://learn.microsoft.com/en-us/azure/virtual-machines/sizes/overview?tabs=breakdownseries%2Cgeneralsizelist%2Ccomputesizelist%2Cmemorysizelist%2Cstoragesizelist%2Cgpusizelist%2Cfpgasizelist%2Chpcsizelist). Once you have sized your VMs, Ocean uses your customization for its scaling processes.

To select the VMs for your Cluster:

1. Scroll down to the **VM Selection** panel, which provides these options:

   * Automatic: Let Spot select your VM sizes according to the needs of your applications.
   * Advanced VM Size Selection: Use attribute filters to select VMs with customized sizes from which Ocean can scale.

![aks-vng-vmsel-options](https://github.com/user-attachments/assets/b2cc113b-5a04-4d14-b329-f3b0529414ae)

2. If you selected **Automatic**, click **Save** to complete the procedure.
3. If you selected **Advanced VM Size Selection**: View each VM type's currently selected size, vCPU, Memory (GiB), and GPU units in the VM Selection list.

![aks-vngs-vms-advanced](https://github.com/user-attachments/assets/4ed5d4a7-f17a-4c07-8093-46d8144fc3b3)

The Advanced VM Size Filtering controls to the right of the VM Selection list let you filter these attributes for the VMs:
   * Upper and lower limits for No. Of vCPUs (up to 256).
   * Upper and lower limits for the Memory (up to 1024 GiB).
   * Upper and lower limits for the No. Of GPUs (up to 8).
   * GPU type.
   * Exclude Series: You can exclude any series by clicking Exclude in the VM Selection List row for that series (or by typing the series in the Exclude Series field. The series then appears in the Exclude Series filter in the filtering controls.
   * Include Series: You can include VMs in the Include Series field. For example, to select a GPU type, include the series and VM types.
   * VM Types.
   * Architectures (values taken from your virtual node group template).
   * Disk performance (standard or premium).
   * Minimum no of data disks (up to 64).
   * Minimum no. of NICs (up to 16).
   * Turn Accelerated networking on or off.

5. Click **Apply** to filter the VM Selection list. All your filters are applied to the VM list. A color-coded bar appears above the list to provide a rating for the applied filter.

>**Note**: An error is displayed if you define an incorrect VM type.

5. Repeat the previous steps until you are satisfied with the results.
6. Save the changes for the Virtual Node Group.

### Node Labels and Taints

Configure the Node Selection parameters. When the nodes' labels and taints are set, Ocean uses them to select the right virtual node group for a pending pod.

* Node Labels: Key/Value pairs defined on the Kubernetes nodes.
* Node Taints: Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

### Advanced Properties

* Tags: Key and Value pairs apply tags to the VM. Specific tags can be applied per virtual node group.
* Headroom: Spare resource capacity management enabling fast assignment of Pods without waiting for new resources to launch.
  * Reserve: The number of units to retain as headroom, each with the defined headroom CPU and memory.
  * CPU (millicpu): You can optionally configure the number of CPUs to allocate to the headroom. CPUs are denoted in millicuries, where 1000 millicuries = 1 vCPU.
  * Memory (MiB): You can optionally configure the amount of memory (MiB) to allocate to the headroom.
  * GPUs: Optionally configure the number of GPUs to allocate for the headroom unit.

Example: GPU Instance

If a pod requires a GPU node, add the relevant GPU image in a virtual node group so Ocean can spin up nodes. Specific labels are not required in this case.

```
resources:
  limits:
    nvidia.com/gpu: 1
```

You can use a node selector or node affinity that requires your GPU-based pods to select the specific VNG containing the GPU image based on the custom node label configured in the GPU virtual node group.

## Editing a Virtual Node Group in JSON View

In the console, you can optionally review and edit the VNG configuration in JSON format. This provides more flexibility and lets you use VNG features that are supported in the Spot API without leaving the Ocean console. (These are often new features available in the Spot API but are not yet available in the console).

1. Click the **Virtual Node Groups** tab.
2. Click the link on the name of the virtual node Group in the list.
3. Click **JSON** on the upper right.

```
{
  "name": "vngname",
  "oceanId": "o-66963661",
  "availabilityZones": [
    "1"
  ],
  "nodePoolProperties": {
    "kubernetesVersion": null,
    "maxPodsPerNode": 110,
    "enableNodePublicIP": false,
    "osDiskSizeGB": 128,
    "osDiskType": "Ephemeral",
    "osType": "Linux",
    "osSKU": "Ubuntu"
  },
  "nodeCountLimits": {
    "minCount": 0,
    "maxCount": 1000
  },
  "strategy": {
    "spotPercentage": 100,
    "fallbackToOd": true
  },
  "autoScale": {
    "headrooms": []
  },
  "labels": {},
  "taints": [],
  "tags": {},
  "vmSizes": {
    "filters": {
      "architectures": [
        "X86_64"
      ]
    }
  }
}
```

4. Edit the JSON and save your changes.

You can switch between Form (console) and JSON views multiple times, make changes separately in each view, and then click **Save All**.

## Delete a VNG

In the virtual node groups list, check the groups you want to delete and click **Delete**. 
If you are already configuring a virtual node group, click **Delete VNG** at the bottom of the screen.



