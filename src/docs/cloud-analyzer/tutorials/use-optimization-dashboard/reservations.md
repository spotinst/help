# Reservations

In the Cloud Analyzer [Optimization](cloud-analyzer/tutorials/use-optimization-dashboard/) dashboard, the Reservations tab provides information and recommendations about optimizing the use of reserved instances. The page displays a summary line at the top and several graphs providing a picture of your current waste and potential savings to be achieved with Spot optimization.

## Summary Line

The summary line displays the following information:

- Potential Yearly Savings: The yearly amount that can be saved by using RI recommendations
- All Time Waste: Total amount wasted on unused RIs
- Last Week Missed Savings: The amount you could have saved in the last week alone using a cost-optimized workload
- Current RI Commitment: The monthly amount of RI capacity you are currently committed to
- Recommended RI Commitment: The monthly RI spend recommended for your workload

## Graphs

The graphs present the following information to help you optimize your utilization of reserved instances:

- Rerserved Instance All-Time Waste: Waste of unused RIs per AWS service each month. The graph can be filtered by service.
- Potential Yearly Savings per AWS Service: Yearly savings that can be achieved using RIs per AWS service. The graph can be filtered by service.
- Savings Over Time: Amount of money that has been saved using RIs.
- Commitment Over Time: The sum of commitment types over time in your portfolio.
- Commitment per Service: Annual RI commitment per AWS service. The graph can be filtered by service.
- Commitment per Region: Annual RI commitment per AWS region. The graph can be filtered by region.

<img src="/cloud-analyzer/_media/tutorials-optimization-reservations-01.png" />

## What's Next?

Learn more about using Spot [Eco](/eco/).
