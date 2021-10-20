# View Load balancers

When you have load balancers configured in your Elastigroup, the Load Balancers tab provides a convenient reference point for all your load balancer information. You can see a list of all the load balancers and get an overview of metrics, trends, resource utilization, and errors occurring.

Some of the information in this tab appears only when Intelligent Traffic Flow (ITF) is activated and is indicated where applicable.

## Go to the Load Balancers Tab

To get to the Load Balancers tab:

1. In the Spot console, go to Elastigroup and click Groups.
2. Click on the name of the Elastigroup and click the Load Balancers tab.

<img src="/elastigroup/_media/tutorials-load-balancers-01a.png" />

## List of Load Balancers

The list of load balancers provides an overview of all the load balancers currently integrated in the group. Metrics appearing in the table are taken from the last minute.

- Name: Name the load balancer or target group configured in the Elastigroup.
- Healthy Instances: Number of healthy instances out of all instances connected to the load balancer.
- Weight (%): (ITF only) The traffic distribution weight given to the target group. Calculated as the number of healthy vCPUs in the target group per total number of vCPUs in the Elastigroup.
- Requests: Number of requests received by the load balancer or target group in the last minute.
- Latency: The average latency of each load balancer or target group over the last minute.
- HTTP 5xx Errors: Number of 5xx errors that occurred in the last minute.
- HTTP 4xx Errors: Number of 4xx errors that occurred in the last minute.
- Price per CPU: (ITF only).

> **Tip**: You can click the Refresh icon in the upper right to refresh the data in the table. You can also switch on the Autorefresh button, which will refresh the data automatically every 60 seconds.

<img src="/elastigroup/_media/tutorials-load-balancers-02.png" />

## Metrics and Trends

Metrics and trend charts present data about your load balancer activities to help you understand the traffic status and identify possible issues. You can filter the data presented in the following ways:

- In the list of load balances, mark the load balances and target groups that you want to see in the charts.
- For each chart, you choose a timeframe of six hours, one day or seven days.

### Requests

This is a trend chart showing the number of requests each load balancer served in the selected time period.

<img src="/elastigroup/_media/tutorials-load-balancers-03.png" />

### Latency

This is a trend chart showing the average latency of each load balancer during the selected time period.

### Errors

The number of errors that occurred in the selected time period. Choose whether you want to see 4xx or 5xx errors.

### CPU Utilization

This is a trend chart showing the percent CPU utilization for each instance in the target group.

<img src="/elastigroup/_media/tutorials-load-balancers-04.png" />

### Requests & Average Utilization per Target Group

This graph appears only when you have ITF activated. The bars in this graph indicate how many requests each target group serves. You can see the exact number of requests per target group by hovering the cursor over the bar.

The line indicates the average CPU utilization in each target group. You can see the exact CPU utilization of each target group by hovering over the relevant target group.

<img src="/elastigroup/_media/tutorials-load-balancers-05.png" width="426" height="321" />

This graph illustrates that the number of requests that each target group serves is different and relative to the number of vCPUs it has, but the CPU utilization in each target group is approximately the same.

### CPUs & Instances per TG

This graph indicates how many instances and vCPUs each target group has. The graph appears only when you have ITF activated.

## What’s Next?

Learn how to:

- [Create a New Elastigroup](elastigroup/tutorials/elastigroup-tasks/create-an-elastigroup-from-scratch).
- Get an [Overview](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-overview) of your Elastigroup details.
