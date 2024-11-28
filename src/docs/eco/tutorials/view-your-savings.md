
# View Savings in Dashboard

After enabling Eco for your organization and selecting your [reserved instance (RI) strategy](eco/tutorials/choose-a-strategy), you can monitor your savings by accessing the Eco dashboard (AWS). This dashboard provides a comprehensive view of your cost optimizations.

To view the Eco dashboard in the console: 
1. Click **Eco** on the left menu> **Dashboard**.
2. Click **AWS**. 

![eco-dashboard](https://github.com/user-attachments/assets/d212398a-c6da-47b5-9b84-e487468c8ddd)

## Filters

The default dashboard view provides an overview of data of all accounts in your organization, from the first day of your AWS account. It encompasses information from all regions and AWS services utilized. You can customize the data displayed on the dashboard by using the drop-down filters. For example, you can display according to services such as EC2, RDS, and ElastiCache. 

You can set the following filters: 

- **Time**: Select the range of dates.
- **Regions**: Select the regions.
- **Services**: Select the services.

## Summary Line

The Overview dashboard includes a summary line of: 
* **Total Saved**: Total amount saved as a result of reserved instance and savings plan coverage. 
* **Current Commitment**: The amount currently committed to reserved instances. The lower the commitment, the more flexible and dynamic the account's compute resources can be. 
* **MTD Savings**: Total generated savings from the first day of the month to the most recent update. 
* **EC2 ESR**: Effective Savings Rate (ESR) is the average savings across an entire compute usage. The calculation for Effective Savings Rate (ESR) is [Net Savings]/[On-Demand Cost Equivalent]. Net Savings include the total savings achieved subtracted from the cost of unused commitments. This displays the ESR for EC2, ECS/ Fargate, EKS, and Lambda, excluding Spot instances.
* **Non-EC2 ESR**: The AWS services considered are RDS, Redshift, ElastiCache, and OpenSearch. 
* **EC2 ESR with Spot**: The AWS services considered are all EC2 usage (including spot usage) plus other services that can be covered by a compute savings plan: EC2, ECS/Fargate, EKS, and Lambda. 

## Graphs and Charts

Eco provides summary graphs and charts that give you a broad perspective on your savings and commitments, allowing you to easily filter them. These graphs are displayed: 

### Savings Over Time

A bar graph shows each month's savings amount broken down by type of savings from reservations and savings plans. You can use the filters at the top of the page, and source filters specific to each graph.

- **All**: This source filter displays all savings provided by Eco, Non-Eco and Support Savings.
- **Eco**: This source filter displays all savings provide by Eco.
- **Non-Eco**: This source filter displays all savings provided by the customer.
- **Support Savings**: This source filter displays all savings Eco saved you on AWS Support Plans. AWS provides different Support Tiers and charges differently for each tier. Eco retrieves and calculates how much you would spend on support if you weren’t using Eco. Eco does not charge customers based on these savings.
- **Savings Data vs. Billing Data**: The savings data displayed is the total saved by Eco and Non-Eco services from AWS data. This data may differ from the billing data presented in the Spot console retrieved from AWS on the 5th of every month. For further insights into the calculation of fees, please refer to the following documentation: [Fee Calculation Details](connect-your-cloud-provider/dashboard?id=fee-calculation). 

<img src="/eco/_media/view-savings-savings_overtime-1.png" />

**Note**: RI Volume Discounts may appear in Savings Over Time because they also reduce the cost of reservations. Eco includes these cost reductions in our net savings calculations. 

### Monthly Commitment Over Time

A bar graph showing your reserved instance and monthly savings plan commitment broken down into Standard Reservations, Convertible Reservations, and Pending Reservations, plus Compute and EC2 savings plans. To view the up-front fees from an amortized view and the recurring fees, turn on the view accordingly in the top right. Regardless of the data range that is selected in the date filter, this graph remains static and can provide information six months back and thirty-six months into the future. 

<img src="/eco/_media/view-savings-monthly_commitment_overtime.png" />

The export from this table provides an amortization report, which breaks down each commitment as a CSV file with the following information: 

- **Amortized Commitment**: The amortized amount for the month. If there is no upfront commitment, this will be zero.
- **ARN**: The AWS Resource Name unique to the commitment.
- **Date**: The year and month of the amortized amount.
- **Duration**: The number of seconds used in the calculation for which the investment should provide discounts with consideration for RI marketplace transactions.
- **Expiration**: The expiration date of the commitment.
- **Instance Family or Type**: The instance family of the reservation or type of the savings plan.
- **Region**: The region in which the commitment was purchased.
- **Upfront Commitment**: The basis for the amortized commitment. If there is no upfront commitment, this will be zero.
- **Recurring Commitment**: The monthly commitment charge.  
- **Total Commitment**: Total commitment spend.

### Coverage Over Time

A line graph breaks down how reservations, savings plan coverage, and commitments relate to your overall savings. 
* The left chart displays the difference between your actual spend and what could have been your costs for reservable services without a savings strategy. 
* The right chart presents the same data the same data, but with your actual spend explained as the combination of commitment cost and uncovered spend. 

The coverage calculation considers dollars or your investment used instead of hours, which differs from AWS Cost Explorer. For actual spend, the calculation only considers what is reservable for a service (e.g., Eco only uses the on-demand purchase option, with the Running Hours usage type groups and the Usage charge type). You can use the source filter specific to the Coverage Over Time graph.  

* All  
* Eco  
* Non-Eco

<img src="/eco/_media/view-savings-coverage_overtime-1.png" />

### Commitment Usage Distribution Over Time

A filterable table and corresponding chart allow you to review your commitments in various ways.

<img src="/eco/_media/view-savings-commitment_usage_distro_overtime.png" />

- **Account ID**: Account number identifier.
- **Commitment ID**: Identifier of the Reservation or Savings Plan. The row and ID will be displayed if they meet the criteria set by the filters.
- **Commitment Type**: Standard RI, Convertible RI, Compute Savings Plan, or EC2 Savings Plan.
- **$ Used**: The total equivalent cost within the time range multiplied by the utilization.
  - **Example 1**: If the time range covered the entire term of the reservation, it was 100% utilized, and the total equivalent cost was $1000, the result would be $1000.
  - **Example 2**: If the time range was half the history of the same reservation, it would be $500.
  - **Example 3**: If it was only 50% utilized during that period, it would be $250.
  - **Example 4**: If the term of the RI is three years and only one year of the period has passed since it was purchased, it would be possible to show only 33.3% of the total equivalent cost in this field, at maximum.
- **% Used**: Utilization within that time period.
- **Equivalent OD Price**: The on-demand price during the specified time period.
- **Generated Savings**: How much you saved due to using commitments' discounted rates instead of the full on demand rates. Calculation: On-demand instances subtracted by commitments and the uncovered spend. Not necessarily the same as net savings.
- **Source**: Eco or Non-Eco.

### Total Active Commitments

This chart provides amortized costs (i.e., up-front plus recurring costs) of all active commitments according to the designated filters and views.

<img src="/eco/_media/view-savings-total_active_commitments.png" />

## Commitment Details Report

Below the overview graphs and pie charts, you can view detailed information about your reserved instances, including your total generated savings at the bottom of the table. 

<img src="/eco/_media/view-savings-commitment_details.png" />

When a reservation reaches its expiration, Eco first assesses whether renewing it is the appropriate course of action. If renewal is suitable, the expired coverage will be substituted with the most optimal commitment that offers a combination of flexibility and cost savings. Upon renewal, a new lease ID will be generated. It is important to note that depending on the circumstances, an expired reservation may be renewed with different parameters and may not exactly match.

### Filter Data

You can filter the data displayed according to several criteria available.

1. Click the filter search bar and select a parameter. 
2. Choose the specific value(s) to be displayed by typing them or selecting from the list. 

### Display Columns

You can customize the columns in the table. The following information is available:

- **Savings type**:
  - COMP SP: Compute Savings Plan
  - EC2 SP: EC2 Savings Plan
  - SAGE SP: Sagemaker Savings Plan
  - RI-S: Standard Reserved Instance
  - RI-C: Convertible Reserved Instance
- **Instance type**
- **Quantity**: The number of instances in the batch.
- **Service**
- **Region**
- **OS**
- **Payment option**: Indicates how you have opted to pay for the RIs: All upfront, partial upfront, or no upfront payment.
- **Offering class**: Indicates whether the RIs are standard or convertible.
- **Start date**: The date on which this batch of RIs was purchased.
- **End date**: The date on which this purchase commitment will end.
- **OD cost equivalent**: The amount it would cost to use the same resources with on-demand instances.
- **Generated savings**: The amount the commitment saved over using on-demand instances and reservations.
- **Source**: Indicates whether the RIs were purchased by Eco or not.

### Export Data

To export the Reservation Details report to a CSV file, click **Export** above the table. The exported data will include the ARN for each reservation.

## ESR – Effective Savings Rate Chart 

The ESR graph presents information about total savings rates achieved across an entire compute usage, covering all usage (including EC2, ECS, EKS, and Lambda). Effective Savings Rate (ESR) represents the average savings across an entire usage. The calculation of Effective Savings Rate (ESR) is [Net Savings]/[On-Demand Cost Equivalent]. Net Savings include the total savings achieved subtracted from the cost of unused commitments.

In this case, the entire compute usage considered is all usage that can be covered by non-spot EC2, ECS/Fargate, EKS, and Lambda. This report includes On-Demand, Savings Plan, and RI usage but excludes Spot instances. Factors like coverage, utilization, waste, and commitment savings rates impact ESR. 

### Filters 

The default view of the chart shows all AWS services in your organization and you can filter the data. For example, you can display according to services such as EC2, RDS, and ElastiCache. 

You can set the following filters: 

* **Time**: Select the range of dates to display data. 
* **Services**: Select the services to display in the chart. 

![eco-esr-1](https://github.com/user-attachments/assets/015d1360-09bb-4485-af4a-b0f3e538b470)

## Effective Cost and Waste Chart 

The Effective Cost and Waste chart shows the effective hourly cost (actual incurred cost with upfront costs distributed) and waste over the last 120 days. Costs are displayed across the three main purchase options and any unused commitments. 

### Filters 

The default view of the chart shows all AWS services in your organization, and you can filter the data. For example, you can display according to services such as EC2, RDS, and ElastiCache. 

You can set the following filters: 

* **Time**: Select the range of dates to display data. 
* **Services**: Select the services to display in the chart. 

![eco-esr-2](https://github.com/user-attachments/assets/143d86f6-e6aa-4573-bdf5-a60888ae4197)

## Utilization Over Time Chart

The chart Utilization over Time displays the hourly utilization rate, combining RI and SP utilization, as a percentage of committed costs utilized. 

### Filters 

The default view of the chart shows all AWS services in your organization, and you can filter the data. For example, you can display according to services such as EC2, RDS, and ElastiCache. 

You can set the following filters: 

* **Time**: Select the range of dates to display data. 
* **Services**: Select the services to display in the chart. 

![eco-esr-3](https://github.com/user-attachments/assets/8d97afca-08fe-4808-9245-f95cab621699)


