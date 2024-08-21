# Custom SAML IDP Configuration

Configuring an IDP to authenticate using SAML requires the following information:

- Service provider information
- Attributes
- Spot configuration

## Service Provider Information

- Single sign-on URL (ACS URL): https://console.spotinst.com/auth/saml
- Recipient URL: https://console.spotinst.com/auth/saml
- RelayState used in IDP-initiated SSO:
  <ol style="list-style-type: lower-alpha;">
  <li>Sign in to your Spot account as an Admin.</li>
  <li>In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > <b>Settings</b>.</li>
  <li>Click <b>Security</b> > <b>Identity Providers</b>.</li>
  <li>Make a copy of the Relay State value.</li>
  </ol>

The Relay State should be used while setting up the IDP. Google users should enter this value (as is) to the `start url` field under **Service Provider Details**.

## Attributes

The following attributes should be sent to the SAML response:

- Email
- FirstName
- LastName

## Spot Configuration

1. Sign in to your Spot account as an Admin.
2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Click **Security** > **Identity Providers**.
4. Click **Browse**, select your metadata file, and click **Save**.
