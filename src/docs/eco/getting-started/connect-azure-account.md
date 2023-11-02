# Connect Your Azure Account for Eco Analysis

This document describes the requirements for Spot Eco to provide an estimated cost savings analysis. The procedure below describes the connection process. If you want a more detailed explanation of Spot's roles and permissions, please review our [access roles and permissions page](eco/azure-tutorials/access-roles-read-only). 

The steps below apply to the following account/agreement types:

* EA
* MCA
* MOSP/PAYG

**Note**: CSP users- please contact https://spot.io/contact/ for connection details.

## Prerequisites

- Review [read-only permissions](eco/azure-tutorials/access-roles-read-only) required for Eco Cost Specialist team.
- The Azure user performing these steps must be a Global Administrator with [elevated access](https://learn.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to the relevant Management Group(s) or Subscription(s).
- The Azure user performing this step must be an Enterprise Administrator (EA) or Billing account owner (MCA).
- A Member Account only. The account cannot be a guest user account.
- A registered Spot account.

## Connect Cloud Account 

Complete the following steps: 

1. In the left main menu, click **Eco** and select **Microsoft Azure** as your cloud provider. 
2. Select **Azure Billing Account**. 
3. Select [Automated Onboarding](eco/getting-started/connect-azure-account?id=connect-automatically) or [Manual Onboarding](eco/getting-started/connect-azure-account?id=connect-manually). 

### Connect Automatically 

1. Connecting automatically is the quicker option. The Microsoft Application Consent process allows Eco Azure to build the app registration on your behalf and use your credentials. 

<img width="623" alt="connect-azure-3" src="https://github.com/spotinst/help/assets/106514736/6d609735-1712-4f4d-9157-406c104d6a6b"> 

### Connect Manually 
While the automated process is much easier and preferred by most, the manual process allows for adherence to higher security requirements when needed. 

<img width="832" alt="connect-azure-4" src="https://github.com/spotinst/help/assets/106514736/8bfd6aab-288b-44c5-9705-fa563b16dcbc">

1. Navigate to Azure’s Microsoft Entra ID service.  
2. Click **App registration** and click **New Registration**. 
3. Give the application a new name (no redirect URI needed). 
 
![connect-azure-5](https://github.com/spotinst/help/assets/106514736/5c57c149-496f-4785-8943-a059a62951de)

4. In the app registration you just created, click Certificates and Secrets, and create a new client secret. Note: Copy the Secret Key. The key will not appear again after you leave the Key settings. 
 
![connect-azure-6](https://github.com/spotinst/help/assets/106514736/0d1d2353-5ed1-465f-a00f-cab617a05e16)

#### Assign the Enrollment Reader  

Assigning the Enrollment Reader applies to Enterprise Agreement Only. Assign the Enrollment Reader role to the registered application. 
 
The Enrollment Reader Role can only be applied using a Microsoft API. Learn how to [add the role using an API call](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#assign-enrollment-account-role-permission-to-the-spn) in the Microsoft documentation. 
 
|       Role             |                                                                                                                                                Actions allowed                                                                                                                                            |               Role definition ID          |   |
|------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------:|---|
|      EnrollmentReader  |     Enrollment readers can view data at the enrollment, department, and account scopes. The data contains charges for all of the subscriptions under the scopes, including across tenants. Can view the Azure Prepayment (previously called monetary commitment) balance associated with the enrollment.  |     24f8edb6-1668-4659-b5e2-40bb5f3a7d7e  |   |
|                        |                                                                                                                               

**Example of header input and body of API call**: 

```
Header Inputs: 
billingAccountName: <enrollment id> 
billingRoleAssignmentName: 24f8edb6-1668-4659-b5e2-40bb5f3a7d7e 
 
Example of body for API call: 

{ 

"properties": { 

"roleDefinitionId": "/providers/Microsoft.Billing/billingAccounts/<insert enrollment number>/billingRoleDefinitions/24f8edb6-1668-4659-b5e2-40bb5f3a7d7e", 

"principalTenantId": "<insert Tenant ID>", 

"principalId": "<insert Object Id of the service principle>"        

} 

} 
``` 

#### Add the Billing Account Reader Role 

Adding the Billing Account Reader Role applies only to Microsoft Customer Agreements. Add the Billing Account Reader Role to the registered application by completing the following steps:  
 
1. Click the **Cost Management + Billing page** and select the billing account you would like to connect. 
 
<img width="1976" alt="connect-azure-7 1" src="https://github.com/spotinst/help/assets/106514736/72086fad-f0e8-497d-8f9b-1399064727e9">

<img width="1860" alt="connect-azure-7 2" src="https://github.com/spotinst/help/assets/106514736/483de2b3-3bff-4e26-a78b-e680946318ad">

2. Select the Access Control (IAM) and then add the Billing Account Reader access to the app registration. 

![connect-azure-8](https://github.com/spotinst/help/assets/106514736/01880d93-b600-4612-ba73-2f43de72adbe)

#### Assign the Cost Management Reader Role 

Assign the Cost Management Reader role to the registered application on the subscriptions you would like to be managed. 
 
Select the Management Groups or Subscriptions(s) you would like Eco Azure to purchase reservations on.  

1. In the left menu, select **Access Control (IAM)**.  
2. Click **Add / Add role assignment**.  
3. Search for and select **Cost Management Reader**.  
4. Click **Next** in the lower left.  
5. Click **+ Select Members**.  
6. In the right pane, search for and select the registered application. 

#### Assign the Reservation Reader 

Assign the Reservation Reader role to the registered application. 

1. Click the **Reservations** page. 
2. Click **Role assignments** and then **Add / Add role assignment**.  
 
<img width="1661" alt="connect-azure-9" src="https://github.com/spotinst/help/assets/106514736/679242ae-82de-4f4a-91ea-358a4c664a24">

3. Search for and select **Reservation Reader**.  
4. Click **Next** on the lower left.  
5. Click **+ Select Members**.  
6. In the right pane, search for and select the Eco Azure Registered application. 
7. Click **Review + Assign** in the lower left. 

#### Add the App Registration Details 

Enter the following details in the App Registration page: Application ID, Tenant ID, Application Secret Value and Expiration date in the fields in the Spot Console and click **Connect**. 

<img width="797" alt="connect-azure-10" src="https://github.com/spotinst/help/assets/106514736/0ac3bb37-86f4-4ff7-847e-a6a0c123c3fc">

If you need assistance, read our [troubleshooting guide](https://docs.spot.io/eco/troubleshooting/azure-faq). Additionally, the Eco Azure team can assist with setting up the registered application and transferring the application credentials. Contact https://spot.io/contact/ for further information. 
 
## What's Next?

Let your account team know when you have completed the steps above.

A detailed cost savings analysis will be available within 5 business days.

In the meantime, learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
