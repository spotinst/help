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

To ensure optimal performances, Ocean monitors the nodes' status every 30 seconds and in case it identifies that the Ready condition is False or Unknown, it considers this node as Unhealthy and triggers a replacement.

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

## What’s Next?

Learn about Ocean's [Labels and Taints](ocean/features/labels-and-taints).
