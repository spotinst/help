# Install the Ocean Controller Version 2

You can install the Ocean Controller for **AWS K8s** using a Spot script (based on Helm), via Helm, or via Terraform. Copy the relevant code shown in this procedure and apply it in your environment. 

## Prerequisites

The Ocean Controller Version 2 installation is based on Helm, so make sure to have Helm installed on your machine before starting.

## New Clusters - Install the Ocean Controller Version 2

1.  Pre-installation: Create a [Spot Programmatic token](https://docs.spot.io/administration/api/create-api-token ) (or use an existing one) for the cluster.  

2.  Install the Ocean Controller via [Helm](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-helm), [Script](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-script), or [Terraform](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-terraform).  

>**Note**: Installation of the Ocean Controller is governed by NetApp’s end user license agreement (“EULA”), which can be found at: [Sales Terms and Conditions | NetApp](https://www.netapp.com/how-to-buy/sales-terms-and-conditions/). 

## Existing Clusters - Install Ocean Controller on Clusters Running Version 1

### Step 1: Export relevant variables from the existing cluster

1.  Run the following command to retrieve the namespace where the existing Ocean Controller is installed: 

```bash
export EXISTING_NAMESPACE=$(kubectl get cm -A --field-selector=metadata.name=spotinst-kubernetes-cluster-controller-config -o jsonpath='{.items[0].metadata.namespace}')
```

2.  Run the following commands to export the details of the existing Ocean Controller: 

```bash
set -o pipefail 
export SPOTINST_TOKEN=`(kubectl get secret -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller -o jsonpath='{.data.token}' | base64 -d) || kubectl get cm -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller-config -o jsonpath='{.data.spotinst\.token}'` 2&>1 
export SPOTINST_ACCOUNT=`(kubectl get secret -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller -o jsonpath='{.data.account}' | base64 -d) || kubectl get cm -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller-config -o jsonpath='{.data.spotinst\.account}'` 2&>1 
export SPOTINST_CLUSTER_IDENTIFIER=`kubectl get cm -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller-config -o jsonpath='{.data.spotinst\.cluster-identifier}'` 
```

3.  Verify that all three variables have been exported successfully: 

```bash
env | grep -i spotinst 
```

### Step 2: Install Ocean Controller Version 2

Install the Ocean Controller via [Helm](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-helm), [Script](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-script), or [Terraform](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-install?id=install-via-terraform). 

For Helm / Script installation - The [Controller Auto-Update](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-update) feature is enabled by default. To disable it, use `--set spotinst.disableAutoUpdate=true`.  

For Terraform installation - The controller auto-update is disabled by default. To enable it, use `disable_auto_update=false` [Learn more](https://registry.terraform.io/modules/spotinst/kubernetes-controller/ocean/latest#input_disable_auto_update). 

### Step 3: Scale Down the Old Controller Replicas

Scale down the old controller replicas after installing the Controller Version 2 to prevent upgrade conflicts.  

*   To scale down the old controller replicas, run the following command: 

```bash
kubectl scale deployment --replicas=0 -n $EXISTING_NAMESPACE spotinst-kubernetes-cluster-controller 
```
> **Note**:  The Ocean Controller Version 2 replicas begin operating a few seconds after all Ocean Controller version 1 replicas are fully removed. Completely removing Ocean Controller Version 1 will allow Ocean Controller Version 2 to ensure a smooth transition and optimal performance.
 
>**Note**: You can return to the previous state at any time by running the same command with `--replicas=1`. 

### Step 4: Install Optional Components

Optionally install [Prometheus Exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/) and/or the [Network Client](https://docs.spot.io/ocean/tutorials/install-network-client?id=install-the-ocean-network-client-in-the-cluster). 

>**Note**: If Ocean Prometheus Exporter and/or the Network Client is/are already installed on the cluster, reinstall them as part of the Ocean Controller Version 2 installation. 

To install Prometheus Exporter: 

*   Run the following commands:

```bash
helm upgrade --install --wait spot-ocean-metric-exporter spot/ocean-metric-exporter \
--namespace "spot-system" \
--set oceanController.namespace="spot-system" \
--set oceanController.configMapName=ocean-controller-ocean-kubernetes-controller \
--set oceanController.secretName=ocean-controller-ocean-kubernetes-controller
```

To install the Ocean Network Client: 

*   Run the following commands: 

```bash
helm upgrade --install --wait spotinst-ocean-network-client spot/ocean-network-client \
--namespace "spot-system" \
--set namespace="spot-system" \
--set oceanController.configMapName=ocean-controller-ocean-kubernetes-controller \
--set oceanController.secretName=ocean-controller-ocean-kubernetes-controller
```

## Install via Helm

To install the Ocean Controller Version 2 via Helm: 

1.  Run the following command to add the spot helm repository: 

```bash
helm repo add spot https://charts.spot.io
```

2.  Update the repositories to the following:

```bash
helm repo update
```

3.  Run the following command to install the Ocean Controller Version 2:

```bash
helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller \
--namespace "spot-system" --create-namespace \
--set spotinst.account="${SPOTINST_ACCOUNT}" \
--set spotinst.clusterIdentifier="${SPOTINST_CLUSTER_IDENTIFIER}" \
--set spotinst.token="${SPOTINST_TOKEN}"
```
If the Ocean Metric Server is already installed in your cluster, add `--set metrics-server.deployChart=false` to the installation. 

## Install via Script  

Use Spot’s script for a Helm-based installation of the Ocean Controller. 

*   Run the following script: 

 ```bash
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller-v2/scripts/init.sh | \
SPOTINST_TOKEN=$SPOTINST_TOKEN \
SPOTINST_ACCOUNT=$SPOTINST_ACCOUNT \
SPOTINST_CLUSTER_IDENTIFIER=$SPOTINST_CLUSTER_IDENTIFIER \
ENABLE_OCEAN_METRIC_EXPORTER=false \
ENABLE_OCEAN_NETWORK_CLIENT=false \
INCLUDE_METRIC_SERVER=false \
bash
```

>**Note**: If the [Ocean Prometheus Exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/) or [Ocean Network Client](https://docs.spot.io/ocean/tutorials/install-network-client?id=install-the-ocean-network-client-in-the-cluster) is already installed in your cluster, reinstall them by setting the following parameter (to integrate with the new controller): `ENABLE_OCEAN_METRIC_EXPORTER = true` OR `ENABLE_OCEAN_NETWORK_CLIENT = true`.  

>**Note**: (Optional) To enable the Right Sizing feature, install the Metrics Server by setting the following parameter: `INCLUDE_METRIC_SERVER = true`.  

## Install via Terraform  

Spot provides a [Terraform Module](https://registry.terraform.io/modules/spotinst/kubernetes-controller/ocean/latest) to install and manage the Ocean Controller. 

Usage Example: 

```bash
provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

locals {
  spotinst_token = "TOKEN"
  spotinst_account = "ACCOUNT_ID"
  spotinst_cluster_identifier = "CLUSTER_IDENTIFIER"
}

module "kubernetes-controller" {
  source = "spotinst/kubernetes-controller/ocean"

  # Credentials
  spotinst_token = local.spotinst_token
  spotinst_account = local.spotinst_account

  # Configuration
  cluster_identifier = local.spotinst_cluster_identifier
}
```

>**Note** For clarifications and concerns please contact your Account Manager.  

>**Note** For troubleshooting issues please contact our support team via the console online chat or via [email](https://spot.io/support/).  
