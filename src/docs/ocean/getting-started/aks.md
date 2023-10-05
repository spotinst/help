# Import an AKS Cluster to Ocean 

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications. 

This procedure describes how to use the Spot Console to connect an existing AKS cluster to Ocean. 

## Prerequisites 

* [Valid AKS Managed cluster with at least one node pool (for control-plane)](ocean/getting-started/aks/aks-prerequisites?id=valid-aks-managed-cluster-with-at-least-one-node-pool-for-control-plane). 
* [Connect Spot account to Azure Subscription](ocean/getting-started/aks/aks-prerequisites?id=connect-spot-account-to-azure-subscription).
* [Verify Connection to Spot Account](ocean/getting-started/aks/aks-prerequisites?id=verify-connection-to-spot-account).
* [Enable Ocean to launch Spot VMs for Workloads](ocean/getting-started/aks/aks-prerequisites?id=enable-ocean-to-launch-spot-vms-for-workloads). 
* [Install Helm, Terraform or Kubectl (Kubernetes command-line tool)](ocean/getting-started/aks/aks-prerequisites?id=install-helm-terraform-or-kubectl-kubernetes-command-line-tool). 

### Valid AKS Managed Cluster with at least One Node Pool (for control-plane) 

A Microsoft Azure Kubernetes Service (AKS) managed cluster has to exist with at least one (system) node pool (default system node pool) for the Kubernetes control-plane. Ocean does not manage the Kubernetes control-plane or system node pools. The AKS cluster type must be [Virtual Machine Scale Set](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)(VMSS). When using Azure CLI to create the cluster (az aks create) ensure that --vm-set-type is VirtualMachineScaleSets not AvailabilitySet. Ocean cannot import an AKS cluster of type [AvailabilitySet](https://learn.microsoft.com/en-us/azure/virtual-machines/availability-set-overview). You can create a new AKS managed cluster of type VMSS (Default) from the Azure portal and then import it to Ocean. 

An AKS cluster and its node pool(s) must have a [Kubernetes version supported by Microsoft](https://learn.microsoft.com/en-us/azure/aks/supported-kubernetes-versions?tabs=azure-cli). If the Kubernetes version is no longer supported by Microsoft, complete the following steps to upgrade the [AKS cluster](https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster?tabs=azure-cli) using Azure CLI or Azure portal. Upgrade the AKS cluster control-plane and existing node pool(s) to a supported Kubernetes version before starting Ocean onboarding. The AKS cluster should be created (using the Azure portal or CLI) with a resource group, cluster name, credentials (for Windows node pools) and networking (network-plugin, VNET, subnet, network policy) options defined.  

Ocean AKS is designed to create and manage only the user node pools. Ocean will **not** create, manage, or launch nodes in the default system node pool (control-plane nodes) or any system node pools. It is recommended to keep only one default system node pool for the Kubernetes control-plane and system critical applications (etcd, API server, etc) managed by AKS.   

The default system node pool must run in Linux and it should have at least three nodes for the Kubernetes control-plane. You can scale down the default system node pool to one node for non-production (dev, test/QA, CI) clusters. Spot recommends that production clusters that require high availability should have at least three nodes in the default system node pool for the control-plane. You can monitor the default system pool usage and capacity independently using Azure portal.  

### Connect Spot Account to Azure Subscription 

The instructions below describe how to connect a Spot account to an Azure subscription from the Spot (UI) console using the [Spot Azure on-boarding wizard](https://docs.spot.io/connect-your-cloud-provider/first-account/azure?id=connect-azure-subscription) with additional updates to Step 3.5 Azure Custom role. You will need to use the Azure portal and the Spot Azure on-boarding wizard.  

First, complete the steps for new application registration in steps [3.1 to 3.4](https://docs.spot.io/connect-your-cloud-provider/first-account/azure?id=connect-azure-subscription) of the Spot Azure on-boarding wizard, in order to register the Spot (Ocean) application to Azure Active Directory Service.  

**Updates to Step 3.5 Azure Custom Role**  

Spot Ocean AKS requires Azure Access Control (IAM) to provide role-based access control (RBAC) to be able to manage the resources in the AKS cluster. The following steps describe how to create an Azure custom role in the Azure portal for Spot Ocean AKS with the correct scope and permissions to manage AKS resources (node pools and VM Scale Sets).   

Step 1: Export a JSON permissions file for Ocean AKS from the Spot onboarding wizard.  
Step 2: Define the assignable scope for the Azure custom role in the Azure portal. 
Step 3: Create the custom role and import the Ocean AKS permissions file. 

### Step 1: Export Ocean AKS (JSON) Permissions for Azure Custom Role 

1. In  Step 3.5 of the Spot Azure on-boarding wizard, select Ocean AKS 2.0 (JSON) to export [Ocean AKS permissions file in JSON](https://github.com/yaruslavm/spot-Ocean/blob/main/Spot%20Azure%20Infra%20Permissions%20v2.json) and save it to a folder on your laptop or workstation.
**Note**: Do not use the Compute JSON (default) permissions file, this is only for Elastigroup (compute only resources) usage, not for Ocean AKS (Kubernetes) usage with node pools. 

![connect-aks-cluster-1](https://github.com/spotinst/help/assets/106514736/16209c6a-8a7b-4812-a820-a30d9c123d61)

2. This Ocean AKS 2.0 (JSON) file has the permissions needed for Ocean AKS to manage (create, update, delete) AKS node pools or VM Scale Sets (VMSS). You can review, edit the file to add or remove permissions as needed before importing it into the Azure custom role to be created in the next steps below. 
3. In the Azure portal to create [Azure custom role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles-portal) and define the [assignable scope](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal?tabs=delegate-condition#step-1-identify-the-needed-scope) for the role that will be used by the Ocean AKS application. The scope of the role can be at the subscription level (typically), management group level or resource group level. To limit the access of the Ocean AKS custom role to only manage AKS (Kubernetes) resources, the subscription level scope, which provides access to all resource groups and services under the subscription, should not be used. Assign scope to resource group level to limit the access of the Ocean AKS role to a resource group with only the AKS (Kubernetes) resources (AKS clusters, node pools, VM scale sets). 

### Step 2: Set the Assignable Scope for the Azure Custom Role 

1. In the Azure portal, the assignable scope is defined by what is selected in the top menu. To change the scope, click Home to view all available resources and services. Select the subscription name, management group or resource group, where you want the custom role to be assigned.  
2. Once you select the scope - subscription, management group or resource group it should appear on the top menu. If the scope is set to a resource group, the top menu displays **_Home > Resource groups > < resource-group-name >_**. If the scope is set to the subscription, the top menu displays **_Home > Subscriptions > < subscription-name >_**. 

![connect-aks-cluster-16](https://github.com/spotinst/help/assets/106514736/4d9fa3e3-85c1-4077-89b5-55490c3817dc)

3. Before going to the next step to create the custom role, verify that the assignable scope is set correctly. The custom role that you create in the next step will be assigned the scope (resource access) that it was created under. 
4. Scope can also be changed or updated when the Azure Custom Role is created in the following step.

### Step 3: Create the Azure Custom Role using the Azure portal 

1. To create an Azure Custom Role, in the main menu on the left, select **Access Control (IAM)**, this opens the Access Control (IAM) page. In the top menu on the Access Control (IAM) page, click **+Add** and select **Add custom role** or you can click the **Add** button on the **Create a custom role** card on the Access Control (IAM) page. This will open the Custom role editor.  

![connect-aks-cluster-2](https://github.com/spotinst/help/assets/106514736/5c0d5171-e397-40bc-94e3-7571075601ce)

2. In the Basics Tab of Custom role editor, for Baseline permissions select Start from JSON. Next to the Select a file box, click the folder button to open the Open dialog box. Go to the directory where the Ocean AKS 2.0 (JSON) permissions file was exported earlier, select the file and click **Open**. You can add or modify the name of the custom role. 

![connect-aks-cluster-3](https://github.com/spotinst/help/assets/106514736/0a4efb4c-0f01-4295-9f3a-0db6165c1cbd)

3. Click **Next** to review permissions for the Azure custom role. Update or Add permissions. 
4. Click **Next** to review the Assignable scopes. The scope is automatically set based on the level (subscription, management group or resource group) the Azure Access Control (IAM) page was opened in the previous step. In this tab, you can change the scope or add additional scopes. For example, if the scope is set to a resource group then you can add one or more additional resource groups. The custom role can manage one or more resource groups with AKS clusters and resources. 

![connect-aks-cluster-4](https://github.com/spotinst/help/assets/106514736/08745070-95ac-4132-8777-ebb56beae938)

5. Click **Next** and to go to the JSON tab to review and edit the custom role configuration in JSON. 
6. Click **Review + Create** to create the Ocean AKS custom role. 

**Step 3.6 Azure Access Control (IAM) Role Assignment**  

Finally, assign custom role to a user, group, or service principals at subscription and resource group scopes. 

Return to the Spot Azure on-boarding wizard and complete [step 3.6](https://docs.spot.io/connect-your-cloud-provider/first-account/azure?id=connect-azure-subscription) to link the Azure custom role you created to step 3.5 to the Spot Application registration you created in step 3.2. 

**Additional Tips**: 

* Azure custom role with Ocean AKS JSON permissions (JSON) should be applied at least 30 minutes before you start the AKS cluster import or migration. There is a slight delay in synchronizing permissions with tokens. If you perform cluster import immediately after permissions are updated, then you may experience general permission related errors during the cluster import.  
* For initial trial or PoC with view-only access, edit the exported Ocean AKS permissions JSON file to remove all write permissions and keep the read-only permissions then save with the file with a different name. Next import the read-only permissions file in the Azure custom role editor. This enables you to view Ocean potential savings without enabling the auto-scaling. 
* For Legacy Ocean AKS users, it is recommended to create a new Spot Account for the new Ocean AKS and follow Spot Azure on-boarding steps 3.1 - 3.6 listed above to link the new Spot account to the Azure subscription. This enables you to keep your existing old Spot Account to manage Ocean Legacy clusters and gradually migrate them to the new Ocean AKS. Then delete the old Spot account when the migration is complete for all Legacy Ocean clusters. 
* To use the same Spot Account to manage both Legacy Ocean and new Ocean AKS clusters, you need to edit the existing **Azure Access Control (IAM) > custom role** (under the Azure subscription) and merge the new [Ocean AKS (JSON) permissions](https://github.com/yaruslavm/spot-Ocean/blob/main/Spot%20Azure%20Infra%20Permissions%20v2.json) to the existing permissions for Legacy Ocean. The Azure RBAC custom role needs permissions to manage both independent VMs for Legacy Ocean clusters and permissions to manage node pools (VM Scale Sets VMSS) for new Ocean AKS clusters. As shown below you can manage both new Ocean AKS clusters and Legacy AKS clusters in the same Spot Account. 

![connect-aks-cluster-5](https://github.com/spotinst/help/assets/106514736/c90486d1-a80b-489b-85ce-b587c6c4f0eb)

### Verify Connection to Spot Account 

1. In the top right menu in the Spot console, click the user icon and click **Settings**.  
2. In the Organization menu on the left, click **Spot Accounts**. Verify that your Spot account is connected to your Azure subscription. The verified connected accounts are displayed at the top of the page. The Unconnected accounts with broken links are displayed under the accounts section of the page.  
3. If your Spot Account has a broken-link (Unconnected), repeat the Application registration [steps 3.1 - 3.4](https://docs.spot.io/connect-your-cloud-provider/first-account/azure?id=connect-azure-subscription) in the Spot Azure on-boarding wizard. Verify that all of the information was entered correctly.   
4. Ensure that your Spot Account is connected to your Azure subscription, before proceeding with the import or migration process of an AKS cluster to Ocean. 

![connect-aks-cluster-6](https://github.com/spotinst/help/assets/106514736/d7ff9e1a-0c15-444f-8824-9c1203d42ead) 

### Enable Ocean to launch Spot VMs for Workloads   

In AKS, [Spot node pools](https://learn.microsoft.com/en-us/azure/aks/spot-node-pool#limitations) have the following Microsoft enabled label and taint: 

Label - `kubernetes.azure.com/scalesetpriority:spot` ,  

Taint - `kubernetes.azure.com/scalesetpriority=spot:NoSchedule` 

In order to deploy a workload on Spot VMs, Microsoft requires a pod with [Spot toleration](https://learn.microsoft.com/en-us/azure/aks/spot-node-pool#schedule-a-pod-to-run-on-the-spot-node). For Ocean to launch Spot VMs, the workload manifest needs to be modified to add the Spot tolerations shown below.  

If a workload does not have the toleration, then Ocean (and native AKS) will not be able to launch a Spot VM to save costs. The workload will run on regular On-demand nodes with pay-as-you-go pricing. Ocean will continue to perform bin-packing and implement other cost-saving node replacement operations. 

**Include**:

```
spec: 
  tolerations: 
  - key: "kubernetes.azure.com/scalesetpriority" 
    operator: "Equal" 
    value: "spot" 
    effect: "NoSchedule"
```

With Ocean, do not include the nodeAffinity: `kubernetes.azure.com/scalesetpriority: spot`. This creates an error condition where Ocean is not able to launch a Spot VM for the workload. Enabling this nodeAffinity requires that the workload (pod) be ONLY run on Spot VMs and it cannot be scheduled on regular nodes as a fallback operation when Spot VMs are not available. 

**Do not include**:

```
affinity: 
  nodeAffinity: 
    requiredDuringSchedulingIgnoredDuringExecution: 
      nodeSelectorTerms: 
      - matchExpressions: 
        - key: "kubernetes.azure.com/scalesetpriority" 
          operator: In 
          values: 
          - "spot" 
```

If you have both the Spot toleration and the nodeAffinity configured, then Ocean autoscaling fails with an error that can be seen in the logs. 

```
05/05/2023, 4:13:48 PM	 Warn	AutoScaler - Attempt Scale Up, Pod nginx-6b966cbdb7 is pending but its constraints differ from the group labels.  

NodeAffinity: '{"preferredDuringSchedulingIgnoredDuringExecution":null,"requiredDuringSchedulingIgnoredDuringExecution":{"nodeSelectorTerms":[{"matchExpressions":[{"key":"kubernetes.azure.com/scalesetpriority","operator":"IN","values":["spot"]}]}]}}'.
``` 

Contact the Spot Sales team or Support if the workload manifest (YAML) cannot be edited to add Spot toleration. Mutating admission [webhook](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) is available to dynamically inject the toleration for pods before they are scheduled. 

### Install Helm, Terraform or Kubectl (Kubernetes command-line tool)  

Ensure that you have Helm 3.x, Terraform or kubectl installed on your workstation or laptop. Validate that it is configured to connect with the relevant AKS cluster to be imported to Ocean. The Spot account must already be connected to the AKS cluster. If using kubectl, kube-config context set to relevant AKS cluster. 

For Ocean to manage the AKS cluster, install the Spot [Ocean Kubernetes controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/). The Ocean Controller uses kubectl and AKS API to collect metrics on pods, nodes and tracks events from scheduler and nodes or node pools. These metrics and events are then pushed via a secured connection to the Spot Ocean SaaS to perform cluster autoscaling and optimization functions.   
Ocean controller is a deployment with single replica that is typically deployed in the default system node pool where the Kubernetes control plane is deployed. To install the Ocean controller you can use either Helm, Terraform or Kubectl.  

Helm provides the more flexibility for customization and is the preferred method to install the Ocean Kubernetes controller. In the instructions below to import an AKS cluster to Ocean we will go over detailed steps on how to install the Ocean Kubernetes controller using Helm. 

The three main options to install the Ocean controller. 
 
#### **Option 1** – Install Ocean Controller with Helm 

When using [Helm](ocean/tutorials/spot-kubernetes-controller/install-with-helm?id=for-helm-versions-30-and-later) to install the controller, add the Spot Helm chart repo (https://spotinst.github.io/spotinst-kubernetes-helm-charts) and then install Ocean Kubernetes Controller Helm chart (spotinst-kubernetes-cluster-controller) on Artifact hub.   

You need three required parameters which are credentials: `spotinst.token`, `spotinst.account` and the cluster identifier `spotinst.clusterIdentifier` as shown below. You can add more optional parameters using –set to specify command line arguments or use the file values.yaml. 

Kubernetes [metrics server](https://github.com/kubernetes-sigs/metrics-server) is required and is typically deployed along with the Ocean controller. However, Azure AKS already installs the metrics server and Ocean does not need to reinstall it. You need to set `metrics-server.deployChart` to false.

```
helm repo add spotinst https://spotinst.github.io/spotinst-kubernetes-helm-charts \ 
&& helm repo update 

helm install ocean-controller spotinst/spotinst-kubernetes-cluster-controller \ 
--set spotinst.token=<TOKEN> \ 
--set spotinst.account=<SPOT_ACCOUNT> \ 
--set spotinst.clusterIdentifier=<CLUSTER_IDENTIFIER> \ 
--set metrics-server.deployChart=false \ 
--create-namespace \ 
--namespace="spot-ocean" \ 
--set namespace="spot-ocean" 
```

#### **Option 2** – Install Ocean Controller with Terraform 

When using [Terraform](ocean/tutorials/spot-kubernetes-controller/install-with-terraform?id=install-with-terraform) to install the controller, use [ocean-controller module](https://registry.terraform.io/modules/spotinst/ocean-controller/spotinst/latest) to install the Spot Ocean Kubernetes controller in the AKS cluster. Set three required parameters listed below. Terraform uses Helm chart to install the Ocean controller. You can add optional parameters available with ocean-controller module. For example, you can change the namespace for the Ocean controller deployment to “spot-ocean” instead of “kube-system”.

```
module "ocean-controller" { 
  source = "spotinst/ocean-controller/spotinst" 

  # Credentials 
  spotinst_token   = var.spotinst_token 
  spotinst_account = var.spotinst_account 

  # Configuration 
  cluster_identifier = var.cluster_identifier 

  # Optional Configuration 
  namespace = “spot-ocean” 
}
```

#### **Option 3** – Install Ocean controller with Kubectl 

When using [Kubectl](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl?id=install-with-kubectl) to install the Ocean controller, complete the following steps:  

1. Create a configMap YAML file for example ocean_controller_configMap.yaml with all required and optional parameters and then use kubectl to apply the configMap to the cluster.  

`ocean_controller_configMap.yaml`

```
kind: ConfigMap 
apiVersion: v1 
metadata: 
  name: spotinst-kubernetes-cluster-controller-config 
  namespace: kube-system 
data: 
  spotinst.token: <TOKEN> 
  spotinst.account: <ACCOUNT_ID> 
  spotinst.cluster-identifier: <CLUSTER_IDENTIFIER> 
  proxy-url: <Proxy-URL> 
  disable-auto-update: <true/false>
```

2. Use kubectl to load the ocean_controller_configMap.yaml into the cluster configuration. 

`kubectl apply -f ocean_controller_configMap.yaml`

3. Use kubectl to install the Ocean controller YAML file directly from Spot AWS S3 bucket.

`kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml`

An alternative option is to use the Ocean controller init.sh (bash) script with all required and optional parameters specified in the command line as shown below. 

```
#!/usr/bin/env bash 
curl -fsSL http://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/scripts/init.sh | \ 
SPOTINST_TOKEN=<TOKEN> \ 
SPOTINST_ACCOUNT=<SPOT_ACCOUNT> \ 
SPOTINST_CLUSTER_IDENTIFIER=<CLUSTER_IDENTIFIER> \ 
ENABLE_OCEAN_METRIC_EXPORTER=false \ 
bash
```

Kubectl offers the least flexibility with very few parameters for customization. If you need to make changes, download the Ocean controller manifest `spotinst-kubernetes-cluster-controller-ga.yaml` from Spot AWS S3 bucket and make changes to manifest before applying the config using kubectl. For example, you can modify ClusterRole permissions, change the namespace for the deployment from “kube-system” to “spot-ocean”. 

`spotinst-kubernetes-cluster-controller-ga.yaml`

```
# --------------------------------------------------------------------------- 
# Deployment 
# -------------------------------------------------------------------------- 
kind: Deployment 
apiVersion: apps/v1 
metadata: 
  labels: 
    k8s-app: spotinst-kubernetes-cluster-controller 
  name: spotinst-kubernetes-cluster-controller 
  namespace: spot-ocean 
spec: 
  replicas: 1 
  revisionHistoryLimit: 10 
  selector: 
    matchLabels: 
      k8s-app: spotinst-kubernetes-cluster-controller 
  template: 
    metadata: 
      labels: 
        k8s-app: spotinst-kubernetes-cluster-controller 
... 
```

## Import AKS Cluster to Ocean 

When all of the prerequisites are completed, you are ready to import an AKS cluster to Ocean.  

The instructions below describe the steps to import an existing AKS cluster to Ocean using the Create Cluster wizard in the Spot console. 

You can perform similar steps to import an AKS cluster to Ocean using the Ocean AKS API using [oceanAKSClusterImport](https://docs.spot.io/api/#tag/Ocean-AKS/operation/oceanAKSClusterImport) or Terraform providers for Ocean AKS cluster [ocean-aks-np-k8s](https://registry.terraform.io/modules/spotinst/ocean-aks-np-k8s/spotinst/latest), Ocean AKS VNG [ocean_aks_np_virtual_node_group](https://registry.terraform.io/providers/spotinst/spotinst/latest/docs/resources/ocean_aks_np_virtual_node_group).  

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

Once the VNG is created, some properties like node pool properties (OS types, OS Disk type) can not be edited. You need to delete the VNG and create a new one.  

To ensure faster workload migration to Ocean from existing unmanaged node pools with minimum down time, launch some nodes in the new VNG you just created.  

Select **VNG Actions** and **Launch nodes**. Specify how many nodes you want to launch. 

You can create more VNGs to handle different workload requirements. For example:   

* VNG with regular VMs – for workloads that cannot run on Spot nodes and must run on Regular (On-demand) VMs e.g. statefulSets, Spark drivers, Kafka producers.  
* Performance VNG – for workloads that need high performance CPUs (intel v4 or v5), minimum vCPU 8 or higher or larger OS Disk size, VMs with minimum disk 4 or higher. 
* AI/ML VNG – for workloads that need GPUs, say GPU count: 2-4 and specific VM series r GPU families 
* Windows VNG - for workloads that need Windows nodes.

![connect-aks-cluster-13](https://github.com/spotinst/help/assets/106514736/3e31608a-ecc3-469c-80ac-6942dc53f61f)

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

For Ocean to launch Spot VMs, the workload needs to add [Spot toleration](https://learn.microsoft.com/en-us/azure/aks/spot-node-pool#schedule-a-pod-to-run-on-the-spot-node) (the node affinity is not required). If there is no Spot toleration, Ocean will launch regular On-demand nodes during workload migration. Please see prerequisites above for more details. 

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
