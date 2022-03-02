# Attributes and Actions per VNGs

Many of the attributes that you apply to your cluster can be applied specifically per VNG. This enables you to organize and manage customized workload types within the same cluster. For example, you can customize the attributes listed below (per cloud service provider).

> **Tip**: Items marked “API only” can also be configured in the JSON in the Review tab of the console.

<details>
  <summary markdown="span">Ocean for AWS</summary>

### Ocean for AWS Kubernetes

The following is a list of attributes customizable per VNG in Ocean for AWS.

- Automatic Headroom
- Associate Public IP (API only)
- Block Device Mappings
- Elastic IPs
- Manual Headroom
- Instance Types (These must be a subset of the instance types defined for the Ocean cluster.)
- Instance Profile
- Labels
- Launch Instance (API only)
- Maximum Nodes
- Minimum Nodes (API only)
- Metadata v2 (API only
- Preferred Spot Instance Types (API only)
- Restrict scale down
- Roll (API only)
- Scheduled manual headroom (API only)
- Security Group IDs
- Shutdown hours
- Spot% to use within the VNG
- Subnet IDs
- Tags
- Taints
- User Data

For example, you could use the Labels and Taints attributes to instruct Ocean which labels and taints are applied on the nodes using the user data, and effectively connect between the cloud infrastructure properties and Kubernetes node labels that will be used on applications using node affinity.

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

</details><br>

<details>
  <summary markdown="span">Ocean for ECS</summary>

### Ocean for ECS

The following is a list of attributes customizable per VNG in Ocean for ECS.

- Attributes
- Block Device Mappy
- Instance Profile
- Instance Types (API only)
- Launch Instance (API only)
- Manual Headroom
- Metadata v2 (API only)
- Restrict Scaledown
- Roll (API only)
- Schedualed manual headroom (API only)
- Security Group
- Subnets
- Tags and Metadata
- User Data

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

</details><br>

<details>
  <summary markdown="span">Ocean for AKS</summary>

### Ocean for AKS

The following is a list of attributes customizable per VNG in Ocean for AKS.

- Automatic Headroom
- Availability zone (API only)
- Headroom
- Labels
- Maximum Nodes
- OS Disk Type and Size
- Shutdown hours
- Tags
- Taints

</details><br>

<details>
  <summary markdown="span">Ocean for GKE</summary>

### Ocean for GKE

The following is a list of attributes customizable per VNG in Ocean for GKE.

- Automatic Headroom
- Availability zone
- Headroom
- Instance Types (API only. These must be a subset of the instance types defined for the Ocean cluster.)
- Instance Types (API only)
- Instance Profile (API only)
- Labels
- Launch Instance (API only)
- Local SSD (API only)
- Maximum Nodes
- Minimum Nodes
- Preemptible% to use within the VNG
- Restrict scale down
- Roll (API only)
- Root Volume Size
- Root Volume Type (API only)
- Schedualed manual headroom (API only)
- Shielded VMs (API only)
- Shutdown hours
- Tags & Metadata (API only)
- Taints

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

### Local SSD Support

Ocean for GKE allows the utilization of local SSD disks, high-performance local disks which are useful with specific workloads such as those that heavily use caching. You can define SSD disks in your Ocean VNG configuration by using localSsdCount to configure the number of SSD disks to be connected to each VM in the VNG.

Once configured, whenever the Ocean autoscaler scales up, Ocean will automatically connect the local SSDs to the new VM. Note that local SSDs are limited to specific machine types. Ocean will automatically filter out the machine types that are not compatible. For information about the API, see Local SSD in the Spot API.

</details><br>

## Restrict Scale Down per VNGs

The `restrict-scale-down` label is a [Spot label](ocean/features/labels-and-taints?id=spot-labels) that can be applied on a Kubernetes pod or an ECS task and forces Ocean to not scale down the node or container instance running it. It is also possible to restrict scale down at the VNG level using a boolean property with the same name.

A possible use case is protecting a 100% On-demand VNG from any scale down activity, as Ocean will treat the nodes or container instances in this VNG as if all pods or tasks running on them have the `restrict-scale-down` label. This will ensure that scale down will not cause interruptions to sensitive workloads.

For more information about the Scale Down feature, see Scaling ([Kubernetes](ocean/features/scaling-kubernetes?id=scale-down) or [ECS](ocean/features/scaling-ecs?id=scale-down-behavior)).

## What’s next?

Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
