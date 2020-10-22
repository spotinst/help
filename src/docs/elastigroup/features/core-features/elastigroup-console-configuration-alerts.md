# Configuration Alerts

Configuration alerts allow more visibility and control of group configuration and integration healthiness.

## What Do We Validate?

- Resources exist in AWS
- Block Device Mapping
  - If Block Device Mapping is configured for the root device, the BDM snapshot ID should be identical to the Image snapshot ID
  - The BDM volume size must be greater than the Image volume size.
- Integration connection passes

## Example 1: An ELB is configured but it does not exist in AWS

Under `Elastigroups` view:

<img src="/elastigroup/_media/corefeatures-config-alerts-01.png" />

The affected Elastigroup's dashboard displays the following message at the top of the page:

<img src="/elastigroup/_media/corefeatures-config-alerts-02.png" width="400" height="62" />

Resolution: Remove the invalid ELB from the group configuration.

<img src="/elastigroup/_media/corefeatures-config-alerts-03.png" />

## Example 2: Invalid Block Device Mapping

Image snapshot ID is different than the BDM Snapshot ID.

AMI configuration:

<img src="/elastigroup/_media/corefeatures-config-alerts-04.png" />

BDM in group configuration (JSON):

<img src="/elastigroup/_media/corefeatures-config-alerts-05.png" />

Resolution: Remove the BDM configuration block from the group's JSON.

## What's Next?

Learn more about [Block Device Mapping](elastigroup/features/compute/block-device-mapping).
