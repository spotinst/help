# Stateful Node Actions

The Stateful Node actions change the node state while maintaining its Root, Data, and IPs. In order to change the state, go to the Management view, click the Actions menu on the top right, and click the required action.

<img src="/managed-instance/_media/actions-02.png" />

## Pause

Can only be performed on a Running node, otherwise it is greyed out. Equivalent to stopping an On-Demand EC2 node. The node's state is saved (according to the persisted resources configuration). The actual Spot node will be terminated and when the Stateful Node will be resumed, it will be in the exact same state in terms of data, tags and network interfaces.

## Resume

Can only be performed on a Paused node, otherwise it is greyed out. Starts the node after it was paused. A new EC2 node will be launched, with the same state it was Paused with.

## Recycle

Initiates a Pause operation, immediately followed by a Resume operation.

## Delete

Delete the Stateful Node entity with its resources and terminate the EC2 node. A dialogue appears which allows the user to choose which resources will be deleted. The last snapshot (and in cases of re-attach – the volumes) will be kept for 96 hours (configurable). When deleting a machine, its data will be lost.
