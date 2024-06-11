# Features

Ocean automates cloud infrastructure for containers. It continuously analyzes how your containers are using infrastructure, automatically scaling compute resources to maximize utilization and availability utilizing the optimal blend of spot, reserved and on-demand compute instances.

These are the major cross-platform features:

- [Scaling for Kubernetes](ocean/features/scaling-kubernetes)
- [Headroom](ocean/features/headroom)
- [Right Sizing](ocean/features/right-sizing)
- [Labels and Taints](ocean/features/labels-and-taints)
- [Virtual Node Groups](ocean/features/launch-specifications)
- [Cluster Roll](ocean/features/roll-gen)
- [Shutdown Hours](ocean/features/running-hours)

## Ocean for Kubernetes

<details>
  <summary markdown="span">AWS</summary>



</details><br>

<details>
  <summary markdown="span">AKS</summary>

These features are only available for Ocean AKS:

- [AKS Rolls](https://docs.spot.io/ocean/features/roll): Includes cluster, Virtual Node Group, and Node Pool rolls.

### AKS Notes:

- Ocean initiates actions in the Azure account. These actions are bound by the [Azure subscription limits and quotas](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) provided in the account.
- Ocean for AKS currently supports the import of Linux-based node pools only.

</details><br>

<details>
  <summary markdown="span">GKE</summary>



</details><br>

## Ocean for ECS

These features are only available for Ocean AWS ECS:

- [Scaling for ECS](ocean/features/scaling-ecs)
- [Cost Analysis per ECS Service](ocean/features/cost-analysis)

## Related Topics

Select a topic in the sidebar on the left to learn more about Ocean features.
