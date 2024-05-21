<meta name=“robots” content=“noindex”>

#  Migrate AKS Workload using the Console

This topic describes migrating your existing Kubernetes K8s workloads into an Ocean cluster via the Ocean Console.

Before starting, review the [prerequisites](https://docs.spot.io/ocean/tutorials/migrate-workload-aks?id=prerequisites).

##  Step 1: Select Instances to Migrate

1.  In the left main menu, click **Ocean** and click **Cloud Clusters**.
2.  Select a cluster from the list of clusters.
3.  Click **Start Migration** on the left of the screen under Ocean Managed Nodes. Ocean automatically detects the workloads (nodes and pods) that belong to the associated Kubernetes cluster and displays all the discovered nodes in a list.

  [placeholder]


4.  Select the nodes (instances) you want to migrate into your Ocean cluster.

If any node entries show the Required Validation status under the Ready for Migration column, click **Validate** at the bottom left of the screen.

##  Step 2: Set Preferences

Select your workload migration preferences.

[placeholder]

*  **Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be migrated during migration (per batch). For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).   

*  **Batch Size Healthy Percentage**: indicates the minimum percentage of (migrated) healthy nodes in a single batch.
The migration will fail if the number of healthy nodes in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. 
  You can override the behavior of the batchMinHealthyPercentage parameter by setting the `ignorePdb` parameter to True 

*  **Evict stand-alone Pods**: Ocean evicts pods that are not part of a Kubernetes deployment and will automatically reschedule these stand-alone pods.

*  **Respect Pod Disruption Budget (PDB)**: Some pods may have a [Pod Disruption Budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not migrate a node if the PDB is violated. 

*  **Respect Restrict Scale Down during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's Autoscaler considers all configured constraints before the roll.

*  **Delete node from Azure after successful migration**: Select to delete the node from the Azure console because Ocean now manages the node.

*  **Enable Unmanagement via Azure Console (after successful migration)**: Change Azure-managed node pools from automatic to manual scaling.

##  Step 3: Start Migration

*  Click **Start Migration**.

##  Step 4: View the Workload Migration Dashboard

Follow the migration in the dashboard.

 [placeholder]

Node Statuses:

*  In Progress: The migration process is in progress.
*  Migrated: The node has been migrated
*  Not Migrated: Node could not be migrated
*  To be Migrated: Node not yet migrated
*  Failed:  Migration failed.
*  Manually Excluded: Node was not selected for migration

###  Stop Migration

You can stop a migration in progress. However, migrated workloads remain under the new Spot nodes. Spot completes scheduling all the unscheduled pods of the current batch, and undrained nodes become schedulable again.

To stop the migration process in progress.

1.  Click **Stop Migration**.
2.  Select **Terminate Drained Instances** if you want Ocean to terminate the already drained nodes before stopping the entire process.

##  View Previous Migrations

To view previous migrations:

*  From the Actions drop-down menu at the top-right of the screen, click **Previous Migrations**.
