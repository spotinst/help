<meta name="robots" content="noindex">

# AVD and Spot PC Requirements
This document describes the required elements for deploying Spot PC. A core component of Spot pPC is Azure Virtual Desktop, thus the prerequisites for AVD are also required for Spot PC.  

## Azure Requirements

### Azure AD Tenant for End Users
The customer must have an Azure AD tenant and all the VDMS users need to be in this Azure AD environment.  Since M365 creates an Azure AD tenant, meeting the first requirement (above) will also satisfy this requirement.  All references to Azure AD going forward is a reference to his Azure AD tenant.

### Microsoft 365 Licensing to support AVD
Supported licensing modes are here: https://azure.microsoft.com/en-us/pricing/details/virtual-desktop/

Spot by NetApp has no role in purchasing, enrolling or enforcing M365 licensing.

### Establish Reseller Relationship
The SPOt PC service requires that a reseller relationship be established between the customer's Azure Tenant and the Spot PC CSP Tenant. In order to successfully establish the relationship, a global admin for that Azure AD tenant must follow this link and accept the invitation:

https://admin.microsoft.com/Adminportal/Home?invType=ResellerRelationship&partnerId=47c1f6d2-b112-48e0-915f-4304efffb3e8&msppId=0&DAP=true#/BillingAccounts/partner-invitation

Spot PC leverages Microsoft's multi-patner CSP functionality, enabling multiple resellers to maintain their individual relationship(s) with the customer. Thus, establishing a reseller relationship for Spot PC **does not**:
* Change any of the customer's existing subscriptions
* Transition the customer's existing subscriptions or account ownership
* Change the terms or customer's obligations for any of their existing subscriptions
* Change the partner of record for a subscription

Source:  https://docs.microsoft.com/en-us/partner-center/multipartner

### Delegated Admin
The invitation link above includes a request to grant the delegated admin permission.  This is a requirement for Spot PC as well.   It grants the Global Admin and Helpdesk Admin role to our CSP account, the permissions we'll use to deploy Spot PC and integrate it with the customer's Azure AD tenant.

### Existing AD DC Deployment
If Spot PC is to be integrated with an existing Active Directory Domain Controller (AD DC), a Domain Admin account on that ADDC is required.

### Virtual Network Scope
The customer will need to select a network scope for Spot PC. Often, Spot PC will be integrated with on-premises (or other public cloud) resources via a site-to-site VPN or Azure vNet peering. To avoid conflicts with current or future integrations it is important to define a network scope that won't overlap with other resources in the environment.

Good calculator to help pick a good scope...https://www.calculator.net/ip-subnet-calculator.html?cclass=b&csubnet=20&cip=10.75.96.0&ctype=ipv4&printit=0&x=51&y=12

The network scope must fall within one of these ranges:

* 10.0.0.0 – 10.255.255.255
* 172.16.0.0 – 172.31.255.255
* 192.168.0.0 – 192.168.255.255

### Azure AD Connect
Azure AD Connect is a required component that syncs the customer's AD DC with their Azure AD tenant. The customer AD DC must be configured with Azure AD Connect for Spot PC to deploy successfully.

## Pre-Deployment Checklist

* Confirm prerequisites
* Determine total number of users
* Determine Preferred Azure Region
* Identify primary application list
* Assess existing Azure and on-premises networking configuration
* Assess data migration needs

## What’s Next?

Learn more about [End-User prerequisites](spot-pc/getting-started/prerequisites/end-user-prerequisites).
