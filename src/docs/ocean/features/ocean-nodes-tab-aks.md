<meta name="robots" content="noindex">

#  AKS Nodes

## View Nodes in the Console

To access the Nodes tab:
* Click **Ocean > Cloud Clusters** on the left main menu.
* Select a cluster from the list of clusters.
* Click the **Nodes** tab.

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Click to view image</summary>

   <div style="padding-left:16px">

  <img width="1200" src="https://github.com/user-attachments/assets/45be4f9e-c4c1-4cf3-80c3-7e0c6f353fd2" />

   

</div>

</details>

The nodes list contains these columns:

* Node Name
* Virtual Node Group: Click on the link to open the configuration for the virtual node group.
* Node Pool: Click on the link to open the configuration for the node pool.
* Availability Zone: Availability zone for the node pool.
* VM Size: Machine type.
* OS Image: Image name.
* Lifecycle: Regular or spot.
* Pods

The following filters above the table let you search according to one or more filter criteria:

* Workload requirements:
  * Node lifecycle: regular
  * PDB
  * Required VM Type
  * Restrict scale-down
  * Required zone

* Reason for regular
  * Risk
  * Missing spot tolerations
  * Fallback to regular
 
## Roll Nodes

### Roll Parameters

*   **Respect Pod Disruption Budget (PDB)**: Some pods may have a Pod Disruption Budget (PDB). In the Spot API, use `respectPdb` to instruct Ocean to verify the PDB. When `respectPdb` is set to True, Ocean will not replace a node if the PDB is violated.

*   **Respect Restrict Scale Down during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will replace a node even if a task or pod uses this label. Ocean's autoscaler considers all configured constraints before the roll.

*   **Roll Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be rolled during a node pool update or scale operation. For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes). 

*   **Batch Size Healthy Percentage**: indicates the minimum percentage of healthy instances in a single batch.
    The roll will fail if the number of healthy instances in a single batch is less than this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Ocean considers instances not replaced due to PDB as healthy.
    You can override the behavior of the `batchMinHealthyPercentage` parameter by setting the `ignorePdb` parameter to True.


To start an immediate node roll:

1. Select one or more nodes to roll in the nodes list by clicking checkboxes on the left.
2. Select **Node roll** from the Actions menu above the nodes list, top-right.

<img width="340" src="https://github.com/user-attachments/assets/48011095-350b-473c-b60d-b83cd3919c81" />

>**Note**: You can optionally click **Select all** to roll all the nodes in the list.

3.	Configure the [Roll Parameters](https://docs.spot.io/ocean/features/roll?id=roll-parameters)
    *  Set the size of a roll batch (%). 
    *  Set the batch size healthy percentage (%).
    *  Add an optional comment.
    *  Turn on or turn off **Respect Pod Disruption Budget** (PDB)
    *  Turn on or turn off **Respect Restrict Scale Down**
4. Click **Roll node**.

## Terminate VMs

1. Select one or more nodes to terminate in the nodes list by clicking checkboxes on the left.
2. Select **Terminate VMs** from the Actions menu above the nodes list, top-right.
3. In the dialog box 

To terminate VMs:



