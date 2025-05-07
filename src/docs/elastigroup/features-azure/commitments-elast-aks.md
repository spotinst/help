<meta name="robots" content="noindex">

# Commitments (AKS)

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

>Prerequisites: Before you can utilize commitments in Elastigroup for AKS, you must first purchase commitments from Azure.

##  Azure Commitments

Azure Commitments are agreements you make to use a certain amount of Azure resources over a specified period, including RIs and Saving Plans.

Commitment types are as follows:

*  Capacity Commitments: Involves reserving VM capacity to ensure availability and predictability.
*  Cost Commitments: Involves committing to a certain spending level to benefit from discounts.

RIs are best for predictable workloads where you can commit to specific VM types and sizes, while SPs offer more flexibility for varying workloads across different services. Both options help reduce costs through committed usage, ensuring better budget management and resource allocation in Azure. 
You can prioritize available RIs and SPs: Prioritize to prevent their underutilization.

###  Azure Reserved Instances

Azure RIs let you reserve VMs in Azure for a one- or three-year term, providing significant cost savings compared to pay-as-you-go pricing, and provide the following benefits:

*  Cost Savings: Typically offers discounts of up to 72% compared to on-demand prices.
*  Predictable Billing: Helps budget and forecast costs as you pre-purchase capacity.
*  Flexibility: You can exchange or cancel RIs, providing flexibility in your commitment.

###  Azure Savings Plans

Azure SPs offer a flexible pricing model that lets you save up to 65% on your Azure compute costs in exchange for a commitment to spend a specific amount over a one- or three-year period and provide the following benefits:

*  Flexibility: Unlike RIs, SPs apply to a broader range of services and can adjust based on your usage patterns.
*  Automatic Savings: Automatically applies savings to eligible resources, making managing costs across multiple services easier.
*  No Commitment to Specific VM Sizes: You can switch between different VM sizes and types without losing savings.


## Commitments Scenarios

<img width="1000" src="https://github.com/user-attachments/assets/ae781249-3fff-4647-9cc4-35bd8573abf8" />


###  Launching a VM

As part of the scale-up process, Elastigroup checks if an RI or SP applies to the market selection. If so,  utilizes that RI/SP.

###  Running Spot VMs

As part of the revert to commitments process, Elastigroup replaces spot VMs with regular VMs and utilizes RI/SP if applicable.

###  Running Regular VMs

As part of the revert to commitments process, Elastigroup utilizes RI/SP as a wrapper for a regular VM if applicable to cost savings.

###  Running Regular (RI/SP) VMs

This is the dynamic commitments scenario. Elastigroup Checks if RI/SP is needed elsewhere. If so, Elastigroup replaces it with a spot or regular (RI/SP) from a different plan, as follows:

Elastigroup performs a strategy fix check every **xx (to check)** minutes to determine if a running RI or SP can be replaced to free up the commitment needed elsewhere in the account. 

1. **Running regular (RI/SP)**: A running regular VM attached to a specific RI or SP uses a particular commitment. 

2. **Elastigroup checks if the commitment is required elsewhere**: Elastigroup constantly checks if a different resource can utilize a commitment in your Azure account, ultimately meeting the risk percentage and required strategy.

3. **Replacement**: Elastigroup will replace if the terms are met.

4. **Launch spot or regular (RI/SP)**: Elastigroup launches a different spot or an alternative regular RI/SP to ensure a different plan is used. This increases commitment coverage to help reach optimal allocation.

The reversion will not occur if:

* There is no alternative commitment or spot VM to revert back to. 
* It violates the group's regular VM count request. 


_________________________________
THIS IS THE END OF THE FIRST PAGE
_________________________________


#  Set up Commitments

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

Before you can turn on commitments for your cluster or virtual node groups, you need to:

*  [Get your Azure credentials](link)
*  [Connect Commitments to Spot Products](link)

Once you have your Azure credentials, you can turn on commitments via either the Spot console or the Spot API.

##  Get the Azure Credentials Required to Connect Commitments to Spot Products

Follow the instructions below while referring to the [Azure documentation](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate):

###  App Registration:

1. Log in to your Azure account.
2. Go to App Registration.
3. Create a new application registration.
4. Set the Redirect URI to `https://spot.io`

>**Note:** Spot requires this URI for authentication purposes.

5. Copy the following IDs (you will need them later on to connect to Spot):
   * Application (client) ID.
   * Directory (tenant) ID.

###  Certificates & Secrets

1.  In Azure, under the newly created application, click **Certificates & secrets**.
2.  Create a new client secret and set the expiration to **24 months**.
3.  Copy the following details (you will need them later on to connect to Spot):
    * Application secret expiration date.
    * Client secret value.
    * Secret ID.

##  Connect Commitments to Spot Products

1.  Obtain the credentials from your Azure app. Refer to [Get the Azure Credentials Required to Connect Commitments to Spot Products]()
2.  Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Elastigroup recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups]()
3.  In the Elastigroup autoscaler strategy area of the virtual node group, click **Missing permissions**.

<img width="600" src="https://github.com/user-attachments/assets/9fa2fd52-3d18-447f-a11c-68a0764da146" />

###  Step 1: App Registrations

1.  In Connect RIs/SPs to Spot wizard, step 1, create (register) a new Azure app or upgrade an existing one.

<img width="600" src="https://github.com/user-attachments/assets/a36fc22d-03b5-4b60-a8a7-72806cf71648" />

2. Copy the following credentials from your Azure app and paste them into the fields:
   * Application (client) ID.
   * Directory (tenant) ID.

<img width="600" src="https://github.com/user-attachments/assets/a3999187-19e9-492c-8c4c-238e756cade4" />

3.  Go to Step 2: Certificates and Secrets

###  Step 2: Certificates and Secrets
    
<img width="600" src="https://github.com/user-attachments/assets/c5342111-e932-445f-b985-daf299531443" />

1. Copy the following credentials from your Azure app and paste them into the fields:
   * Application secret expiration date.
   * Client secret value.
   * Secret ID.

2.  Go to Step 3: Permissions assignment.

###  Step 3: Permissions Assignment

<img width="600" src="https://github.com/user-attachments/assets/2cb2085e-acd0-4096-b646-040eedcae654" />

The first time you use commitments, you must add at least one permission at the tenant level so Spot can connect to Azure cluster environments. 

These permissions give you access to all the resources under the same tenant. You need these permissions to turn on virtual node group-level commitments.

>IMPORTANT: If this step is unsuccessful, check your Azure environment.

1.  Select the permissions in accordance with those you purchased from Azure. By default, both RI and SP are selected.

2.  Use the following Azure PowerShell script to assign the Reservation Reader role at the tenant level with PowerShell:

```
Import-Module Az.Accounts
Import-Module Az.Resources

Connect-AzAccount -Tenant {TENANT_ID}

## Assign Reservation Reader role
New-AzRoleAssignment -Scope "/providers/Microsoft.Capacity" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Reservations Reader"

## Assign Savings Plan Reader role (optional)
New-AzRoleAssignment -Scope "/providers/Microsoft.BillingBenefits" -ApplicationId {CLIENT_ID} -RoleDefinitionName "Savings plan Reader"
```

3.  Click **Test RIs/SPs to Spot Permissions** to verify that your permissions have been successfully granted.
   

##  Turn on Utilize Commitments for Virtual Node Groups from the Spot Console

1. Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Elastigroup recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups]()
2. In the Elastigroup autoscaler strategy area, click **Utilize RIs/SPs**.

>**Important**: If the **Missing permissions** link appears, and Utilize RIs/SPs is grayed, make sure you have completed the following tasks with no errors:
>
>  - [Get Your Azure Credentials](link)
>
>  - [Connect Commitments to Spot Products](link)


## Turn on Utilize Commitments for Virtual Node Groups from the Spot API

---------------------------------------------------------------------
----------THIS WAS TAKEN FROM AWS. NEED TO CHECK FOR AKS-------------
---------------------------------------------------------------------

You might want to distribute reservation instances/savings plans according to virtual node groups for several types of workloads on the same cluster.

Elastigroup provides attributes that let you control utilization commitments at the virtual node group level.

In the Spot API, under Virtual Node Groups > XXX, you can configure these attributes as either `True` or `False`:

*  `shouldUtilizeRCommitments`: If there are free RIs/SPs within the AWS account, Elastigroup will utilize them before launching spot instances. The initial default value is inherited from the identical attribute at the cluster level.

Any change you make at the Virtual Node Group level will override the value set for the virtual node group template.

You can use this feature at the cluster or virtual node group level:

* [Create virtual node group]() or [Update virtual node group]()

Set the `shouldUtilizeRCommitments` parameter to `true`.

>**Note**: The default value for the parameter is `false`.
