#  Configure a Minor K8s Version for a Virtual Node Group 

This topic describes what to do with your Virtual Node Groups when you upgrade the Kubernetes K8s version for your clusters.  

The method is to (auto) upgrade the control plane to the latest K8s version, but continue to have data plane Virtual Node Groups for workloads running on a minor K8s version until they are fully validated for the latest K8s version. 

>**Note:** Minor version releases include new features and improvements. Minor versions change when functionality updates that are backward compatible with the other minor versions are made. 

For Large clusters, you can roll out upgrades to the latest K8s version in phases over two to three weeks. First, upgrade the control plane and the Virtual Node Groups as the workload is validated for the latest K8s version. 
When using K8s minor versions, you must consider the AKS node pool upgrade rules: When the K8s control plane is upgraded to Version **N**, the user node pools must be within two minor versions (**N-2**) of the control plane version. 

## Example: 
If the control plane is upgraded to K8s v1.28, the Virtual Node Group's K8s version can be 1.28, 1.27, or 1.26, provided AKS supports them. 
By default, a Virtual Node Group does not have a specified K8s version, so the control plane K8s version is used for all node pools. 
The Virtual Node Group will create node pools using the K8s version of the control plane. 

>**Important:** We recommend not upgrading the K8s control plane to the latest k8s version until all workloads support the latest K8s version. 

To specify a minor K8s version for the Virtual Node Group and the node pools it creates: 

1.  In the left main menu, click **Ocean**, and click **Cloud Clusters**. 

2.  Select a cluster from the list of clusters. 

3.  Click the **VNG** tab. 

4.  In the Node Pools Properties panel, click the K8s Version drop-down menu and select the K8s minor version.

![vng-tab-k8s-version](https://github.com/spotinst/help/assets/159915991/17d2c79f-9119-4a5b-9004-2b0cdc7ee47d)

