# Shutdown Hours

Use shutdown hours to achieve cost savings with Ocean. 
You can build a weekly schedule for the hours your cluster is up and running. You are charged only for the running hours. 
For the hours you don't specify, the cluster is down so that the underlying instances of the cluster's nodes are scaled down to zero. You are not charged during this time.

Shutdown Hours are recommended for non-production environments (e.g., development, testing, staging) where you are sure you do not require 24/7 availability.

## Sample Weekly Schedule

<img src="/ocean/_media/features-running-hours-00.png" />

The running hours are in blue, and the off hours are in gray.

- You can define running hours in minimum chunks of 30 minutes.
- The schedule appears according to your local time, but Ocean uses the UTC time zone internally.

## Scaling Behavior (Kubernetes)

When a period of running time ends, Ocean automatically scales down the entire cluster to 0. During the off time, all nodes are down, the Ocean Controller is down, and does not report information to the autoscaler. <!--need chan ge for aks here -->

When off time ends, Ocean starts a single node from a virtual node group without taints. 
If all virtual node groups have taints, Ocean starts a node from the default virtual node group unless `useAsTemplateOnly` is defined, in which case no node is started. 
In the latter case, check that the controller is running, possibly on a node not managed by Ocean.

Once a node is launched and registered to the Kubernetes cluster, the controller is scheduled on that node. 
Ocean always first schedules the controller to report the cluster state to the Ocean autoscaler.

The controller immediately reports unscheduled pods in the cluster to the autoscaler, and the autoscaler launches the appropriate types and number of nodes to provide the resources required by the current unscheduled pods.

At the end of this process, all pods are satisfied, and the cluster fully functions in the scheduled running hours.

>**Note:** Shutdown Hours are unsupported for GKE clusters with shielded nodes. If you use shutdown Hours with shielded nodes, ensure that the Ocean controller is available at the end of the off time by checking that it runs on a node that Ocean does not manage. This is because the controller is part of the node registration process and requires an available node to run on. 

## Scaling Behavior (AWS ECS)

When a period of running time ends, Ocean automatically scales down the entire cluster to 0. During the off time, all container instances are down.

When off time ends, the autoscaler launches the appropriate types and number of container instances to provide the resources the unscheduled tasks require. 
At the end of this process, all tasks are satisfied, and the cluster fully functions in the scheduled running hours.

## Shutdown Hours per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">AKS</font>  

You can define shutdown hours per virtual node group via the Spot API to shutdown groups at different times. 
For example, teams working on different virtual node groups may need to scale down the infrastructures related to each group at different times.

### Virtual Node Group and Cluster Priorities

- Cluster shutdown hours have higher priority. For example, if the cluster is in shutdown hours, a scheduled wake-up of a virtual node group in the cluster will not occur during this time.
- When the virtual node group is up again, it automatically scales to the minimum nodes configured.

## Related Topics

[Set Shutdown Hours (Console and API)](https://docs.spot.io/ocean/tutorials/set-running-hours)


