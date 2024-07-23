
<meta name=“robots” content=“noindex”>

# Set Max Scale Down Percentage for Virtual Node Group or Cluster (GKE) via the Console

This topic applies to GKE.

Max Scale Down Percentage (`maxScaleDownPercentage`) is the maximum percentage allowed to scale down in a single scaling action on the nodes running in a specific Virtual Node Group or the entire cluster.

You can apply the `maxScaleDownPercentage` attribute via the Ocean console at either the cluster or Virtual Node Group level. The boundaries are 0-100 %, and the default value is 10%. 

Note the following:

* When you create a cluster, `maxScaleDownPercentage` is turned on for the cluster by default. 
* When you create a Virtual Node Group, `maxScaleDownPercentage` is turned off by default.
* `maxScaleDownPercentage` is mutually exclusive. You cannot apply it simultaneously at both the cluster and Virtual Node Group levels.

## Set Set Max Scale Down Percentage for a Cluster

To set the max scale-down percentage for a cluster:

1. click **Ocean > Cloud Clusters**in the left main menu.
2. Select a cluster from the list of clusters.
3. From the Actions drop-down menu on the top-right of the screen, click **Customize Scaling**.

By default, the max scale-down percentage is turned on. Accept or change the default 10 % value, and save your changes.

