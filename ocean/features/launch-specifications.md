# Virtual Node Groups

Virtual Node Groups (VNGs) provide a single layer of abstraction that allows users to manage different types of workloads on the same cluster.

Previously named launch specifications in the Ocean console, VNGs define cloud infrastructure properties and offer a wider feature set for governance mechanisms, scaling attributes, and networking definitions. VNGs give users more visibility into resource allocation with a new layer of monitoring. VNGs also provide more flexibility to edit and manage settings like headroom, block device mapping, and maximum nodes.

### Note on Terminology

A VNG is the same as a launch specification. Spot uses the term VNG in the context of AWS Kubernetes implementation. Launch specification continues to be used for ECS, GKE, and in Spot API calls. Equivalent terms that are used in the industry include node groups and node pools.

<img src="/ocean/_media/features-vngs-01.png" />

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

- Available in the UI and API:
  - Block Device Mappings
  - Headroom
  - Labels
  - Security Group IDs
  - Subnet IDs
  - Tags
  - Taints
  - User Data

- Available in the API:
  - Elastic IPs
  - Instance Types (These must be a subset of the instance types defined for the Ocean cluster.)
  - Spot % to use within the VNG

For example, you could use the Labels and Taints attributes to instruct Ocean which labels and taints are applied on the nodes using the user data, and effectively connect between the cloud infrastructure properties and Kubernetes node labels that will be used on applications using node affinity.

In addition, you can initiate a roll per VNG. This is useful when you need to apply changes to a VNG or restart the VNG for any reason without impacting other instances in the Ocean cluster. For more information, see [Initiate Roll per launchSpecIds](https://docs.spot.io/api/#operation/oceanAwsRollInit).

## What’s next?

Learn more about the VNGs in the APIs: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSClusterCreate), [ECS](https://docs.spot.io/api/#operation/OceanECSClusterCreate), [GKE](https://docs.spot.io/api/#operation/OceanGKEClusterCreate)
