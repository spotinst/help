# Define OrgAndRole with Okta

This page describes how to create multiple organization and role (OrgAndRole) definitions in Spot using Okta. Once you have completed the procedure below, you will be able to use your Okta SSO to log in to multiple organizations in Spot.

## Prerequisites

Before you begin the procedure, you will need:
- Okta SSO connected to Spot (i.e., completed configuration in [Okta SAML Authentication](administration/identity-providers/okta-saml-authentication)).
- Two or more organizations existing in Spot

## Get Started

1. Login to the Okta Admin console, choose Applications, select your Spot app you want to edit.

<img src="/administration/_media/define-organdrole-with-okta-01.png" width="600" />

2. Click Sign On. When the Settings page appears, click Edit.

<img src="/administration/_media/define-organdrole-with-okta-02.png" width="600" />

## Step 1: Add Organization and Role Values

Scroll down to Attributes (optional) and click Add Another. Enter the following information:
- Name: OrgAndRole
- Name Format: Leave as Unspecified
- Value: Enter multiple values in the format shown below. Values are separated by a comma.

```
SPOTINST-<your Organization ID>-<Role>,SPOTINST-<another Organization ID>-<Role>
```

Example:  

```
SPOTINST-12121212121417-ADMIN,SPOTINST-12121212121418-ADMIN
```

<img src="/administration/_media/define-organdrole-with-okta-03.png" width="600" />

When you are finished adding the OrgAndRole details, click Save.

## Step 2: Download SAML Signing Cerficate
1. Scroll down to SAML Signing Certificates and click Actions of the Active certificate.  
2. Right-click View IdP Metadata and choose Save Link as...  When you save, you must manually enter the file format extension (.XML).

<img src="/administration/_media/define-organdrole-with-okta-04.png" width="600" />

## Step 3: Upload Certificate to Spot Organizations

For each of your organizations in Spot, do the following:
1. Log in to your Spot organization as an administrator.
2. In the Spot console, go to the User menu and click Settings.

<img src="/administration/_media/define-organdrole-with-okta-05.png" width="500" />

3. Click Security and select Identity Providers in the sidebar on the left.
4. Click Browse and upload the XML file that you just downloaded from Okta. Click Save.

<img src="/administration/_media/define-organdrole-with-okta-06.png" width="600" />

5. Close Spot, and then log back in to Spot from your Okta SSO account.
