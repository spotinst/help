# Containers

In the Cloud Analyzer [Optimization](cloud-analyzer/tutorials/use-optimization-dashboard/) dashboard, the Containers tab provides an overview of the containerized environments across your connected cloud accounts and recommends potential optimizations.

## Summary Line

At the top of the Containers page, you will find a summary line which displays the following:

- Last Week Missed Savings: The amount of funds that could have been saved over the past week by optimizing container workloads across the selected accounts.
- Instances: The number of relevant instances analyzed.
- Estimated Monthly Savings: The amount of money that could be saved per month by migrating container workloads to run on spot instances rather than on-demand.
- Estimated Annual Savings: The amount of money that could be saved per year by migrating container workloads to run on reserved Instances rather than on-demand.

## Services Breakdown

In the middle of the Container page, you will find the Services Breakdown. For each container service, such as EKS, ECS or GKE, the breakdown shows the number of instances, the estimated additional savings, and the estimated savings rate as a percent.

## Workloads

At the bottom of the tab is the Workloads table, which contains the actual clusters discovered within the connected cloud accounts. You can filter the table by attributes such as cluster name, account or type. Each cluster will display the following information:

- Name
- Account
- Type
- Instance count
- Instance Types
- Estimated Monthly Savings
- Estimated Savings (%)
- Action

## Take Action

You can take action right away to optimize your workloads and start saving on cloud costs. Do the following:

1. In the Action column of the Workloads table, click Get Started. A wizard will open to import the chosen workload.
2. Click Console and complete the required information for the import.

## Additional Actions

In the Workloads table, you can also do the following:

- Exclude from Spot: Excludes workloads that you have marked from the potential savings calculations. The workload will remain in the table and appear grayed out.
- Include in Spot: Returns excluded workloads back to the potential savings calculations. The item will no longer appear grayed out.
- Export: Exports the data in the Workloads table to a CSV file.

<img src="/cloud-analyzer/_media/tutorials-optimization-containers-01.png" />
