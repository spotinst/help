# View Cluster Details

To drill down into the details about your Ocean for Apache Spark cluster, start with the Overview tab, which gives you quick access to insights and summary data over the entire cluster. You can obtain an overview of your current cost, efficiency status, detailed cluster information, a Spark application overview, and tracking of cluster analytics. You can view more details about the cluster in additional tabs including a [cost analysis](ocean-spark/product-tour/analyze-costs) and the [Ocean Controller logs](ocean-spark/product-tour/view-cluster-details?id=view-ocean-controller-log).

To get to the Cluster Overview tab, do the following:

1. In the Spot console, go to Ocean for Spark in the menu tree and click Clusters.
2. In the list of Clusters, click a Cluster Name.

<img src="/ocean-spark/_media/tutorials-clusters-01a.png" />

The Cluster page opens with the Overview tab open and the cluster name at the top. Next to the cluster name, a status icon indicates the cluster status as one of the following:

- Progressing - The cluster resources are being created.
- Deleting - The cluster resources are being deleted.
- Available - The cluster is available.
- Unreachable - The cluster stopped sending heartbeat. This can be caused by the cluster going down or by a networking issue between the cluster and Spot's backend.
- Degraded - One of the cluster components is unhealthy. Some features may not be available.
- Failing - A critical cluster component is unhealthy.
- Unknown - The cluster status API has an unexpected, internal error.

<img src="/ocean-spark/_media/tutorials-clusters-01-1.png" width="642" height="63" />

The Cluster Overview includes the following main areas:

- Metrics
- Cluster Info
- Applications
- Analytics

## Metrics

Cluster Metrics is a summary line providing insights into your cluster usage. The default display shows data from the last 24 hours. You can also see the numbers for the last seven days and the last 30 days. The following information is presented:

- Cloud Compute Cost: The cloud provider’s compute costs incurred by all applications in this cluster during the selected period.
- Efficiency Score: The fraction of the time that Spark executor cores are running Spark tasks.
- Core Hours: Total core resources used by all your Spark applications in this cluster during the selected time period.
- Data Read: Amount of data read during the selected time period.
- Data Written: Amount of data written during the selected time period.

## Cluster Info

The Cluster Info area gives you a quick point of reference for vital information about the cluster.

<img src="/ocean-spark/_media/tutorials-cluster-02a.png" />

The following details and references are provided:

- View Cluster in Ocean: Link to the cluster in Ocean.
- Region: Cloud provider region
- Date Created
- Last Heartbeat: The last heartbeat or the Ocean Spark controller.
- Kubernetes Version
- Ocean Spark Operator Version
- Spark Nodes: The current number of Kubernetes nodes dedicated to Spark in your cluster.
- Status

## Applications

The Applications line gives you a quick rundown of the status of your Spark applications on the cluster. Each tile shows the number of applications in each status during the selected time period. The following statuses are shown:

- Pending
- Running
- Completed
- Killed
- Failed

If you want to go directly to the Applications view, click View Apps or click directly on one of the Application status cards.

<img src="/ocean-spark/_media/tutorials-cluster-04.png" />

## Cluster Analytics

Ocean Spark provides detailed analytics about the cluster. You can view the following graphs and charts:

- App Completion Trend: This graph is a histogram showing the number of completed, failed, killed, and timed out application runs over time.
- App Load History: This graph shows the number of running and pending apps over the selected time and the number of Spark cores used over the same time period.
- App Last Completion Runtime: A bar chart showing the amount of time to run the last completion of a Spark application. The chart shows the last runs of the last eight applications run.

You can set the time span shown in each graph to one, seven, or 30 days.

## View Ocean Controller Log

To view the Ocean controller log for the cluster, click the Ocean Controller Logs tab at the top of the Cluster page.

## Remove Cluster

You can remove a cluster directly from the Cluster page. Just click Remove in the upper right.

## What’s Next?

Learn more about Ocean Spark’s [Cost Analysis](ocean-spark/product-tour/analyze-costs) of your Spark cluster.
