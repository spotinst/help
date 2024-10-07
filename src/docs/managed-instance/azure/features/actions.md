# Stateful Node Actions

With stateful node actions you can change the node’s state while persisting its resources.

<img src="/elastigroup/_media/azure-manage-stateful-nodes-01a.png" />

The available actions are described below.

### View Configuration

View the JSON configuration for the stateful node. You can also copy the configuration to the clipboard or export the configuration to a JSON file.

### Recycle

This action is equivalent to rebooting or restarting a machine. The action is relevant to apply changes which were made in the node configuration and then require launching a new node in order to apply them (for example, updating the availability zone list and updating the VM size list). When this action is used, the node is paused, the current VM is terminated and a new VM is launched instead, while saving the original VM resources according to the persistence preferences.

### Start

You can start a Spot-managed VM in the Spot console when a stateful node is stopped.

### Stop

You can stop the Azure VM in the Spot console and in the Azure console when a stateful node is running. The stateful node will detect that the VM is in a stopped status and, by default, move to a stopped state. It might take a few minutes for the stateful node to appear as stopped. If the information from the user that initiated the stop operation is not received within 3 minutes after the virtual machine has stopped, it will be regarded as an interruption.

Use the API to specify an allow-list. When a VM is stopped by a user containing a string on this list, it will not be considered an interruption. If a VM is stopped by anyone not included in the list, it will be considered an interruption. This will help determine the required format for the names in the API. For example, the format could be user.name@email.com, uname@email.com, uname, user.name, or service.

* If the list is empty, the defined behavior is “NONE”
* If the list is null, the defined behavior is “ALL”. This applies if the object is not defined.

You cannot resume or delete a stateful node when it is stopped. 

 <details>
   <summary markdown="span">Example for Stateful Node</summary>

<pre><code>
{
  "statefulNode": {
    "strategy": {
      "vmAdmins": [
        "@example1.com",
        "@example2.com",
        "service1"
      ]
    }
  }
}
</code></pre>
 </details>

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
