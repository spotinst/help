# Optimize your Cloud

The Optimization page shows key areas in your accounts where you can achieve significant optimizations and provides actionable recommendations that you can start implementing with the click of a button.

To get started, go to Overview in the left sidebar of the Spot console and click Optimization.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-001.png" />

### Cloud Provider

The data on the page is summarized per cloud provider. If you have multiple accounts connected to Spot, choose the cloud provider you want to see (AWS, Azure or GCP).

### Filters

You can use the filters to choose where you want to focus your optimization analysis.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-002.png" width="500" />

- Product: Choose Spot Storage, Elastigroup, Ocean or Eco. The default view is Elastigroup.
  - If you choose Ocean or Elastigroup, continue reading below about the Accounts filter, the Summary line, and Workloads.
  - If you choose Eco, [scroll down](connect-your-cloud-provider/optimize?id=eco) the page for further information.
- Accounts: Select one or multiple accounts. You can also analyze across all accounts.

## Summary Line

The summary line provides some data about savings you have missed and estimated savings you could achieve over the next year.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-003.png" />

- Last Week Missed Savings: The amount you could have saved over the past week by optimizing workloads across the selected accounts.
- Instances: Number of instances you have had running over the last month.
- Estimated Monthly Savings: Estimate of savings you could achieve over the next month by letting Spot manage your workloads on Spot instances. In addition, you can see the savings rate as a percent.
- Estimated Annual Savings: Estimate of savings you could achieve over the next year by letting Spot manage your workloads on Spot instances.

## Workloads

The Workloads area shows your services and workloads where you can achieve the most savings. Spot analyzes your cloud resources and displays workloads that are not yet connected to Spot (Elastigroup or Ocean). You can take action immediately and import those workloads to enjoy the cost savings and optimization features.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-005.png" />

### Filter by Services

The row of tiles shows savings data for each of the services and is in descending order from the left,  with the greatest potential savings on the far left.

The table below lists the workloads, and by default, the 10 workloads with the most savings to gain are listed first.

You can filter the workloads that appear in the table by clicking on one or more of the tiles (i.e., a service) above. For example, if you click ELB, as shown below, only the ELB workloads appear in the table.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-006.png" />

### Filter by Keyword

Alternatively, you can use the Filter box and filter by keyword.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-007.png" width="300" />

You can also save filters in presets. Presets save filters that have been selected.

<img src="/connect-your-cloud-provider/_media/presets-1.png" />

### Actionable List of Workloads

The list of workloads shows the results of any of the filters you apply. The workloads are listed in descending order, with the workload with most potential savings at the top.

To start realizing the savings immediately, click Get started in the Actions column.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-008.png" />

This will start the import process either to Elastigroup or Ocean (depending on which product you are viewing).

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-009.png" width="460" />

## Eco

If you chose Eco in the Product field, and you do not yet have Eco, you will be prompted to sign up for Eco.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-010.png" width="500" />

Once you have completed the sign-up for Eco, you will be connected to Spot with a management account. The next step is to choose a Strategy.

<img src="/connect-your-cloud-provider/_media/optimize-your-cloud-011.png" width="500" />

Once you have a Strategy, you will be directed to the Eco Optimization page.

## What’s Next?

Learn more about Spot’s [cost analysis](cloud-analyzer/tutorials/analyze-your-costs) of your cloud resources.
