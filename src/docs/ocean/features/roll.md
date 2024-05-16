<meta name=“robots” content=“noindex”>

# Rolls

The Ocean Roll feature lets you to effortlessly synchronize cluster infrastructure with a fresh image, user data, or security groups, eliminating the need to disable the Ocean autoscaler or manually detach nodes within the cluster.

>**Note:** This topic uses Kubernetes terms such as node and pod (EKS, AKS, and GKE). ECS equivalents such as container instance, VM and task are also applicable.

With Ocean, you can roll a cluster with just a single click. The roll feature intelligently considers the workloads running in the cluster. It freezes any scale-down activities within the cluster and seamlessly deploys new compute capacity to meet the demands of the workloads. During the startup phase of the new nodes, the existing nodes retain the ability to scale up as needed, ensuring uninterrupted operations. The old nodes are only scaled down once the new nodes are confirmed to be in a healthy state.

Whether you are rolling out changes to your entire Ocean cluster, a particular virtual node group (VNG), or specific nodes, Ocean offers the flexibility to divide the roll into batches based on your chosen batch sizes. For example, if you opt for the default batch size of 20%, Ocean will divide the roll into five batches.

The process is as follows:
1.	Ocean calculates the number of batches required in the roll based on the batch size you enter and divides the workloads equally among the batches.
2.	Ocean starts with the first batch, replacing each node to ensure the successful accommodation of the workloads on the new nodes. Ocean's autoscaler considers all relevant constraints in place before the roll.
3.	When all nodes in a batch complete processing and at least 50% of them have a successful replacement, then Ocean starts to work on the next batch. You can configure the percentage in the Spot API using the batchMinHealthyPercentage parameter, which is explained below.

## Replace Node with Smaller Nodes

A cluster roll can replace a single node with multiple smaller nodes. This avoids a cluster roll failure when only smaller node types are configured in the Ocean cluster before initiating the roll. Rather than replacing each existing node with one of the same type, Ocean will provision the most relevant infrastructure during the cluster roll. 

This is based on the workloads currently running on the nodes chosen for rolling. This is especially helpful when you have modified the list of allowed node types or if your goal is to remove and replace a specific node type with multiple smaller ones.

This logic can improve the cluster's utilization since the workload would run on infrastructure that best matches the workload. Ocean constantly tries to scale down the cluster, but if this is not possible, a cluster roll could improve the utilization.

## Roll Parameters

*   **Respect Pod Disruption Budget (PDB)**: Some pods may have a Pod Disruption Budget (PDB). In the Spot API, use `respectPdb` to instruct Ocean to verify the PDB. When `respectPdb` is set to True, Ocean will not replace a node if the PDB is violated.

*   **Respect Restrict Scale Down (RSD) during Roll**: Rolls do not consider the restrict-scale-down label. Ocean will replace a node even if a task or pod uses this label. Ocean's autoscaler considers all configured constraints before the roll.

*   **Roll Batch Size Percentage**: Indicates the percentage of the cluster's target capacity that will be rolled at a time during a node pool update or scale operation. For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, then each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes). 

*   **Batch Size Healthy Percentage**: indicates the minimum percentage of healthy instances in a single batch.
    The roll will fail if the number of healthy instances in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Ocean considers instances not replaced due to PDB as healthy.
    You can override the behavior of the `batchMinHealthyPercentage` parameter by setting the `ignorePdb` parameter to True.

## Node Status

During the roll process, Ocean provides information about the status of each node:

*   **REPLACED**: A new node successfully replaced the node.

*   **TO_BE_REPLACED**: Ocean has not yet tried to replace the node.

*   **COULD_NOT_BE_REPLACED**: The node was not replaced. This may occur for example, when no replacement node becomes  healthy within the grace period.

*   **NOT_REPLACED_DUE_TO_PDB**: Replacing the node violates the PDB configuration on one of the pods running on the node. This status is only relevant when `respectPdb` is set to True. If a node could not be replaced due to PDB, and the allowed PDB % of nodes for the batch was respected, Ocean would continue to the next batch. 

*   **NOT_REPLACED_DUE_TO_RSD**: Replacing the node violates the RSD configuration on one of the pods running on the node. This status is only relevant when `respectRestrictScaleDown` is set to True. If a node could not be replaced due to PDB, and the allowed RSD % of nodes for the batch was respected, Ocean would continue to the next batch. 

##  Roll Status

A roll can have one of the following statuses:

*   **IN_PROGRESS**: Nodes are being replaced successfully.

*   **FAILED**: An error caused the roll to fail. An error message is recorded in the Elastilog

*   **STOPPED**: The roll was manually stopped. When you stop a roll, the nodes remain in the state at the stop time. (For example, there is no rollback to the initial state).

*   **COMPLETED**: All nodes have been processed, and at least 50% have been successfully replaced.

>**Tip:** In the Console, a specific batch may appear in a pending state. This means that even though the roll process has started, that batch has not yet started to replace its nodes.  

##  Log Messages

The following messages are recorded in the log:

*   Roll ${ROLL_ID} has completed successfully.
*   Roll ${ROLL_ID} has failed. Reason ${FAILURE_REASON}.
*   Roll ${ROLL_ID} has started. Number of batches ${NUM_OF_BATCHES}.
*   Roll ${ROLL_ID} has stopped.

The following are reasons for failure:

*   The roll has been stuck in the same status for too long.
*   The Ocean Controller is not active.
*   More than 50 percent of nodes could not be replaced.
*   There may be constraint or configuration mismatches such as labels, selectors, taints, or affinity rules.
*   There may be one or more unhealthy nodes.
*   Kubernetes version not supported.

##   Schedule Cluster Roll for AKS from the Spot API 

You can schedule a roll in the Create Cluster or Update Cluster [Spot API](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterUpdate) using a cron expression. This enables you to run the roll easily during off hours.

###  Roll per Cluster, VNG, or Node Pool

Ocean VNGs / Node Pools enable you to run different VNGs / Node Pools within a single Ocean cluster, for example:

*   Separate development, test, and production environments.
*   Different teams.
*   Different applications or microservices.

The Spot API lets you roll one or more nodes in a VNG without having to roll the entire cluster, for example, when you do not want to roll the entire cluster for a local software update. You do this by specifying a list of node IDs or a specific VNG ID.
The VNG parameter initiates a roll of one or more VNGs in the cluster. When you specify a VNG ID, all the nodes in that VNG are rolled.

Similarly, the Spot API lets you roll one or more node pools without rolling the entire cluster. Do this by specifying a list of node Pool IDs or a specific Node Pool ID.
The node pool parameter initiates a roll of one or more node pools in the cluster. When you specify a node pool ID, all the nodes in that node pool are rolled.

##   Work with Rolls from the Console

###  Access the Ocean Cluster Rolls Tab   

To access the Ocean Cloud Cluster Rolls tab:

1.	In the left main menu, click **Ocean**, and click **Cloud Clusters**.
2.	Select a cluster from the list of clusters.
3.	Click **Rolls**.

In the Rolls tab, you can run immediate rolls for your clusters, VNGs, and node pools or schedule your cluster and VNG rolls.

The Rolls tab appears below if you have not yet performed or scheduled a roll in this cluster.

![ocean-rolls-no-rolls-yet](https://github.com/spotinst/help/assets/159915991/753b1eb4-3ef3-445b-8a0b-49c05543cc0a)

If at least one roll exists, the Rolls History appears. 

![ocean-history1](https://github.com/spotinst/help/assets/159915991/28a6f90b-6379-42e9-b93c-2d7315cca61a)

###  Roll Now

To roll immediately:

1.	From the Rolls tab: If this is your first roll, click either **Cluster**, **Virtual Node Group**, or **Node Pool**.

    -OR-

    From the Create Roll drop-down menu on the right of the screen, click either **Cluster Roll**, **VNG Roll**, or **Node Pool Roll**.

    Alternative options for starting a roll:

    *   From the Cloud Cluster, Virtual Nodes Group tab: Select a VNG from the list, and then select **VNG Roll** from the Actions drop-down menu at the top-right of the screen.
    *   From the Cloud Cluster Overview, select **Cluster Roll** from the Actions drop-down menu at the top-right of the screen.


    The dialog box depends on the type of object(s) you selected to roll (a sample is shown below).

    ![Ocean-roll-vng](https://github.com/spotinst/help/assets/159915991/6c0cbb34-e08a-4d3b-9316-72f57e2dc6c6)

2.	To roll a VNG or Node Pools, select one or more VNGs or Node Groups to run from the drop-down menu at the top of the dialog box. You can optionally select **All**.
3.	Configure the following (refer to [Roll Parameters](https://docs.spot.io/ocean/features/roll?id=roll-parameters)):

    *   Set the size of a roll batch (%). 
    *   Set the batch size healthy percentage (%).
    *   Add an optional comment.
    *   Turn on or turn off **Respect Pod Disruption Budget** (PDB)
    *   Turn on or turn off **Respect Restrict Scale Down** (RSD).

 4.	Click **Roll Cluster** / **VNG** / **Node Pool**.

>**Note:** To stop a roll while it is running, click the **Stop Roll** button on the screen's right, then click **Stop Roll** in the confirmation box.

###  Create or Edit a Roll Schedule 

>**Note:** You can schedule cluster or Virtual Node Group rolls. You cannot schedule Node Pools rolls.

To create or edit a roll schedule: 

1.  To create your first roll schedule, click **Schedule a Roll**

    -OR-

    From the Create Roll drop-down menu on the right of the screen, click **Schedule Roll**.
    
    >**Note**: If you are editing an existing roll schedule, click the pencil icon on the right of the roll schedule entry in the Scheduled Rolls list.

3.	Select the roll type in the Schedule Roll wizard's first step. The available roll types depend on your system deployment.
 
    ![ocean-rolls-schedule-roll-step-1](https://github.com/spotinst/help/assets/159915991/44a77a63-981d-4fef-a996-3b314648e5ce)

4.	In the second step of the wizard, configure the following (refer to [Roll Parameters](https://docs.spot.io/ocean/features/roll?id=roll-parameters)):

    *   Select your VNG or Cluster.
    *   Configure the size of a roll batch (%). 
    *   Configure the Batch size healthy percentage (%)
    *   Add an optional comment.
    *   Turn on or turn off Respect Pod Disruption Budget (PDB)
    *   Turn on or turn off Respect Restrict Scale Down (RSD)
  
    ![ocean-rolls-schedule-roll-step-2](https://github.com/spotinst/help/assets/159915991/8ffd2e53-e421-47c2-b81d-82a0d912e7a7)
   
3.	In the third step of the wizard, set the schedule frequency using the day/week/month/time controls or type in a Cron expression.
 
    ![ocean-rolls-schedule-roll-step-3-r1](https://github.com/spotinst/help/assets/159915991/6c8eb106-57b9-4d98-8020-69cc0ee7f820)

4.	Click **Schedule Roll**. Your schedule appears in the Rolls tab - Scheduled Rolls list under Rolls History.

    ![ocean-rolls-schedule-in -history tab-1](https://github.com/spotinst/help/assets/159915991/e06344aa-f073-4156-9fb9-8cc4058a6769)

###  Delete a Scheduled Roll

To delete a scheduled roll:

1.	In the Scheduled Rolls list, to the right of the row for the required roll, click the wastebasket icon.
2.	When the confirmation message appears, type "Delete" and then click **Delete**, or click **No, Keep** (if you are not sure).   
