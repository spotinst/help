<meta name="robots" content="noindex">

# Autoscaler Tetris Scaling

Tetris scaling is a process that optimizes the task placement across the infrastructure of a cluster. When a task is launched in ECS, The ECS scheduler tries to find free capacity for the task to run, in some cases, there aren't enough resources to meet the task's demands.

When a task fails to start, ECS writes events that describe why the task was unable to run properly.The ECS Autoscaler automatically detects these events and launch additional instances as required. The most common error events are illustrated below.

## Insufficient Memory

<img src="/elastigroup/_media/ecs-tetris-01.png" />

## Insufficient CPU

<img src="/elastigroup/_media/ecs-tetris-02.png" />

## No Ports Available

<img src="/elastigroup/_media/ecs-tetris-03.png" />

## No Container Instances

<img src="/elastigroup/_media/ecs-tetris-04.png" />

The figure below shows how the Spot Infrastructure-aware Scheduler deals with various tasks types and assigns them to the right machine. If required – a machine with the right resources for the task to be executed is launched.

<img src="/elastigroup/_media/ecs-tetris-05.png" />

## What's Next?

- [Get started with Elastigroup for Amazon ECS](elastigroup/tutorials/amazon-ecs/get-started-with-ecs-on-elastigroup).
- Learn about easy task placement in your cluster by using [ECS constraints](elastigroup/tutorials/amazon-ecs/configure-attributes-for-task-placement-constraints).
