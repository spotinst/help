# Revert to Lower-Cost Node

In addition to [scale up](ocean/features/scaling-kubernetes?id=scale-up), [scale down](ocean/features/scaling-kubernetes?id=scale-down), and various optimization processes (e.g., Revert to Reserved Capacity, Savings Plans, and Revert to Spot), Ocean employs the *Revert to Lower-cost Node* process. This process applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes.

There are some use cases when scaling down is not possible. One case is anti-affinity rules which ensure pods run on different nodes. Even if the node is underutilized because the other pods have finished running, it is not possible to scale down the node. The reason is that if we scale down the node the anti-affinity will be violated.

Another example could occur when the configuration requires a minimum number of nodes at the cluster or virtual node group (VNG) level. Either situation may result in cluster nodes that have unused resources without the ability to scale down for optimization.

To address these cases, the revert to lower-cost node process analyzes the nodes in the cluster and checks for underutilized nodes that Ocean was not able to scale down. Then, Ocean proactively replaces them with cheaper nodes if a more profitable VM instance is available.

## How it Works

Ocean constantly scans the cluster’s node utilization. The revert to lower-cost node optimization process is applied when **all** of the following conditions are met:
- No scaling event occurred in the last 30 minutes in the specific VNG (neither scale up nor down event).
- CPU and memory usage is less than 50% **or** GPU utilization is less than 50%.
- The node was underutilized for at least 10 minutes.
- The node life cycle is a spot instance.
- No ongoing replacement in the relevant VNG.
- A smaller instance type than the running instance type is configured in the configuration.

Then, Ocean will replace all of the relevant nodes in the VNG one by one. Meaning, each time that the process is triggered, it will replace up to one instance in a VNG. (Nodes from different VNGs can be replaced at the same time.)
- If the cluster is set to utilize reserved instances (RIs), the autoscaler will try to launch RIs first.
- If there is no spot available and there is a smaller on-demand (OD) instance that is also cheaper, Ocean will try to replace the instance with that OD instance.

Ocean will not replace nodes with restricted scale down configuration (neither on the pods nor on the VNG level) or where the pod disruption budget would be violated.

> **Note**: The process is only supported in AWS Kubernetes and GCP. The process is not supported for instance types that run GPU workloads in GCP.

The proactive cost optimization process runs in addition to Ocean's existing optimization processes such as:
- *Revert to RI or Savings Plan process* - Ocean constantly monitors for available RIs or Savings Plans in your account (when the strategy.utilizeReservedInstances or utilizeCommitments flag is enabled). If there is an Ocean monitored node that runs as spot or OD, Ocean will try to replace it with the available RI or Savings Plan nodes.
- *Revert to Spot process* - If a node was launched on-demand because there was no available spot node in the market, Ocean continues scanning the market for an available spot node and reverts as soon as there is one available.

## What’s Next?

Learn more about Ocean's [scaling](ocean/features/scaling-kubernetes) processes.
