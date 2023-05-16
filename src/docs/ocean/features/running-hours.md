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

At the end of the off time, Ocean starts a single node from a VNG that has no taints. (If all of the VNGs have taints, Ocean would start a node from the default VNG, unless `useAsTemplateOnly` is defined, in which case no node would be started. It would be up to the user to ensure the controller is running, possibly on a node that is not managed by Ocean.)

Once the node is launched and registered to the Kubernetes cluster, the Ocean Controller is scheduled on that node. (Ocean always schedules the controller first in order to report the cluster state to the autoscaler.)

The controller immediately reports the unscheduled pods in the cluster to Ocean's autoscaler, and the autoscaler launches the appropriate types and number of nodes to provide the resources required by the current unscheduled pods.

At the end of this process, all pods are satisfied, and the cluster is fully functioning in the running hours scheduled.

Note: The Shutdown Hours feature is not supported for GKE clusters with shielded nodes. If you use the Shutdown Hours feature with shielded nodes, you need to ensure that the Ocean controller is available at the end of the off time, by checking that it is running on a node that is not managed by Ocean. This is because the Ocean controller is part of the node registration process and requires an available node to run on. 

## Scaling Behavior (Ocean For ECS)

When a period of running time ends, Ocean automatically scales down the entire cluster to 0. During the off time, all container instances are down.

At the end of the off time, the autoscaler launches the appropriate types and number of container instances to provide the resources required by the unscheduled tasks. At the end of this process, all tasks are satisfied, and the cluster is fully functioning in the running hours scheduled.

## Shutdown Hours per VNG (Ocean for Kubernetes AWS)

You can define shutdown hours per virtual node group (VNG) so that VNGs will shut down at different times. In some cases, different VNGs require different shutdown hours. For example, teams working on different VNGs may need to scale down the infrastructures related to each VNG at different times.

### Related VNG and Cluster Behavior

- Cluster shutdown hours have higher priority. For example, if the cluster is in its shutdown hours, a scheduled wake-up of the VNG during this time would not happen.
- When a VNG comes back up, it automatically scales to the minimum nodes configured.

This feature is available using the [Create](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) and [Update](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate) APIs for AWS. For setup information, see [Set Shutdown Hours per VNG](ocean/tutorials/set-running-hours?id=set-shutdown-hours-per-vng).

## What's Next?

Learn how to [Set Shutdown Hours](ocean/tutorials/set-running-hours)
