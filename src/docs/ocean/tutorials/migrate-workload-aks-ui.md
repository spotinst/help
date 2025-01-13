#  Migrate AKS Workload using the Console

This topic describes migrating your existing Kubernetes K8s workloads into an Ocean cluster via the Ocean console.

Before starting, review the [prerequisites](https://docs.spot.io/ocean/tutorials/migrate-workload-aks?id=prerequisites).

##  Step 1: Select Instances to Migrate

1.  In the left main menu, click **Ocean** and click **Cloud Clusters**. 
2.  Select a cluster from the list of clusters.
3.  Click **Start Migration** on the right under Ocean Managed Nodes. 

<img width="500" src ="https://github.com/user-attachments/assets/b53d540e-424c-4e9b-b196-d0aab6550496" />

>**Note**: Worker nodes are the main compute resources running containerized applications in a Kubernetes cluster. System nodes (or master nodes) are the control plane components that manage the overall Kubernetes cluster and the workloads running on the worker nodes. The regular nodes are the on-demand nodes. The recommendation is to migrate the unmanaged worker nodes to become Ocean-managed Nodes. In the example above, before migration, there are no Ocean-managed nodes.

Once you start the migration, Ocean automatically detects the workloads (nodes and pods) of the associated Kubernetes cluster and displays a list of all the discovered nodes.

<img width="900" src ="https://github.com/user-attachments/assets/b447a35b-26fd-4c2c-90e1-10cfce264d2b" />

The list of discovered nodes contains these columns:

* Migration Node: Node for migration.
* Node Group
* Pod Count: Number of pods on node.
* Virtual Node Group Match: Indicates whether an existing virtual node group in the cluster matches the node.
* Ready for Migration (Node Statuses):
   * <img width="20" src ="https://github.com/user-attachments/assets/41b067f4-9df4-41cd-9aac-0289409a9a73 " /> Ready for migration: Node is validated and can be migrated (green color).
   * <img width="20" src="https://github.com/user-attachments/assets/fbb5322b-7b34-4f41-8883-49a88f10958d" /> Excluded: Node was not selected for migration (gray color).
   * <img width="20" src ="https://github.com/user-attachments/assets/1be4c530-7c3c-44b9-8564-f0128c4803c5 " /> Unable to migrate: Node cannot be migrated (red color).
   * <img width="20" src ="https://github.com/user-attachments/assets/d21899f7-d922-4f36-a2bf-835b8831f112" /> Requires validation: Nodes are checked before migration to ensure successful migration. If an issue is identified for a node, you can either fix it or select a different node. 

Node validation checks for the following:
*  Virtual Node Group Match: At least one virtual node group in the cluster must match the specific node.
*  Support for the Kubernetes version.
*  Support for the Ocean Controller version.
*  Whether Spot toleration exists.
*  Specific Constraints: For example, Restrict Scale Down, Respect Pod Disruption Budget (PDB), PVC.

4. Select the nodes (instances) you want to migrate into your Ocean cluster.
5. If any selected node entries display the **Required Validation** status in the **Ready for Migration** column, click **Validate** at the bottom left of the screen.
6. When the validation process is completed, check if any node entries display the **Unable to migrate** status in the **Ready for Migration** column.

<img width="900" src ="https://github.com/user-attachments/assets/9d896950-383c-4648-832c-2646dbc40574" />

7. Fix any required nodes Ocean cannot migrate (see below) before you Click **Next**.

<details style="background:#f2f2f2; padding:20px; margin:10px 0px 0px 0px">
   
  <summary markdown="span" style="color:#7632FE; font-weight:600">What to do about nodes that Ocean cannot migrate (click for more info...)
</summary>

<div style="padding-left:16px">

If the virtual node group match column displays **No match** and has a **click to edit** link, the node does not contain labels and taints attributes that match any configured virtual node group in the cluster. 

To edit:

1. Click the link. An issues dialog box displays the labels and taints required for a virtual node group in your cluster to match the selected node.
   
   <img width="650" src ="https://github.com/user-attachments/assets/08b4b68f-13d3-4de7-8a07-76993b480740" />

2. Click **Create New VNG** to create a virtual node group that contains these injected attributes. See how to configure a [virtual node group](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks?id=createedit-a-virtual-node-group) in the edit screen.

   <img width="650" src ="https://github.com/user-attachments/assets/5b693b5d-cdbc-4ab1-8d43-27dc98779727" />

>**Note**: The new virtual node group's other attributes are inherited from the virtual node group template.
  
If the virtual node group Match column shows **No match** (but there is no link), the tooltip shows the reason for the mismatch. Spot recommends checking your Azure workloads related to the Ocean virtual node group configuration to ensure they are correct and resolve any mismatches.

If you drill down to a workload under a node and the <img width="20" src ="https://github.com/user-attachments/assets/2c5d0898-d226-4867-a6d2-acde7ca2fee7" /> **Spot toleration is missing** message appears, [Install the admission mutating webhook](https://docs.spot.io/ocean/getting-started/aks/?id=step-4-automatic-spot-tolerance-injection-optional)  that injects the required spot toleration, which AKS requires to run pods on spot nodes:
* To do this, click **Actions > Spot Toleration Injection** (top-right of screen).



>**IMPORTANT:** If no nodes pass the validation process, you must fix errors before migrating.

You can migrate if at least 1 of the selected nodes is successfully validated.

 </div>

</details>


##  Step 2: Set Preferences

Select your workload migration preferences.

![migration-preferences](https://github.com/user-attachments/assets/ac7d2007-f4ff-4572-a15b-8d56a0aaf85e)

*  **Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be migrated during migration (per batch). For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).   
*  **Batch Size Healthy Percentage**: indicates the minimum percentage of (migrated) healthy nodes in a single batch.
The migration will fail if the number of healthy nodes in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. 
  You can override the behavior of the batchMinHealthyPercentage parameter by setting the `ignorePdb` parameter to True 
*  **Evict stand-alone Pods**: Ocean evicts pods that are not part of a Kubernetes deployment and will automatically reschedule these stand-alone pods.
*  **Respect Pod Disruption Budget (PDB)**: Some pods may have a [Pod Disruption Budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not migrate a node if the PDB is violated. 
*  **Respect Restrict Scale Down during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's Autoscaler considers all configured constraints before the roll.
*  **Delete node from Azure after successful migration**: Select to delete the node from the Azure console because Ocean now manages the node.

>**Note**: Before migration, the Azure-managed node pools are changed from automatic to manual scaling to avoid conflicts.


##  Step 3: Start Migration

*  Click **Start Migration**.

##  Step 4: View the Workload Migration Dashboard

Follow the migration in the dashboard.

<img width="900" alt="Migration in Process" src="https://github.com/user-attachments/assets/918ea141-bb49-4853-910f-4cd21d744f70" />

Node Statuses:

*  <img width="20" src ="https://github.com/user-attachments/assets/ed362ecb-bfb5-4d85-aada-8941e96a94a7" /> In Progress: Migration has started (dark blue color)
*  <img width="20" src ="https://github.com/user-attachments/assets/41b067f4-9df4-41cd-9aac-0289409a9a73 " /> Migrated: Node has been migrated (green color).
*  <img width="20" src="https://github.com/user-attachments/assets/fbb5322b-7b34-4f41-8883-49a88f10958d" /> Not Migrated: Node was not migrated due to stopped migration, or was manually excluded for migration (gray color).
*  <img width="20" src ="https://github.com/user-attachments/assets/1d4e0b3d-de64-490b-a408-e823d3d24a1e" /> To be Migrated: Node has not yet been migrated (light blue color)
*  <img width="20" src ="https://github.com/user-attachments/assets/1be4c530-7c3c-44b9-8564-f0128c4803c5 " /> Failed: Migration failed (red color)

###  Stop Migration

You can stop a migration in progress. However, migrated workloads remain under the new Spot nodes. Spot completes scheduling all the unscheduled pods of the current batch, and undrained nodes become schedulable again.

To stop the migration:

1.  Click **Stop Migration** on the right of the screen (above the nodes list).
2.  Click **Terminate Drained Instances** if you want Ocean to terminate the already drained nodes before stopping the entire process.

##  View Previous Migrations

To view previous migrations (for the past month):

* Click **Migrations History** on the right of the screen (above the nodes list).

![aks-migration-history](https://github.com/user-attachments/assets/26c89422-da5d-4dc5-9a82-af0f584e5bdb)

The list of migrations displays:

* Migration ID.
* Start Date of migration.
* Number of migrated nodes (x/y). Click the link to display the dashboard for that migration.
* Status of the migration.
   *  <img width="20" src ="https://github.com/user-attachments/assets/41b067f4-9df4-41cd-9aac-0289409a9a73 " /> Completed: All nodes were migrated.
   *  <img width="20" src ="https://github.com/user-attachments/assets/ed362ecb-bfb5-4d85-aada-8941e96a94a7" /> Partly migrated (in progress): At least one selected node was not migrated.
   *  <img width="20" src="https://github.com/user-attachments/assets/fbb5322b-7b34-4f41-8883-49a88f10958d" /> Stopped: Migration was manually stopped.
   *  <img width="20" src ="https://github.com/user-attachments/assets/1be4c530-7c3c-44b9-8564-f0128c4803c5 " /> Failed: Migration failed.


 

