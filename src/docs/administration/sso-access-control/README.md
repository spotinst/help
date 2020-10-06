# SSO Access Control

In the console, you can enable single sign-on (SSO) for your organization.

## Identity Providers Supported

The system supports the following identity providers:

* [ADFS SAML](administration/identity-providers/adfs-saml-authentication.md)
* Azure AD Integration
* Bitium SAML
* Custom SAMLs
* Okta SAML
* OneLogin SAML

## Set up SAML SSO in the Console

1. Login to the Spotinst account as an administrator: [spotinst console](https://console.spotinst.com/#/dashboard)
2. Click on the user icon and choose Settings.
3. Click on the “SECURITY” tab at the top and select Identity Providers.
4. Complete the required information in the form and save.

## Identity Provider Information

<img src="/administration/_media/sss-access-control-01.png" />

**Relay state** – The Organization ID –  Used as the Relay State configuration for the identity provider (Used in IDP Initiated SSO)

**Provider type** – Currently the only supported standard is SAML (Security Assertion Markup Language)

**Metadata** – Data provided by the identity provider in order to sync our settings properly. For further information see the documentation for your Identity Provider:

* ADFS SAML
* Bitium SAML
* Custom SAMLs
* Okta SAML
* OneLogin SAML

User Default Organization Role – The role which is given to users who logged in via the Identity Provider (Viewer/Editor)

For further information, see User Roles.

User Allowed Accounts – The accounts which the user will have access to (Default Account or All Accounts)

For further information, see Organizations and Accounts.

## Organization and Role Selection

When you want to determine different user roles per account, you can choose the organization and role the user will sign in with when signing in with SSO.

Configure the IDP to create a SAML response with the parameter “OrgAndRole”.
This configuration will generate another screen which will let the user choose an organization and role:

<img src="/administration/_media/sss-access-control-02.jpg" />

## Usage

Roles can be defined only by organization or by account, not both.

For further information, see:

* Organization Level SSO
* Account Level SSO
