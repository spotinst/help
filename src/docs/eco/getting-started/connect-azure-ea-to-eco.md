# Connect your Azure EA Account for Eco Analysis

This document describes the process and procedures to enable the Eco Managed Service for Eco reservation management and provide appropriate access to subscription usage data.

### Audience

Microsoft EA Azure administrators

## Prerequisites

- Admin access to https://ea.azure.com/
- The ability to create a user group in Azure Portal
- The ability to assign a role to a user group in Azure PowerShell to a Tenant scope in Azure Portal

## Setup for Initial Analysis

### Step 1. Create User Group for Eco Cost Specialist Guest Users

Complete the procedure below.
1. Log into the [Azure portal](https://portal.azure.com/).
2. Create an Azure user group for the Eco Cost Specialist Team.
   - In your Microsoft Azure account go to the Groups page and click New Group.

<img src="/eco/_media/connect-azure-ea-to-eco-001.png" />

   - In the New Group page, enter the Group Name and Group Description, e.g., Eco Cost Specialist Team, and click Create.

<img src="/eco/_media/connect-azure-ea-to-eco-002.png" />

   - Wait a few moments, then refresh the page. The name of the group will appear after it has been created.

<img src="/eco/_media/connect-azure-ea-to-eco-003.png" />

## Step 2. Apply Azure Role to User Group

To apply the Reservation Reader role to the user group, complete the procedure below.
1. Find and copy the Object ID of the new user group.

<img src="/eco/_media/connect-azure-ea-to-eco-004.png" />

2. Find and copy the Tenant ID.

<img src="/eco/_media/connect-azure-ea-to-eco-005.png" />

3. Apply the Azure Reservation Reader role to the user group using Azure PowerShell by completing the following steps.
   - Copy the code shown below, add the Tenant ID, and add the Object ID.

<img src="/eco/_media/connect-azure-ea-to-eco-006.png" />

   - Paste the code into PowerShell directly and press enter. The output below will appear:

<img src="/eco/_media/connect-azure-ea-to-eco-007.png" />

## Step 3. Invite Eco Cost Specialist Guest Users to the user group

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

## Step 4. Read Only Access to Enterprise Enrollment Data

1. Log into https://ea.azure.com/.
2. In the left Navigation, click Manage.
3. Within the Enrollment tab, copy the Enrollment Number and set that aside for now.

<img src="/eco/_media/connect-azure-ea-to-eco-009.png" />

4. Ensure the Auth Level on the Enrollment Detail says “Work or School Account Cross tenant”. It is possible to temporarily set it as this auth level. Just switch it to “Work or School Account Cross tenant,” send the invite, then switch it back to your preferred Auth Level.

5. You will again need to invite the guest users (see list [above](eco/getting-started/connect-azure-ea-to-eco?id=steps-to-invite-users)), but this time as Read-Only Enterprise Administrators.

   - Enter email address: as listed above
   - Auth Type: Work or school account
   - Notification frequency: None
   - Lifecycle Notification Suppression: No

## What’s Next?
Learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
