# Okta SAML Authentication

SSO support makes it easy to manage your accounts and works with the most popular identity providers.

IDP-initiated flows, service provider (SP) initiated flows, and just-in-time provisioning are all supported.

## Configure Okta with SAML 2.0

1. Sign in to your Spot account as an Admin.
2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Click **Security** > **Identity Providers**.
4. Copy the **Relay State** value.
5. Sign in to the Okta Admin console, click **Applications** > **Browse App Integration Catalog**
6. Search for <i>Spotinst</i>, and click **Add Integration**.
7. In Okta, go to the admin panel and select the new Spot app you just added.
   <ol style="list-style-type: lower-alpha;">
   <li>Click <b>Sign On</b> > <b>Edit</b>.</li>
   <li>Paste the Relay State value you copied in <b>Default Relay State</b>.</li>
   <li>Click <b>Save</b>.</li>
   <li>Download the metadata document by right-click, save link as, on 'View IdP metadata' link under the SAML Signing Certificates Actions.
      
   <img src="/administration/_media/okta-saml-04.png" width="934" height="371"/></li>
   </ol>

8. Go back to the Spot console, click **Browse** and upload the file you just downloaded.
9. Click **Submit**.

## For Service Provider Initiated Flows

Go to [https://console.spotinst.com/#/auth/signIn](https://console.spotinst.com/#/auth/signIn.).
