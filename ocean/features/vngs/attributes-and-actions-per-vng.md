# Attributes per VNG

Many attributes you apply to your cluster can be applied specifically per VNG. This enables you to organize and manage customized workload types within the same cluster. For example, you can customize the attributes listed below (per cloud service provider).

> **Tip**: Items marked “API only” can also be configured in the JSON in the Review tab of the console.

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>Ocean for AWS Kubernetes</summary>

<div style="padding-left:16px">

## Ocean for AWS Kubernetes

The following is a list of attributes customizable per VNG in Ocean for AWS. Some of the features can be accessed using the [API only](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate), as indicated below.

- Associate Public IP (API only)
- Block Device Mappings
- Elastic IPs
- Headroom
- Instance Types- whitelist or blacklist (these must be a subset of the instance types defined for the Ocean cluster.)
- Instance Profile
- Labels
- Launch Instance
- Maximum Nodes
- Minimum Nodes
- Multiple AMI Architectures in same VNG 
- Metadata v2 (API only)
- Preferred Spot Instance Types (API only)
- Restrict scale down
- Roll
- Security Group IDs
- Shutdown hours
- Spot% to use within the VNG
- Subnet IDs
- Tags
- Taints
- User Data

For example, you could use the Labels and Taints attributes to instruct Ocean which labels and taints are applied on the nodes using the user data, and effectively connect between the cloud infrastructure properties and Kubernetes node labels that will be used on applications using node affinity.

</div>
 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>Ocean for ECS</summary>

<div style="padding-left:16px">

## Ocean for ECS

The following is a list of attributes customizable per VNG in Ocean for ECS. Some of the features can be accessed using the [API only](https://docs.spot.io/api/#operation/OceanECSLaunchSpecUpdate), as indicated below.

- Attributes
- Block Device Mapping
- Instance Profile
- Instance Types - whitelist or blacklist (API only)
- Launch Instance
- Manual Headroom
- Metadata v2 (API only)
- Multiple AMI Architectures in same VNG
- Preferred Spot Instance Types (API only)
- Restrict Scaledown
- Roll
- Scheduled Manual Headroom (API only)
- Security Group
- Subnets
- Tags and Metadata
- User Data


> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level in order to ensure that the manual headroom will be effective.

</div>
 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>Ocean for AKS</summary>

   <div style="padding-left:16px">

## Ocean for AKS

The following is a list of attributes customizable per VNG in Ocean for AKS.

- Automatic Headroom
- Availability zone
- Headroom
- Labels
- Maximum Nodes
- OS Disk Type and Size
- Tags
- Taints
- Max Pods per Node (API Only)
- Multiple subnets per Virtual Node Group (VNG) 
  - Kubenet (vnet-subnet) 
  - Azure CNI (vnet-subnet)  
  - Azure CNI with Dynamic IP (vnet-subnet and pod-subnet).

</div>
 </details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>Ocean for GKE</summary>

   <div style="padding-left:16px">

## Ocean for GKE

The following is a list of attributes customizable per VNG in Ocean for GKE. Some of the features can be accessed using the [API only](https://docs.spot.io/api/#operation/OceanGKELaunchSpecUpdate), as indicated below.

- Automatic Headroom
- Availability zone
- Headroom
- Instance Types (API only. These must be a subset of the instance types defined for the Ocean cluster.)
- Instance Profile (API only)
- Labels
- Launch Instance
- Local SSD (API only)
- Maximum Nodes
- Minimum Nodes
- Network Tags (API only)
- Preemptible% to use within the VNG
- Restrict scale down
- Roll
- Root Volume Size
- Root Volume Type (API only)
- Scheduled manual headroom (API only)
- Shielded VMs (API only)
- Shutdown hours
- Tags & Metadata (API only)
- Taints

> **Tip**: If automatic headroom is configured, you must set `autoScaler.enableAutomaticAndManualHeadroom` to True at the Ocean level to ensure that the manual headroom will be effective.

</div>
 </details>

The following sections describe several of these attributes.

## Local SSD Support

Cloud service provider relevance: <font color="#FC01CC">GKE</font>

Ocean for GKE allows the utilization of local SSD disks, high-performance local disks that are useful with specific workloads such as those that heavily use caching. You can define SSD disks in your Ocean VNG configuration by using localSsdCount to configure the number of SSD disks to be connected to each VM in the VNG.

Once configured, whenever the Ocean Autoscaler scales up, Ocean will automatically connect the local SSDs to the new VM. Note that local SSDs are limited to specific machine types. Ocean will automatically filter out the machine types that are not compatible. For information about the API, see Local SSD in the Spot API.


## Restrict Scale Down per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>, and <font color="#FC01CC">GKE</font>

The restrict-scale-down label is a [Spot label](ocean/features/labels-and-taints?id=spot-labels) that can be applied on a Kubernetes pod or an ECS task and forces Ocean not to scale down the node or container instance running it. It is also possible to restrict scale down at the VNG level using a boolean property with the same name.

A possible use case is protecting a 100% On-demand VNG from any scale-down activity, as Ocean will treat the nodes or container instances in this VNG as if all pods or tasks running on them have the restrict-scale-down label. This will ensure that scale-down will not cause interruptions to sensitive workloads.

For more information about the Scale Down feature, see Scaling ([Kubernetes](ocean/features/scaling-kubernetes?id=scale-down) or [ECS](ocean/features/scaling-ecs?id=scale-down-behavior)).

## Multiple AMI Architectures in the Same Virtual Node Group 

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>

Ocean supports instance types with both Arm64 and x86 architectures in the same VNG. This widens the instance selection options because instances that support either the Arm64 or the x86 architectures can be chosen. This enables you to take advantage of the cost and performance benefits of Arm64 when the spot markets allow while maintaining a large whitelist of x86 instances. 

Whenever you create a Virtual Node Group with the Arm64 and x86 instance types, ensure that the workloads can run on both architectures. In addition, ensure by using node selectors that only the relevant pods will trigger a scale-up from this VNG. 

<!-- I took the generic intro information from Preferred Spot Instance Types per Virtual Node Group and put it above -->

##  Preferred Instance Types per Virtual Node Group

Ocean provides a serverless experience in which the specific instances don’t matter, and the best practice is to allow the use of all instance types. However, there are some cases in which a specific instance type may provide better performance or increased cost savings. For example, if you know that your application performs significantly better on M5 instances, then you can save costs by preferring this instance type over others.

Ocean serves such use cases with the ability to define a list of preferred instance types out of all types allowed in the Virtual Node Group. When your preferences are defined, Ocean takes them into consideration alongside other considerations when scaling up. In this way, Ocean strives towards a well-distributed and highly available spot-instance/on-demand-based Virtual Node that uses preferred types as broadly as possible.

### Preferred Spot Instance Types per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>, <font color="#FC01CC">ECS</font>

For your AWS Kubernetes and ECS clusters, you can configure preferred Spot instance types at the Virtual Node Group level.

In each scale-up action, Ocean provisions the new instances from the preferred types, using:

- 100% of the new instances if three or more different preferred types are defined.
- 0-80% of the new instances, when 0-2 different preferred types are defined.

The remaining new instances will have non-preferred types to maintain a distribution in the VNG. For example, when scaling up 10 instances in a VNG with a R5.xlarge defined as the preferred type, Ocean tries to provision five R5.xlarge instances and five from others.

As the preferred instance type is a soft requirement, the general spot instance availability of both preferred and non-preferred types is considered before considering type preference.

For information about defining preferred spot instance types in the Spot API (using the `preferredSpotTypes` attribute under `launchSpec.instanceTypes`), see the Create Virtual Node Group APIs for [Ocean AWS Kubernetes](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) and [Ocean ECS](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSLaunchSpecCreate).

<!-- Section below added 15-07-2024 for DOC-1912 -->

##  Preferred On-Demand Instance Types per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

You can configure preferred on-demand types at the Virtual Node Group level for your AWS Kubernetes clusters.

In each scale-up action, Ocean provisions the new instances from the preferred types as follows:

* Ocean selects the On-Demand instance types from the preferred list.
* Ocean filters out unavailable markets when selecting On-Demand nodes.
* If all the preferred On-Demand instance types are unavailable when scaling up, Ocean will select the types from the Virtual Node Group whitelist `instanceTypes` (if it exists). If the Virtual Node Group whitelist does not exist, Ocean will use the cluster's whitelist.

For information about defining preferred on-demand instance types in the Spot API using the `preferredOnDemandTypes` attribute, see the Create Virtual Node Group APIs for [Ocean AWS Kubernetes](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate).

When you set `preferredOnDemandTypes`, the Ocean Autoscaler will launch on-demand nodes from the listed types.​

See also [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#preferred_od_types)

##  Ephemeral Storage per Virtual Node Group

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

The Ocean Autoscaler (by default) calculates ephemeral storage using the root volume size when it scales up. If your system uses the data volume size for the calculation, you need to specify an alternative device name to ensure that the Ocean Autoscaler launches nodes with the right size for their workloads.

When the root volume is not applicable for the ephemeral storage, specify the alternative device name `deviceName` with either the Virtual Node Group (VNG’s) BDM or the AMI’s BDM.

* Via the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate) -  `launchSpec.ephermeralStorage.deviceName`
* Via [Terraform](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aws_launch_spec#ephemeral_storage)


## Configure an Ocean AKS Cluster with Multiple VNG Subnets

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

Ocean AKS lets you configure multiple subnets for a Virtual Node Group (VNG) to ensure that your AKS cluster does not run out of IP address capacity.  
There are several Azure Networking CNI options: 

*  Kubenet Networking (vnet-subnet) 
*  Azure CNI (vnet-subnet)  
*  Azure CNI with Dynamic IP (vnet-subnet and pod-subnet).  

You can add (or remove) vnet-subnets or pod-subnets in a VNG at any time. Ocean AKS will automatically assign subnets to node pools based on IP address capacity. However, a node pool with a subnet that has run out of IP address capacity will be locked for scaling. 
You can set up multiple subnets when you create or update a Virtual Node Group, and when you update a Virtual Node Group template in the Cloud Cluster Virtual Node Groups tab. 

To access the Virtual Node Groups dashboard and configure multiple subnets: 

1. In the left main menu, click **Ocean**, and click **Cloud Clusters**.
2. Select a cluster from the list of clusters. 
3. Click the **Virtual Node Group** tab. 
4. Click the Virtual Node Group you need to configure from the list.  
   In the Virtual Node Group dashboard that opens, The Networking panel is in the middle-right of the screen.

![ocean-network-gen](https://github.com/spotinst/help/assets/159915991/4c1c7c3f-0d23-478a-9dd5-92056dab0a44)


5. In the Networking panel, you can update subnets for VNG using the Add VNet subnets and Add Pod subnets drop-down lists, according to the AKS cluster Network Type.

    *  For Kubenet, you can add one or more VNet subnets to the VNG (pod subnets are not applicable) 
    *  For Azure CNI you can add one or more VNet subnets to the VNG (pod subnets are not applicable) 
    *  For Azure CNI Dynamic IP, you can add one or more VNet subnets and/or pod subnets to the VNG. 

## What to Consider when Selecting Multiple Subnets 

*  If you do not select a subnet, the VNG will use the VNet and/or pod subnet assigned to the cluster. 
*  If you select multiple subnets, the VNG will distribute the subnets across nodes/node pools and/or pods based on subnet IP address availability. 
*  To prevent VNet or Pod subnets from running out of capacity, you can add VNet and/or pod subnets. All subnets must be from the same VNet as the cluster. VNG Pod subnet is configurable only with Azure CNI using dynamic IP allocation. 
*  If you did not specify the VNet subnet when you created the cluster, the VNet is managed by Azure, so you cannot edit or add a VNet and/or pod subnet. 

## Cluster and Subnet Limitations 

*  All subnets (vnet-subnets and pod-subnets) must be a subset of the AKS cluster VNet CIDR. 
*  After you create an AKS cluster, you cannot change the VNet name or Network plugin (CNI). 
*  You can expand VNet CIDR, for example, from 10.200.0.0/16 to 10.200.0.0/14. However, you then need to update the AKS cluster to reconcile to the expanded VNet CIDR:  
```
az aks update -g <ResourceGroup> -n <ClusterName>
```
*  If a vnet-subnet was not specified when you created the AKS cluster, AKS creates the default managed VNet (CIDR 10.224.0.0/12), and you cannot add more subnets to the managed VNet. Ocean does not support adding subnets to AKS clusters with the default managed VNet. 
*  BYO CNI - Bring Your Own CNI is not currently supported. It may work with Ocean, but there is no capability to add subnets.

### Related Topics

* [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/)
* [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups.md)
* [Spot API-Create Virtual Node Group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate)
