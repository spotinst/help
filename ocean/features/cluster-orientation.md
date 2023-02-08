# Cluster Orientation

While Ocean is designed to optimize for both availability and cost, you may want have control over which optimizations are given priority. For example, in a development environment you might want to use cheaper nodes for dev clusters. In contrast, in a production environment, where availability is more important, you might want Ocean to apply a balanced orientation regarding cost and availability.

You can control the approach that Ocean takes by configuring the Cluster Orientation.

### Relevance

This feature is available to users of Ocean for AWS Kubernetes and ECS.

## Ocean Orientations

Ocean supports the following orientations:
- Balanced
- Cost
- Cheapest

### Balanced (Default)

The *Balanced* orientation optimizes towards both continuity of operations and cost-effective infrastructure. The Spot team highly recommends using this orientation, which provides the optimal balance between cost-savings and availability.

### Cost

The *Cost* orientation optimizes towards the most cost-effective infrastructure. Although Ocean takes both cost and availability into consideration, it prioritizes so that cost is emphasized more in node selection.   

### Cheapest

The *Cheapest* orientation takes a highly aggressive approach to cost savings.

When Ocean launches instances, it searches all the markets defined in the Ocean cluster and looks for the lowest price for the spot type defined in the cluster. Ocean then brings up instances only in the markets that have the minimum price. If the desired instance type or any type of the cheapest price is not available, Ocean will fall back to on-demand.

## Set up in Ocean API

To define the cluster orientation for your Ocean cluster, you can use the Create Cluster or Update Cluster APIs. Look for the following attribute:

```
cluster.strategy.clusterOrientation.availabilityVsCost
```

The valid values are: costOriented, balanced, cheapest

> **Tip**: If you have already configured cluster orientation at the Elastigroup level (i.e., using the Elastigroup API), those configurations will not be impacted, and will still apply in Ocean. Going forward, all cluster orientation configurations for Ocean should be made in the Ocean APIs only.

## What's Next?

Learn more about using the [Create Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterCreate) and Update [Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterUpdate) APIs for configuring your Ocean cluster.
