# Migrate Existing Elastigroups to Ocean (ECS)

The following tutorial covers importing any existing Elastigroups running an ECS cluster to Ocean.

- To migrate a cluster with only one Elastigroup, refer to Use Case 1.
- To migrate a cluster with multiple Elastigroups, refer to Use Case 2.

## Use Case 1: Single Elastigroup

If you have a single Elastigroup for your ECS cluster, click Upgrade to Ocean at the top-right of the Elastigroup.

<img src="/ocean/_media/tutorials-migrate-existingeg-forecs-01.png" />

## Use Case 2: Multiple Elastigroups in the Same Cluster

If you have multiple Elastigroups in the same ECS cluster, follow the instructions below.

### Considerations

Ocean manages the entirety of the ECS cluster's container-instances. If the instances are distributed across multiple Elastigroups, all of these Elastigroups should be migrated at once.

### Prerequisites

To complete this tutorial, gather the following information:

- List the Elastigroups connected with the target ECS Cluster.
- For each of the Elastigroups, save the following data for future use:
  - Autoscaler Custom Attributes
  - User-Data scripts
  - AMI ID

### Step 1: Create the Ocean Cluster

Choose one of your ECS Elastigroups and click Upgrade to Ocean in the top right corner. This will be your source Elastigroup, and Ocean will take control over its management.

### Step 2: Configure Ocean Custom Launch Specifications

The next step is to configure the Ocean cluster to handle all the different attribute sets configured on the current Elastigroups.

1. Navigate to the Ocean cluster you created in Step 2.
2. Click the Actions menu and select Launch Specifications.
3. For each of the Elastigroups running container instances:
   1. Click Add Launch Specification.
   2. Add the Attribute sets gathered as part of the prerequisites.
   3. Set the matching User-Data and AMI.
4. Click Update to commit changes.

### Step 3: Disable Autoscaling On The Imported Elastigroups

Disable the autoscaling in the Elastigroups that were converted to Launch Specifications to allow Ocean to take over.

For each of the groups, perform the following steps:

1. Navigate to the Elastigroup.
2. Under the Actions menu, click Edit Configuration.
3. Scroll down to the Advanced section.
4. Remove the Autoscaler selection.
5. Continue to the Review page and click Update to commit the changes.

### Step 4: Downscale Secondary Elastigroups Converted to Launch Specifications

The last step is to downscale the container instances in any secondary Elastigroups (not the source Elastigroup which was used in Step 2) and allow Ocean to launch the proper instances to fit the cluster needs.

1. Navigate to the Elastigroups configured for your ECS cluster that were converted to matching Launch Specifications (other than the main one).
2. In the Actions menu, click Manage Capacity.
3. Reduce the target capacity. It is highly recommended to reduce the target capacity in batches of 10-20% and repeat this step until downscale is complete.
4. Navigate to your Ocean Cluster. Verify that it spins up the required resources and handles the cluster tasks.

Sit back and relax. Ocean's got you covered!

If you any issues, contact our support engineers via chat or email.

## What's Next?

Learn how to [Connect a Fargate Service](elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup.).
