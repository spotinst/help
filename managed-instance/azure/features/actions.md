# Stateful Node Actions

With stateful node actions you can change the node’s state while persisting its resources.

<img src="/elastigroup/_media/azure-manage-stateful-nodes-01a.png" />

The available actions are described below.

### View Configuration

View the JSON configuration for the stateful node. You can also copy the configuration to the clipboard or export the configuration to a JSON file.

### Recycle

This action is equivalent to rebooting or restarting a machine. The action is relevant to apply changes which were made in the node configuration and then require launching a new node in order to apply them (for example, updating the availability zone list and updating the VM size list). When this action is used, the node is paused, the current VM is terminated and a new VM is launched instead, while saving the original VM resources according to the persistence preferences.

### Pause

When this action is used, the node is paused, the current VM is terminated, while saving its original resources according to the persistence preferences.

### Resume

This action starts the node after it was paused. When this action is used, the node will resume and a new VM will be launched together with the persisted resources that were saved while the node was paused.

### Delete

Using this action, you can choose to terminate the VM, delete disks, delete snapshots, and delete the public IP.
- When Terminate VM is **not** marked,  the only other option you can mark is Delete snapshots.
- When Delete public IP is marked, Delete network interfaces is marked automatically and cannot be unmarked.

<img src="/elastigroup/_media/azure-stateful-node-actions-02a.png" width="350"/>

Both the node and the selected resources will be deleted after 96 hours. You can use the [Delete Stateful Node API](https://docs.spot.io/api/#operation/azureStatefulNodeDelete) in order to specify a different time period to wait.

## What’s Next?

Learn how to [schedule stateful node actions](managed-instance/azure/features/schedule).
