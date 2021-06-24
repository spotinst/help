# Nomad Autoscaling

Scaling Nomad nodes has always been difficult, our solution is our own proprietary Nomad Autoscaler which will allow our customers to scale Nomad workloads economically based on Spot prices and trends based on aggregated node utilization.

## How Nomad Autoscaler Works

Nomad Autoscaler periodically checks whether there are Jobs that have queued allocations and if there is enough capacity to schedule these allocations. If there isn't enough capacity, a scale up event will be triggered.

Nomad Autoscaler monitors the usage of all nodes. If a node is not needed for an extended period and is not highly utilized, the Jobs will be scheduled elsewhere and the node will be terminated.

## Headroom

A buffer of spare capacity (in terms of both memory and CPU) to make sure that when we want to scale more jobs, we don't have to wait for new instances, and also to prevent instances from being over-utilized.

Each headroom unit consists of 2 definitions: one for CPU `cpuPerUnit` (in MHz) and one for Memory `memoryPerUnit` (in MiB). Also, a number of headroom units to reserve in the cluster can be defined.

For example, Let's say that we define the headroom unit to consist of 512 MiB of Memory and 1000 MHz, and require a total of 10 units. In addition, let's assume that the cluster consists of 3 instances. The AutoScaler will verify the total sum of units throughout the entire cluster and check if it meets the required number configured in the group.

If for example, the first instance has 2 whole free headroom units (in our example it means at least 1024 MiB and 2000 MHz), the second instance has 3 whole units and the third has 5 whole units, then the cluster has a total of 10 free headroom units, as configured in the group, and no scale up will be performed. However, if the first instance will have 2 free units, the second instance will have 3 free units but the third will have only 4 free units, then the cluster will have a total of 9 free units, and the group requires 10 free units, so a scale up activity will be triggered.

> **Tip**: Headroom takes precedence over scale-down operations.

<img src="/elastigroup/_media/nomad-autoscaling-01.png" />

## Tetris Scaling

When a job is launched in Nomad, The Nomad main scheduler tries to find free capacity for the job to run, in some cases, there aren't enough resources to meet the job's demands.

In such a case, the job will have queued allocations, and the job metrics will show that the job can't run due to exhausted nodes. Some of the reasons for node exhaustion are:

- Dimension `cpu exhausted` exhausted on 1 node
- Dimension `memory exhausted` exhausted on 1 node
- Dimension `network: reserved port collision` exhausted on 1 node
- No nodes were eligible for evaluation

The Nomad Autoscaler automatically detects those states and launch additional instances when required.

<img src="/elastigroup/_media/nomad-autoscaling-02.png" />

## Down Scaling

Once the Nomad Autoscaler is enabled on a group, Elastigroup monitors the Nomad Cluster for idle instances. An instance is considered idle if it has less than 40% CPU and Memory utilization.

When an instance is found idle for the specified amount of consecutive periods, Elastigroup will find spare capacity in other instances, Drain the instance jobs, reschedule those on other instances and terminate the idle instance.

<img src="/elastigroup/_media/nomad-autoscaling-03.png" />

> **Tip**: Scale-Down actions are limited to 10% of the cluster size at a time.

## What's Next?

To learn how to configure the Elastigroup Integration with Nomad Autoscaler, see [Configure Nomad Autoscaler](elastigroup/tools-integrations/nomad/configure-nomad-autoscaler).
