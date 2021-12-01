# Features

Ocean automates cloud infrastructure for containers. It continuously analyzes how your containers are using infrastructure, automatically scaling compute resources to maximize utilization and availability utilizing the optimal blend of spot, reserved and on-demand compute instances.

This section describes Ocean features in detail.

## Ocean for Kubernetes

<details>
  <summary markdown="span">AWS</summary>

Unless specifically stated otherwise, all of the features described in this section are supported in Ocean for AWS.

</details><br>

<details>
  <summary markdown="span">AKS</summary>

We are in the process of adding several Ocean features for use with AKS. The following major features are currently supported:

- [Scaling for Kubernetes](ocean/features/scaling-kubernetes)
- [Headroom](ocean/features/headroom)
- [Right Sizing](ocean/features/right-sizing)
- [Labels and Taints](ocean/features/labels-and-taints)
- [Virtual Node Groups](ocean/features/launch-specifications)

### AKS Notes:

- Ocean initiates actions in the Azure account. These actions are bound by the [Azure subscription limits and quotas](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) provided in the account.
- Ocean for AKS currently supports import of Linux-based node pools only.

</details><br>

<details>
  <summary markdown="span">GKE</summary>

The following major features are currently supported in Ocean for GKE:

- [Scaling for Kubernetes](ocean/features/scaling-kubernetes)
- [Headroom](ocean/features/headroom)
- [Right Sizing](ocean/features/right-sizing)
- [Labels and Taints](ocean/features/labels-and-taints)
- [Virtual Node Groups](ocean/features/launch-specifications)
- [Cluster Roll](ocean/features/roll)
- [Shutdown Hours](ocean/features/running-hours)

</details><br>

## Ocean for ECS

The following major features are currently supported in Ocean for ECS:

- [Scaling for ECS](ocean/features/scaling-ecs)
- [Headroom](ocean/features/headroom)
- [Right Sizing](ocean/features/right-sizing)
- [Cluster Roll](ocean/features/roll)
- [Cost Analysis per ECS Service](ocean/features/cost-analysis)
- [Shutdown Hours](ocean/features/running-hours)

## What's Next?

To learn more about Ocean features, choose a topic in the sidebar on the left.
