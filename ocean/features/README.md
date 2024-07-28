netes# Features

Ocean automates cloud infrastructure for containers. It continuously analyzes how your containers are using infrastructure, automatically scaling compute resources to maximize utilization and availability by utilizing the optimal blend of spot, reserved, and on-demand compute instances.

These are the major Ocean cross-platform features:

- [Scaling for Kubernetes](ocean/features/scaling-kubernetes)
- [Headroom](ocean/features/headroom)
- [Right Sizing](ocean/features/right-sizing)
- [Labels and Taints](ocean/features/labels-and-taints)
- [Virtual Node Groups](ocean/features/launch-specifications)
- [Cluster Roll](ocean/features/roll-gen)
- [Shutdown Hours](ocean/features/running-hours)

## Ocean for Kubernetes

<details>
  <summary markdown="span">AWS Kubernetes</summary>

These features are available for Ocean AWS Kubernetes:

*  [Elastic IP](ocean/features/elastic-ip)
*  [Distribute Nodes by vCPU](ocean/features/distribute-vcpu)
*  [Set up Extended Resource Support](ocean/tutorials/set-up-extended-resource-support)

</details><br>

<details>
  <summary markdown="span">EKS</summary>

These features are available for Ocean EKS:
  
*  [EKS AMI Auto Update](ocean/features/eks-auto-ami)
*  [Upgrade Kubernetes Version in an Ocean EKS Cluster](ocean/tutorials/upgrade-kubernetes-eks)

</details><br>
<details>
  <summary markdown="span">AKS</summary>

These features are available for Ocean AKS:

- [AKS Rolls](ocean/features/roll): Includes cluster, Virtual Node Group, and Node Pool rolls.
- [Log Integration with Azure Blob](ocean/features/log-integration-with-azure-blob)
- [Migrate Workload to Ocean for AKS](ocean/tutorials/migrate-workload-aks)
- [Import AKS Cluster with Availability Zone Zero](https://docs.spot.io/ocean/features/vngs/az-zero-feature)
- [Select VMs for an AKS Virtual Node Group](https://docs.spot.io/ocean/features/vm-selection-aks)

### AKS Notes:

- Ocean initiates actions in the Azure account. These actions are bound by the [Azure subscription limits and quotas](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) provided in the account.
- Ocean for AKS currently supports the import of Linux-based node pools only.

</details><br>

<details>
  <summary markdown="span">GKE</summary>

These features are  available for Ocean GKE:

*  [Auto Update Process for GKE](ocean/features/auto-update-process-gke)
*  [Create a Cluster for GKE Using Shared VPC](tutorials/create-cluster-gke-shared-vpc)
*  [Auto Update Process for GKE](https://docs.spot.io/ocean/features/auto-update-process-gke)
*  [Connect an Existing GKE Cluster](https://docs.spot.io/ocean/getting-started/gke)
*  [Set Maximum Scale Down % for VNG or Cluster via the Console](https://docs.spot.io/ocean/features/max-scale-down-vng-gke-ui)


</details><br>

## Ocean for ECS

<details>
  <summary markdown="span">AWS ECS</summary>

These features are available for Ocean AWS ECS:

*  [Scaling for ECS](ocean/features/scaling-ecs)
*  [Cost Analysis per ECS Service](ocean/features/cost-analysis)
*  [Migrate Elastigroups to Ocean (ECS)](ocean/tutorials/migrate-existing-egs-ecs)
*  [Connect a Fargate Service](elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup)
*  

</details><br>

## Related Topics

Select a topic in the sidebar on the left to learn more about Ocean features.
