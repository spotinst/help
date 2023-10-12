# Analyze Your Costs

In a containerized world, in which multiple applications and services share the same infrastructure, it is often hard to distinguish the costs of different applications, services, and environments.

Ocean breaks down the infrastructure costs of your clusters and provides insights on each of the layers which can be used to analyze the application costs and perform chargebacks.

To view a comprehensive breakdown of your cloud cluster costs, go to the Cost Analysis tab in the Ocean console. The cost analysis is presented in two formats, a bar chart and a detailed breakdown table.

## Bar Chart

The bar chart shows the cost of your workloads over time. The default display is that each bar is broken down into the different namespaces and represents the cost per day over the last week. You can modify the time period and groupings shown to suit your needs. See Grouping Options below for more information.

<img src="/ocean/_media/cost-analysis-5.png" />

## Breakdown Table

The breakdown table presents an itemization of costs per namespace and costs within each namespace. Items include the following:

- Namespace: Name of the namespace
- % of total costs: Cost of the namespace as a portion of the total of the entire cluster
- Compute Cost: The portion of the cost for computing
- Storage Cost: The portion of the cost for Kubernetes persistent volumes and instance volumes
- Network Cost: Part of costs pertaining to amount of data transfer between workloads and services such as Inter-AZ, Internet, Inter-Region and Intra-AZ costs
- Total Cost: Total cost of that namespace

<img src="/ocean/_media/cost-analysis-4.png" />

Double-click on the arrow to show a breakdown of the workloads within the namespace. For each workload, you can see the following details:

- Name: Name of the workload in the namespace
- Kind: The Kubernetes kind, such as deployment, daemonSet, statefulSet, cronJob
- % of Namespace Costs: Cost of the workload as a portion of the all the workloads in the namespace
- Compute Cost: The portion of the cost for computing
- Storage Cost: The portion of the cost for data storage
- Total Cost: The total cost of that workload

## Grouping Options

You can define the time period for which the analysis is presented and set your preferences for grouping the breakdowns.

### Cost Over Time

Click on Date to open the calendar. You can choose from the following time periods:

- 7D: The last seven days. This is the default display.
- Today: Costs for Today.
- 1M: The last 30 days.
- Custom: In addition, you can create a custom time period by clicking on the start date and end date in the calendar.

The example below shows a custom definition for the days February 5 – 8.

<img src="/ocean/_media/tutorials-analyze-your-costs-03.png" />

After you change the time period, Ocean will recalculate the presentation of the bar chart and the breakdown table.

### Group By

The default grouping is by namespace. To choose a different grouping, click Group By and choose one of the groupings which include:

- Namespace
- Label (Namespace)
- Annotation (Namespace)
- Label (Resource)
- Annotation (Resource)

Once you have chosen a grouping, choose the Key from the list of keys in your cluster.

The example below shows the grouping by Label (Resource) with Key equal to `Family`. The table details all of the values for the Label Key `Family` that exist in the cluster.

<img src="/ocean/_media/cost-analysis-2.png" />

## Add Filter

Sometimes it is useful to create an analysis that takes only certain workloads into consideration. You can do this by adding a filter.

To apply a filter to your cost analysis, choose a filter from the list of saved filters.
To create a new filter, click Add Filter and a fill out the filter criteria.

## What's Next?

Learn how to [Create a Cost Analysis Filter](ocean/tutorials/create-a-cost-filter).
