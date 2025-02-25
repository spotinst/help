<meta name="robots" content="noindex">

# Cluster (and Virtual Node Group) Orientation

Cloud service provider relevance: <font color="#FC01CC">GKE</font> 

While Ocean is designed to optimize for both availability and cost, you may want to have control over which optimizations are given priority. For example, you might want to use cheaper nodes for clusters in a development environment. In contrast, in a production environment where availability is more important, Ocean should apply a balanced orientation regarding cost and availability.

You can control the approach that Ocean takes by configuring the cluster (and vng) orientation.

## Ocean Orientations

Ocean (GKE) supports the following orientations:

*  Balanced:(default orientation) Ocean optimizes for continuity of operations and cost-effective infrastructure. Spot recommends using this orientation, which provides the optimal balance between cost savings and availability.
*  Cost (80% weight): Ocean selects the cheapest available spot instance types.
*  Availability (80% weight): Ocean selects the spot types to bring the cluster into the highest available state by distributing the most instance types.

>Note: Ocean will fall back to a regular instance if the required instance type or the lowest price for an instance type is unavailable.

## Set up in Ocean API

To define the cluster scaling orientation for your Ocean cluster, you can use the [Create Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate) or [Update Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterUpdate) APIs. 

Look for the following attributes:

```
cluster.strategy.scaingOrientation
```

For virtual node groups: [Create Virtual Node Group](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate) and [Update Virtual Node Group](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecUpdate). 

Look for the following attributes:

```
launchSpec.strategy.scalingOrientation
```



