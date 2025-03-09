# Cluster (and Virtual Node Group) Orientation

Cloud service provider relevance: <font color="#FC01CC">GKE</font>.

While Ocean is designed to optimize for both availability and cost, you may want to have control over which optimizations are given priority. For example, you might want to run cheaper nodes for clusters on a less stable platform rather than running expensive nodes on a more stable platform.

You can control the approach that Ocean takes by configuring the cluster (and vng) orientation.

## Ocean Orientations

Ocean (GKE) supports the following orientations:

*  Balanced:(default orientation) Ocean optimizes for continuity of operations and cost-effective infrastructure. Spot recommends using this orientation, which provides the optimal balance between cost savings and availability.
*  Cost: Ocean gives greater weight to cheap instances in the decision process.
*  Availability: Ocean gives greater weight to stability in the decision process.

>Note: Ocean will fall back to a regular instance if the required instance type or the lowest price for an instance type is unavailable.

## Set Up Cluster or VNG Orientation for GKE in the Spot API

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



