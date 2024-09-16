<meta name=“robots” content=“noindex”>

# Elastigroup | Ocean | ERROR, Can't Spin Instances: Code: InvalidSnapshot

## Problem

You have scaling up instances for your Elastigroup or Ocean clusters and you get this message:

`ERROR, Can't Spin Instances: Code: InvalidSnapshot.NotFound, Message: The snapshot 'snap-xyz' does not exist.`

## Cause
If you have a block device that is mapped to a snapshot ID of an Elastigroup or Ocean cluster and the snapshot isn't available, you will get this error. This can happen if the snapshot is deleted.

 ![cant-spin-instances-invalidsnapshot1](https://github.com/spotinst/help/assets/167069628/1010d3de-2932-4677-92ed-ed6c124fe9a6)

## Solution

If you have another snapshot, then you can use that snapshot ID for the block device mapping. If not, you can remove the snapshot ID, and then the instance is launched using the AMI information.

* **Elastigroup**: on the Elastigroup you want to change, [open the creation wizard](https://docs.spot.io/elastigroup/features/compute/block-device-mapping?id=block-device-mapping) and update the snapshot ID.
  ![cant-spin-instances-invalidsnapshot2](https://github.com/spotinst/help/assets/167069628/1893d6e9-1d98-4ac5-81e6-1f1ce7ccef2f)

* **Ocean**: on the virtual node group you want to change, update the snapshot ID.
 ![cant-spin-instances-invalidsnapshot3](https://github.com/spotinst/help/assets/167069628/e4b1a3aa-8404-4877-afbc-50337d67953c)
