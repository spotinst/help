# Connect Your Azure Billing Account to Billing Engine 

The procedures on this page describe how to connect your Microsoft Azure Billing Account to Billing Engine. 
 
## Prerequisites 

* Permissions to create app registrations. 
* You must be an Enterprise Administrator (EA). 
* A Member Account only. The account cannot be a guest user account. 
 
## Step 1: Connect to your Spot Account 

1. Enter an account name and click **Create Account**. 

<img width="991" alt="connect-azure-1" src="https://github.com/spotinst/help/assets/106514736/f403c577-5250-454a-8c18-b0bcc2a3cee9">

2. Select **Microsoft Azure** as your cloud provider. 
3. Select **FinOps Products** and click **Next**.  
4. Select **Billing Engine** and follow the steps to log in to Azure. 

<img width="811" alt="connect-azure-2" src="https://github.com/spotinst/help/assets/106514736/eaa1784b-10ca-4d2d-8d12-a4ca92f4e6eb">

## Step 2: Log in to your Azure Account 

Click **Log in to Azure Account** and continue to the next step. 
 
![connect-azure-5](https://github.com/spotinst/help/assets/106514736/b5fc0731-6d5b-4aa9-81a8-8aafa906e72b)

## Step 3: Create New Registration 

1. In the Azure console, type **App Registration** in the search bar and click **App Registrations**.

![connect-azure-sub-2](https://github.com/spotinst/help/assets/106514736/629e5c8b-00e1-44bd-9515-3908a404d2e5)

2. Click the **+ New registration** tab. 

![connect-azure-sub-3](https://github.com/spotinst/help/assets/106514736/969f0960-db36-47c7-9123-58a657bd47bd)

3. In the Register Application window, enter a name for the application. 
4. In the Support account types section, select **Accounts in this organizational directory only (Spotinst only - Single tenant)**. 
5. In the Redirect URI dropdown menu, select **Web** and specify: [https://spot.io](https://spot.io/). 

![connect-azure-sub-4](https://github.com/spotinst/help/assets/106514736/9cf7236f-9d94-488d-aa24-0a13db61d595)

6. In the Register an application window, enter the application you registered in the previous steps and copy the Application (client) ID and Directory (tenant) ID to provide in the next step. Click **Register**. 

![connect-azure-sub-5](https://github.com/spotinst/help/assets/106514736/6cae12e2-2b45-463e-a079-9ad94775d61a)

7. Paste the **Application (client) ID** and **Directory (tenant) ID** in the fields. 
 
<img width="483" alt="connect-azure-3" src="https://github.com/spotinst/help/assets/106514736/69d7d980-c404-4322-b126-0b780a40ac4d">

## Step 4: Create Certificates and Secrets 

In the previous app registration that was created, complete the following steps to create a client secret: 
 
1. In the left menu, click **Certificates & secrets**. 
2. Click the **Create secrets** tab and then **+ New client secret**. 
3. Copy the secret value. 
 
![connect-azure-sub-7](https://github.com/spotinst/help/assets/106514736/421e99fb-4266-4d1f-8a63-1e84d81d0bb9)


4. In the Billing Engine Wizard, paste the application secret.  

## Step 5: Assign Enrollment Reader Role to the App Registration 

Assigning the Enrollment Reader applies to Enterprise Agreement Only. Assign the Enrollment Reader role to the registered application. 

The Enrollment Reader Role can only be applied using a Microsoft API. Learn how to [add the role using an API call](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#assign-enrollment-account-role-permission-to-the-spn) in the Microsoft documentation. 

| ROLE              | ACTIONS ALLOWED                                                                                                                                                                                                                                                                                       | ROLE DEFINITION ID                    |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|
| EnrollmentReader  | Enrollment readers can view data at the enrollment, department, and account scopes. The data contains charges for all of the subscriptions under the scopes, including across tenants. Enrollment readers can view the Azure Prepayment (previously called monetary commitment) balance associated with the enrollment.  | 24f8edb6-1668-4659-b5e2-40bb5f3a7d7e  |
|                   |                                                                                                                                                                                                                                                                                                       |                                       |
|                   |                                                                                                                                                                                                                                                                                                       |                                       |
|                   |                                                                                                                                                                                                                                                                                                       |                                       |

**Example of header input and body of API call**: 

Header Inputs:

```
billingAccountName: <enrollment id>  
billingRoleAssignmentName: 24f8edb6-1668-4659-b5e2-40bb5f3a7d7e
```

**Example of body for API call**:  

``` 
{
"properties": {  
"roleDefinitionId": "/providers/Microsoft.Billing/billingAccounts/<insert enrollment number>/billingRoleDefinitions/24f8edb6-1668-4659-b5e2-40bb5f3a7d7e",   
"principalTenantId": "<insert Tenant ID>",   
"principalId": "<insert Object Id of the service principle>"          
}   
}  
``` 
 
## Step 6: Connect 
When the validation is complete, your Azure Billing Account will be connected to Billing Engine. 

<img width="1036" alt="connect-azure-4" src="https://github.com/spotinst/help/assets/106514736/1dee88b7-daa5-4516-ba71-2f99f231ef6f">

### Connect an Existing Spot Account 

You can connect an existing Spot Account (that is not connected to Azure for other Spot products) to Billing Engine for an Azure Billing Account by completing the following steps: 

1. In the left main menu, click **Billing Engine** or **Cost Intelligence** and then **Administration**. A list of previously registered accounts for both the Cost Intelligence and Billing Engine products opens. 
2. Click the **Billing Engine** tab and then **+ Cloud Account**. 
3. Click the Azure cloud provider you want to connect to your Spot account. 
4. Click the **Existing Spot Account** drop down menu and select the Spot account you want to connect Billing Engine and click **Next**.

![connect-azure-6](https://github.com/spotinst/help/assets/106514736/284ad4fa-343c-4bad-80ee-ac1bedb490ed)

5. To connect your Azure billing account, start with Step 2 [here](https://docs.spot.io/billing-engine/get-started/connect-azure?id=step-2-log-in-to-your-azure-account).  



 
