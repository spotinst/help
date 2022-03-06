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

## Preferred Spot Instance Types per VNG

Ocean provides a serverless experience in which the specific instances don’t matter and the best practice is to allow the use of all instance types. However, there are some cases in which a specific instance type may provide better performance or increased cost savings. For example, if you know that your application performs significantly better on M5 instances, then you can save costs by preferring this instance type over others.

Ocean serves such use cases with the ability to define a list of preferred instance types, out of all types allowed in the VNG. When your preferences are defined, Ocean takes them into consideration alongside other considerations when scaling up. In this way, Ocean strives towards a well-distributed and highly available spot-instance based VNG that uses preferred types as broadly as possible.

In each scale up action, Ocean provisions the new instances from the preferred types, using:

- 100% of the new instances, if three or more different preferred types are defined.
- 0-80% of the new instances, when 0-2 different preferred types are defined.

The rest of the new instances will have non-preferred types to maintain a distribution in the VNG. For example, when scaling up 10 instances in a VNG with a R5.xlarge defined as the preferred type, Ocean tries to provision five R5.xlarge instances, and five from other types.

As preferred instance type is a soft requirement, the general spot instance availability of both preferred and non-preferred types is considered before considering type preference.

For information about defining preferred instance types in the Spot API (using the `preferredSpotTypes` attribute under `launchSpec.instanceTypes`), see [Create Virtual Node Group](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) (AWS).

## What’s next?

Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
