# Labels and Taints

To make scheduling more efficient and compatible with Kubernetes, Ocean supports the following [Kubernetes constraint mechanisms](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/) for scheduling pods:

- Node Selector – Constrains pods to nodes with particular labels.
- Node Affinity – Constrains which nodes your pod is eligible to be scheduled on based on labels on the node. Spot supports hard and soft affinity (`requiredDuringSchedulingIgnoredDuringExecution`, `preferredDuringSchedulingIgnoredDuringExecution`).
- Pod Affinity and Pod Anti-Affinity – Schedules a Pod based on which other Pods are or are not running on a node.
- Pod Port Restrictions – Validates that each pod will have required ports available on the machine.
- [Well-Known Labels](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/).

## Spot Labels

Spot labels allow you to adjust the default behavior of scaling in Ocean, by adding Spot labels to your pods you can control the node termination process or its life cycle.

The table below describes the Spot labels available.

| Label Key                         | Valid Values                                                                                       | Description                                                                                        |
| --------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `spotinst.io/restrict-scale-down` | `true`                                                                                             | When a node is running a pod with such a label, it will not be scaled down by the Spot AutoScaler. |
| `spotinst.io/node-lifecycle`      | `od`                                                                                               | Pods which contain this node selector are forced to run on an on-demand instance.                  |
| `spotinst.io/gpu-type`            | `nvidia-tesla-v100`, `nvidia-tesla-p100`, `nvidia-tesla-k80`, `nvidia-tesla-p4`, `nvidia-tesla-t4` | Sets the GPU accelerator. This setting applies only to GKE clusters.                               |

> Avoid adding Spot labels under the launch specification node labels section. These labels should to be added in your pod configuration only.

## Examples

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

Using restrict scale down label:

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
