<meta name="robots" content="noindex">

# Preferred Instance Types

This article introduces Preferred Instance Types, provides a guide on how to use them and explains how they work. Preferred spot instance types let customers set priority tiers on the Elastigroups' configured spot types. Types that are selected as preferred will be prioritized over other types and will be used whenever possible considering availability and cost.
In cases that any of the preferred types are not available, Elastigroup will use other types that are selected in the group.

## Step 1: Open Creation Wizard

1. Enter the Creation Wizard by creating a new Elastigroup or editing an existing Elastigroup.
2. Navigate to the Compute tab.

## Step 2: Select the Allowed Instance Types

1. Select all allowed Instance Types.
2. Under Additional Configurations, the Preferred Spot Types combo box will now be populated with your allowed spot types, from which you may select your preferred types.

## How Preferred Instance Types Work

Preferred spot types divide the selected spot instance types into two groups:

- Tier1: Preferred Spot types
- Tier2: Spot types that were NOT selected as Preferred Spot types

When scaling, Elastigroup will distribute the instances across different availability zones and instance types (markets) to ensure availability. When there aren't sufficient available preferred markets it will distribute a minimal amount of instances to non-preferred markets.

### Example 1: Group with 12 instances and 4 preferred markets

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

Elastigroup gives you the ability to optimize your data-transfer costs by selecting Preferred Availability Zones. Learn more about [Preferred Availability Zones](https://docs.spot.io/api/#operation/elastigroupAwsCreate) in the API.
