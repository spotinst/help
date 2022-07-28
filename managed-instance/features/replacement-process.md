# Recycle Process

If the underlying EC2 node has to be replaced for any reason, Stateful Node will initiate a recycle process, which includes two parts, a pause action followed directly by a resume action.

## Pause Action

The pause process terminates the existing node after it saves all the relevant data.

1. A final [root volume snapshot](managed-instance/features/root-volume-persistence) is taken, from which a new AMI is created. The new AMI will be used to launch the new node upon resume.
2. The Data volume is maintained, as configured in the [data persistence settings](managed-instance/features/data-volume-persistence):

   1. Snapshot backups: A final data volume snapshot is taken, which is used in the next node's block device mapping configuration.
   2. Reattach + Multi AZ: A final data volume snapshot is created and used to create a new volume to be attached once the next node is launched in a new AZ.
   3. Reattach + Single AZ: The same data volume is retained as is, containing the latest data written to it.

3. The ENI of the node is made available for the next node upon resume.

## Resume Action

The resume operation launches a new node and assigns it all the information stored in the pause operation.

1. The AMI registered using the latest root snapshot is used in the launch request.
2. Persisted data volumes are created upon launch from snapshots used in the launch request’s block device mapping, or reattached post-launch.
3. The persisted ENI is used in the network configuration of the new node.

## Recycle Scenarios

The replacement process can be triggered by any of the scenarios described below.

### Recycle

When Spot identifies that the underlying spot node is at risk of termination by AWS, the node is marked for replacement and will be re-launched. During the Recycle, if no spot capacity is available, the node is re-launched as on-demand.

### Autohealing

Once a health-check failure is detected, the unhealthy node will be terminated (paused), and a new node will be brought up instead (resumed).

### Revert to Spot

This is a strategic replacement intended to revert back to spot after falling back to on-demand nodes. This is performed according to the maintenance window configuration:

- Never: Do not revert to spot.
- Timeframe: When the configured time window is reached.
- Always: Once available spot capacity is detected, perform the replacement.

### Revert to Preferred Node Types

This is a strategic replacement intended to change the market of the underlying spot node to a preferred type. This is performed according to the maintenance window configuration.

## What’s Next?

Learn more about [Stateful Node Actions](managed-instance/features/managed-instance-actions).
