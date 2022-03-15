# Preferred Availability Zones

When you set up an Elastigroup, you choose a region, and according to the Availability Zones (AZs) existing in that region, you choose the AZs that you want to be allowed for instances Spot creates.

In general, it is good practice to simply allow all the AZs existing in that region, as shown below. This maximizes the possibilities for Spot to find spot instances that meet your exact specifications.

<img src="/elastigroup/_media/compute-preferred-azs-00.png" />

However, you may have specific use cases in which it is advantageous to use only certain AZs. For example, you might want to use a reduced number or only a single AZ for the following reasons:

- You want to reduce network costs by minimizing the number of times you change zones and transfer data from one zone to another.
- You want to improve application performance by confining all your computing to a minimum geographic area, i.e., to only one AZ where all of your workloads run.

You can configure this in Elastigroup using the Preferred Availability Zones feature. When you define Preferred Availability Zones, Spot will always look in those AZs first when it needs to start up a new spot instance, and it will try to launch all of your instances in those AZs only. If no instances exist in the preferred AZs, Spot will then consider available instances in the other AZs you have allowed.

To set up preferred AZs, follow the steps below.

## Step 1: Select Allowed Availability Zones

1. Enter the Elastigroup configuration by editing an existing Elastigroup or creating a new Elastigroup.
2. In the Compute tab, go to Availability Zones. (If you are creating a new Elastigroup, you must complete the required information in the General tab before you can enter the Compute tab.)
3. Mark all the AZs that you allow for the Elastigroup. For each AZ, choose one or more subnets.

> **Tip**: In order to diversify the spot markets available to the Elastigroup, it is highly recommended to choose all the AZs listed for the region.

<img src="/elastigroup/_media/compute-preferred-azs-01.png" />

## Step 2: Select your Preferred Availability Zones

1. Go to the Predictive Rebalancing tab and scroll down to Availability Zones.
2. The Preferred Availability Zones combo box will now be populated with the allowed AZs you marked in the Compute tab. Mark your preferred AZs in this list.

<img src="/elastigroup/_media/compute-preferred-azs-02.png" />

3. Complete any additional required information in the configuration and click Update (for a new Elastigroup, click Create).

## What’s Next?

You may want to learn more about:

- [Equal AZ Instance Distribution](elastigroup/features/core-features/equal-az-instance-distribution-orientation.md)
- Configuring [Preferred Instance Types](elastigroup/features/compute/preferred-instance-types.md)
- All the options available in [Predictive Rebalancing](elastigroup/features/core-features/predictive-rebalancing.md)
