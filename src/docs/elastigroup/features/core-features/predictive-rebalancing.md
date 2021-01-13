# Predictive Rebalancing

Predictive Rebalancing is based on a machine learning model used for identifying and predicting spot capacity usage and interruptions in the public cloud. Its purpose is to predict which markets will experience interruptions and replace the instances within these markets before the interruption. This prevents under-capacity and ensures availability of resources.

The rebalancing model is application–driven, combining advanced predictive algorithms with an understanding of infrastructure and real-time analysis of workload requirements.

The result is a process that takes the unique requirements of each workload into consideration to automatically provision and allocate cloud infrastructure in the most efficient and effective way possible.

## How it Works

Based on historical data that Spot collects, the algorithm predicts which markets will have fewer market interruptions.

1. Spot collects data from instance capacity pools all over the globe, each uniquely defined by its region/availability zone, instance type, size, and operating system.
2. Spot then uses the data on both historical behavior and current consumption to determine which instances will have greater longevity and which are about to be terminated.
3. When Spot predicts that an interruption will occur within the next hour, it triggers a replacement enough time before the interruption.

Predictive Rebalancing can accurately predict and replace spot instances, with an 85% level of accuracy, up to an hour ahead of an interruption during peak business hours.

The result is that your workload always has enough capacity to serve its requests.

## Benefits

Predictive Rebalancing expands the ability to utilize spot capacity for production and mission-critical workloads. This enables you to enjoy up to 90% cloud compute cost reduction with SLAs and SLOs that guarantee availability.

In practical terms, you can reliably run an even broader range of applications on spot capacity, even those that are more sensitive to interruptions. For example, applications that have long draining times can run on inexpensive EC2 spot instances without concern for downtime or performance degradation.

This alignment of predictions with application needs ensures uptime, scale, and successful workload execution for any situation. To see example flows illustrating how the predictions are used in different cases, click on the links below.

- [Rebalancing Flow](elastigroup/features/core-features/diagram-rebalancing-flow.md)
- [Revert from On-Demand to Spot Instance](elastigroup/features/core-features/diagram-revert-from-on-demand-to-spot-instance.md)
- [Predictive Scale Up Flow](elastigroup/features/core-features/diagram-predictive-scale-up-flow.md)

To learn more about how replacement works, see [Market Scoring & Managing Interruptions](elastigroup/features/core-features/market-scoring-managing-interruptions.md).

## Configure Predictive Rebalancing

You can configure predictive rebalancing in the Predictive Rebalancing tab when you create a new Elastigroup, and you can make changes any time in an existing group.

<img src="/elastigroup/_media/corefeatures-predictive-rebalancing-01.png" />

The major parts of the setup include:

- Workload Capacity
- Optimization Strategy
- Continuous Optimization
- Instance Availability

The detailed procedure and parameter definitions for configuring predictive rebalancing are described in [Create an Elastigroup from Scratch](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch-a.md).

## What’s Next?

Learn more about [Cluster Orientation](elastigroup/features/core-features/cluster-orientation.md) and [Equal AZ Instance Distribution](elastigroup/features/core-features/equal-az-instance-distribution-orientation.md).
