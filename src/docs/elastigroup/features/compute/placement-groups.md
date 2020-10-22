# Placement Groups

A placement group is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. To provide the lowest latency, and the highest packet-per-second network performance for your placement group, choose an instance type that supports enhanced networking. For more information on Placement Groups, see the [AWS documentation](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html).

## Prerequisites

An existing Placement Group configured in your AWS account.

## Configure Using Spot Console

1. Open the Elastigroup where you wish to add the Placement Group.
2. Click on the Actions menu.
3. Select ` Edit Configuration`
4. Navigate to the `Review` Tab from the top navigation bar.
5. Enable `Edit Mode` and add the placementGroupName property to the Availability zone setting.

```json
{
  "availabilityZones": [
    {
      "name": "us-west-2b",
      "placementGroupName": "Your_Placement_Group",
      "subnetIds": ["subnet-1234567"]
    }
  ]
}
```

## Using the API

1. Add the Placement Group property using the Update or [Create API](https://api.spotinst.com/elastigroup/amazon-web-services/create/).
2. In the case of creating a group, add the `placementGroupName`to the Availability zone setting
3. In the case of updating a group, use the following Body in your request:

```json
{
  "group": {
    "compute": {
      "availabilityZones": [
        {
          "placementGroupName": "Your_Placement_Group"
        }
      ]
    }
  }
}
```

## Placement Group Rules

- Placement Group cannot be distributed across Availability zones (All the associated members must be of the same Availability Zone)
- Instance types supported for placement are limited to the following:
  - General purpose: m4.large, m4.xlarge, m4.2xlarge, m4.4xlarge, m4.10xlarge, m4.16xlarge
  - Compute-optimized: c4.large, c4.xlarge, c4.2xlarge, c4.4xlarge, c4.8xlarge, c3.large, c3.xlarge, c3.2xlarge, c3.4xlarge, c3.8xlarge, cc2.8xlarge
  - Memory optimized: cr1.8xlarge, r3.large, r3.xlarge, r3.2xlarge, r3.4xlarge, r3.8xlarge| r4.large, r4.xlarge, r4.2xlarge, r4.4xlarge, r4.8xlarge, r4.16xlarge, x1.16xlarge, x1.32xlarge
  - Storage optimized: d2.xlarge, d2.2xlarge, d2.4xlarge, d2.8xlarge, hi1.4xlarge, hs1.8xlarge, i2.xlarge, i2.2xlarge, i2.4xlarge, i2.8xlarge, i3.large, i3.xlarge, i3.2xlarge, i3.4xlarge, i3.8xlarge, i3.16xlarge
  - Accelerated computing: cg1.4xlarge, f1.2xlarge, f1.16xlarge, g2.2xlarge, g2.8xlarge, p2.xlarge, p2.8xlarge, p2.16xlarge
- You can't associate an existing instance into a placement group. You must create a new instance in the placement group.
- Capacity reservation (via Reserved instances) can be used by instances in a placement group that are assigned to the same Availability Zone. However, it is not possible to explicitly reserve capacity for a placement group.
- Members of the placement group must address each other via their private IP addresses.
- When using on-demand instances, if you stop and then start an instance, in some cases AWS will fail to find the required capacity causing the Elastigroup.
- The best practice while setting up Placement Groups is to set up a single AZ, with similar instance types.
- In the case of lacking capacity in the specific Placement Group configured – we will launch instances in the AZ.
