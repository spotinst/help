<meta name=“robots” content=“noindex”>

#  Auto Update AMI for EKS in the Console

You can either run an AMI auto-update immediately or schedule one. For both immediate and scheduled auto-update runs, you can include one or both of these options:

* Security patch updates: Once Ocean identifies that EKS released a security patch, update the nodes in the data plane managed by Ocean.
* Kubernetes minor version: Once Ocean identifies that the EKS control plane version was updated, update the nodes in the data plane managed by Ocean.

>**Note**: You can optionally roll the cluster after the AMI auto-update to align the cluster infrastructure with the new AMI.

## Access the AMI Auto Update Tab

To access the AMI Auto Update tab:

1. click **Ocean > Cloud Clusters**in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **AMI Auto Update** tab. You can either update immediately or schedule the update.

If you have not run or scheduled an auto-update in this cluster, the AMI Auto Update tab appears like this:

[placeholder for empty state]

Otherwise, configured schedules are displayed at the bottom of the screen with these attributes:

* Schedule: for example, at 11:00 PM only on Sunday or once a day.
* Type: Security patches, Kubernetes minor version, or both.
* Roll: Whether to roll the cluster (true or false).

The Updates History list for completed runs is displayed above the configured schedules with these attributes:

* Execution date/time.
* Update Type: Security patches, Kubernetes minor version, or both.
* Status:
  * Success (green): The update was successful.
  * No update required (blue): Hover over the status icon for more information.
  * Error (red): Error at Virtual Node Group level: The update has failed for this specific VNG. Hover over the error icon for more information.
  * Cluster Error (red): The cluster update has failed. Hover over the cluster error icon for more information.





