# SSO Access Control

In the console, you can enable single sign-on (SSO) for your organization.

## Identity Providers Supported

The system supports the following identity providers:

- [ADFS SAML](administration/identity-providers/adfs-saml-authentication)
- [Azure AD Integration](administration/identity-providers/azure-active-directory-integration)
- [Bitium SAML](administration/identity-providers/bitium-saml-authentication)
- [Custom SAMLs](administration/identity-providers/custom-saml-idp-configuration)
- [Okta SAML](administration/identity-providers/okta-saml-authentication)
- [OneLogin SAML](administration/identity-providers/onelogin-saml-authentication)

## Set up SAML SSO in the Console

1. Login to the Spot account as an administrator: [Spot Console](https://console.spotinst.com/#/dashboard)
2. Click on the user icon and choose Settings.
3. Click on the `SECURITY` tab on the left sidebar and select Identity Providers.
4. Complete the required information in the form and save.

## Identity Provider Information

<img src="/administration/_media/sss-access-control-01a.png" />

**Relay state** – The Organization ID – Used as the Relay State configuration for the identity provider (Used in IDP Initiated SSO)

**Provider type** – Currently the only supported standard is SAML (Security Assertion Markup Language)

**Metadata** – Data provided by the identity provider in order to sync our settings properly.

**User Default Organization Role** – The role which is given to users who logged in via the Identity Provider (Viewer/Editor). For further information, see [User Roles](administration/users/).

**User Allowed Accounts** – The accounts which the user will have access to (Default Account or All Accounts)

For further information, see [Organizations and Accounts](https://docs.spot.io/administration/organizations/).

## Organization and Role Selection

When you want to determine different user roles per account, you can choose the organization and role the user will sign in with when signing in with SSO.

Configure the IDP to create a SAML response with the parameter `OrgAndRole`.
This configuration will generate another screen which will let the user choose an organization and role:

<img src="/administration/_media/sss-access-control-02.jpg" />

## Usage

Roles can be defined only by organization or by account, not both.

## What's Next?

- [Organization Level SSO](administration/sso-access-control/organization-level-sso)
- [Account Level SSO](administration/sso-access-control/account-level-sso)
