# Okta SAML Authentication

SSO support makes it easy to manage your accounts and works with the most popular identity providers. Let's walk through how this integration works with Okta. We borrowed the following instructions from the Okta help site to help you get started.

## Configure Okta with SAML 2.0

1. Login to your Spot account as an administrator.
2. In the console, choose Settings.
3. Click the Security tab and select Identity Providers.

<img src="/administration/_media/okta-saml-01.png" />

4. Make a copy of the Relay State value.
5. Login to the Okta Admin console, choose Applications, select Browse App Integration Catalog and search for Spotinst, select Add Integration:

<img src="/administration/_media/okta-saml-02.png" width="737" height="831" />

6. In Okta, go to the admin panel and select the new Spot app you just added. There, select the Sign On tab, then click Edit.
   1. Enter the Relay State value you copied earlier into the Default Relay State field.
   2. Click Save.

<img src="/administration/_media/okta-saml-03.png" width="670" height="1154"/>

3.  Download the metadata document by right-click, save link as, on 'View IdP metadata' link under the SAML Signing Certificates Actions :

<img src="/administration/_media/okta-saml-04.png" width="934" height="371"/>

7. Go back to the Spot Console, click BROWSE and upload the file you just downloaded.
8. Click SUBMIT.
9. Done! Login back into Spot via your Okta account!

> **Tip**: IDP-initiated flows, SP-initiated flows, and Just In Time provisioning are all supported.

## For SP Initiated Flows

1. Go to https://console.spotinst.com/#/auth/signIn.
2. Type your email address and click outside the form.
3. Click SIGN IN WITH SSO.

## What's Next?

Learn how to [Define OrgAndRole with Okta](administration/identity-providers/define-organdrole-with-okta).
