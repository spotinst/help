# Kubernetes Cluster Autoscaling

Elastigroup is an infrastructure scaling service for Kubernetes that adjusts infrastructure capacity and size to meet the Pods, Containers and applications needs.

The main purpose of Elastigroup is to get pending pods a place to run while dynamically fit the infrastructure based on the Pod size and needs. Elastigroup periodically checks whether there are any pending pods and increases the size of the cluster if it makes sense and if the scaled-up cluster is still within the user-provided constraints.

## Anatomy

Spot Elastigroup consists of two components:

- Ocean Controller (_SPT-CTL_): A pod that lives within your k8s cluster, responsible for collecting metrics and events. The events are being pushed via one way secured link to the second component for business logic and capacity scale up/down activities.
- Spot Elastigroup SaaS: The SaaS is responsible to aggregate the metrics from the SPT-CTL and build the cluster topology. Using the aggregated metrics, the SaaS component is applying other business logic algorithms such as Spot Instances availability prediction and Instance size/type recommendation to increase performance and optimize costs via workload density instance pricing models (across On-Demand / Reserved and Spot Instances).

<img src="/elastigroup/_media/kubernetes-cluster-autoscaling_1.jpg" />

## Spot Elastigroup vs. Metric-Based Node Autoscaling

Elastigroup makes sure that all pods in the cluster have a place to run, no matter if there is any CPU load or not. Moreover, it tries to ensure that there are no unneeded nodes in the cluster.

Metric-based cluster autoscalers don't care about `Pods` when scaling up and down. As a result, they may add a node that will not have any Pods, or remove a node that has some system-critical pods on it, like `kube-dns`. Usage of these autoscalers with Kubernetes is discouraged.

## Changing the Size of the Kubernetes Cluster

Elastigroup increases the size of the cluster when

- There are pods that failed to schedule on any of the current nodes due to insufficient resources.
- When some nodes are consistently unneeded for a significant amount of time. A node is unneeded when it has low utilization and all of its important pods can be moved elsewhere.

## Scale Up

Elastigroup continuously checks for any unschedulable pods. A pod is unschedulable when the Kubernetes scheduler is unable to find a node that can accommodate the pod.
For example, a pod can request more CPU that is available on any of the cluster nodes. Unschedulable pods are recognized by their `PodCondition`. Whenever a Kubernetes scheduler fails to find a place to run a pod, it sets `schedulable` PodCondition to false and reason to `unschedulable`.

Elastigroup calculates and aggregates the number of unschedulable Pods waiting to be placed and finds the optimal distribution of nodes. Elastigroup makes sure that the biggest Pod will have enough resources to be placed, it also makes sure to distribute the Pods on the most efficient number of VMs from the desired cloud provider. In some scenarios, it will prefer to provision a distribution of certain 8xl & medium machines based on the Pods requirements and the Spot prices in the relevant region.

It may take up to a few minutes before the created nodes appear in Kubernetes, in order to minimize this time (to zero) you can read more about Cluster Headroom and Overprovisioning (later in this document).

## Scale Down

Elastigroup constantly checks which nodes are unneeded in the cluster.
A node is considered for removal when:

- All pods running on the node (except these that run on all nodes by default, like manifest-run pods or pods created by daemonsets) can be moved to other nodes in the cluster.
- The sum of cpu and memory requests of all pods running on this node is smaller than 50% of the node's allocatable (not node capacity )

Elastigroup simulates the cluster's topology and state `post` the scale down activity and decides whether the action can be executed or not.

## Constraints and Labels

To make scheduling more efficient and compatible with Kubernetes, the Elastigroup supports all of the Kubernetes constraint mechanisms for scheduling pods:

- Node Selector – Constrain Pods to nodes with particular labels.
- Node Affinity – Constrain which nodes your Pod is eligible to be scheduled on based on labels on the node.
  We support hard / soft affinity (requiredDuringSchedulingIgnoredDuringExecution /preferredDuringSchedulingIgnoredDuringExecution)
- Pod Affinity and Pod Anti-Affinity – Schedules a Pod based on which other Pods are or are not running on a node.
- Pod Port Restrictions – We validate that each pod will have required ports available on the machine

## Pods and Node Draining Process (Graceful Termination)

When a node is being scaled down due to low utilization or Spot Instance interruption, Elastigroup follows a strict draining process to make sure that running Pods and Containers have enough time to drain and get re-scheduled.

1. Identify the node that is marked for scale down / Spot Instance is predicted to be interrupted
2. In the event of a Spot predicted Interruption — Elastigroup launches a replacement Instance approximately 15 minutes ahead of time
3. Elastigroup locates the running Pods & Containers on the node that is marked for termination
4. Elastigroup sends an Evict signal to the Pods – one by one and grants each one of the pods with `120 seconds` ([Elastigroup Draining Timeout configuration](https://docs.spot.io/api/#operation/elastigroupAwsCreate)) of draining timeout
   - The eviction process is responsible for re-scheduling each Pod on a new node in the cluster
   - The eviction process waits until the draining timeout expires and then terminates the Pod
5. Once all the containers & Pods have been successfully rescheduled on a different node(s) in the cluster, Elastigroup sends a command to terminate the actual node.

## Scale Down Prevention

- Pods with restrictive PodDisruptionBudget. (Read more)
- `Kube-system Pods` that:
  - are not run on the node by default, \*
  - don't have PDB or their PDB is too restrictive
- Pods that are not backed by a controller object (so not created by deployment, replica set, job, stateful set etc). \*
- Pods with local storage. \*
- Pods that cannot be moved elsewhere due to various constraints (lack of resources, non-matching `node selectors` or `affinity`, matching `anti-affinity`, etc)

## How does Horizontal Pod Autoscaler (HPA) work with Spot Elastigroup?

Horizontal Pod Autoscaler changes the deployment's or replicaset's number of replicas based on CPU load or other custom metrics. If the load increases, HPA will create new replicas, for which there may or may not be enough space in the cluster.
If there are not enough resources, Spot Elastigroup will try to bring up new nodes, so that the HPA-created pods have a place to run. If the load decreases, HPA will stop some of the replicas. As a result, some nodes may become underutilized or completely empty, and then Spot Elastigroup will delete such unneeded nodes.

## Scale to 0

it is possible to scale a node group to 0 (and obviously from 0), assuming that all scale-down conditions are met.

## Headroom (Overprovisioning)

Overprovisioning can be configured using deployment running pause pods with very low assigned priority (see Priority Preemption) which keeps resources that can be used by other pods. If there is not enough resources then pause pods are preempted and new pods take their place. Next pause pods become unschedulable and force CA to scale up the cluster.

## PodDisruptionBudget in scale-down

Before starting to delete a node, Elastigroup makes sure that `PodDisruptionBudgets` for pods scheduled there allow for removing at least one replica. Then it deletes all pods from a node through the `pod eviction API`

## Node Health Check and Auto-healing

The status of each Kubernetes node is represented as a `condition` object, that describes the status of different aspects of the node. The conditions types are: `OutOfDisk`, `Ready`, `MemoryPressure`, `DiskPressure`, `NetworkUnavailable`. Each condition type has a status `False` / `True` / `Unknown`

Elastigroup monitors the nodes' status every 30 seconds and in case it identifies that the `Ready` condition is set to `False` or `Unknown` it will consider this instance as Unhealthy and will trigger a replacement to replace it with a new healthy node.
