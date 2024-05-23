<meta name=“robots” content=“noindex”>

#  Migrate the Workload to Ocean on AKS

Ocean automates the migration process of manually draining and re-scheduling your Kubernetes pods on new nodes. You can migrate and register your workloads (nodes and pods) into Ocean so Spot will manage them.

##  Prerequisites

Before starting migration, make sure you have the following:

*  The Kubernetes cluster is running on AKS infrastructure.
*  Kubernetes cluster connected to an Ocean cluster (see [Import an AKS Cluster to Ocean](https://docs.spot.io/ocean/getting-started/aks/?id=import-an-aks-cluster-to-ocean))
*  The Ocean Controller was installed and updated and runs in the cluster.
*  Cluster or Virtual Node Group upgraded to a recent K8s version.
*  Dedicated [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups) for your workload will enable the Ocean Autoscaler to scale up nodes.

>**Tip**: If the Kubernetes Autoscaler is active, there will be inconsistency in spinning up new nodes.

##  Start Workload Migration

After successfully creating your Ocean cluster, you can start the Workload Migration via the Ocean Console or the Spot API.

*  Migrate the Workload using the [Console](https://docs.spot.io/ocean/tutorials/migrate-workload-aks-ui?id=migrate-aks-workload-using-the-console)
*  Migrate the Workload using the [Spot API](https://docs.spot.io/ocean/tutorials/migrate-workload-aks-api?id=migrate-aks-workload-using-the-spot-api)
 
##  Migration Failure Reasons

For a Failed migration status, a reason for the failure is written in the Ocean logs. 
Refer to the failure messages below and additional information to help you resolve the issue.

*  “The migration has stopped due to connectivity issues. Make sure the Spotinst controller is installed and working properly.” - Refer to the troubleshooting topic for your version of the Ocean Controller.

*  “The migration has stopped due to the inability to spin up enough new nodes. Make sure all required [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/) are configured.” - Review all your workload's requirements and ensure that the required Virtual Node Groups exist to comply with those requirements.

*  “The migration has stopped due to technical timeout.” Try running the migration with smaller node groups. Group the nodes according to labels or by similar configuration requirements.

*  “The migration has stopped due to the failure to schedule pods for new nodes.” This occurs if unscheduled or unready pods are in the cluster after the draining time threshold has passed. Verify that no new workloads are manually created during the migration.

*  “The migration has stopped due to failure to terminate old nodes.” - This failure occurs if Ocean cannot terminate some or all of the migration nodes. Ensure you have the correct permissions and role definitions for the Delete Nodes action in your Azure account.

*  “The migration has stopped due to the failure to terminate old nodes during the migration Stop process.”  - This failure occurs if Ocean cannot terminate some or all of the migration nodes. Ensure you have the correct permissions and role definitions for the Delete Nodes action in your Azure account.

*  “The migration has stopped due to failure to reschedule old nodes during the migration stop process.” - This failure occurs if Ocean cannot reschedule the old nodes for the migration after you have stopped the migration. Validate the connectivity and permissions for the Uncordon Node action in the Kubernetes cluster.
