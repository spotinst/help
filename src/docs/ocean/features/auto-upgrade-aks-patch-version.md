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

## View the Auto-Upgrades History and Schedules

* Click **Auto Upgrade** at the bottom of the cluster overview screen (next to the control plane version), or click the **Auto Upgrade** tab.

  >**Note**: If you have not run or scheduled an auto-upgrade in this cluster, the Auto-Upgrades tab appears with a **Scheduled Auto-Upgrade** button in the center of the screen. Otherwise, lists are displayed as shown below.
 
   Screenshot

The Updates History list for completed runs is displayed at the top of the screen with these attributes:

* Execution Time: Format MM/DD/YYYY, hh: mm: ss
* Old Version number (before the run).
* New Version number (after the run).
* Roll ID: Listed if the cluster was rolled after auto-update. Click the **Roll ID** link on the list entry to view roll attributes.
* Run Statuses:
  * Completed (green): Successfully updated
  * Partly completed (green): At least one virtual node group roll was unsuccessful.
  * Failed (red): Either the control plane patch version upgrade or the virtual node group roll failed.
  * Stopped (gray): The virtual node groups roll was stopped.
 
  >**Tip**: Search for auto-update runs by **Status** using the Updates History filter.

The configured schedules are displayed at the bottom of the screen with these attributes:

* Schedule: for example, at 11:00 PM only on Sunday.
* Roll: Whether to roll the cluster (true or false).

## Create or Edit an Auto-Upgrade Schedule

To schedule an auto-upgrade:

1. Ensure that the [Azure Kubernetes upgrades feature](https://spotinst.atlassian.net/wiki/pages/resumedraft.action?draftId=3271589937) is not enabled for your cluster. You cannot enable Ocean and Azure Kubernetes auto-upgrades simultaneously.
2. In the Auto Upgrade tab, click **Scheduled Auto-Upgrade** (or to edit an existing auto-update schedule, click **Edit** in the schedule entry).

>**Note**: If the following message appears, click to turn off the Azure Kubernetes upgrades feature.

  

  


  

