# Connect Your Azure Account for Eco Analysis

This document describes what is required for Spot Eco to provide an estimated cost savings analysis.

The steps below apply to the following account/agreement types:

EA<br>
MCA<br>
MOSP/PAYG*

<font size="-2">*step 4 not required</font>

## Audience

Microsoft Azure administrators

## Prerequisites

> - Review [read-only permissions](https://docs.spot.io/eco/azure-tutorials/access-roles-read-only) required for Eco Cost Specialist team
> - For steps 1-3: The Azure user performing these steps must be a Global Administrator with [elevated access](https://docs.microsoft.com/en-us/azure/role-based-access-control/elevate-access-global-admin#elevate-access-for-a-global-administrator) and access to relevant Management Groups or Subscription(s)
> - For step 4: The Azure user performing this step must be an Enterprise Administrator (EA) or Billing account owner (MCA)


## Process

<details>

<summary><font size="+1">Step 1 - Invite Spot Cost Specialist guest user</font></summary>

1. Log into the [Azure portal](https://portal.azure.com/).

2. Go to **Users** and click **New user** / **Invite external user**

3. In the Invite external user page, enter:

    Email: <u>ecoazad@netapp.com</u>
   
    Display Name: Eco Cost Specialist (feel free to change)

4. Click **Review & Invite** (lower left corner) and then **Invite**

</details>

<details>

<summary><font size="+1">Step 2 - Apply the <u>Cost Management Reader</u> role</font></summary>
<br/>

* Please apply this role at the highest level possible, ideally on the Tenant or other Management Group that contains all of the desired Subscriptions. This role can also be applied on a per Subscription basis if needed.

1. Go to the **Management Group** or **Subscription(s)** you would like to give the Eco Cost Specialist team access to

2. Go to **Access control (IAM)**

3. Click **Role assignments** and then **Add** / **Add role assignment**

4. Search for and select <u>Cost Management Reader</u>

5. Click **Next** in lower left

6. Click **+ Select members**

7. In the right pane, search for and select <u>ecoazad@netapp.com</u>

8. Click **Review + assign** in the lower right

</details>

<details>

<summary><font size="+1">Step 3 - Apply <u>Reservation Reader</u> role</font></summary>

1. Go to the Reservations Page

2. Click **Role assignments** and then **Add** / **Add role assignment**

3. Search for and select <u>Reservation Reader</u>

4. Click **Next** in the lower left

5. Click **+ Select members**

6. In the right pane, search for and select <u>ecoazad@netapp.com</u>

7. Click **Review + assign** in the lower right

</details>

<details>

<summary><font size="+1">Step 4 - Provide Read Only Access to <u>EA</u> or <u>MCA</u> Data</font></summary>
<br/>

* <details><summary>EA</summary>

  1. Go to Cost Management & Billing

  2. In the left menu, select Billing Scopes and then select the appropriate Billing Account Scope

  3. In the left menu, select **Access Control (IAM)**

  4. In the top menu, select **+ Add** / **Enterprise administrator (Read Only)**

  5. ***need to complete steps when I have access to Billing Scope***


* <details><summary>MCA</summary>

  1. Go to Cost Management & Billing

  3. In the left menu, select **Access Control (IAM)**

  4. In the top menu, select **+ Add**

  4. In the right pane, select <u>Billing account reader</u>

  5. Search for and select <u>ecoazad@netapp.com</u> and click **Save**

</details>


## What’s Next?

Please let your account team know when you have completed the steps above.

Within 5 business days we will have the results of our analysis to share.

In the meantime, learn [how Eco works](eco/azure-tutorials/) to provide significant savings on your cloud spend.
