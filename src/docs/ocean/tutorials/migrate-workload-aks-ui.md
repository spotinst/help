#  Migrate AKS Workload using the Console

This topic describes migrating your existing Kubernetes K8s workloads into an Ocean cluster via the Ocean Console.

Before starting, review the [prerequisites](https://docs.spot.io/ocean/tutorials/migrate-workload-aks?id=prerequisites).

##  Step 1: Select Instances to Migrate

1.  In the left main menu, click **Ocean** and click **Cloud Clusters**. 
2.  Select a cluster from the list of clusters.
3.  Click **Start Migration** on the left of the screen under Ocean Managed Nodes. 

![migration-nodes-managed](https://github.com/user-attachments/assets/a669c8d3-3c94-4ec8-bd97-993261428abc)

>**Note**: Worker nodes are the main compute resources running containerized applications in a Kubernetes cluster. System nodes (or master nodes) are the control plane components that manage the overall Kubernetes cluster and the workloads running on the worker nodes. The regular nodes are the on-demand nodes. The recommendation is to migrate the unmanaged worker nodes to become Ocean-managed Nodes. In the example above, before migration, there are no Ocean-managed nodes.

Once you start migration, Ocean automatically detects the workloads (nodes and pods) of the associated Kubernetes cluster and displays a list of all the discovered nodes.

![aks-workload-migration-discovery-vals](https://github.com/user-attachments/assets/5b99abd3-88a9-4063-b915-c7dff9fd5322)

The list of discovered nodes contains these columns:

* Migration Node: Node for migration.
* Node Group
* Pod Count: Number of pods on node.
* Virtual Node Group Match: Indicates whether an existing virtual node group matches the node.
* Ready for Migration (Node Statuses):
   * <img width="20" src ="https://github.com/user-attachments/assets/41b067f4-9df4-41cd-9aac-0289409a9a73 " /> Ready for migration: Node is validated and can be migrated (green color)
   * Excluded: Node was not selected for migration (gray color).
   * <img width="20" src ="https://github.com/user-attachments/assets/1be4c530-7c3c-44b9-8564-f0128c4803c5 " /> Unable to migrate: Node cannot be migrated (red color)
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

<img width="900" src ="https://github.com/user-attachments/assets/b2307c92-2fb0-4c60-a28f-17213287ee26" />

These are the options for nodes that Ocean cannot migrate:

* If the Virtual Node Group Match column displays **No match** and has a **click to fix** link, the node does not contain labels and taints attributes that match any configured virtual node group in the cluster. To fix the selected node:
  1. Click the link. An issues dialog box displays the labels and taints required for a virtual node group to match the node.
  
  ![aks-vng-match-issues-2](https://github.com/user-attachments/assets/014c4f9b-bc26-44e1-9c91-f4c86392a08a)
  
  3. Click **Create New VNG** to create a virtual node group with these attributes. See how to configure a [virtual node group](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks?id=createedit-a-virtual-node-group) in the edit screen.
 
* If the Virtual Node Group Match column displays **No match** and there is no clickable link, We recommend checking your Azure workloads related to the Ocean virtual node group configuration to ensure accuracy and resolve any mismatches.
* If you drill down to a workload under a node and the <img width="20" src ="https://github.com/user-attachments/assets/2c5d0898-d226-4867-a6d2-acde7ca2fee7" /> **Spot toleration is missing** message appears  [Install the admission mutating webhook](https://docs.spot.io/ocean/getting-started/aks/?id=step-4-automatic-spot-tolerance-injection-optional) that injects the required spot toleration, which AKS requires to run pods on spot nodes.
>**IMPORTANT:** If no nodes pass the validation process, you must fix errors before migrating.

If at least 1 but not all the nodes pass the validation process, you can proceed to migrate them.







##  Step 2: Set Preferences

Select your workload migration preferences.

![migration-nodes-prefs](https://github.com/user-attachments/assets/dfd21e4b-15da-404e-a81d-6b34d103c421)

*  **Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be migrated during migration (per batch). For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).   
*  **Batch Size Healthy Percentage**: indicates the minimum percentage of (migrated) healthy nodes in a single batch.
The migration will fail if the number of healthy nodes in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. 
  You can override the behavior of the batchMinHealthyPercentage parameter by setting the `ignorePdb` parameter to True 
*  **Evict stand-alone Pods**: Ocean evicts pods that are not part of a Kubernetes deployment and will automatically reschedule these stand-alone pods.
*  **Respect Pod Disruption Budget (PDB)**: Some pods may have a [Pod Disruption Budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not migrate a node if the PDB is violated. 
*  **Respect Restrict Scale Down during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's Autoscaler considers all configured constraints before the roll.
*  **Delete node from Azure after successful migration**: Select to delete the node from the Azure console because Ocean now manages the node.

>**Note**: Before migration, the Azure-managed node pools are changed from automatic to manual scaling to avoid race conditions.


##  Step 3: Start Migration

*  Click **Start Migration**.

##  Step 4: View the Workload Migration Dashboard

Follow the migration in the dashboard.

<img width="1224" alt="Migration Process" src="https://github.com/spotinst/help/assets/159915991/1fc07669-40d4-4505-8765-1756fc46b79f">

Node Statuses:

*  In Progress: Migration has started (dark blue color)
*  Migrated: Node has been migrated (green color)
*  Not Migrated: Node was not migrated due to stopped migration (gray color).
*  To be Migrated: Node has not yet been migrated (light blue color)
*  Failed: Migration failed (red color)
*  Manually Excluded: Node was not selected for migration (gray color)

###  Stop Migration

You can stop a migration in progress. However, migrated workloads remain under the new Spot nodes. Spot completes scheduling all the unscheduled pods of the current batch, and undrained nodes become schedulable again.

To stop the migration process in progress.

1.  Click **Stop Migration**.
2.  Select **Terminate Drained Instances** if you want Ocean to terminate the already drained nodes before stopping the entire process.

##  View Previous Migrations

To view previous migrations:

1.   From the Actions drop-down menu at the top-right of the screen, click **Previous Workload Migrations**.

![workloads-previous-migrations2](https://github.com/user-attachments/assets/a2f1d1a8-afbb-40d9-bf90-9170421188fc)

2.  Click on the required entry under Migrated Nodes to display the dashboard for that migration.

    Previous Migration Statuses:

    *  Finished: All nodes were migrated.
    *  Partly Completed: At least one selected node was not migrated.
    *  Stopped: Migration was manually stopped.
    *  Failed: Migration failed.


 

