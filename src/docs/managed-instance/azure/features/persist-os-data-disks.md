# Persist OS and Data Disks

Elastigroup’s [stateful nodes](managed-instance/azure/) are able to persist data when VMs need to be replaced. Stateful Nodes breaks this down into two parts which are described below.

### Persist OS Disk

Persist OS maintains the data stored in your root disk such as OS and configuration data during spot node replacements. This way you can start the application exactly where you left off. By default, the OS disk is deleted when the node terminates. To change the default behavior, enable the Persist OS feature.

### Persist Data Disks

Persist Data maintains the data disk during VM replacement. All data disks that were attached at the time of the previous VM termination will be automatically re-attached using the same configuration upon VM replacement.

## How it Works

Both Persist OS Disk and Persist Data Disk provide the Re-attach and Snapshot methods of persistence.

### Re-attach Disks (recommended for large data disks)

The same disk is detached from the original VM and reattached to the newly launched VM. If the new VM is launched in a different availability zone (AZ), Spot creates a new disk from the latest snapshot and attaches it to the new VM (as disks cannot be migrated between AZs). Spot maintains the same disks as long as the VM is launched in the same AZ.

<img src="/elastigroup/_media/azure-persist-os-data-disks-01.png" width="200" />

### Take Snapshot

A snapshot is taken from the disk while the VM is terminated. Once a new VM is launched, a new disk is created by restoring the previous disk’s snapshot.

<img src="/elastigroup/_media/azure-persist-os-data-disks-02.png" width="200" />

## What's Next?

Learn more about [persisting the network](managed-instance/azure/features/persist-network).
