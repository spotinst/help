<meta name=“robots” content=“noindex”>

#  Migrate the Workload to Ocean on AKS

Ocean automates the migration process of manually draining and re-scheduling your Kubernetes pods on new nodes. You can migrate and register your workloads (nodes and pods) into Ocean so Spot will manage them.

##  Prerequisites

Before starting migration, make sure you have the following:

*  The Kubernetes cluster is running on AKS infrastructure.
*  Kubernetes cluster connected to an Ocean cluster (see [Import an AKS Cluster to Ocean](https://docs.spot.io/ocean/getting-started/aks/?id=import-an-aks-cluster-to-ocean))
*  The Ocean Controller was installed and updated and runs in the cluster.
*  Cluster or Virtual Node Group upgraded to a recent K8s version.
*  Dedicated [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups) for your workload will enable the Ocean Autoscaler to scale up nodes.
