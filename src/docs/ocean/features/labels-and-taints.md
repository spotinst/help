# Labels and Taints

To make scheduling more efficient and compatible with Kubernetes, Ocean supports the following [Kubernetes constraint mechanisms](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for scheduling pods:

- Node Selector – Constrains pods to nodes with particular labels.
- Node Affinity – Constrains which nodes your pod is eligible to be scheduled on based on labels on the node. Spot supports hard and soft affinity (`requiredDuringSchedulingIgnoredDuringExecution`, `preferredDuringSchedulingIgnoredDuringExecution`).
- Pod Affinity and Pod Anti-Affinity – Schedules a Pod based on which other Pods are or are not running on a node.
- Pod Port Restrictions – Validates that each pod will have required ports available on the machine.
- [Well-Known Labels](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/).

## Spot Labels

Spot labels allow you to adjust the default scaling behavior in Ocean; by adding Spot labels to your pods, you can control the node termination process or its life cycle. The Spot labels are described below.

### spotinst.io/azure-premium-storage  

The AKS scheduler does not guarantee that pods requiring premium storage will schedule on nodes that support premium storage disks.
The Spot Ocean label `spotinst.io/azure-premium-storage`is injected into every node in a node pool that supports premium storage. 
We recommended using `spotinst.io/azure-premium-storage` on your pods in cases where the pod requires premium storage disks.
This enables pods to be provisioned on the most appropriate nodes for their workloads. 
For more information, see [Azure premium storage](https://learn.microsoft.com/en-us/azure/virtual-machines/premium-storage-performance). 

### spotinst.io/restrict-scale-down

Some workloads are not as resilient to spot instance replacements as others, so you may want to lower the frequency of replacing the nodes they are running on as much as possible, while still getting the benefit of spot instance pricing. For these workloads, use the `spotinst.io/restrict-scale-down` label (set to `true`) to block the proactive scaling down of the instance for the purposes of more efficient bin packing. This will leave the instance running as long as possible. The instance will be replaced only if it goes into an unhealthy state or if forced by a cloud provider interruption.

### spotinst.io/node-lifecycle

Ocean uses the `spotinst.io/node-lifecycle` label key to indicate a node's lifecycle. It is applied to all Ocean-managed nodes and has a value of `od` (on-demand). 

This label is useful for workloads that are not resilient to spot instance interruptions and must run on on-demand instances at all times. 

By applying node affinity to the `spotinst.io/node-lifecycle` label with the value `od`, you can ensure that these workloads are scheduled only on on-demand instances. 

>**Note** `spotinst.io/node-lifecycle:spot` affinity is not supported, and unless `spotinst.io/node-lifecycle:od` affinity is applied, Ocean will continue to try to provide excess compute capacity (spot instances) for all workloads in the cluster.

### spotinst.io/gpu-type

This label helps create direct affinity to specific types of GPU hardware, freeing the user from the need to explicitly set and manage a list of VMs that contain the required hardware. Ocean automatically matches the relevant VMs (currently with AWS and GCP) for workloads having affinity rules using this label.
Valid label values are:

- `nvidia-tesla-v100`
- `nvidia-tesla-p100`
- `nvidia-tesla-k80`
- `nvidia-tesla-p4`
- `nvidia-tesla-t4`
- `nvidia-tesla-a100` (Only for AWS)
- `nvidia-tesla-m60`
- `amd-radeon-v520`
- `nvidia-tesla-t4g`
- `nvidia-tesla-a10`

> **Note**: Avoid adding Spot labels under the virtual node group (launch specification) node labels section. These labels should be added in your pod configuration only.

## Examples

Using restrict scale-down label:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
  labels:
    app: nginx
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
        spotinst.io/restrict-scale-down: "true"
    spec:
      containers:
        - name: nginx
          image: nginx:1.14.2
          ports:
            - containerPort: 80
          resources:
            requests:
              memory: "2Gi"
              cpu: "2"
            limits:
              memory: "4Gi"
              cpu: "4"
```

Using `od` nodeSelector:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-selector
spec:
  containers:
    - name: with-node-selector
      image: registry.k8s.io/pause:2.0
      imagePullPolicy: IfNotPresent
  nodeSelector:
    spotinst.io/node-lifecycle: od
```

Using `od` nodeAffinity:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-affinity
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: spotinst.io/node-lifecycle
                operator: In
                values:
                  - od
  containers:
    - name: with-node-affinity
      image: registry.k8s.io/pause:2.0
```

## Startup Taints

Ocean startup taints enhance the accuracy of node scale-up and enable nodes to be correctly initialized without blocking pod scheduling.

Startup taints are temporary taints applied to a node during its initialization phase. Ocean does not consider startup taints during the node scale-up simulation. 
Once the taints are removed, the pods can be scheduled without launching additional nodes.

### When to Use Startup Taints

You may want to deploy a specific pod to a node before deploying other pods to the same node. When that pod is ready or has completed a defined procedure, such as networking, the deployment of other pods will be allowed.

>**Example: Cilium:** As recommended by the Cilium documentation, involves applying a taint such as `node.cilium.io/agent-not-ready=true:NoExecute` to prevent other pods from starting before Cilium has finished configuring the necessary networking on the node.

The startup taint applied to a node is a dedicated temporary taint. The pod used for initialization will have a tolerance to this taint exclusively. Once the pod is ready, the application running on the pod will remove the taint from the node.

The autoscaler treats nodes with the startup taint so that pending pods will be simulated on those nodes, even though the pods do not have the required toleration for the startup taint.

After a short period, the startup taint is removed, and the pods are scheduled on those nodes.

>**Note:** To prevent nodes that are “stuck” with startup taint, for example, if the `startupTaint` attribute could not be removed for a specific node, Ocean will stop simulating pending pods on the nodes with start if the cluster's grace period time passed since the node creation time (the default is 5 minutes, and it can be configured in the cluster under cluser.strategy. gracePeriod)

COMMENT Need clarification.



Ocean provides a `startupTaints` attribute to manage startup taints.

### Configure Startup Taints in the Spot API

AWS Kubernetes only

Prerequisite: Ocean controller version at least ?????

Configure Ocean to consider your startup taints using the startupTaints attribute at the Ocean cluster and virtual node group levels.

*  Cluster: under `cluster.compute.launchSpecification`
   *  [Create Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate)
   *  [Update Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate)

*  Virtual node group: under `launchSpec`
   *  [Create virtual node group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate)
   *  [Update virtual node group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate)

>**Important:** You must also set the `startupTaint` as a regular taint in the `userData` for the cluster or virtual node group.





