# Headroom

One of Ocean’s key features for optimizing scaling is **headroom**, a buffer of spare capacity ensuring that a cluster is always ready for a rapid application scale-up.

When you configure headroom in specific amounts of resources (i.e., vCPU, memory, and GPU) or specify headroom as a percentage of the cluster’s total requested resources, the cluster can scale workloads without waiting for new instances to be provisioned.

Ocean optimally manages the headroom dynamically in order to provide the best possible cost-performance balance. Alternatively, headroom may be configured manually to support any use case.

## How It Works

Ocean continually checks for the cluster's unscheduled workloads (pods or tasks). If unscheduled workloads are found, Ocean simulates placing them on the existing infrastructure.

Since Ocean has saved compute resources in advance (i.e., created headroom), the container orchestrator can instantly schedule unscheduled workloads for these nodes. Once the headroom has been used to scale up workloads, Ocean will provide more infrastructure to balance the headroom amount in preparation for the next service scaling up.

Headroom can be configured using one of two mechanisms: automatic or manual.

## Automatic Headroom

Automatic refers to dynamic headroom designed to predict the next scale-up of services in the cluster. It is limited by a percentage of the overall resources requested by the cluster’s workloads.

When configuring automatic headroom, Ocean calculates the total amount of resources (CPU, memory, and GPU) deployed in the cluster and allocates a certain percentage to be available as spare capacity. The default is 5%, but the value is user-configurable.

Ocean continually monitors the cluster and creates headroom according to the following process in order to prepare the cluster for the next workload scale-out:

1. Based on continuously monitored historical workload behavior, Ocean sorts the cluster’s workloads according to their chance and scope of scaling out.
2. Based on the request size of the top 5 workloads, Ocean provisions infrastructure that can facilitate scaling out of those workloads, considering all of their constraints.
3. As per the total amount of headroom, Ocean continually balances to match the percentage of resources defined by the user.

As these steps are repeated, the required headroom percentage is always maintained.

### Automatic Headroom per Virtual Node Group

It is possible to define automatic headroom per virtual node group (VNG). The calculation of the automatic headroom in the VNG is the same as the calculation for the cluster as described above. This means that Ocean takes all of the workloads that run on a given VNG and calculates the headroom for that VNG using the same method it would use to calculate headroom for the cluster.

The automatic headroom and the headroom per Virtual Node Group are calculated independently. Therefore, the headroom per cluster and VNG will save the headroom for the same workload. To avoid this situation, you should set the headroom only at the In ECS, the auto headroom is calculated based on the service with the most changed tasks in the cluster, not taking the Virtual Node Group's settings into consideration. 

>**Note**: This option is not applicable to ECS. In ECS, the automatic headroom is calculated based on the service with the most changed tasks in the cluster, regardless of the Virtual Node Group.

## Manual Headroom

While automatic headroom is the recommended configuration, you can also set up manual headroom on top of automatic headroom. Defined per VNG, manual headroom adds flexibility to help with specific use cases.

Manual refers to headroom configured as specific amounts of resources and is relevant for users who are aware of specific needs in the cluster.

Another way to define headroom is by specific resource amounts. This way is most useful when the cluster has a predicted behavior whereby the services scaling up and their headroom needs are known.

Setting the manual headroom involves setting headroom units—i.e., chunks of resources such as CPU, memory, and GPU—to be provisioned and saved for future scale-out.

Manual headroom can be defined at the [Virtual Node Group](ocean/features/launch-specifications) level to set those units for different workloads with different constraints. This ensures that the provisioned spare capacity will exist on nodes with the right configuration to run the scaling workloads.

For example, a VNG is configured to maintain two headroom units of 2048 MiB and 2000 CPU and another Virtual Node Group is configured to maintain two headroom units of the same size. Thus, four headroom units will always be maintained, two units each matching each of the corresponding VNGs.

### Note for AWS and GKE Users

Due to backward compatibility considerations, you will need to activate a switch in the configuration in order to enable automatic and manual headroom to work in parallel. Otherwise, automatic headroom overrides all other headroom definitions manually configured, whether they are at cluster or VNG level. You may enable automatic and manual headroom at the Ocean level by setting `autoScaler.enableAutomaticAndManualHeadroom` to True.

