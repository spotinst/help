# Auto-Upgrade the AKS Control Plane Patch Version in the Console

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

You can immediately run an auto-upgrade of an AKS patch version or schedule an auto-upgrade once a day (recommended) or at a specific time. For both immediate or scheduled auto-upgrade, you can set one of these options:

* Control plane upgrade: Upgrade the control plane patch version only.
* Control plane upgrade and Ocean roll: Upgrade the control plane patch version and the nodes in the data plane managed by Ocean. After the upgrade, you must roll the cluster to align the cluster infrastructure with the updated version.

You can also optionally update your system node pools as part of an auto-upgrade, or you can update them immediately on their own.

Spot recommends you schedule once daily and let Ocean manage your upgrades.

## Check if you Need to Upgrade

To check if your control plane version needs upgrading, access the cluster overview tab:

1. Click **Ocean > Cloud Clusters** in the left main menu. 
2. Select a cluster from the list of clusters.
3. View the installed version number of the control plane at the bottom of the tab.

   <img src="https://docs.spot.io/ocean/_media/check-need-to-uprade.png" />

The version can have one of the following statuses:

* Green: The control plane is upgraded to the latest patch version.
* Yellow: The control plane patch version can be upgraded to the latest available version.
* Red: The control plane patch version needs an immediate upgrade. Otherwise, you will not be able to launch a new node. Spot does not 
support Kubernetes minor version upgrades.

* Gray: The Ocean controller is not valid or is not reporting, so there is no indication of the control plane patch version. See [Troubleshoot the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts).

## View the Auto-Upgrades History and Schedules

* Click **Auto Upgrade** at the bottom of the cluster overview screen (next to the control plane version), or click the **Auto Upgrade** tab.

  >**Note**: If you have not run or scheduled an auto-upgrade in this cluster, the Auto-Upgrades tab appears with a **Scheduled Update** button in the center of the screen. Otherwise, lists are displayed as shown below.

<img src="https://docs.spot.io/ocean/_media/autoupgrades-history.png" />

The auto-upgrades history list for completed runs is displayed at the top of the screen with these attributes:

* Execution Time: Format MM/DD/YYYY, hh: mm: ss.
* Old Version number (before the run).
* New Version number (after the run).
* Roll ID: Listed if the cluster was rolled after auto-update. Click the **Roll ID** link on the list entry to view roll attributes.
* Run Statuses:
  * Completed (green): The control plane patch version was successfully updated.
  * Partly completed (orange): The control plane was successfully updated but could not create a roll, start a replacement for the roll, or only partly complete the roll.
  * Failed (red): The control plane patch version could not be updated. Review the logs tab for more details.
  * Stopped (black): The roll was stopped.
 
>**Tip**: Search for auto-update runs by **Status** using the Updates History filter.

<img src="https://docs.spot.io/ocean/_media/autoupgrade-schedules.png" />

The configured schedules are displayed at the bottom of the screen with these attributes:

* Schedule: for example, at 11:00 PM only on Sunday.
* Roll: Whether to roll the cluster (true or false).

## Create or Edit an Auto-Upgrade Schedule

To schedule an auto-upgrade:

1. Ensure that the [Azure Kubernetes upgrades feature](https://spotinst.atlassian.net/wiki/pages/resumedraft.action?draftId=3271589937) is not enabled for your cluster. You cannot enable Ocean and Azure Kubernetes auto-upgrades simultaneously.
2. In the Auto Upgrade tab, click **Scheduled Auto-Upgrade** (or to edit an existing auto-update schedule, click **Edit** in the schedule entry).

   >**Note**: If the following message appears at the top of the dialog box, click to turn off the Azure Kubernetes upgrades feature.
  
      <img src="https://docs.spot.io/ocean/_media/auto-upgrade-azure-feature.png" />
   
3. Select whether to auto-upgrade the control plane or to auto-upgrade the control plane and Roll.

   <img src="https://docs.spot.io/ocean/_media/select-what-to-upgrade.png" />

4. If you need to upgrade system node pools, click **Upgrade system node pools**, and then select required node pools from the list.

5. If you selected to roll, set the [roll parameters](https://docs.spot.io/ocean/features/roll).

    >**Note**: Rolls
    > - Ocean will roll all virtual node groups applicable to the available control plane patch upgrade version if you select to roll.
    > - You can only roll if an upgrade version for the virtual node groups is available. If an upgrade version is unavailable, a record will only appear in the logs, not the auto-upgrades history.
    > - If an option is not clickable, you have already run it and cannot select it again.

      <img src="https://docs.spot.io/ocean/_media/auto-upgrade-roll-configuration.png" />

   * Select the Batch size percentage (1 - 100%).
   * Select the Batch size healthy percentage (20-100%).
   * Optionally, turn on Pod Disruption Budget (PDB).
   * Optionally, turn on Restrict Scale-Down.

6. You can schedule the auto upgrade once a day or at a specific time.

   >**Note**: If you schedule the auto-upgrade once a day, you cannot add a schedule for a specific time, and the **Scheduled Auto-Upgrade** button is not clickable.

     <img src="https://docs.spot.io/ocean/_media/auto-upgrade-when-to.png" />

7. If you selected to schedule at a specific time, set the time using the day/week/month/time controls or type a Cron expression.

     <img src="https://docs.spot.io/ocean/_media/auto-upgrade-when-to-frequency.png" />

 8. Click **Schedule**.

   * The created schedule is turned on by default. To turn off the schedule, move the slider at the right of the entry for the schedule to the turned-off position.
   * After the update is run, an entry will appear in the auto-upgrades history list.

##  Auto-Upgrade Now

Use this option if you want to auto-upgrade immediately (rather than schedule an upgrade).

1. See [Create or Edit an Auto-Upgrade Schedule](https://docs.spot.io/ocean/features/auto-upgrade-aks-patch-version?id=create-or-edit-an-auto-upgrade-schedule) steps 1 to 5 (but in Step 2, click **Create an Upgrade > Configure & Upgrade Now**).
3. Click **Update Now**.

>**IMPORTANT**: This operation cannot be undone. If no upgrade version is available, this operation will time out.

After the update is complete, a new entry is added to the auto-upgrades history list.

##  Upgrade Now - System Node Pools Only

Use this option if you want to auto-upgrade systems node pools immediately (rather than schedule an upgrade).

Ocean shows only the system node pools that are not updated.

1. Click **Create an Upgrade > System Node Pools Upgrade**.
2. Click **Upgrade system node pools**, and then select required system node pools from the list.
3. Click **Update Now**.

>**IMPORTANT**: This operation cannot be undone. If no upgrade version is available, this operation will time out.

After the update is complete, a new entry is added to the auto-upgrades history list.


## Delete an Auto-Upgrade Schedule

To delete an auto-upgrade schedule:

1. Click the garbage bin icon to the right of the entry for the schedule.
2. In the confirmation window, type **Delete** in the field provided and then click **Delete**.
  


