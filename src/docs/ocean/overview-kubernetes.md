# Ocean Overview (Kubernetes)

Ocean automates cloud infrastructure for containers. It continuously analyzes how your containers are using infrastructure, automatically scaling compute resources to maximize utilization and availability and utilizing the optimal blend of spot, reserved, and on-demand compute instances. Ocean eliminates the need to manage and operate cloud infrastructure.

Ocean monitors for pending Kubernetes pods and automatically adjusts the size of the cluster based on the workload [constraints and labels](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/). Ocean ensures that the cluster resources are utilized and scales down underutilized nodes to ensure maximal cost optimization.

In addition to the smart container-driven autoscaling and the use of spot instances, Ocean provides a rich feature set that aims to optimize other aspects of container cluster management. For example, when you configure [headroom](/ocean/features/headroom), a buffer of spare capacity is maintained, based on the cluster's most common services to scale out . The headroom allows for incoming tasks to be scheduled immediately, eliminating the wait time until new instances spin up and register to the cluster.

The result of the Ocean features is an optimally utilized and cost-efficient Kubernetes cluster.

Ocean integration with Kubernetes clusters consists of two components, the Ocean Controller and the Ocean SaaS.

## Ocean Controller

The [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/) is a pod that resides within the Kubernetes cluster, collects metrics and events, and executes cluster operations on behalf of the Ocean SaaS platform. The events are pushed by a one-way secured link to the Ocean SaaS for business logic and capacity scaling activities.

## Ocean SaaS

Ocean's SaaS layer aggregates the metrics from the Ocean Controller and builds the cluster topology. Using the aggregated metrics, the SaaS component applies other business logic algorithms such as spot-preemptible instances availability, prediction, and recommendation of instance size and type . These algorithms increase performance and optimize costs by using workload density pricing models across on-demand, reserved, and excess capacity nodes (i.e., spot instances or preemptible VMs).

<img src="/ocean/_media/ocean-k8s-architecture.png" />

## What's Next?

- If you have not already connected your cloud provider account, connect to Spot:
  - [AWS](connect-your-cloud-provider/aws-account)
  - [Azure](connect-your-cloud-provider/azure-account)
  - [GCP](connect-your-cloud-provider/gcp-project)
- [Get started with an Ocean Cluster](ocean/getting-started/).
