# Stateful Node Actions

The Stateful Node actions that apply changes maintain the stateful node’s configuration while applying changes to the underlying VM.

The actions take into consideration the [persistence definitions](https://docs.spot.io/managed-instance/azure/features/persist-network) for each stateful node.. 

To change the state:

1. In the main left menu, click **Elastigroup** > **Stateful Nodes**.
2. Select the stateful node you want to change.
3. In the top right, click **Actions** and click the required action.

<img src="/managed-instance/_media/actions-02.png" />

## Pause

You can pause a running node. A paused node is grayed out.  The node's state is saved (according to the persisted resources configuration). The actual Spot node will be terminated, and when the stateful node is resumed, the previous state of the data, tags, and network interfaces remain the same.

## Resume

You can resume a paused node after it was paused. The node will resume and a new VM will be launched together with the persisted resources that were saved while the node was paused.

## Recycle

This action initiates a pause operation, immediately followed by a resume operation. You can recycle a stateful node in a stopped state. 

## Stop

You can stop a Spot-managed VM directly from Azure (moving it to the stopped (deallocated) state). The stateful node will detect that the VM is in a stopped (deallocated) status and, by default, move to a stopped state. It might take a few minutes for the stateful node to appear as stopped. If the information from the user that initiated the stop operation is not received within 3 minutes after the virtual machine has stopped, it will be regarded as an interruption.

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

## Delete

There are different ways to delete a stateful node. 

* Terminate VM: yes/no.
  * When “Terminate VM” = OFF:
    Cannot select: Delete disks, Delete network interfaces, Delete public IP

  * When “Terminate VM” = ON:
    Deregister VM from Load Balancer - selected by default and cannot be deselected.

  * When “Terminate VM” + Delete public IP = ON:
    Delete network interfaces - selected by default and cannot be deselected.

* Snapshots + disks + public IP + network interfaces: TTL default 96. You can configure the TTL using the Spot API.

* Deregister the VM from the Load Balancer - This indicates whether to deregister the stateful node's VM from any load balancer. This can be changed to false only when shouldTerminateVms is false
