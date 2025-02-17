<meta name="robots" content="noindex">

# Dynamic Commitments (AKS)

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

## Overview

Ocean Elastigroup and Stateful Node automatically revert existing VMs using reserved instances (RIs) and savings plans (SPs) to spot VMs or other commitment deals wherever a reservation is needed elsewhere in your Azure account. This feature optimizes resource allocation and cost efficiency by continuously adjusting to dynamic environment needs.

This is in accordance with the Ocean, Elastigroup, and Stateful Node commitment prioritization mechanism, which prioritizes available reserved instances and savings plan commitments over spot or full-priced on-demand VMs. This procedure describes how application workloads that require on-demand VMs can always benefit from reservations, even if they were previously prioritized for utilization when available.

You can track dynamic compute commitment utilization and coverage with your Azure Cost Usage report

## Feature Benefits 

By prioritizing RI and SP commitments, this feature continually adapts to the dynamic needs of your environment. Dynamic commitments management lets you:

* Prioritize available RIs and SPs.
* Revert from On-demand RI and SPs.

## Prioritize Available RIs and SPs

Prioritize available RIs and SPs to prevent their underutilization. See [Utilize Commitment Plans](elastigroup/features/core-features/spot-reserved-on-demand-instances?id=utilize-commitment-plans). 

<!--
##  What are Azure Reservations?
Azure Reservations helps you save money by committing to one-year or three-year plans for multiple products. Committing gets you a discount on the resources you use. Reservations can significantly reduce your resource costs by up to 72% from pay-as-you-go prices. Reservations provide a billing discount and don't affect the runtime state of your resources.  

After purchase, the reservation discount automatically applies to the resource usage that matches the attributes you select when you buy the reservation. Attributes include the SKU, regions (where applicable), and scope. Reservation scope selects where the reservation savings apply. 

##  How are Reservations applied to Azure VM Instances?

You can save money once you commit to an Azure reserved VM instance. The reservation discount is applied automatically to the number of running VMs matching the reservation scope and attributes. You don't need to assign a reservation to a VM to get the discounts. A reserved instance purchase covers only the compute part of your VM usage. For Windows VMs, the usage meter is split into two separate meters. There's a compute meter, which is the same as the Linux meter, and a Windows server license. The charges you see when you purchase are only for the computing costs. Charges don't include Windows software costs. See [Understand Azure Reserved VM Instances Discount - Microsoft Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-vm-reservation-charges#how-reservation-discount-is-applied). -->

##  What are Azure Commitments?

Azure Commitments are agreements customers make to use a certain amount of Azure resources over a specified period, including RIs and Saving Plans.

Commitments Types are as follows:

*  Capacity Commitments: Involves reserving VM capacity to ensure availability and predictability.
*  Cost Commitments: Involves committing to a certain spending level to benefit from discounts.

RIs are best for predictable workloads where you can commit to specific VM types and sizes, while SPs offer more flexibility for varying workloads across different services. Both options help reduce costs through committed usage, ensuring better budget management and resource allocation in Azure.

##  What are Azure Reserved Instances?

Azure RIs let you reserve VMs in Azure for a one- or three-year term, providing significant cost savings compared to pay-as-you-go pricing, and provide the following benefits:

*  Cost Savings: Typically offers discounts of up to 72% compared to on-demand prices.
*  Predictable Billing: Helps budget and forecast costs as you pre-purchase capacity.
*  Flexibility: You can exchange or cancel RIs, providing flexibility in your commitment.

What are Azure Savings Plans?

Azure SPs offer a flexible pricing model that lets you save up to 65% on your Azure compute costs in exchange for a commitment to spend a specific amount over a one- or three-year period and provide the following benefits:

*  Flexibility: Unlike RIs, SPs apply to a broader range of services and can adjust based on your usage patterns.
*  Automatic Savings: Automatically applies savings to eligible resources, making managing costs across multiple services easier.
*  No Commitment to Specific VM Sizes: You can switch between different VM sizes and types without losing savings.

## Revert from On-demand RIs and SPs

Revert from on-demand RIs when they can be used in other workloads to increase commitments coverage replacement. When working with dynamic workloads in the cloud, Ocean, Elastgroup, and Stateful Node adjust to application requirements, needs, and usage changes at any time. Ocean, Elastgroup, and Stateful track commitments are necessary conditions for initiating proactive replacements, thus increasing the account’s commitment coverage to decrease excessive on-demand usage. Ocean, Elastgroup, and Stateful achieve this by reverting to a different allocation plan or potentially using spot instances based on the user's risk configuration, therefore providing ongoing optimal adjustments.

## Commitments Scenarios

<img width="1000" src="https://github.com/user-attachments/assets/ae781249-3fff-4647-9cc4-35bd8573abf8" />


###  Launching a VM

Ocean checks if an RI or SP applies to the market selection. If so, Ocean utilizes that RI/SP.

###  Running Spot VMs

Ocean replaces spot VMs with regular VMs and utilizes RI/SP if applicable.

###  Running Regular VMs

Ocean utilizes RI/SP as a wrapper for a regular VM if applicable to cost savings.

###  Running Regular (RI/SP) VMs

Ocean Checks if RI/SP is needed elsewhere. If so, Ocean replaces it with a spot or regular (RI/SP) from a different plan, as follows:

Ocean performs a strategy fix check every **xx (to check)** minutes to determine if a running RI or SP can be replaced to free up the commitment needed elsewhere in the account. 

1. **Running regular (RI/SP)**: A running regular VM attached to a specific RI or an SP uses a specific commitment. 

2. **Ocean checks if the commitment is required elsewhere**: Ocean constantly checks if a different resource can utilize a commitment in your Azure account, ultimately meeting the risk percentage and required strategy.

3. **Replacement**: Ocean will replace if the terms are met.

4. **Launch spot or regular(RI/SP)**: Ocean launches a different spot or an alternative regular RI/SP to ensure a different plan is used. This increases commitment coverage to help reach optimal allocation.

The reversion will not occur if:

* There is no alternative commitment or spot VM to revert back to. 
* It violates the group's regular VM count request. 

##  Connect Commitments to Spot Products

Follow the instructions below while referring to the [Azure documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate):

###  Step 1: App Registration:

1. Log in to your Azure account.
2. Go to App Registration.
3. Create a new application registration.
4. Set the Redirect URI to `https://spot.io`
>**Note:** Spot requires this URI for authentication purposes.
5. Enter the following IDs:
   *  Application (client) ID.
   *  Directory (tenant) ID.

###  Step 2: Certificates & Secrets

1.  In Azure, under the newly created application, click **Certificates & secrets**.
2.  Create a new client secret and set the expiration to **24 months**.
3.  Enter the following details:
    * Application secret expiration date.
    * Client secret value.
    * Secret ID.

###  Step 3: Permissions Assignment

The first time you want to use dynamic commitments, you must add permissions at the tenant level so Spot can connect to Azure cluster environments. These permissions provide you with access to all the resources under the same tenant.
Once the permissions exist, you can turn on dynamic commitments at the virtual node group level.
>Note: If this step is unsuccessful, check your Azure environment.


1.  Use the following Azure PowerShell script to assign the Reservation Reader role at the tenant level with PowerShell:

```
Import-Module Az.Accounts
Import-Module Az.Resources

Connect-AzAccount -Tenant {TENANT_ID}

## Assign Reservation Reader role
New-AzRoleAssignment -Scope "/providers/Microsoft.Capacity" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Reservations Reader"

## Assign Savings Plan Reader role (optional)
New-AzRoleAssignment -Scope "/providers/Microsoft.BillingBenefits" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Savings plan Reader"
```

2.  Optional- Check **true** on the Saving Plan Permission if you want to add and include it.
3.  Click **Test RIs/SPs to Spot Permissions** to verify that your permissions have been successfully granted.
    *  The toggle should change to **on** for the specific virtual node group.
  
##  Enable Utilize Commitments per Virtual Node Group

1. Make sure that tenant-level permissions are successfully granted.









## Configure in the API 

**COMMENT: Need to put AKS links and parameter names.**

You can use this feature at the cluster or virtual node group level:

* [Create cluster]() or [Update cluster]()
* [Create virtual node group]() or [Update virtual node group]()

Set the `utilizecommitments` or `utilizeReservedInstances` parameter to `true`.

>**Note**: The default value for the `utilizeReservedInstances` parameter is `true`.

