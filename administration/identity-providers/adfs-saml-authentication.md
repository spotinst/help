# ADFS SAML Authentication

Active Directory Federation Services (ADFS) is one of the leading Identity Provider (IDP) solutions in the market. This step-by-step guide will help you to configure your Spot account to be authenticated using the SAML protocol using ADFS.

## Prerequisites

- A Spot account and Admin permissions in the account
- A domain member Windows Server 2012R2/2016 with ADFS role installed

## Step 1: Add Relying Party Trust Wizard

1. Open the Active Directory Federation Services (ADFS) Management Console.
2. Right click **Relying Party Trusts** and select **Add Relying Party Trust**.

   <img src="/administration/_media/adfs-saml-01.png" width="250" height="289" />

3. Select **Claims-aware** > **Start**.

   <img src="/administration/_media/adfs-saml-02.png" />

4. Select **Enter data about the relying party manually** and click **Next**.

   <img src="/administration/_media/adfs-saml-03.png" />

5. Enter a **Name** for the RP and click **Next**.
6. When asked for a certificate, click **Next**.
7. Select **Enable support for the SAML 2.0 WebSSO protocol** and enter the URL: <i>https://console.spotinst.com/auth/saml</i>.

   <img src="/administration/_media/adfs-saml-04.png" />

9. In **Relying party identity (RPID)**, enter the URL: <i>https://console.spotinst.com/auth/saml</i>.

   <img src="/administration/_media/adfs-saml-05.png" />

10. Click **Next** and then **Finish** to complete the wizard.

### Configure Claim Rules

1. A new wizard will open allowing you to configure the Claim Rules.
2. Click **Next** when prompted for Rule Type.
3. Enter a **Name** for the Claim Rule and choose **Active Directory** as the attribute store.
4. Enter the following **Attribute Mappings**:

| LDAP Attribute | Outgoing Claim |
| -------------- | -------------- |
| E-Mail-Address | Email          |
| Given-Name     | FirstName      |
| Surname        | LastName       |

5. Click **Finish** to complete the wizard.

## Step 2: Getting and Inserting the Metadata

1. Download your ADFS metadata XML file which is located in: https://`<yourADFSserver>`/federationmetadata/2007-06/federationmetadata.xml
2. Open the XML file for edit.
3. Locate the first `<X509Certificate>` tag and its closure `</X509Certificate>`, and change to `<ds:X509Certificate>` and `</ds:X509Certificate>`.
4. Sign in to your Spot account as an Admin.
5. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.

6. Click **Security** > **Identity Providers**.

7. Click **Browse**, select your metadata file, and click **Save**.

## Step 3: Configure IDP Initiated SSO

To configure IDP Initiated SSO, additional settings must be configured:

1. Login to your Spot account as an Admin.
2. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
3. Click **Security** > **Identity Providers**.
4. Copy the Relay State value.
5. Connect to your ADFS Server.
6. Open Powershell with administrative permissions.
7. Run the following command to enable IDP Initiated SSO:
   `Set-ADFSProperties -EnableIdPInitiatedSignonPage $true`

   - If running on Windows Server 2016, run the following command to enable Relay State:
     `Set-ADFSProperties -EnableRelayStateForIDPInitiatedSignon $true`

   - If running on Windows Server 2012R2:
     1. Open in an editor: `%systemroot%\ADFS\Microsoft.IdentityServer.Servicehost.exe.config`
     2. Go to the line: `<microsoft.identityserver.web>`
     3. Add the following line right after the `<microsoft.identityserver.web>` entry: `<useRelayStateForIdpInitiatedSignOn enabled="true" />`

8. Restart the Active Directory Federation Services Service

### IDP initiated SSO URL

- RPID
  - This value is the relying party identifier
  - This value should be encoded
- Nested RelayState
  - This value is passed to the Relying Party as RelayState
  - This value should be encoded
- The URL query has two parts. To make things easy, [this](http://jackstromberg.com/adfs-relay-state-generator/) is a RelayState Generator which encodes and generates the URL based on the given parameters. Just insert the following:
  - IDP URL: https://`<yourADFSserver>`/adfs/ls/idpinitiatedsignon.aspx
  - RP URL: https://console.spotinst.com/auth/saml
  - The Relay State that you copied in step 4

### Create a Temporary Token

When creating a temporary token, the user credentials are validated at the IDP.

1. To create a temporary token, you provide a SAML assertion generated from your IDP. To get a SAML assertion from ADFS, follow [these instructions](https://learn.microsoft.com/en-us/entra/identity-platform/v2-saml-bearer-assertion#get-the-saml-assertion-from-adfs).
2. Run the following request. Replace '<>' with the SAML assertion response, as plain XML body (without JSON wrappers).

```
curl -X POST -H "Content-Type: application/xml" -d
'<SAML_assertion_response_XML>' https://oauth.spotinst.io/samlToken?organizationId=<organization_id>
```
