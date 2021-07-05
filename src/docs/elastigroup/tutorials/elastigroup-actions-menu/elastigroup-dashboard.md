# Elastigroup Dashboard

The Elastigroup dashboard gives you quick access to insights and summary data over all the Elastigroups in your Spot account. Information on the dashboard is presented for the entire account. You can obtain an overview of your current cost efficiency status, insights for potential savings, and detailed breakdowns of your resource utilization.

## View the Dashboard

In the Spot console, go to Elastigroup in the menu tree and click Dashboard. The Elastigroup dashboard includes the following main areas:

- Elastigroup Stats
- Top Active Elastigroups
- Spot Usage
- AWS Resources
- Reserved Instance Utilization
- CPU Count Breakdown

## Elastigroup Stats

A summary line at the top of the dashboard provides a quick overview of your account, including the total number of Elastigroups in the account. The default display shows statistics from the first of the current month to the current date. You can change the view to show data from last month, the last seven days, the last 30 days, or the last 90 days.

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-01.png" />

The following information appears:

- Running Spot: The total number spot instances running in this account during the chosen timeframe.
- Spot Hours: The total number of hours that spot instances in this account have run in the chosen timeframe.
- Potential Costs: A calculation of what your cost would have been using all on-demand instances.
- Actual Spot Costs: A calculation of your actual costs taking into account the spot instance utilization.
- Savings: The amount of money saved (as a percent), comparing spot instance utilization to your potential cost using on-demand instances.
- Total Saved: The dollar amount you saved during the chosen timeframe.
- Running On-Demand: The total number on-demand instances running in this account during the chosen timeframe.
  On-Demand Hours: The total number of hours that on-demand instances in this account have run in the chosen timeframe.
- On-Demand Costs: The actual cost for the on-demand instances that ran in this account during the timeframe.
- Running RIs: The total number reserved instances running in this account during the chosen timeframe.

## Top Active Elastigroups

This area shows the three most active Elastigroups in the account over the last 24 hours. Activity is defined in terms of events that occurred such as scaling up or scaling down.

On each tile you can see the Elastigroup name, number of instances and curve representing CPU activity over the time period.

- To see the [Overview](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-overview) page of the Elastigroup, click on the tile.
- To see a list of [all Elastigroups](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-management) in the account, click All Elastigroups on the right.

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-02.png" />

## Spot Usage

The graphs in this area provide visibility of your usage trends. You choose from the different time frames to display the graphs.

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-03.png" />

- Potential vs. Actual Costs: This graph shows the trend of your potential costs based on on-demand instances vs. your actual cost using spot instances. The yellow curve represents the total running hours of your instances over time.
- Running Hours Breakdown: This graph gives a breakdown by lifecycle of the hours your instances are running. Trends plotted include Spot Hours, OD Hours, and Average Instance Count.

## AWS Resources

This area provides usage and status information about the various AWS resources you may be running, including the following:

- Instances
- Load Balancers
- EBS Volumes
- Elastic IPs
- S3 Buckets

The map displays the AWS regions in which the resources are managed. The colors in the map correspond to the colors indicated for each resource on the left. You can also see the utilization data by hovering your mouse over the circles in the map.

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-04.png" />

## Reserved Instance Utilization

In this graph, you can see data about your flexible and non-flexible reserved instances (RIs).

- Flexible RIs: This graph provides insight into your NFU utilization per region. (NFUs are normalized factor units, available CPUs based on the AWS [instance size flexibility model](https://aws.amazon.com/blogs/aws/new-instance-size-flexibility-for-ec2-reserved-instances/).
- Non-Flexible RIs: Number of your RIs in use or vacant per AWS market.

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-05.png" />

## CPU Count Breakdown

These graphs show the number of cores in use:

- By Instance Family
- By Instance Lifecycle

<img src="/elastigroup/_media/tutorials-elastigroup-dashboard-06.png" />

## What’s Next?

To see a list of the Elastigroups in your account with high-level summary information, see [Elastigroup Management](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-management).
