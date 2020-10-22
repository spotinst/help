# Managed Instance Actions

The Managed Instance actions change the instance state while maintaining its Root, Data, and IPs. In order to change the state, head over to the Management view, click on the Actions menu on the top right, and click the required action.

<img src="/managed-instance/_media/actions-01.png" />

## Pause

Can only be performed on a Running instance, otherwise it is greyed out. Equivalent to stopping the an On-Demand EC2 instance. The instance's state is saved (according to the persisted resources configuration). The actual Spot instance will be terminated and when the Managed Instance will be resumed, it will be in the exact same state in terms of data, tags and network interfaces.

## Resume

Can only be performed on a Paused instance, otherwise it is greyed out. Starts the instance after it was paused. A new EC2 instance will be launched, with the same state it was Paused with.

## Recycle

Initiates a Pause operation, immediately followed by a Resume operation.

## Delete

Delete the Managed Instance entity with its resources and terminate the EC2 instance. A dialogue appears which allows the user to choose which resources will be deleted. The last snapshot (and in cases of re-attach – the volumes) will be kept for 96 hours (configurable). When deleting a machine, its data will be lost.
