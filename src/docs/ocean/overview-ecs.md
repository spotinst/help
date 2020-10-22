# Ocean Overview (ECS)

Ocean is a managed infrastructure scaling service that adjusts infrastructure capacity and size to meet the needs of containerized applications running on the cluster.

Ocean monitors for pending ECS tasks and automatically adjusts the size of the cluster based on the workload [placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html). Ocean ensures that the cluster resources are utilized and scales down underutilized instances to ensure maximal cost optimization through optimal bin packing.

Ocean integration with ECS clusters is executed via API calls between the Spot SaaS and the AWS ECS Service.

As tasks and services are deployed via the Amazon CLI, API or Console UI, Ocean scans the cluster and identifies tasks that have no container instances with sufficient resources to be scheduled. Once a scale-up is triggered, Ocean will locate the optimal instance type, size, and lifecycle for cost and utilization. As new instances register to the ECS cluster via their User Data scripts, the ECS task scheduler will be able to place the pending tasks.

At the same time, the Autoscaler constantly runs simulations of the cluster, looking to optimize the resource allocations via bin-packing algorithms. When an instance is identified whose tasks may be distributed across the cluster, a scale-down is triggered, and the instance is drained and terminated.

In addition to the smart container-driven autoscaling and the use of spot instances, Ocean provides a rich feature set that aims to optimize other aspects of container cluster management. For example, when you configure [headroom](ocean/features/headroom), a buffer of spare capacity is maintained, based on the cluster's most common services to scale out . The headroom allows for incoming tasks to be scheduled immediately, eliminating the wait time until new instances spin up and register to the cluster.

The result of the Ocean features is an optimally utilized and cost-efficient cluster of container instances.

<img src="/ocean/_media/ocean-ecs-architecture.png" />

## What's Next?

- If you have not already connected your AWS account, [Connect your AWS Account](connect-your-cloud-provider/aws-account).
- [Get started with an Ocean Cluster](ocean/getting-started/ecs).
