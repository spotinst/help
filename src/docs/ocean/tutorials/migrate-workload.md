# Migrate the Workload to Ocean

The following tutorial covers the steps required to migrate existing K8s workloads into an Ocean cluster.

After you have created an Ocean cluster and connected it to your K8s cluster, it is time to migrate and register the workloads (nodes and pods) into Ocean so they will be managed by Spot. Instead of manually draining and re-scheduling your K8s pods on new nodes, Ocean will completely automate the migration process.

## Relevance

The following procedures are relevant to Kubernetes on AWS.

## Prerequisites

Before you start the procedure in this tutorial, you need the following:

- A K8s cluster running on AWS infrastructure
- A K8s cluster connected to an Ocean cluster
- Spot Controller version 1.0.44 installed in the cluster
- Kubernetes Cluster Autoscaler Deactivated

---

**Tip**: If the Kubernetes Autoscaler is active, there will be inconsistency in spinning up new nodes.

---

## Step 1: Get Started with Workload Migration

After you have successfully completed creating your Ocean cluster, click Workload Migration on the top right corner.

<img src="/ocean/_media/tutorials-migrate-workload-01.png" />

## Step 2: Select Instances to Migrate

Ocean will automatically detect the workloads (nodes and pods) which belong to the Kubernetes cluster associated with it.

In the following screen, Ocean will display all the nodes that it discovered.

<img src="/ocean/_media/tutorials-migrate-workload-02.png" />

From the list on the left, select the instances you wish to migrate into your Ocean cluster by clicking on the relevant checkboxes.

## Step 3: Set Preferences

Select your preferred Workload Migration process by selecting the relevant checkbox:

- Terminate Instances – Ocean will terminate the old instances once the pods that reside on them are migrated, and the old instances are fully drained.
- Evict stand-alone Pods – Ocean will terminate pods that do not belong to a Kubernetes deployment. This means that you would need to launch the pod manually (after the migration) due to the fact that there is no object that would do it automatically.
- Force PDB covered Pod Eviction – By selecting this checkbox, Ocean will force the Pod eviction from the instance, even if the distributed budget is not satisfied.

---

**Tip**: If you have Stand-Alone pods and you have not selected Evict stand-alone pods, you will be required to manually evict those pods at the end of the migration process.

---

## Step 4: Start Migration

1. After you have selected the relevant instances and decided on the migration scope and batch size, click Start Migration on the bottom right corner. A pop-up will appear where you can have a final review of the migration configuration.

<img src="/ocean/_media/tutorials-migrate-workload-03.png" />

2. Click Start Migration to officially begin the migration process.

Once you have started the migration, you will have the option to stop it. However, note that workloads that have been migrated to Spot will remain under the new instances which are managed by Spot. This means that when aborting the process, Spot will finish scheduling all unscheduled pods of the current batch, and instances that were not drained yet will become schedulable again.

## Step 5: View Workload Migration Dashboard

During the migration, you will have complete visibility into the process in the Workload Migration Dashboard.

<img src="/ocean/_media/tutorials-migrate-workload-04.png" />

The information diplayed is described below.

- The overall status of the migration process:
  - Running – The migration process is concurrent and pods are being migrated.
  - Stopping – The migration process has been aborted by the user, and Spot is gracefully completing the current batch.
  - Stopped – The migration process has officially stopped, after completing the stopping phase.
  - Completed – The migration process has completed successfully.
  - Failed – The migration process has failed due to technical fault during the process.
- The stage of the migration process.
- The number of new instances spun up by Spot. This number will increase from 0 during the first few minutes of the migration process.
- The number of pods launched on new instances. This number will increase as the migration proceeds. Note that Kubernetes might schedule other pods which do not belong to the workloads being migrated.
- The number of pods remaining to be launched by Spot. This number will decrease to 0 during the migration process.
- The number of unscheduled pods in the cluster. The number of pods that are currently in an unscheduled state. Spot refers only to unscheduled pods which are a part of the workload.
- The instances which have been terminated successfully.
- The instances which have completed the migration successfully.
- The instances which are currently being drained.
- The instances which have not started the migration process.

### Instance Color Status

- Green: Instance has completed the migration successfully.
- Yellow: Instance has partially completed the migration.
- Red: Instance has failed the migration.

If you wish to review previous migrations, click Previous Migrations on the top right corner of the Workload Migration screen.

## Abort Migration

If you wish to abort the migration process, click Stop Migration.
The following window will pop up. Mark Terminate Drained Instances if you want Ocean to terminate the already drained instances before aborting the entire process, then click Yes and Stop.

## Migration Failure Reasons

When a migration status is Failed, a reason for the failure is written in the Ocean logs. The table below lists the possible failure messages and provides additional information to help you resolve the issue.

| Ocean Log Failure Message                                                                                                                | Additional Information                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The migration has stopped due to connectivity issues. Make sure the Spotinst controller is installed and working properly.               | See more information about [troubleshooting the Controller](ocean/troubleshooting/troubleshoot-controller.md).                                                                                                                    |
| The migration has stopped due to inability to spin up enough new instances. Make sure all required Launch Specifications are configured. | Please review all the requirements of your workloads and ensure that the required virtual node groups exist to suit those requirements.                                                                                           |
| The migration has stopped due to technical timeout.                                                                                      | Try running the migration with smaller groups of nodes. Group the nodes according to labels or by similar types of configuration requirements.                                                                                    |
| The migration has stopped due to failure to schedule pods on new nodes.                                                                  | This failure occurs if there are unscheduled or unready pods in the cluster after the time threshold for draining has passed. Verify that no new workloads are manually created during the migration.                             |
| The migration has stopped due to failure to terminate old instances.                                                                     | This failure occurs if Ocean is not able to terminate some or all of the migration instances. Ensure that you have the correct permissions and role definitions relating to the Delete Instances action in your AWS account.      |
| The migration has stopped due to failure to terminate old instances during migration stop process.                                       | Same as above.                                                                                                                                                                                                                    |
| The migration has stopped due to failure to reschedule old instances during migration stop process.                                      | This failure occurs if Ocean is not able to reschedule the old instances of the migration after you have stopped the migration. Validate the connectivity and permissions for the Uncordon Node action in the Kubernetes cluster. |
