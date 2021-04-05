# View Savings in Dashboard

Once Eco has been enabled for your organization and you have chosen your reserved instance (RI) [Strategy](eco/tutorials/choose-a-strategy), your Eco dashboard will switch to a more complete view of savings.

To view the Eco dashboard in the console, go to Eco on the left side and click Dashboard.

<img src="/eco/_media/tutorials-view-savings-01b.png" />

## Filters

The default view of the dashboard shows data from all the accounts in your organization.

By default, the dashboard shows data since the first day of your AWS account, from all regions, and from all of your AWS services. However, you can use the drop-down filters to limit the scope of data displayed. For example, you can display according to services such as EC2, RDS, and ElastiCache.

You can set the following filters:

- Selected Services: Choose the services which will be included in the charts and tables.
- Time: Choose the range of dates for which data will be displayed.

## Summary Line

The Overview dashboard includes a summary line which displays the following information:

- Total Saved: Total amount saved as a result of reserved instance utilization.
- Current Commitment:The amount currently committed to reserved instances. The lower the commitment, the more flexible and dynamic the account's compute resources can be.
- Additional Potential Savings: The amount of additional potential savings in USD on top of existing RIs.
- Current EC2 Commitment: The current percentage of On-Demand instances in the account that are covered by reservations.
- Max EC2 Commitment: Maximum potential committed amount.

## Graphs and Charts

Eco provides summary graphs and charts to give you wide visibility of your savings and commitments. The graphs and charts can be filtered according to the items in the legend. The following graphs are displayed:

- Savings over time: A bar graph showing the amount of savings each month broken down by type of savings. This graph will allow you to visualize savings from reservations and savings plans. The graph will respond to the filters at the top of the page, but also to “source” filters specific to the graph itself.
  - All
  - Eco
  - Non-Eco
- Commitment over Time: A bar graph showing your reserved instance commitment per month broken down into Standard, Convertible, and Pending instances.
- Commitment per Service: A pie chart showing the current reserved instance commitment broken down into the different services.
- Commitment per Region: A pie chart showing the current reserved instance commitment broken down by region.

## Commitments over Time Report

Below the overview graphs and pie charts, you can see a table with detailed information about your reserved instances, including your total generated savings at the bottom of the table.

<img src="/eco/_media/tutorials-view-savings-02.png" />

You can customize the columns that appear in this table. The following column headings are available:

- Commitment type
- Instance type
- Quantity: The number of instances in the batch.
- Service
- Region
- OS
- Payment option: Indicates how you have opted to pay for the RIs: All upfront, partial upfront, or no upfront payment.
- Offering class: Indicates whether the RIs are standard or convertible.
- Start date: The date on which this batch of RIs was purchased.
- End date: The date on which this purchase commitment will end.
- OD cost equivalent: The amount it would cost to use the same resources with on-demand instances.
- Generated savings: The amount the commitment saved over using strictly on-demand instances.
- Source: Indicates whether the RIs were purchased by Eco or not.
- Generated savings: Savings generated due to the use of reservations.

## What’s Next?

- Learn how to [Manage Subsets](cloud-analyzer/tutorials/manage-subsets).
- Learn more about analyzing and tracking all of your cloud compute expenses with [Cloud Analyzer](cloud-analyzer/).
