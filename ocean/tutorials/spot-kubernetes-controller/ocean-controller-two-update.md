# Update the Ocean Controller Version 2

This topic describes how to update the Ocean Controller Version 2 for **AWS K8s** in your Kubernetes cluster. 

##  Prerequisites

The Ocean Controller Version 2 installation is based on Helm, so make sure to have Helm installed on your machine before starting.

## Install the Latest Version 

To install the latest Ocean Controller version: 

1.  Add the Spot Helm chart repository: 

```bash
helm repo add spot https://charts.spot.io 
```

2.  Update your local Helm chart repository cache: 

```bash
helm repo update 
```

3.  Install ocean-kubernetes-controller: 

```bash
helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller \
--namespace "spot-system" --create-namespace \
--set spotinst.account="${SPOTINST_ACCOUNT}" \
--set spotinst.clusterIdentifier="${SPOTINST_CLUSTER_IDENTIFIER}" \
--set spotinst.token="${SPOTINST_TOKEN}"
```

If the Ocean Controller is already installed, this action will start a rollout of the Ocean Controller deployment, which will launch the new controller pods and terminate the old ones. When the Ocean Controller boots up, the log will print the version. 


## Ocean Controller Auto-Update 

The Ocean Controller supports auto-update. When an updated controller version is available, it will automatically be updated. By default, auto-update is enabled (for installation using Terraform, the auto-update is disabled by default. To enable it, use `disable_auto_update=false`. [Learn more](https://registry.terraform.io/modules/spotinst/kubernetes-controller/ocean/latest#input_disable_auto_update)). 

As a best practice, we recommend leaving Auto-Update enabled because the update procedure is silent and requires no downtime. In addition, every Ocean Controller version update improves stability and performance, collects new metrics, and supports new K8s versions.

The process of pushing a new Ocean Controller version requires a change in your environment and is monitored by the Spot team. Upon failure, the process will automatically roll back the changes. The upgrade is pushed gradually over several days.

If any of the conditions below apply at the time of the latest version push, the auto-update process will be canceled: 

*   The current running Ocean Controller is not reporting back to SaaS. 
*   The cluster is in scheduled shutdown hours.   

## Disable Auto-Update 

If you need to disable auto-update, use the following flag when running the Helm install/upgrade command. 

```bash
--set spotinst.disableAutoUpdate=true
```
