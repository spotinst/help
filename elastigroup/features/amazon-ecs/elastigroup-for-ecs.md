<meta name="robots" content="noindex">

# Elastigroup for ECS

Amazon's Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS.

Elastigroup handles the provisioning, managing, and scaling of the underlying cluster on which your containers run and provides a Container Driven Auto Scaling – meaning that it will scale the infrastructure up and down based on the ECS Tasks requirements.

By utilizing Spot instances for your cluster, Elastigroup delivers savings of up to 80% on your compute costs.

## Sophisticated Cluster Scheduling

Elastigroup automatically fetches AWS/ECS CloudWatch metrics like CPUReservation and MemoryReservation to scale up & down EC2 resources whenever needed. These metrics are presented within the context of the ECS cluster to enable maximum control over your ECS resources.

## Safe Instance Draining

Elastigroup communicates with the ECS cluster's scheduler to make sure that desired Tasks and Services are operating as expected.

Whenever an EC2 instance is scheduled for a replacement (Scale down activity or a Predicted EC2 Spot Interruption) Elastigroup invokes the deregisterContainerInstance API action to notify the ECS scheduler and reschedule the existing Tasks (containers) that run on the hosts, as well as safely draining the instance from any attached Elastic Load Balancers.

## Serverless Experience for ECS

Elastigroup automatically scales the infrastructure cluster up and down based on tasks and services utilization, providing optimized container placement.

## What's Next?

- Learn more about the [automatic autoscaler for ECS](elastigroup/features/amazon-ecs/automatic-autoscaler-for-ecs).
- Start integrating your [ECS cluster with Elastigroup](elastigroup/tutorials/amazon-ecs/get-started-with-ecs-on-elastigroup).
