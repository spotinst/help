# View Scaling Constraints

Every application has its unique compute infrastructure requirements, and for that reason container orchestrators such as Kubernetes allow the use of taints and affinities to control precisely where pods run.

In addition to providing the constraints that you can define in [Kubernetes](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/), Ocean offers several constraint options (which are defined in the workload manifest) to control whether applications may run on spot instances, for example, or run only on nodes that are never scaled down.

Once you have defined scaling constraints, you can view summary and detailed information about which pods have constraints applied, which nodes are affected, and exactly which constraints are used.

## Relevance

This tutorial is relevant for users of Ocean Kubernetes on AWS and GKE.

## Scaling Constraints

Ocean supports the following scaling constraints and displays them if they have been applied to pods in a cluster.

- [Node Lifecycle](ocean/features/labels-and-taints?id=spot-labels): Controls whether spot of on-demand instances can be used for a given application.
- [Restrict Scale Down](ocean/features/labels-and-taints?id=spot-labels): Controls whether a node can be scaled down when underutilized.
- [Zone affinity](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/#topologykubernetesiozone): Controls which availability zone a pod can run in.
- [Instance Type affinity](https://kubernetes.io/docs/reference/kubernetes-api/labels-annotations-taints/#nodekubernetesioinstance-type): Controls which nodes a pod is eligible to be scheduled on based on node labels.

## Nodes Tab

Ocean displays information in different levels of detail about scaling constraints applied. For a high-level overview of the constraints applied in an Ocean cluster, do the following:

1. In the console, go to Ocean/Ocean Clusters and click on a cluster name.
2. Click the Nodes tab.

The Nodes tab opens showing a summary line and a table with an overview of all the nodes in the cluster.

<img src="/ocean/_media/tutorials-scaling-constraints-01.png" />

### Summary Line

The summary line shows the number of nodes using each kind of constraint. When you click on one of the tiles, the table will be filtered to display only the nodes using that constraint.

### Summary per Node

In addition to the overall summary in the summary line, the table provides summary information per node. In the Pods column, an arrow indicates that one or more pods in that node have scaling constraints. Click on the arrow to see a popup constraint summary for that node.

<img src="/ocean/_media/tutorials-scaling-constraints-02.png" />

### Node Details

For a drill-down of more detail about the constraints in a specific node, click on the Node Name.

- In the node details, a summary line appears under Pods showing the number of each kind of constraint applied to the pods in that node.
- An arrow appears by each pod with constraints applied. Click on the arrow to see the constraints.

<img src="/ocean/_media/tutorials-scaling-constraints-03.png" width="488" height="321" />

## Pods Tab

In an Ocean cluster, you can also see information in the Pods tab about scaling constraints applied.

- When the Pods tab opens, a banner at the top indicates if there are constraints on the pods.
- In the overview table, an arrow appears by each pod with constraints applied. Click on the arrow to see the constraints.

<img src="/ocean/_media/tutorials-scaling-constraints-04.png" width="541" height="366" />

### Pod Details

For a drill-down of more detail about the constraints on a specific pod, click on the Pod Name. In the pod details, you will see a list of scaling restrictions applied to that pod.

<img src="/ocean/_media/tutorials-scaling-constraints-05.png" width="422" height="303" />

## What’s Next?

Learn more about the [constraints](ocean/features/labels-and-taints.md) supported by Ocean.
