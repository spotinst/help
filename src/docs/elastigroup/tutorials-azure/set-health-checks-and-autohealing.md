# Set Health Checks and Autohealing

Elastigroup provides configurable health checks to ensure that your VMs are ready and healthy for running your workloads. You can define health checks when you are creating a new Elastigroup or add them to an existing Elastigroup in the Compute configuration.

When you activate Elastigroup’s Auto Healing feature, Health Check and Auto Healing work together to provide a high availability solution. Once the health check has determined that a VM is unhealthy, Auto Healing will terminate and replace the VM automatically.

## Relevance

This tutorial is relevant for users of Elastigroup with Microsoft Azure.

## Define Health Check

To define health checks in an existing Elastigroup, do the following:

1. In the Elastigroup, click the Compute tab.
2. Scroll down and open the Health Check panel.

<img src="/elastigroup/_media/tutorials-azure-set-health-check-01.png" width="278" height="254" />

3. Complete the Health Check definitions described below.
   - Health Check Types: Choose one or more of the health check types. For the Auto Healing feature to work, you must choose at least one health check type. The following types are available:
     - VM State
     - [Application Gateway](https://docs.spot.io/elastigroup/tutorials-azure/connect-elastigroup-to-application-gateway?id=connect-elastigroup-to-application-gateway): This option is available only if you have previously defined an application gateway in the Elastigroup.
   - Health Check Grace Period: Specify the time (in seconds) to allow a VM to boot and applications to fully start before the first health check. If a VM fails the health check after the given delay, Auto Healing will terminate and replace the VM. The grace period must be at least 120 seconds.

## Activate Autohealing

When enabled, Auto Healing terminates and replaces VMs that were found unhealthy by the health checks you defined. To use Auto Healing, you must define at least one health check type.

To activate Auto Healing, do the following:

1. Click the Auto Healing switch to the On state.
2. Set Unhealthy Duration: This is the amount of time (in seconds) to keep existing VMs that are found unhealthy before the VM is terminated and replaced with a new one. This function is valid only after an instance was found healthy at least once.

<img src="/elastigroup/_media/tutorials-azure-set-health-check-02.png" width="261" height="160" />

## Save your Changes

Once you have completed your definition of health checks and autohealing, you must save your changes to the Elastigroup configuration.

Go to the Review tab and click Update at the bottom.

## View Health Check Status

You can view the health status of VMs in the Elastigroup. To view the status, do the following:

1. In your Elastigroup, click the VMs tab. In the table of VMs, you can see the Health column with status icons displayed.

<img src="/elastigroup/_media/tutorials-azure-set-health-check-03.png" />

2. In the Health column, hover the cursor over a specific icon. A detailed summary of the health checks for that VM appears.

<img src="/elastigroup/_media/tutorials-azure-set-health-check-04.png" width="309" height="298" />

In order of increasing severity, the possible statuses are:

- Healthy
- Unknown
- Unhealthy

## What’s Next?

Learn more about [Deployments](https://docs.spot.io/elastigroup/tutorials-azure/deploy-an-elastigroup) and how the health checks are used in the deployment process.
