# Set up Extended Resource Support

The Kubernetes [extended resources](https://kubernetes.io/docs/tasks/administer-cluster/extended-resource-node/) feature allows cluster administrators to advertise node-level resources that would otherwise be unknown to Kubernetes. As the infrastructure manager, Ocean integrates with Kubernetes to take advantage of this feature for [scaling](ocean/features/scaling-kubernetes) activities.

The extended resources feature allows more flexibility and accuracy in terms of scheduling the pods on nodes. An example use case could be to advertise a resource based on network "VMNetworkBandwidth" and request it by pods for more precise scheduling and utilization of the VM resources.

Supporting the extended resource feature is yet another way Ocean uses to improve cluster performance and cost savings.

## Relevance

This tutorial is relevant for Kubernetes on AWS.

## Ocean Support

Once you have completed the configuration procedure below, Ocean will support the extended resources feature for scale up. (Scale down is automatically supported.) During scale up, Ocean will ensure that the node launched meets the extended resource requests. During scale down, Ocean will ensure that there is enough spare capacity in the cluster while taking into account the requests of the extended resources. In addition, automatic headroom will include extended resources in its calculation so that the assigned headroom units suit the workload.

## Configure Ocean for Extended Resources

You can use the Ocean APIs to set up Ocean to use the extended resources feature. The procedure is described below.

1. Use Ocean’s [Create Extended Resource Definition](https://docs.spot.io/api/#operation/oceanK8sExtendedResourceDefinitionCreate) API to define a mapping between instance types and the number of resources per type. The output of that process is the Extended Resource Definition, an object with the ERD prefix. The name of the extended resources used by the nodes is included in this mapping object, as shown in the example below.

```json
{
    "extendedResourceDefinition": {
        "name": "spot.io/myGpu",
        "mapping": {
            "c3.large": "1",
            "c5.large": "3"
        }
    }
}
```

2. To apply the ERD(s) to the cluster, use the `cluster.autoScaler.extendedResourceDefinitions` field in Ocean’s [Create Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterUpdate) API. This field accepts a list of ERDs as shown in the example below.

```json
{
    "cluster": {
        ...
        "autoScaler": {
            ...
            "extendedResourceDefinitions": ["erd-123", "erd-456"]
        },
        ...
    }
}
```

3. Ensure that each node has the [extended resource](https://kubernetes.io/docs/tasks/administer-cluster/extended-resource-node/#advertise-a-new-extended-resource-on-one-of-your-nodes).

### Rules for Use

- It is not possible to add two different ERDs with the same name to a single Ocean cluster.
- In the Update Extended Resource Definition API, it is not possible to update the name.
- Ensure that each extended resource that pods in the cluster are using has an extendedResourceDefinition. If an extended resource does not have an extendedResourceDefinition attached to Ocean, the pod might remain pending.

## What’s Next?

Learn more about performing a [cluster roll](ocean/features/roll).
