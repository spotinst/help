# Virtual Node Groups

>**Note on terminology:** A Virtual node group is equivalent to a launch specification. The term virtual node group is used throughout our documentation, though you may see launch specifications appear in the [Spot API](https://docs.spot.io/api/). 
Other equivalent terms used in our industry include **node groups** and **node pools**.

## What’s a Virtual Node Group?

<img src="/ocean/_media/features-vngs-01.png" width="578" height="69" />

A virtual node group is a subset of nodes on a cluster that you can configure for a specific purpose. They let you configure multiple types of infrastructure configuration on the same Ocean cluster.

The following are common virtual node group scenarios:

* Example 1: The default image for nodes in your Ocean cluster is for Linux. However, you might need some nodes in the cluster to run Windows. Create a virtual node group for your Windows nodes while the rest of the Ocean cluster uses Linux nodes.
* Example 2: Some applications in your cluster have significantly different usage requirements from the rest of the cluster, such as performance, scaling, and security requirements. Create a virtual node group to configure nodes suitable for the pods these applications run on.

## How it Works

To create a virtual node group in Ocean, you configure sets of labels and taints (Kubernetes) or attributes (ECS), along with a custom image, instance profile, security groups, and a user data script, which are used for nodes that serve your labeled workloads.

For pods without configured constraints, Ocean selects the virtual node group with the highest probability of serving future pods (the virtual node group with the most labels). Ocean uses the internal configuration set on the Ocean cluster object if no virtual node group can serve such a pod.

In addition, any configuration parameter not explicitly configured in a virtual node group will be taken from the internal configuration.

### Pod Prioritization on Virtual Node Groups

A pod can be scheduled on multiple virtual node groups. In this case, Ocean must first prioritize a virtual node group to launch an instance. 
Ocean uses the following method:

- If the pod has a preferred affinity that matches one of the virtual node groups, Ocean prioritizes according to the affinity.
- Otherwise, Ocean prioritizes the least restrictive virtual node groups according to the order of the following criteria:
  1. Highest maximum instance count parameter.
  2. Highest spot percentage.
  3. Highest availability zone count.
  4. Highest Instance type count.

> **Note**: If one virtual node group has an explicit configuration and the other has an empty value, the virtual node group with the empty value will have a higher priority.

## Virtual Node Group Creation

You can create new virtual node groups or edit existing ones anytime after creating a cluster. Using that configuration, you can also import an autoscaling group configuration from AWS and create a virtual node group in your Ocean cluster.

## Default Virtual Node Group

>**Note**: The default virtual node group may appear as your deployment's virtual node group template. These two entities are identical.

The specification configured in the Ocean cluster object is called the Default virtual node group:

- Kubernetes cluster: Ocean uses this specification as the last option out of all the possible virtual node groups to serve the workload.
- ECS clusters: The default virtual node group takes priority. If you need to change this default behavior, contact the [Spot Support team](https://spot.io/support/).

Ocean uses the default virtual node group as a template for the other (custom) virtual node groups that you define. You can override the default parameters in your custom virtual node groups.

Use this method to minimize maintaining multiple infrastructure configurations in a single cluster.

Visit the [Spot API](https://docs.spot.io/api/) to see which parameters you can define with your cloud service provider platform.


### Set Ocean Configuration as Template (option)
`launchSpecification.useAsTemplateOnly`: You can set the Ocean configuration as a template for your custom virtual node groups only so that Ocean cannot launch an instance from it as a fallback. In this case, you need at least one custom virtual node group to scale the cluster.

You can configure this option in the JSON view of the default virtual node group or the cluster. Note that this parameter is case-sensitive.


## Learn more about:

- [Attributes per VNG](ocean/features/vngs/attributes-and-actions-per-vng).

