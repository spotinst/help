<meta name=“robots” content=“noindex”>

# Update the Ocean Controller Version 2

This topic describes how to update the Ocean Controller Version 2 in your Kubernetes cluster. 

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
helm install spot spot/ocean-kubernetes-controller \
  --set spotinst.account=$SPOTINST_ACCOUNT \ 
  --set spotinst.clusterIdentifier=$SPOTINST_CLUSTER_IDENTIFIER \ 
  --set spotinst.token=$SPOTINST_TOKEN 
```

If the Ocean Controller is already installed, this action will start a roll in the cluster, which will launch a new pod and terminate the old one. When the Ocean Controller boots up, it will print the version in the log. 


## Ocean Controller Auto-Update 

The Ocean Controller supports auto-update. When an updated version of the controller is available, it will automatically be updated. By default, auto-update is enabled. 

As a best-practice, we recommend leaving Auto-Update enabled because the update procedure is silent and requires no downtime. In addition, every Ocean Controller version update improves stability and performance, collects new metrics, and supports new K8s versions. 

During the auto-update process, the default configuration provided by Spot overrides the configurations of the controller deployment and the **clusterRole** it is associated with. If you require manual modifications, such as adding labels or adjusting permission rules, you must disable Auto-Update to ensure that those changes are persisted. 

## Disable Auto-Update 

If you need to disable the auto-update, use the following flag when running the Helm install /upgrade command. 

```bash
--set spotinst.disableAutoUpdate=true 
```
## Ocean Controller Update Troubleshooting

The process of pushing a new Ocean Controller version requires a change in your environment and is monitored by the Spot team. The upgrade is pushed gradually over several days. 

If any of the conditions below apply at the time of a latest version push, the auto-update process will stop to prevent any unexpected behavior, and the Ocean Controller will remain in the current version: 

*   The current running Ocean Controller is not reporting back to SaaS. 
*   The cluster is in scheduled shutdown hours. 
*   The Ocean Controller application was installed with a different name than the name provided out of the box. 

If an auto-update stopped before completion, a banner will appear in the console with the message below and the latest version number to be installed. 

![ocean-controller-message](https://github.com/spotinst/help/assets/159915991/7af1b435-079d-41b3-a022-17565608cd66)
