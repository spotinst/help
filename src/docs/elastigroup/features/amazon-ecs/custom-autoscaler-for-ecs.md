<meta name="robots" content="noindex">

# Custom Autoscaler for ECS

This article explains how Custom ECS Autoscaler works and includes a guide on how to setup a Custom ECS AutoScaler in your ECS integrated Elastigroup.

## How it Works

The Spot ECS autoscaler dynamically scales your cluster up to ensure there are always sufficient resources to run all tasks. With the `Custom` option the Spot ECS autoscaler analyzes your ECS cluster topology and according to your specified buffer of spare capacity, called Headroom [link to headroom concept](https://docs.spot.io/elastigroup/features/amazon-ecs/autoscaler-headroom), configures your cluster's autoscaling for optimized performance and costs.

## Enable ECS AutoScaler in Custom Mode

In Elastigroup's Creation Wizard, under the Compute tab scroll down to the Integrations section and enable the ECS AutoScaler. Once the Autoscaler is enabled select Custom mode and configure the following settings:

- Autoscaler cooldown time: Cooldown is the number of seconds between one scaling activity to the next one.
- Evaluation periods: The number of consecutive periods that should pass before the scaling action is triggered. The default is 5 evaluation periods (1 evaluation period = 1 minute).
- Headroom units count: Headroom is a buffer of spare capacity (in terms of both memory and CPU) that makes sure that when you want to scale more tasks, you don't have to wait for new instances to launch while preventing instances from being over-utilized.

## What's Next?

Learn more about [Autoscaler Headroom](elastigroup/features/amazon-ecs/autoscaler-headroom).
