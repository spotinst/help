# Replacement Process

In case the underlying EC2 instance has to be replaced for any reason, the Managed Instance will initiate a Recycle process, which is composed of a Pause followed directly by a Resume action.

## Pause Stage

At first, as the Managed instance is Paused. Once the underlying EC2 instance has gracefully completed it’s shutdown process, it’s persisted resources can be maintained:
* A final Root volume snapshot can be taken, from which a new AMI can be created, which will be used to launch the next instance upon Resume.
* The Data volume can be maintained, as configured in the Data persistence settings:
  * Snapshot backups: A final Data volume snapshot is taken, which is used in the next instance’s Block Device Mapping configuration.
  * Reattach + Multi AZ: A final Data volume snapshot is created, and used to create a new volume to be attached once the next instance is launched in a new AZ.
  * Reattach + Single AZ: The same Data Volume is retained as is, containing the absolute latest data written to it.
* The ENI of the instance is made available to be used for the next instance upon Resume.

## Resume Stage

Directly following the completion of the state maintenance, the Managed Instance is Resumed:
* The AMI registered using the latest Root snapshot is used in the launch request.
* Persisted Data volumes are created on launch from snapshots used in the launch requests Block Device Mapping, or reattached post launch.
* The persisted ENI is used in the network configuration of the new instance.

The whole process can take as little as 1-2 minutes, but generally depends on variables such as instance termination time, volume sizes and the amount of data written since the last snapshot (only the first snapshot of a volume covers it’s full size, while subsequent snapshots are incremental and take less time).

## Replacement Scenarios

The replacement process can be triggered in any of the following scenarios:
* Recovery: When Spot identifies the underlying Spot instance in risk of termination by AWS, it shall be marked for replacement and will be re-launched. During the Recycle, if no spot capacity is available, the instance is re-launched as On-Demand
* Autohealing: Once a health-check failure is detected, the unhealthy Instance shall be terminated (paused) and a new instance will be brought up instead of it (resumed).
* Revert to Spot: A strategic replacement, intended to revert back to Spot after falling back to On-Demand instances. Will be performed according to the Maintenance Window configuration:
  * Never – Do not revert to spot.
  * Timeframe – When the configured time window is reached.
  * Always – Once available spot capacity is detected, perform the replacement.
* Revert to Preferred instance types: A strategic replacement, intended to change the market of the underlying Spot instance to a preferred type. Will be performed according to the Maintenance Window configuration:
  * Never: Do not try and revert to a preferred spot type.
  * Timeframe: When the configured time window is reached.
  * Always: Once available preferred spot capacity is detected, perform the replacement.
