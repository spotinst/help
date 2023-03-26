# Instance Actions

## Manually Detach Instances from Elastigroups

You can simply check a specific instance or multiple instances you want to detach using the Actions button. This will remove the instance/instances and launch new ones.

<img src="/elastigroup/_media/corefeatures-instance-actions-01.png" />

In the dialog, make sure to keep `Decrement Group's Capacity` unchecked if you want replacement instances to be launched.

<img src="/elastigroup/_media/corefeatures-instance-actions-02.png" />

Draining Timeout – Specify the time to keep the instance active before terminating it.

Decrement Group's Capacity – Change the group Instance count Target reducing it by a single instance – This will mean no replacement instance will be launched.

## Lock an Instance

You can Lock specific instances to prevent them from being scaled down during autoscaling. The Fix Strategy process is prevented as well. Simply select the instance you want to lock and use Actions-> Lock:

<img src="/elastigroup/_media/corefeatures-instance-actions-03.png" />

You can then define the time for the instance to be locked.

<img src="/elastigroup/_media/corefeatures-instance-actions-04.png" width="400" height="190" />

> **Tip**: This will protect the instance from Scaling action – however, this will not prevent a spot interruption if one occurs.
