<meta name="robots" content="noindex">

# Roll(GKE)

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








