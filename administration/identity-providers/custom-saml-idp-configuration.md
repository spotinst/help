# Custom SAML IDP Configuration

Configuring an IDP to authenticate using SAML requires the following information:

- Service Provider Information
- Attributes
- Spot Configuration

## Service Provider Information

- Single Sign-On URL (ACS URL): https://console.spotinst.com/auth/saml
- Recipient URL: https://console.spotinst.com/auth/saml
- RelayState (Used in IDP Initiated SSO):
  1. Login to your Spot account as an Admin. Click the user icon on the top right side of the screen and click Settings.
  2. Click the Security tab on the top and then select Identity Providers. Make a copy of the Relay State value.

The Relay State should be used while setting up the IDP. Google users should enter this value (as is) to the `start url` field under Service Provider Details.

## Attributes

We expect the following attributes to be sent to the SAML response:

- Email
- FirstName
- LastName

## Spot Configuration

1. Login to your Spot account as an Admin.
2. Click on the user icon on the top right side of the screen and click Settings.

<img src="/administration/_media/custom-saml-01.png" width="298" height="300" />

3. Click on the Security tab on the top and then select Identity Providers.
4. Click BROWSE, Select your metadata file, and click SAVE.

<img src="/administration/_media/custom-saml-02.png" width="484" height="302" />
