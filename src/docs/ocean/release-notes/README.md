# Ocean Release Notes

## September 2024: Features and Enhancements 

*  **OCN-0029: September 04, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean with [Controller V2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) supports Pod Scheduling Readiness (included in Kubernetes 1.30), which considers whether a pod is ready to be scheduled. [Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=support-for-pod-scaling-readiness)

*  **OCN-0028: September 02, 2024:** (**<font color="#FC01CC">AKS</font>**) The AKS Cluster overview dashboard now includes details about Ocean savings from bin packing and a panel that displays a cluster-level summary with widgets for CPU /Memory /GPU resources allocated to pods. [Learn more...](https://docs.spot.io/ocean/ocean-aks-cloud-cluster-overview) 

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">August, 2024 - click to view</summary>

<div style="padding-left:16px">

*  **OCN-0027: August 29, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Turn On/Off Utilize Commitments per Virtual Node Group: You can now distribute reservation instances/savings plans according to Virtual Node Groups for different types of workloads on the same cluster via the `utilizeReservedInstances` and `utilizeCommitments` attributes. [Learn more...](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=turn-onoff-utilize-commitments-per-virtual-node-group)

*  **OCN-0026: August 21, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean Controller Version 2 now supports the `namespaceSelector` scaling constraint label introduced in Kubernetes Version 1,24 for the AKS platform. When you apply this label, Ocean's Autoscaler scales up nodes based on the Namespace selector to schedule pods. [Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=kubernetes-namespaceselector-scaling-constraint-label) about the `namespaceSelector` label.

*  **OCN-0025: August 18, 2024:** (**<font color="#FC01CC">AKS</font>**) For AKS only, you can now set a suspension hours (`suspensionHours`) time frame for critical periods to exempt your cluster from Ocean's scaling-down activities and ensure uninterrupted operations.[Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=suspension-hours)

*  **OCN-0024: August 18, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) You can now set draining timeout (`drainingTimeout`) at the Virtual Node Group level. The draining timeout is the time span that Ocean waits for the draining process to complete before terminating an instance. [Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=draining-timeout-per-virtual-node-group)

*  **OCN-0023: August 14, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Ocean's Cluster Overview dashboard now contains an Autoscaling Activity Graph to give you intuitive insights into the interaction between the Ocean infrastructure and the applications it supports. View cluster activity insights at a granular level to see why the Ocean Autoscaler triggered a specific scale event within the cluster. [Learn more...](https://docs.spot.io/ocean/cluster-overview-tab?id=autoscaling-activity-graph)

*  **OCN-0022: August 11, 2024:** (**<font color="#FC01CC">GCP</font>**) You can now use committed use discounts (CUDs) with Ocean clusters. Committed use discounts provide discounted prices in exchange for customer commitment expense on GCP. [Learn more...](https://docs.spot.io/ocean/features/committed-use-discount)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">July, 2024 - click to view</summary>

<div style="padding-left:16px">

*  **OCN-0021: July 31, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean now supports AKS with global regions. From now on, you can create and import clusters set with the global regions in Azure that currently do not support Availability Zones, for which you can create resources at the regional level. [Learn more...](https://docs.spot.io/ocean/getting-started/aks/?id=support-for-regions-without-availability-zones)

*  **OCN-0020: July 30, 2024:** (**<font color="#FC01CC">EKS</font>**) You can now run immediate or scheduled AMI auto-updates for EKS from the Ocean console for security patch and/or Kubernetes minor version updates. [Learn more...](https://docs.spot.io/ocean/features/ami-auto-update-eks-ui)

*  **OCN-0019: July 24, 2024:** (**<font color="#FC01CC">GKE</font>**) You can now set the Ocean Autoscaler `maxScaleDownPercentage` for Virtual Node Groups via the console.
[Learn More...](https://docs.spot.io/ocean/features/max-scale-down-vng-gke-ui)

*  **OCN-0018: July 18, 2024:** (**<font color="#FC01CC">GKE</font>**) Ocean Controller Version 2 now supports the `namespaceSelector` scaling constraint label introduced in Kubernetes Version 1,24 for the GKE platform. When you apply this label, Ocean's Autoscaler scales up nodes based on the Namespace selector to schedule pods. [Learn more...](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#namespace-selector) about the `namespaceSelector` label.

*  **OCN-0017: July 18, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) You can now configure preferred on-demand types at the Virtual Node Group level for your AWS Kubernetes clusters.
[Learn More...](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=preferred-on-demand-instance-types-per-virtual-node-group)

*  **OCN-0016: July 18, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) In the Spot API and Terraform, you can now control how fast to replace an active node once it becomes unhealthy, using the new `healthCheckUnhealthyDurationBeforeReplacement` attribute.
[Learn more...](https://docs.spot.io/ocean/features/health-checks-and-autohealing?id=control-when-to-replace-an-unhealthy-node)

*  **OCN-0015: July 16, 2024:** (**<font color="#FC01CC">AKS</font>**)  As of July 16, 2024, Ocean Controller Version 2 for Azure Kubernetes (AKS) is officially released, bringing a host of new features and enhancements to streamline your operations.
[Learn More...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)

* **OCN-0014: July 09, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Ocean now lets you use recommendations to make informed decisions when selecting the best Availability Zones for launching instances in your Kubernetes cluster. [Learn More...](https://docs.spot.io/ocean/features/avail-zones-scores)


* **OCN-0013: July 08, 2024:** [Ocean Documentation Update] (**<font color="#FC01CC">AKS</font>**) We have added these new topics to the Ocean AKS documentation:
   * [Dense Mode and Node Pools](https://docs.spot.io/ocean/features/dense-mode-and-node-pools)
   * [Select VMs for an AKS Virtual Node Group](https://docs.spot.io/ocean/features/vm-selection-aks) 
     
 
</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">June, 2024 - click to view</summary>

<div style="padding-left:16px">

## June 2024: Features and Enhancements 

*  **OCN-0012: June 27, 2024:** (**<font color="#FC01CC">GKE</font>**)  As of June 15, 2024, Ocean Controller Version 2 for Google Kubernetes (GKE) is officially released, bringing a host of new features and enhancements to streamline your operations.
[Learn More...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)

*  **OCN-0011: June 24, 2024:** [Ocean Documentation Update] (**<font color="#FC01CC">AKS</font>**) We have updated the permissions documentation for using the Spot Ocean platform with AKS.
Review the latest [Spot Policy in Azure (AKS)](https://docs.spot.io/administration/api/spot-policy-aks-azure) and refer to [AKS Permissions](https://docs.spot.io/administration/api/aks-permissions-desc) for a description of the permissions required for AKS infrastructure and Azure RBAC-enabled Kubernetes clusters, to help you maximize the value of the Spot Ocean platform.

*  **OCN-0010: June 13, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean now supports AKS VNG (Virtual Node Groups) with Availability Zone set to null (Zone 0). Use this option independently or with other Availability Zones to seamlessly run workloads requiring PVC (Persistent Volume Claim), storage needs, and availability redundancy (AZ=null) within Ocean, with minimal configuration changes. [Learn more…](https://docs.spot.io/ocean/features/vngs/az-zero-feature)

* **OCN-0009: June 09, 2024:** (**<font color="#FC01CC">AKS</font>**)
Log Integration with Azure Blob for Ocean **AKS** is now available in the [Spot API](https://docs.spot.io/api/).
From now on, you can configure Ocean to export logs to an Azure Blob and then access the logs with a central monitoring tool.
Read and troubleshoot the Ocean logs in the same central interface where you access your other logs. 
[Learn more...](https://docs.spot.io/ocean/features/log-integration-with-azure-blob)

* **OCN-0008: June 09, 2024:** 
Spot has released EKSCTL [v0.180.0](https://github.com/spotinst/weaveworks-eksctl/releases/tag/v0.180.0).  
When you use this EKSCTL version to create Ocean clusters, [Ocean Controller Version 2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/.) is used.
>**Prerequisite**: Helm installed.

</div>
</details>


<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">May, 2024 - click to view</summary>

<div style="padding-left:16px">

## May 2024: Features and Enhancements

* **OCN-0007: May 27, 2024:** (**<font color="#FC01CC">AKS</font>**)
Workload Migration for Ocean **AKS** is now available in both the Ocean console and the Spot API (with new API calls) to make migrating your Kubernetes workloads to Ocean easier. Workload Migration automates draining and rescheduling pods, streamlining your **AKS** infrastructure migration to Ocean.
Seamlessly migrate and register your workloads into Ocean, and let Spot manage your Kubernetes environment.
[Learn more...](https://docs.spot.io/ocean/tutorials/migrate-workload-aks)

* **OCN-0006: May 27, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**)
Ocean Controller Version 2 supports the `namespaceSelector` scaling constraint label introduced in Kubernetes Version 1,24. When you apply this label, Ocean's Autoscaler scales up nodes based on the Namespace selector to schedule pods. This option is available for **AWS** Kubernetes only.
[Learn more...](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#namespace-selector) about the `namespaceSelector` label.

* **OCN-0005: May 16, 2024:** [Ocean Documentation Update]: 
This topic explains how to manage Virtual Node Groups (VNGs) when upgrading the Kubernetes version for your clusters. The recommended approach is to automatically upgrade the control plane to the latest K8s version while keeping the data plane's VNGs running on a minor Kubernetes version until fully validating them for the latest K8s version.
[Learn more…](https://docs.spot.io/ocean/tips-and-best-practices/vng-minor-versions?id=configure-a-minor-k8s-version-for-a-virtual-node-group)

* **OCN-0004: May 16, 2024:** (**<font color="#FC01CC">AKS</font>**)
Ocean has introduced an update to manage and optimize **AKS** Private Clusters. Ocean now supports any AKS private cluster configuration as long as the Ocean Controller can establish outbound communication with the Spot SaaS control plane.
[Learn more…](https://docs.spot.io/ocean/getting-started/aks/?id=what-to-do-about-aks-private-clusters)

* **OCN-0003: May 16, 2024:** (**<font color="#FC01CC">AKS</font>**)
Ocean now lets you schedule cluster and Virtual Node Group (VNG) rolls for **AKS**. You have the flexibility to roll immediately or plan a maintenance window on a weekly or monthly basis during non-peak hours to upgrade or update your clusters or VNGs. You can set up roll schedules using either the [Spot API](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterUpdate) through the "Create Cluster" or "Update Cluster" endpoints using a cron expression or through the Ocean Console Cloud Cluster's "Roll" tab.
[Learn more...](https://docs.spot.io/ocean/features/roll?id=rolls)

* **OCN-0002: May 1, 2024:**
Spot has introduced a new Ocean label, `spotinst.io/azure-premium-storage,` injected on every node in a node pool that supports premium storage. Once you define this label on a workload requiring premium storage, the pods can be provisioned on the most appropriate nodes (for the workload). [Learn More...](https://docs.spot.io/ocean/features/labels-and-taints) (edited)

* **OCN-0001**: (**<font color="#FC01CC">AWS Kubernetes</font>**) As of **May 1, 2024**, **Ocean Controller Version 2** for **AWS Kubernetes** is officially released, bringing a host of new features and enhancements to streamline your operations:
  *  With Ocean Controller Version 2, you can expect enhanced efficiency and performance thanks to its innovative event-driven system design. This intelligent architecture ensures your cluster operates at peak performance, delivering optimal results with every interaction.

  *  One of the standout features of Ocean Controller Version 2 is its out-of-the-box Leader Election mode, which guarantees continuous pod availability and uninterrupted operations to keep your cluster running smoothly, even in the face of unexpected events.

  *  Ocean Controller Version 2 establishes a secure binding between your Kubernetes cluster and the relevant Ocean resources. You can easily manage and monitor your resources by configuring your Spot Account ID, Spot Token, and a unique Cluster Identifier for each cluster.

  *  Ocean Controller Version 2 resides within your Kubernetes cluster, actively listening for resource events. This intelligent system seamlessly pushes modified resources to the Spot SaaS environment, ensuring your cluster is always updated with the latest changes.

  *  Not only does Ocean Controller Version 2 offer unparalleled functionality, but it also boasts a minimal footprint within your cluster. This means external network traffic is low when no changes occur, presenting exciting cost-saving opportunities. 

>**IMPORTANT:** **Ocean Controller Version 1** will reach End-Of-Life on **November 1, 2024**. To take advantage of the benefits offered by **Ocean Controller Version 2** and receive uninterrupted service and support, upgrade to Version 2 at your earliest convenience.
[Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)

</div>
</details>


 <details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">March, 2024 - click to view</summary>

<div style="padding-left:16px">

## March 2024: Features and Enhancements

* **March 25, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Improved PDB Handling During Cluster Rolls: 
The latest update introduces a smart batching mechanism for managing the Pod Disruption Budget (PDB) during cluster rolls. 
This mechanism intelligently splits the nodes for rolling, ensuring that PDB constraints are respected. 
[Learn more](https://docs.spot.io/ocean/features/roll-gen?id=respect-pod-disruption-budget) about respecting PDB during cluster roll.

 </div>
 </details>






















