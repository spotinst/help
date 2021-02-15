# Labels and Taints

To make scheduling more efficient and compatible with Kubernetes, Ocean supports the following [Kubernetes constraint mechanisms](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for scheduling pods:

- Node Selector – Constrains pods to nodes with particular labels.
- Node Affinity – Constrains which nodes your pod is eligible to be scheduled on based on labels on the node. Spot supports hard and soft affinity (`requiredDuringSchedulingIgnoredDuringExecution`, `preferredDuringSchedulingIgnoredDuringExecution`).
- Pod Affinity and Pod Anti-Affinity – Schedules a Pod based on which other Pods are or are not running on a node.
- Pod Port Restrictions – Validates that each pod will have required ports available on the machine.
- [Well-Known Labels](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/).

## Spot Labels

Spot labels allow you to adjust the default behavior of scaling in Ocean, by adding Spot labels to your pods you can control the node termination process or its life cycle. The Spot labels are described below.

### spotisnt.io/restrict-scale-down

Some workloads are not as resilient to spot instance replacements as others, so you may wish to lower the frequency of replacing the nodes they are running on as much as possible, while still getting the benefit of spot instance pricing. For these workloads, use the `spotinst.io/restrict-scale-down` label (set to `true`) to block the proactive scaling down of the instance for the purposes of more efficient bin packing. This will leave the instance running as long as possible. The instance will be replaced only if it goes into an unhealthy state or if forced by a cloud provider interruption.

### spotinst.io/node-lifecycle

If you have workloads that you do not want to run on spot instances at all, you can use the `spotinst.io/node-lifecycle` label with value `od`. These workloads will run on on-demand instances only.

### spotinst.io/gpu-type

This label sets the GPU accelerator and applies only to GKE clusters. Valid values are:

- `nvidia-tesla-v100`
- `nvidia-tesla-p100`
- `nvidia-tesla-k80`
- `nvidia-tesla-p4`
- `nvidia-tesla-t4`

> **Tip**: Avoid adding Spot labels under the launch specification node labels section. These labels should be added in your pod configuration only.

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
      image: k8s.gcr.io/pause:2.0
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
      image: k8s.gcr.io/pause:2.0
```
