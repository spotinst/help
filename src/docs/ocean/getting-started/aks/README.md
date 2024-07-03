# Import an AKS Cluster to Ocean 

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications. 

This procedure describes using the Spot Console to connect an existing AKS cluster to Ocean. 

## Prerequisites 

* [Valid AKS Managed cluster](ocean/getting-started/aks/aks-prerequisites?id=valid-aks-managed-cluster-with-at-least-one-node-pool-for-control-plane). 
* [Connect Spot account to Azure Subscription](ocean/getting-started/aks/aks-prerequisites?id=connect-spot-account-to-azure-subscription).
* [Verify Connection to Spot Account](ocean/getting-started/aks/aks-prerequisites?id=verify-connection-to-spot-account).
* [Enable Ocean to launch Spot VMs for Workloads](ocean/getting-started/aks/aks-prerequisites?id=enable-ocean-to-launch-spot-vms-for-workloads). 
* [Update Helm or install via Terraform or Kubectl (Kubernetes command-line tool)](ocean/getting-started/aks/aks-prerequisites?id=install-helm-terraform-or-kubectl-kubernetes-command-line-tool).


## What to do About AKS Private Clusters

Ocean supports:

* Management and optimization of AKS private clusters. 
* Any AKS private cluster configuration, provided the Ocean Controller can establish outbound communication with the Spot SaaS control plane.  
 
This diagram shows the outbound communication connection for AKS private clusters. The Spot SaaS environment on the right is hosted in the public cloud domain and requires internet connectivity for access. 
Your AKS environment and the components we access to operate the AKS clusters are on the left. In this example, we access the Spot Ocean Controller.  

![AKS-PRIVATE_CLUSTER-1](https://github.com/spotinst/help/assets/159915991/6f9107f4-f6a5-469a-a55b-bde1543cb165)

The Ocean Controller is an AKS deployment that resides in the cluster and communicates with the Spot SaaS environment to trigger scale up and scale down.  

The Ocean Controller needs an outbound connection to Spot’s public IP address. If the Ocean Controller fails to report to SaaS, the cluster's scaling and management will not function correctly. 

To enable the outbound connection, you must configure the internal routing, firewall rules, and/or proxy according to your environment's existing security methods. 

Refer to the Microsoft documentation to learn about Microsoft Azure Native configurations: 

* [Create, change, or delete a route table](https://learn.microsoft.com/en-us/azure/virtual-network/manage-route-table) 
* [Customize cluster egress with a user-defined routing table in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/egress-udr)
* [Limit network traffic with Azure Firewall in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/limit-egress-traffic?tabs=aks-with-system-assigned-identities)


## Import Cluster  

You can import an AKS cluster to Ocean when all prerequisites are completed. The instructions below describe the steps to import an existing AKS cluster to Ocean using the Create Cluster wizard in the Spot console. 

You can perform similar steps to import an AKS cluster to Ocean using the Ocean AKS API using [oceanAKSClusterImport](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterImport) or Terraform providers for Ocean AKS cluster [ocean-aks-np-k8s](https://registry.terraform.io/modules/spotinst/ocean-aks-np-k8s/spotinst/latest), Ocean AKS VNG [ocean_aks_np_virtual_node_group](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aks_np_virtual_node_group).  

* Step1: Use the Ocean Create Cluster Wizard to import an AKS cluster 
    * Step 1.1 Select AKS cluster 
    * Step 1.2 Define VNG Template 
    * Step 1.3: Connectivity
    * Step 1.4 Automatic Spot Tolerance Injection (optional)
    * Step 1.5: Review and Configure 
* Step 2: Create a VNG (Virtual Node Group) 
* Step 3: Migrate Workloads to Ocean from the Azure Portal 

### Step 1 – Use the Create Ocean Cluster Wizard to import an AKS cluster  

To launch the Create Ocean Cluster Wizard in the Spot Console:  
* In the top left menu, click **Ocean**.   
   * For **new** Ocean AKS accounts with no existing Clusters, click **Create Cluster** to launch the Create Ocean Cluster wizard. 
   * For **existing** Ocean AKS accounts with active Ocean AKS clusters, select **Cloud Clusters** on the left menu and then click **Create Cluster** on top right above the cluster list table.

To import the AKS cluster, follow the steps in the Create Ocean Cluster Wizard

![ocean-aks-newclus-create](https://github.com/spotinst/help/assets/159915991/8e6ddd6c-85f5-40ee-a608-802af4ad6ee2)

### Step 1.1: Select AKS Cluster

Before initiating the import process, ensure Ocean has the necessary permissions to create and update node pools for autoscaling. Verify your IAM permissions at both the subscription and resource group levels. Specifically, confirm that you have the required permissions for the Ocean AKS product.

1. In the Create Ocean Cluster wizard, select your Azure resource group from the **Resource Group** drop-down menu. 
2. Select your cluster name from the **AKS Cluster Name** drop-down menu.

   *  If you have multiple clusters in the resource group, you must import them one at a time. 

   * The AKS cluster name is copied to the Ocean Cluster name, also known as the Cluster Identifier. To ensure uniqueness, the Ocean Cluster Identifier is derived by appending an 8-digit auto-generated random string to the Ocean Cluster name. When [importing the Ocean cluster to Terraform](https://spot.io/blog/import-spot-resources-into-terraform/), and updating the cluster using Terraform, you must use the `clusterIdentifier` (not just the Cluster name). For example, the `clusterIdentifier` could be `aks-cluster1-2475a239`. This `clusterIdentifier` should match the one used when installing the Ocean Controller in the AKS cluster (see Step 1.3: Connectivity). 

3. Click **Test Cluster Permissions** and wait for the test to be completed. 

View this sample of [AKS permissions](https://docs.spot.io/administration/api/spot-policy-aks-azure) and the [description of the AKS Permissions](https://docs.spot.io/administration/api/aks-permissions-desc).

>**Important:** If you can't complete Step 1.1 due to **Missing Permissions**, refer to the following:

*   **Issue when selecting the Resource Group:** First, check that your Spot account is correctly set up. We recommend deleting the account and setting it up again with the correct Subscription ID and Tenant ID. If the issue persists: click **Add Permissions** to run the Missing Permissions wizard (described below). Select the **Resource Group permission level** (Spot IAM role) in the Missing Permissions dialog box.

*   **Issue when selecting Cluster Name:** If no AKS clusters are in the drop-down list, the permissions may be incorrect, or the IAM role may be assigned to the wrong resource group (no AKS clusters are available for the required resource group). Click **Add Permissions** to run the Missing Permissions wizard (described below). Select the **Resource Group permission level** (Spot IAM role) in the Missing Permissions dialog box.

*   **Issue when running Test Cluster Permissions:** Your Spot account may not have permissions for the Ocean AKS product or may have read-only permissions at either the subscription level or the resource group level. Click **Add Permissions** to run the Missing Permissions wizard for subscription and resource group levels (see below).

To run the Missing Permissions wizard: 

1. If you received a Missing Permissions message when selecting an AKS Cluster, Click **Add Permissions**.  

![ocean-aks-newclus-missingsubsrgs](https://github.com/spotinst/help/assets/159915991/e3d201a1-9d94-4dff-b055-47b0e1f4d216)

2. In the Missing permissions dialog box, select the required permission level from the drop-down list; either **Resource Group** or **Account Subscription**.

   * For the Account Subscription level, update the Subscription ID in the field on the right of the dialog box. You can obtain the subscription ID by either creating a new Spot account in Azure or updating the existing Spot account.
   * For the Resource Group level, enter the name of your AKS resource group and the name of its corresponding infrastructure resource group in the field on the right of the dialog box. You must add both, separated by a comma. 
3. Continue by downloading the Ocean AKS JSON permissions.

![ocean-aks-newclus-missingdownload](https://github.com/spotinst/help/assets/159915991/f5b6b6c9-c8a7-4ca7-8c96-63e0ba60cbce)

4. Continue by creating a new Azure custom role or import permissions to an existing role. Copy the permissions and apply them via the command line. 

![ocean-aks-newclus-missingview](https://github.com/spotinst/help/assets/159915991/2648fe75-46fa-4cfc-96e3-2c63d5cd1907)

>**Note**: You can alternatively apply permissions from the console UI.

### Step 1.2: VNG Template  

Select the node pool for the VNG Template. A VNG Template contains cluster default node configuration that VNGs ([Virtual Node Groups](ocean/features/vngs/?id=virtual-node-groups)) inherit from. Ocean VNG Template contains cluster default node configuration. For example, availability zones, node pool properties (OS type, OS disk type/size, max pods), auto-scaling configuration (min/max nodes, headroom) as well as default attributes - labels, taints and annotations. 

You can view and edit the VNG Template configuration in JSON. When the VNG Template configuration is complete, click **Next**. 

![connect-aks-cluster-9](https://github.com/spotinst/help/assets/106514736/f9577321-d7f2-4fdd-b1ad-d2d4a68052aa)

Additional Tips: 

* Some VNG Template properties may not be edited once the cluster is created. Changing the node pool properties (OS type, OS disk type or OS disk size, Kubernetes version) after the cluster is created, creates VNGS that are not supported, and the configuration will be disregarded.  
* The wizard selects the default system node pool if no node pool is selected for the VNG Template. 
* Ocean VNG can have one or more node pools with different VM series, VM sizes, and lifecycle. All node pools inherit properties and attributes (labels, taints, tags, annotations) from the VNG. VNGs provide infrastructure guardrails and customization for workloads.  
* At least one VNG must be defined in the Ocean AKS cluster. A VNG inherits properties and attributes from the VNG Template.  

### Step 1.3: Connectivity  

This step describes how the Ocean integration starts and the installation of the [Ocean Controller](ocean/tutorials/ocean-controller-v2/) (as a Deployment) in your AKS cluster. This establishes the connection between the Ocean SaaS backend engine and your cluster. This step does not affect existing workloads which continue to run on existing nodes in node pools managed by AKS. 

Complete the following steps: 

1. Create a Spot token (or use an existing one) and copy it to the text box. 

2. To install the Ocean Kubernetes controller, use either Helm (the preferred option), Terraform (the Ocean Controller module [ocean-controller](https://registry.terraform.io/modules/spotinst/ocean-controller/spotinst/latest)), or Kubectl. 

* **Helm**: Installing the Ocean controller with Helm is preferred since it allows you to customize using command-line options or `values.yaml`. Install **Helm 3.x** and add the `spotinst` repo. Then, use the `helm install` command with set command-line options to install the Ocean controller in a separate spot-ocean namespace. 

* **Kubectl**: Run the controller `init.sh` (bash) script on a workstation with the `kubectl` command line and ensure that kube-config is set to the AKS cluster context. The script installs the controller in the kube-system namespace (default) and creates the corresponding Kubernetes components—controller deployment, secret, config-map, and service account. 

3. Click **Test Connectivity** to confirm that the Ocean Controller is functioning in the cluster. Allow approximately two minutes for the test to complete. It is successfully completed when a green OK is displayed as soon as the Ocean Controller pod runs in the AKS cluster and can communicate with the Ocean SaaS engine.  

Additional Tips:  

* If the controller connectivity was unsuccessful, check the token created and verify you have the right permissions. Azure custom role with required [Ocean AKS permissions [JSON]](https://github.com/yaruslavm/spot-Ocean/blob/main/Spot%20Azure%20Infra%20Permissions%20v2.json) should be applied at least 30 -60 min before you start the AKS cluster import or migration.  
* To make changes to the controller init.sh script, download it, edit it, and then execute it from the command line (bash shell). 
* For private AKS clusters with limited or no Internet connectivity, please see [What to do About Private AKS Clusters](https://docs.spot.io/ocean/getting-started/aks/?id=what-to-do-about-aks-private-clusters).  
  *Use a proxy or VPN to add or update the spotinst Helm repo in the private cluster. You need to create the config-map manually. 
  *For Kubectl, you cannot run the controller init script since remote connectivity is disabled. You need to manually create the config-map and install the controller in the AKS using a VPN or proxy.  

When the Ocean Controller connectivity is successful, click **Next**. 

### Step 1.4: Automatic Spot Tolerance Injection (optional) 

![ocen-aks-auto-spot-toleration-injection](https://github.com/spotinst/help/assets/159915991/7554d272-4e65-4112-8fd4-d3a54a5e994c)

Microsoft Azure / AKS does not allow pods to run on Spot VMs by default. Rather, it adds a `NoSchedule` taint to all Spot nodes/node pools:`kubernetes.azure.com/scalesetpriority=spot:NoSchedule`

Spot toleration must be injected into the pod to schedule a workload on a Spot node. Otherwise, the workload will default to a regular On-demand (OD) node.

This step lets you optionally install the Spot admission controller, a k8 mutating webhook that automatically injects the spot toleration at the namespace level, enabling AKS workload pods to run on Spot VMs by default. 

A mutating webhook is a Kubernetes dynamic admission controller that allows for modifying resources before they are persisted in the Kubernetes API server. 

The Spot toleration admission controller webhook is triggered by pod create or update events. When web-app deployment tries to scale up and add new pods or update/restart existing pods, the kube-apiserver sends an admission request to the Spot toleration webhook and, based on the policy, injects the spot toleration before the pod is deployed. 

Prerequisites:

*  The Spot admission controller is a deployment with two pods. You must define a PEM certificate as part of CA (Certificate Authority) bundle in the manifest yaml. 
* Ensure you have OpenSSL installed in your environment or use [Azure Cloud Shell](https://portal.azure.com/). 
*  Your current k8s context must be the context of your cluster.

Information about Namespaces: 

*  The Spot admission controller injects Spot toleration in pods for all namespaces, except those specifically excluded using label spot.io/inject-aks-spot-toleration=false 
*  The Spot admission controller automatically excludes all [AKS system namespaces](https://learn.microsoft.com/en-us/azure/aks/faq#can-i-use-admission-controller-webhooks-on-aks) with control-plane labels like kube-system.

>**Notes**:

*  You can adjust your non-system namespaces after installation (described later). 
*  You can install the Spot admission controller from this wizard or later (after importing the cluster) from the Cluster **Actions** drop-down menu. 
*  If the Spot admission controller is not installed in your cluster, the banner at the top of the screen displays installation instructions.

To Install the Spot Admission Controller:

1.  To get started and install the Spot admission controller, run the Spot Tolerance Injection screen script:

```
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks/spot-toleration-injection/init.sh | bash 
```

2. Restart your existing workload pods.
3. Exclude namespaces, if necessary

To exclude a specific namespace:

a. Add the namespace label:spot.io/inject-aks-spot-toleration=false with the following script:

```
# Adding Spot webhook exclude label to namespace: <namespace> 
kubectl label namespace <namepsace> spot.io/inject-aks-spot-toleration=false
```
b. Restart the pods in the namespace so that the Spot webhook can update the Spot toleration for these pods.

```
# Get all pods in the namespace 
pods=$(kubectl get pods -n <namepace> -o \ jsonpath='{.items[*].metadata.name}') 
# Loop through each 
for pod in $pods; do echo "Deleting pod: $pod" kubectl delete pod $pod -n <namespace> done 
```
>**Note**: To enable a workload to run on Regular / OD nodes, add Spot label `spot.io/node-lifecycle=od` 

### Step 1.5: Review and Configure  

You can view and edit the Ocean cluster configuration and the VNG Template in JSON.   

You can update Ocean AKS cluster autoscaling configuration, cluster resource limits (vCPU and memory), scale-down percentage, and automatic headroom. 

You can modify the VNG template configuration in this JSON as well.

![connect-aks-cluster-10](https://github.com/spotinst/help/assets/106514736/d9c2d5a1-06a1-4876-9c9a-dd7a8888a488)

When you finish editing the Ocean cluster configuration, click **Create**. This creates the Ocean-managed AKS cluster. 
When you finish importing the AKS cluster to an Ocean AKS Cluster, it will appear in the Cloud Clusters list under the left Ocean menu. 

The Ocean Auto-scaler cannot scale up until you create a VNG. For Ocean to start launching nodes, you need to create at least one VNG for Ocean to use.  After you close the Create Cluster wizard, the VNG tab opens to create the first VNG.  

**Note**:  

* This does not change the AKS cluster's existing workloads, nodes, or node pools. It does not turn off auto-scaling, but the cluster Auto-scaler is still enabled. It does not automatically roll the workloads to Ocean.  
* In the Azure portal, turn on manual auto-scaling (turn off the cluster Auto-scaler) and perform workload migration by scaling down existing node pools. 

![connect-aks-cluster-11](https://github.com/spotinst/help/assets/106514736/9d4e13f0-3e6a-4b91-adda-914e42c31068)

### Step 2: Create a VNG (Virtual Node Group) 

Create a VNG ([Virtual Node Group](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups)) so Ocean can create node pools and launch nodes. To finish setting up your cluster, you must create at least one VNG. Ocean creates node pools and launches nodes depending on the VNG configuration.   

You can import the configuration from an existing node pool in Azure or manually create a VNG. All properties are inherited from the VNG template created in Step 1.1: Create Ocean AKS Cluster.  

![connect-aks-cluster-12](https://github.com/spotinst/help/assets/106514736/ba679763-9165-48aa-9ad6-956a14a659a6)
 
You can edit the VNG JSON configuration. Define AZs, node pool properties (max Pods, OS Type, OS Disk Type, OS Disk Size, etc.), min/max node counts, and auto-scaling strategy (Spot percentage, fallback to On-Demand). You can create labels, tags, and taints. When you are done, click **Save** to complete the VNG creation.  

Once the VNG is created, some properties, such as node pool properties (OS types, OS Disk type), cannot be edited. You need to delete the VNG and create a new one.  

To ensure faster workload migration to Ocean from existing unmanaged node pools with minimum downtime, launch some nodes in the new VNG you just created.  

Select **VNG Actions** and **Launch nodes**. Specify how many nodes you want to launch. 

You can create more VNGs to handle different workload requirements. For example:   

* VNG with regular VMs – for workloads that cannot run on Spot nodes and must run on Regular (On-demand) VMs e.g. statefulSets, Spark drivers, Kafka producers.  
* Performance VNG—for workloads that need high-performance CPUs (Intel v4 or v5), a minimum vCPU 8 or higher or a larger OS Disk size, and VMs with a minimum disk 4 or higher. 
* AI/ML VNG – for workloads that need GPUs, say GPU count: 2-4 and specific VM series r GPU families 
* Windows VNG - for workloads that need Windows nodes.

![connect-aks-cluster-13](https://github.com/spotinst/help/assets/106514736/a48344bd-37ed-47af-9c76-35892de1b62b)

The cluster and VNG are created, and the basic configurations are complete.  

### Step 3: Migrate Workloads to Ocean from the Azure Portal 

See [Migrate the Workload to Ocean on AKS](https://docs.spot.io/ocean/tutorials/migrate-workload-aks)

## Related Topics

- Learn how to [Connect an AKS Private Cluster](ocean/tutorials/connect-an-aks-private-cluster).
- Learn more about Ocean’s [scaling](ocean/features/scaling-kubernetes) and [headroom](ocean/features/headroom) features.

