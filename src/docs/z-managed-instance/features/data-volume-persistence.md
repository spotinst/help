# Data Volume Persistence

Data volume persistence maintains the data volumes during spot instance replacement. The data on the volumes that were attached at the time of the previous instance termination will be present on the new instance, using the same BlockDeviceMapping configuration upon instance replacement.

The [flow diagram](elastigroup/features/stateful-instance/stateful-elastigroup-flow) describes on a high level how Spot manages the persistence of managed instances.

## Configure Data Volume Persistence

1. To configure data volume persistence, go to the Managed Instance configuration and select Persistent Resources.
2. Mark the Persist Data Volumes option and select a persistence method.

<img src="/managed-instance/_media/data-volume-persistence-01.png" />

Managed Instance provides the methods described below for data volume persistence.

### Snapshot Backups

Periodic snapshots of data volumes are taken while the instance is running. Upon spot instance replacement, a new EBS volume is created from the latest snapshot and is attached to the new instance upon launch by updating the block device mapping in the configuration.

### Reattach

This method is recommended for large data volumes. The same EBS volume is detached from the original instance and reattached to the newly launched instance. If the new instance is launched in a different availability zone, a snapshot is used to create a new volume and attach it to the new instance (as volumes cannot be migrated between availability zones). Initially, volumes can be created based on the AMI block device mapping upon the managed instance's first Resume, or attached via the AWS console. The same volumes are maintained as long as the instance is launched within the same availability zone.

## Suspend User Data Execution Until Volumes are Available

When using the Reattach option for data volume persistence, the instances are launched, followed by the attachment of the volumes. To prevent the User Data from executing before the volumes are attached add the following script:

```bash
#!/bin/bash

EC2_INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
EC2_AVAIL_ZONE=`curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone`
EC2_REGION="`echo \"$EC2_AVAIL_ZONE\" | sed -e 's:\([0-9][0-9]*\)[a-z]*\$:\\1:'`"
DEVICE_NAME="/dev/xvdb"
DATA_STATE="unknown"

until [ "$DATA_STATE" == "attached" ]; do

        DATA_STATE=$(aws ec2 describe-volumes \
                --region $EC2_REGION \
                --filters \
                Name=attachment.instance-id,Values=$EC2_INSTANCE_ID \
                Name=attachment.device,Values=$DEVICE_NAME \
                --query Volumes[].Attachments[].State \
                --output text)

        echo $DATA_STATE
        sleep 5

done

echo "volume is ready"
```

## Managed Instance Actions

Managed Instance performs various backend actions for different states of the instance to ensure data volume persistence.

### Running

- Reattach + One AZ: The data volumes are preserved, detached, and attached on every instance replacement.
- Snapshot backups or Reattach + Multi AZ: A snapshot is taken for each data volume every five minutes.

### Paused

- Reattach + One AZ: The original EBS volumes are maintained.
- Snapshot backups or Reattach + Multi AZ: Only the latest snapshot for each volume is kept.

### Resume

- Snapshot backups: New volumes are created from the latest snapshots upon instance launch.
- Reattach + instance launch in same AZ as previous instance: The existing volumes are reattached to the new instance post launch.
- Reattach + instance launch in different AZ from previous instance: New volumes are created in the same AZ as the new instance and are attached post launch.

### Deallocated

- When you delete a managed instance, you can choose which parts to delete.
  - If you select all parts, then they will be deleted immediately.
  - If you select only some of the parts for deletion, then those parts will be kept for four days and then deleted.

<img src="/managed-instance/_media/data-volume-persistence-02.png" width="392" height="340" />

> **Tip**: Data storage time can be configured on an hourly basis. For more information, reach out to the Customer Support team.

## What’s Next?

Learn more about [network persistence](managed-instance/features/network-persistence).
