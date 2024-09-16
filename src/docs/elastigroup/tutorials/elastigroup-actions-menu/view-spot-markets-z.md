# View Spot Markets

The Spot Markets page provides insights about the status of your chosen instance types within the greater AWS spot market. For example, you can see how your cluster instances are distributed throughout the market, what the current trends in interruption rates are, and what the typical spot instance lifetimes are of instances like yours. The information presented on this page can help you to understand the behavior of the currently configured markets and make changes as required.

## Go to the Spot Markets Tab

To get to the Spot Markets tab:

1. In the Spot console, go to Elastigroup and click Groups.
2. Click on the name of the Elastigroup and click the Spot Markets tab.

<img src="/elastigroup/_media/tutorials-view-spot-markets-01.png" />

## Distribution

This is a trend chart showing the distribution of your instances in the Elastigroup among all markets configured in the group. A given market consists of a specific product and instance type per availability zone. Hover your mouse over the graph to see count details at a specific time.

You can view the graph over six hours, one day, or seven days.

<img src="/elastigroup/_media/tutorials-view-spot-markets-02.png" />

## Interruption Rates

This graph shows the interruption rates of all markets configured in the Elastigroup. For each market, the figures are based on data collected from all Spot customers. In addition, you can hover the mouse over a specific market and see how many interruptions occurred on your instances in that hour.

In the illustration below, for example, there were 200 interruptions among all the Spot customers in the indicated market between 6:00 and 7:00, and this specific customer experienced 9 interruptions.

You can use this graph to compare your own rate of interruptions to that of the rest of the market and to gain visibility of your markets that may have high risk of interruption.

<img src="/elastigroup/_media/tutorials-view-spot-markets-03.png" />

## Spot Instance Lifetime

In this chart, each bar represents a market, and the height of the bar indicates the average duration of an instance in that market. The chart includes a bar for each market configured in the Elastigroup. Using this chart, you can understand which markets are more stable, and you may want to use this information to define these as preferred markets.

<img src="/elastigroup/_media/tutorials-view-spot-markets-04.png" />

## Managed Instance Types

This chart shows how many instances (of all types) are managed by Spot in real time. The instances aggregated in this chart are instances that run the same OS as configured in the Elastigroup.

You might see that Elastigroup does not manage a specific instance type in an AZ or that there are only a small number of instances in an AZ. This indicates that the market is a low score market and, therefore, Elastigroup prefers to not launch instances in this market to most of our customers.

<img src="/elastigroup/_media/tutorials-view-spot-markets-05.png" />

## What’s Next?

Learn how to view details about the [Load Balancers](elastigroup/tutorials/elastigroup-actions-menu/view-load-balancers) in your Elastigroup.
