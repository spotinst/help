# AMI Auto-Backup

The AMI Auto-Backup provides a continuously updated point-in-time backup for the Elastigroup. This feature creates an image from the latest running instance in the Elastigroup and updates the group with the newly created image. By default, Elastigroup stores the last three images taken by the AMI auto backup. During Spot replacements, Elastigroup recovers from the latest image automatically.

> **Tip**: The coexistence of AMI Auto-Backup and data persistence (stateful) is not allowed.

## Image Creation Frequency

The AMI Auto-Backup provides several options for the frequency in which the backup images are collected:

- Continuous: The Continuous option will create a backup every 10 minutes.
- Custom: Use the Custom option and set a Cron expression to meet your needs.
- Hourly: Every hour a new image is created.
- Daily: Every day at 00:00 UTC, a new image is created.
- Weekly: Every Sunday at 00:00 UTC a new image is created.

## Configure AMI Auto-Backup

1. In the Elastigroup Creation Wizard (or group configuration) go to the Compute tab. Under Additional Configurations select the AMI auto-backup feature:
2. Next, select the image creation frequency:

<img src="/elastigroup/_media/compute-ami-autobackup-01.png" width="396" height="429" />

You're all set! Elastigroup will now automatically create backup images.

> **Note**: When utilizing both AMI backup and IP persistency features concurrently, be aware that the automatic deletion of available AMIs might not occur, despite selecting the Deallocate option during group deletion.  Spot recommends manually deleting the associated AMIs to ensure efficient resource management and prevent unnecessary storage costs. 

## Manually Change an AMI

In order to manually update the AMI of an Elastigroup that has AMI Auto Backup enabled, follow these steps:

1. Edit the Elastigroup configuration via the Actions menu.
2. Disable AMI Auto Backup.
3. Update the AMI configured in the group, and apply the configuration update.
4. In order for the update to take effect, new instances should be launched with the latest AMI:
   - In case of a stateless Elastigroup – Roll the group.
   - In case of Stateful Elastigroup – Recycle the stateful instance.
5. Edit the Elastigroup configuration again and this time re-enable AMI Auto Backup.
6. Apply the Update.

> **Tip**: Without disabling AMI Auto-Backup, an update to the group's AMI config will be overwritten without affecting the instances.
