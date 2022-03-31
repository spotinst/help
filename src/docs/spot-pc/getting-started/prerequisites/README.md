# Spot PC: Prerequisites

This document describes the required elements for deploying Spot PC. A core component of Spot PC is Azure Virtual Desktop (AVD), thus Spot PC inherits the prerequisites for AVD.

## Microsoft 365 Licensing to Support AVD

Windows 10 user access rights for Spot PC are included in the users' Microsoft 365 (M365) subscription, a requirement for AVD and Spot PC.

Supported licensing modes are here: https://azure.microsoft.com/en-us/pricing/details/virtual-desktop/

Spot by NetApp has no role in purchasing, enrolling or enforcing M365 licensing.

## Azure AD Tenant for End Users

The customer must have an Azure AD tenant containing all Spot PC users. Since M365 creates an Azure AD tenant, meeting that requirement will also satisfy this requirement.

## Existing AD DC Deployment

If Spot PC is to be integrated with an existing Active Directory Domain Controller (AD DC), a domain account with Domain Join rights on that AD DC is required.

## Existing Azure vNet

An existing Azure vNet must be configured with network access to the AD DC. This is typically accomplished via a site-to-site VPN or by running the AD DC on a VM attached to that vNet. A Spot PC network will be created and peered with this existing vNet as part of the Onboarding Workflow.

## Virtual Network Scope

The customer will need to select a network scope for Spot PC. Often, Spot PC will be integrated with on-premises (or other public cloud) resources via a site-to-site VPN or Azure vNet peering. To avoid conflicts with current or future integrations, it is important to define a network scope that won't overlap with other resources in the environment.

The network scope must fall within one of these ranges:

- 10.0.0.0 – 10.255.255.255
- 172.16.0.0 – 172.31.255.255
- 192.168.0.0 – 192.168.255.255

## Azure AD Connect

Azure AD Connect is a required component that syncs the customer's AD DC with their Azure AD tenant. The customer AD DC must be configured with Azure AD Connect for Spot PC to deploy successfully. A guide for this is found [here](spot-pc/tutorials/install-ad-connect).

## Pre-Deployment Checklist

- Confirm prerequisites
- Identify total number of users
- Identify preferred Azure Region
- Identify primary application list
- Assess existing Azure and on-premises networking configuration
- Assess data migration needs

## What’s Next?

Learn more about [End-User prerequisites](spot-pc/getting-started/prerequisites/end-user-prerequisites) or get started [deploying Spot PC](spot-pc/getting-started/onboarding-workflow) by following the Onboarding Workflow.
