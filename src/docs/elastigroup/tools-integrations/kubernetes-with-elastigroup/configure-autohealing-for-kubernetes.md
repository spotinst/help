# Configure Auto-Healing for Kubernetes

MCS can ensure that the running Kubernetes worker nodes are healthy and that they are ready to serve your different Pods and application's needs with MCS Auto-Healing for Kubernetes.

With the MCS Auto-Healing configured, MCS monitors the nodes' status every 30 seconds, searching for unhealthy instances and triggering replacements when needed, maximizing your cluster's efficiency and performance.

## How Auto-Healing Works

The MCS Auto Healing checks for the node's status. The status of each Kubernetes node is represented as a `condition` object, that describes the status of different aspects of the node. The Auto Healing inspects the `Ready` condition. If the `Ready` condition has either the `False` or `Unknown` status, the instance is considered unhealthy and a replacement is triggered.

## Configuring Auto-Healing

- `Health Check Grace Period`: The time to wait after the instance is launched before the first health check. This is the expected `warm up` period for the instance.
- `Unhealthy Duration`: The Ready condition may be temporarily False or Unknown for a wide variety of reasons. The Unhealthy Duration period is the amount of time that the instance is found to be unhealthy before a replacement is triggered, ensuring that instances aren't unnecessarily replaced. Since the health checks occur every 30 seconds, the Unhealthy Duration should be a minimum of 60 seconds.

## In the Spot Console

In the **Compute** tab, under Load Balancers, select Kubernetes in the Auto Healing section.

<img src="/elastigroup/_media/configure-autohealing-for-kubernetes_1.png" />
