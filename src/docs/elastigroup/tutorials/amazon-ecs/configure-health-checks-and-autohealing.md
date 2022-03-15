<meta name="robots" content="noindex">

# Set Health Checks and Autohealing

## Elastigroup Health Checks For ECS

Health-Check for ECS is a process which detects the status of your ECS instance and marks it as healthy (ready for task operating) or as unhealthy (can't process tasks as needed).

ECS Health Check is based on two parameters:

- Instance status (`active`/`draining`/`inactive`)
- ECS agent connectivity status (`true`/`false`)

Based on these parameters the Health Check status is evaluated and can return one of the following:

- **HEALTHY**: The ECS Agent is connected and active, and the container instance status is either `draining` or `active`.
- **UNKNOWN**: The API call ECS Describe Container Instances returned an error for the cluster. Alternatively, the API call may have failed.
- **UNHEALTHY**: The unhealthy status might be a result of one of the following situations:
  - The Instance was not registered to the ECS cluster properly.
  - The ECS Agent isn't connected.
  - The Instance status is neither `draining` nor `active`.

<img src="/elastigroup/_media/configure-health-checks-and-autohealing_1.png" />

We rely on [ECS Describe Container Instances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html) and specifically the [AgentConnected](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerInstance.html#ECS-Type-ContainerInstance-agentConnected) and [status keys](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerInstance.html#ECS-Type-ContainerInstance-status) to verify a container instance's health.

## Configure ECS Auto-Healing

ECS Auto Healing is a process which initializes an instance replacement in case your ECS instance is marked as `unhealthy` or `Unknown` (for a specified time). If an instance fails the health check, it is automatically replaced with a new instance and the unhealthy Instance is removed from the Elastigroup. This process prevents situations of Idle instances in your cluster which cannot process cluster tasks as needed. Auto-healing is enabled by default for newly created ECS Elastigroup. You can edit the configuration of existing Elastigroups with the following steps.

## Step 1: Open-Auto Healing Configurations

For existing Elastigroups integrated with ECS, click on Actions in the upper right-hand corner of the Elastigroup view and select Edit Configuration. In Elastigroup's Management View select Switch to full edit wizard in the bottom left of the view.

<img src="/elastigroup/_media/configure-health-checks-and-autohealing_2.png" />

Auto Healing is configured in the Compute view of the Creation Wizard, under Load Balancers. Select ECS under Auto Healing.

<img src="/elastigroup/_media/configure-health-checks-and-autohealing_3.png" />

## Step 2: Set Health Check Grace Period and Unhealthy Duration

- **Health Check Grace Period**: Specify the time (in seconds) to allow an instance to boot and applications to fully start before the first health check. If an instance fails the health check after the given delay, it will be terminated and replaced with a new instance.
- **Unhealthy Duration**: Specify the amount of time (in seconds) you want to keep existing instances that are deemed unhealthy before the instance is terminated and replaced with a new one.

## What's Next?

Learn more about [Elastigroup Integration with ECS clusters](elastigroup/features/amazon-ecs/elastigroup-for-ecs.md).
