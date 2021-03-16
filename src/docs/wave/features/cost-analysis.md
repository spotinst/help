# Cost Analysis

Wave provides full visibility into the cost of your wave cluster, including a cost analysis over time per Spark application, a detailed cost drill down on each application, and your total cost for the Wave cluster.

To get to the Wave Cluster Cost Analysis tab, do the following:
1. In the Spot console, go to Wave in the menu tree and click Clusters.
2. In the list of Clusters, click on a Cluster Name and click the Cost Analysis tab.

The Cost Analysis tab opens and shows the cluster name at the top.

<img src="/wave/_media/tutorial-wave-cost-analysis-01.png" />

## Spark App Cost over Time

The first part of the cost analysis is a bar chart showing your Spark application costs over time. Above the chart, you can set the time range for displaying data in the chart.

<img src="/wave/_media/tutorial-wave-cost-analysis-02.png" />

Each bar shows the total cost of the Wave cluster for that time increment and is broken down to show the cost of each application in the cluster.
- You can include or exclude applications from the display by clicking on the application names in the key above the bars.
- To see a subtotal for a particular application, click on its color in a bar.

## Top Spend Summary

Below the bar chart, a table summarizes your top spend applications in the cluster. The applications appear in order from highest to lowest cost proportion in your Wave cluster.

<img src="/wave/_media/tutorial-wave-cost-analysis-03.png" />

The table includes the following information for each application:
- Application
- % of Total Costs
- Compute Cost
- Storage Cost
- Driver Count
- Executor Count
- Total Cost

The total cost for all the applications in the cluster appears at the bottom of the table.

## Application Drill Down

In the Top Spend Summary, you can see a breakdown of costs per driver for each application. Just click on the application name.

<img src="/wave/_media/tutorial-wave-cost-analysis-04.png" />

The breakdown per application shows the following details:
- Driver
- % of App Costs
- Namespace
- Total Executors
- Compute Cost
- Storage Cost
- Executor Count
- Total Cost

## What’s Next?

Learn more about managing your Wave Cluster in the [Wave Cluster Overview](wave/features/wave-cluster-overview) tab.
