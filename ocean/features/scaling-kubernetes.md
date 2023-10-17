# Scaling (Kubernetes)

Ocean's pod-driven scaling for Kubernetes clusters serves three main goals:

- Schedule pods that failed to run on any of the current nodes due to insufficient resources.
- Ensure that frequent scaling pods won't have to wait for instances to launch (see Headroom section for more details).
- Ensure that cluster resources are optimally utilized.

## Spot Ocean vs. Metric-Based Node Autoscaling

Ocean makes sure that all pods in the cluster have a place and capacity to run, regardless of the current cluster's load. Moreover, it ensures that there are no underutilized nodes in the cluster. Metric-based cluster autoscalers are not aware of pods when scaling up and down. As a result, they may add a node that will not have any pods, or remove a node that has some system-critical pods on it, like kube-dns. Usage of these autoscalers with Kubernetes is discouraged.

## Scale Up

Ocean continuously checks for unschedulable pods. A pod is unschedulable when the Kubernetes scheduler is unable to find a node that can accommodate the pod. This can happen due to insufficient CPU, Memory, GPU or [custom resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), for example, when a pod requests more CPU than what is available on any of the cluster nodes. In addition, the autoscaler supports the Extended Resources feature as described below.

Unschedulable pods are recognized by their PodCondition. Whenever a Kubernetes scheduler fails to find a place to run a pod, it sets the `schedulable` PodCondition to false and the reason to `unschedulable`.

Ocean calculates and aggregates the number of unschedulable pods waiting to be placed and finds the optimal nodes for the pod. Ocean ensures that all the pods will have enough resources to be placed. It also distributes the Pods on the most efficient number of VMs from the desired cloud provider. In some scenarios, it will provide a distribution of certain machine types and sizes based on the pod requirements and the spot/preemptible VM prices in the relevant region.

It may take a few moments before the created nodes join the Kubernetes cluster. In order to minimize this time (to zero), learn more about cluster [Headroom](ocean/features/headroom.md).

<img src="/ocean/_media/features-scaling-k8s-01.png"/>

### Affinity and Anti-affinity

You may wish to have multiple replicas of a pod running in the cluster, but ensure that each pod does not run on the same node as other replicas of itself. In order to distribute the replicas properly, you can set an anti-affinity across availability zones. The autoscaler will then automatically launch instances satisfying the pod requirements.

Example: Anti-affinity across availability zones:

```json
spec:
  replicas: 3
  affinity:
    podAntiAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        weight: 100
        podAffinityTerm:
          labelSelector:
            matchExpressions:
              key: test
              operator: In
              values:
                antiaffinity
          topologyKey: failure-domain.beta.kubernetes.io/zone
```

> **Tip**: In the [affinity syntax](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements), Ocean supports both `matchExpressions` and `matchLabels`.

### Support for Shielded GKE Nodes (GKE only)

[Shielded GKE Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes) is a security feature intended to prevent attacks based on impersonating a node in the cluster. The GKE mechanism achieves this by requiring a certification procedure before a new node can be registered to the cluster.

In order to enable import of GKE clusters to Ocean and registration of new nodes in the cluster, the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/) will function as the approver of the signing requests instead of the GKE mechanism. This allows the Kubernetes mechanism to sign the request and let the node be registered to the cluster. The result is that Ocean can seamlessly scale up nodes in your Ocean-managed GKE cluster, and the nodes will benefit from the protection provided by the Shielded GKE Nodes feature.

## Scale Down

Ocean proactively identifies underutilized nodes and [bin-packs](https://en.wikipedia.org/wiki/Bin_packing_problem) the pods on the nodes more efficiently to be able to scale down the nodes and reduce the cluster cost. This is reflected by a higher resource allocation. Every minute, Ocean simulates whether there are any running pods that can be moved to other nodes within the cluster. If so, Ocean drains those nodes (cordon the nodes and evicts the pods gracefully) to ensure continuous infrastructure optimization and increased cloud savings.

### Scale Down Behavior

- When scale down of a node is expected, Ocean utilizes a configurable draining timeout of at least 300 seconds. (This can be configured using the drainingTimeout parameter on the Ocean level). At this time, Ocean marks the node as unschedulable and evicts all pods running on the node.
  - Ocean spreads out the evictions instead of just deleting the pods all at once.  All the pods that run on the nodes are spread across a 120 seconds period of time. For example, if there are 10 pods running on the nodes, one pod is evicted every 12 seconds.
  - If the eviction fails, Ocean has a retry mechanism that tries to evict the pods a few seconds later. If eviction still fails after one minute, Ocean forces deletion of the pod.
- After the draining timeout has expired, Ocean terminates the node and removes any pods that were not successfully evicted.
- Scale down will start only if no PDB is violated by removing the pods on the node. That is the default behavior. However, you could decide to ignore the PDB restriction during scale down. (Please reach out to the Support team to enable ignoring the restriction.) If ignoring PDB restriction is configured, the drain still occurs, and the spread described above provides a "best effort" to prevent violating the PDB.
- There is a parameter at the cluster level called `maxScaleDownPercentage`. This parameter indicates the percentage out of the cluster nodes that can be scaled down at once. If you wish to scale down the cluster as quickly as possible, you can increase this parameter value to make the scale down more aggressive.

<img src="/ocean/_media/features-scaling-k8s-02b.png" />

### Scale Down Prevention

Some workloads are not as resilient to instance replacements as others, so you may wish to prevent replacement of the nodes, while still getting the benefit of spot instance pricing. A good example of these cases are jobs or batch processes that need to finish their work without termination by the Ocean autoscaler.

Ocean makes it easy to prevent scaling down of nodes running pods configured with one of the following labels:
- spotinst.io/restrict-scale-down:true label – This label is a proprietary Spot label ([additional Spot labels](https://docs.spot.io/ocean/features/labels-and-taints?id=spot-labels)) and can be configured on a pod level. When configured, it instructs the Ocean autoscaler to prevent scaling down a node that runs any pod with this label specified.
- cluster-autoscaler.kubernetes.io/safe-to-evict: false annotation – Cluster autoscaler annotation; works similarly to the restrict-scale-down label. Ocean supports the annotation to ensure easy migration from the cluster autoscaler to Ocean.

Another method is to disable the option to scale down from a specific [virtual node group](ocean/features/vngs/). You could do this in the console.

<img src="/ocean/_media/features-scaling-k8s-002.png" />

Using the [API](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate), you could simply set the restrictScaleDown parameter to True.
Once enabled, VNG nodes are treated as if all pods running have the restrict-scale-down label. Therefore, Ocean would not scale nodes down from the virtual node group unless they are empty.

## Headroom

One of Ocean’s key features for optimizing scaling is [_headroom_](ocean/features/headroom), a buffer of spare capacity ensuring that a cluster is always ready for a rapid application scale up. When you configure headroom in specific amounts of resources (i.e., vCPU, memory, and GPU), or specify headroom as a percentage of the cluster’s total requested resources, the cluster can scale workloads without waiting for new instances to be provisioned.

In addition to the benefits of using headroom, it is important to know how headroom could affect scaling. The compute resources saved as headroom restrict scale-down of a node, as if those were actual containers running, in order to keep the amount of headroom required. In addition, if there is missing headroom, a scale up will be triggered to ensure that headroom is maintained.

## Pod Topology Spread Constraints

Ocean supports Kubernetes [pod topology spread constraints](https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/). This allows for the control of how pods are spread across worker nodes among failure domains such as regions, zones, nodes, and other user-defined topology domains in order to achieve high availability and efficient resource utilization.

Ocean automatically launches nodes while ensuring that the `maxSkew` is maintained. Similarly, Ocean will only scale down a node if `maxSkew` is maintained.

When pods contain spread constraints, Ocean is aware of their labels and can provision nodes from all relevant topologies. Before the initial apply action of these pods, Ocean is required to have at least a single node from each topology so that Kuberentes is aware of their existence. A single node from each topology can easily be configured in Ocean’s [headroom](ocean/features/headroom) feature or by setting [minimum nodes per VNG](ocean/features/launch-specifications?id=attributes-and-actions-per-vng).

To support the Kubernetes feature, Ocean requires the following:

- Kubernetes version 1.19 or later (for other versions, see the note in the [Kubernetes documentation](https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/).
- Ocean Controller version 1.0.78 or later.

### Spread by Node-lifecycle Key

When you use the topology key `spotinst.io/node-lifecycle`, a running node in each topology is required before applying the workloads(s) that contain the spread constraints.

> **Important Note**: If one of the topologies running in the cluster is not available, the pods that are supposed to run on this topology will remain pending. For example, you have a topology key `spotinst.io/node-lifecycle`, and you have spot and OD nodes in the cluster. If there are no available spot markets, the pods would remain pending since Kubernetes would not schedule them on an OD node, and consequently, Ocean would not launch an OD node.

## Support for Extended Resources Feature

The Kubernetes [extended resources](https://kubernetes.io/docs/tasks/administer-cluster/extended-resource-node/) feature allows cluster administrators to advertise node-level resources that would otherwise be unknown to Kubernetes. Ocean supports this feature (for AWS users) both in scale up and scale down, improving cluster performance and cost savings. To learn more about Ocean support for extended resources and how to set it up, see the tutorial [Set up Extended Resource Support](ocean/tutorials/set-up-extended-resource-support).

## Resource Limits

Ocean allows dynamic resource allocation to fit the pods' needs. Ocean cluster resources are limited to 1000 CPU cores and 4000 GB memory by default. This can be customized in the cluster creation and edit wizards.

## Customize Scaling Configuration

Ocean manages the cluster capacity to ensure all pods are running and that resources are utilized.
If you wish to override the default configuration, you can customize the scaling configuration.
To customize the scaling configuration:

1. Navigate to your Ocean cluster.
2. Click on the Actions button on the top-right side of the screen to open the actions menu.
3. Choose Customize Scaling.

<img src="/ocean/_media/features-scaling-k8s-03.png" />

> **Caution**: Under normal operation, Auto-scaling should be enabled, and it is not recommended to disable this function. When Auto-scaling is disabled, Ocean does not scale up or down, and cannot maintain headroom. In addition, the Cluster Shutdown Hours feature will not work properly when scaling the cluster back to its desired state.

## Supported Operating Systems

Ocean supports launching instances using any operating system (OS) type, including container-optimized OSs such as Bottlerocket OS, Container Optimized OS, and RancherOS.

### Windows and Linux Instances in the same Cluster

Ocean provides the flexibility to use different operating systems in a Kubernetes cluster. For example, using the [virtual node group](ocean/features/launch-specifications) (VNG) concept, you can have Ocean manage Windows nodes alongside other nodes in the cluster.

All you need to do is to create a VNG with a Windows AMI and you are all set. (Please note for EKS users, you must use an EKS optimized Windows AMI.) For Windows workloads, the Autoscaler automatically launches nodes only from dedicated VNGs. This means that there is no need to set any specific label on the VNG, unless you have multiple VNGs and you wish to ensure the workload runs on a specific VNG.

## AKS Support for Max Pods Configuration

There is a default configuration in AKS of maximum pods that can be scheduled on each node and this default number of pods can be adjusted.

The feature is also available in Ocean in order to improve node utilization and bin packing. With Ocean, you can set a max pods per node parameter in the following different ways:
* At the cluster level, so that all nodes have a unified configuration.
* Per virtual Node Group, so that you can have different configurations for different workloads.
If you have already configured maximum pods per node on your AKS cluster, this configuration will be imported during the connection of the AKS cluster to Ocean.

This feature is available via API on the [cluster level](https://docs.spot.io/api/#operation/oceanAKSClusterCreate) and the [VNG level](https://docs.spot.io/api/#operation/oceanAKSVirtualNodeGroupCreate).

## What’s Next?

Learn more about how Ocean manages [headroom](ocean/features/headroom).
