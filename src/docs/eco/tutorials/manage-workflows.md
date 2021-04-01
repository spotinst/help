# Manage Workflows

Cloud administrators and Managed Service Providers (MSPs) face the challenge of presenting cloud spend data clearly to their users and customers. Complex billing conditions and logic -- such as amortization, discount sharing or unsharing, and customer uplifts and discounts -- can make reporting a major challenge. Using Eco Workflows, your cloud spending will be clear and accounted for.

The Workflows feature simplifies and clarifies the presentation of cloud charges. It enables you to do the following:
- Create a sequence  of billing rules that can be applied to one or more subsets of accounts
- Apply billing workflows on-demand in the form of reports

Workflows simplify your cloud administration process by providing:
- Easy validation: Reports are provided that enable you to quickly validate the results against your existing data and processes.
- Complete visibility: After you have validated your workflow, you and your customers can see your billing rules already embedded into the analysis tool so that there is no discrepancy between on-demand reporting and month-end charges.

## View List of Workflows

To see your list of workflows:
1. In the left sidebar of the console, click Subsets.
2. Click the Workflows tab.

<img src="/eco/_media/tutorials-manage-workflows-01.png" />

The Workflows list gives you a quick view of your workflows and basic information including:
- Name: The user-defined name of the workflow. You can click on the name to view the [workflow details](eco/tutorials/view-workflow-details).
- Description: A brief description of the workflow.
- Creation Date. The date the workflow was created.

## Filter Workflow List

If you have a long list of workflows, you can use the filter above the list to find one or multiple workflows. Just enter a keyword or simply a string of text into the filter box and type enter.

## Create a Workflow

To create a new workflow, do the following:
1. In the upper right, click Create new workflow.

<img src="/eco/_media/tutorials-manage-workflows-02.png" width="320" height="368" />

2. Enter a name for the workflow.
3. Activate the billing rules you need and mark the options relevant to each rule. Enter any additional information required by the rule. (See below for detailed descriptions.)
4. Click Create. The new workflow will appear in the Workflows list.

## Billing Rule Descriptions

The billing rules available in the user interface are sufficient to capture most use cases. However, the Spot system is flexible enough to create numerous custom workflows. If you require a billing rule or a workflow sequence that cannot be created through the UI, contact the Support team and Spot will work with you to create a custom workflow. The rules available in the UI are described below.

### Replace RI Discounts with Public OD Price:

You may charge the full on-demand price in place of RI discounts.
- When purchased by any account:

  All accounts could be permitted to share their discounts with each other, it is also possible to remove all those discounts. This is helpful for scenarios when reservations or savings plans are completely managed by another party.

- Only when purchased by the following accounts:

  Only when purchased by the accounts you choose from the list below. Discounts are removed only when the home of the reservation or savings plan is a specified group of accounts. This is helpful for scenarios where linked accounts are allowed to recognize discounts from their own portfolio of reservations, but not recognize discounts when they were purchased by different customers or departments.

### Replace Savings Plan discounts with Public OD Price:

You may charge the full on-demand price in place of Savings Plan discounts. See above for explanations of the options.

### Remove credits and/or refunds:

There are a variety of financial benefits from working with AWS which a business may opt to share with their end customers or retain as margin. These options are familiar to AWS MSPs:
- EDP
- Data Egress Waiver
- APN Partner Accelerator
- Solution Provider Program
- Other Credits (Any credits not addressed by the above.)

### Remove Volume Discounts

In general, these margin opportunities represent savings given by AWS for volume consumption. Your business may opt to share these savings with end customers or retain them as margin.

- Charge customer “top rate” for all usage:

  Top rate refers to AWS tiered pricing where free usage is the first tier. Because free usage was designed with direct-to-AWS payments in mind, it can often cause inconsistency and confusion in AWS Organizations where multiple end-customers have the opportunity to consume usage from the free tier.

- Charge customer “top rate” for free usage, provide cooperative tiering:

  You may charge the "top rate" (the first, non-free rate AWS would change) for all usage.  If you do not mind sharing some volume discounts, only charge top rate to prevent free usage.

- Remove [RI Volume Discounts](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/#Amazon_EC2_Standard_Reserved_Instance_Volume_Discounts):

  When these volume discounts occur, you may elect to retain them for margin.

### Uplift of Discount

After all the other rules have been applied, the charges are increased or decreased by the specified percent.
- Uplift by: Enter the percent to increase.
- Discount by: Enter the percent to discount.

## What’s Next?

Learn about the [Workflow Details](eco/tutorials/view-workflow-details) summary and how to create a workflow report.
