# Rolls

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">AWS ECS</font>, <font color="#FC01CC">GKE</font>

The Roll feature lets you perform changes to align cluster infrastructure with a new image, user data, or security groups without turning off the Ocean autoscaler or manually detaching nodes in the cluster.

> **Note**: Where this page uses Kubernetes terms such as node and pod, the ECS and AKS equivalents such as container instance or VM and task are also applicable.

In Ocean, you can roll your cluster with a single click. The roll feature considers the actual workloads running in the cluster. Ocean freezes scale-down activity in the cluster and launches new compute capacity to match the workload requirements. While the new nodes are starting up, the old ones can still scale up if necessary and will scale down only after the new ones are healthy.

## How It Works

Whether you are rolling your entire Ocean cluster, a specific virtual node group (VNG), or only specific nodes, Ocean can divide the roll into batches according to your chosen batch sizes. For example, if you roll according to the default batch size of 20%, Ocean divides the roll into 5 batches and processes as follows:

1. Ocean calculates the number of batches required in the roll based on the batch size you enter and divides the workloads equally among the batches.
2. Ocean starts with the first batch, replacing each node to ensure the successful accommodation of the workloads on the new nodes. Ocean's autoscaler considers all relevant constraints in place before the roll.
3. When all nodes in a batch are finished processing and at least 50% of them have successful replacement, then Ocean starts to work on the next batch. (The percentage can be configured using the `batchMinHealthyPercentage` parameter, explained below.)

### Replace Node with Smaller Nodes

A cluster roll can replace a single node with multiple smaller nodes. This avoids a cluster roll failure when only smaller node types are configured in the Ocean cluster before initiating the roll. Rather than replacing each existing node with one of the same type, Ocean provisions the most relevant infrastructure during the cluster roll. This is based on the workloads currently running on the nodes chosen for rolling. This is especially helpful when you have modified the list of allowed node types or if your goal is to remove and replace a specific node type with multiple smaller ones.

This logic can improve the cluster's utilization since the workload would run on infrastructure that best matches the workload. Ocean constantly tries to scale down the cluster, but a cluster roll could improve the utilization if this is impossible.

### Respect Pod Disruption Budget

Some pods may have a [pod disruption budget](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/) (PDB). Using the parameter `respectPdb`, you can instruct Ocean to check the PDB. When `respectPdb` is set to True, Ocean will not replace a node if the PDB is violated.

### Minimum Healthy Instances in Batch

The parameter `batchMinHealthyPercentage` indicates a single batch's minimum percentage of healthy instances. The cluster roll will fail if the amount of healthy instances in a single batch is under this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. You can override this behavior by setting `ignorePdb` to `True`.

### Node Status

During the replacement process, Ocean provides information about the status of each node. The following statuses are reported:

- REPLACED. The node was successfully replaced by a new node.
- TO_BE_REPLACED. Ocean did not try to replace the node yet.
—COULD_NOT_BE_REPLACED. The node was not replaced. This situation generally happens when no replacement node becomes healthy within the grace period.
- NOT_REPLACED_DUE_TO_PDB. Replacing the node violates the PDB configuration on one of the pods running on the node. This status is only relevant when `respectPdb` is set to True. If a node could not be replaced due to PDB, it would be considered a successful replacement, so if 50% of the nodes should be replaced to proceed to the next batch and all of the nodes were not replaced due to PDB, Ocean would continue to the next batch.

### Roll Status

Ocean assigns a status to each stage of the roll process. A roll can have one of the following statuses:

- IN_PROGRESS: The roll is in this status as long as nodes are successfully replaced.
FAILED: An error caused the roll to fail, and an error message is recorded in the Elastilog.
- STOPPED: The user stopped the roll. When the user stops a roll, the nodes remain in the state they were in at the time of the stop. (For example, there is no rollback to an initial state.)
- COMPLETED: The roll transitions to Completed status when all nodes have been processed, and at least 50% of them have been successfully replaced.

> **Tip**: In the UI, a specific batch may appear with a `Pending` state. This means that even though the roll process has started, that batch has not yet started to replace its nodes.

### Log Messages

The following messages are recorded in the log:

- Roll \${ROLL_ID} has completed successfully.
- Roll ${ROLL_ID} has failed. Reason: ${FAILURE_REASON}.
- Roll ${ROLL_ID} has started. Number of batches ${NUM_OF_BATCHES}.
- Roll \${ROLL_ID} has stopped.

The following are possible reasons for failure:

- The roll has been stuck in the same roll status for too long.
- The Ocean Controller is not active.
- More than 50 percent of nodes could not be replaced.
- There may be constraint mismatches or configuration mismatches such as labels, selectors, taints, or affinity rules.
- There may be one or more unhealthy nodes.

### Restrict Scale Down during Roll

The roll does not consider the [restrict-scale-down](ocean/features/scaling-kubernetes.md#scale-down-prevention) label. Ocean will replace a node even if a task or pod uses this label. 
Ocean's autoscaler considers all relevant constraints in place before the roll.

## Schedule Cluster Roll

You can schedule a roll in the Create Cluster or Update Cluster [API](https://docs.spot.io/api/) using a `cron` expression. Set it to roll during off-hours.

<img src="/ocean/_media/features-roll-01-1.png" />

## Roll per Node or VNG

Ocean VNGs let you to run different node groups within a single Ocean cluster. This makes it possible to run different groups of nodes, such as the examples below, on the same cluster.

- Separate development, test, and production environments
- Different teams
- Different applications or microservices

The Ocean API enables you to roll one or more nodes in a VNG without having to roll the entire cluster. This is useful when you have different groups of nodes running in the cluster, like those described above, and don't want to roll the entire cluster for a local software update. You can do this by specifying a list of node IDs or a specific VNG ID.

For example, you can use:

- The `instanceIds` parameter (for Ocean for Kubernetes on AWS and ECS) or `instanceNames` (for Ocean GKE) to initiate a roll of one or more specific nodes.
- The `launchSpecIds` parameter initiates a roll of one or more VNGs in the cluster. When you specify a VNG ID, all the nodes in that VNG are rolled.

For more information about the specific APIs, see Initiate Cluster Roll: [AKS](https://docs.spot.io/api/#operation/oceanAzureRollInit), [Kubernetes on AWS](https://docs.spot.io/api/#operation/oceanAwsRollInit), [ECS](https://docs.spot.io/api/#operation/oceanEcsRollInit), [GKE](https://docs.spot.io/api/#operation/oceanGkeRollInit)

## Start A Cluster Roll

1. In your Ocean cluster, go to Actions and click Cluster Roll.

   <img src="/ocean/_media/features-roll-01.png" width="200" height="213" />

2. Enter the following information:
   - Batch Size: Indicates how much will be rolled at a time. This value is a percentage of the cluster's target capacity.
   - Comment: Describe the reason for the roll.
   - Respect Pod Disruption Budget: Accept the default setting, or uncheck if you do not want to respect the PDB.

 <img src="/ocean/_media/features-roll-a.png" width="592" />

3. Click **Roll**.

## Start a VNG Roll

1. In your Ocean cluster, click the Virtual Node Groups tab.

   <img src="/ocean/_media/features-roll-02a-1.png" />

2. In the list of VNGs, mark all the VNGs you want to roll.

   <img src="/ocean/_media/features-roll-02a-2.png" />

3. Click VNG Actions and Roll VNG.

   <img src="/ocean/_media/features-roll-02a-3.png" />

4. Enter the Batch Size and Comments, indicate whether you want to respect the pod disruption budget, and click **Roll VNG(s)**.

   <img src="/ocean/_media/features-roll-b.png" width="593" />

## Monitor The Roll

After you have created the roll, click the **Cluster Roll** tab.

View details of the roll you created in Step 1, and follow roll progress.

<img src="/ocean/_media/features-roll-03.png" />


