# Features

Ocean automates cloud infrastructure for containers. It continuously analyzes how your containers use infrastructure, automatically scaling compute resources to maximize utilization and availability by utilizing the optimal blend of spot, reserved, and on-demand compute instances.

## Ocean Cross-Cloud Service Provider Features

These are the Ocean features available for all cloud service providers:

* [Scaling for Kubernetes](ocean/features/scaling-kubernetes)
* [Headroom](ocean/features/headroom)
* [Right Sizing](ocean/features/right-sizing)
* [Labels and Taints](ocean/features/labels-and-taints)
* [Virtual Node Groups](ocean/features/launch-specifications)
* [Cluster Roll](ocean/features/roll-gen)
* [Shutdown Hours](ocean/features/running-hours)

Features only available for specific cloud service providers are listed below:

## Ocean Features Available for AWS Kubernetes ONLY

  <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>View list...</summary>
   
  <div style="padding-left:16px">

  These features are ONLY available for Ocean AWS Kubernetes:

  * [Elastic IP](ocean/features/elastic-ip)
  * [Distribute Nodes by vCPU](ocean/features/distribute-vcpu)
  * [Set up Extended Resource Support](ocean/tutorials/set-up-extended-resource-support)

   </div>
    </details>

## Ocean Features Available for EKS ONLY

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>View list...</summary>
    
   <div style="padding-left:16px">

  These features are ONLY available for Ocean EKS:
  
  * [EKS AMI Auto Update](ocean/features/eks-auto-ami)
  * [Upgrade Kubernetes Version in an Ocean EKS Cluster](ocean/tutorials/upgrade-kubernetes-eks)

   </div>
    </details>

## Ocean Features Available for AKS ONLY

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>View list...</summary>
   
   <div style="padding-left:16px">

These features are ONLY available for Ocean AKS:

- [Scheduled Roll via Console](ocean/features/roll)
- [Log Integration with Azure Blob](ocean/features/log-integration-with-azure-blob)
- [Migrate Workload to Ocean for AKS](ocean/tutorials/migrate-workload-aks)
- [Import AKS Cluster with Availability Zone Zero](https://docs.spot.io/ocean/features/vngs/az-zero-feature)
- [Regions Without AZ Support (AKS)](ocean/getting-started/aks?id=support-for-regions-without-availability-zones)
- [Select VMs for an AKS Virtual Node Group](https://docs.spot.io/ocean/features/vm-selection-aks)

>**Notes**: Ocean initiates actions in the Azure account. These actions are bound by the [Azure subscription limits and quotas](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) provided in the account.
>
> Ocean for AKS currently supports the import of Linux-based node pools only.

 </div>
  </details>

## Ocean Features Available for GKE ONLY
  
 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>View list...</summary>
  
   <div style="padding-left:16px">

These features are ONLY available for Ocean GKE:

* [Auto Update Process for GKE](ocean/features/auto-update-process-gke)
* [Create a Cluster for GKE Using Shared VPC](tutorials/create-cluster-gke-shared-vpc)
* [Auto Update Process for GKE](https://docs.spot.io/ocean/features/auto-update-process-gke)
* [Connect an Existing GKE Cluster](https://docs.spot.io/ocean/getting-started/gke)
* [Set Maximum Scale Down % for VNG or Cluster via the Console](https://docs.spot.io/ocean/features/max-scale-down-vng-gke-ui)
* [Committed Use Discount](ocean/features/committed-use-discount)


 </div>
  </details>

## Ocean Features Available for ECS ONLY

 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600" id=”texttolinkto”>View list...</summary>
   
   <div style="padding-left:16px">

These features are ONLY available for Ocean AWS ECS:

* [Scaling for ECS](ocean/features/scaling-ecs)
* [Cost Analysis per ECS Service](ocean/features/cost-analysis)
* [Migrate Elastigroups to Ocean (ECS)](ocean/tutorials/migrate-existing-egs-ecs)
* [Connect a Fargate Service](elastigroup/tutorials/amazon-ecs/import-fargate-services-to-ecs-elastigroup)*  

 </div>
  </details>

## Related Topics

Select a topic in the sidebar on the left to learn more about Ocean features.
