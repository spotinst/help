# Data Volume Persistence

Data volume persistence maintains the data volumes during Spot instance replacement. All the data on the volumes that were attached at the time of the previous instance termination will be present on the new instance, using the same BlockDeviceMapping configuration upon instance replacement.

## Configure Data Volume Persistence

To configure data volume persistence head to the Managed Instance’s configuration, select “Persistent Resources”, check the “Persist Data Volumes” option, and then select a persistence method.

<img src="/managed-instance/_media/data-volume-persistence-01.png" />

Managed Instances provide the following methods for data volume persistence:

- Snapshot Backups: Periodic snapshots of any data volumes are taken while the instance is running. For each data volume, 3 snapshots are kept. Upon Spot instance replacement, a new EBS volume is created from the latest snapshot and is attached to the new instance upon launch by updating the it’s launch specification’s Block Device Mapping.
- Reattach: Recommended for large data volumes. The same EBS volume is detached from the original instance and reattached to the newly launched instance. If the new instance is launched in a different AZ, a snapshot is used to create a new volume and attach it to the new instance (as volumes can’t be migrated between AZ’s). Initially, volumes can be created based on the AMI’s Block Device Mapping upon the Managed Instance’s first Resume, or attached via the AWS console. The same volumes are maintained as long as the instance is launched within the same Availability Zone.

## Suspend User Data Execution Until Volumes are Available

When using the Reattach option for data volume persistence, the instances are launched, followed by the attachment of the volumes. To prevent the User Data from executing before the volumes are attached add the following script:

```bash
#!/bin/bash
﻿
EC2_INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
EC2_AVAIL_ZONE=`curl -s http://169.254.169.254/latest/meta-data/placement/availability-zone`
EC2_REGION="`echo \"$EC2_AVAIL_ZONE\" | sed -e 's:\([0-9][0-9]*\)[a-z]*\$:\\1:'`"
DEVICE_NAME="/dev/xvdb"
DATA_STATE="unknown"
﻿
until [ "$DATA_STATE" == "attached" ]; do
﻿
        DATA_STATE=$(aws ec2 describe-volumes \
                --region $EC2_REGION \
                --filters \
                Name=attachment.instance-id,Values=$EC2_INSTANCE_ID \
                Name=attachment.device,Values=$DEVICE_NAME \
                --query Volumes[].Attachments[].State \
                --output text)
﻿
        echo $DATA_STATE
        sleep 5
﻿
done
﻿
echo "volume is ready"
```

## Backend Actions

Managed Instance automatically performs various backend actions for different states of the instance to ensure Data volume persistence:

- Running:
  - Reattach + One AZ: The data volumes are being preserved, detached and attached on every instance replacement.
  - Snapshot backups or Reattach + Multi AZ: A snapshot is being taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
- Paused:
  - Reattach + One AZ: The original EBS volumes are maintained.
  - Snapshot backups or Reattach + Multi AZ: Only the latest Snapshot for each volume is being kept.
- Resume:
  - Snapshot backups: New volumes are created from the latest snapshots upon instance launch.
  - Reattach + the instance is launched in the same AZ as the previous instance: The existing volumes are being reattached to the new instance post launch.
  - Reattach + the instance is launched in a different AZ from the previous instance: New volumes are created in the same AZ as the new instance and are attached post launch.
- Deallocated:
  - Once a stateful instance is deallocated, ENI is deleted immediately, while data (Images, Volumes and Snapshots) is being kept for 4 days by default (Note: Data storage time can be configured on an hourly basis, by reaching out to the Customer Support team.)
