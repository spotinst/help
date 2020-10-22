# Headroom

Ocean provides the option to include a buffer of spare capacity, i.e., vCPU, memory, and GPU resources, known as headroom. Headroom ensures that the cluster has the capacity to quickly scale more workloads (tasks or pods) without waiting for new instances (container instances or nodes) to be provisioned. You can configure headroom in specific amounts of resources, or specify headroom as a percentage of the total cluster requested resources.

Ocean optimally manages the headroom in a dynamic manner in order to provide the best possible cost-performance balance. Alternatively, headroom may also be manually configured to support any use case.

## How It Works

Ocean continually checks if there are unscheduled workloads (pods or tasks) in the cluster. If unscheduled workloads are found, Ocean simulates placing them on the existing infrastructure.

Since Ocean has saved compute resources in advance (i.e., created headroom), the container orchestrator can use these resources and schedule the unscheduled workloads on these nodes instantly. Once the headroom has been used for scaling up workloads, Ocean will provision more infrastructure to balance the headroom amount in preparation for the next scale up of services.

Headroom can be configured using one of two mechanisms, automatic or manual.

## Automatic Headroom

Automatic refers to headroom that is dynamic and designed to accommodate the next scale up of services in the cluster. It is limited by a percent of the overall resources requested by the cluster's workloads.

When you configure automatic headroom, Ocean calculates the total amount of resources (CPU, memory, and GPU) deployed in the cluster and then allocates a certain percent of that to be available as spare capacity. The default is 5%, but the value is user configurable.

Ocean continually monitors the cluster and creates headroom according to the following process, in order to prepare the cluster for the next workload scale out:

1. According to historical workload behavior that is monitored continuously, Ocean sorts the cluster's workloads according to their chance and scope of scaling out.
2. Based on the top 5 workloads' request size, Ocean provisions infrastructure that is able to facilitate a scale out of those workloads, considering all of their constraints.
3. As per the total amount of headroom, Ocean continually balances so that it matches the percentage of resources defined by the user.

As these steps are repeated, the desired percent of headroom is maintained at all times.

When you define automatic headroom, it overrides all other headroom definitions that may be manually configured, whether they are at cluster or launch specification level.

## Manual Headroom

Manual refers to headroom that is configured as specific amounts of resources, and is relevant for users who are aware of specific needs in the cluster.

Another way to define headroom is by specific resource amounts. This way is most useful when the cluster has a predicted behavior whereby the services scaling up and their headroom needs are known.

Setting the manual headroom is done by setting _headroom units_ — i.e., chunks of resources such as CPU, memory, and GPU — to be provisioned and saved for future scale out.

In order to set those units for different workloads with different constraints, manual headroom can be defined at the custom Launch Specification level. This ensures that the provisioned spare capacity will exist on nodes that have the right configuration to run the scaling workloads.

For example, a launch specification is configured to maintain two headroom units of 2048 MiB and 2000 CPU, and another launch specification is configured to maintain two headroom units of the same size. Then, a total of four headroom units will be maintained at all times, where two units each will match each of the corresponding launch specifications.

## What's Next?

- Learn more about [Launch Specifications](ocean/features/launch-specifications).
- Learn more about the Launch Specification APIs: [AWS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/launch-specifications/create/), [ECS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-ecs/launch-specifications/create/), [GKE](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-gke/launch-specifications/create/)
