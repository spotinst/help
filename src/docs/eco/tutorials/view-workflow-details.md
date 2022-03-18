# View Workflow Details

For each [Workflow](eco/tutorials/manage-workflows) you create, you can view a summary of the rules included, generate a workflow report, and access information about reports created in the past.

Reports are provided as a part of your workflow so that, as you build workflows, you can easily validate the results against your existing processes.

To get to the Workflow Details page, do the following:

1. In the left sidebar of the console, click Subsets.
2. Click the Workflows tab, and click the name of a workflow.

<img src="/eco/_media/tutorials-view-workflow-details-01.png" />

The Workflow Details page includes the following areas:

- Workflow Summary
- List of Reports
- Workflow Summary

The workflow summary includes the following details:

- Name: The user-given name of the workflow.
- Creation date: Date the workflow was created.
- Selected billing rules: The rules you defined in the workflow.

<img src="/eco/_media/tutorials-view-workflow-details-02.png" width="357" height="315" />

## Reports Table

The Reports table provides a convenient overview of past reports created for this workflow. The includes:

- Name: The user-given name of the report.
- Report Period: The time frame covered in the report.
- Subset Assignment: The subsets included in the report.
- Group by: The parameters chosen for grouping the data in the report.
- Status: This indicates whether the report is still processing, successfully created, or failed.

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

## Download a Report

A report that was successfully created is downloadable for a limited period of time. On the right side of the Reports table, click the Download icon.

<img src="/eco/_media/tutorials-view-workflow-details-05.png" width="594" height="122" />

## Example Report

The example report generated below is organized according to the Group by options: Customer, Usage Account, Service, Region, Charge Type, and Lifecycle.

The report produces the equivalent of AWS’s Cost and Usage report, first as raw unblended cost, then showing the public on-demand price for the same level of aggregation, the actual charge from report, and savings. Charge From report is the result of the workflow you defined. 

Savings, RI Savings, and SP Savings are great ways to see your commitments’ effectiveness. sHere are some important notes about Savings:

- RI Savings are provided by Reserved Instances
- SP Savings are provided by Savings Plans
- These are net savings. (The difference between discounted cost and on-demand equivalents, plus portioned, effective cost of the commitments themselves).
- Savings is not currently available when Charge Type or Lifecycle groupings are selected.
- The sum of savings associated with accounts not included in the report will appear as a row titled Other.
- Most reports will not show Savings within the Master Payer unless a billing rule request the Master Payer appear (for instance, when the Master Payer Recoups the cost of commitments as a result of the Cross-Account Cost Sharing rules).

<img src="/eco/_media/tutorials-view-workflow-details-06a.png" />

## Delete a Workflow

You can delete a workflow from the Workflow Details page. In the upper right of the page, click Delete workflow.

## What’s Next?

Learn more about how to [Manage Subsets](eco/tutorials/manage-subsets).
