<meta name="robots" content="noindex">

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
2.  Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Ocean recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups]()
3.  In the Ocean autoscaler strategy area of the virtual node group, click **Missing permissions**.

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

1. Go to the virtual node group where you want to turn on the utilize RSs/SPs feature. This can be any of your virtual node groups or the virtual node group template. Ocean recommends enabling this feature on the virtual node group template so that it is applied to all your virtual node groups in the cluster. See [Manage AKS Virtual Node Groups]()
2. In the Ocean autoscaler strategy area, click **Utilize RIs/SPs**.

>**Important**: If the **Missing permissions** link appears, and Utilize RIs/SPs is grayed, make sure you have completed the following tasks with no errors:
>
>  - [Get Your Azure Credentials](link)
>
>  - [Connect Commitments to Spot Products](link)


## Turn on Utilize Commitments for Cluster or Virtual Node Groups from the Spot API

You might need to distribute reservation instances/savings plans according to virtual node groups for several types of workloads on the same cluster.

in the Spot API, for virtual node groups/clusters, the `shouldUtilizeCommitments` attribute controls utilization commitments. 

When `True` (default), and there are free reserved instances / savings plans within the AWS account, Ocean will utilize them before launching spot instances. 
The initial virtual node group default value is inherited from the identical attribute at the cluster level. 

* [Create cluster]() or [Update cluster]()
* [Create virtual node group]() or [Update virtual node group]()







