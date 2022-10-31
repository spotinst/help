# Virtual Node Groups

Virtual Node Groups (VNGs) provide a single layer of abstraction that enables users to manage different types of workloads on the same cluster.

Formerly called launch specifications in the Ocean console, VNGs define cloud infrastructure properties and offer a wider feature set for governance mechanisms, scaling attributes, and networking definitions. VNGs give users more visibility into resource allocation with a new layer of monitoring. VNGs also provide more flexibility to edit and manage settings such as headroom, block device mapping, and maximum nodes.

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
  1. Highest maximum instance count parameter
  2. Highest spot percentage
  3. Highest availability zone count
  4. Highest Instance type count

> **Note**: If one VNG has an explicit configuration and the other has an empty value, the VNG with the empty value will have a higher priority.

## VNG Creation

You can create new VNGs or reconfigure existing ones at any time after the cluster is created. In addition, it is possible to import an autoscaling group configuration from AWS and create a VNG in your Ocean cluster using that configuration.

## Default VNG

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
  <summary markdown="span">GKE</summary>

- Availability zone
- Image
- Instance types
- Minimum nodes per VNG
- Root volume size

</details><br>

## Learn more about:

- [Attributes per VNG](ocean/features/vngs/attributes-and-actions-per-vng).
- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
