# Connect Your Azure MOSP for Eco Analysis

This document describes the process and procedures to enable the Eco Managed Service for Eco reservation management and provide appropriate access to reservation.

This Microsoft Online Subscription Program (MOSP) is in a pay as you go (PAYG) format.

This page is relevant to MOSP billing and global administrators.

## Prerequisites

- The ability to create a user group in Azure Portal.
- Reviewed [read-only permissions](https://docs.spot.io/eco/azure-tutorials/access-roles-read-only) required for Eco team.
- The Azure user is a global administrator with [elevated access](https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and has access to at least one subscription.

## Setup for Initial Analysis

### Step 1. Create User Group for Eco Cost Specialist Guest Users

Complete the procedure below.
1. Log into the [Azure portal](https://portal.azure.com/).
2. In your Microsoft Azure account go to the Groups page and click New Group.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n001.png" />

3. In the New Group page, enter the Group Name and Group Description, e.g., Eco Cost Specialist Team, and click Create.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n002.png" width="500"/>

4. Wait a few moments, then refresh the page. The name of the group will appear after it has been created.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n003.png" />

### Step 2. Apply the Cost Management Reader Role

To apply the Cost Management Reader role to the Management Group or Subscriptions that you would like analyzed, complete the procedure below.

1. Find the Management Group you would like to give the Eco Cost Specialist group access to.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n004.png" />

2. Apply the Cost Management Reader role to the user group you created in Step 1 for the Management Group.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n005.png" />

### Step 3: Apply Reservation Reader Role

To apply the Reservation Reader role to the user group, complete the procedure below.
1. Navigate to the Reservations Page.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n006.png" />

2. Apply the Reservation Reader Role to the User Group created in Step 1.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n007.png" />

### Step 4. Invite Eco Cost Specialist Guest User to the User Group

1. Navigate to Users.
2. Select New Guest User and complete the required fields. Use the following names and e-mail addresses:

|  |  |
|---|---|
|  Eco Cost Specialist    |  ECOAZAD@netapp.com   |

3. For the first user, click Invite. This sends a notification to the Eco guest user via email.

<img src="/connect-your-cloud-provider/_media/connect-azure-ea-n008.png" width="500" />

## What’s Next?

 Learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
