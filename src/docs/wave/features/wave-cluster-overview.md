# Wave Cluster Overview

The Wave Cluster Overview tab gives you quick access to insights and summary data over the entire cluster. You can obtain an overview of your current cost efficiency status, detailed cluster information, a Spark application overview, and tracking of cluster analytics.

To get to the Wave Cluster Overview tab, do the following:
1. In the Spot console, go to Wave in the menu tree and click Clusters.
2. In the list of Clusters, click on a Cluster Name.

<img src="/wave/_media/tutorials-clusters-01.png" />

The Wave Cluster page opens with the Overview tab open and the cluster name at the top. Next to the cluster name, a status icon indicates the cluster status as one of the following:

<img src="/wave/_media/tutorials-clusters-00.png" width="246" height="47" />

The Wave Cluster Overview includes the following main areas:
- Cluster Stats
- Cluster Info
- Spark App History
- Cluster Analytics

## Cluster Stats

Cluster Stats is a summary line providing insights into your cluster usage. The default display shows statistics from the first of the month to the current date. You can also see the numbers for the last seven days and the last 30 days. The following information is presented:
- Spark Cluster Cost Savings
  - Potential On-Demand Cost: The cost if you had run all of your jobs using on-demand instances.
  - Actual Spot Cost: The actual cost of running your jobs on spot instances.
  - Savings Rate: The actual Spot cost compared to the potential on-demand cost.
- Wave Nodes: Number of instances in your Wave cluster.
- Running Apps: Number of applications running in your Wave cluster.
- Completed Apps: Number of applications in the cluster that have completed running.
- Total Apps: Sum of running applications and completed applications.
- App Hours: Total number of application running hours in the selected time period.

## Cluster Info

The Cluster Info area gives you a quick point of reference for vital information about the cluster.

<img src="/wave/_media/tutorials-cluster-02.png" />

The following details and references are provided:
- Cluster Info
  - Link to view cluster in Ocean
  - Region
  - Date Created
  - Last Heartbeat
  - Kubernetes Version
  - Wave Operator Version
  - Unregistered Instances
  - Unscheduled Applications
- Spark Info
  - Link to Spark UI
  - Spark UI Username
  - Spark UI Password
  - Spark Version
  - Spark Operator Version
- Jupyter Info
  - Jupyter Endpoint
  - Jupyter Token

## Spark App History

The Spark App History table provides an overview of your Spark application runs in this cluster.

<img src="/wave/_media/tutorials-cluster-03.png" />

The table includes the following information for each application run:
- App Name: The name of the application run. You can click on the App Name to see more detailed information about the application.
- App ID: The ID of the application given by Wave.
- Started: Time the application run started.
- Completed: Time the application run ended.
- Last Update: Time of the last heartbeat received from the application.
- CPU Uptime: The amount of time the application used CPU.
- Data Read: The amount of data the application ready during its run.
- Spark User: The user name of the Spark application user.
- Status: Status attributed to the application run. Statuses include:
  - Success
  - Failure
  - Deploying
  - Running
  - Unknown

## Cluster Analytics

Wave provides detailed analytics about the cluster. You can view the following graphs and charts:
- App Success/Failure Trend: A histogram showing the number of successful and failed application runs over time.
- Node Distribution: A graph showing the number of nodes running over time. The graph shows a line for each region and node type.
- Node Activity: A graph showing the number of nodes running over time, broken down by lifecycle, i.e., reserved, on-demand, and spot.
- Spark Job Activity: A graph showing the number of Spark jobs running over time, broken down according to pending, running, and unscheduled jobs.
- Spark App Last Completion Runtime: A bar chart showing the amount of time to run the last completion of the application. The chart shows the last runs of the last 15 applications run.

You can set the time span shown in each graph to six hours, one day or seven days.

## View Log

To view the Wave log, click the Log tab at the top of the Wave Cluster page.

## Remove Cluster

You can remove a cluster directly from the Wave Cluster page. Just click Remove in the upper right.

## What’s Next?

Learn more about Wave’s [Cost Analysis](wave/features/cost-analysis) of your Spark cluster.
