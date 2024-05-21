<meta name=“robots” content=“noindex”>

# Migrate Workload using the Spot API

This page describes migrating existing AKS Kubernetes workloads into an Ocean cluster.

Before you start this procedure, review the [prerequisites](https://docs.spot.io/ocean/tutorials/migrate-workload-aks?id=prerequisites).

##  Step 1: Get Started with the Workload Migration

The [Get Migration Discovery](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksGetMigration) API call returns the information about nodes that can be migrated into Ocean and the number of pods running on each node if the flag is true.

Additionally, the API call returns a [Virtual Node Group](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksGetMigration) parameter based on the node's labels and taints.

*  If the node does not have labels or taints, the value returns as Default (String).
*  If a match is found, this method returns the ID of the first matching Virtual Node Group.
*  A Virtual Node Group does not match the node’s labels and taints if the value is null. If a Virtual Node Group is not found, the Ocean Autoscaler won’t be able to scale up a node with these labels and taints. So, if the value is null, create a Virtual Node Group with the required labels and taints.

After creating your Ocean cluster:

1. Run the [Get Migration Discovery](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksGetMigration) API call.
2  From the list of nodes returned in the API, choose the nodes you need to migrate to Ocean and use them in the next step.
3. Create a dedicated Virtual Node Group for your workload. See How.

##  Step 2: Create the Migration and Set Preferences

Use the [Create Migration](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksCreateMigration) API call to create the migration process. Add the list of instances you want to migrate and the parameters below:

*  nodeNames: a list of instance IDs that should be migrated to the Ocean cluster.

*  batchSize: Determines how many nodes should be migrated in each batch (in percentage).

*  BatchSizeHealthyPercentage: Indicates the threshold of minimum replaced nodes in a single batch.
*  shouldTerminateNodes: Ocean terminates the old instances once the pods on them are migrated, and the old instances are fully drained.
*  shouldEvictStandAlonePods: Ocean terminates pods not belonging to a Kubernetes deployment. This means you would need to launch the pod manually (after the migration) since no object would do it automatically.
*  shouldRespectPdb – Some pods may have a Pod Disruption Budget (PDB). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not replace a node if the PDB is violated.
*  shouldRespectRestrictScaleDown: Workloads with this label block proactive node scale down for more efficient bin packing so the node runs as long as possible. The node will be replaced only due to an unhealthy state or forced cloud provider interruption. We recommend not respecting Restrict Scale Down to migrate and replace the node successfully

Once you have started the migration, you can stop it. However, workloads migrated to Ocean remain under the new nodes that Ocean manages. When stopping the process, Ocean finishes scheduling all unscheduled pods of the current batch, and nodes that have not been drained will become schedulable again.


##  Step 3: Get Migration Information

During the migration, you can use the [Get Migration Status](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksGetMigration) API call to visualize the workload migration process fully. This API call lets you monitor the status and information of the migration.

## Stop Migration

To stop the migration process, use the [Stop Migration](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksMigrationStop) API call.

##  Get Migration History List

Use the [List Migrations summary](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAksMigrationsList) API call to get a summary of the Workload Migration history for an Ocean cluster This call returns all the Migration processes triggered in your Ocean cluster.

##  Get Ocean Nodes

Use the [Get Cluster Nodes](https://docs.spot.io/api/#operation/oceanAksGetNodes) API call to check all the nodes in your cluster and their full data

