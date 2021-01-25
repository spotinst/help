# Okta SAML Authentication

SSO support makes it easy to manage your accounts and works with the most popular identity providers. Let's walk through how this integration works with Okta. We borrowed the following instructions from the Okta help site to help you get started.

## Configure Okta with SAML 2.0

1. Login to your Spot account as an administrator.
2. In the console, choose Settings.
3. Click the Security tab and select Identity Providers.

<img src="/administration/_media/okta-saml-01.png" />

4. Make a copy of the Relay State value.
5. Go to your Okta dashboard and add the Spot app to your account:

<img src="/administration/_media/okta-saml-02.png" width="348" height="221" />

6. In Okta, go to the admin panel and edit the new Spot app you just added. There, select the Sign On tab, then click Edit.
   1. Enter the Relay State value you copied earlier into the Default Relay State field.
   2. Click Save.

<img src="/administration/_media/okta-saml-03.png" />

3.  Download the metadata document by clicking on 'Identity Provider metadata' link:

<img src="/administration/_media/okta-saml-04.png" />

7. Go back to the Spot Console, click BROWSE and upload the metadata.xml file you just downloaded.
8. Click SUBMIT.
9. Done! Login back into Spot via your Okta account!

> **Tip**: IDP-initiated flows, SP-initiated flows, and Just In Time provisioning are all supported.

## For SP Initiated Flows

1. Go to https://console.spotinst.com/#/auth/signIn.
2. Type your email address and click outside the form.
3. Click SIGN IN WITH SSO.
