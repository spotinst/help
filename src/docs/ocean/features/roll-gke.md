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

This logic can improve the cluster's utilization since the workload would run on infrastructure that best matches the workload. Ocean constantly tries to scale down the cluster, but a cluster roll could improve the utilization if this is not possible
