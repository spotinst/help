# Manage Clusters

Ocean for Apache Spark (also referred to as Ocean Spark) enables you to see an overview of all your Ocean Spark clusters, get status at a glance, perform tasks such as adding and removing clusters, and drill down to more detailed cluster information when you need to.

To manage your clusters in the Spot console, go to Ocean for Spark in the menu tree and click Clusters.

<img src="/ocean-spark/_media/tutorials-wave-clusters-01a.png" />

## View List of Clusters

The list of Ocean Spark clusters gives you a quick view of your clusters and basic information including:
Cluster Name: The user-given name of the cluster. A colored icon next to the cluster name indicates the current health status.

- Cluster ID: The ID that Ocean Spark assigned to the cluster upon creation.
- Region: The cloud provider region where the cluster is located.
- Nodes: The number of nodes in the cluster.
- Running Apps: The number of applications running in the cluster.
- Creation Date: The date the cluster was created.
- Action: An option to remove the cluster from Wave.

## View Cluster Details

To get detailed information, statistics, and operational information about a cluster, click on the Cluster Name. This will open the [Cluster Overview](ocean-spark/product-tour/view-cluster-details) tab for that cluster which serves as your operational dashboard for the cluster.

## Filter Cluster List

If you have a long list of clusters, you can use the filter above the list to find one or multiple clusters. You can filter by cluster name, cluster ID, or region. Alternatively, you can enter a tag, an attribute, a keyword, or simply a string of text into the filter box and type Enter.

## Add Cluster

To add a cluster, click Add Cluster above the cluster list and complete the procedures described in [Get Started](ocean-spark/getting-started/) with Ocean for Apache Spark.

## Remove Cluster

To disconnect a cluster you don’t need any more, do the following:

1. Click Remove in the Action column.
2. Enter the name of the cluster to confirm, and click Remove Cluster.

<img src="/ocean-spark/_media/tutorials-wave-clusters-02a.png" />

## What’s Next?

Learn how to get detailed cluster statistics and trends in the [Cluster Overview](ocean-spark/product-tour/view-cluster-details) tab.
