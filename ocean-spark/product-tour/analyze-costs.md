# Analyze Costs

Ocean for Apache Spark (Ocean Spark) provides full visibility into the cost of your Ocean Spark cluster, including a cost analysis over time per Spark application, a detailed cost drill-down on each application, and your total cost for the cluster.

To get to the Cluster Cost Analysis tab, do the following:
1. In the Spot console, go to Ocean for Spark in the menu tree and click Clusters.
2. In the [list of Clusters](ocean-spark/product-tour/manage-clusters), click on a Cluster Name and click the Cost Analysis tab.

The Cost Analysis tab opens and shows the cluster name at the top.

<img src="/ocean-spark/_media/tutorial-wave-cost-analysis-01a.png" />

## Cost over Time

The first part of the cost analysis is a bar chart showing your Spark application costs on the cluster over time. You can adjust your view of the data by setting the following parameters:
- Filter by Time: Set the time range for displaying data in the chart.
- Group by: Group the data according to job or user.

<img src="/ocean-spark/_media/tutorial-wave-cost-analysis-02a.png" />

Each bar shows the total cost of the cluster for that time increment and is broken down to show the cost of each job or user in the cluster.
- You can include or exclude jobs or users from the display by clicking on the names in the key above the bars.
- To see a subtotal for a particular job or user, click on its color in a bar.

## Top Spend Summary

Below the bar chart, a table summarizes your top spend jobs or users in the cluster. The jobs or users appear in order from highest to lowest cost proportion in your cluster.

<img src="/ocean-spark/_media/tutorial-wave-cost-analysis-03a.png" />

The table includes the following information for each application:
- Job or User
- % of Total Costs
- Compute Cost
- Storage Cost
- Total Cost

The total cost for all the jobs or users in the cluster appears at the bottom of the table.

### Drill Down

In the Top Spend Summary, you can see a breakdown of costs per application for each job or user. Just click on the job or user name.

<img src="/ocean-spark/_media/tutorial-wave-cost-analysis-04a.png" />

## What’s Next?

Learn more about [monitoring your applications](ocean-spark/product-tour/monitor-applications).
