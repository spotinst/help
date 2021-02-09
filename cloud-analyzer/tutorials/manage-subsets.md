# Manage Subsets

A *subset* is a group of accounts within an organization that are assigned to the same logical unit. Within your organization, you can create subsets of accounts for the purpose of analyzing data of several related accounts together and creating reports relevant to your organization.

Example scenarios that utilize subsets include:
- A managed service provider (MSP) or reseller that manages customers and needs the ability to group several accounts together for cost analysis. For example, you can define each customer as a subset and then manage the AWS accounts for that customer as a unit.
- An organization that needs to see cost analysis based on divisions (e.g., Sales, Marketing, and R&D) or business units.  For example, you might set up one subset for R&D, one for  DevOps, and one for Customer Support.

For a given organization:
- A subset can include any of the accounts listed in the CUR file for your organization.
- An account can belong to one subset only.

## Prerequisites

You must have the Subsets feature enabled. Please contact technical support to submit a request.

## Create a Subset
1. In the left sidebar, click Subsets and then click Create new subset.

<img src="/eco/_media/tutorials-manage-subsets-01.png" />

2. Enter a name for the subset and then click Assign Accounts.

<img src="/eco/_media/tutorials-manage-subsets-02.png" />

3. Mark the accounts to be included in the subset and click Assign.

<img src="/eco/_media/tutorials-manage-subsets-03.png" />

4. Click Create. The new subset will now be visible in the list on the Subsets page.

> Tip: If you are already in the Cost Analysis page, just click Create Subset on the upper right.

## View Subset List

To view a list of your subsets and manage them, click Subsets in the left sidebar.

<img src="/eco/_media/tutorials-manage-subsets-04.png" />

The Subsets page displays the following information:
- Name: The name you gave to the subset. To see more details about the subset, click the name. The Subset Details page will appear.
- Accounts in subset: Number of accounts in the subset.
- Last month cost: Amount you paid the cloud provider (AWS) for this subset in the last full month.
- MTD cost: Amount you owe the cloud provider for this subset from the first of the current month until now.
- Expected monthly cost: Estimated amount you will owe the cloud provider for this subset at the end of the current month.
- Subset info: To see more information about the subset, click View Spend Details. This will open the [Cost Analysis](cloud-analyzer/tutorials/analyze-your-costs.md) page and display the accounts in this subset.

## View and Edit Subset Details

You can view all the information about a specific subset and modify the details. To display subset details, do the following:
1. Click Subsets in the left sidebar.
2. Click the name of a subset.

<img src="/eco/_media/tutorials-manage-subsets-05.png" />

The Subset Details page displays the following information:
- Subset name: The name you gave to the subset.
- Accounts: A table providing an overview of the accounts in this subset. The table includes the following columns:
  - Account name: The name you gave to the account.
  - Account ID: The internal identifier Spot has assigned to the account.
  - Last month cost: Amount you paid the cloud provider (AWS) for this account in the last full month.
  - MTD cost: Amount you owe the cloud provider for this account from the first of the current month until now.
  - Expected monthly cost: Estimated amount you will owe the cloud provider for this account at the end of the current month.
  - Actions: Tasks you can perform in the account (described below).

### Actions

The Actions column shows options you can click on to perform a task in the account.
- View details: This action appears if the account is connected to Spot. Click here to see detailed account information in the Compute Overview tab of the [Optimization](cloud-analyzer/tutorials/use-optimization-dashboard/) dashboard.
- Connect: This action appears if the account is not yet connected to Spot. Click here to connect the account.

## Assign and Unassign Accounts

Once you have created subsets, you may need to assign or unassign accounts from time to time. In Cloud Analyzer, click Subsets in the left sidebar, and then click a subset name.

You can add an account to only one subset.

### Assign accounts
1. Click Assign Accounts.
2. Mark the accounts to add to the subset and click Assign.

### Unassign accounts
1. In the Subset Details page, mark the accounts to take out of the subset.
2. Click Unassign Accounts.

<img src="/eco/_media/tutorials-manage-subsets-06.png" />

3. Confirm that you want to take the account out of the subset by clicking Yes, unassign.

## Delete a Subset

If you need to delete one or more subsets, do the following:
1. In Eco, click Subsets in the left sidebar.
2. Mark the checkboxes of the subsets to delete.
3. Click Delete Subset and confirm the deletion by clicking Yes, delete.

Alternatively, if you are already in the Subset Details page and decide to delete the subset, just click Delete Subset at the top right of the page.

## What’s Next?

Once you have set up your subsets, you can view important information about the subsets in the Cost Analysis page. Learn more about viewing and filtering subset information in [Analyze your Costs](cloud-analyzer/tutorials/analyze-your-costs.md).
