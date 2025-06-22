<meta name="robots" content="noindex">

# Block Device Mapping (BDM)

You can configure BDM settings for a stateful node to provision and handle volumes for your instances. You can configure the root volume of the instance as well as data volumes. Stateful Node configured BDMs will override AMI BDMs per device name.

For additional information, you can check out the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html).

You can manage BDM via the Spot API with create/update Stateful Node, or via the Spot console in the last step of the Creation Wizard (in the Review Tab).

## Implement Block Device Mapping via the Console

1. Open the creation wizard for the required stateful node via **Actions > Edit configuration > Review Tab > JSON > Edit mode**.

2. Add the block device mappings JSON block in the `launchSpecification` object `( compute.launchSpecification.blockDeviceMappings )`.

## Implement Block Device Mapping via the Spot API

managedInstance/compute/launchSpecification/blockDeviceMappings

[Create Stateful Node](https://docs.spot.io/api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceCreate)
[Edit Stateful Node](https://docs.spot.io/api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceUpdate)


```json
        "blockDeviceMappings": [
          {
            "deviceName": "/dev/xvdcz",
            "ebs": {
              "iops": 0,
              "throughput": 125,
              "deleteOnTermination": true,
              "encrypted": true,
              "volumeSize": 12,
              "volumeType": "gp2",
              "kmsKeyId": "string",
              "snapshotId": "string"
            }
          }
        ],
```

**Use Case 1 – Deploy a group with an existing volume in case of a spot termination/recycle**

Block device mapping (BDM) allows you create a new instance which is based on an existing Snapshot. While using the method above, you can specify an existing snapshotId so that the volume will be created based on the provided Snapshot.

**Use Case 2 – Modify the type/size of a device**

With BDM you can manage the volume type/size dynamically by modifying the size/type according to the current need.

```json
{
  "deviceName": "/dev/sda1",
  "ebs": {
    "deleteOnTermination": "true",
    "volumeSize": 24,
    "volumeType": "gp2"
  }
}
```

## Remove a Block Device Mapping

1. In case you have a block device mapping setting in your Elastigroup, and you would like to disable it, go to the relevant ElastiGroup ID –> Actions –> Edit configuration –> Review.
2. Click the `Edit Mode` toggle, and now simply replace the values under the "blockDeviceMappings" key with null:

`"blockDeviceMappings": null,`

3. Click Update to apply the changes, and optionally Roll your group.

The implementation is the same if you are using the Update API.

