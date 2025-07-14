# Ocean Release Notes


## July 2025: Features and Enhancements

Keep checking for updates.....

<!--*  **OCN-0077 July 13, 2025:** (**<font color="#FC01CC">AKS</font>**) You can now run immediate or scheduled auto-updates for AKS system node pools from the Ocean console for Kubernetes patch version updates to avoid potential errors and keep updated with the latest version. [Learn more…](https://docs.spot.io/ocean/features/auto-upgrade-aks-patch-version ) -->

Previous months...

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">April, 2025 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0076 April 16, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Ocean node recovery process improvements ensure a more accurate scale-up and take scaling constraints into account. [Learn more…](https://docs.spot.io/ocean/features/scaling-kubernetes?id=ocean-instance-recovery-mechanism)

*  **OCN-0075 April 02, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Our latest AWS Kubernetes node-draining enhancement changes scale-down behavior. Once all pods have been successfully evicted from a node, the node is drained (scaled down) immediately without waiting for the full draining timeout period to expire. [Learn more…](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down-behavior)

*  **OCN-0074: April 01, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Machine Ephemeral Storage: Use `instanceStorePolicy` to manage instance store volumes for faster node ephemeral storage. [Learn more…](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=machine-ephemeral-storage)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">March, 2025 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0073: March 27, 2025:** (**<font color="#FC01CC">AKS</font>**) and (**<font color="#FC01CC">EKS</font>**) Enable **auto-attach** and let Ocean automatically attach your right-sizing rules to workloads based on selected namespace/labels criteria [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=attach-a-right-sizing-rule-to-one-or-more-workloads)

*  **OCN-0072: March 27 2025:** (**<font color="#FC01CC">AKS</font>**) You can now run **immediate** or scheduled auto-updates for AKS from the Ocean console for Kubernetes patch version updates to avoid potential errors and keep updated with the latest version. [Learn more...](https://docs.spot.io/ocean/features/auto-upgrade-aks-patch-version)

*  **OCN-0071: March 09, 2025:** (**<font color="#FC01CC">AKS</font>**) and (**<font color="#FC01CC">EKS</font>**) You can now select the right-sizing percentile settings to calculate the memory recommendations.[Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=set-the-vcpumemory-percentile)

*  **OCN-0070: March 09, 2025:** (**<font color="#FC01CC">AKS</font>**) and (**<font color="#FC01CC">EKS</font>**) Changes were made to right-sizing statuses. [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">February, 2025 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0069: February 26, 2025:** (**<font color="#FC01CC">AKS</font>**) and (**<font color="#FC01CC">EKS</font>**) You can now view your (actual) right-sizing savings from applying down-sizing recommendations to your workloads. [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-savings-tab)

*  **OCN-0068: February 26, 2025:** (**<font color="#FC01CC">AKS</font>**) and (**<font color="#FC01CC">EKS</font>**) Ocean right-sizing auto-tuning is implemented to handle workload limits. [Learn more…](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab?id=how-it-works)

*  **OCN-0067: February 26, 2025:** (**<font color="#FC01CC">AKS</font>**) Ocean now supports the Azure Linux 3.0 image type on AKS version 1.31 for new clusters.
[Learn more...](https://learn.microsoft.com/en-us/azure/azure-linux/how-to-enable-azure-linux-3)

*  **OCN-0066: February 26, 2025:** (**<font color="#FC01CC">GKE</font>**) You can now set up GKE cluster and virtual node group orientation via the Spot API. [Learn more...](https://docs.spot.io/ocean/features/gke-cluster-vng-orientation)

 
*  **OCN-0065: February 12, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Introduced a set of instance types labels. All nodes will be automatically labeled according to node criteria, and you can apply those labels to a workload's constraints (nodeSelector, node affinity, etc.) to reflect instance-types properties such as category and family. [Learn more…](https://docs.spot.io/ocean/features/labels-and-taints?id=instance-types-labels)

*  **OCN-0064: February 10, 2025:** (**<font color="#FC01CC">AWS EKS</font>**) Dynamic IOPS lets you scale IOPS for GP3 EBS volumes based on instance size. [Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=dynamic-iops)

</div>
</details>


<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">January, 2025 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0063: January 26, 2025:** (**<font color="#FC01CC">AWS EKS</font>**). Implemented native support for the `topology.k8s.aws/zone-id` label in the Ocean autoscaler. You can use the `topology.k8s.aws/zone-id` label in your workloads' constraints, such as `nodeSelector`, `nodeAffinity` and `topologyKey` (in `topologySpreadConstraints`, `podAffinity` and `podAntiAffinity`). For more information about this label, refer to the [Amazon EKS User Guide](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions-standard.html#kubernetes-1.30).

*  **OCN-0062: January 15, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**). New gauge metrics were added to the Ocean Prometheus exporter (nodes added/removed and failed scale-ups/downs). [Learn more...](https://docs.spot.io/ocean/tools-and-integrations/prometheus/?id=prometheus-for-kubernetes-data-plane-monitoring)

*  **OCN-0061: January 15, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) The latest release introduces two major features: Enhanced scale-up for faster pod scheduling and improved cluster utilization, and an enhanced distribution algorithm for balanced node spreading and greater cost savings. These enhancements significantly reduce cluster costs while maintaining cluster availability. Enhanced scale-up is available to all Ocean customers and requires Ocean Controller V2.

*  **OCN-0060: January 14, 2025:** (**<font color="#FC01CC">AKS</font>**) You can now access extensive information about Ocean AKS revert to spot and revert to lower-cost events from the autoscaler activity graph. [Learn more…](https://docs.spot.io/ocean/ocean-aks-cloud-cluster-overview?id=display-extended-details-for-revert-to-spotsrevert-to-lower-cost-events)

*  **OCN-0059: January 14, 2025:** (**<font color="#FC01CC">AKS</font>**) Ocean now identifies missing labels and taints that can cause AKS node migration failures. Before migrating nodes, you can fix mismatches between virtual node groups and workloads in the console. [Learn more...](https://docs.spot.io/ocean/tutorials/migrate-workload-aks-ui?id=migrate-aks-workload-using-the-console)

*  **OCN-0058: January 08, 2025:** (**<font color="#FC01CC">AWS Kubernetes</font>**) You can now set temporary startup taints for nodes. For example, you can use a startup taint to deploy a specific pod to a node to perform a specific function before deploying other pods to the same node. [Learn more...](https://docs.spot.io/ocean/features/labels-and-taints?id=startup-taints)

*  **OCN-0057: IMPORTANT NOTICE - January 01, 2025:** Ocean Controller Version 1 is now deprecated for **<font color="#FC01CC">AKS</font>** (from **January 01, 2025**). This means that Version 1 will not support new features, and any unexpected behaviors or security issues identified after this date will not be addressed. We recommend upgrading to Ocean Controller Version 2.0 for the best performance and support. [Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)    
Ocean Controller
Version 1 was previously deprecated for other cloud service providers:
   * **<font color="#FC01CC">AWS Kubernetes </font>**: was deprecated November 01, 2024
   * **<font color="#FC01CC">GKE</font>**: was deprecated December 18, 2024
   
</div>
</details>


<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">December, 2024 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0056: December 25, 2024:** (**<font color="#FC01CC">AWS ECS</font>**) You can now set the `instanceMetadataTags` attributes from your Ocean ECS clusters via the Spot API 
under `cluster.compute.LaunchSpecification`. For example, [Create Cluster](https://docs.spot.io/api/#tag/Ocean-ECS/operation/OceanECSClusterCreate).

*  **OCN-0055: December 24, 2024:** (**<font color="#FC01CC">EKS</font>** and **<font color="#FC01CC">AKS</font>**) For automatic right-sizing, you can now select the percentile setting used to calculate your vCPU recommendations. The lower the percentile, the stronger the recommendations. [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=set-the-vcpu-percentile)

*  **OCN-0054: IMPORTANT NOTICE - December 18, 2024:** Ocean Controller Version 1 is now deprecated for **<font color="#FC01CC">GKE</font>** (from **December 18, 2024**). This means that Version 1 will not support new features, and any unexpected behaviors or security issues identified after this date will not be addressed. We recommend upgrading to Ocean Controller Version 2.0 for the best performance and support. [Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)    
Ocean Controller
Version 1 deprecation for other cloud service providers:
   * **<font color="#FC01CC">AWS Kubernetes </font>**: Was deprecated November 01, 2024
   * **<font color="#FC01CC">AKS</font>**: Will be deprecated January 1, 2025

*  **OCN-0053: December 17, 2024:** (**<font color="#FC01CC">GKE</font>**) You can now turn the GKE Auto-Update process on or off for your clusters via the Spot API `autoUpdate` attribute. [Learn more...](https://docs.spot.io/ocean/features/auto-update-process-gke?id=turn-the-auto-update-process-on-or-off-for-your-clusters)

*  **OCN-0052: December 17, 2024:** (**<font color="#FC01CC">GKE</font>**) Our new `revertToPreferred` attribute ensures that Ocean always runs your workloads on your most preferred instance types. You can configure `revertToPreferred` at cluster and virtual node group levels. [Learn more...](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=revert-to-preferred-instance-types-per-virtual-node-group-gke)

*  **OCN-0051: December 17, 2024:** (**<font color="#FC01CC">GKE</font>**) As part of the 1.30 version, Kubernetes has released [Support for Pod Scheduling Readiness](https://kubernetes.io/docs/concepts/scheduling-eviction/pod-scheduling-readiness/), which allows stating if a pod is ready to be scheduled or not. GKE now supports this feature for any cluster using the new Ocean Controller v2 and Kubernetes version 1.30 and above.

*  **OCN-0050: December 10, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean now supports setting virtual node group shutdown hours via the Spot API. [Learn more...](https://docs.spot.io/ocean/tutorials/set-running-hours?id=schedule-shutdown-hours-in-the-api-per-virtual-node-group)

*  **OCN-0049: December 10, 2024:** (**<font color="#FC01CC">AKS</font>**) Check out the new Auto-Upgrades feature in the Ocean AKS clusters console. Use this feature to automate your clusters' control plane patch version updates, saving time and reducing manual effort and potential errors. [Learn more...](https://docs.spot.io/ocean/features/auto-upgrade-aks-patch-version) 

*  **OCN-0048: December 10, 2024:** (**<font color="#FC01CC">AKS</font>**) You can now sort your Ocean AKS node pools according to status as well as name in the console. [Learn more...](https://docs.spot.io/ocean/features/dense-mode-and-node-pools?id=view-node-pools-in-the-console)

*  **OCN-0047: December 03, 2024:** (**<font color="#FC01CC">GKE</font>**) For your GKE clusters, Ocean now ensures resource reservations for system components that manage nodes, such as the Kubelet and Kube-Proxy. This feature is currently available through a feature flag and will later be opened to all GKS customers by default. To enable this feature for Ocean GKE, contact [Spot Support](https://spot.io/support/).

*  **OCN-0046: December 03, 2024:** (**<font color="#FC01CC">AKS</font>**) The AKS Cluster overview dashboard now includes details about Ocean savings from reverting to lower cost nodes. [Learn more...](https://docs.spot.io/ocean/ocean-aks-cloud-cluster-overview?id=ocean-savings-from-reverting-to-lower-cost-node-pools)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">November, 2024 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0045:** November 26, 2024: (**<font color="#FC01CC">AWS</font>**) Elastigroup and Ocean now automatically revert existing instances utilizing reserved capacity and savings plans to spot instances or other commitment deals wherever a reservation is needed elsewhere in your AWS account. [Learn more...](https://docs.spot.io/ocean/features/dynamic-commitments-aws?id=dynamic-commitments)

*  **OCN-0044: November 19, 2024:** (**<font color="#FC01CC">GKE</font>**)  The `preferredTypes` attribute is now available for GKE clusters and virtual node groups (Spot API only) to launch new nodes on a cluster from the list of preferred instance types. [Learn more...](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=preferred-instance-types-per-virtual-node-group-gke)

*  **OCN-0043: November 16, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) In Ocean, you can now use the reservedENIs attribute to specify the number of ENIs to reserve per instance type (for cluster / virtual node group) for scaling purposes. [Learn more..](https://docs.spot.io/ocean/features/scaling-kubernetes?id=maximum-pods-custom-configuration)

*  **OCN-0042: November 16, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) New metrics were added to the Prometheus Exporter to track the total resources that were requested by pods, including deamonSet pods, by all virtual node groups in the cluster. [Learn more…](https://docs.spot.io/ocean/tools-and-integrations/prometheus/?id=ocean_total_pod_vcpu_requests-ocean_total_pod_memory_requests-ocean_total_pod_gpu_requests)

*  **OCN-0041: November 16, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**), (**<font color="#FC01CC">AKS</font>**) , (**<font color="#FC01CC">GKE</font>**) You can now view Ocean dashboards using Grafana. The Ocean scaling and cost optimization dashboard provides real-time insights into the scaling, cost, usage, and right-sizing activities managed by Ocean within your Kubernetes cluster. It displays node provisioning, optimization, cost efficiency, and recovery operations metrics. [Learn more…](https://docs.spot.io/ocean/tools-and-integrations/grafana-dashboard)

*  **OCN-0040: November 04, 2024:** (**<font color="#FC01CC">EKS and AKS</font>**) Rollbacks let you run right-sizing automation without concerns. Starting now, Ocean automatically rolls back changes made by automatic right-sizing that encounter OOM events. [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=acknowledge-a-workload-rollback)

* **OCN-0039: November 04, 2024:** (**<font color="#FC01CC">EKS and AKS</font>**) New drill-down options for the percentile data points in both right-sizing memory and vCPU usage graphs were added to the percentiles already used for the recommendations (99th percentile for vCPU and maximum usage for memory). [Learn more...](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab?id=right-sizing-resource-usage-panel)

*  **OCN-0038: IMPORTANT NOTICE - November 01, 2024:** Ocean Controller Version 1 is now deprecated for **<font color="#FC01CC">AWS Kubernetes</font>** (from **November 1, 2024**). This means that Version 1 will not support new features, and any unexpected behaviors or security issues identified after this date will not be addressed. We recommend upgrading to Ocean Controller Version 2.0 for the best performance and support. [Learn more...](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/)    
Ocean Controller Version 1 will be deprecated for other cloud service providers as follows:
   * **<font color="#FC01CC">GKE</font>**: December 18, 2024
   * **<font color="#FC01CC">AKS</font>**: January 1, 2025

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">October, 2024 - click to view</summary>
 
   <div style="padding-left:16px">

*  **OCN-0037: October 31, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean's Cluster Overview dashboard now contains an Autoscaling Activity Graph to give you intuitive insights into the interaction between the Ocean infrastructure and the applications it supports. View cluster activity insights at a granular level to see why the Ocean Autoscaler triggered a specific scale event within the cluster. [Learn more...](https://docs.spot.io/ocean/ocean-aks-cloud-cluster-overview?id=autoscaling-activity-panel)

*  **OCN-0036: October 15, 2024:** (**<font color="#FC01CC">GKE</font>**) For your GKE clusters and at the API level only, you can now define filter criteria so that Ocean selects instances to fit your applicative needs. See the Spot API for [cluster](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate) and [virtual node group](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate) filter criteria.

*  **OCN-0035: October 08, 2024:** (**<font color="#FC01CC">AKS</font>**) When you import an AKS cluster into Ocean via the console cluster creation wizard, you can now create multiple virtual node groups from your node pools, using the default virtual node group as a template on which to base your custom virtual node groups. [Learn more...](https://docs.spot.io/ocean/getting-started/aks/?id=launch-the-create-ocean-cluster-wizard).

*  **OCN-0034: October 07, 2024:** (**<font color="#FC01CC">AKS</font>**) Documentation update: see how to manage AKS virtual node groups. [Learn more...](https://docs.spot.io/ocean/tutorials/manage-virtual-nd-groups-aks)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">September, 2024 - click to view</summary>
 
 <div style="padding-left:16px">

*  **OCN-0033: September 19, 2024:** (**<font color="#FC01CC">GKE</font>**) Changes were made to the cluster import process connectivity options with enhanced Ocean Controller Version 2. [Learn more...](https://docs.spot.io/ocean/getting-started/gke)

*  **OCN-0032: September 17, 2024:** (**<font color="#FC01CC">GKE</font>**) Google recently informed their customers that node pools will use regional instance templates starting from their latest versions 1.29 & 1.30. In response, Ocean now supports node pools with regional instance templates as well as global instance templates. For more information, see the [Google Cloud release notes](https://cloud.google.com/kubernetes-engine/docs/release-notes#August_16_2024).

*  **OCN-0031: September 17, 2024:** (**<font color="#FC01CC">GKE</font>**) For Ocean GKE, you can now set `pd-balanced` as a `rootVolumeType` on both cluster and Virtual Node Group levels. For more information on disk types, see the [Google Cloud documentation](https://cloud.google.com/compute/docs/disks).

*  **OCN-0030: September 08, 2024:** (**<font color="#FC01CC">EKS</font>**) The **Ocean Network Cost Banner** under **Cost Analysis** now contains an estimate of your average hourly network usage (GB), calculated on an hourly basis. [Learn more...](https://docs.spot.io/ocean/tutorials/analyze-your-costs?id=ocean-network-cost-banner)

*  **OCN-0029: September 04, 2024:** (**<font color="#FC01CC">AKS</font>**) Ocean with [Controller V2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) supports Pod Scheduling Readiness (included in Kubernetes 1.30), which considers whether a pod is ready to be scheduled. [Learn more...](https://docs.spot.io/ocean/features/scaling-kubernetes?id=support-for-pod-scaling-readiness)

*  **OCN-0028: September 02, 2024:** (**<font color="#FC01CC">AKS</font>**) The AKS Cluster overview dashboard now includes details about Ocean savings from bin packing and a panel that displays a cluster-level summary with widgets for CPU /Memory /GPU resources allocated to pods. [Learn more...](https://docs.spot.io/ocean/ocean-aks-cloud-cluster-overview)

</div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">August, 2024 - click to view</summary>
 
<div style="padding-left:16px">

*  **OCN-0027: August 29, 2024:** (**<font color="#FC01CC">AWS Kubernetes</font>**) Enable Utilize Commitments per Virtual Node Group: You can now distribute reservation instances/savings plans according to Virtual Node Groups for different types of workloads on the same cluster via the `utilizeReservedInstances` and `utilizeCommitments` attributes. [Learn more...](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=turn-onoff-utilize-commitments-per-virtual-node-group)

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






















