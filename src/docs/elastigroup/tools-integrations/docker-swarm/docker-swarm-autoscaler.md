# Docker Swarm Autoscaler

## Introduction

You can scale up and down the instances in your cluster according to CPU and memory reservations needed for your nodes to work properly on top of EC2 instances.
The auto-scaler supports headroom units that will be available as free resources to handle peak in tasks in the cluster.

Without the utilization of headroom, there will be a `wait time` until the instance launches and registers before it can handle the incoming tasks properly.

With Docker Swarm auto-scaler you set an upfront spare capacity available to handle your incoming tasks if needed.

## Headroom

A buffer of spare capacity (in terms of both memory and CPU) to make sure that when we want to scale more tasks, we don't have to wait for new instances, and also to prevent instances from being over-utilized.

Each headroom unit consists of 2 definitions: one for CPU units `cpuPerUnit` (nanoCPU) and one for Memory `memoryPerUnit` (memory bytes). Also, a number of headroom units to reserve in the cluster can be defined.

For example, Let's say that we define the headroom unit to consist of 100,000,000 bytes of Memory and 100,000,000 nanoCPU units, and require a total of 10 units. In addition, let's assume that the cluster consists of 3 instances. The AutoScaler will verify the total sum of units throughout the entire cluster and check if it meets the required number configured in the group.

If for example, the first instance has 2 whole free headroom units, the second instance has 3 whole units and the third has 5 whole units, then the cluster has a total of 10 free headroom units, as configured in the group, and no scale-up will be performed. However, if the first instance will have 2 free units, the second instance will have 3 free units but the third will have only 4 free units, then the cluster will have a total of 9 free units, and the group requires 10 free units, so a scale up activity will be triggered.

## Tetris Scaling

When a task is launched in Docker Swarm cluster, The manager node tries to find free capacity for the task to run, in some cases, there aren't enough resources to meet the task's demands.
When a task is failed to start, an error is issued. See the API response below for an example:

<img src="/elastigroup/_media/docker-swarm-autoscaler_1.png" />

The Docker Swarm Auto-scaler automatically detects these errors and launches additional instances when required.
