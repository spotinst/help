# Attributes and Actions per VNG

Many attributes you can apply to your cluster are also available for virtual node groups. This lets you organize and manage customized workload types within the same cluster. 

The [Spot API](https://docs.spot.io/api/) provides your cloud service provider's full set of virtual node group attributes.

> **Note**: Some attributes are available in the Spot API but not in the console user interface. However, you can optionally configure these attributes in JSON format in the console's virtual node groups **review** tab.


The following sections describe several of these attributes.

## Local SSD Support

Cloud service provider relevance: <font color="#FC01CC">GKE</font>

Ocean for GKE allows the utilization of local SSD disks, high-performance local disks that are useful with specific workloads such as those that heavily use caching. You can define SSD disks in your Ocean VNG configuration by using localSsdCount to configure the number of SSD disks to be connected to each VM in the virtual node group.

Once configured, whenever the Ocean Autoscaler scales up, Ocean will automatically connect the local SSDs to the new VM. Note that local SSDs are limited to specific machine types. Ocean will automatically filter out the incompatible machine types. For information about the API, see Local SSD in the Spot API.

<p id=turn-onoff-utilize-commitments-per-virtual-node-group></p>

## Enable Utilize Commitments

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

You might want to distribute reservation instances/savings plans according to virtual node groups for different types of workloads on the same cluster.

Ocean provides attributes that let you control utilization commitments at the virtual node group level.

In the Spot API, under **Virtual Node Groups > strategy**, you can configure these attributes as either True or False:

 * `utilizeReservedInstances`: If there are free reserved instances within the AWS account, Ocean will utilize them before launching spot instances. The initial default value is inherited from the identical attribute at the cluster level. 

 * `utilizeCommitments`: If savings plan commitments have available capacity, Ocean will utilize them alongside existing reserved instances to maximize cost efficiency. The initial default value is inherited from the identical attribute at the cluster level. 

Any change you make at the Virtual Node Group level will override the value set at the cluster level.

<p id=restrict-scale-down-per-virtual-node-group></p>

## Restrict Scale Down

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>, <font color="#FC01CC">GKE</font>, and <font color="#FC01CC">AKS</font>

The restrict-scale-down label is a [Spot label](ocean/features/labels-and-taints?id=spot-labels) that can be applied on a Kubernetes pod or an ECS task and forces Ocean not to scale down the node or container instance running it. It is also possible to restrict scale down at the VNG level using a boolean property with the same name.

A possible use case is protecting a 100% On-demand VNG from any scale-down activity, as Ocean will treat the nodes or container instances in this VNG as if all pods or tasks running on them have the restrict-scale-down label. This will ensure that scale-down will not cause interruptions to sensitive workloads.

For more information about the Scale Down feature, see Scaling ([Kubernetes](ocean/features/scaling-kubernetes?id=scale-down) or [ECS](ocean/features/scaling-ecs?id=scale-down-behavior)).

<p id=multiple-ami-architectures-in-the-same-virtual-node-group></p>

## Multiple AMI Architectures in the Same Virtual Node Group 

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>

Ocean supports instance types with both Arm64 and x86 architectures in the same VNG. This widens the instance selection options because instances that support either the Arm64 or the x86 architectures can be chosen. This enables you to take advantage of the cost and performance benefits of Arm64 when the spot markets allow while maintaining a large whitelist of x86 instances. 

Whenever you create a Virtual Node Group with the Arm64 and x86 instance types, ensure that the workloads can run on both architectures. In addition, use node selectors to ensure that only the relevant pods will trigger a scale-up from this VNG.

<p id=preferred-instance-types-per-virtual-node-group-(aws)></p>

##  Preferred Instance Types

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

Ocean provides a serverless experience in which the specific instances don’t matter, and the best practice is to allow the use of all instance types. However, there are some cases in which a specific instance type may provide better performance or increased cost savings. For example, if you know that your application performs significantly better on M5 instances, then you can save costs by preferring this instance type over others.

Ocean serves such use cases with the ability to define a list of preferred instance types out of all types allowed in the virtual node group. When your preferences are defined, Ocean considers them alongside other considerations when scaling up. In this way, Ocean strives towards a well-distributed and highly available spot-instance/on-demand-based virtual node group that uses preferred types as broadly as possible.

<p id=preferred-spot-instance-types-per-virtual-node-group></p>

### Preferred Spot Instance Types

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>

For your AWS Kubernetes and ECS clusters, you can configure preferred Spot instance types at the virtual node group level.

In each scale-up action, Ocean provisions the new instances from the preferred types, using:

- 100% of the new instances if three or more different preferred types are defined.
- 0-80% of the new instances, when 0-2 different preferred types are defined.

The remaining new instances will have non-preferred types to maintain a distribution in the VNG. For example, when scaling up 10 instances in a virtual node group with a R5.xlarge defined as the preferred type, Ocean tries to provision five R5.xlarge instances and five from others.

As the preferred instance type is a soft requirement, the general spot instance availability of both preferred and non-preferred types is considered before considering type preference.

For information about defining preferred spot instance types in the Spot API (using the `preferredSpotTypes` attribute under `launchSpec.instanceTypes`), see the Create Virtual Node Group APIs for [Ocean AWS Kubernetes](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) and [Ocean ECS](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSLaunchSpecCreate)

<p id=preferred-on-demand-instance-types-per-virtual-node-group></p>

###  Preferred On-Demand Instance Types

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

You can configure preferred on-demand types at the virtual node group level for your AWS Kubernetes clusters.

In each scale-up action, Ocean provisions the new instances from the preferred types as follows:

* Ocean selects the On-Demand instance types from the preferred list.
* Ocean filters out unavailable markets when selecting On-Demand nodes.
* If all the preferred On-Demand instance types are unavailable when scaling up, Ocean will select the types from the virtual node group whitelist `instanceTypes` (if it exists). If the Virtual Node Group whitelist does not exist, Ocean will use the cluster's whitelist.

For information about defining preferred on-demand instance types in the Spot API using the `preferredOnDemandTypes` attribute, see the Create virtual node group APIs for [Ocean AWS Kubernetes](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate).

When you set `preferredOnDemandTypes`, the Ocean Autoscaler will launch on-demand nodes from the listed types.​

See also [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#preferred_od_types)

<p id=preferred-instance-types-per-virtual-node-group-gke></p>

## Preferred Instance Types (GKE)

Cloud service provider relevance: <font color="#FC01CC">GKE</font>

Use the `preferredTypes` attribute for GKE clusters and virtual node groups (Spot API only). 

When scaling up VMs, Ocean prioritizes preferred instance types for launching new nodes unless they are unavailable, in which case Ocean falls back to non-preferred types.

Use this option if you want to launch new nodes on the cluster (for a specific app or virtual node group) from the list of preferred instance types because they are a good match for workload performance. If GKE cannot launch from preferred VM types for reasons such as out of quotas, low market availability, etc, 
Ocean will use the configured instance types available within the cluster or virtual node group

For information about defining preferred instance types in the Spot API using the `preferredTypes` attribute, see the following:

* [Virtual node group](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate)
* [Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate)

<p id=revert-to-preferred-instance-types-per-virtual-node-group-gke></p>

## Revert to Preferred Instance Types (GKE)

Cloud service provider relevance: <font color="#FC01CC">GKE</font>

If a spot runs on a non-preferred instance and a preferred instance becomes available, the instance will be replaced.

Use the `revertToPreferred` attribute to set this behavior so that Ocean will always run your workloads on your most preferred instance type. The scanning process runs on an hourly basis. 

If a replacement cannot be made due to annotations, restricted down, labels, or PDBs, the process is automatically canceled and appears in the logs as follows: 

`"{instance <instanceId> cannot be replaced due to pdb requirements of pod: {podName}"`

You can configure `revertToPreferred` at cluster and virtual node group levels.

For clusters, under `cluster.strategy`:

* [Create Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate)
* [Update Cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterUpdate)

For virtual node groups under `launchSpec.strategy`:

* [Create VNG](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate)
* [Update VNG](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecUpdate)

Ocean will replace all the relevant nodes in the default or custom virtual node group. Each time the process is triggered, it will replace an instance in a virtual node group according to the `maxBatchPercentage`. This is the % of instances that can be replaced simultaneously (default of 10% and maximum of 100%).

Nodes from different virtual node groups can be replaced simultaneously.

The revert to preferred process is only valid for spot instances not running on Preferred. 
On-demands that are not of type **preferred** will not be reverted.

<p id=ephemeral-storage-per-virtual-node-group></p>

##  Ephemeral Storage

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

The Ocean autoscaler (by default) calculates ephemeral storage using the root volume size when it scales up. If your system uses the data volume size for the calculation, you need to specify an alternative device name to ensure that the Ocean Autoscaler launches nodes with the right size for their workloads.

When the root volume is not applicable for the ephemeral storage, specify the alternative device name `deviceName` with either the virtual node group's BDM or the AMI’s BDM.

* Via the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate) -  `launchSpec.ephermeralStorage.deviceName`
* Via [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#ephemeral_storage)

## Machine Ephemeral Storage

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

The `instanceStorePolicy` parameter controls how instance store volumes are handled. By default, they are ignored.

The Machine Ephemeral Storage feature lets you use these volumes for faster node ephemeral-storage by setting `instanceStorePolicy` to `RAID0`.

As a result, the scaling process considers the increased available storage for better node utilization.

Set for clusters: Under compute > instanceTypes > launchSpecification: { instanceStorePolicy: { type: RAID0 } }

* [Create Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate)
* [Update Cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate)

Set For virtual node groups: Under launchSpecification: { instanceStorePolicy: { type: RAID0 } }

* [Create virtual node groups](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate)
* [Update virtual node group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate)

>Note: For clusters and virtual node groups, you must also enable `raid0` in your `userData`.

## Configure an Ocean AKS Cluster with Multiple VNG Subnets

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

Ocean AKS lets you configure multiple subnets for a virtual node group to ensure that your AKS cluster does not run out of IP address capacity.  
There are several Azure Networking CNI options: 

*  Kubenet Networking (vnet-subnet) 
*  Azure CNI (vnet-subnet)  
*  Azure CNI with Dynamic IP (vnet-subnet and pod-subnet).  

You can add (or remove) vnet-subnets or pod-subnets in a virtual node group at any time. Ocean AKS will automatically assign subnets to node pools based on IP address capacity. However, a node pool with a subnet that has run out of IP address capacity will be locked for scaling. 
You can set up multiple subnets when you create or update a virtual node group or a virtual node group template in the cloud cluster virtual node groups tab. 

To access the Virtual Node Groups dashboard and configure multiple subnets: 

1. In the left main menu, click **Ocean**, and click **Cloud Clusters**.
2. Select a cluster from the list of clusters. 
3. Click the **Virtual Node Group** tab. 
4. Click the virtual node group you need to configure from the list.  
   In the virtual node group dashboard that opens, The Networking panel is in the middle right of the screen.

![ocean-network-gen](https://github.com/spotinst/help/assets/159915991/4c1c7c3f-0d23-478a-9dd5-92056dab0a44)


5. In the Networking panel, you can update subnets for the virtual node group using the Add VNet subnets and Add Pod subnets drop-down lists, according to the AKS cluster Network Type.

    *  For Kubenet, you can add one or more VNet subnets to the virtual node group (pod subnets are not applicable) 
    *  For Azure CNI you can add one or more VNet subnets to the virtual node group (pod subnets are not applicable) 
    *  For Azure CNI Dynamic IP, you can add one or more VNet subnets and/or pod subnets to the virtual node group. 

## What to Consider when Selecting Multiple Subnets 

*  If you do not select a subnet, the virtual node group will use the VNet and/or pod subnet assigned to the cluster. 
*  If you select multiple subnets, the virtual node group will distribute the subnets across nodes/node pools and/or pods based on subnet IP address availability. 
*  To prevent VNet or Pod subnets from running out of capacity, you can add VNet and/or pod subnets. All subnets must be from the same VNet as the cluster. VNG Pod subnet is configurable only with Azure CNI using dynamic IP allocation. 
*  If you did not specify the VNet subnet when you created the cluster, the VNet is managed by Azure, so you cannot edit or add a VNet and/or pod subnet. 

## Cluster and Subnet Limitations 

*  All subnets (vnet-subnets and pod-subnets) must be a subset of the AKS cluster VNet CIDR. 
*  After you create an AKS cluster, you cannot change the VNet name or Network plugin (CNI). 
*  For example, You can expand VNet CIDR from 10.200.0.0/16 to 10.200.0.0/14. However, you then need to update the AKS cluster to reconcile to the expanded VNet CIDR:  
```
az aks update -g <ResourceGroup> -n <ClusterName>
```
*  If a vnet-subnet was not specified when you created the AKS cluster, AKS creates the default managed VNet (CIDR 10.224.0.0/12), and you cannot add more subnets to the managed VNet. Ocean does not support adding subnets to AKS clusters with the default managed VNet. 
*  BYO CNI—Bring Your Own CNI is not currently supported. It may work with Ocean, but it cannot add subnets.

### Related Topics

* [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/)
* [Manage AWS Virtual Node Groups](https://docs.spot.io/ocean/tutorials/manage-virtual-node-groups)
* [Manage AKS Virtual Node Groups](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks)
