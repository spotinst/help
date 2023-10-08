# Import an AKS Cluster to Ocean 

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications. 

This procedure describes how to use the Spot Console to connect an existing AKS cluster to Ocean. 

## Prerequisites 

* [Valid AKS Managed cluster with at least one node pool (for control-plane)](ocean/getting-started/aks/aks-prerequisites?id=valid-aks-managed-cluster-with-at-least-one-node-pool-for-control-plane). 
* [Connect Spot account to Azure Subscription](ocean/getting-started/aks/aks-prerequisites?id=connect-spot-account-to-azure-subscription).
* [Verify Connection to Spot Account](ocean/getting-started/aks/aks-prerequisites?id=verify-connection-to-spot-account).
* [Enable Ocean to launch Spot VMs for Workloads](ocean/getting-started/aks/aks-prerequisites?id=enable-ocean-to-launch-spot-vms-for-workloads). 
* [Install Helm, Terraform or Kubectl (Kubernetes command-line tool)](ocean/getting-started/aks/aks-prerequisites?id=install-helm-terraform-or-kubectl-kubernetes-command-line-tool).

## Import Cluster  

When all of the prerequisites are completed, you are ready to import an AKS cluster to Ocean. The instructions below describe the steps to import an existing AKS cluster to Ocean using the Create Cluster wizard in the Spot console. 

You can perform similar steps to import an AKS cluster to Ocean using the Ocean AKS API using [oceanAKSClusterImport](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterImport) or Terraform providers for Ocean AKS cluster [ocean-aks-np-k8s](https://registry.terraform.io/modules/spotinst/ocean-aks-np-k8s/spotinst/latest), Ocean AKS VNG [ocean_aks_np_virtual_node_group](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aks_np_virtual_node_group).  

* Step1: Use the Ocean Create Cluster Wizard to import an AKS cluster 
    * Step 1.1 Select AKS cluster 
    * Step 1.2 Define VNG Template 
    * Step 1.3: Connectivity  
* Step 2: Create a VNG (Virtual Node Group) 
* Step 3: Migrate Workloads to Ocean from the Azure Portal

### Step 1 – Use the Ocean Create Cluster Wizard to import an AKS cluster  

Launch the Create Ocean Cluster Wizard in the Spot Console.  
In the top left menu, click **Ocean**.   
* For **new** Ocean AKS accounts with no existing Clusters, click **Create Cluster** to launch the Ocean Create/Import cluster wizard. 
* For **existing** Ocean AKS accounts with active Ocean AKS clusters, select **Cloud Clusters** on the left menu and then Click **Create Cluster** on top right above the cluster list table. 

Follow the steps in Create Ocean Cluster Wizard to import the AKS cluster. 

### Step 1.1: Select AKS Cluster  

1. In the Resource Group drop-down list, select the Azure Resource Group for the AKS cluster. 
2. In the AKS Cluster Name drop-down list, select the AKS Cluster Name to import (if there are multiple clusters in the resource group, you need to import them one at a time) and click **Next**.

![connect-aks-cluster-7](https://github.com/spotinst/help/assets/106514736/bc7d14b1-d56a-4554-a265-20501a65fbac)

Additional tips:  

* The AKS cluster name is copied to the Ocean Cluster name (Cluster Identifier). The Ocean Cluster Identifier is derived from the Ocean Cluster name plus an 8-digit auto-generated random string to ensure uniqueness. When [importing the Ocean cluster to Terraform](https://spot.io/blog/import-spot-resources-into-terraform/), in order to use Terraform to update the cluster, use the `clusterIdentifier` (not just the Cluster name) e.g. `aks-clsuter1-2475a239`. It should match the `clusterIdentifier` used to install Ocean controller in the AKS cluster (Ocean Controller is installed in Step 1.3: Connectivity listed below). 
* If there are no AKS clusters in the drop-down menu, the permissions may be incorrect, or the role may be assigned to the wrong resource group (no AKS clusters are available in the existing resource group).  

![connect-aks-cluster-8](https://github.com/spotinst/help/assets/106514736/4903d28c-e6e1-4978-86ba-b4f094797ffa)

### Step 1.2: VNG Template  

Select the node pool for the VNG Template. A VNG Template contains cluster default node configuration that VNGs ([Virtual Node Groups](ocean/features/vngs/?id=virtual-node-groups)) inherit from. Ocean VNG Template contains cluster default node configuration. For example, availability zones, node pool properties (OS type, OS disk type/size, max pods), auto-scaling configuration (min/max nodes, headroom) as well as default attributes - labels, taints and annotations. 

You can view and edit the VNG Template configuration in JSON. When the VNG Template configuration is complete, click **Next**. 

![connect-aks-cluster-9](https://github.com/spotinst/help/assets/106514736/f9577321-d7f2-4fdd-b1ad-d2d4a68052aa)

Additional Tips: 

* Some VNG Template properties may not be edited once the cluster is created. Changing the node pool properties (OS type, OS disk type or OS disk size, Kubernetes version) after the cluster is created, creates VNGS that are not supported, and the configuration will be disregarded.  
* The wizard selects the default system node pool if no node pool is selected for the VNG Template. 
* Ocean VNG can have one or more node pools with different VM series, VM sizes, and lifecycle. All node pools inherit properties and attributes (labels, taints, tags, annotations) from the VNG. VNGs provide infrastructure guardrails and customization for workloads.  
* At least one VNG needs to be defined in the Ocean AKS cluster. A VNG inherits properties and attributes from the VNG Template.  

### Step 1.3: Connectivity  

This step describes how the Ocean integration starts and the installation of the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/) (as a Deployment) in your AKS cluster. This establishes the connection between the Ocean SaaS backend engine and your cluster. This step does not affect existing workloads which continue to run on existing nodes in node pools managed by AKS. 

Complete the following steps: 

1. Create a Spot token (or use an existing one) and copy it to the text box. 
2. Use either Helm (preferred option), Terraform (Ocean Controller module [ocean-controller](https://registry.terraform.io/modules/spotinst/ocean-controller/spotinst/latest)) or Kubectl to install the Ocean Kubernetes controller. 
* **Helm**: Install the Ocean controller with Helm is preferred since it allows you to customize using command line options or using `values.yaml`. Install **Helm 3.x** and add the `spotinst` repo. Then use the `helm install` command with set command line options to install Ocean controller in separate spot-ocean namespace 
* **Kubectl**: Run the controller `init.sh` (bash) script on a workstation with `kubectl` command-line and ensure that kube-config is set to the AKS cluster context. The script installs the controller in the kube-system namespace (default) and creates the corresponding Kubernetes components - controller deployment, secret, config-map, service account. 
3. Click **Test Connectivity** to confirm that the Ocean Controller is functioning in the cluster. Allow approximately two minutes for the test to complete. It is successfully completed when a green OK is displayed as soon as the Ocean controller pod runs in the AKS cluster and is able to communicate with the Ocean SaaS engine.  

Additional Tips:  

* If the controller connectivity failed, check the token created and verify you have the right permissions. Azure custom role with required [Ocean AKS permissions [JSON]](https://github.com/yaruslavm/spot-Ocean/blob/main/Spot%20Azure%20Infra%20Permissions%20v2.json) should be applied at least 30 -60 min before you start the AKS cluster import or migration.  
* To make changes to the controller init.sh script, download it, edit it and then execute it from the command line (bash shell). 
* For private AKS clusters with limited or no Internet connectivity, please see [Connect to Private AKS cluster](https://docs.spot.io/ocean/tutorials/connect-an-aks-private-cluster?id=connect-an-aks-private-cluster).  
  *Use a proxy or VPN to add or update the spotinst Helm repo in the private cluster. You need to create the config-map manually. 
  *For Kubectl, you cannot run the controller init script, since remote connectivity is disabled. You need to manually create the config-map and install the controller in the AKS using VPN or proxy.  

When the Ocean Controller connectivity is successful, click **Next**. 

### Step 1.4: Review and Configure  

You can view and edit the Ocean cluster configuration and the VNG Template in JSON.   

You can update Ocean AKS cluster autoscaling configuration; cluster resource limits (vCPU and memory), scale down percentage, automatic headroom. 

You can modify the VNG template configuration in this JSON as well.

![connect-aks-cluster-10](https://github.com/spotinst/help/assets/106514736/d9c2d5a1-06a1-4876-9c9a-dd7a8888a488)

When you finish editing the Ocean cluster configuration, click **Create**. This creates the Ocean managed AKS cluster. 
When you finish importing the AKS cluster to an Ocean AKS Cluster, it will appear in the Cloud Clusters list under the left Ocean menu. 

The Ocean Auto-scaler cannot scale up until you create a VNG. For Ocean to start launching nodes, you need to create at least one VNG for Ocean to use.  After you close the Create Cluster wizard, the VNG tab opens to create the first VNG.  

**Note**:  

* This does not change existing workloads, nodes or node pools in the AKS cluster. It does not disable the auto-scaling, the cluster Auto-scaler is still enabled. It does not automatically roll the workloads to Ocean.  
* In the Azure portal, turn on manual auto-scaling (turn off the cluster Auto-scaler) and then perform workload migration by scaling down existing node pools. 

![connect-aks-cluster-11](https://github.com/spotinst/help/assets/106514736/9d4e13f0-3e6a-4b91-adda-914e42c31068)

### Step 2: Create a VNG (Virtual Node Group) 

Create a VNG ([Virtual Node Group](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups)) so Ocean can create node pools and launch nodes. To finish setting up your cluster you must create at least one VNG. Ocean creates node pools and launches nodes depending on the VNG configuration.   

You can import the configuration from an existing node pool in Azure or manually create a VNG. All properties are inherited from the VNG template created in Step 1.1: Create Ocean AKS Cluster.  

![connect-aks-cluster-12](https://github.com/spotinst/help/assets/106514736/ba679763-9165-48aa-9ad6-956a14a659a6)
 
You can edit the VNG JSON configuration. Define AZs, node pool properties (max Pods, OS Type, OS Disk Type, OS Disk Size etc.), min/max node counts, auto-scaling strategy (Spot percentage, fallback to On-Demand). You can create labels, tags, taints. When you are done, click **Save** to complete the VNG creation.  

Once the VNG is created, some properties like node pool properties (OS types, OS Disk type) cannot be edited. You need to delete the VNG and create a new one.  

To ensure faster workload migration to Ocean from existing unmanaged node pools with minimum down time, launch some nodes in the new VNG you just created.  

Select **VNG Actions** and **Launch nodes**. Specify how many nodes you want to launch. 

You can create more VNGs to handle different workload requirements. For example:   

* VNG with regular VMs – for workloads that cannot run on Spot nodes and must run on Regular (On-demand) VMs e.g. statefulSets, Spark drivers, Kafka producers.  
* Performance VNG – for workloads that need high performance CPUs (intel v4 or v5), minimum vCPU 8 or higher or larger OS Disk size, VMs with minimum disk 4 or higher. 
* AI/ML VNG – for workloads that need GPUs, say GPU count: 2-4 and specific VM series r GPU families 
* Windows VNG - for workloads that need Windows nodes.

![connect-aks-cluster-13](https://github.com/spotinst/help/assets/106514736/a48344bd-37ed-47af-9c76-35892de1b62b)

The cluster and VNG are created, and the basic configurations are complete.  

### Step 3: Migrate Workloads to Ocean from the Azure Portal 

This section describes how to start migrating workloads to Ocean.  

1. In the Azure portal, select unmanaged node pools that don’t have names that start with Ocean managed _aks-onmp-xxxxxx_, and select **Scale node pool**. 

![connect-aks-cluster-14](https://github.com/spotinst/help/assets/106514736/2d5b9386-453e-4ab4-994b-049832c9bd11)

2. Set Scale method to Manual to enable manual scaling. This turns off auto-scaling using the Kubernetes cluster Auto-scaler. 

![connect-aks-cluster-15](https://github.com/spotinst/help/assets/106514736/d3d6589f-b304-46d5-a54f-00e277388de4)

3. Gradually reduce the node pool node count to zero in order to scale down unmanaged node pools. When the Node Count is reduced, the pods running on the nodes are evicted and they become pending pods that can not be scheduled. Ocean launches nodes from the appropriate VNG and creates node pools with scale count so that the Kubernetes scheduler can schedule these pods.

To reduce down-time for critical workloads while migrating, you can:  

* launch some nodes in the VNGs you just created earlier. Select **VNG Actions** and in the dropdown menu, select **Launch nodes**. Specify how many nodes to launch (3-5 nodes).  
* or increase VNG minimum node count to approximately 5 nodes.  
* or add VNG headroom (manual) for approximately 16 vCPUs and memory 32 GiB.  

For large clusters with more than 20 nodes, scale down nodes in batches, approximately 2-5 nodes at a time. This reduces workload downtime and provides sufficient time for Ocean to scale up nodes. 

#### Enable Ocean to Launch Spot for Workloads During Workload Migration VMs  

For Ocean to launch Spot VMs, the workload needs to add [Spot toleration](https://learn.microsoft.com/en-us/azure/aks/spot-node-pool#schedule-a-pod-to-run-on-the-spot-node) (the node affinity is not required). If there is no Spot toleration, Ocean will launch regular On-demand nodes during workload migration. Learn how to [enable Ocean to launch Spot VMs for workloads](ocean/getting-started/aks?id=enable-ocean-to-launch-spot-vms-for-workloads). 

**Include**

```
spec: 
  tolerations: 
  - key: "kubernetes.azure.com/scalesetpriority" 
    operator: "Equal" 
    value: "spot" 
    effect: "NoSchedule"
```

## What’s Next?

- Learn how to [Connect an AKS Private Cluster](ocean/tutorials/connect-an-aks-private-cluster).
- Learn more about Ocean’s [scaling](ocean/features/scaling-kubernetes) and [headroom](ocean/features/headroom) features.

