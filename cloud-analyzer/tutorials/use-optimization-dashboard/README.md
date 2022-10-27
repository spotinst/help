# Use the Optimization Dashboard

In Cloud Analyzer, the Optimization dashboard acts as a doorway to the rest of the platform. The dashboard displays a cross account savings summary and identifies workloads that can be optimized using the solutions offered by the Spot platform. The dashboard provides actionable recommendations that you can start implementing with the click of a button.

The dashboard includes several tabs which are described below.

## Compute Overview

At the top, you will find a summary line which displays the following:

- Last Week Spot Missed Savings: The amount you could have saved over the past week by optimizing workloads across the selected accounts.
- Last Week RI Missed Savings: The amount you could have saved with a cost-optimized RI workload.
- Monthly Spot Potential Savings: The amount of money that could be saved by migrating suitable workloads to run on spot instances rather than on-demand.
- Monthly RI Potential Savings: The amount of money that could be saved by migrating suitable workloads to run on reserved Instances rather than on-demand.

Below the summary line, you will find the following graphs:

- Spot Estimated Potential Savings: A chart that demonstrates the potential monthly savings attainable using spot instances broken down per cloud account.
- RI Estimated Potential Savings: The potential monthly savings attainable using reserved instances broken down per cloud account.
- Lifecycle Breakdown: A pie chart that demonstrates how compute hours across all accounts are spread out across different lifecycles (pricing models): Spot, RI and On-Demand.
- Cost Efficiency over Time: A graph showing the aggregated cost efficiency of all your provider accounts (connected and not connected to the platform) over time.
- Efficiency % = (Current Savings/Potential savings)\*100.

At the bottom of the Compute Overview, you will find the Use-cases Breakdown. This section provides previews of the other Optimization tabs:

- [Containers](cloud-analyzer/tutorials/use-optimization-dashboard/containers): Recommendation and estimate of savings if you would run your container workload on spot instances instead of on-demand instances
- [Elastic Applications](cloud-analyzer/tutorials/use-optimization-dashboard/elastic-applications): Recommendation and estimate of savings if you would run your application workload on spot instances instead of on-demand instances
- [Reservations](cloud-analyzer/tutorials/use-optimization-dashboard/reservations): Recommendation and estimate of savings if you would run your workload on reserved instances instead of on-demand instances

Each preview contains the number of instances in that category currently running, an estimation of additional savings that can be obtained using optimization, and the current savings percentage.

<img src="/cloud-analyzer/_media/tutorials-optimization-01a.png" />
