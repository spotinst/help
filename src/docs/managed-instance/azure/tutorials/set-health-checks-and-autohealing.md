k# Set Health Checks and Auto Healing

Elastigroup provides configurable health checks to ensure that your VMs are ready and healthy for running your workloads. You can define health checks when you are creating a new Elastigroup or add them to an existing Elastigroup in the Compute configuration.

When you activate Elastigroup’s auto healing, health check and auto healing work together to provide a high availability solution. Once the health check has determined that a VM is unhealthy, auto healing will terminate and replace the VM automatically.

This tutorial is relevant for users of Elastigroup with Microsoft Azure.

## Define Health Check

1. In the Elastigroup, go to **Networking**.
2. Select the heath check options:
   - Health Check Types: For auto healing to work, select at least one health check type:
     - **VM State** checks the VM's current state in Azure.
     - **Application Gateway** tests the connection from the [application gateway](elastigroup/tutorials-azure/connect-elastigroup-to-application-gateway?id=connect-elastigroup-to-application-gateway)  to the VM. It’s available if at least one application gateway is defined in the Elastigroup.
     - **VM Agent** checks the VM agent's current state in Azure.
   - Health Check Grace Period: Specify the time (in seconds) to allow a VM to boot and applications to fully start before the first health check. If a VM fails the health check after the given delay, auto healing terminates and replace the VM. The grace period must be at least 120 seconds.

## Activate Auto Healing

When enabled, auto healing terminates and replaces VMs that were found unhealthy by the health checks you defined. To use auto healing, you must define at least one health check type.

1. Turn **Auto Healing** to <i>On</i>.
2. Set Unhealthy Duration. This is the amount of time (in seconds) to keep existing VMs that are found unhealthy before the VM is terminated and replaced with a new one. An instance must be found healthy at least one for this to work.

<img src="/elastigroup/_media/tutorials-azure-set-health-check-02.png" width="261" height="160" />

## Save Your Changes

After you update the health checks and auto healing, save your changes to the Elastigroup configuration.

Go to the Review tab and click **Update**.

## View Health Check Status

You can view the health status of VMs in the Elastigroup:

1. In your Elastigroup, click the VMs tab. In the table of VMs, you can see the Health column with status icons displayed.

   <img src="/elastigroup/_media/tutorials-azure-set-health-check-03.png" />

2. In the Health column, hover the cursor over a specific icon. A detailed summary of the health checks for that VM appears.

   <img src="/elastigroup/_media/tutorials-azure-set-health-check-04.png" width="309" height="298" />

   In order of increasing severity, the possible statuses are:

   - Healthy
   - Unknown
   - Unhealthy
