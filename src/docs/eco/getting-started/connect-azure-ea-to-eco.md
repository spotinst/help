# Connect your Azure EA Account for Eco Analysis

This document describes the process and procedures to enable the Eco Managed Service for Eco reservation management and provide appropriate access to subscription usage data.

### Audience

Microsoft MCA Azure billing account owners

## Prerequisites

- Azure MCA billing account owner access
- The ability to create a user group in Azure Portal
- Reviewed [Read Only permissions](eco/azure-tutorials/access-roles-read-only) required for Eco team
- The Azure user is a global administrator with [elevated access](https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to at least one subscription

## Setup for Initial Analysis

### Step 1. Create User Group for Eco Cost Specialist Guest Users

Complete the procedure below.
1. Log into the [Azure portal](https://portal.azure.com/).
2. Create an Azure user group for the Eco Cost Specialist Team.
   - In your Microsoft Azure account go to the Groups page and click New Group.

<img src="/eco/_media/connect-azure-ea-to-eco-001.png" />

   - In the New Group page, enter the Group Name and Group Description, e.g., Eco Cost Specialist Team, and click Create.

<img src="/eco/_media/connect-azure-ea-to-eco-002.png" width="542" />

   - Wait a few moments, then refresh the page. The name of the group will appear after it has been created.

<img src="/eco/_media/connect-azure-ea-to-eco-003.png" />

## Step 2. Apply the Cost Management Reader Role

To apply the Cost Management Reader role to the Management Group or Subscriptions that you would like analyzed, complete the procedure below.

1. Find the Management Group you would like to give the Eco Cost Specialist group access to.

<img src="/eco/_media/connect-azure-ea-to-eco-0031.png" />

2. Apply the Cost Management Reader role to the user group created earlier for the Management Group.

<img src="/eco/_media/connect-azure-ea-to-eco-0032.png" />

## Step 3: Apply the Reservation Reader Role

To apply the Reservation Reader role to the user group, complete the procedure below.
1. Find and copy the Object ID of the new user group.

<img src="/eco/_media/connect-azure-ea-to-eco-004.png" />

2. Find and copy the Tenant ID.

<img src="/eco/_media/connect-azure-ea-to-eco-005.png" width="513" />

3. Apply the [Azure Reservation Reader role](https://docs.microsoft.com/en-us/azure/cost-management-billing/reservations/view-reservations#assign-a-reservation-reader-role-at-the-tenant-level) to the user group using Azure PowerShell by completing the following steps.
   - Copy the code shown below, add the Tenant ID, and add the Object ID.

<img src="/eco/_media/connect-azure-ea-to-eco-006.png" width="387" />

   - Paste the code into PowerShell directly and press enter. The output below will appear:

<img src="/eco/_media/connect-azure-ea-to-eco-007.png" />

## Step 4. Invite Eco Cost Specialist Guest Users to the user group

1. Navigate to Users.
2. Select New Guest User and complete the required fields. You will do this once for each user. You will use the following names and email addresses:

<table>
  <tr>
    <td> Tanner Harvey  </td>
    <td> TannerH@netapp.com  </td>
  </tr>
  <tr>
    <td> Brett McCulloch  </td>
    <td> Mccullob@netapp.com   </td>
  </tr>
  <tr>
    <td> Mimi Bao  </td>
    <td> Bmimi@netapp.com  </td>
  </tr>
</table>

3. For the first user, click Invite. This sends a notification to the Eco guest user via email.

<img src="/eco/_media/connect-azure-ea-to-eco-008.png" />

4. Repeat the invitations for remaining users.

## Step 5. Read Only Access to Enterprise Enrollment Data

Apply the Billing Account Reader Access to the user group created earlier.

## What’s Next?
Learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
