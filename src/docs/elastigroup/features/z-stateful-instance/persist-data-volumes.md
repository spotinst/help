<meta name="robots" content="noindex">

# Persist Data Volumes

Data volume persistency maintains the data volumes during Spot instance replacement. All data volumes that were attached at the time of the previous instance termination will be automatically re-attached using the same BlockDeviceMapping configuration upon instance replacement.

## Configure Data Volume Persistency

1. To configure data volume persistency head to the Elastigroup's Creation Wizard, select Compute and open the Stateful option.
2. Under Persist Data Volumes select a persistence method.

Elastigroup provides the data volume persistency methods described below.

### Reattach Volumes (recommended for large data volumes)

The same EBS volume is detached from the original instance and reattached to the newly launched instance. If the new instance is launched in a different AZ, we create a new volume from the latest snapshot and attach it to the new instance (as volumes can't be migrated between AZ's). Volumes can be created based on the AMI's Block Device Mapping on the first resume of the Stateful instance or can be attached through AWS console. We maintain the same volumes as long as the instance is launched in the same Availability Zone.

### Snapshot Backups

Periodic snapshots of the data volume are taken while the instance is running. For each data volume, 3 snapshots are kept. Upon Spot instance replacement, a new EBS volume is created from the latest snapshot and is attached to the new instance by updating the AMI's Block Device Mapping configuration.

## Suspend User Data Execution Until Volumes are Available

When using the Reattach option for data volume persistency, the instances are launched, followed by the attachment of the volumes. To prevent the User Data from executing before the volumes are attached add the following script:

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

## Configure Data Volume Persistence Using the API

Add the following attribute to your Elastigroup configuration:

strategy.persistence.blockDevicesMode – string – (Optional) determine the way data volumes are attached to the instance. Valid values: 'reattach' and 'onLaunch'.

## Backend Actions

- Running stateful instance –
  - Reattach + One AZ- The data volume is preserved, attached and detached in every spot replacement.
  - Reattach + Multi AZ- A snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
  - Snapshot backups- A snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup).
- Paused stateful instance – Only the latest Snapshot for each volume is kept.
- Resumed stateful instance-
  - Snapshot backups- New volumes are created from the latest snapshots while the instance launch.
  - Reattach + the instance is launched in the same AZ as the previous instance- The existing volumes are attached to the new instance.
  - Reattach + the instance is launched in a different AZ as the previous instance- New volumes are created in the same AZ as the new instance and attached.
- Once a stateful instance is deallocated. The data (Images, Volumes and Snapshots) is kept for 4 days by default. Can be configured on an hourly basis.
