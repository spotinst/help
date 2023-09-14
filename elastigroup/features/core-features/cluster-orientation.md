# Cluster Orientation

Elastigroup is designed to take advantage of costs savings without compromising availability.

You can choose to have Elastigroup take a more aggressive cost-savings approach by proactively replacing instances whenever a less expensive option becomes available, or conversely replace instances only when the cloud provider interrupts services.

## Elastigroup Orientations

Elastigroup supports the following Orientations:

- Balanced
- Availability
- Cost

### Balanced (Default)

Optimize towards both continuity and cost-effective infrastructure. We highly recommend using this orientation, which provides the optimal balance between cost-savings and availability.

> **Tip**: We highly recommend the Balanced Cluster Orientation.

### Availability

Optimize towards the continuity of your instances. While using the high availability orientation an Elastigroup will abstain from replacing spot instances due to interruptions or cost optimization for as long as possible.

Additionally, in the case of fall back to On-Demand instances – the Elastigroup will keep these instances running and will not revert back to spot instances automatically (as it does with balanced and cost orientations).

The Availability orientation is primarily suitable for `jobs` or `batch` computing with a high importance of running a single machine for a limited amount of time, as well as NoSQL databases such as Cassandra or MongoDB, when they are part of a fault tolerant architecture.

> **Tip**: No instance replacement will take place – neither while replacing On-demand instances nor replacement of expensive spot Instances.

### Cost

Optimize towards the most cost-effective infrastructure.

In addition to basic cost optimization of moving workloads from on-demand to spot, Elastigroup will take an aggressive approach to cost-savings by replacing spot instances with less expensive instances whenever a less expensive market becomes available, even when no interruption is anticipated.

## What's Next?

- [Create an Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-aws).
