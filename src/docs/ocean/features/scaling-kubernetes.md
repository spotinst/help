# Scaling (Kubernetes)

Ocean's pod-driven scaling for Kubernetes clusters serves three main goals:

- Schedule pods that failed to run on any of the current nodes due to insufficient resources.
- Ensure that frequent scaling pods won't have to wait for instances to launch (see Headroom section for more details).
- Ensure that cluster resources are optimally utilized.

## Spot Ocean vs. Metric-Based Node Autoscaling

Ocean makes sure that all pods in the cluster have a place and capacity to run, regardless of the current cluster's load. Moreover, it ensures that there are no underutilized nodes in the cluster. Metric-based cluster autoscalers are not aware of pods when scaling up and down. As a result, they may add a node that will not have any pods, or remove a node that has some system-critical pods on it, like kube-dns. Usage of these autoscalers with Kubernetes is discouraged.

## Scale Up

Ocean continuously checks for unschedulable pods. A pod is unschedulable when the Kubernetes scheduler is unable to find a node that can accommodate the pod. This can happen due to insufficient CPU, Memory, GPU or [custom resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), for example, when a pod requests more CPU than what is available on any of the cluster nodes.

Unschedulable pods are recognized by their PodCondition. Whenever a Kubernetes scheduler fails to find a place to run a pod, it sets the `schedulable` PodCondition to false and the reason to `unschedulable`.
Ocean calculates and aggregates the number of unschedulable pods waiting to be placed and finds the optimal nodes for the job. Ocean ensures that all the pods will have enough resources to be placed. It also distributes the Pods on the most efficient number of VMs from the desired cloud provider. In some scenarios, it will provide a distribution of certain machine types and sizes based on the pod requirements and the spot/preemptible VM prices in the relevant region.

It may take a few moments before the created nodes join the Kubernetes cluster. In order to minimize this time (to zero), learn more about cluster [Headroom](ocean/features/headroom.md).

<img src="/ocean/_media/features-scaling-k8s-01.png" />

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

> **Tip**: In the [affinity syntax](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#resources-that-support-set-based-requirements), Ocean supports `matchExpressions` only. The `matchLabels` selector is not supported.

## Scale Down

Ocean constantly checks which nodes are unneeded in the cluster. A node is considered for removal when:

- All pods running on the node (except these that run on all nodes by default, like manifest-run pods or pods created by daemonsets) can be moved to other nodes in the cluster. (based on Pod Disruption Budget (PDB), Node and pod affinity /anti-affinity and labels).
- The node's removal won't reduce the headroom below the target.
- Ocean will prefer to downscale the least utilized nodes first

Ocean simulates the cluster's topology and state `post` the scale-down activity and decides whether the action can be executed or not.

### Scale down prevention

- Pods with restrictive PodDisruptionBudget will be evicted gradually if the scale down will cause a violation of the disruption budget, Ocean will not scale down the node.
- Pods that are not backed by a controller object (so not created by deployment, replica set, job, stateful set)
- Pods that cannot be moved elsewhere due to various constraints (lack of resources, non-matching node selectors or affinity, matching anti-affinity)
- Pods that have the following label: `spotinst.io/restrict-scale-down`:`true`.

### Pods & Nodes Draining Process

Ocean ensures that pods and nodes are gracefully terminated in a case of scale-down or an instance replacement.
Node Termination process is as follows:

1. Check for scale-down restriction label (`spotinst.io/restrict-scale-down`:`true`) on node's pods
   - If found, the node is not eligible for scale-down
2. Scan All the pods and mark the ones that need to be rescheduled
   - Mark all the pods that don't have PDB configured, and start evicting them in parallel
3. For pods with PDB, Ocean performs the eviction in chunks and makes sure that it won't interfere with the minimal budget configured (For example a PDB .spec.minAvailable is 3, while there are 5 pods, 4 of them run on the node that is about to get scaled down; Ocean will evict 2 pods, wait for health signal and move to the next 2.
4. An eviction is not completed until Ocean gets health signal from the new pod [readiness\liveness](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/) probe (when configured) and the old pod was successfully terminated ([wait for grace-period or after pre Stop command](https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods))
5. Ocean provides draining timeout of 120 seconds by default (configurable) for every Pod before terminating it.

<img src="/ocean/_media/features-scaling-k8s-02.png" />

## Headroom

Ocean provides the option to include a buffer of spare capacity (vCPU and memory resources) known as headroom. Headroom ensures that the cluster has the capacity to quickly scale more Pods without waiting for new nodes to be provisioned.
Ocean optimally manages the headroom to provide the best possible cost/performance balance. However, headroom may also be manually configured to support any use case.

In addition, cluster headroom may be further customized by using a separate headroom configuration per [Launch Specification](./launch-specifications). Custom Headroom units per Launch Specification are enabled when using headroom in Manual configuration mode, and are accessible via Launch Specification [API](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate).

When custom headroom units are specified on one Launch Specification or more, Ocean will maintain a buffer of spare capacity that matches the constraints defined in that Launch Specification (node labels, taints, etc.), in addition to the Cluster level Headroom units. For example, if the cluster level Headroom is configured to maintain 2 headroom units of 2048 MiB and 2000 CPU, and a specific Launch Specification is configured to maintain 2 Headroom unit of the same size, that means a total of 4 headroom units will be maintained at all times, 2 of them matching the Launch Specification's constraints.

## Resource Limits

Ocean allow dynamic resource allocation to fit the pods' needs. Ocean cluster resources are limited to 1000 CPU cores and 4000 GB memory by default, this can be customized via the cluster creation and edit wizards.

## Customize Scaling Configuration

Ocean manages the cluster capacity to ensure all pods are running and that resources are utilized.
If you wish to override the default configuration, you can customize the scaling configuration.
To customize the scaling configuration:

1. Navigate to your Ocean cluster
2. Click on the Actions button on the top-right side of the screen to open the actions menu
3. Choose Customize Scaling

<img src="/ocean/_media/features-scaling-k8s-03.png" />

> **Caution**: Under normal operation, Auto-scaling should be enabled, and it is not recommended to disable this function. When Auto-scaling is disabled, Ocean does not scale up or down, and cannot maintain headroom. In addition, the Cluster Shutdown Hours feature will not work properly when scaling the cluster back to its desired state.

## Supported Operating Systems

Ocean supports launching instances using any operating system (OS) type, including container-optimized OSs such as AWS Bottlerocket, GCP Container Optimized OS, and RancherOS.

## What’s Next?

Learn more about how Ocean manages [headroom](ocean/features/headroom).
