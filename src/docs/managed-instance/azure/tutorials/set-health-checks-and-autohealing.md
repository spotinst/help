# Set Health Checks and Auto Healing

Elastigroup stateful node has configurable health checks make sure your VMs are ready and healthy for running your workloads. You can define health checks when you are creating a stateful node or add them to an existing stateful node in the Networking configuration.

When you activate Elastigroup stateful node’s auto healing, health check and auto healing work together to provide a high availability solution. Once the health check has determined that a VM is unhealthy, auto healing will terminate and replace the VM automatically.

This is relevant for users of Elastigroup stateful nodes with Microsoft Azure.

## Define Health Check

1. In the stateful node, go to **Networking**.
2. Select the heath check options:
   - Health Check Types: For auto healing to work, select at least one health check type:
     - **VM State** checks the VM's current state in Azure.
     - **Application Gateway** tests the connection from the [application gateway](elastigroup/tutorials-azure/connect-elastigroup-to-application-gateway?id=connect-elastigroup-to-application-gateway)  to the VM. It’s available if at least one application gateway is defined in the Elastigroup.
     - **VM Agent** checks the VM agent's current state in Azure.
   - Health Check Grace Period: Specify the time (in seconds) to allow a VM to boot and applications to fully start before the first health check. If a VM fails the health check after the given delay, auto healing terminates and replace the VM. The grace period must be at least 120 seconds.

## Activate Auto Healing

When enabled, auto healing terminates and replaces VMs that were found unhealthy by the health checks you defined. To use auto healing, you must define at least one health check type.

1. Turn **Auto Healing** to <i>On</i>.
2. Set **Unhealthy Duration**. This is the amount of time (in seconds) to keep existing VMs that are found unhealthy before the VM is terminated and replaced with a new one. An instance must be found healthy at least one for this to work.

## Save Your Changes

After you update the health checks and auto healing, save your changes to the stateful node configuration.

Go to the Review tab and click **Update**.
