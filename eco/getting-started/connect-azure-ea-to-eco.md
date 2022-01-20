<meta name="robots" content="noindex">

# Connect Azure EA to Eco

This document describes the manual process and procedures to enable the Eco Managed Service for Eco reservation management and provide appropriate access to subscription usage data.

### Audience

Microsoft EA Azure administrators

## Prerequisites  

- An Azure user with Owner Role over each, pre-existing reservation. (Note that this is different from the Owner Role over the entire subscription and can be confusing. Only the user which purchased the reservation has the Owner Role initially but can give Owner Role to other users.)
- Admin access to https://ea.azure.com/
- The ability to assign privileges for existing reservations in portal.azure.com  
- The ability to create custom roles within each subscription to which you intend to give Eco access: https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles
## Step 1. Subscription and Management Group Guest User Access
### Get Started
1. Log into portal.azure.com.
2. Complete the procedures below in the order that they appear.

### Invite the Eco guest user
1. Navigate to Users.
2. Select New Guest User and complete the required fields. You will do this once for each user. You will use the following names and email addresses:

| Tanner Harvey  | TannerH@netapp.com  |
| Brett McCulloch  | Mccullob@netapp.com   |
| Mimi Bao  | Bmimi@netapp.com  |

3. For the first user, click Invite. This sends a notification to the Eco guest user via email.

<img src="/ocean/_media/connect-azure-ea-to-eco-01.png" />

4. Repeat the invitations for remaining users.

### Give Spot Eco the Owner Role over individual reservations

Skip this step if there are no reservations. Otherwise, complete the steps below for each reservation.
1. Type “Reservations” in the search bar and click Enter.
2. Click an individual resource name.
3. Click on the Reservation Order ID.
4. Click Access Control (IAM).
5. Click Add, Role Assignment.
   - Role: Owner
   - Assign access to: User, group, or service principal
   - Select: each guest user
6. Click Save.

### Create a custom role to give Eco ability to read data on active subscriptions or management groups

The following steps can be applied to management groups instead of subscriptions.
1. Navigate to Subscriptions.
2. Select the subscription(s) to which you want to give Eco permission and copy the subscription ID(s).
3. Click Access Control (IAM).
4. Click Add, Add Custom Role.
   1. Click the JSON Tab
   2. Click Edit
   3. Paste the following JSON and update the <subscriptionID>(s)
   4. Click Review and Create
   5. Click Create

In the code boxes below are the Spot Eco policies, only with limited access and without consideration for any other Spot products. It primarily targets Virtual Machines. To gain access to the JSON, download a copy, duplicate it, and “edit” the text box.

<details>
  <summary markdown="span">Read-Only Permissions</summary>

#### Read-Only Permissions
```json
{  

    "properties": {  

        "roleName": "Spot Eco",  

        "description": "Spot Eco read-only role to be granted to Spot Eco users to each subscription for which an assessment is desired",  

        "assignableScopes": [  

            "/subscriptions/<subscriptionID>"  

        ],  

        "permissions": [  

            {  

                "actions": [  

                    "Microsoft.Authorization/roleAssignments/read", 

                    "Microsoft.Advisor/advisorScore/read",

                    "Microsoft.Capacity/catalogs/read", 

                    "Microsoft.Capacity/register/action", 

                    "Microsoft.Compute/register/action",  

                    "Microsoft.Compute/capacityReservationGroups/read",  

                    "Microsoft.Compute/operations/read",  

                    "Microsoft.Compute/availabilitySets/vmSizes/read",  

                    "Microsoft.Compute/availabilitySets/read",  

                    "Microsoft.Compute/capacityReservationGroups/capacityReservations/read",  

                    "Microsoft.Compute/locations/capsOperations/read",  

                    "Microsoft.Compute/cloudServices/instanceView/read",  

                    "Microsoft.Compute/cloudServices/providers/Microsoft.Insights/metricDefinitions/read",  

                    "Microsoft.Compute/cloudServices/roles/providers/Microsoft.Insights/metricDefinitions/read",  

                    "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/read",  

                    "Microsoft.Compute/skus/read",  

                    "Microsoft.Compute/locations/usages/read",  

                    "Microsoft.Compute/virtualMachineScaleSets/vmSizes/read",  

                    "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/read",  

                    "Microsoft.Compute/locations/vmSizes/read",  

                    "Microsoft.Compute/virtualMachines/read",  

                    "Microsoft.Compute/virtualMachines/vmSizes/read", 

                    "Microsoft.Consumption/register/action",

                    "Microsoft.Consumption/reservationRecommendations/read",

                    "Microsoft.CostManagement/query/action",

                    "Microsoft.CostManagement/reports/action",

                    "Microsoft.CostManagement/exports/action",

                    "Microsoft.CostManagement/register/action",

                    "Microsoft.CostManagement/views/action",

                    "Microsoft.CostManagement/forecast/action",

                    "Microsoft.CostManagement/alerts/read",

                    "Microsoft.CostManagement/cloudConnectors/read",

                    "Microsoft.CostManagement/dimensions/read",

                    "Microsoft.CostManagement/exports/read",

                    "Microsoft.CostManagement/exports/write",

                    "Microsoft.CostManagement/exports/delete",

                    "Microsoft.CostManagement/exports/run/action",

                    "Microsoft.CostManagement/externalBillingAccounts/read",

                    "Microsoft.CostManagement/externalBillingAccounts/query/action",

                    "Microsoft.CostManagement/externalBillingAccounts/forecast/action",

                    "Microsoft.CostManagement/externalBillingAccounts/dimensions/read",

                    "Microsoft.CostManagement/externalBillingAccounts/query/read",

                    "Microsoft.CostManagement/externalBillingAccounts/externalSubscriptions/read",

                    "Microsoft.CostManagement/externalBillingAccounts/forecast/read",

                    "Microsoft.CostManagement/externalSubscriptions/read",

                    "Microsoft.CostManagement/externalSubscriptions/query/action",

                    "Microsoft.CostManagement/externalSubscriptions/forecast/action",

                    "Microsoft.CostManagement/externalSubscriptions/dimensions/read",

                    "Microsoft.CostManagement/externalSubscriptions/query/read",

                    "Microsoft.CostManagement/externalSubscriptions/forecast/read",

                    "Microsoft.CostManagement/forecast/read",

                    "Microsoft.CostManagement/operations/read",

                    "Microsoft.CostManagement/query/read",

                    "Microsoft.CostManagement/reports/read",

                    "Microsoft.CostManagement/views/read",

                    "Microsoft.CostManagement/views/delete",

                    "Microsoft.CostManagement/views/write",

                    "Microsoft.CostManagement/tenants/register/action",

                    "Microsoft.CostManagement/budgets/read",

                    "Microsoft.Insights/MetricDefinitions/Read",  

                    "Microsoft.Insights/Metrics/Read",  

                    "Microsoft.Resources/tags/read",  

                    "Microsoft.Resources/subscriptions/read", 

                    "Microsoft.Resources/subscriptions/resourceGroups/read",  

                    "Microsoft.SQL/register/action"

                ],  

                "notActions": [],  

                "dataActions": [],  

                "notDataActions": []  

            }  

        ]  

    }  

}
```
</details>

<details>
  <summary markdown="span">Full Permissions</summary>

#### Full Permissions
```json
{   
  "properties":
  {   
    "roleName": "Spot Eco",   
    "description": "Spot Eco full permission role to be granted to Spot Eco users to each subscription to enable automation",   
    "assignableScopes":[   "/subscriptions/<subscriptionID>"   
    ],   
    "permissions":[   
      {   
      "actions": [   
        "Microsoft.Authorization/roleAssignments/read",
        "Microsoft.Advisor/generateRecommendations/action",
        "Microsoft.Advisor/register/action",
        "Microsoft.Advisor/unregister/action",
        "Microsoft.Advisor/configurations/read",
        "Microsoft.Advisor/configurations/write",
        "Microsoft.Advisor/generateRecommendations/read",
        "Microsoft.Advisor/operations/read",
        "Microsoft.Advisor/recommendations/read",
        "Microsoft.Advisor/recommendations/available/action",
        "Microsoft.Advisor/recommendations/suppressions/read",
        "Microsoft.Advisor/recommendations/suppressions/write",
        "Microsoft.Advisor/recommendations/suppressions/delete",
        "Microsoft.Capacity/catalogs/read",  
        "Microsoft.Capacity/register/action",  
        "Microsoft.Compute/register/action",   
        "Microsoft.Compute/capacityReservationGroups/read",   
        "Microsoft.Compute/operations/read",   
        "Microsoft.Compute/availabilitySets/vmSizes/read",   
        "Microsoft.Compute/availabilitySets/read",   
        "Microsoft.Compute/capacityReservationGroups/capacityReservations/read",   
        "Microsoft.Compute/locations/capsOperations/read",   
        "Microsoft.Compute/cloudServices/instanceView/read",   
        "Microsoft.Compute/cloudServices/providers/Microsoft.Insights/metricDefinitions/read",   "Microsoft.Compute/cloudServices/roles/providers/Microsoft.Insights/metricDefinitions/read",   "Microsoft.Compute/locations/publishers/artifacttypes/offers/skus/read",   
        "Microsoft.Compute/skus/read",   
        "Microsoft.Compute/locations/usages/read",   
        "Microsoft.Compute/virtualMachineScaleSets/vmSizes/read",   
        "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/read",   
        "Microsoft.Compute/locations/vmSizes/read",   
        "Microsoft.Compute/virtualMachines/read",   
        "Microsoft.Compute/virtualMachines/vmSizes/read",  
        "Microsoft.Consumption/register/action",
        "Microsoft.Consumption/reservationRecommendations/read",
        "Microsoft.CostManagement/query/action",
        "Microsoft.CostManagement/reports/action",
        "Microsoft.CostManagement/exports/action",
        "Microsoft.CostManagement/register/action",
        "Microsoft.CostManagement/views/action",
        "Microsoft.CostManagement/forecast/action",
        "Microsoft.CostManagement/alerts/read",
        "Microsoft.CostManagement/cloudConnectors/read",
        "Microsoft.CostManagement/dimensions/read",
        "Microsoft.CostManagement/exports/read",
        "Microsoft.CostManagement/exports/write",
        "Microsoft.CostManagement/exports/delete",
        "Microsoft.CostManagement/exports/run/action",
        "Microsoft.CostManagement/externalBillingAccounts/read",
        "Microsoft.CostManagement/externalBillingAccounts/query/action",
        "Microsoft.CostManagement/externalBillingAccounts/forecast/action",
        "Microsoft.CostManagement/externalBillingAccounts/dimensions/read",
        "Microsoft.CostManagement/externalBillingAccounts/query/read",
        "Microsoft.CostManagement/externalBillingAccounts/externalSubscriptions/read",
        "Microsoft.CostManagement/externalBillingAccounts/forecast/read",
        "Microsoft.CostManagement/externalSubscriptions/read",
        "Microsoft.CostManagement/externalSubscriptions/query/action",
        "Microsoft.CostManagement/externalSubscriptions/forecast/action",
        "Microsoft.CostManagement/externalSubscriptions/dimensions/read",
        "Microsoft.CostManagement/externalSubscriptions/query/read",
        "Microsoft.CostManagement/externalSubscriptions/forecast/read",
        "Microsoft.CostManagement/forecast/read",
        "Microsoft.CostManagement/operations/read",
        "Microsoft.CostManagement/query/read",
        "Microsoft.CostManagement/reports/read",
        "Microsoft.CostManagement/views/read",
        "Microsoft.CostManagement/views/delete",
        "Microsoft.CostManagement/views/write",
        "Microsoft.CostManagement/tenants/register/action",
        "Microsoft.CostManagement/budgets/read",
        "Microsoft.Insights/MetricDefinitions/Read",   
        "Microsoft.Insights/Metrics/Read",   
        "Microsoft.Resources/tags/read",   
        "Microsoft.Resources/subscriptions/read",  
        "Microsoft.Resources/subscriptions/resourceGroups/read",
        "Microsoft.Support/supportTickets/read",
        "Microsoft.Support/supportTickets/write",   
        "Microsoft.SQL/register/action"
        ],   
        "notActions": [],   
        "dataActions": [],   
        "notDataActions": []   
      }   
    ]   
  }   
}

```
</details>

If there are other subscriptions to which you wish to give Eco access and permissions, repeat Step 4 above for each.

### Assign the Spot Eco role to the Spot Eco guest users

You may need to wait a few minutes for the role to be visible.

1. Again from the Subscription’s Access control (IAM) tab, click Add, Add role assignment.
   - Role: Spot Eco
   - Assign access to: User, group, or service principal
   - Select: Each of the users described above.
2. Click Save.

### Assign the Reservation Purchaser role to the Spot Eco Guest Users

Use the steps in the above procedure to assign the Reservation Purchaser role to the Spot Eco Guest Users.

### Optional: Create a new Subscription for Eco RI Purchases

## Step 2. Access to Enterprise Enrollment Data

1. Log into https://ea.azure.com/.
2. In the left Navigation, click Manage.
3. Within the Enrollment tab, copy the Enrollment Number and set that aside for now.

<img src="/ocean/_media/connect-azure-ea-to-eco-02.png" />

4. Ensure the Auth Level on the Enrollment Detail says “Work or School Account Cross tenant.”
It is possible to temporarily set it as this auth level. Just switch it to “Work or School Account Cross tenant,” send the invite, then switch it back to your preferred Auth Level.
5. You will again need to invite the four guest users, but this time as Read-Only Enterprise Administrators.

| Tanner Harvey  | TannerH@netapp.com  |
| Brett McCulloch  | Mccullob@netapp.com   |
| Mimi Bao  | Bmimi@netapp.com  |

   - Enter email address: as listed above
   - Auth Type: Work or school account
   - Notification frequency: None
   - Lifecycle Notification Suppression: No

6. In the left Navigation, Click Reports
   - Open the API Access page under the Download Usage tab from the Reports menu.
   - Copy one of the keys. (You will need to expand the key.)

Both the enrollment number and the key can be provided to the Eco team through one of the guest users you invited earlier. andrew.watson@netapp.com will be fine.

## What’s Next?

Learn more about Eco's [Commitment Spending Analysis](eco/tutorials/review-ri-spending-analysis).
