# Roll

The Roll feature enables you to perform changes in order to align cluster infrastructure with a new image, user data or security groups without having to disable the Ocean autoscaler or manually detach nodes in the cluster.

---

**Note**: Where this page uses Kubernetes terms such as node and pod, the ECS equivalents such as container instance and task are also applicable.

---

In Ocean you can roll your cluster with a single click. The roll feature takes into consideration the actual workloads running the in cluster. Ocean freezes scale-down activity in the cluster and launches new compute capacity to match the workload requirements. While the new nodes are starting up, the `old` nodes are still able to scale up if necessary and will scale down only after the new nodes are healthy.

## How It Works

Whether you are rolling your entire Ocean cluster, a specific launch specification, or only specific nodes, Ocean can divide the roll into batches according to batch sizes that you choose. So for example, if you choose to roll according to the default batch size of 20%, Ocean divides the roll into 5 batches. The process takes place as follows:

1. Ocean calculates the number of batches required in the roll based on the batch size you enter and divides the workloads equally among the batches.
2. Ocean starts with the first batch, replacing each node in such a way that ensures the successful accomodation of the workloads on the new nodes. Ocean's autoscaler takes into consideration all relevant constraints in place before the roll.
3. When all nodes in a batch are finished processing and at least 50% of them have successful replacement, then Ocean starts to work on the next batch.

## Roll Status

Ocean assigns a status to each stage of the roll process. A roll can have one of the following statuses:

- `STARTING`: This is an indicator that the roll process is beginning. Ocean remains in this status until the first batch actually starts replacing its nodes.
- `IN_PROGRESS`: The roll is in this status as long as nodes are being replaced successfully.
- `FAILED`: An error occurred that caused the roll to fail, and an error message is recorded in the Elastilog.
- `STOPPED`: The roll was stopped by the user. When the user stops a roll, the nodes remain in the state they were in at the time of the stop. (For example, there is no rollback to an initial state.)
- `COMPLETED`: The roll transitions to Completed status when all nodes have been processed, and at least 50% of them have been successfully replaced.

---

**Tip**: In the UI, a specific batch may appear with `Pending` state. This means that even though the roll process has started, that batch has not yet started to replace its nodes.

---

### Log Messages

The following messages are recorded in the log:

- Roll \${ROLL_ID} has completed successfully.
- Roll ${ROLL_ID} has failed. Reason: ${FAILURE_REASON}.
- Roll ${ROLL_ID} has started. Number of batches ${NUM_OF_BATCHES}.
- Roll \${ROLL_ID} has stopped.

The following are possible reasons for failure:

- The roll has been stuck in the same roll status for too long.
- The Kubernetes controller is not active.
- More than 50 percent of nodes could not be replaced.
- There may be constraint mismatches or configuration mismatches such as labels, selectors, taints, or affinity rules.
- There may be one or more unhealthy nodes.

### Restrict Scale Down during Roll

The roll does not consider the [restrict-scale-down](./scaling-kubernetes) label. Ocean will replace a node even if a task or pod uses this label. As mentioned above, Ocean's autoscaler takes into consideration all relevant constraints in place before the roll.

## Roll per Node or Launch Specification

Ocean launch specifications enable you to run different node groups within a single Ocean cluster. This makes it possible to run different groups of nodes, such as the examples below, on the same cluster.

- Separate development, test, and production environments
- Different teams
- Different applications or microservices

The Ocean API enables you to roll one or more nodes in a launch specification without having to roll the entire cluster. This is useful when you have different groups of nodes running in the cluster, like those described above, and don't want to roll the entire cluster for a local software update. You can do this by specifying a list of node IDs or a specific launch specification ID.

For example, you can use:

- The `instanceIds` parameter (for Ocean for K8s on AWS and ECS) or `instanceNames` (for Ocean GKE) to initiate a roll of one or more specific nodes.
- The `launchSpecIds` parameter to initiate a roll of one or more launch specifications in the cluster. When you specify a launch specification ID, all the nodes in that launch specification are rolled.

For more information about the specific APIs, see Initiate Cluster Roll: [K8s on AWS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/roll-cluster/create/), [ECS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-ecs/roll-cluster/create/), [GKE](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-gke/roll-cluster/create/)

## Create A Roll

In your Ocean cluster, go to Actions and click Cluster Roll.

<img src="/ocean/_media/features-roll-01.png" width="200" height="213" />

1. Enter the following information:
   - Batch Size. Indicates how much will be rolled at a time. This value is a percentage of the cluster's target capacity.
   - Comment. A brief note indicating the reason for the roll.

<img src="/ocean/_media/features-roll-02.png" width="259" height="159" />

2. Click Roll.

## Monitor The Roll

After you have created the roll, click the Cluster Roll tab.

In this tab you can see the details of the roll you created in Step 1, and you can follow the progress of the roll.

<img src="/ocean/_media/features-roll-03.png" />
