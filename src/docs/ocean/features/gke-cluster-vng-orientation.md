<meta name="robots" content="noindex">

# Cluster (and Virtual Node Group) Orientation

Cloud service provider relevance: <font color="#FC01CC">GKE</font> 

While Ocean is designed to optimize for both availability and cost, you may want to have control over which optimizations are given priority. For example, you might want to use cheaper nodes for dev clusters in a development environment. In contrast, in a production environment where availability is more important, Ocean should apply a balanced orientation regarding cost and availability.

You can control the approach that Ocean takes by configuring the Cluster Orientation.

## Ocean Orientations

Ocean (GKE) supports the following orientations:

*  Balanced:(default orientation) Ocean optimizes for continuity of operations and cost-effective infrastructure. Spot recommends using this orientation, which provides the optimal balance between cost savings and availability.
*  Cost (80% weight): Ocean selects the cheapest available spot instance types.
*  Availability (80% weight): Ocean selects the spot types to bring the cluster into the highest available state by distributing the most instance types.

>Note: Ocean will fall back to a regular instance if the required instance type or the lowest price for an instance type is unavailable.

## Set up in Ocean API

To define the cluster orientation for your Ocean cluster, you can use the Create Cluster or Update Cluster APIs. Look for the following attributes:

```
cluster.strategy.clusterOrientation.availabilityVsCost
```

The valid values are: costOriented, balanced, cheapest



