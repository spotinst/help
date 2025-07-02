<meta name="robots" content="noindex">

#  AKS Nodes

Use the Nodes tab to view information about servers on the cluster and monitor nodes as they are launched. You can view information about resource allocation, labels, annotations, etc., at the node level and access pod information for the pods that run on the nodes as required.

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

* Node Name.
* Virtual Node Group: Click on the link provided to open the configuration for the [virtual node group](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks?id=manage-virtual-node-groups-aks).
* Node Pool: Click on the link to open the configuration for the [node pool](https://docs.spot.io/ocean/features/dense-mode-and-node-pools?id=view-node-pools-in-the-console).
* Availability Zone: Availability zone for the node pool (includes region information).
* VM Size: Machine type.
* OS Image: Image name.
* Lifecycle: Regular or spot. 

###   Workload Requirements

>**Note**: Search from the **Workload requirements** filter above the Nodes list.

  * Node lifecycle: regular or spot. Pods requiring regular lifecycle: The node has one or more pods that explicitly require a regular lifecycle. These pods may have specific requirements or dependencies that make them incompatible with spot VMs.
  * PDB: Some pods may have a [Pod Disruption Budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). When turned on, Ocean verifies the PDB and will not migrate a node if the PDB is violated. 
  * Required VM Type.
  * Restrict scale-down: Rolls do not consider the restrict scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's autoscaler considers all configured constraints before the roll.
  * Required availability zone.

>**Note**: When pods have constraints that impact Workload requirements, an <img width="20" src="https://github.com/user-attachments/assets/1bfecd93-5ec4-49fb-a3f8-2d5293ef7e3a" />
   icon appears in the Pods column of the nodes list, to the right of the number of pods. Click the icon to view the reason(s) and the number of pods affected.

 
###   Reasons for Node with Regular Lifecycle

>**Note**: Search from the **Reason for regular** filter above the Nodes list.

If an <img width="20" src="https://github.com/user-attachments/assets/996cb2d4-a58d-4cbc-9dd3-2d3122a398e0" /> icon appears in the Lifecycle column for the node, click to view the reason, which can be one of the following:
 * Risk: The percentage of spot nodes configured in the [virtual node group configuration]((https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks?id=manage-virtual-node-groups-aks)) impacts the percentage of regular nodes launched. We recommend increasing the risk to continue running spots.
 * Pods with missing spot tolerations: The node has pods that lack the required spot tolerations, preventing them from running on spot VMs. This indicates that the node's pods cannot be scheduled on spot VMs. To address this issue, install the admission mutating webhook that injects the [spot toleration](https://docs.spot.io/ocean/getting-started/aks/?id=step-4-automatic-spot-tolerance-injection-optional), which AKS requires to run pods on spot nodes.
    * From the Actions menu, select **Spot Toleration Injection**.
 * Fallback to regular lifecycle: The node has fallen back to regular lifecycle. This setting is configured in the virtual node group. This lets Ocean launch regular VMs when spot markets are unavailable. When spots become available, regular nodes are reverted to spots.

## Roll Nodes

To start an immediate node roll:

1. Select one or more nodes to roll in the nodes list by clicking checkboxes on the left.
2. Select **Node roll** from the Actions menu above the nodes list, top-right.

<img width="340" src="https://github.com/user-attachments/assets/48011095-350b-473c-b60d-b83cd3919c81" />

>**Note**: You can optionally click on the down arrow to change your selection or **Select all** to roll all the nodes in the list.

3.	Configure the [Roll Parameters](https://docs.spot.io/ocean/features/roll?id=roll-parameters)
    *  Set the size of a roll batch (%). 
    *  Set the batch size healthy percentage (%).
    *  Add an optional comment.
    *  Turn on or turn off **Respect Pod Disruption Budget** (PDB)
    *  Turn on or turn off **Respect Restrict Scale Down**
4. Click **Roll node**. The roll process opens in the [Rolls tab](https://docs.spot.io/ocean/features/roll?id=access-the-ocean-cluster-rolls-tab). When the roll is complete, it appears in the Rolls History list.

## Terminate VMs

1. Select one or more nodes to terminate in the nodes list by clicking checkboxes on the left.
2. Select **Terminate VMs** from the Actions menu above the nodes list, top-right.
3. Type **Terminate** in the dialog box that opens.
4. Click **Terminate** to confirm the action.

>**Note**: VM termination may take several minutes to complete.
>





