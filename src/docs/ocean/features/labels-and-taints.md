# Labels and Taints

To make scheduling more efficient and compatible with Kubernetes, Ocean supports the following [Kubernetes constraint mechanisms](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for scheduling pods:

- Node Selector – Constrains pods to nodes with particular labels.
- Node Affinity – Constrains which nodes your pod is eligible to be scheduled on based on labels on the node. Spot supports hard and soft affinity (`requiredDuringSchedulingIgnoredDuringExecution`, `preferredDuringSchedulingIgnoredDuringExecution`).
- Pod Affinity and Pod Anti-Affinity – Schedules a Pod based on which other Pods are or are not running on a node.
- Pod Port Restrictions – Validates that each pod will have required ports available on the machine.
- [Well-Known Labels](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/).

## Spot Labels

Spot labels allow you to adjust the default behavior of scaling in Ocean, by adding Spot labels to your pods you can control the node termination process or its life cycle. The Spot labels are described below.

### spotinst.io/restrict-scale-down

Some workloads are not as resilient to spot instance replacements as others, so you may wish to lower the frequency of replacing the nodes they are running on as much as possible, while still getting the benefit of spot instance pricing. For these workloads, use the `spotinst.io/restrict-scale-down` label (set to `true`) to block the proactive scaling down of the instance for the purposes of more efficient bin packing. This will leave the instance running as long as possible. The instance will be replaced only if it goes into an unhealthy state or if forced by a cloud provider interruption.

### spotinst.io/node-lifecycle

Ocean labels all nodes it manages with a label key `spotinst.io/node-lifecycle`. The label value is `od` (on-demand), according to the lifecycle of the instance, and can assist when monitoring the cluster’s nodes in different scenarios.

Some workloads are mission-critical and are not resilient to spot instance interruptions. These workloads have to run on on-demand instances at all times. To ensure that, apply node affinity to the `spotinst.io/node-lifecycle` label with value `od`.

> **Tip**: spotinst.io/node-lifecycle:spot is not supported, as effectively unless spotinst.io/node-lifecycle:od affinity is applied, Ocean continues to try to provide excess compute capacity (spot instances) for all workloads in the cluster.

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

## What’s next?

- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups) and customize configurations per VNG.
