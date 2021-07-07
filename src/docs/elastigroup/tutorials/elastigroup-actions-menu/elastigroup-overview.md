# Elastigroup Overview

The Elastigroup Overview tab gives you quick access to insights and summary data about the group. You can obtain an overview of your current cost efficiency status, detailed Elastigroup information, and tracking of group analytics.

To get to the Elastigroup Overview tab, do the following:

1. In the Spot console, go to Elastigroup in the menu tree and click Groups.
2. In the [list of Elastigroups](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-management), click on an Elastigroup Name.

<img src="/elastigroup/_media/tutorials-elastigroup-overview-01.png" />

The Elastigroup page opens with the Overview tab open and the group name at the top.

The Overview page includes the following main areas:

- Elastigroup Stats
- Elastigroup Info
- Summary Charts
- [Predictive Autoscaling](elastigroup/features/scaling/predictive-autoscaling) Analytics

## Elastigroup Stats

Elastigroup Stats is a summary line providing insights into your group usage. The default display shows statistics from the first of the month to the current date. You can also see the numbers for the last seven days and the last 30 days. The following information is presented:

- Instances: The number of instances running in the Elastigroup.
- Hours: Total number of instance running hours in the selected time period.
- Potential: Your estimated compute cost if you had run all on-demand instances in the selected time period.
- Actual: Your calculated compute cost for the selected time period using spot instances.
- Savings: Percent savings comparing your actual cost to your potential cost.
- Saved: The amount of money (in dollars) you saved during the selected time period.

## Elastigroup Info

The Elastigroup Info area gives you a quick point of reference for vital information about the group.

<img src="/elastigroup/_media/tutorials-elastigroup-overview-02.png" />

The list of items appearing in this area may vary according to the specific features and integrations (such as load balancers) you have enabled in your Elastigroup configuration. Typically, the following items will appear:

- Name
- Group ID
- Availability Zone
- AMI
- Allowed Instance Types
- Creation Date
- VPC
- Security Groups

## Summary Charts

If you do not have predictive autoscaling enabled, the following charts are displayed:

- Instance Count: This chart shows the number of active instances over time and enables you to see events that triggered a scale up or a scale down.
- Distribution: This chart shows the number of your instances in each market. Elastigroup distributes instances among different markets to increase high-availability.

<img src="/elastigroup/_media/tutorials-elastigroup-overview-03.png" />

## Predictive Autoscaling Analytics

When you have predictive autoscaling enabled, you will see the following graphs:

- Activity & Prediction: Shows the instance counts and events over time along with the forecast of the number of instances that will be required at any time.

<img src="/elastigroup/_media/tutorials-elastigroup-overview-04.png" />

- Predicted vs. Actual: The predicted sum of vCPUs vs. the exact count of vCPUs in the group at that time.

<img src="/elastigroup/_media/tutorials-elastigroup-overview-05.png" />

- Distribution: The number of your instances in each market.
- CPU Utilization: The CPU utilization in the group. This is presented as the sum of CPU utilization per instance type in the group. (For example, if there are two m5.2xalrge instances with a CPU utilizaiton of 2 percent each, then the value in this graph will be 4.)

## What’s Next?

Learn more about the different [scaling features](elastigroup/features/scaling/) available in Elastigroup.
