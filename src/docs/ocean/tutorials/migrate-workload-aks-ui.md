#  Migrate AKS Workload using the Console

This topic describes migrating your existing Kubernetes K8s workloads into an Ocean cluster via the Ocean Console.

Before starting, review the [prerequisites](https://docs.spot.io/ocean/tutorials/migrate-workload-aks?id=prerequisites).

##  Step 1: Select Instances to Migrate

1.  In the left main menu, click **Ocean** and click **Cloud Clusters**.
2.  Select a cluster from the list of clusters.
3.  Click **Start Migration** on the left of the screen under Ocean Managed Nodes. 

![workloads-migration-start-migrations](https://github.com/spotinst/help/assets/159915991/998bb5f0-cdd8-4461-bd66-224df9a28590)

Ocean automatically detects the workloads (nodes and pods) of the associated Kubernetes cluster and displays a list of all the discovered nodes.

![workloads-migration-validated-nodes](https://github.com/spotinst/help/assets/159915991/6163f354-2968-4df9-81ba-8df105d5c139)

4.  Select the nodes (instances) you want to migrate into your Ocean cluster.

5.  If any node entries show the Required Validation status under the **Ready for Migration** column, click **Validate** at the bottom left of the screen.

Node Statuses:

*   Ready for migration: Node is validated and can be migrated (green color)
*   Excluded: Node was not selected for migration (gray color).
*   Unable to migrate: Node cannot be migrated (red color)

##  Step 2: Set Preferences

Select your workload migration preferences.

![workloads-migration-preferences](https://github.com/spotinst/help/assets/159915991/5ba5714c-88f8-478b-9d56-9ad048d543b4)


*  **Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be migrated during migration (per batch). For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).   
*  **Batch Size Healthy Percentage**: indicates the minimum percentage of (migrated) healthy nodes in a single batch.
The migration will fail if the number of healthy nodes in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. 
  You can override the behavior of the batchMinHealthyPercentage parameter by setting the `ignorePdb` parameter to True 
*  **Evict stand-alone Pods**: Ocean evicts pods that are not part of a Kubernetes deployment and will automatically reschedule these stand-alone pods.
*  **Respect Pod Disruption Budget (PDB)**: Some pods may have a [Pod Disruption Budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not migrate a node if the PDB is violated. 
*  **Respect Restrict Scale Down during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's Autoscaler considers all configured constraints before the roll.
*  **Delete node from Azure after successful migration**: Select to delete the node from the Azure console because Ocean now manages the node.


##  Step 3: Start Migration

*  Click **Start Migration**.

##  Step 4: View the Workload Migration Dashboard

Follow the migration in the dashboard.

 ![workloads-migration-in-progress-1](https://github.com/spotinst/help/assets/159915991/39a08b4d-563a-4af4-b9dc-b11b382d5d58)

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

 ![workloads-previous-migrations](https://github.com/spotinst/help/assets/159915991/3397a2bb-25e2-4e75-91b9-e1d5ae3d487d)

2.  Click on the required entry under Migrated Nodes to display the dashboard for that migration.

    Previous Migration Statuses:

    *  Finished: All nodes were migrated.
    *  Partly Completed: At least one selected node was not migrated.
    *  Stopped: Migration was manually stopped.
    *  Failed: Migration failed.


 

