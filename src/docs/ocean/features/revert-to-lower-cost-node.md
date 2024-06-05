# Revert to Lower-Cost Node

In addition to [scale up](ocean/features/scaling-kubernetes?id=scale-up), [scale down](ocean/features/scaling-kubernetes?id=scale-down), and various optimization processes (e.g., Revert to Reserved Capacity, Savings Plans, and Revert to Spot), Ocean employs the Revert to Lower-cost Node process. This process is applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes.

There are some use cases when scaling down is not possible. One case is anti-affinity rules which ensure pods run on different nodes. Even if the node is underutilized because the other pods have finished running, it is impossible to scale down the node. The reason is that if we scale down the node, the anti-affinity will be violated.

Another example could occur when the configuration requires a minimum number of nodes at the cluster or virtual node group (VNG) level. Either situation may result in cluster nodes with unused resources that cannot scale down for optimization.

To address these cases, the revert to lower-cost node process analyzes the nodes in the cluster and checks for underutilized nodes that Ocean could not scale down. Then, Ocean proactively replaces them with cheaper nodes if a more profitable VM instance is available.

## How it Works

Ocean constantly scans the cluster’s node utilization. The revert to lower-cost node optimization process is applied when **all** of these conditions are met:

*  [Cluster Orientation](https://docs.spot.io/ocean/features/cluster-orientation?id=cluster-orientation):
   *  Balanced Orientation (default):
      *  No scaling occurred in the last 25 minutes in the specific Virtual Node Group (neither scale up nor down event).
      *  CPU and memory usage is less than 50%, or GPU utilization is less than 50%.
   *  Cost Orientation:
      *  No scaling occurred in the last 20 minutes in the specific Virtual Node Group (neither scale up nor down event).
      *  CPU and memory usage is less than 60%, or GPU utilization is less than 60%.
   *  Cheapest Orientation:
      *  No scaling occurred in the last 15 minutes in the specific Virtual Node Group (neither scale up nor down event).
      *  CPU and memory usage is less than 70%, or GPU utilization is less than 70%.
*  The node was underutilized for at least 10 minutes.
*  The node life cycle is a spot instance.
*  No ongoing replacement in the relevant Virtual Node Group.
*  A smaller instance type than the running one is configured in the configuration.

Then, Ocean will individually replace all the relevant nodes in the Virtual Node Group. Each time the process is triggered, it will replace up to one instance in a Virtual Node Group. (Nodes from different Virtual Node Groups can be replaced simultaneously.)
- If the cluster is set to utilize Reserved Instances (RIs), the autoscaler will try to launch RIs first.
- If there is no spot available and there is a smaller on-demand instance that is also cheaper, Ocean will try to replace the instance with that OD instance.

Ocean will not replace nodes with restricted scale-down configuration (neither on the pods nor the Virtual Node Group level) or where the pod disruption budget would be violated.

> **Note**: The process is only supported in AWS Kubernetes and GCP. The process is unsupported, for instance, types that run GPU workloads in GCP.

The proactive cost optimization process runs in addition to Ocean's existing optimization processes, such as:
- Revert to RI or Savings Plan process — Ocean constantly monitors your account's available RIs or Savings Plans (when the `strategy.utilizeReservedInstances` or `utilizeCommitments` flag is enabled). If an Ocean-monitored node runs as spot or on-demand, Ocean will try to replace it with the available RI or Savings Plan nodes.
- Revert to Spot process — If a node was launched on demand because no spot node was available in the market, Ocean continues scanning the market for an available spot node and reverts as soon as one becomes available.


