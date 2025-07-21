# Connect Your Azure Account for Eco Analysis

You can connect your account to Eco to get estimated cost savings analysis.

If you have one of these account/agreement types, you can [connect your account to Eco](eco/getting-started/connect-azure-account?id=prerequisites):

* Azure Enterprise Agreement (EA)
* Microsoft Customer Agreement (MCA)
* Microsoft Online Services Program (MOSP)/pay as you go (PAYG)

> **Note**: Cloud Solution Provider (CSP) users need to contact [Support](https://spot.io/contact/).

If you need assistance, read the [FAQs](https://docs.spot.io/faqs/faqs-finops). If needed, the [Eco Azure team](https://spot.io/contact/) can help you to set up the registered application and transfer the application credentials.

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
      <li><a href="https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=certificate%2Cexpose-a-web-api" target="_blank" rel="nopopener">Register an application in Microsoft Entra ID</a>. Select <b>Accounts in this organizational directly only</b>, without a redirect URI.</li>
      <li><p><a href="https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app?tabs=client-secret%2Cexpose-a-web-api#add-credentials" target="_blank" rel="nopopener">Create a new client secret</a>.</p>
      <p><b>Note</b>: Save the secret key because it won't be displayed again after you leave this page.</p></li>
       </ol>

3. For EA only, [assign the EnrollmentReader role to the registered application using a Microsoft API](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#assign-enrollment-account-role-permission-to-the-spn).

   <details>
    <summary markdown="span">Sample header input and body of API call</summary>

     ```
     Header Inputs: 
     billingAccountName: <enrollment id> 
     billingRoleAssignmentName: <A unique GUID you [generate](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/new-guid)>
     Example of body for API call: 
     { 
     "properties": { 
     "roleDefinitionId": "/providers/Microsoft.Billing/billingAccounts/<insert enrollment number>/billingRoleDefinitions/24f8edb6-1668-4659-b5e2-40bb5f3a7d7e", 
     "principalTenantId": "<insert Tenant ID>", 
     "principalId": "<insert Object Id of the service principle>"        
     } 
     } 
     ```

 </details>

4. For MCA only, [add the Billing Account Reader role to the registered application](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-mca-roles#manage-billing-roles-in-the-azure-portal).

5. Assign the Cost Management Reader role to the registered application on the [management groups](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/assign-access-acm-data#assign-management-group-scope-access) or [subscriptions](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/assign-access-acm-data#assign-subscription-scope-access) you want to manage (the management groups/subscriptions you want Eco Azure to purchase reservations).

6. For PAYG only, assign the Reservation Reader role to the registered application.
    <ol style="list-style-type: lower-alpha;">
    <li>Go to the Reservations page > <b>Role assignments</b> > <b>Add role assignment</b>. </li>
    <li>Search for and select <b>Reservation Reader</b>, then click <b>Next</b> > <b>Select Members</b>.</li>
    <li>Search for and select the Eco Azure Registered application, then click <b>Review + Assign</b>.</li>
      </ol>

7. In the Spot console, in the App Registration page, enter the Application ID, Tenant ID, Application Secret Value and Expiration date and click **Connect**. 
