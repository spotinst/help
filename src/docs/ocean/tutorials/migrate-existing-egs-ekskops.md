# Migrate Existing Elastigroups to Ocean (EKS,  kOps)

The following tutorial covers migration of existing Elastigroups running a Kubernetes cluster to Ocean.

- If your cluster has only one Elastigroup, refer to Use Case 1.
- If your cluster consists of multiple Elastigroups, refer to Use Case 2.

## Use Case 1: A Single Elastigroup

If you have one Elastigroup that you would like to upgrade to Ocean, do the following:

1. Open the Elastigroup, and click Upgrade to Ocean on the top right.
2. Click Upgrade in the pop-up window.

<img src="/ocean/_media/tutorials-migrate-existingeg-foreks-01.png" width="400" height="160" />

Wait for the confirmation message to validate that the upgrade process is complete.

> **Tip**: For Kubernetes Elastigroups created via `kOps`, see the following [tutorial](ocean/tools-and-integrations/kops/migrate-cluster).

## Use Case 2: Multiple Elastigroups

If you have multiple Elastigroups for the same Kubernetes cluster, follow the instructions below.

### Considerations

Ocean manages the entirety of the Kubernetes cluster nodes. If the nodes are distributed across multiple Elastigroups, all of these Elastigroups should be migrated at once.

### Prerequisites

To complete this tutorial, gather the following information:

- List the Elastigroups connected to the target Kubernetes Cluster.
- For each of the Elastigroups, note the following data for future use:
  - Autoscaler labels
  - User-data script
  - AMI ID
- Ensure all the Elastigroups in the cluster use the same Cluster Identifier (ID). This is used to connect the existing Ocean Controller installed on the Kubernetes cluster to Ocean.

### Step 1: Create the Ocean Cluster

Choose one of your Kubernetes Elastigroups and click Upgrade to Ocean. This will be your source Elastigroup, and Ocean will take control over its management.

### Step 2: Configure Ocean Custom Launch Specifications

Configure the Ocean cluster to handle all the different label sets configured on the remaining Elastigroups.

1. Navigate to your Ocean cluster.
2. Click Actions and select Custom Launch Specifications.
3. For each of the remaining Elastigroups running worker nodes do the following:
   1. Click Add Specification.
   2. Add the Label sets gathered as part of the prerequisites.
   3. Set the matching User-Data and AMI.
4. Click Save Changes to commit changes.

### Step 3: Disable Autoscaling on the Imported Elastigroups

Disable the autoscaling in the Elastigroups that were converted to Launch Specifications to allow Ocean to take over.

For each of the groups, perform the following steps:

1. Navigate to the Elastigroup.
2. Click Actions and click Edit Configuration.
3. Scroll down to the Advanced section.
4. Remove the Autoscaler selection.
5. Continue to the review page and click Update to commit the changes.

<img src="/ocean/_media/tutorials-migrate-existingeg-foreks-02.png" />

### Step 4: Downscale Secondary Elastigroups Converted to Launch Specifications

The last step is to downscale the existing worker nodes and allow Ocean to launch the proper instances to fit the cluster needs.

1. Navigate to the Elastigroups configured for your Kubernetes cluster.
2. Click Actions and click Manage Capacity.
3. Reduce the target capacity. It is highly recommended to reduce the target capacity in batches of 10-20% and repeat this step until downscale is complete.
4. Navigate to your Ocean Cluster. Verify that it is spinning up the required resources and handles the pending pods.

Sit back and relax. Ocean's got you covered!

In case of any issues, please contact our support engineers via chat or email.

## What's Next?

Learn how to [Migrate Existing Elastigroups to Ocean](ocean/tutorials/migrate-existing-egs-ecs.md).
