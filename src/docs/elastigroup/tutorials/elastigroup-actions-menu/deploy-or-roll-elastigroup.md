# Deploy an Elastigroup

A deployment is a process in which all of the instances running in an Elastigroup are detached and new instances are launched to replace them. A deployment is required when you update a software version and whenever you make changes to certain parameters in the Elastigroup configuration.

This tutorial describes how a deployment works, the procedure for running a deployment, and information that Elastigroup provides about a deployment.

For Elastigroup with Azure, see [Deploy an Elastigroup](elastigroup/tutorials-azure/deploy-an-elastigroup).

## When to Deploy

You need to run a deployment in the following cases:

- If you update the application or make any changes to the image.
- If you make any orchestration changes. There is no way to change the orchestration on running instances so a new deployment is required for the changes to take effect.

## How it Works

Instead of deploying an entire Elastigroup at the same time, a deployment runs in groups of instances called batches. This simplifies tracking of system health and facilitates troubleshooting if necessary.

When you set up a deployment, you will define a batch size and a grace period.

### Batch Size

This is the size of each batch in the deployment as a percent of the total number of instances in the group.
For example, a group with 50 instances and a batch size of 20% will be deployed in five separate batches of 10 instances each.

### Grace Period

When the deployment of a batch starts, Elastigroup waits until the instances are healthy before starting the next batch. The instance is considered healthy when it meets the criteria defined in your [health check setting](elastigroup/features/compute/autohealing?id=configure-autohealing-health-check-type). If less than 50% of the instances are healthy, then the deployment will fail. The Grace Period parameter is the maximum time that Elastigroup will wait for the instances to be healthy before the deployment of the next batch will start.

If there is no health check setting set in the Elastigroup, each batch will wait for the entire grace period to end.

### Deployment Process

While a deployment process is running, no update, such as a capacity change, can be applied to the Elastigroup.

On a high level, the deployment process takes place in the following stages:

1. You define the deployment parameters and trigger the process (either from the Actions menu or as a [scheduled task](elastigroup/features/core-features/scheduling)).
2. For the first batch, Elastigroup launches new (i.e., green) instances in the cluster.
   a. Elastigroup monitors the instances using the configured health check service.
   b. When the new instances are registered as healthy, the old (i.e., blue) instances are scaled down.
3. Elastigroup repeats Step 2 for the next batch and continues until all the batches are deployed.

### System Behavior

- One failed batch is enough to fail the deployment. Be sure to provide an ample grace period for the instances to become healthy.
- Your Elastigroup will not perform new rolls or any scale down activities until the failed roll is completely stopped or the failure is resolved.
- The scale down policy will be suspended until the deployment is finished. In addition, you cannot update the group configuration as long as a deployment is in progress.

## Deploy the Group

To deploy an Elastigroup, do the following:

1. In the Elastigroup Overview page, open the Actions menu and click Deploy.

<img src="/elastigroup/_media/tutorials-deploy-elastigroup-01.png" />

2. Enter the Batch Size (as a %) and the Grace Period (in seconds), and click Roll.

<img src="/elastigroup/_media/tutorials-deploy-elastigroup-02.png" />

Once the deployment has started, you will see a banner at the top of the page indicating “Ongoing Deployment”.

### Schedule a Deployment Task

You can also configure a scheduled task that will run a deployment automatically at a time you choose. This enables you to run the deployment at a time that is convenient for you or times less likely to impact your operations.

### Instances

The Instance tab shows status and details of each instance in the deployment, including the blue (old) instances and the green (new) instances.

<img src="/elastigroup/_media/tutorials-deploy-elastigroup-05.png" />

### Events

The Events tab gives you visibility of the specific events as they complete in the deployment.

<img src="/elastigroup/_media/tutorials-deploy-elastigroup-06.png" />
