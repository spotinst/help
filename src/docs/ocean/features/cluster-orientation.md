# Cluster Orientation

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>    

While Ocean is designed to optimize for both availability and cost, you may want to have control over which optimizations are given priority. For example, in a development environment you might want to use cheaper nodes for dev clusters. In contrast, in a production environment, where availability is more important, you might want Ocean to apply a balanced orientation regarding cost and availability.

You can control the approach that Ocean takes by configuring the Cluster Orientation.

## Ocean Orientations

Ocean supports the following orientations:
- Balanced
- Cost
- Cheapest

### Balanced (Default)

The *Balanced* orientation optimizes towards both continuity of operations and cost-effective infrastructure. This orientation provides the optimal balance between cost-savings and availability.

### Cost

The *Cost* orientation optimizes towards the most cost-effective infrastructure. Although Ocean takes both cost and availability into consideration, it prioritizes so that cost is emphasized more in node selection.   

### Cheapest

The *Cheapest* orientation takes a highly aggressive approach to cost savings.

When Ocean launches instances, it searches all the markets defined in the Ocean cluster and looks for the lowest price for the spot type defined in the cluster. Ocean then launches instances only in the markets with the minimum price. If the required instance type or type with the cheapest price are not available, Ocean will fall back to on-demand.

## Set up in Ocean API

To define the cluster orientation at cluster-level, you can use the [Create Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate) APIs. Look for the following attribute:

```
cluster.strategy.clusterOrientation.availabilityVsCost
```

The valid values are: costOriented, balanced, cheapest

> **Tip**: If you have already configured cluster orientation at the Elastigroup level (i.e., using the Elastigroup API), those configurations will not be impacted, and will still apply in Ocean. Going forward, all cluster orientation configurations for Ocean should be made in the Ocean APIs only.

To define the cluster orientation for a virtual node group, you can use [Create VNG](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) or [Update VNG](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate) APIs, Look for the following attribute:

```
launchSpec.strategy.orientation.availabilityVsCost
```
The valid values are: costOriented, balanced, cheapest

