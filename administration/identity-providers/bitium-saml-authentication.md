# Bitium SAML Authentication

It is easy to manage your accounts with the most popular identity providers. Let's walk through how this integration works with Bitium.

## In your Bitium Account

1. Log into your Bitium account as an administrator.
2. Go to Manage Apps.
3. Select Spot from the list of installed apps.
4. Navigate to the Single Sign-On Tab

## In the Spot Console

1. As an admin, navigate to My Organizations > Security > Identity Providers.

<img src="/administration/_media/okta-saml-01.png" />

2. Copy the Relay State from Spot. Paste this into the SAML Relay State field in Bitium.
3. Ensure Provider Type is set to SAML.
4. Download the Metadata XML from Bitium. Upload this into the Metadata Document field in Spot.
5. Select the default role you wish new users to be created as in Spot.
6. In Bitium, click Save Changes.
7. In Spot, click Save.

You can now use Bitium.
