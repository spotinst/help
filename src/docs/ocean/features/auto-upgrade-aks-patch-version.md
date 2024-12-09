<meta name="robots" content="noindex">

# Auto-Upgrade the AKS Control Plane Patch Version in the Console

You can schedule an auto-upgrade of an AKS patch version once a day (recommended) or at a specific time. For both types of auto-upgrade, you can set one of these options:

* Control plane upgrade: Upgrade the control plane patch version only.
* Control plane upgrade and Ocean roll: Upgrade the control plane patch version and the nodes in the data plane managed by Ocean. After the upgrade, you must roll the cluster to align the cluster infrastructure with the updated version.

We recommend you schedule once daily and let Ocean manage your upgrades.

## Check if you need to Upgrade

To check if your Control Plane version needs upgrading, access the cluster overview tab:

1. Click **Ocean > Cloud Clusters** in the left main menu. 
2. Select a cluster from the list of clusters.
3. View the installed version number of the control plane at the bottom of the tab.

![control-plane -version](https://github.com/user-attachments/assets/6776f5a7-bea6-4a46-9068-daaf0f1c4575)

The version can have one of the following statuses:

* Green: The control plane is upgraded to the latest patch version.
* Yellow: The control plane patch version can be upgraded to the latest available version.
* Red: The control plane patch version needs an immediate upgrade. Otherwise, you will not be able to launch a new node. Spot does not 
provide support updates for Kubernetes minor version upgrades.
* Gray: The Ocean controller is not valid or is not reporting, so there is no indication of the control plane patch version. See [Troubleshoot the Ocean Controller](https://docs.spot.io/ocean/tutorials/spot-kubernetes-controller/ocean-controller-two-ts).

## View the Auto-Upgrades History and Schedules

* Click **Auto Upgrade** at the bottom of the cluster overview screen (next to the control plane version), or click the **Auto Upgrade** tab.

  >**Note**: If you have not run or scheduled an auto-upgrade in this cluster, the Auto-Upgrades tab appears with a **Scheduled Auto-Upgrade** button in the center of the screen. Otherwise, lists are displayed as shown below.

<img width="1000" src="https://github.com/user-attachments/assets/9cfc15c2-e727-45ef-ab94-0ffe8135ca5e" />

The Updates History list for completed runs is displayed at the top of the screen with these attributes:

* Execution Time: Format MM/DD/YYYY, hh: mm: ss.
* Old Version number (before the run).
* New Version number (after the run).
* Roll ID: Listed if the cluster was rolled after auto-update. Click the **Roll ID** link on the list entry to view roll attributes.
* Run Statuses:
  * Completed (green): The control plane patch version was successfully updated.
  * Partly completed (orange): The control plane was successfully updated but could not roll / could only partially complete the roll.
  * Failed (red): The control plane patch version could not be updated. Review the logs tab for more details.
  * Stopped (black): The roll was stopped.
 
>**Tip**: Search for auto-update runs by **Status** using the Updates History filter.

The configured schedules are displayed at the bottom of the screen with these attributes:

* Schedule: for example, at 11:00 PM only on Sunday.
* Roll: Whether to roll the cluster (true or false).

## Create or Edit an Auto-Upgrade Schedule

To schedule an auto-upgrade:

1. Ensure that the [Azure Kubernetes upgrades feature](https://spotinst.atlassian.net/wiki/pages/resumedraft.action?draftId=3271589937) is not enabled for your cluster. You cannot enable Ocean and Azure Kubernetes auto-upgrades simultaneously.
2. In the Auto Upgrade tab, click **Scheduled Auto-Upgrade** (or to edit an existing auto-update schedule, click **Edit** in the schedule entry).

>**Note**: If the following message appears at the top of the dialog box, click to turn off the Azure Kubernetes upgrades feature.
> <img height="70" src="https://github.com/user-attachments/assets/91787c7b-3fea-4778-8ec8-45c867cbf09d" />

3. Select whether to auto-upgrade the Control Plane or to auto-upgrade the Control Plane and Roll.

<img width="600" src="https://github.com/user-attachments/assets/0fbf845d-3595-4111-89c8-2b318b303265" />

>**Note**: Rolls
> - Ocean will roll all virtual node groups applicable to the available control-plane patch upgrade version if you select to roll.
> - You can only roll if an upgrade version for the virtual node groups is available. If an upgrade version is unavailable, a record will only appear in the logs, not the auto-upgrades history.
> - If an option appears grayed, you have already run it and cannot select it again.

4. If you selected to roll, set the [roll parameters](https://docs.spot.io/ocean/features/roll).

<img width="600" src="https://github.com/user-attachments/assets/991afb10-5867-4bce-aa44-1a480215c149" />

   * Select the Batch size percentage (1 - 100%).
   * Select the Batch size healthy percentage (20-100%).
   * Optionally, turn on the Pod Disruption Budget (PDB) option.
   * Optionally, turn on the Restrict Scale-Down option.

5. Select whether to schedule the auto upgrade once a day or at a specific time.

>**Note**: Once you schedule the auto-upgrade once a day, you cannot add a schedule for a specific time, and the **Scheduled Auto-Upgrade** button is grayed.

<img width="600" src="https://github.com/user-attachments/assets/9a45bee5-e725-4bad-aaa7-a739f7044772" />

6. If you selected to schedule at a specific time, set the time using the day/week/month/time controls or type a Cron expression.

<img width="600" src="https://github.com/user-attachments/assets/cbc850c8-70d7-4465-bd29-492285ffca9e" />

7. Click **Schedule**.

   * The created schedule is turned on by default. To turn off the schedule, move the slider at the right of the entry for the schedule to the turned-off position.
   * After the update is run, an entry will appear in the auto-upgrades history list.

## Delete an Auto-Upgrade Schedule

To delete an auto-upgrade schedule:

1. Click the garbage bin icon to the right of the entry for the schedule.
2. In the confirmation window, type **Delete** in the field provided and then click **Delete**.
3. Click **Schedule**. The schedule will appear at the bottom of the screen in the auto-upgrades schedules list. 

  

