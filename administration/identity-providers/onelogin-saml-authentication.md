# OneLogin SAML Authentication

This feature makes it easy to manage your accounts and works with the most popular identity providers.

1. Sign in to your OneLogin account as an administrator and go to **Apps** > **Add Apps**.
2. Search for and select the Spot connector.
3. On the Configuration tab, click **Save** to add the app to your Company Apps and display additional configuration tabs.
4. On the Configuration tab, enter your Spot Organization ID in <i>Relay State</i>.
5. On to the Parameters tab, make sure:
   * The Spot attributes are mapped to OneLogin attributes
   * Credentials are Configured by admin.
7. Click **Save**.
8. Go to **More Actions** > Download SAML Metadata to configure your Spot account with OneLogin's SAML settings. Note the location of your saved XML file.
   <ol style="list-style-type: lower-alpha;">
   <li>In a new browser tab, open the Spot console as an Admin.</li>
   <li>Click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > <b>Settings</b>.</li>
   <li>Click <b>Security</b> > <b>Identity Providers</b>.</li>
   <li>Browse and import the XML metadata file you downloaded earlier. SSO will become enabled after uploading the OneLogin metadata.</li>
   </ol>
10. On the OneLogin Access tab, assign the OneLogin roles that should have access to Spot and provide any app security policy that you want to apply to Spot. You can also go to **Users** > **All Users** to add the app to individual user accounts.
11. Click **Save**.

## Test the SAML Connection

1. Make sure you have user accounts in both OneLogin and Spot that use the same value as the username. You can create a test user, or you can use your own account.
2. Make sure that you are logged out of Spot.
3. Sign in to OneLogin as the test user.
4. Click the Spot icon on your OneLogin dashboard. If you are able to access Spot without any issues, then SAML works.
