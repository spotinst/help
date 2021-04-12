# Virtual Node Groups

Virtual Node Groups (VNGs) provide a single layer of abstraction that allows users to manage different types of workloads on the same cluster.

Previously named launch specifications in the Ocean console, VNGs define cloud infrastructure properties and offer a wider feature set for governance mechanisms, scaling attributes, and networking definitions. VNGs give users more visibility into resource allocation with a new layer of monitoring. VNGs also provide more flexibility to edit and manage settings like headroom, block device mapping, and maximum nodes.

### Note on Terminology

A VNG is the same as a launch specification. Spot uses the term VNG in the context of AWS Kubernetes implementation. Launch specification continues to be used for ECS, GKE, and in Spot API calls. Equivalent terms that are used in the industry include node groups and node pools.

<img src="/ocean/_media/features-vngs-01.png" width="578" height="69" />

## What’s a VNG?

A VNG is a subset of nodes on a cluster that you can configure for a specific purpose. VNGs allow you to configure multiple types of infrastructure configuration on the same Ocean cluster. Below are some examples of common uses for VNGs.

Example 1: The default image for nodes in your Ocean cluster is for Linux. However, you need some nodes in the cluster to run Windows. You can use a VNG to set this up. Your VNG nodes will run Windows, while the rest of the Ocean cluster remains on Linux.

Example 2: You have some applications in your cluster that have significantly different usage requirements from the rest of the cluster, e.g., performance, scaling, and security requirements. You can create a VNG that configures nodes suitable for the pods these applications are running on.

## How it works

To create a VNG in Ocean, you configure sets of labels and taints (Kubernetes) or attributes (ECS) to go along with a custom image, instance profile, security groups, and a user data script that will be used for the nodes that will serve your labeled workloads.

For pods without constraints configured, Ocean will choose the VNG with the most chances to serve other pods in the future (meaning the VNG with the most labels). If no VNG is able to serve such a pod, Ocean will use the internal configuration set on the Ocean cluster object.

In addition, any configuration parameter that is not configured explicitly in a VNG will be inherited from the internal configuration.

## VNG Creation

You can create new VNGs or reconfigure existing ones at any time after the cluster is created. In addition, it is possible to import an autoscaling group configuration from AWS and create a VNG in your Ocean cluster using that configuration.

## Attributes and Actions per VNG

Many of the attributes that you apply to your cluster can be applied specifically per VNG. This enables you to organize and manage customized workload types within the same cluster. For example, you can customize the attributes listed below:

### Ocean for AWS

The following is a list of attributes customizable per VNG in Ocean for AWS.

- Block Device Mappings
- Elastic IPs
- Headroom
- Instance Types (These must be a subset of the instance types defined for the Ocean cluster.)
- Labels
- Maximum Nodes
- Restrict scale down
- Security Group IDs
- Spot% to use within the VNG
- Subnet IDs
- Tags
- Taints
- User Data

For example, you could use the Labels and Taints attributes to instruct Ocean which labels and taints are applied on the nodes using the user data, and effectively connect between the cloud infrastructure properties and Kubernetes node labels that will be used on applications using node affinity.

### Ocean for AKS

The following is a list of attributes customizable per VNG in Ocean for AKS.

- Headroom
- Labels
- Maximum Nodes
- OS Disk Type and Size
- Tags
- Taints

### Ocean for GKE

The following is a list of attributes customizable per VNG in Ocean for GKE.

- Headroom (API only)
- Instance Types (API only. These must be a subset of the instance types defined for the Ocean cluster.)
- Labels
- Maximum Nodes (API only)
- Preemptible% to use within the VNG
- Restrict scale down (API only)
- Root Volume size
- Taints

### Roll per VNG

You can initiate a roll per VNG. This is useful when you need to apply changes to a VNG or restart the VNG for any reason without impacting other instances in the Ocean cluster. For more information, see Initiate Roll per launchSpecIds ([AWS](https://docs.spot.io/api/#operation/oceanAwsRollInit), [GKE](https://docs.spot.io/api/#operation/oceanGkeRollInit)).

### Restrict Scale Down per VNGs

The `restrict-scale-down` label is a [Spot label](ocean/features/labels-and-taints?id=spot-labels) that can be applied on a Kubernetes pod or an ECS task and forces Ocean to not scale down the node or container instance running it. It is also possible to restrict scale down at the VNG level using a boolean property with the same name.

A possible use case is protecting a 100% On-demand VNG from any scale down activity, as Ocean will treat the nodes or container instances in this VNG as if all pods or tasks running on them have the `restrict-scale-down` label. This will ensure that scale down will not cause interruptions to sensitive workloads.

For more information about the Scale Down feature, see Scaling ([Kubernetes](ocean/features/scaling-kubernetes?id=scale-down) or [ECS](ocean/features/scaling-ecs?id=scale-down-behavior)).

## What’s next?

- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md).
- Learn more about the VNGs in the APIs: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSClusterCreate), [ECS](https://docs.spot.io/api/#operation/OceanECSClusterCreate), [GKE](https://docs.spot.io/api/#operation/OceanGKEClusterCreate)
