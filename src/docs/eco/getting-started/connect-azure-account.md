# Connect Your Azure Account for Eco Analysis

You can connect your account to Eco to get estimated cost savings analysis.

If you have one of these account/agreement types, you can [connect your account to Eco](eco/getting-started/connect-azure-account?id=prerequisites):

* Azure Enterprise Agreement (EA)
* Microsoft Customer Agreement (MCA)
* Microsoft Onlines Services Program (MOSP)/pay as you go (PAYG)

> **Note**: Cloud Solution Provider (CSP) users need to contact [Support](https://spot.io/contact/).

## Prerequisites

- Review [read-only permissions](eco/azure-tutorials/access-roles-read-only) required for the Eco Cost Specialist team.
- The Azure user must be a Global Administrator with [elevated access](https://learn.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to the management groups or subscriptions.
- The Azure user must be an Enterprise Administrator (EA) or Billing account owner (MCA).
- A Member Account only. The account cannot be a guest user account.
- A registered [Spot account](https://console.spotinst.com/spt/auth/signUp).

## Connect Cloud Account 

1. In the Spot console, click **Eco** > **Microsoft Azure** > **Azure Billing Account**.
2. Select the onboarding type:

    * **Automated onboarding** is the quicker option. The Microsoft Application Consent process allows Eco Azure to build the app registration on your behalf and use your credentials.
    * **Manual onboarding** lets you use higher security requirements when needed:

      <ol style="list-style-type: lower-alpha;">
      <li><a href="https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate%2Cexpose-a-web-api">Register an application in Microsoft Entra ID</a>. Select **Accounts in this organizational directly only**, without a redirect URI.</li>
      <li><p><a href="https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=client-secret%2Cexpose-a-web-api#add-credentials">Create a new client secret</a>.</p>
      <p>**Note**: Copy the Secret Key. The key will not appear again after you leave the Key settings.</p></li>
       </ol>

3. For EA only, [assign the EnrollmentReader role to the registered application using a Microsoft API](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#assign-enrollment-account-role-permission-to-the-spn).

   Sample header input and body of API call

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

**This Adding the Billing Account Reader Role analysis stage applies only to Microsoft Customer Agreements**. Add the Billing Account Reader Role to the registered application:  
 
1. Click the **Cost Management + Billing page** and select the billing account you want to connect. 
 
<img width="1976" alt="connect-azure-7 1" src="https://github.com/spotinst/help/assets/106514736/72086fad-f0e8-497d-8f9b-1399064727e9">

<img width="1860" alt="connect-azure-7 2" src="https://github.com/spotinst/help/assets/106514736/483de2b3-3bff-4e26-a78b-e680946318ad">

2. Select the **Access Control (IAM)** and then add the Billing Account Reader access to the app registration. 

![connect-azure-8](https://github.com/spotinst/help/assets/106514736/01880d93-b600-4612-ba73-2f43de72adbe)

#### Assign the Cost Management Reader Role 

**This Assign the Cost Management Reader Role analysis stage applies to EA, MCA and PAYG agreements**. 

Assign the Cost Management Reader role to the registered application on the subscriptions you want to manage.

Select the Management Groups or Subscriptions(s) on which you want Eco Azure to purchase reservations.  

1. In the left menu, select **Access Control (IAM) > Add / Add role assignment**.  
2. Search for and select **Cost Management Reader > Next** in the bottom left. 
3. Click **+ Select Members**. 
4. In the right pane, search for and select the registered application.  

#### Assign the Reservation Reader 

**Assigning the Reservation Reader applies to PAYG users only**.

Assign the Reservation Reader role to the registered application. 

1. Click the **Reservations** page. 
2. Click **Role assignments** and then **Add / Add role assignment**.  
 
<img width="1661" alt="connect-azure-9" src="https://github.com/spotinst/help/assets/106514736/679242ae-82de-4f4a-91ea-358a4c664a24">

3. Search for and select **Reservation Reader > Next > + Select Members**. 
4. In the right pane, search for and select the Eco Azure Registered application. 
5. Click **Review + Assign** in the bottom left.  

#### Add the App Registration Details 

Enter the following details in the App Registration page: Application ID, Tenant ID, Application Secret Value and Expiration date in the fields in the Spot Console and click **Connect**. 

<img width="797" alt="connect-azure-10" src="https://github.com/spotinst/help/assets/106514736/0ac3bb37-86f4-4ff7-847e-a6a0c123c3fc">

If you need assistance, read our [troubleshooting guide](https://docs.spot.io/eco/troubleshooting/azure-faq). Additionally, the Eco Azure team can assist with setting up the registered application and transferring the application credentials. Contact https://spot.io/contact/ for further information. 

