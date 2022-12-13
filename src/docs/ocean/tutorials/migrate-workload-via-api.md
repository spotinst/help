# Migrate Workload using the API

This page describes how to migrate existing Kubernetes workloads into an Ocean cluster by using the API.

Before you start this procedure, review the [prerequisites](ocean/tutorials/migrate-workload?id=prerequisites).

## Step 1: Get Started with the Workload Migration

The [Get Migration Discovery API](https://docs.spot.io/api/#operation/oceanAwsGetMigrationDiscovery) call returns the information about nodes that can be migrated into Ocean and the number of pods running on each node if the flag is true.

Additionally, the API call returns a [Virtual Node Group](ocean/features/vngs/?id=virtual-node-groups) parameter which is based on the labels and taints of the node.  

* If there aren’t any labels and taints on the node - the value returns as Default (String).  
* If a match is found - this method returns the ID of the matching first Virtual Node Group found.
* If the value is null, it means that there is not a VNG that matches the node’s labels and taints. In this case, if a VNG isn’t found, the Ocean Autoscaler won’t be able to scale up a node with these labels and taints. Therefore, if the value is null, you should create a VNG with the required labels and taints.

After you have finished creating your Ocean cluster, use the [Get Migration Discovery API](https://docs.spot.io/api/#operation/oceanAwsGetMigrationDiscovery) call.

1. Run the Get Migration Discovery API.
2. From the list of nodes returned in the API, choose the instances you want to migrate to Ocean and use them in the next step.
3. Create a dedicated VNG for your workload. 

## Step 2: Create the Migration and Set Preferences

Use the [Create Migration API](https://docs.spot.io/api/#operation/oceanAwsPostMigration) call to create the migration process. Add the list of instances you want to migrate and the parameters below:    
* instanceIds – a list of instance IDs that should be migrated to the Ocean cluster.
* batchSize - Determines how many nodes should be migrated in each batch (in percentage).
* shouldTerminateDrainedNodes – Ocean terminates the old instances once the pods that reside on them are migrated, and the old instances are fully drained.
* shouldEvictStandAlonePods – Ocean terminates pods that do not belong to a Kubernetes deployment. This means you would need to launch the pod manually (after the migration) since no object would do it automatically.
* forcePodEvictionOnPdbFailure – Selecting this checkbox enables Ocean to force the Pod eviction from the instance, even if the distributed budget is not satisfied.

Once you have started the migration, you have the option to stop it. However, workloads migrated to Ocean remain under the new instances that Ocean manages. When stopping the process, Ocean finishes scheduling all unscheduled pods of the current batch, and instances that were not drained yet will become schedulable again.

## Step 3: Get Migration Information

During the migration, you have complete visibility of the Workload Migration process by using the [Get Migration Status](https://docs.spot.io/api/#operation/oceanAwsGetMigrationStatus) API call. Using this API call, you can monitor the migration's status and information.

## Stop Migration

To stop the migration process, use the [Stop Migration](https://docs.spot.io/api/#operation/oceanAwsPutMigration) API call.  

* Set the Terminate Drained Instances parameter if you want Ocean to terminate the instances that have already been drained before stopping the entire process. This parameter is optional and false by default.
* The state parameter should be STOPPED.

## Get Migration History List
To get the summary of Workload Migrations history for an Ocean cluster use the [List Migrations](https://docs.spot.io/api/#operation/oceanAwsGetMigrations) summary API call.
This API call returns all the Migration processes that were triggered in your Ocean cluster.

## Get Ocean Nodes

To check all the nodes in your cluster and their full data use the [Get Cluster Nodes](https://docs.spot.io/api/#operation/oceanAwsGetNodes) API call.

## What’s Next?

Learn how to manage a [Virtual Node Group](https://docs.spot.io/ocean/tutorials/manage-virtual-node-groups).
