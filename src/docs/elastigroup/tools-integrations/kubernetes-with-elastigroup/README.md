# Kubernetes on Managed Container Service

Kubernetes is a container cluster management software that makes it easy to manage containerized applications across multiple hosts. It provides deployment scheduling, workload, and resource usage optimization, as well as easy scaling.

Elastigroup integrates with Kubernetes via our autonomous Managed Container Service (MCS). MCS manages the infrastructure on which Kubernetes schedules the container workloads.

## Prerequisite

Before you start using this integration, please make sure to have an active Spot account. To create a new account sign up [here](https://console.spotinst.com/#/auth/signUp).

## Handling Instance Failures

The diagram below illustrates how MCS handles instance failures. Utilizing prediction algorithms and monitoring services, Elastigroup (1) preemptively provisions EC2 instances and identifies instance failures within the K8s cluster, (2) provisions new instances in parallel as the failures occur, and (3) communicates with the K8s primary to mark `bad` instances as Unscheduled `{`spec`:{`unschedulable`:true}}` in order to drain existing running pods and reschedule them on different hosts across the cluster.

<img src="/elastigroup/_media/kubernetes-with-elastigroupREADME_1.jpg" />

## Key Features

[MCS Automatic Autoscaler](elastigroup/tools-integrations/kubernetes-with-elastigroup/kubernetes-cluster-autoscaling): MCS monitors the cluster workloads and provisions, manages and scales Kubernetes nodes to optimally handle pending tasks, while also detecting underutilized nodes and scaling them down.

**Cost-Optimized Clusters**: MCS cost-optimizes Kubernetes clusters from the moment they're launched. MCS automatically matches the instance type and size to the resource requirements of the Pods, creating an optimal fit between infrastructure supply and demand. By seamlessly leveraging Spot, Reserved and On-Demand instances, MCS keeps costs at a minimum while ensuring Services are always running.

[Custom Label Support](elastigroup/tools-integrations/kubernetes-with-elastigroup/custom-label-selectors): MCS makes it easy to assign custom labels to the instances it launches, which can be used to evaluate where a Pod may or may not be placed, based on constraints (nodeSelectors) configured in the Pod specifications (podSpec). For more complex requirements MCS also supports Affinity and Anti-Affinity constraints. Custom labels can be used to ensure certain Pods only run on nodes with an SSD attached or ensure that certain Pods only run in a development environment.

[Persistent Volumes and Persistent Volume Claims](elastigroup/tools-integrations/kubernetes-with-elastigroup/persistent-volume-support): MCS supports Kubernetes Persistent Volumes (PVs) and Persistent Volume Claims (PVCs), which are accounted for during scaling processes to ensure that the instances are collocated in the same Availability Zone as the Persistent Volume.

**Pod Disruption Budgets**: Pod Disruption Budgets (PDBs) limit the number of pods of replicated applications that can be down simultaneously during voluntary disruptions. Before performing a scale-down operation, MCS determines if the eviction of any of the pods running on the node designated for termination will cause the number of pods to fall below the budget. If so, MCS waits until the cluster has replacement pods up and running on an alternative node. If no replacement pods can be spun up MCS won't terminate the node.

**DaemonSets**: DaemonSets ensure that all (or some) Nodes run a copy of a Pod, and are useful for providing common functionality such as logging or monitoring. MCS supports daemonSets during scale up by ensuring that the daemonSet Pod's resource requirements are accounted for when determining the optimal instance type and size to launch, and during scale down MCS by ensuring that the daemonSet Pods are deleted while other Pods are reassigned to other Nodes.

**Integrations with Managed Kubernetes Services**: MCS integrates with existing Kubernetes clusters on the following Managed Kubernetes Services:

- Google Kubernetes Engine
- Amazon EKS
- Rancher

**Support for `kops`**: Any cluster provisioned by Kubernetes Operations (`kops`) can be run on infrastructure managed by MCS with MCS's own `kops` distribution. To get started with `kops` on MCS see the tutorial [here](ocean/tools-and-integrations/kops/).
