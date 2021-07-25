# Shutdown Hours

Another way to achieve cost savings with Ocean is to use the Shutdown Hours feature. In Ocean, you can build a weekly schedule defining the hours in which your cluster will be up and running. You are charged only for the running hours. In the hours you don't specify, the cluster is down, i.e., the underlying instances of the cluster's nodes are scaled down to zero. You are not charged during this time.

The Shutdown Hours feature is recommended for non-production environments (e.g., development, testing, staging) where you are sure you do not require 24 x 7 availability.

## Sample Weekly Schedule

<img src="/ocean/_media/features-running-hours-00.png" />

The example above shows a weekly schedule with running hours indicated in blue and off hours in gray.

- You can define running hours in minimum chunks of 30 minutes.
- The schedule appears in your local time, but Ocean uses UTC time zone internally.

## Scaling Behavior (Ocean For Kubernetes)

When a period of running time ends, Ocean automatically scales down the entire cluster to 0. During the off time, all nodes are down, the Ocean Controller is down, and it does not report any information to the autoscaler.

At the end of the off time, Ocean starts a single node from the default launch specification. Once the node is launched and registered to the Kubernetes cluster, the Ocean Controller is scheduled on that node. (Ocean always schedules the controller first in order to report the cluster state to the autoscaler.)

The controller immediately reports the unscheduled pods in the cluster to Ocean's autoscaler, and the autoscaler launches the appropriate types and number of nodes to provide the resources required by the current unscheduled pods.

At the end of this process, all pods are satisfied, and the cluster is fully functioning in the running hours scheduled.

## Scaling Behavior (Ocean For ECS)

When a period of running time ends, Ocean automatically scales down the entire cluster to 0. During the off time, all container instances are down.

At the end of the off time, the autoscaler launches the appropriate types and number of container instances to provide the resources required by the unscheduled tasks. At the end of this process, all tasks are satisfied, and the cluster is fully functioning in the running hours scheduled.

## What's Next?

Learn how to [Set Shutdown Hours](ocean/tutorials/set-running-hours)
