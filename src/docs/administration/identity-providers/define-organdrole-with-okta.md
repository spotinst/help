# Define OrgAndRole with Okta

You can create multiple organization and role (OrgAndRole) definitions in Spot using Okta. Then you will be able to use your Okta SSO to sign in to multiple organizations in Spot.

## Prerequisites

- Okta SSO connected to Spot (completed configuration in [Okta SAML Authentication](administration/identity-providers/okta-saml-authentication))
- At least two organizations in Spot

## Get Started

1. Login to the Okta Admin console, choose Applications, and select the Spot app you want to edit.
2. Click **Sign On** > **Edit**.

## Step 1: Add Organization and Role Values

1. Go to **Attributes (optional)** and click **Add Another**. Enter the following information:
   - **Name**: <i>OrgAndRole</i>
   - **Name Format**: Leave as <i>Unspecified</i>
   - **Value**: Enter multiple values in the format shown below. Values are separated by a comma.
     ````
     SPOTINST-<your Organization ID>-<Role>,SPOTINST-<another Organization ID>-<Role>
     ````

     Example:

     ````
     SPOTINST-12121212121417-ADMIN,SPOTINST-12121212121418-ADMIN
     ````

2. Click **Save**.

## Step 2: Download SAML Signing Cerficate

1. Go to **SAML Signing Certificates** and click **Actions** on the active certificate.  
2. Right-click **View IdP Metadata** and select **Save Link as**. When you save, you must manually enter the file format extension (.XML).

## Step 3: Upload Certificate to Spot Organizations

For each of your organizations in Spot:
1. Sign in to your Spot account as an Admin.
2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Click **Security** > **Identity Providers**.
7. Click **Browse**, select the XML file you downloaded from Okta, and click **Save**.
8. Close Spot, and then sign back in to Spot from your Okta SSO account.
