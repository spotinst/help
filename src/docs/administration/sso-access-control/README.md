# SSO Access Control

In the console, you can enable single sign-on (SSO) for your organization.

## Identity Providers

You can use these identity providers with Spot:

- [ADFS SAML](administration/identity-providers/adfs-saml-authentication)
- [Azure AD Integration](administration/identity-providers/azure-active-directory-integration)
- [Custom SAMLs](administration/identity-providers/custom-saml-idp-configuration)
- [Google SAML](administration/identity-providers/google-saml-authentication)
- [Okta SAML](administration/identity-providers/okta-saml-authentication)
- [SCIM](administration/identity-providers/scim)
- [OneLogin SAML](administration/identity-providers/onelogin-saml-authentication)

## Set Up SAML SSO in the Console

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Click **Security** > **Identity Providers**.
4. Enter the:
    * **Relay state**: this is the Organization ID. It's used as the relay state configuration for the identity provider (used in IDP-initiated SSO).
    * **Provider type**: currently, the only supported standard is security assertion markup language (SAML).
    * **Metadata**: this is the data provided by the identity provider to sync the settings properly.
    * **User Default Organization Role**: this is the role given to [users](administration/users/) who sign in using the Identity Provider (Viewer/Editor). Roles can be defined only by organization or by account, not both.
    * **User Allowed Accounts**: the [accounts](https://docs.spot.io/administration/organizations/) the user has access to (<i>Default Account</i> or <i>All Accounts</i>).
    
   <details>
        <summary markdown="span">View image</summary>
        <img width="500" src="/administration/_media/sss-access-control-01a.png" />

      </details>

## Organization and Role Selection

If you want to define different user roles per account, you can choose the organization and role the user signs in with when signing in with SSO.

Configure the IDP to create a SAML response with the parameter `OrgAndRole`. When this is defined, the user must select an organization and role when signing in:

<img src="/administration/_media/sss-access-control-02.jpg" />
