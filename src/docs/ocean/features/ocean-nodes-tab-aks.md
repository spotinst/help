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
* Lifecycle: Regular or spot. If an <img width="20" src="https://github.com/user-attachments/assets/996cb2d4-a58d-4cbc-9dd3-2d3122a398e0" /> icon appears when lifecycle is regular, click to view the reason, which can be one of the following:
   * Configurational reason: The node is regular because the cluster/virtual node group configuration (settings) requires a specific number of regular nodes.
   * Pods requiring regular lifecycle: The node has one or more pods that explicitly require a regular lifecycle. These pods may have specific requirements or dependencies that make them incompatible with Spot VMs.
   * Pods with missing spot tolerations: The node has pods that lack the required spot tolerations, preventing them from running on spot VMs. This indicates that the node's pods cannot be scheduled on spot VMs.
   * Fallback to regular lifecycle: The node has fallen back to regular lifecycle, AND either one or more pods has restricted scale-down constraints or missing spot tolerations.
* Pods

The following filters above the table let you search according to the criteria:

* Workload requirements:
  * Node lifecycle: regular or spot
  * PDB
  * Required VM Type
  * Restrict scale-down
  * Required zone

* Reason for regular
  * Risk
  * Missing spot tolerations
  * Fallback to regular
 
## Roll Nodes

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
4. Click **Roll node**. The [roll tab](https://docs.spot.io/ocean/features/roll?id=access-the-ocean-cluster-rolls-tab) opens, and you can follow the roll process. When the roll is complete, it appears in the roll history.

## Terminate VMs

1. Select one or more nodes to terminate in the nodes list by clicking checkboxes on the left.
2. Select **Terminate VMs** from the Actions menu above the nodes list, top-right.
3. In the dialog box 

To terminate VMs:



