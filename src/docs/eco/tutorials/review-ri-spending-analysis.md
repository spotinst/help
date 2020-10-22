# Review RI Spending Analysis

The Analysis page appears to new customers who have connected an AWS account to Spot, but have not yet committed to a reserved instance strategy.

Once Eco is connected to your cloud account, a period of data aggregation begins which lasts up to 48 hours. Once the account usage and billing reports are completely analysed, Eco will display the Analysis page that summarizes your current reserved instance utilization.

The Analysis page presents the following information:

- Analysis
  - Potential Yearly Savings: The yearly amount that could be saved by using the reserved instance recommendations.
  - All time Waste: Amount wasted on unused reserved instances.
  - Last Week Missed Savings: The amount you could have saved with a cost-optimized workload.
  - Current RI Commitment: The monthly amount of reserved instance compute capacity you are currently committed to.
  - Recommended RI Commitment: The monthly amount recommended for your workload following the Eco analysis.
- Reserved Instance Total Waste: A chart that breaks down the potential yearly savings per service.
- Potential Yearly Savings per AWS Service: A chart that shows the yearly savings that can be achieved with reserved instances per AWS service.

<img src="/eco/_media/tutorials-review-ri-spending-01.png" />

Your next step is to click Choose Strategy. Eco will produce recommendations for an optimized RI portfolio, and you will specify your preferred commitment length.

Once the strategy is set, Eco will move to the active execution stage and present the Overview Dashboard.
