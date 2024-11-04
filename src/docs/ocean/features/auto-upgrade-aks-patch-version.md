<meta name="robots" content="noindex">

# Auto-Upgrade the AKS Patch Version (Control Plane) for AKS in the Console

You can schedule an auto-upgrade of an AKS patch version when it becomes available or at a specific time. For both types of auto-upgrade runs, you can set one of these options:

* Control Plane Upgrade: Upgrade the Control Plane patch version only.
* Control Plane Upgrade and Ocean Roll: Upgrade the Control Plane patch version and the nodes in the data plane managed by Ocean. After the upgrade, you must roll the cluster to align the cluster infrastructure with the new version.

## Check if you need to Upgrade

To check if your Control Plane version needs upgrading, access the cluster overview tab:

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.

Screenshot here

View the installed version number of the control plane at the bottom of the tab, which will have one of the following statuses:

* Green: The control plane is upgraded to the latest patch version.
* Yellow: The control plane patch version can be upgraded to the new available version.
* Red: The minor version of the control plane needs an immediate upgrade. Otherwise, you will not be able to launch a new node. Spot does not provide support for Kubernetes minor version upgrades.
* Gray: The Ocean controller is not valid or is not reporting, so there is no indication of the control plane patch version. See [Troubleshoot the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts).



  

