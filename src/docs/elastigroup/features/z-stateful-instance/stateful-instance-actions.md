<meta name="robots" content="noindex">

# Stateful Instance Actions

With Stateful instance actions you can change the instance state while keeping its data and IPs. In order to change the state, in the Elastigroup Management view click on the Instances tab and select the desired instance(s). The action to take can then be selected from the Actions menu, located above the table of instances.

<img src="/elastigroup/_media/stateful-actions-01.png" />

The available actions are described below.

## Pause

Equivalent to stopping the instance. All the data is saved (According to the stateful configuration), the actual Spot instance will be terminated and when it will be resumed, it will be exactly in the same state in terms of data, tags and network interfaces.

## Resume

Starts the instance after it was paused, a new instance will be launched with the persisted configuration.

## Recycle

Equivalent to rebooting or restarting the machine, initiates Pause then Resume operations.

## Deallocate

Deletes the stateful instance resources (configurable) and terminates the instance.

- Spot keeps the root volume and the last snapshot for 96 hours and then remove them (configurable).
- In case which `Reattach` is selected for `Persist Data Volumes` – the data volumes will be kept as well.
- On machine deallocation, its data will be lost.

> **Tip**: Downsizing the Elastigroup capacity without deallocating the instances may result in some resources not being deleted, despite the instance termination. To properly downsize the capacity, deallocate the relevant instances using the instances tab.
