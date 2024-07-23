<meta name=“robots” content=“noindex”>

#  Auto Update AMI for EKS in the Console

You can either run an AMI auto-update immediately or schedule one. For both immediate and scheduled auto-update runs, you can include one or both of these options:

* Security patch updates: Once Ocean identifies that EKS released a security patch, update the nodes in the data plane managed by Ocean.
* Kubernetes minor version: Once Ocean identifies that the EKS control plane version was updated, update the nodes in the data plane managed by Ocean.

>**Note**: You can optionally roll the cluster after the AMI auto-update to align the cluster infrastructure with the new AMI.

## Access the AMI Auto Update Tab

To access the AMI Auto Update tab:

1. click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **AMI Auto Update** tab. You can either update immediately or schedule the update.

If you have not run or scheduled an auto-update in this cluster, the AMI Auto Update tab appears like this:

![auto-update-eks-empty](https://github.com/user-attachments/assets/7a66a14c-007d-4e0a-b771-751427e434e3)

Otherwise, the screen will display the history of the previous runs and the currently configured schedules.

![auto-update-eks-full-screen-ud1](https://github.com/user-attachments/assets/c2a70b0e-43e7-46c5-a608-4e696df3bc2a)

The Updates History list for completed runs is displayed at the top with these attributes:

* Execution date/time.
* Update Type: Security patches, Kubernetes minor version, or both.
* Status:
  * Success (green): The update was successful.
  * No update required (blue): Hover over the status icon for more information.
  * Error (red): Error at Virtual Node Group level: The update has failed for this specific VNG. Hover over the error icon for more information.
  * Cluster Error (red): The cluster update has failed. Hover over the cluster error icon for more information.

>**Note**: See also [Auto Update Troubleshooting](https://docs.spot.io/ocean/features/auto-update-ami-eks-ui?id=auto-update-troubleshooting).

* Old AMI/New AMI: version numbers before and after the run.
* Virtual Node Group: Click the link to view the Virtual Node Group attributes.

>**Note**: A Virtual Node Group is listed only if an update was needed.

* Roll ID: Listed if the cluster was rolled after auto-update. Click the link to view Roll ID attributes.
* Trigger Type: Manual (auto-update was run immediately) or Scheduled (auto-update was scheduled and run).


>**Tip**: Use the Updates History filter to search for auto-update runs by Virtual Node Groups, Status, or Trigger Type.

The configured schedules are displayed at the bottom of the screen with these attributes:

* Schedule: for example, at 11:00 PM only on Sunday or once a day.
* Type: Security patches, Kubernetes minor version, or both.
* Roll: Whether to roll the cluster (true or false).

### Roll Cluster Option

If you optionally select to roll the cluster after the update for either immediate or scheduled auto-updates, these are the roll parameters:

* Respect Pod Disruption Budget (PDB): Some pods may have a Pod Disruption Budget (PDB). If you turn on the PDB, Ocean verifies the PDB and will not replace a node if the PDB is violated.
* Roll Batch Size Percentage: Indicates the percentage of the cluster's target capacity that will be rolled during a cluster roll operation. For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).
* Batch Size Healthy Percentage: indicates the minimum percentage of healthy instances in a single batch. The roll will fail if the number of healthy instances in a single batch is less than this percentage. The range is 1-100.

## Auto Update Now

To auto-update immediately:

1. In the AMI Auto Update tab, click **Configure and Update Now**.

![configure-now-update-ami-dialog-box](https://github.com/user-attachments/assets/814c12a7-8dcf-44e2-8bd3-b9dcd54d8178)

2. Select whether to update Security patches, Kubernetes minor versions, or both options in the Auto Update dialog box.
3. Optionally click **Apply cluster roll with update** (see [Roll Cluster Option](https://docs.spot.io/ocean/features/auto-update-ami-eks-ui?id=roll-cluster-option)).
  
  <ol style="list-style-type: lower-alpha;">
  <li>Select the Batch size percentage (1 - 100%).</li>
  <li>Select the Batch size healthy percentage (20-100%)</li>
  <li>Optionally, turn on the Pod Disruption Budget (PDB) </li>
  </ol>
  
4. Click **Update now**. After the update is complete, an entry will be displayed in the Updates History list.

## Create or Edit an Auto Update Schedule

To create or edit an auto-update schedule:

1. In the AMI Auto Update tab, click **Schedule Update** to create an auto-update schedule if no configured schedules exist. If at least one configured schedule exists, click Schedule Update from the Actions list below the table. 

>**Note**: To edit an existing auto-update schedule, click Edit in the entry for the schedule.

![schedule--update-ami-dialog-box](https://github.com/user-attachments/assets/76858a5d-8713-4e0f-9129-aee65c401128)

2. Select whether to update Security patches, Kubernetes minor versions, or both options.
3. Select whether to schedule once a day or at a specific time. 
4. If you selected to schedule at a specific time, set the time using the day/week/month/time controls or type a Cron expression.

5. Optionally click **Apply cluster roll with update** (see [Roll Cluster Option](https://docs.spot.io/ocean/features/auto-update-ami-eks-ui?id=roll-cluster-option)).
  
  <ol style="list-style-type: lower-alpha;">
  <li>Select the Batch size percentage (1 - 100%).</li>
  <li>Select the Batch size healthy percentage (20-100%)</li>
  <li>Optionally, turn on the Pod Disruption Budget (PDB) </li>
  </ol>

6. Save the schedule. The schedule appears in the AMI Auto Update screen above the Updates History List. After the schedule is run, a row with the details is displayed in the Updates History list.

>**Note**: To delete a schedule, click the garbage icon in the row for the schedule.

## Auto Update Troubleshooting

### Auto Update not Successful Due to Virtual Node Group Issues

These are the errors per Virtual Node Group:

* The VNG was in Shutdown Hours: When the cluster is in Shutdown Hours, the Ocean Controller is not running, so the AMI Auto Update cannot be triggered.
* The VNG is already using the most updated AMI, so no update is required. The Virtual Node Group is set with the most updated image.
* The VNG is not set with an imageId: The Virtual Node Group image id field is 'null', so no update is required.
* The VNG has double AMIs, which is not supported by AMI Auto Updates: EKS AMI Auto Update does not support double AMI configuration. Manually update these Virtual Node Groups.
* The control plane version is lower than the VNG image version: There is no need for the update. Make sure to upgrade your control plane or change the Virtual Node Group image to the same version as the EKS cluster control plane.
* Not supported: The new image's Kubernetes version is more than two versions ahead of the cluster’s. AWS typically allows the worker nodes to be at the same version as the control plane or up to two minor versions behind. For example, if your control plane runs Kubernetes version 1.20, your worker nodes can run versions 1.20, 1.19, or 1.18.
* No latest image was found: The Virtual Node Group is using the most updated image.
* Not supported: The image set for the Virtual Node Group is not an EKS-optimized image: EKS AMI Auto Update does not support non-EKS-optimized images. Manually update these Virtual Node Groups.
* Not supported: The VNG image is private: EKS AMI Auto Update does not support private images. Manually update these Virtual Node Groups.
* The Kubernetes version for the VNG image was not found: EKS AMI Auto Update failed to get the Kubernetes version of the image's version. Contact the Support Team.
* The architecture type for the VNG image was not found: EKS AMI Auto Update failed to get the architecture type of the image's version. Contact the Support Team.
* The control plane or VNG image minor version was not found: EKS AMI Auto Update failed to get the control plane or Virtual Node Group image minor version.  Contact the Support Team.
* The image could not be found in AWS: EKS AMI Auto Update failed to get the image from AWS. Contact the Support Team.
* The VNG was not updated with the new image: EKS AMI Auto Update failed.  Contact the Support Team.


### Auto Update not Successful Due to Cluster Issues

For example, an AMI auto-update might fail for the entire cluster if the Ocean Controller was not reported. The console displays this as a “Cluster Error:”
