# Connect Your Azure EA for Eco Analysis

This document describes the process and procedures to enable the Eco Managed Service for Eco reservation management and provide appropriate access to reservation.

## Audience

Microsoft EA Azure administrators

## Prerequisites

- Admin access to the [Azure EA console](https://ea.azure.com/)
- The ability to create a user group in Azure Portal
- Reviewed [read-only permissions](https://docs.spot.io/eco/azure-tutorials/access-roles-read-only) required for Eco team
- The Azure user is a global administrator with [elevated access](https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to at least one subscription

## Setup for Initial Analysis

### Step 1. Create User Group for Eco Cost Specialist Guest Users

Complete the procedure below.
1. Log into the [Azure portal](https://portal.azure.com/).
2. Create an Azure user group for the Eco Cost Specialist Team.
   - In your Microsoft Azure account go to the Groups page and click New Group.

   <img src="/connect-your-cloud-provider/_media/connect-azure-ea-n001.png" />

   - In the New Group page, enter the Group Name and Group Description, e.g., Eco Cost Specialist Team, and click Create.

   <img src="/connect-your-cloud-provider/_media/connect-azure-ea-n002.png" width="500"/>

   - Wait a few moments, then refresh the page. The name of the group will appear after it has been created.

   <img src="/connect-your-cloud-provider/_media/connect-azure-ea-n003.png" />

### Step 2. Apply the Cost Management Reader Role

To apply the Cost Management Reader role to the Management Group or Subscriptions that you would like analyzed, complete the procedure below.

1. Find the Management Group you would like to give the Eco Cost Specialist group access to.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n004.png" />

2. Apply the Cost Management Reader role to the user group created earlier for the Management Group.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n005.png" />

### Step 3: Apply Reservation Reader Role

To apply the Reservation Reader role to the user group, complete the procedure below.
1. Navigate to the Reservations Page

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n006.png" />

Apply the Reservation Reader Role to the User Group created earlier.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n007.png" />

### Step 4. Invite Eco Cost Specialist Guest User to the User Group

1. Navigate to Users.
2. Select New Guest User and complete the required fields. Use the following name and email address:

|  |  |
|---|---|
|  Eco Cost Specialist   |  ECOAZAD@netapp.com   |

3. For the user, click Invite. This sends a notification to the Eco guest user via email.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n008.png" width="500" />

### Step 5. Read Only Access to Enterprise Enrollment Data

**If you do not have access to the EA portal, please follow the instructions in the Azure guide to [add the Enrollment Reader Access in the Azure Portal](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/direct-ea-administration#add-another-enterprise-administrator)**.

1. Log into https://ea.azure.com/.
2. In the left Navigation, click Manage.
3. Within the Enrollment tab, copy the Enrollment Number and set that aside for now.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n009.png" width="500" />

4. Ensure the Auth Level on the Enrollment Detail says “Work or School Account Cross tenant”. It is possible to temporarily set it as this auth level. Just switch it to “Work or School Account Cross tenant,” send the invite, then switch it back to your preferred Auth Level.

5. You will again need to invite the guest user (see list [above](eco/getting-started/connect-azure-ea-to-eco?id=steps-to-invite-users)), but this time as Read-Only Enterprise Administrators.

   - Enter email address: as listed above
   - Auth Type: Work or school account
   - Notification frequency: None
   - Lifecycle Notification Suppression: No

## What’s Next?

Learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
