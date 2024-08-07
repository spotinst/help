# Import an AKS Cluster to Ocean via the Console

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications.   

To enable Ocean to start managing your AKS cluster, you need to connect the cluster to Spot. This page includes the procedures to connect an existing AKS cluster to Ocean using the Spot console.

## Prerequisites 

* [Valid AKS Managed cluster](ocean/getting-started/aks/aks-prerequisites?id=valid-aks-managed-cluster-with-at-least-one-node-pool-for-control-plane). 
* [Connect Spot account to Azure Subscription](ocean/getting-started/aks/aks-prerequisites?id=connect-spot-account-to-azure-subscription).
* [Verify Connection to Spot Account](ocean/getting-started/aks/aks-prerequisites?id=verify-connection-to-spot-account).
* [Update Helm or install via Terraform or Kubectl (Kubernetes command-line tool)](ocean/getting-started/aks/aks-prerequisites?id=install-helm-terraform-or-kubectl-kubernetes-command-line-tool).

## Support for Regions Without Availability Zones

Ocean supports AKS with global regions, so you can create and import clusters set with the global regions in [Azure](https://azure.microsoft.com/en-gb/explore/global-infrastructure/geographies/#geographies) that currently do not support Availability Zones. For these clusters, you create resources at the regional level.  
After import, you can view a global region in the Virtual Node Groups tab, where Availability Zones = None.

![ocean-vng-regions](https://github.com/user-attachments/assets/86d2152d-6cf5-4ea7-8538-e8253cd6a90a)

## What to do About AKS Private Clusters

Ocean supports:

* Management and optimization of AKS private clusters. 
* Any AKS private cluster configuration, provided the Ocean Controller can establish outbound communication with the Spot SaaS control plane.  

<details>
   <summary markdown="span">More about...</summary>

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

 </details>

## Import Cluster  

You can import an AKS cluster in the Ocean console Create Cluster Wizard (described in this topic).

Other options:

* Spot API using [oceanAKSClusterImport](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterImport) 
* Terraform providers for Ocean AKS cluster [ocean-aks-np-k8s](https://registry.terraform.io/modules/spotinst/ocean-aks-np-k8s/spotinst/latest), Ocean AKS VNG [ocean_aks_np_virtual_node_group](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aks_np_virtual_node_group).  

After importing a cluster, you must Migrate Workloads to Ocean from the Azure Portal.

## Launch the Create Ocean Cluster Wizard

To launch the Create Ocean Cluster Wizard in the Spot Console:  
* In the top left menu, click **Ocean**.   
   * For **new** Ocean AKS accounts with no existing Clusters, click **Create Cluster** to launch the Create Ocean Cluster wizard. 
   * For **existing** Ocean AKS accounts with active Ocean AKS clusters, select **Cloud Clusters** on the left menu and then click **Create Cluster** on top right above the cluster list table.

To import the AKS cluster, follow the steps in the Create Ocean Cluster Wizard:

* Step 1: Select an AKS cluster. 
* Step 2: Create Your First Virtual Node Group.  
* Step 3: Connectivity.
* Step 4: Automatic Spot Tolerance Injection (optional).
* Step 5: Review and Configure. 

![aks-cluster-wizard-overall](https://github.com/user-attachments/assets/ff3546a7-fb43-45b6-a86b-5c20aa3e9b72)

## Step 1: Select an AKS Cluster

Before starting the import process, ensure Ocean has the necessary permissions to create and update node pools for autoscaling. Verify your IAM permissions at both the subscription and resource group levels. Confirm that you have the required permissions for the Ocean AKS product.

1. In the Create Ocean Cluster wizard, select your Azure resource group from the **Resource Group** drop-down menu. 
2. Select your cluster name from the **AKS Cluster Name** drop-down menu.

   *  If you have multiple clusters in the resource group, import them one at a time. 

   * The AKS cluster name is copied to the Ocean Cluster name, also known as the Cluster Identifier. To ensure uniqueness, the Ocean Cluster Identifier is derived by appending an 8-digit auto-generated random string to the Ocean Cluster name. When [importing the Ocean cluster to Terraform](https://spot.io/blog/import-spot-resources-into-terraform/), and updating the cluster using Terraform, use the `clusterIdentifier` (not just the Cluster name). For example, the `clusterIdentifier` could be `aks-cluster1-2475a239`. This `clusterIdentifier` should match the one used when installing the Ocean Controller in the AKS cluster (see Step 1.3: Connectivity). 

3. Click **Test Cluster Permissions** and wait for the test to be completed. 

View this sample of [AKS permissions](https://docs.spot.io/administration/api/spot-policy-aks-azure) and the [description of the AKS Permissions](https://docs.spot.io/administration/api/aks-permissions-desc).

>**Important:** If you can't complete Step 1 due to **Missing Permissions**, refer to the following:

*   **Issue when selecting the Resource Group:** First, check that your Spot account is correctly set up. We recommend deleting the account and setting it up again with the correct Subscription ID and Tenant ID. If the issue persists, click **Add Permissions** to run the Missing Permissions wizard (described below). Select the **Resource Group permission level** (Spot IAM role) in the Missing Permissions dialog box.

*   **Issue when selecting Cluster Name:** If no AKS clusters are in the drop-down list, the permissions may be incorrect, or the IAM role may be assigned to the wrong resource group (no AKS clusters are available for the required resource group). Click **Add Permissions** to run the Missing Permissions wizard (described below). Select the **Resource Group permission level** (Spot IAM role) in the Missing Permissions dialog box.

*   **Issue when running Test Cluster Permissions:** Your Spot account may not have permissions for the Ocean AKS product or may have read-only permissions at either the subscription or resource group levels. Click **Add Permissions** to run the Missing Permissions wizard for subscription and resource group levels (see below).

To run the Missing Permissions wizard: 

1. If you received a Missing Permissions message when selecting an AKS Cluster, Click **Add Permissions**.  

   <details>
     
      <summary markdown="span">View image</summary>
      
      <img src="https://github.com/spotinst/help/assets/159915991/e3d201a1-9d94-4dff-b055-47b0e1f4d216" />
   
   </details>


3. In the Missing permissions dialog box, select the required permission level from the drop-down list: either **Resource Group** or **Account Subscription**.

   * For the Account Subscription level, update the Subscription ID in the field on the right of the dialog box. You can obtain the subscription ID by either creating a new Spot account in Azure or updating the existing Spot account.
   * For the Resource Group level, enter the name of your AKS resource group and the name of its corresponding infrastructure resource group in the field on the right of the dialog box. You must add both, separated by a comma. 
2. Continue by downloading the Ocean AKS JSON permissions.

   <details>
   
   <summary markdown="span">View image</summary>
   
    <img src="https://github.com/spotinst/help/assets/159915991/f5b6b6c9-c8a7-4ca7-8c96-63e0ba60cbce  " />
 
   </details>

3. Continue by creating a new Azure custom role or import permissions to an existing role. Copy the permissions and apply them via the command line. 

   <details>
   
   <summary markdown="span">View image</summary>
   
    <img src="https://github.com/spotinst/help/assets/159915991/2648fe75-46fa-4cfc-96e3-2c63d5cd1907" />
    
   </details>

>**Note**: You can alternatively apply permissions from the console.

## Step 2: Create Your First Virtual Node Group (Template) 

Virtual Node Groups (VNGs) provide a single abstraction layer for managing different types of workloads on the same cluster.

You must create at least one Virtual Node Group in your Ocean AKS cluster. A Virtual Node Group inherits properties and attributes from the Virtual Node Group Template.

In this step, you select one of your AKS node pools as a [template](https://docs.spot.io/ocean/features/vngs/?id=default-vng) for your other custom [Virtual Node Groups](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups).

<!--* Select a Node Pool for Your Virtual Node Group Template.
* Create More Custom Virtual Node Groups.-->

The selected AKS node pool’s configuration is imported to the Virtual Node Group Template and used for other custom Virtual Node Groups unless you explicitly override. For example, all Virtual Node Groups inherit the image set of the AKS node pool you imported to the Virtual Node Group Template unless the custom Virtual Node Group is set to a different image.

<!-- ### Select a Node Pool for Your First Virtual Node Group-->
To create your first Virtual Node Group:

![aks-cluster-wizard-one-ng-selected](https://github.com/user-attachments/assets/99146522-0fb0-4fdf-b9c7-cd8a0dc140c7)

1. Select a node pool.

2. Optionally edit [Virtual Node Group Template](https://docs.spot.io/ocean/features/vngs/) attributes.

>**Note**: To edit the Virtual Node Group Template in JSON format, click **JSON** at the top right of the screen. Define AZs, node pool properties (max Pods, OS Type, OS Disk Type, OS Disk Size, etc.), min/max node counts, and auto-scaling strategy (Spot percentage, fallback to On-Demand). You can create labels, tags, and taints.

>**Note**: Some Virtual Node Group properties, such as node pool properties (OS types, OS Disk type), cannot be edited. If you need to change these properties, delete the Virtual Node Group and create a new one. 

<!--
A list of all your managed node pools is displayed. The first node pool in the list is the one you selected for your first Virtual Node Group (Template).

![aks-create-cluster-2-managed-node-pools](https://github.com/user-attachments/assets/803d2ddd-c2db-4a75-b853-83b8c2b94180)

### Create More Custom Virtual Node Groups

Define which remaining managed AKS node pools will be imported into Virtual Node Groups by selection in the node pool list. Once you have selected the node pools, Ocean imports their compute configurations into custom Virtual Node Groups. 

Create your custom Virtual Node Groups to handle different workload requirements. For example:   

* VNG with regular VMs—for workloads that cannot run on Spot nodes and must run on Regular (On-demand) VMs, e.g., statefulSets, Spark drivers, and Kafka producers.  
* Performance VNG—for workloads that need high-performance CPUs (Intel v4 or v5), a minimum vCPU 8 or higher or a larger OS Disk size, and VMs with a minimum disk 4 or higher. 
* AI/ML VNG – for workloads that need GPUs, say GPU count: 2-4 and specific VM series r GPU families 
* Windows VNG - for workloads that need Windows nodes.

>**Important**:  Before starting,

* One custom Virtual Node Group is created for each selected node pool. 

* If you don't select any node pools, Ocean creates a Virtual Node Group based on the Template Virtual Node Group.

Example:

Each of the two node pools also represents several other node pools with similar configurations:

1. Select the two node pools for import and leave the rest unselected. You can then consolidate all your node pools into the two custom Virtual Node Groups.
2. click the link on a custom Virtual Node Group and edit attributes if needed.

![aks-create-cluster-2-example-sel-managed-node-pools](https://github.com/user-attachments/assets/47f3b28b-0078-4e33-8fc5-77fea1bdd2ea) -->

### Step 3: Connectivity  

You can now install the [Ocean Controller](ocean/tutorials/ocean-controller-v2/) and establish the connection between the Ocean SaaS and the cluster.

![controller-tab-helm-1](https://github.com/user-attachments/assets/dc732cd1-9158-4fc4-9fda-ade6cae14eac)

To install the Ocean Controller and establish connectivity: 

1. Create a Spot token (or use an existing one) and copy it to the text box. 

2. To install the Ocean Kubernetes Controller, use either Helm (the preferred option) or via script. 

   * **Helm**: This is the preferred method because it lets you customize using command-line options or `values.yaml`. Install **Helm 3.x** and add the `spotinst` repo. Then, use the `helm install` command with set command-line options to install the Ocean controller in a separate spot-ocean namespace.

  ```

   # add repo
 
   helm repo add spot https://charts.spot.io
   helm repo update spot
   
   # install controller
    
   helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller \
   --namespace "spot-ocean" --create-namespace \
   --set spotinst.account=  \
   --set spotinst.clusterIdentifier=  \
   --set spotinst.token=<ENTER YOUR TOKEN HERE> \
   --set metrics-server.deployChart=false
   
   ```
    
   * **Connect via Script**: Use Spot’s script to install the Ocean Controller:

   ```bash

   curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller-v2/scripts/init.sh | \
   SPOTINST_TOKEN=<ENTER YOUR TOKEN HERE> \
   SPOTINST_ACCOUNT=  \
   SPOTINST_CLUSTER_IDENTIFIER=   \
   ENABLE_OCEAN_METRIC_EXPORTER=false \
   bash
   
    ```  
     
   >**Note**:Optionally install the [Ocean Prometheus exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/README)
 
3. Click **Test Connectivity** to confirm that the Ocean Controller is functioning in the cluster. The test takes around two minutes. A green **OK** is displayed when the Ocean Controller pod runs in the AKS cluster and communicates with the Ocean SaaS engine.  

Additional Tips:  

* For unsuccessful connectivity, check the outbound connection and that the Ocean Controller pods are running.
* To change the Ocean Controller init.sh script, download, edit, and execute it from the command line (bash shell). 
* For private AKS clusters with limited or no Internet connectivity, see [What to do About Private AKS Clusters](https://docs.spot.io/ocean/getting-started/aks/?id=what-to-do-about-aks-private-clusters).  
  * Use a proxy or VPN to add or update the spotinst Helm repo in the private cluster. You need to create the config-map manually. 
 
### Step 4: Automatic Spot Tolerance Injection (optional) 

![aks-cluster-wizard-step-4-toleration](https://github.com/user-attachments/assets/5a1e1fc4-be0f-457b-8cab-a34d774a5a21)

Microsoft Azure / AKS does not allow pods to run on Spot VMs by default. AKS automatically applies the `NoSchedule` taint to spot nodes/node pools (`kubernetes.azure.com/scalesetpriority=spot:NoSchedule`), ensuring that pods cannot run on them without the appropriate toleration. 

Spot toleration must be injected into the pod to schedule a workload on a spot node. Otherwise, the workload will default to a regular on-demand (OD) node.

This step lets you optionally install the Spot admission controller, a Kubernetes mutating webhook that automatically injects the spot toleration at the namespace level, enabling AKS workload pods to run on Spot VMs by default. 

>**Note**: A mutating webhook is a Kubernetes dynamic admission controller that allows for modifying resources before they are persisted in the Kubernetes API server. 

The Spot toleration admission controller webhook is triggered by pod create or update events. When web-app deployment tries to scale up and add new pods or update/restart existing pods, the kube-apiserver sends an admission request to the Spot toleration webhook and, based on the policy, injects the spot toleration before the pod is deployed. 

Prerequisites:

* Ensure you have OpenSSL installed in your environment or use [Azure Cloud Shell](https://portal.azure.com/). 
* Your current k8s context must be the context of your cluster.

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
>**Note**: To enable a workload to run on Regular / Oon-demand nodes, add Spot label `spot.io/node-lifecycle=od` 

### Step 5: Review and Configure  

![aks-cluster-wizard-review](https://github.com/user-attachments/assets/baa885cf-728e-4dee-bdf6-f598d22f1dbb)

You can:

* View and edit the Ocean cluster configuration and the VNG Template in JSON.   
* Update Ocean AKS cluster autoscaling configuration, cluster resource limits (vCPU and memory), scale-down percentage, and automatic headroom. 
* Modify the Virtual Node Group template configuration in JSON format.

![aks-cluster-wizard-json-review](https://github.com/user-attachments/assets/90560b12-9b55-4a4e-aaee-cdedab530e2f)

When you finish editing the Ocean cluster configuration, click **Create**to create the Ocean-managed AKS cluster. 
After import, the cluster appears in the Cloud Clusters list under the left Ocean menu. 

## Migrate Workloads to Ocean from the Azure Portal 

See [Migrate the Workload to Ocean on AKS](https://docs.spot.io/ocean/tutorials/migrate-workload-aks)

## Related Topics

- Learn more about Ocean’s [scaling](ocean/features/scaling-kubernetes) and [headroom](ocean/features/headroom) features.

