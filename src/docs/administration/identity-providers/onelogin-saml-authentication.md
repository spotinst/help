# OneLogin SAML Authentication

This feature will make it easy to manage your accounts and works with the most popular identity providers. Let's walk through how this integration works with OneLogin. We borrowed the following instructions from the OneLogin help site to help you get started.

1. Log into your OneLogin account as an administrator and go to Apps > Add Apps.
2. Search for and select the Spot connector. The initial Configuration tab will appear.
3. Click Save to add the app to your Company Apps and display additional configuration tabs. The Info tab appears.
4. Go to the Configuration tab and enter your Spot Organization ID in the Relay State field.
5. Go to the Parameters tab and ensure the Spot attributes are mapped to OneLogin attributes. Ensure that Credentials are Configured by admin.
6. Click Save.
7. Go to More Actions > Download SAML Metadata to configure your Spot account with OneLogin's SAML settings. Note the location of your saved xml file.
   1. In a new browser tab, log into your organization's Spot account as admin.
   2. Click Settings, then the Security tab, and click Identity Providers.
   3. Browse and import the xml Metadata file you downloaded earlier. SSO will become Enabled after uploading the OneLogin metadata.
8. On the OneLogin Access tab, assign the [OneLogin roles](https://support.onelogin.com/hc/en-us/articles/202123144-Roles) that should have access to Spot and provide any [app security policy](https://support.onelogin.com/hc/en-us/articles/202361530) that you want to apply to Spot. You can also go to Users > All Users to add the app to individual user accounts.
9. Click Save.

## Test the SAML connection

1. Ensure that you have user accounts in both OneLogin and Spot that use the same value as the username. You can create a test user, or you can use your own account if you choose.
   Ensure that you are logged out of Spot.
2. Log into OneLogin as the test user.
3. Click the Spot icon on your OneLogin dashboard. If you are able to access Spot without error, then SAML works.
