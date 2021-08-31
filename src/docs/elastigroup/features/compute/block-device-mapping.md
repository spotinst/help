# Block Device Mapping

You have the option to configure Block Device Mapping settings for an Elastigroup to provision and handle volumes for your instances. Block device mapping can be used to configure the root volume of the instance as well as data volumes. Elastigroup configured Block Device mappings will override AMI Block device mappings per device name.

For additional information, you can check out the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html).

Block Device Mapping settings can be added or managed using the API while creating an Elastigroup or as an update to an Elastigroup, or using the UI at the last step of the Creation Wizard – in the Review Tab.

## Implement Block Device Mapping

1. Navigate to the relevant Elastigroup and open the creation wizard to enter the Review Tab via Actions –> Edit configuration –> Review Tab –> JSON –> Edit mode.

<img src="/elastigroup/_media/compute-blockdevice-01.png" />

2. Add the block device mappings JSON block in the `launchSpecification` object `( compute.launchSpecification.blockDeviceMappings )`.

Example: 'blockDeviceMappings' object overriding the settings for the drives: /dev/sdf , /dev/sdm , /dev/sda1. In this case, the root volume is `sda1`. The root volume can also be `xvda`.

```json
{
  "blockDeviceMappings": [
    {
      "deviceName": "/dev/sdm",
      "ebs": {
        "deleteOnTermination": true,
        "volumeSize": 80,
        "volumeType": "gp2"
      }
    },
    {
      "deviceName": "/dev/sdf",
      "ebs": {
        "deleteOnTermination": true,
        "snapshotId": "snap-09e8dccc6a7512345",
        "volumeSize": 500,
        "volumeType": "gp2"
      }
    },
    {
      "deviceName": "/dev/sda1",
      "ebs": {
        "deleteOnTermination": true,
        "volumeSize": 48,
        "volumeType": "gp2"
      }
    }
  ]
}
```

Alternatively, you can use the Update API with the following Body:

```json
{
  "group": {
    "compute": {
      "launchSpecification": {
        "blockDeviceMappings": [
          {
            "deviceName": "/dev/sdm",
            "ebs": {
              "deleteOnTermination": true,
              "volumeSize": 80,
              "volumeType": "gp2"
            }
          },
          {
            "deviceName": "/dev/sdf",
            "ebs": {
              "deleteOnTermination": true,
              "snapshotId": "snap-09e8dccc6a7512345",
              "volumeSize": 500,
              "volumeType": "gp2"
            }
          },
          {
            "deviceName": "/dev/sda1",
            "ebs": {
              "deleteOnTermination": true,
              "volumeSize": 24,
              "volumeType": "gp2"
            }
          }
        ]
      }
    }
  }
}
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
