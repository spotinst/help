<meta name="robots" content="noindex">

# Block Device Mapping (BDM)

Spot's Stateful Node supports [Block Device Mapping for AWS EC2](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html).

You can configure a stateful node's BDM to provision and manage root and data volumes. 
The configured BDM overrides an AMI BDM per device name.

## Set BDM for a Stateful Node

To set BDM for a stateful node via the console:

  1. Open the creation wizard for the required stateful node via **Actions > Edit configuration > Review Tab > JSON > Edit mode**.
        
  2. Add the block device mappings JSON block in the `launchSpecification` object `(compute.launchSpecification.blockDeviceMappings)`.

To set BDM for a stateful node via the API (under `managedInstance/compute/launchSpecification/blockDeviceMappings`)

* [Create Stateful Node](https://docs.spot.io/api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceCreate)

* [Edit Stateful Node](https://docs.spot.io/api/#tag/Stateful-Node-AWS/operation/AWSManagedInstanceUpdate)

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
To remove BDM from a stateful node:

   1. Replace the values under the "blockDeviceMappings" key with null:

     `"blockDeviceMappings": null,`

   2. Apply the changes, and optionally roll the stateful node.


To deploy a stateful node with an existing volume for a spot termination/recycle.

   * Specify a `snapshotId` so that a new instance is create a new instance based on the existing Snapshot.

