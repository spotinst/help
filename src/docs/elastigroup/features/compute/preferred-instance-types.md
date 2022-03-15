# Preferred Instance Types

This article introduces Preferred Instance Types, provides a guide on how to use them and explains how they work. Preferred spot instance types let customers set priority tiers on the Elastigroups' configured spot types. Types that are selected as preferred will be prioritized over other types and will be used whenever possible considering availability and cost.
In cases that any of the preferred types are not available, Elastigroup will use other types that are selected in the group.

## Step 1: Select Allowed Spot Instance Types

1. Enter the Elastigroup configuration by editing an existing Elastigroup or creating a new Elastigroup.
2. Go to the Compute tab and scroll down to Spot Types. (If you are creating a new Elastigroup, you must complete the required information in the General tab before you can enter the Compute tab.)
3. Mark all the Spot instance types that you allow for the Elastigroup.

<img src="/elastigroup/_media/compute-preferred-instance-types-01.png" />

4. Complete the rest of the required information in the Compute tab and click Next.

## Step 2: Select your Preferred Instance Types

1. In the Predictive Rebalancing tab, scroll down to Instance Availability.
2. The Preferred Spot Types combo box will now be populated with your allowed spot types. Mark your preferred types in this list.

<img src="/elastigroup/_media/compute-preferred-instance-types-02.png" />

3. Complete any additional required information in the configuration and click Update (for a new Elastigroup, click Create).

## How Preferred Instance Types Work

Preferred spot types divide the selected spot instance types into two groups:

- Tier1: Preferred spot types
- Tier2: Spot types that were NOT selected as preferred spot types

When scaling, Elastigroup will distribute the instances across different availability zones and instance types based on the configuration you defined to ensure availability. When there aren't sufficient available preferred markets, Elastigroup will distribute a minimal number of instances to non-preferred markets.

### Example 1: Group with 12 instances and 4 preferred spot types

| Preferred Markets | Other Markets |
| ----------------- | ------------- |
| 100%              | 0%            |
| 12 instances      | 0 instances   |

### Example 2: Group with 32 instances and 3 preferred spot types

| Preferred Markets | Other Markets |
| ----------------- | ------------- |
| 75%               | 25%           |
| 24 instances      | 8 instances   |

## What's Next?

Elastigroup gives you the ability to optimize your data-transfer costs by selecting Preferred Availability Zones. Learn more about configuring [Preferred Availability Zones](elastigroup/features/compute/preferred-availability-zones.md) in the console and in the [API](https://docs.spot.io/api/#operation/elastigroupAwsCreate).
