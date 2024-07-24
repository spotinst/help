# Set Maximum Scale Down Percentage for Virtual Node Group or Cluster (GKE) via the Console

Cloud service provider relevance: <font color="#FC01CC">GKE</font> 

The Maximum Scale-down Percentage (`maxScaleDownPercentage`) is the maximum percentage allowed to scale down in a single scaling action on the nodes running in a specific Virtual Node Group or the entire cluster.

You can apply the `maxScaleDownPercentage` attribute via the Ocean console at either the cluster or Virtual Node Group level. The boundaries are 0-100 %, and the default value is 10%. 

Note the following:

* When you create a cluster, `maxScaleDownPercentage` is turned on for the cluster by default. 
* When you create a Virtual Node Group, `maxScaleDownPercentage` is turned off by default.
* `maxScaleDownPercentage` is mutually exclusive. You cannot apply it simultaneously at both the cluster and Virtual Node Group levels.

## Set Set Maximum Scale Down Percentage for a Cluster

To set the maximum scale-down percentage for a cluster:

1. click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. From the Actions drop-down menu on the top-right of the screen, click **Customize Scaling**.

The maximum scale-down percentage is turned on by default. Accept or change the default 10 % value and save your changes.

![autoscaling-enabled-at-cluster-level](https://github.com/user-attachments/assets/6e6e639c-5a9a-4311-9ac7-011d269d61e7)

>**Note**: If you previously set the maximum scale-down percentage for a Virtual Node Group in the cluster, the Virtual Node Group value applies (not the cluster value). In addition, each Virtual Node Group for which you did not specifically set a value will use the default 10% value.  In the example below, 50% was set for the cluster.

![cluster-when-vng-was-enabled](https://github.com/user-attachments/assets/a0d2c280-147f-4b8e-a0f0-fdd9a993e997)

>**Note**: You can set `maxScaleDownPercentage` for a cluster from the [Spot API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate) under `autoScaler` > `down`.

## Set Maximum Scaledown Percentage for a Virtual Node Group

To set the maximum scale-down percentage for a Virtual Node Group:

1. click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. In the Virtual Node Groups (VNG) tab, select the specific Virtual Node Group.
4. Scroll down to the **Advanced** panel.
5. By default, the maximum scale-down percentage is turned off.  Click to turn it on. Accept or change the current value, and save your changes.

![gke-scale-down-max-vng-level](https://github.com/user-attachments/assets/62421150-e705-411a-89a1-c1ee47ed99c3)

>**Note**: If you turn off the maximum scale-down percentage for all your Virtual Node Groups, the value set at the cluster level will apply, and you can adjust that value.

You can set `maxScaleDownPercentage` for a Virtual Node Group from the [Spot API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate) under `launchSpec` > `down`.
