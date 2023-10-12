# Deploy an Elastigroup

Whenever you wish to upgrade your application version or any configuration attribute in the Elastigroup, you can run Elastigroup’s blue-green deployment to update the VMs in the group.
Instead of having to write your own scripts, you simply provide a new image and define your desired batch sizes, and Elastigroup will replace your VMs with updated versions. Each batch waits for healthy (green) instances before moving on to the next batch, ensuring high availability for your workloads.

This procedure describes how to execute a blue-green deployment of an Elastigroup and shows you how to view information about past deployments and deployments in progress.

## Relevance

This tutorial is relevant for users of Spot with Microsoft Azure.

## When to Use

You will need to run a deployment whenever one of the following cases applies:

- You have upgraded application versions in your cluster.
- You have made changes to the Elastigroup that affect the VM configuration. In this case, you will be prompted automatically to create a new deployment after updating the configuration.

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-00.png" width="406" height="247" />

Use the procedure below to create the new deployment starting from Step 3.

## Create a New Deployment

If you need to create a new deployment and you have not received the prompt shown above, use the steps below to create and roll the deployment.

1. Go to Elastigroup/Groups and click an Elastigroup.
2. Click More Actions and click Deploy.

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-01.png" />

Alternatively, in the Elastigroups Summary click the Deployments tab and click Deploy.

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-02.png" />

3. Complete the information in the Deployment dialog:

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-03.png" width="419" height="220" />

- Batch size: The size of each batch in the deployment as a percent of the total number of VMs in the group. For example, a group with 20% will deploy VMs in five separate batches.
- Grace period: The amount of time to wait for a VM to be deemed healthy according to the health check setting before the deployment starts the next batch. The grace period must be at least 120 seconds.
- Health Check Types: The health check type to be used for the deployment process. This field is enabled only if at least one [health check type](https://docs.spot.io/elastigroup/tutorials-azure/set-health-checks-and-autohealing) has been defined for the Elastigroup.

4. If you want to used the Advanced parameters, click Advanced and complete the following:
   - Draining Timeout: The amount of time (seconds) that Elastigroup will de-register and drain the VM before termination. This definition will override the general Draining Timeout defined in the group.
   - Min. Health: Defines the minimum number of unhealthy VMs (as a %) required for the deployment process to fail. This field is enabled only if at least one health check type or one [signal](https://docs.spot.io/api/#operation/elastigroupAzureSpotVmsCreateVMSignal) has been previously defined.
5. Click Roll Deployment.

When you roll the deployment, Elastigroup starts a process that replaces the existing (blue) VMs with new (green) ones. The health checks you defined will monitor the status, and a banner will be displayed showing the progress.

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-03a.png" />

## View Deployments

To view information about a deployment in progress or past deployments, go to the Deployments tab in your Elastigroup.

<img src="/elastigroup/_media/tutorials-azure-deploy-eg-04.png" />

The Deployments tab includes the following main areas:

- Deployment Summary
- Deployment Details

When at least one deployment is in progress, the Deployments tab refreshes information automatically every 30 seconds.

### Deployment Summary

The Deployment summary is a table that lists deployments created according to Deployment ID. Each deployment shows the following information:

- Deployment ID
- Progress
- Status
- Created at
- Ended at

This table shows up to 100 deployments.

### Deployment Details

This area displays the details of the deployment selected in the summary table. The information is divided into the following tabs:

- Overview: Summary for the selected deployment including:
  - Deployment ID
  - Number of batches
  - Current batch
  - Status
  - Started at
  - Ended at
  - Health Check
  - Grace Period
  - Blue VMs
  - Green Vms
- VMs: Listing of each VM in the Elastigroup and current status of the VM. A VM can have one of the following statuses:
  - Pending
  - Running
  - Detached
  - Healthy
  - Unhealthy
- Events: An accounting of each event occurring in deployment, listed in chronological order.

## What’s Next?

- Learn how to [Set Health Checks and Autohealing](elastigroup/tutorials-azure/set-health-checks-and-autohealing).
- Learn more about using the API to [set up health checks](https://docs.spot.io/api/#operation/elastigroupAzureSpotVmsCreate) for your Elastigroup.
