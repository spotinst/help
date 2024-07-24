# Virtual Node Groups

Virtual Node Groups (VNGs) provide a single abstraction layer that enables users to manage different types of workloads on the same cluster.

Formerly called launch specifications in the Ocean console, Virtual Node Groups define cloud infrastructure properties and offer a wider feature set for governance mechanisms, scaling attributes, and networking definitions. They give users more visibility into resource allocation with a new layer of monitoring and provide more flexibility to edit and manage settings such as headroom, block device mapping, and maximum nodes.

### Note on Terminology

A Virtual Node Group is the same as a launch specification. Virtual Node Group is used throughout Spot documentation, but launch specifications may still be used in some places in the API. Equivalent terms used in the industry include node groups and node pools.

<img src="/ocean/_media/features-vngs-01.png" width="578" height="69" />

## What’s a Virtual Node Group?

A Virtual Node Group is a subset of nodes on a cluster that you can configure for a specific purpose. Virtual Node Groups allow you to configure multiple types of infrastructure configuration on the same Ocean cluster. Below are some examples of common uses for Virtual Node Groups.

Example 1: The default image for nodes in your Ocean cluster is for Linux. However, you need some nodes in the cluster to run Windows. You can use a Virtual Node Group to set this up. Your Virtual Node Group nodes will run Windows, while the rest of the Ocean cluster remains on Linux.

Example 2: Some applications in your cluster have significantly different usage requirements from the rest of the cluster, such as performance, scaling, and security requirements. You can create a Virtual Node Group configuring nodes suitable for the pods these applications run on.

## How it works

To create a Virtual Node Group in Ocean, you configure sets of labels and taints (Kubernetes) or attributes (ECS), along with a custom image, instance profile, security groups, and a user data script, which will be used for the nodes that will serve your labeled workloads.

For pods without constraints configured, Ocean will choose the Virtual Node Group with the most chances to serve other pods in the future (meaning the Virtual Node Group with the most labels). If no Virtual Node Group can serve such a pod, Ocean will use the internal configuration set on the Ocean cluster object.

In addition, any configuration parameter that is not configured explicitly in a Virtual Node Group will be inherited from the internal configuration.

### Prioritization of Pods on Virtual Node Groups

A pod could be scheduled on multiple Virtual Node Groups. In this case, Ocean must first prioritize which Virtual Node Group to launch an instance. Ocean uses the following method:

- If the pod has a preferred affinity that matches one of the Virtual Node Groups, Ocean prioritizes according to the affinity.
- Otherwise, Ocean prioritizes the least restrictive Virtual Node Group in the order of the following criteria:
  1. Highest maximum instance count parameter
  2. Highest spot percentage
  3. Highest availability zone count
  4. Highest Instance type count

> **Note**: If one Virtual Node Group has an explicit configuration and the other has an empty value, the Virtual Node Group with the empty value will have a higher priority.

## Virtual Node Group Creation

You can create new Virtual Node Groups or reconfigure existing ones at any time after the cluster is created. In addition, you can import an autoscaling group configuration from AWS and create a Virtual Node Group in your Ocean cluster using that configuration.

## Default Virtual Node Group

The specification configured in the Ocean cluster object is called the Default Virtual Node Group. This definition is used for the following reasons:

- Ocean uses this specification as the last option out of all the possible Virtual Node Groups to serve the workload.
- For ECS clusters, the default Virtual Node Group takes priority. If you need to change this behavior, contact the [Spot Support team](https://spot.io/support/).
- At runtime, Ocean uses this default Virtual Node Group as a template for the other Virtual Node Groups defined, as it effectively uses parameters that are not explicitly set by the user in a Virtual Node Group object.

This methodology minimizes the effort of creating and maintaining multiple infrastructure configurations in a single cluster.

There is an option to set the Ocean configuration as a template only for other Virtual Node Groups. This means that the default Virtual Node Group will only be a template, and Ocean cannot launch an instance from it as a fallback. In this case, you would need at least one Virtual Node Group to scale the cluster.

You can configure this option in the JSON view of the default Virtual Node Group or the cluster's JSON with the parameter `launchSpecification.useAsTemplateOnly`. Note that the parameter is case-sensitive.

In AKS, the default behavior is that the Ocean configuration is the template.

Ocean takes the following parameters from the default Virtual Node Group unless explicitly set in a Virtual Node Group.

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
  <summary markdown="span" style="color:#7632FE; font-weight:600">AWS Kubernetes</summary>

  <div style="padding-left:16px">

- Image
- Instance profile
- Instance types
- Minimum nodes per VNG
- Root volume size
- Security groups
- Subnets
- Tags
- User data

</div>
 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
  <summary markdown="span" style="color:#7632FE; font-weight:600">AWS ECS</summary>

  <div style="padding-left:16px">

- Block device mapping
- Image
- Instance profile
- Instance types
- Root volume size
- Security groups
- Subnets
- Tags
- User data

</div>
 </details>

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
  <summary markdown="span" style="color:#7632FE; font-weight:600">GKE</summary>

  <div style="padding-left:16px">

- Availability zone
- Image
- Instance types
- Minimum nodes per VNG
- Root volume size

</div>
 </details>


  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
  <summary markdown="span" style="color:#7632FE; font-weight:600">AKS</summary>

  <div style="padding-left:16px">

 - Kubernetes Version
 - Automatic and Advanced VM Size Selection
 - Availability zone (1,2,3 +0 )
 - Root volume type
 - OS SKU type
 - Max pods per VM 

</div>
 </details>


## Learn more about:

- [Attributes per VNG](ocean/features/vngs/attributes-and-actions-per-vng).
- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
