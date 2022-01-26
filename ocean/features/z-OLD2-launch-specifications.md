<meta name="robots" content="noindex">

# Virtual Node Groups

Virtual Node Groups (VNGs) provide a single layer of abstraction that allows users to manage different types of workloads on the same cluster.

Previously named launch specifications in the Ocean console, VNGs define cloud infrastructure properties and offer a wider feature set for governance mechanisms, scaling attributes, and networking definitions. VNGs give users more visibility into resource allocation with a new layer of monitoring. VNGs also provide more flexibility to edit and manage settings like headroom, block device mapping, and maximum nodes.

### Note on Terminology

A VNG is the same as a launch specification. VNG is used throughout Spot documentation, but launch specification may still be used in some places in the API. Equivalent terms that are used in the industry include node groups and node pools.

<img src="/ocean/_media/features-vngs-01.png" width="578" height="69" />

## What’s a VNG?

A VNG is a subset of nodes on a cluster that you can configure for a specific purpose. VNGs allow you to configure multiple types of infrastructure configuration on the same Ocean cluster. Below are some examples of common uses for VNGs.

Example 1: The default image for nodes in your Ocean cluster is for Linux. However, you need some nodes in the cluster to run Windows. You can use a VNG to set this up. Your VNG nodes will run Windows, while the rest of the Ocean cluster remains on Linux.

Example 2: You have some applications in your cluster that have significantly different usage requirements from the rest of the cluster, e.g., performance, scaling, and security requirements. You can create a VNG that configures nodes suitable for the pods these applications are running on.

## How it works

To create a VNG in Ocean, you configure sets of labels and taints (Kubernetes) or attributes (ECS) to go along with a custom image, instance profile, security groups, and a user data script that will be used for the nodes that will serve your labeled workloads.

For pods without constraints configured, Ocean will choose the VNG with the most chances to serve other pods in the future (meaning the VNG with the most labels). If no VNG is able to serve such a pod, Ocean will use the internal configuration set on the Ocean cluster object.

In addition, any configuration parameter that is not configured explicitly in a VNG will be inherited from the internal configuration.

### Prioritization of Pods on VNGs

A pod could be scheduled on multiple VNGs. In this case, Ocean has to prioritize on which VNG to launch an instance first. Ocean uses the following method:

- If the pod has a preferred affinity that matches one of the VNGs, Ocean prioritizes according to the affinity.
- Otherwise, Ocean prioritizes the least restrictive VNG in the order of the following criteria:
  1. Highest maximum instance count
  2. Highest spot percentage
  3. Highest availability zone count
  4. Highest Instance type count

## VNG Creation

You can create new VNGs or reconfigure existing ones at any time after the cluster is created. In addition, it is possible to import an autoscaling group configuration from AWS and create a VNG in your Ocean cluster using that configuration.

## Attributes and Actions per VNG

Many of the attributes that you apply to your cluster can be applied specifically per VNG. This enables you to organize and manage customized workload types within the same cluster. For example, you can customize the attributes listed below (per cloud service provider).

> **Tip**: Items marked “API only” can also be configured in the JSON in the Review tab of the console.

<details>
  <summary markdown="span">Ocean for AWS</summary>

### Ocean for AWS Kubernetes

The following is a list of attributes customizable per VNG in Ocean for AWS.

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
- Spot% to use within the VNG
- Subnet IDs
- Tags
- Taints
- User Data

For example, you could use the Labels and Taints attributes to instruct Ocean which labels and taints are applied on the nodes using the user data, and effectively connect between the cloud infrastructure properties and Kubernetes node labels that will be used on applications using node affinity.

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

### Preferred Spot Instance Types per VNG

Ocean provides a serverless experience in which the specific instances don’t matter and the best practice is to allow the use of all instance types. However, there are some cases in which a specific instance type may provide better performance or increased cost savings. For example, if you know that your application performs significantly better on M5 instances, then you can save costs by preferring this instance type over others.

Ocean serves such use cases with the ability to define a list of preferred instance types, out of all types allowed in the VNG. When your preferences are defined, Ocean takes them into consideration alongside other considerations when scaling up. In this way, Ocean strives towards a well-distributed and highly available spot-instance based VNG that uses preferred types as broadly as possible.

In each scale up action, Ocean provisions the new instances from the preferred types, using:

- 100% of the new instances, if three or more different preferred types are defined.
- 0-80% of the new instances, when 0-2 different preferred types are defined.

The rest of the new instances will have non-preferred types to maintain a distribution in the VNG. For example, when scaling up 10 instances in a VNG with a R5.xlarge defined as the preferred type, Ocean tries to provision five R5.xlarge instances, and five from other types.

As preferred instance type is a soft requirement, the general spot instance availability of both preferred and non-preferred types is considered before considering type preference.

For information about defining preferred instance types in the Spot API (using the `preferredSpotTypes` attribute under `launchSpec.instanceTypes`), see [Create Virtual Node Group](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) (AWS).

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

- Headroom
- Labels
- Maximum Nodes
- OS Disk Type and Size
- Tags
- Taints

</details><br>

<details>
  <summary markdown="span">Ocean for GKE</summary>

### Ocean for GKE

The following is a list of attributes customizable per VNG in Ocean for GKE.

- Instance Types (API only. These must be a subset of the instance types defined for the Ocean cluster.)
- Headroom
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
- Tags & Metadata (API only)
- Taints

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

### Local SSD Support

Ocean for GKE allows the utilization of local SSD disks, high-performance local disks which are useful with specific workloads such as those that heavily use caching. You can define SSD disks in your Ocean VNG configuration by using localSsdCount to configure the number of SSD disks to be connected to each VM in the VNG.

Once configured, whenever the Ocean autoscaler scales up, Ocean will automatically connect the local SSDs to the new VM. Note that local SSDs are limited to specific machine types. Ocean will automatically filter out the machine types that are not compatible. For information about the API, see Local SSD in the Spot API.

</details><br>

### Default VNG

The specification configured in the Ocean cluster object is referred to as the Default VNG. This definition is used for the following reasons:

- Ocean uses this specification as the last option out of the possible VNGs to serve a workload.
- At runtime, Ocean uses this default VNG as a template for the other VNGs defined, as it effectively uses parameters that are not explicitly set by the user in a VNG object.

This methodology minimizes the effort of creating and maintaining multiple infrastructure configurations in a single cluster.

There is an option to set the Ocean configuration to be a template only for other VNG's. This means that the default VNG will be only a template and we would not be able to launch an instance from it as a fallback. In this case, you would need at least one VNG so that the cluster could scale.

You can configure this option in the JSON view of the default VNG or in the JSON of the cluster with the parameter `launchSpecification.useAsTemplateOnly`. Note that the parameter is case sensitive.

In AKS, the default behaviour is that the Ocean configuration is the template.

Ocean takes the following parameters from the default VNG unless explicitly set in a VNG.

<details>
  <summary markdown="span">AWS Kubernetes</summary>

- Image
- Instance profile
- Instance types
- Minimum nodes per VNG
- Root volume size
- Security groups
- Subnets
- Tags
- User data

</details><br>

<details>
  <summary markdown="span">AWS ECS</summary>

- Block device mapping
- Image
- Instance profile
- Instance types
- Root volume size
- Security groups
- Subnets
- Tags
- User data

</details><br>

<details>
  <summary markdown="span">GCP</summary>

- Image
- Instance types
- Minimum nodes per VNG
- Root volume size

</details><br>

### Roll per VNG

You can initiate a roll per VNG. This is useful when you need to apply changes to a VNG or restart the VNG for any reason without impacting other instances in the Ocean cluster.

This feature enables you to roll multiple VNGs at once. To do this, Ocean includes all of the relevant VNGs and initiates one roll for all of the instances in all of the VNGs specified. In addition, you have an option to roll specific instances.

For more information, see Initiate Roll per launchSpecIds ([AKS](https://docs.spot.io/api/#operation/oceanAzureRollInit), [AWS](https://docs.spot.io/api/#operation/oceanAwsRollInit), [GKE](https://docs.spot.io/api/#operation/oceanGkeRollInit)).

### Restrict Scale Down per VNGs

The `restrict-scale-down` label is a [Spot label](ocean/features/labels-and-taints?id=spot-labels) that can be applied on a Kubernetes pod or an ECS task and forces Ocean to not scale down the node or container instance running it. It is also possible to restrict scale down at the VNG level using a boolean property with the same name.

A possible use case is protecting a 100% On-demand VNG from any scale down activity, as Ocean will treat the nodes or container instances in this VNG as if all pods or tasks running on them have the `restrict-scale-down` label. This will ensure that scale down will not cause interruptions to sensitive workloads.

For more information about the Scale Down feature, see Scaling ([Kubernetes](ocean/features/scaling-kubernetes?id=scale-down) or [ECS](ocean/features/scaling-ecs?id=scale-down-behavior)).

## What’s next?

- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
- Learn more about the VNGs in the APIs: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSClusterCreate), [ECS](https://docs.spot.io/api/#operation/OceanECSClusterCreate), [GKE](https://docs.spot.io/api/#operation/OceanGKEClusterCreate)
