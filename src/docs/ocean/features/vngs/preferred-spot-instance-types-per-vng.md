<meta name="robots" content="noindex">

# Preferred Spot Instance Types per VNG

Ocean provides a serverless experience in which the specific instances don’t matter and the best practice is to allow the use of all instance types. However, there are some cases in which a specific instance type may provide better performance or increased cost savings. For example, if you know that your application performs significantly better on M5 instances, then you can save costs by preferring this instance type over others.

Ocean serves such use cases with the ability to define a list of preferred instance types, out of all types allowed in the VNG. When your preferences are defined, Ocean takes them into consideration alongside other considerations when scaling up. In this way, Ocean strives towards a well-distributed and highly available spot-instance based VNG that uses preferred types as broadly as possible.

In each scale up action, Ocean provisions the new instances from the preferred types, using:

- 100% of the new instances, if three or more different preferred types are defined.
- 0-80% of the new instances, when 0-2 different preferred types are defined.

The rest of the new instances will have non-preferred types to maintain a distribution in the VNG. For example, when scaling up 10 instances in a VNG with a R5.xlarge defined as the preferred type, Ocean tries to provision five R5.xlarge instances, and five from other types.

As preferred instance type is a soft requirement, the general spot instance availability of both preferred and non-preferred types is considered before considering type preference.

For information about defining preferred instance types in the Spot API (using the `preferredSpotTypes` attribute under `launchSpec.instanceTypes`), see [Create Virtual Node Group](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) (AWS).

## What's Next?

- Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md) and customize configurations per VNG.
- Learn more about the VNGs in the APIs: [AWS Kubernetes](https://docs.spot.io/api/#operation/OceanAWSClusterCreate), [ECS](https://docs.spot.io/api/#operation/OceanECSClusterCreate), [GKE](https://docs.spot.io/api/#operation/OceanGKEClusterCreate)
