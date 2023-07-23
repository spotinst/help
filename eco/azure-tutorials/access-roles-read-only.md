# Access Roles and Permissions

As mentioned on the [Azure Tutorial](eco/azure-tutorials/), if you want to receive an analysis as to how much savings Eco Azure can provide you, you must connect your Azure account to Spot using a registered application. The details below explain the permissions the registered application needs to process cost and usage data that allows Eco Azure to provide the analysis results and also explains the additional roles needed when you decide to onboard. 

## Azure Roles needed for Eco Azure Analysis and Planning – READ ONLY

The roles and billing access below is relevant only for customers who have not yet signed a contract for Eco Azure.

### Cost Management Reader

The Eco team requests the [Cost Management Reader role](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#cost-management-reader) to be applied to registered application at the Management Group OR Subscriptions scope that is going to be analyzed. The data is used to complete the initial analysis.

### Reservation Reader Role

The Eco team requests users to assign the [Azure Reservation Reader](https://docs.microsoft.com/en-us/azure/cost-management-billing/reservations/view-reservations#assign-a-reservation-reader-role-at-the-tenant-level) role to the registered application in order to accurately perform the initial analysis.

### Enrollement Reader Role (Applies to Enterprise Agreement only)

The Eco team requests that the registered application also be given [Enrollment Reader](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/assign-roles-azure-service-principals#permissions-that-can-be-assigned-to-the-spn) access in order to view Cost Management data. The data is used to complete the initial analysis.

### MCA Billing Account Reader (Applies to Microsoft Customer Agreement only)

The Eco team requests that the registered application also be given MCA Billing Account Reader access in order to view Cost Management data. The data is used to complete the initial analysis.

## Azure Roles needed for Eco Azure Reservation Management – Full Permissions 

The roles and billing access below are relevant only for users who have a signed contract and will be setting up the roles below during the user onboarding process. 

### Reservation Administrator Role 

The Eco team requests users to assign the [Azure Reservation Administrator](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/view-reservations#assign-a-reservation-reader-role-at-the-tenant-level) role to the registered application in order to view and manage pre-existing reservations. This permission is found on the reservation page in Azure. 

### Reservation Purchaser Role 

The Eco team requests users to assign the [Azure Reservation Purchaser](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reservation-purchaser) role to the registered application on the subscriptions you would like Eco Azure to purchase reservations on (this is where the costs will go to).  

### Reservation Owner Role 

The Eco team requests users to assign the Azure Reservation Owner role to the registered application in order to view and manage pre-existing reservations orders. This permission is found on the reservation page in Azure. 

## What's Next?

Learn more about [connecting your account for Eco analysis](eco/getting-started/connect-azure-ea-to-eco).
