<meta name="robots" content="noindex" />

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
2.  Go to the stateful node where you want to turn on the utilize RSs/SPs feature. See [Manage Stateful Nodes](https://docs.spot.io/managed-instance/azure/tutorials/manage?id=manage-stateful-nodes).
3.  In the strategy area, next to Utilize RIs/SPs, click **Add permissions**.

<img width="1150" src="https://github.com/user-attachments/assets/22580fed-33c0-4fdf-961b-9db51e21ca52" />

###  Step 1: App Registrations

1.  In Connect RIs/SPs to Spot wizard, step 1, create (register) a new Azure app or upgrade an existing one.

Upgrade:

<img width="500" src="https://github.com/user-attachments/assets/52ed6761-4d7a-4a8f-b05c-d0356392b217" />


New:

<img width="500" src="https://github.com/user-attachments/assets/86e527cd-f95d-4be6-a44f-7e01da0c21c4" />


2. Copy the following credentials from your Azure app and paste them into the fields:
   * Application (client) ID.
   * Directory (tenant) ID.

3.  Go to Step 2: Certificates and Secrets

###  Step 2: Certificates and Secrets
    
<img width="500" src="https://github.com/user-attachments/assets/c5342111-e932-445f-b985-daf299531443" />

1. Copy the following credentials from your Azure app and paste them into the fields:
   * Application secret expiration date.
   * Client secret value.
   * Secret ID.

2.  Go to Step 3: Permissions assignment.

###  Step 3: Permissions Assignment

<img width="500" src="https://github.com/user-attachments/assets/5486d807-043d-463f-8deb-8cc7c869ebde" />


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
   
##  Turn on Utilize Commitments from the Spot Console

1. Go to the stateful node where you want to turn on the utilize RSs/SPs feature. See [Manage Stateful Nodes](https://docs.spot.io/managed-instance/azure/tutorials/manage?id=manage-stateful-nodes).
2. In the Stateful Node strategy area, click **Utilize RIs/SPs**.

>**Important**: If the **Add permissions** link appears, and Utilize RIs/SPs is grayed, make sure you have completed the following tasks with no errors:
>
>  - [Get Your Azure Credentials](link)
>
>  - [Connect Commitments to Spot Products](link)


## Turn on Utilize Commitments for Stateful Node in the Spot API

in the Spot API, the `shouldUtilizeCommitments` attribute controls utilization commitments. 

When set to `True` (default), and there are free reserved instances / savings plans within the Azure account, Stateful Node will utilize them before launching spot instances. 
Make sure that the VM attached to the specific stateful node also has  `shouldUtilizeCommitments` attribute enabled.

Under under Spot API > Elastigroup > Elastigroup Azure Stateful >...  

* [Create Staeful Node](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeCreate) or [Update Stateful Node](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeUpdate)  (under statefulNode > strategy)
* [Get Staeful Node Status](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeGetStatus) or [Update Staeful Node Status](https://docs.spot.io/api/#tag/Elastigroup-Azure-Stateful/operation/azureStatefulNodeUpdate) (under statefulNode > strategy)

