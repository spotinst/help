# Health Checks and Auto-healing

## Kubernetes Clusters

Each node in the cluster is monitored by the primary nodes and assigned with a condition (state), that describes the status of different aspects of the node. The conditions types are:

- OutOfDisk
- Ready
- MemoryPressure
- DiskPressure
- NetworkUnavailable

Each condition type is assigned a status:

- False
- True
- Unknown

To ensure optimal performance, Ocean monitors the nodes' status every 30 seconds. If it identifies that the Ready condition is False or Unknown, it considers this node Unhealthy and triggers a replacement.

###  Control When to Replace an Unhealthy Node

>**Note**: Available for AWS Kubernetes clusters only.

You may want to control how fast to replace a node once it’s unhealthy. For example, if you want to reduce the time for quicker response. Alternatively, you might want to increase this time.

In the Spot API and Terraform, you can configure when to replace an unhealthy (active) node via the `healthCheckUnhealthyDurationBeforeReplacement` attribute.

`healthCheckUnhealthyDurationBeforeReplacement` is defined as the amount of time (in seconds) that an instance can remain active after becoming unhealthy.

The minimum duration before replacement is 60 seconds and can be increased in multiples of 60.

When the attribute's value is not configured ('null'), the default value 120 applies.

For the Spot API, see [Create cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) level (under `compute.launchSpecification`).

## ECS Clusters

Every Container Instance within the Amazon ECS cluster has the following two parameters assigned to it:

- status – The valid values are:

  - REGISTERING
  - REGISTRATION_FAILED
  - ACTIVE
  - INACTIVE
  - DEREGISTERING
  - DRAINING

- agentConnected – This parameter returns the following:
  - True - If the agent is connected to Amazon ECS.
  - False - If there are registered instances with an agent that may be unhealthy or stopped.

To ensure cluster functioning and availability, Ocean monitors those parameters and will consider a container instance as healthy when its status value is either ACTIVE or DRAINING and the agentConnected value returns True .

When either of the above parameters return different values, or when the container instance does not respond at all, Ocean will consider the container instance unhealthy and a replacement will be triggered.

