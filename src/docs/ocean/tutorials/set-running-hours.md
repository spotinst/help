# Set Shutdown Hours

>**Important:** Before you set shutdown hours, you must configure the minimum capacity in the Ocean cluster to 0.

## Schedule Shutdown Hours in the Console

1. Click **Ocean > Cloud Clusters** on the main menu on the left.
2. Select a cluster from the list of clusters.
3. At the top-right of the screen, click the **Actions** menu and select **Customize Scaling**.
4. Turn on the Cluster Shutdown Hours by moving the slider to the right.

![aks-cluster-shutdown-hours](https://github.com/user-attachments/assets/4561cd2f-598f-4896-9f62-43ac6f83184e)

5. Set your shutdown (off)/running hours by clicking or dragging the mouse in the timetable. The selected chunk changes from blue to gray color.
6. Save your changes.

>**Note:** If you need to change the schedule during off-hours, you can do so without instantly waking up the cluster. The cluster will wake up only when you activate it manually by making a capacity change.

## Schedule Shutdown Hours in the API for the Cluster

You can schedule shutdown hours with the Spot API parameter `cluster.scheduling.shutdownHours`. 
The time range defined in the API represents the ranges in which the cluster will be scaled to zero. 
The API uses this mechanism to reduce the chances of a human error that would cause an unwanted scale-down to zero.

The value defined in the `shutdownHours.timeWindows` field is effective only when the `shutdownHours.isEnabled` field is set to `true`.

## Schedule Shutdown Hours in the API per Virtual Node Group

Cloud service provider relevance: AWS Kubernetes and AKS

You can use the Spot API to configure [shutdown hours](ocean/features/running-hours?id=shutdown-hours-per-vng) for one or more individual virtual node groups.

For AWS Kubernetes, set shutdown hours under: `launchSpec.scheduling.shutdownHours`:
* [Create VNG](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate)
* [Update VNG](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate)

>**Note:** `isEnabled` must be set to **True** to turn on shutdown hours.

For AKS, set shutdown hours under:
* [Create VNG]()
* [Update VNG]()




