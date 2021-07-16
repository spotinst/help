# Placement Groups

A placement group is a logical set of interdependent instances that are distributed on the underlying hardware in a way that meets the needs of your workload while minimizing the chance of correlated failures. Depending on the type of workload, you can create a placement group using placement strategies such as Cluster, Partition, and Spread. These placement strategies are described in detail in the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html).

Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both. To provide the lowest latency and the highest packet-per-second network performance for your placement group, you would also want to choose an instance type that supports enhanced networking.

## Configure a Placement Group on Spot Instances

If you have an existing placement group configured in your AWS account, you can set it up to run on spot instances.

### Using the Spot Console

You can add a placement group when you create a new Elastigroup or when you edit an existing one. The procedure below is for editing an existing Elastigroup.

1. Open the Elastigroup where you wish to add the placement group.
2. Click the Actions menu and select Edit Configuration.
3. Go to the Review tab and click JSON.

<img src="/elastigroup/_media/features-placement-group-01.png" />

4. Click Edit Mode and add the placementGroupName property to the Availability Zone (AZ) setting.

<img src="/elastigroup/_media/features-placement-group-02.png" width="376" height="205" />

### Using the API

Add the Placement Group property using the [Update](https://docs.spot.io/api/#operation/elastigroupAwsUpdate) or the [Create](https://docs.spot.io/api/#operation/elastigroupAwsCreate) API.

- In the Create API, add the placementGroupName to the AZ setting.
- In the Update API, use the following body in your request:

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

The following principles apply for setting up placement groups.

- To configure a placement group, you must assign it to an AZ.
- Elastigroup supports only one placement group per AZ.
- You cannot associate an existing instance to a placement group. You must create a new instance in the placement group.
- Capacity reservation (using reserved instances) can be used by instances in a placement group that are assigned to the same AZ. However, it is not possible to explicitly reserve capacity for a placement group.
- Members of the placement group must address each other using their private IP addresses.
- If there is not enough capacity in the specific placement group configured within an AZ, then Elastigroup will launch new instances in the AZ.

## What’s Next?

Learn more about [availability zones](elastigroup/features/compute/preferred-availability-zones) and [preferred instance types](elastigroup/features/compute/preferred-instance-types).
