# Connect Your Azure Account for Eco Analysis

This document describes the requirements for Spot Eco to provide an estimated cost savings analysis.

The steps below apply to the following account/agreement types:

EA

MCA

MOSP/PAYG*

*step 5 not required

## Prerequisites

* Review [read-only permissions](eco/azure-tutorials/access-roles-read-only) required for Eco Cost Specialist team.

* For steps 1-4: The Azure user performing these steps must be a Global Administrator with [elevated access](https://learn.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to the relevant Management Group(s) or Subscription(s).

* For step 5: The Azure user performing this step must be an Enterprise Administrator (EA) or Billing account owner (MCA).

<details>
  <summary markdown="span">Step 1: Confirm/Enable Global Admin Elevated Access</summary>

1. Log into the [Azure portal](https://portal.azure.com/#home).
2. Click Azure Active Directory.
3. In the left pane under Manage, click Properties.
4. At the bottom of the page, move the toggle Access management for Azure resources to Yes.

</details><br>

<details>
  <summary markdown="span">Step 2: Invite Spot Cost Specialist Guest User</summary>

1. Click Users and click New user / Invite external user.
2. In the Invite external user page, enter the following:
* Email: ecoazad@netapp.com  
* Display Name: Eco Cost Specialist (feel free to change).
3. Click Review & Invite (lower left corner) and then Invite.

</details><br>

<details>
  <summary markdown="span">Step 3: Apply Cost Management Reader Role</summary>

* Details for this permission can be found [here](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/understand-work-scopes).
* Apply this role at the highest level possible, ideally on the Tenant or other Management Group that contains all of the desired Subscriptions. This role can also be applied on a per Subscription basis if needed.

1. Click the Management Group or Subscription(s) you would like to give the Eco Cost Specialist team access to.
2. In the left menu, select Access Control (IAM).
3. Click Add / Add role assignment.
4. Search for and select Cost Management Reader.
5. Click Next in lower left.
6. Click + Select members.
7. In the right pane, search for and select ecoazad@netapp.com.
8. Click Review + assign in the lower left.

</details><br>

<details>
  <summary markdown="span">Step 4: Apply Reservation Reader Role</summary>

* Details for this permission can be found [here](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/view-reservations).

1. Click the Reservations Page.
2. Click Role assignments and then Add / Add role assignment.
3. Search for and select Reservation Reader.
4. Click Next in the lower left.
5. Click + Select members.
6. In the right pane, search for and select ecoazad@netapp.com.
7. Click Review + assign in the lower left.

</details><br>

<details>
  <summary markdown="span">Step 5: Provide Read-only Access to EA or MCA Billing Data</summary>


  <details>
    <summary markdown="span">EA</summary>

* Details for this permission can be found [here](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-ea-roles).

1. Click Cost Management & Billing.
2. In the left menu, select Billing Scopes and then select the appropriate Billing Account Scope.
3. In the left menu, select Access Control (IAM).
4. In the top menu, select + Add / Enterprise administrator.
5. In the right pane, search for and select ecoazad@netapp.com.
6. Check the box for Provide read-only access.
7. Click Add in the lower right.

  </details><br>

  <details>
    <summary markdown="span">MCA</summary>

* Details for this permission can be found [here](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-mca-roles).  

1. Click Cost Management & Billing.
2. In the left menu, select Access Control (IAM).
3. In the top menu, select + Add.
4. In the right pane, select Billing account reader.
5. Search for and select ecoazad@netapp.com and click Save.

  </details><br>

</details><br>

## What's Next?

Let your account team know when you have completed the steps above.

A detailed cost savings analysis will be available within 5 business days.

In the meantime, learn [how Eco works](eco/azure/tutorials) to provide significant savings on your cloud spend.
