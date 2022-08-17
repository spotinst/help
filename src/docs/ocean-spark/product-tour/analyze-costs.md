# Analyze Costs

Ocean for Apache Spark (Ocean Spark) provides full visibility into the cloud cost of your Ocean Spark cluster, including a cost analysis over time per Spark application, a detailed cost drill-down on each application, and your total cost for the cluster.

To get to the Cluster Cost Analysis tab, do the following:

1. In the Spot console, go to Ocean for Spark in the menu tree and click Clusters.
2. In the [list of Clusters](ocean-spark/product-tour/manage-clusters), click on a Cluster Name and click the Cost Analysis tab.

The Cost Analysis tab opens and shows the cluster name at the top.

<img src="/ocean-spark/_media/tutorial-wave-cost-analysis-01a.png" />

## Cost over Time

The first part of the cost analysis is a bar chart showing the cloud costs (compute and storage) incurred by the cluster over time. You can adjust your view of the data by setting the following parameters:

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

## Allocate Cloud Costs Using Custom Labels

You can define custom cost labels for each application you run on Ocean Spark.

Here is an example configuration which you can insert in your configuration templates, in your job configuration, or directly in your API calls as configOverrides.

```json
{
  "labels": {
    "team": "data-engineering",
    "project": "etl",
    "environment": "production",
  }
}
```

You will then be able to view your cloud costs, grouped by these custom cost labels, using the Cost Analysis page of Ocean (and not Ocean Spark). To find this page:

1. From your Ocean Spark cluster page, click "View cluster in Ocean".
2. Then click "Cost Analysis".
3. In the "Group By" dropdown, select "Label (Resource)", and then pick your label key ("team", "project", or "environment").

Visit the Ocean documentation to learn more about [how Ocean estimates your cloud costs](/ocean/features/cost-analysis).

## What’s Next?

Learn more about [monitoring your applications](ocean-spark/product-tour/monitor-applications).
