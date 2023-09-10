# View Workflow Details

For each [Workflow](eco/tutorials/manage-workflows) you create, you can view a summary of the rules included, generate a workflow report, and access information about reports created in the past.

Reports are provided as a part of your workflow so that, as you build workflows, you can easily validate the results against your existing processes.

To get to the Workflow Details page, do the following:

1. In the left sidebar of the console, click Reports.
2. Click the Workflows tab, and click the name of a workflow.

<img src="/eco/_media/tutorials-view-workflow-details-01.png" />

The Workflow Details page includes the following areas:

- Workflow Summary
- List of Reports


The workflow summary includes the following details:

- Name: The user-given name of the workflow.
- Creation date: The date the workflow was created.
- Selected billing rules: The rules you defined in the workflow.

<img src="/eco/_media/tutorials-view-workflow-details-02.png" width="357" height="315" />

## Reports Table

The Reports table provides a convenient overview of past reports created for this workflow. The report includes:

- Name: The name you gave the report.
- Report Period: The time frame covered in the report.
- Subset Assignment: The subsets included in the report.
- Group by: The parameters chosen for grouping the data in the report.
- Status: Indicates whether the report is still processing, successfully created, or failed.

<img src="/eco/_media/tutorials-view-workflow-details-03.png" />

## Generate a Workflow Report

To create a new workflow report, do the following:

1. On the upper right of the Reports table, click Generate report.

<img src="/eco/_media/tutorials-view-workflow-details-04.png" width="600" height="217" />

2. In the Generate report popup, complete the following information:
   - Name: Enter a name that will help you remember the purpose of this report.
   - Report Period: The time frame of billing dates to which you want to apply the billing flow.
   - Subset Assignment: The groups of accounts to which the report will apply.
   - Group by: Define the layers of aggregation to apply to the report. Each “Group by” category you choose will appear as a header in the report.
3. Click Generate Report. The system starts generating the report, and the report record appears in the Reports table with the status indicated.

## Obtain a Report

A report that was successfully created is downloadable via the UI for a limited period of time. On the right side of the Reports table, click the Download icon.

<img src="/eco/_media/tutorials-view-workflow-details-05.png" width="594" height="122" />

If you are interested in programatic access to scheduled reports, please submit a support ticket.

## Schedule a Report
Scheduling a report is a way to repeat an existing report that you may repeat weekly or monthly.

<img src="/eco/_media/tutorials-view-workflow-details-07.png" />

1. Click the report you want and select Add a Schedule. The Schedule Workflow window opens.

<img src="/eco/_media/tutorials-view-workflow-details-08.png" />

2. Enter the start date of your schedule.
3. Select the range of the report (Month to date, Previous Month, or Previous Week), and how frequently the report repeats (Daily, Weekly, Monthly, Does Not Repeat). When the information is entered, a description of when the report will run and the details of the report will appear. If this information is correct, click Save Schedule to schedule the future report(s).

<img src="/eco/_media/tutorials-view-workflow-details-09.png" />  

## Example Report

The example report generated below is organized according to the Group by options: Customer, Usage Account, Service, Region, Charge Type, and Lifecycle.


Report Header | Description
------------- | -------------
Customer  | Only appears when the Subset grouping was selected when defining the report. This was defined by the user when creating a subset.
Usage Account | Only appears when the Account grouping was selected when defining the report. This is the AWS AccountID, obtained from your cost and usage report
Account Name | Only appears when the Account grouping was selected when defining the report. This is the name of the account, obtained from Cost Explorer
Service | Only appears when the Service grouping was selected when defining the report. This is the AWS Service, obtained from your cost and usage report.
Region | Only appears when the Region grouping was selected when defining the report. This is the AWS Region, obtained from your Cost and usage report.
Charge Type | Only appears when the Region grouping was selected when defining the report. This is derived from from your Cost and usage report, transformed to match the filters of Cost Explorer. When this grouping is selected, savings columns will not be shown.
Lifecycle | Only appears when the Lifecycle grouping was selected when defining the report. This is derived from from your cost and usage report, transformed to match the filters of Cost Explorer. When this grouping is selected, savings columns will not be shown.
Unblended | The raw, unblended cost of resources, grouped according to the report configuration. Obtained from the original cost and usage report.
Charge From Report | What started as the unblended costs are now modified costs, processed according to the workflow you selected.
Difference | Charge From Report minus Unblended
Total Savings | Net savings gained from savings plans and reservations from all sources. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
RI Savings Only | Net savings gained from reservations from all sources. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
Eco RI Savings | Net savings gained from Eco-generated reservations. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
SP Savings Only | Net savings gained from savings plans from all sources. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
Eco SP Savings | Net savings gained from  Eco-generated savings plans. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
RI Ondemand Cost | On-demand cost of resource which have been discounted by RIs
SP Ondemand Cost | On-demand cost of resource which have been discounted by Savings Plans
RI Effective Cost |  Reserved Instances effective cost (amortized cost + recurring cost) allocated to the resource which consumed the discount from RIs. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
SP Effective Cost | Savings Plan effective cost (amortized cost + recurring cost) allocated to the resource which consumed the discount from SPs. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
Eco RI Effective Cost |  Reserved Instance effective cost (amortized cost + recurring cost) allocated to the resource which consumed the discount from Eco RIs. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
Eco SP Effective Cost | Savings Plan effective cost (amortized cost + recurring cost) allocated to the resource which consumed the discount from Eco Savings Plans. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.
Eco Total Savings | Total sum of Eco savings. Not currently available when Charge Type or Lifecycle groupings are selected as grouping during the report configuration. Your workflow has no impact on this column.



TotalSavings, RISavingsOnly, Eco RI Savings, SPSavingsOnly, and Eco SP Savings are great ways to see your commitments’ effectiveness. Here are some important notes about Savings:

- Net savings is the difference between discounted cost and on-demand equivalents, plus portioned, effective cost of the commitments themselves.
- The sum of savings associated with accounts not included in the report will appear as a row with the AccountID as 'Other'.
- Most reports will not show Savings within the Master Payer unless a billing rule requests the Master Payer to appear (for instance, when the Master Payer recoups the cost of commitments as a result of the Cross-Account Cost Sharing rules).

<img src="/eco/_media/tutorials-view-workflow-details-06a.png" />

## Delete a Workflow

You can delete a workflow from the Workflow Details page. In the upper right of the page, click Delete workflow.

## What’s Next?

Learn more about how to [Manage Subsets](eco/tutorials/manage-subsets).
