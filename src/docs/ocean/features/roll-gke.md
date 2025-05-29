<meta name="robots" content="noindex">

# Roll (GKE)

The Ocean Roll feature effortlessly synchronizes cluster infrastructure with a fresh image, user data, or security groups, eliminating the need to disable the Ocean autoscaler or manually detach nodes within the cluster.
With Ocean, you can roll a cluster with just a single click. The roll feature intelligently considers the workloads running in the cluster. It freezes any scale-down activities within the cluster and seamlessly deploys new compute capacity to meet the demands of the workloads. During the startup phase of the new nodes, the existing nodes retain the ability to scale up as needed, ensuring uninterrupted operations. The old nodes are only scaled down once the new nodes are confirmed to be in a healthy state.

Whether you are rolling out changes to your entire Ocean cluster, a particular virtual node group (VNG), or specific nodes, Ocean offers the flexibility to divide the roll into batches based on your chosen batch sizes. For example, if you opt for the default batch size of 20%, Ocean will divide the roll into five batches.

The process is as follows:  

1.  Ocean calculates the number of batches required in the roll based on the batch size you enter and divides the workloads equally among the batches.
2.  Ocean starts with the first batch, successfully replacing each node to accommodate the new nodes' workloads. Ocean's autoscaler considers all relevant constraints in place before the roll.
3.  When all nodes in a batch complete processing and at least 50% of them have a successful replacement, then Ocean starts to work on the next batch. You can configure the percentage in the Spot API using the `batchMinHealthyPercentage` attribute, which is explained below.

##  Replace Node with Smaller Nodes

A cluster roll can replace a single node with multiple smaller nodes. This avoids a cluster roll failure when only smaller node types are configured in the Ocean cluster before initiating the roll. Ocean will provide the most relevant infrastructure during the cluster roll rather than replacing each existing node with one of the same type. 

This is based on the workloads currently running on the nodes chosen for rolling. This is especially helpful when you have modified the list of allowed node types or if your goal is to remove and replace a specific node type with multiple smaller ones.

This logic can improve the cluster's utilization since the workload would run on infrastructure that best matches the workload. Ocean constantly tries to scale down the cluster, but a cluster roll could improve the utilization if this is impossible.

##  Roll Parameters

*  Respect Pod Disruption Budget (PDB): Some pods may have a Pod Disruption Budget (PDB). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not replace a node if the PDB is violated.
*  Roll Batch Size Percentage: Indicates the percentage of the cluster's target capacity that will be rolled during a node pool update or scale operation. For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).
*  Batch Size Healthy Percentage: indicates the minimum percentage of healthy instances in a single batch.
The roll will fail if the number of healthy instances in a single batch is less than this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Ocean considers instances not replaced due to PDB to be healthy.

>**Note:**  You can override the behavior of the batchMinHealthyPercentage parameter by setting the `ignorePdb` attribute to True.

##  Node Status

During the roll, Ocean provides information about the status of each node:

*  REPLACED: A new node successfully replaced the node.
*  TO_BE_REPLACED: Ocean has not yet tried to replace the node.
*  COULD_NOT_BE_REPLACED: The node was not replaced. This may occur, for example, when no replacement node becomes healthy within the grace period.
*  NOT_REPLACED_DUE_TO_PDB: Replacing the node violates the PDB configuration on one of the pods running on the node. This status is only relevant when respectPdb is set to True. If a node could not be replaced due to PDB, and the allowed PDB % of nodes for the batch was respected, Ocean would continue to the next batch.

##  Roll Status

A roll can have one of the following statuses:

*  IN_PROGRESS: Nodes are being replaced successfully.
*  FAILED: An error caused the roll to fail. An error message is recorded in the Elastilog.
*  STOPPED: The roll was manually stopped. When you stop a roll, the nodes remain in the state at the stop time. (For example, there is no rollback to the initial state).
*  COMPLETED: All nodes have been processed, and at least 50% have been successfully replaced.


>**Tip**: In the Console, a specific batch may appear in a pending state. This means that even though the roll process has started, that batch has not yet started to replace its nodes.

## Log Messages

The following messages are recorded in the log:

*  Roll ${ROLL_ID} has completed successfully.
*  Roll ${ROLL_ID} has failed. Reason ${FAILURE_REASON}.
*  Roll ${ROLL_ID} has started. Number of batches ${NUM_OF_BATCHES}.
*  Roll ${ROLL_ID} has stopped.

The following are reasons for failure:

*  The roll has been stuck in the same status for too long.
*  The Ocean Controller is not active.
*  More than 50 percent of nodes could not be replaced.
*  There may be constraint or configuration mismatches such as labels, selectors, taints, or affinity rules.
*  There may be one or more unhealthy nodes.
*  Kubernetes version not supported.

##  Schedule or Initiate a Cluster Roll from Spot API

You can schedule a roll in the [Create Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate) or [Update Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterUpdate) Spot API using a cron expression. This enables you to run the roll easily during off hours.

You can initiate a cluster roll in [Initiate Roll](https://docs.spot.io/api/#operation/oceanGkeRollInit).

##  Roll per Virtual Node Group

Ocean Virtual Node Groups let you run different node groups within a single Ocean cluster. This makes it possible to run different groups of nodes, such as the examples below, on the same cluster.

*  Separate development, test, and production environments.
*  Different teams.
*  Different applications or microservices.

The Ocean API enables you to roll one or more nodes in a virtual node group without having to roll the entire cluster. This is useful when you have different groups of nodes running in the cluster, like those described above, and don't want to roll the entire cluster for a local software update. You can do this by specifying a list of node IDs or a specific VNG ID.

For example, you can use:

*  `instanceNames` to initiate a roll of one or more specific nodes.
*  `launchSpecIds` to initiate a roll of one or more VNGs in the cluster. When you specify a VNG ID, all the nodes in that VNG are rolled.

##  Roll from Console

###  Access the Ocean Cluster Rolls Tab

1.  In the left main menu, click **Ocean** > **Cloud Clusters**.
2.  Select a cluster from the list of clusters.
3.  Click **Rolls**.

In the Rolls tab, you can run immediate rolls for your clusters, VNGs, and node pools or schedule your cluster and VNG rolls.

*  If you have not run or scheduled a roll in this cluster, the Rolls tab appears as shown below.

<img width="600" src="https://github.com/user-attachments/assets/ca366c44-af5c-45c0-87af-9eff7c35d88d" />

*  If at least one roll exists, the rolls history list appears.
*  Configured roll schedules appear below the rolls schedules list.

ROLLS HISTORY LIST

The rolls history list contains an entry for each roll under the following columns:

*  Roll ID (unique ID for the roll).
*  Role Scope (cluster, virtual node group, or node pool).
*  Comments (optional).
*  Start Time for roll: mm/dd/yyyy, hh:mm:ss
*  End Time for roll: mm/dd/yyyy, hh:mm:ss
*  Nodes Rolled (number of nodes rolled) x out of y, for example 20/23
*  Roll Status:
   * ![roll-status-completed](https://github.com/user-attachments/assets/19e5306e-18b0-4328-9746-ca745a26fc04) (Green color) Completed: Roll successfully completed.
   * ![roll-status-partly-completed](https://github.com/user-attachments/assets/6196efa4-08a1-4992-b75e-dea134572c84) (Orange color) Partly completed: At least one node could not be replaced.
   * ![cluster-status-stopped](https://github.com/user-attachments/assets/616b977a-1e76-4c4b-99c2-09587985b19a) (Gray color) Stopped: Roll was stopped.
   * ![cluster-status-failed](https://github.com/user-attachments/assets/7a092501-f1eb-43a7-96b8-5578fd747b7c) (Red color) All nodes could not be replaced.
   
Click a down arrow for an entry to drill down for information at the node level:

*  Node Name.
*  Node ID.
*  Node Pool Name.
*  VNG Name: Click on the link to access settings for the virtual node group.
*  VNG ID.
*  Batch Number: Number of the batch that was run.
*  Node Status:
   * ![roll-status-completed](https://github.com/user-attachments/assets/19e5306e-18b0-4328-9746-ca745a26fc04)(Green color) Completed: Node was replaced.
   * ![cluster-status-failed](https://github.com/user-attachments/assets/7a092501-f1eb-43a7-96b8-5578fd747b7c)(Red color) Node could not be replaced.
 
ROLLS SCHEDULES SCREEN
 
The roll schedules list contains an entry for each schedule:

*  Role Scope (cluster or virtual node group).
*  Scheduled frequency.

###  Roll Now

To roll immediately:

1.  From the Rolls tab: If this is your first roll, click **Cluster Roll** or **VNG Roll**.
    
    -OR-

    From the Start Roll menu on the right of the screen, click either **Cluster Roll** or **VNG Roll**.

    Alternative options for starting a roll:

    *  From the Cloud Cluster, Virtual Nodes Group tab: Select a virtual node group from the list, and then select **VNG Roll** from the Actions drop-down menu at the top-right of the screen.
    *  From the Cloud Cluster Overview, select **Cluster Roll** from the Actions menu at the top-right of the screen.
  
 >**Note**: The dialog box depends on the type of object(s) you selected to roll.

2.  If you are rolling virtual node groups, select from the drop-down menu at the top of the dialog box. You can optionally select **All**.

<img width="500" src="https://github.com/user-attachments/assets/65cb6030-5546-4fbd-9cef-354ee34d06a8" />

3. Configure the [Roll Parameters](https://docs.spot.io/ocean/features/roll-gke?id=roll-parameters).
   * Set the size of a roll batch (%).
   * Set the batch size healthy percentage (%).
   * Add an optional comment.
   * Turn **Respect Pod Disruption Budget (PDB)** on or off.
  
4.  Click **Roll**.

>**Note**: To stop a roll while running, click **Stop Roll** on the screen's right, then click **Stop Roll** in the confirmation box.

###  Create a Roll Schedule

You can schedule cluster or virtual node group rolls.

1.  To create your first roll schedule, click **Schedule a Roll**.

  -OR-

  From the Create Roll menu on the right of the screen, click **Schedule Roll**.

2.  In the first step of the wizard, select the roll type. The available roll types depend on your system deployment.

<img width="600" src="https://github.com/user-attachments/assets/b69a1ced-105d-446d-8d97-e88c8729e71d" />

3. In the second step of the wizard, if you are rolling virtual node groups, select them from the menu at the top of the dialog box. You can optionally select **All**.

<img width="600" src="https://github.com/user-attachments/assets/e1d7ee55-9db7-43db-8df9-75ff38200541" />

4. Configure the [Roll Parameters](https://docs.spot.io/ocean/features/roll-gke?id=roll-parameters).
   * Set the size of a roll batch (%).
   * Set the batch size healthy percentage (%).
   * Add an optional comment.
   * Turn **Respect Pod Disruption Budget (PDB)** on or off.

5. In the third step of the wizard, set the schedule frequency using the day/week/month/time controls or type in a Cron expression.

<img width="600" src="https://github.com/user-attachments/assets/986c88e7-19c3-4c90-b59a-2f3a6c506343" />

6. Click **Schedule Roll**. Your schedule appears in the rolls tab - scheduled rolls list under rolls history.

###  Turn a Scheduled Roll On or Off

*  To the right of the scheduled roll, click the slider right (turn on) or left (turn off).

###  Delete a Scheduled Roll

1.  To the right of the scheduled roll, click the wastebasket icon.
2.  When the confirmation message appears, type **"Delete"** and then click **Delete** to delete.





   
 





















