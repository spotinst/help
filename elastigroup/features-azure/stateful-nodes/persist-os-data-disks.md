# Persist OS and Data Disks

Elastigroup’s stateful nodes are able to persist data when spot nodes need to be replaced. Stateful Nodes breaks this down into two parts which are described below.

### Persist OS Disk

Persist OS maintains the data stored in your root volume such as OS and configuration data during spot node replacements. This way you can start the application exactly where you left off. By default, the OS disk is deleted when the node terminates. To change the default behavior, enable the Persist OS feature.

### Persist Data Disks

Persist Data maintains the data volumes during spot node replacement. All data volumes that were attached at the time of the previous instance termination will be automatically re-attached using the same configuration upon node replacement.

## How it Works

Both Persist OS Disk and Persist Data Disk provide the Re-attach and Snapshot methods of persistence.

### Re-attach Volumes (recommended for large data volumes)

The same volume is detached from the original node and reattached to the newly launched node. If the new node is launched in a different availability zone (AZ), Spot creates a new volume from the latest snapshot and attaches it to the new node (as volumes cannot be migrated between AZs). Volumes can be created based on the AMI's Block Device Mapping on the first resume of the stateful node. Spot maintains the same volumes as long as the node is launched in the same AZ.

### Snapshot Backups

Periodic snapshots of the data volume are taken while the node is running. For each data volume, 3 snapshots are kept. Upon spot node replacement, a new volume is created from the latest snapshot and is attached to the new node by updating the AMI's Block Device Mapping configuration.

## Suspend User Data Execution Until Volumes are Available

When using the Reattach option for data volume persistence, the instances are launched, followed by the attachment of the volumes. To prevent the User Data from executing before the volumes are attached add the following script:

#!/bin/bash EC2_INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id) EC2_AVAIL_ZONE=`curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone` EC2_REGION="`echo \"$EC2_AVAIL_ZONE\" | sed -e 's:\([0-9][0-9]*\)[a-z]*\$:\\1:'`" DEVICE_NAME="/dev/xvdb" DATA_STATE="unknown" until [ "$DATA_STATE" == "attached" ]; do DATA_STATE=$(aws ec2 describe-volumes \ --region $EC2_REGION \ --filters \ Name=attachment.instance-id,Values=$EC2_INSTANCE_ID \ Name=attachment.device,Values=$DEVICE_NAME \ --query Volumes[].Attachments[].State \ --output text) echo $DATA_STATE sleep 5 done echo "volume is ready"

## Backend Actions
- Running stateful instance:
  - Reattach plus One AZ: The data volume is preserved, attached and detached in every spot replacement.
  - Reattach plus Multi AZ: A snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
  - Snapshot backups: A snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
- Paused stateful instance: Only the latest Snapshot for each volume is kept.
- Resumed stateful instance:
  - Snapshot backups: New volumes are created from the latest snapshots while the instance launches.
  - Reattach plus the instance is launched in the same AZ as the previous instance- The existing volumes are attached to the new instance.
  - Reattach plus the instance is launched in a different AZ as the previous instance- New volumes are created in the same AZ as the new instance and attached.
- Once a stateful instance is deallocated. The data (Images, Volumes and Snapshots) is kept for 4 days by default. Can be configured on an hourly basis.
Backend Actions
Elastigroup automatically performs various backend actions for different states of the Stateful instance to ensure root volume persistence.
Paused: Images (AMI) are created each time the Stateful instance is Paused using the latest root volume snapshot which was taken after the instance termination. Elastigroup only keeps the latest Snapshot for each volume.
Running: While the instance is running, a Snapshot is taken for the root volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
Deallocated: The data (Images, Volumes and Snapshots) are kept for 4 days by default.



What's Next?
Learn more about persisting the network.
