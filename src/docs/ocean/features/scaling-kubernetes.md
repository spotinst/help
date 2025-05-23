# Scaling (Kubernetes)

Ocean's pod-driven scaling for Kubernetes clusters serves three main goals:

- Schedule pods that failed to run on the current nodes due to insufficient resources.
- Ensure frequent scaling pods don't wait for instances to launch (see Headroom section for more details).
- Ensure cluster resources are optimally utilized.

## Spot Ocean vs. Metric-Based Node Autoscaling

Ocean ensures that all pods in the cluster have a place and capacity to run, regardless of the current cluster's load. Moreover, it ensures that there are no underutilized nodes in the cluster. Metric-based cluster autoscalers are not aware of pods when scaling up and down. As a result, they may add a node that will not have any pods or remove a node with some system-critical pods on it, like kube-dns. Usage of these autoscalers with Kubernetes is discouraged.

## Scale Up

Ocean continuously checks for unschedulable pods. A pod is unschedulable when the Kubernetes scheduler cannot find a node that can accommodate the pod. This can happen due to insufficient CPU, Memory, GPU, or [custom resource](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/), for example, when a pod requests more CPU than what is available on any of the cluster nodes. In addition, the Ocean Autoscaler supports the Extended Resources feature, as described below.

Unschedulable pods are recognized by their PodCondition. Whenever a Kubernetes scheduler fails to find a place to run a pod, it sets the `schedulable` PodCondition to false and the reason to `unschedulable`.

Ocean calculates and aggregates the number of unschedulable pods waiting to be placed and finds the optimal nodes for the pod. Ocean ensures that all the pods will have enough resources to be placed. It also distributes the Pods on the most efficient number of VMs from the desired cloud provider. In some scenarios, it will distribute certain machine types and sizes based on the pod requirements and the spot/preemptible VM prices in the relevant region.

It may take a few moments before the created nodes join the Kubernetes cluster. To minimize this time (to zero), learn more about cluster [Headroom](ocean/features/headroom.md).

<img src="/ocean/_media/features-scaling-k8s-01.png" />

### Affinity and Anti-affinity

You may want to have multiple replicas of a pod running in the cluster, but ensure that each pod does not run on the same node as other replicas of itself. In order to distribute the replicas properly, you can set an anti-affinity across availability zones. The Autoscaler will then automatically launch instances satisfying the pod requirements.

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

###  Scale Up According to Available IPs

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font> 

When the Ocean Autoscaler needs to scale up an instance, it selects the Availability Zone and the included subnet with the most available IPv4 addresses. This avoids IP address exhaustion in a specific subnet and prevents scaling up a node in a subnet that does not have enough IP addresses.
If all the subnets set for a Virtual Node Group run out of available IP addresses, scaling up is blocked, and the Spot Monitoring team will email you to request that you add more subnets to the Virtual Node Group.


### Support for Shielded GKE Nodes

Cloud service provider relevance: <font color="#FC01CC">GKE</font> 

[Shielded GKE Nodes](https://cloud.google.com/kubernetes-engine/docs/how-to/shielded-gke-nodes) is a security feature intended to prevent attacks based on impersonating a node in the cluster. The GKE mechanism achieves this by requiring a certification procedure before a new node can be registered to the cluster.

To enable the import of GKE clusters to Ocean and registration of new nodes in the cluster, the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/) will function as the approver of the signing requests instead of the GKE mechanism. This allows the Kubernetes mechanism to sign the request and let the node be registered to the cluster. The result is that Ocean can seamlessly scale up nodes in your Ocean-managed GKE cluster, and the nodes will benefit from the protection provided by the Shielded GKE Nodes feature.

### Kubernetes namespaceSelector Scaling Constraint Label 

Ocean Controller Version 2 supports the `namespaceSelector` scaling constraint label introduced in Kubernetes Version 1,24. When you apply this label, Ocean's Autoscaler scales up nodes based on the Namespace selector to schedule pods. [See Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#namespace-selector).

### Maximum Pods Custom Configuration

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font> 

AWS Kubernetes clusters use reserved [elastic network interfaces (ENI)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html#AvailableIpPerENI) to enhance network stability and predictability. In Ocean, you can use the `reservedENIs` attribute to specify the number of ENIs to reserve per instance (for cluster / virtual node group) for scaling purposes. Ocean includes reserved ENIs when calculating how many pods can be scheduled on a node. 

The Ocean autoscaler can only spin up instances with enough free IP addresses after considering the reservedENI parameter.

Reserved ENI behavior is as follows:

* When `reservedENIs = 0`: Default autoscaling behavior.
* When `reservedENIs = Integer`: Ocean autoscaler calculates how many pods can be scheduled on a node, considering this attribute.

Ensure that the attribute value is not too large, effectively blocking the usage of some instance types.

When configuring `reservedENIs` for an Ocean cluster virtual node group, if you set a custom maximum number of pods using the `maxPods` attribute in the user data, ensure it aligns with the `reservedENIs` attribute. The `reservedENIs` attribute determines the maximum number of pods per instance based on available ENIs, so any discrepancy between these settings may lead to scheduling issues or suboptimal resources.

Use the Spot API to set a custom value for autoscaling to include `reservedENIs`:

*  [Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate) 
*  [VNG](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate) 

### Resource Reservation for System Components that Manage Nodes

Cloud service provider relevance: <font color="#FC01CC">GKE</font> 

Ocean now supports node health optimization in your GKE clusters by ensuring resource reservations for system components that manage nodes, such as the Kubelet and Kube-Proxy. Ocean considers these components when calculating the resources that nodes require. Without resource reservations, nodes can become unhealthy even if they are not considered as such in the GKE platform, for example, due to a lack of resources when pods are assigned and run on the node. Resource reservations are available at both cluster and virtual node group levels.

To enable this feature for Ocean GKE, contact [Spot Support](https://spot.io/support/).

###  Ocean Instance Recovery Mechanism

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font> 

The Ocean node recovery process occurs when a spot instance in a cluster experiences an interruption and needs to be gracefully drained and replaced with a new instance. 
This process considers scaling constraints, such as labels, availability zones, pod requests, and daemon sets. 
Ocean's autoscaler ensures accurate scale-up by only launching new nodes when required to avoid wasting idle resources. 
Ocean checks where the pod can run and estimates whether a new node is required even before the pod enters the pending state.

## Scale Down

Ocean proactively identifies underutilized nodes and [bin-packs](https://en.wikipedia.org/wiki/Bin_packing_problem) their pods more efficiently to scale down the nodes and reduce cluster cost. A higher resource allocation reflects this. Every minute, Ocean simulates whether there are any running pods that can be moved to other nodes within the cluster. If so, Ocean drains those nodes (cordon the nodes and evicts the pods gracefully) to ensure continuous infrastructure optimization and increased cloud savings.

### Scale Down Behavior

- When scaling down a node is expected, Ocean utilizes a configurable draining timeout of at least 300 seconds. (This can be configured using the drainingTimeout parameter at the ocean level.) At this time, Ocean marks the node as unschedulable and evicts all pods running on it.
  - Ocean spreads out the evictions instead of deleting the pods simultaneously. All the pods that run on the nodes are evicted over a 120-second period. For example, if 10 pods run on the nodes, one pod is evicted every 12 seconds.
  - When all the pods have been successfully evicted from the node, the node is drained (scaled down) immediately without waiting for the draining timeout period to expire.
  - If the eviction fails, Ocean has a retry mechanism that tries to evict the pods a few seconds later. If eviction fails after one minute, Ocean forces the pod to be deleted.
- If there are still pods that cannot be evicted from the node when the full draining timeout period expires, the node is terminated, and the pods are removed.
- Scale down will start only if no PDB is violated by removing the pods on the node. That is the default behavior. However, you could decide to ignore the PDB restriction during scale down. (Please contact the Support team to enable the restriction to be ignored.) If ignoring PDB restriction is configured, the drain still occurs, and the spread described above provides a "best effort" to prevent violating the PDB.
- There is a parameter at the cluster level called `maxScaleDownPercentage`. This parameter indicates the percentage of the cluster nodes that can be scaled down at once. If you wish to scale down the cluster as quickly as possible, you can increase this parameter value to make the scale down more aggressive.

<img src="/ocean/_media/features-scaling-k8s-02b.png" />



### Scale Down Prevention

Some workloads are less resilient to instance replacements than others, so you can prevent node replacement while still getting the benefit of spot instance pricing. A good example of these cases is jobs or batch processes that need to finish their work without termination by the Ocean autoscale.

Ocean makes it easy to prevent scaling down of nodes running pods configured with one of the following labels:
- spotinst.io/restrict-scale-down:true label – This label is a proprietary Spot label ([additional Spot labels](https://docs.spot.io/ocean/features/labels-and-taints?id=spot-labels)) and can be configured on a pod level. When configured, it instructs the Ocean autoscaler to prevent scaling down a node that runs any pod with this label specified.
- cluster-autoscaler.kubernetes.io/safe-to-evict: false annotation – Cluster autoscaler annotation; works similarly to the restrict-scale-down label. Ocean supports the annotation to ensure easy migration from the cluster Autoscaler to Ocean.

Another method is to disable the option to scale down from a specific [virtual node group](ocean/features/vngs/). You could do this in the console.

<img src="/ocean/_media/features-scaling-k8s-002.png" />

Using the [API](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate), you could simply set the restrictScaleDown parameter to True.
Once enabled, VNG nodes are treated as if all pods running have the restrict-scale-down label. Therefore, Ocean would not scale nodes down from the virtual node group unless they are empty.

### Accelerated Scale Down

Cloud service provider relevance: <font color="#FC01CC">GKE</font> and <font color="#FC01CC">EKS</font>

Accelerated Scale Down is an Ocean Autoscaler feature that enhances efficiency and cost-effectiveness in your Kubernetes clusters. This feature monitors your Ocean cluster for underutilized nodes and terminates unnecessary ones, so you do not pay for idle resources. 

Kubernetes dynamically scales resources based on demand. However, as workloads decrease, you may find your cluster with an excess of underutilized nodes. These idle resources incur unnecessary costs. 

Accelerated Scale-Down significantly reduces the time regular scale-down processes take to scale down nodes. Once a node is identified as eligible for scale down, it is immediately scaled down by the Ocean Autoscaler, depending on a scale-down percentage parameter, `maxScaleDownPercentage`.  

`maxScaleDownPercentage` is the percentage out of the cluster nodes that can be simultaneously scaled down. You can set the maximum scale-down percentage from 1-100, 100% for maximum acceleration. 

Use Accelerated Scale Down for: 

*   Prioritizing cost optimization: Scale down resources in larger or more complex environments that do not require continuous operation, such as development and testing.  

*   Batch processing for short runs: Scale down remaining underutilized nodes after jobs with short run duration (such as every hour for 10-15 minutes) end. 

*   Workload Balancing in CI / CD pipelines: For pipelines with workloads that are resource-intensive during specific stages and less demanding during others, scale down resources during the lighter stages. 

*   Handling sudden drops in demand: Scale down resources when traffic decreases.  

To configure Accelerated scale-down:

1.  Use the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterGet) to configure Accelerated Scale Down on the Ocean cluster: 

2.  Set `cluster.autoScaler.down.aggressiveScaleDown.isEnabled = true`. 

3.  Optionally increase scale down further by increasing the maxScaleDownPercentage value up to 100%. 

### Draining Timeout per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font> 

The draining timeout (`drainingTimeout`) is the time span that Ocean waits for the draining process to complete before terminating an instance. The default is 300 seconds.

Setting the draining timeout at the Virtual Node Group level (rather than the cluster level) lets you:

* Minimize infrastructure costs by efficiently terminating nodes that are no longer needed,
* Customize Virtual Node Groups based on the time it takes to terminate a workload.

 You can set the draining timeout (under `strategy`) via the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) or via [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#draining_timeout).

###  Suspension Hours

Cloud service provider relevance: <font color="#FC01CC">AKS</font> 

You can set a suspension hours (`suspensionHours`) time frame for critical periods to exempt your cluster from Ocean's scaling-down activities and ensure uninterrupted operations.

During suspension hours, Ocean Autoscaler stops scaling down nodes for Ocean-initiated actions, such as bin packing, reverting to lower-cost nodes, or reverting to reserved nodes.

You can only set the suspension hours via the [Spot API](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterUpdate) (under Update Cluster).
* To enable suspension hours, set `isEnabled` to TRUE
* To set the time frame,  edit start and end times in `timeWindows`.

## Headroom

One of Ocean’s key features for optimizing scaling is [headroom](ocean/features/headroom), a buffer of spare capacity ensuring that a cluster is always ready for a rapid application scale up. When you configure headroom in specific amounts of resources (i.e., vCPU, memory, and GPU), or specify headroom as a percentage of the cluster’s total requested resources, the cluster can scale workloads without waiting for new instances to be provisioned.

In addition to the benefits of using headroom, it is important to know how headroom could affect scaling. The compute resources saved as headroom restrict the scale-down of a node, as if those were actual containers running, to keep the amount of headroom required. In addition, if there is missing headroom, a scale-up will be triggered to ensure that headroom is maintained.

## Pod Topology Spread Constraints

Ocean supports Kubernetes [pod topology spread constraints](https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/). This allows for the control of how pods are spread across worker nodes among failure domains such as regions, zones, nodes, and other user-defined topology domains in order to achieve high availability and efficient resource utilization.

Ocean automatically launches nodes while ensuring that the `maxSkew` is maintained. Similarly, Ocean will only scale down a node if `maxSkew` is maintained.

When pods contain spread constraints, Ocean knows their labels and can provision nodes from all relevant topologies. Before the initial **apply** action of these pods, Ocean must have at least one node from each topology so that Kubernetes is aware of their existence. A single node from each topology can easily be configured in Ocean’s [headroom](ocean/features/headroom) feature or by setting [minimum nodes per VNG](ocean/features/launch-specifications?id=attributes-and-actions-per-vng).

To support the Kubernetes feature, Ocean requires the following:

- Kubernetes version 1.19 or later (for other versions, see the note in the [Kubernetes documentation](https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/).
- Ocean Controller version 1.0.78 or later.

### Spread by Node-lifecycle Key

When you use the topology key `spotinst.io/node-lifecycle`, a running node in each topology is required before applying the workloads(s) that contain the spread constraints.

> **Important Note**: If one of the topologies running in the cluster is unavailable, the pods that are supposed to run on this topology will remain pending. For example, you have a topology key, `spotinst.io/node-lifecycle`, and spot and OD nodes in the cluster. If there are no available spot markets, the pods will remain pending since Kubernetes would not schedule them on an OD node, and consequently, Ocean would not launch an OD node.

## Support for Extended Resources Feature

The Kubernetes [extended resources](https://kubernetes.io/docs/tasks/administer-cluster/extended-resource-node/) feature allows cluster administrators to advertise node-level resources that would otherwise be unknown to Kubernetes. Ocean supports this feature (for AWS users) both in scale-up and scale-down, improving cluster performance and cost savings. To learn more about Ocean support for extended resources and how to set it up, see the tutorial [Set up Extended Resource Support](ocean/tutorials/set-up-extended-resource-support).

## Resource Limits

Ocean allows dynamic resource allocation to fit the pods' needs. By default, Ocean cluster resources are limited to 1000 CPU cores and 4000 GB memory, but this can be customized in the cluster creation and edit wizards.

## Customize Scaling Configuration

Ocean manages the cluster capacity to ensure all pods are running and resources are utilized.
If you wish to override the default configuration, you can customize the scaling configuration.
To customize the scaling configuration:

1. Navigate to your Ocean cluster.
2. Click **Actions > Customize Scaling** at the top-right of the screen.

<img src="/ocean/_media/features-scaling-k8s-03.png" />

> **Caution**: Under normal operation, Auto-scaling should be enabled, and it is not recommended to disable this function. When Auto-scaling is disabled, Ocean does not scale up or down and cannot maintain headroom. In addition, the Cluster Shutdown Hours feature will not work properly when scaling the cluster back to its desired state.

## Supported Operating Systems

Ocean supports launching instances using any operating system (OS) type, including container-optimized ones such as Bottlerocket, Container Optimized, and RancherOS.

### Windows and Linux Instances in the same Cluster

Ocean allows you to use different operating systems in a Kubernetes cluster. For example, using the [virtual node group](ocean/features/launch-specifications) (VNG) concept, you can have Ocean manage Windows nodes alongside other nodes in the cluster.

Create a Virtual Node Group with a Windows AMI.

>**Note**: For EKS, use an EKS-optimized Windows AMI. For Windows workloads, the Autoscaler automatically launches nodes only from dedicated VNGs. This means you don't need to set any specific label on the Virtual Node Group unless you have multiple VNGs and wish to ensure the workload runs on a specific Virtual Node Group.

## Support for Max Pods Configuration

Cloud service provider relevance: <font color="#FC01CC">AKS</font> 

AKS has a default configuration of the maximum number of pods that can be scheduled on each node, which can be adjusted.

The feature is also available in Ocean to improve node utilization and bin packing. With Ocean, you can set a max pods per node parameter in the following different ways:
* At the cluster level, so that all nodes have a unified configuration.
* Per virtual Node Group, so that you can have different configurations for different workloads.
If you have already configured the maximum pods per node on your AKS cluster, this configuration will be imported when the cluster is connected to Ocean.

This feature is available via API on the [cluster level](https://docs.spot.io/api/#operation/oceanAKSClusterCreate) and the [VNG level](https://docs.spot.io/api/#operation/oceanAKSVirtualNodeGroupCreate).

## Support for Pod Scaling Readiness

Cloud service provider relevance: <font color="#FC01CC">AKS</font> 

Ocean with [Controller V2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2) supports Pod Scheduling Readiness (included in Kubernetes 1.30), which considers whether a pod is ready to be scheduled. This feature lets you reduce the churn of pods that stay in a "miss-essential-resources" state for a long time. 
Pods with the `SchedulingGated` status are not scheduled. By specifying/removing a Pod's `.spec.schedulingGates`, you can control when a pod is ready to be considered for scheduling.

Use Pod Scheduling Readiness according to the [Kubernetes documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-scheduling-readiness/).

##  Dynamic IOPS

Cloud service provider relevance: <font color="#FC01CC">AWS EKS</font> 

IOPS is a unit of measure representing input/output operations per second. Dynamic IOPS lets you scale IOPS for GP3 [EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) based on instance size so that large nodes will have more IOPS, whereas smaller nodes (that usually host fewer pods) will have less IOPS.​ This feature avoids the need for a universal high IOPS setting and offsets GP3's non-linear scaling behavior. Also, since [IOPS pricing](https://aws.amazon.com/ebs/pricing/) is according to its amount, accurately matching scaling requests to IOPS can save costs.

You can dynamically scale at the EKS cluster level via the Spot API or Terraform under the cluster’s BDM configuration.

###  Spot API

Under `compute-launchSpecification-blockDeviceMappings-ebs-dynamiciops`

*  [CreateCluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate )
*  [UpdateCluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate )

###  Terraform

Under `block_device_mappings`

*  [Terraform Registry](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws#dynamic_iops)

##  Related Links

* [View Scaling Constraints](https://docs.spot.io/ocean/tutorials/view-scaling-constraints)
  



