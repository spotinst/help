# Cluster Orientation

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>    

While Ocean optimizes for both availability and cost, you can control which optimization is prioritized. In a development environment, you may choose cheaper nodes for development clusters. In a production environment, where availability is more critical, a balanced orientation between cost and availability is recommended.

You can configure Ocean’s optimization approach by setting the cluster orientation at the cluster or virtual node group level.

## Ocean Orientations

Ocean supports the following orientations:
- Balanced
- Cost
- Cheapest

### Balanced (Default)

The Balanced orientation optimizes for both operational continuity and cost-effective infrastructure. It provides an optimal balance between cost savings and availability.

### Cost

The Cost orientation prioritizes cost-efficiency. While Ocean still considers availability, it gives greater weight to cost when selecting nodes. 

### Cheapest

The Cheapest orientation takes an aggressive approach to cost savings.

When launching instances, Ocean scans all markets defined in the cluster and selects the one offering the lowest price for the specified spot instance type. If the cheapest instance type is unavailable, Ocean falls back to on-demand instances

## Set Orientation for the Cluster in the Spot API 

To set the orientation for the cluster, use the [Create Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate) APIs. 

Look for the following attribute:

```
cluster.strategy.clusterOrientation.availabilityVsCost
```

The valid values are: costOriented, balanced, cheapest

> **Tip**: If you’ve previously configured cluster orientation at the Elastigroup level (via the Elastigroup API), those settings remain in effect. However, all future configurations for Ocean should be made using the Ocean APIs.

## Set Orientation for a Virtual Node Group in the Spot API 

Virtual node groups are seperate, configurable launch specifications on Ocean clusters, where strategy and cluster orientation can be defined. 

To set the orientation for a virtual node group, use the [Create VNG](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) or [Update VNG](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate) APIs. 

Look for the following attribute:

```
launchSpec.strategy.orientation.availabilityVsCost
```
The valid values are: costOriented, balanced, cheapest

