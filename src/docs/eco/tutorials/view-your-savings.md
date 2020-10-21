# View your Savings

Once Eco is enabled for the account and you have chosen your reserved instance [Strategy](eco/tutorials/choose-a-strategy.md), you can view information about your savings in the Overview dashboard.

## Summary Line

The Overview dashboard includes a summary line which displays the following information:

- Total Saved: Total amount saved as a result of reserved instance utilization.
- Current Commitment:The amount currently committed to reserved instances. The lower the commitment, the more flexible and dynamic the account’s compute resources can be.
- Additional Potential Savings: The amount of additional potential savings in USD on top of existing RIs.
- Current EC2 Commitment: The current percentage of On-Demand instances in the account that are covered by reservations.
- Max EC2 Commitment: Maximum potential committed amount.

By default, the items above include all of your AWS services. However, you can use the drop-down filter, Selected Services, to display the information for specific services. You can display according to services such as EC2, RDS, and ElastiCache.

## Graphs

By default, all services are included. Below, you will find the following graphs:

- Savings over Time: A bar graph showing the amount of savings each month broken down per service.
- Commitment over Time: A bar graph showing your reserved instance commitment per month broken down into Standard, \* \* Convertible, and Pending instances.
- Commitment per Service: A pie chart showing the current reserved instance commitment broken down into the different services.
- Commitment per Region: A pie chart showing the current reserved instance commitment broken down by region.

The graphs and charts can be filtered according to the items in the legend.

<img src="/eco/_media/tutorials-view-savings-01.png" />

As Eco manages the account’s RI pool, the commitment over time graph will begin to gradually indicate shorter commitment terms, while savings will increase towards their maximum potential.
