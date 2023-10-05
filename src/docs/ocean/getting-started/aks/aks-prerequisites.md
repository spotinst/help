# Prerequisites for Importing an AKS Cluster to Ocean 

The following prerequisites are required before importing a cluster to Ocean.

## Prerequisites 

* [Valid AKS Managed cluster with at least one node pool (for control-plane)](ocean/getting-started/aks?id=valid-aks-managed-cluster-with-at-least-one-node-pool-for-control-plane). 
* [Connect Spot account to Azure Subscription](ocean/getting-started/aks?id=connect-spot-account-to-azure-subscription).
* [Verify Connection to Spot Account](ocean/getting-started/aks?id=verify-connection-to-spot-account).
* [Enable Ocean to launch Spot VMs for Workloads](ocean/getting-started/aks?id=enable-ocean-to-launch-spot-vms-for-workloads). 
* [Install Helm, Terraform or Kubectl (Kubernetes command-line tool)](ocean/getting-started/aks?id=install-helm-terraform-or-kubectl-kubernetes-command-line-tool). 

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
