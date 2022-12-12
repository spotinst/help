# Migrate the Workload to Ocean

Ocean automates the migration process of manually draining and re-scheduling your Kubernetes pods on new nodes. You can migrate and register your workloads (nodes and pods) into Ocean so they will be managed by Spot.

The following procedures are relevant to Kubernetes on AWS.

## Prerequisites

Before you start the procedure in this tutorial, you need the following:
- A Kubernetes cluster running on AWS infrastructure.
- A Kubernetes cluster connected to an Ocean cluster.
- Ocean Controller version 1.0.44 installed in the cluster.
- Deactivated Kubernetes Cluster Autoscaler.
- Dedicated [Virtual Node Groups](ocean/features/vngs/?id=virtual-node-groups) for your workload to enable the Ocean Autoscaler to scale up nodes.  

> **Tip**: If the Kubernetes Autoscaler is active, there will be inconsistency in spinning up new nodes.

After you have successfully completed creating your Ocean cluster, you can start the Workload Migration by using the console or the API.

### Guides
* Migrate the Workload using [the Console](ocean/tutorials/migrate-workload-via-ui).
* Migrate the Workload using [the API](ocean/tutorials/migrate-workload-via-api).

## Migration Failure Reasons

When a migration status is Failed, a reason for the failure is written in the Ocean logs. The table below lists the possible failure messages and provides additional information to help you resolve the issue.

| Ocean Log Failure Message                                                                                                                | Additional Information                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The migration has stopped due to connectivity issues. Make sure the Spotinst controller is installed and working properly.               | See more information about [troubleshooting the Controller](ocean/troubleshooting/troubleshoot-controller.md).                                                                                                                    |
| The migration has stopped due to inability to spin up enough new instances. Make sure all required [Virtual Node Groups](ocean/features/vngs/) are configured. | Please review all the requirements of your workloads and ensure that the required virtual node groups exist to suit those requirements.                                                                                           |
| The migration has stopped due to technical timeout.                                                                                      | Try running the migration with smaller groups of nodes. Group the nodes according to labels or by similar types of configuration requirements.                                                                                    |
| The migration has stopped due to failure to schedule pods on new nodes.                                                                  | This failure occurs if there are unscheduled or unready pods in the cluster after the time threshold for draining has passed. Verify that no new workloads are manually created during the migration.                             |
| The migration has stopped due to failure to terminate old instances.                                                                     | This failure occurs if Ocean is not able to terminate some or all of the migration instances. Ensure that you have the correct permissions and role definitions relating to the Delete Instances action in your AWS account.      |
| The migration has stopped due to failure to terminate old instances during migration stop process.                                       | Same as above.                                                                                                                                                                                                                    |
| The migration has stopped due to failure to reschedule old instances during migration stop process.                                      | This failure occurs if Ocean is not able to reschedule the old instances of the migration after you have stopped the migration. Validate the connectivity and permissions for the Uncordon Node action in the Kubernetes cluster. |

## What's Next?

Learn how to [Run Workloads](ocean/tutorials/run-workloads).
