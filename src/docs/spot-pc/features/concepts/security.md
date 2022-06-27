# Concepts: Security

## Summary

Spot PC is a managed virtual desktop service, available exclusively in Microsoft Azure and based on the Azure Virtual Desktop (AVD) and Windows 365 components. The security model for Spot PC is based on a multi-tier, multi-identity structure that follows Microsoft best practices for securing the environment for virtual desktop end users, partner and customer administrators, and Spot support administrators.

Customer segregation using the Microsoft tenant model is a primary design principle of Spot PC. Each Spot PC tenant (customer) is aligned on a one-to-one basis with an Azure tenant. For business entities, such as Cloud Service Providers (CSPs), Managed Service Providers (MSPs), Independent Software Vendors (ISVs), or enterprises with multiple business units, Spot PC provides a managing entity called an Organization that can access multiple tenants using a single administrator identity.

The security layers for Spot PC can be broken down into the personas or roles that will access the environment:

**Virtual desktop end users** – day to day users of Spot PCs and Cloud PCs. End users can access the environment from a wide range of locations and physical device types.

**Partner administrators** – MSP, CSP, and ISV administrators with virtual desktop management responsibility for multiple customers

**Customer administrators** – customer staff members responsible for managing virtual desktops or acting as the primary troubleshooting contact.

**Spot support administrator** – Spot by NetApp team members that provide active support for troubleshooting and optimizing the virtual desktop environment.

**Automation components and workflows** – Spot PC automates the deployment, configuration, optimization, and management of the virtual desktops using authenticated services in the Azure tenant.

Spot PC also integrates active endpoint detection and response (EDR) and anti-malware components to monitor and expose malware attack vectors for the session virtual machines.

## Architecture

Spot PC components are deployed into Azure, with a split between Tenant (customer) based components and the Spot PC web application and API, which is a SaaS application available to all Spot PC customers and partners. The tenant-based components are deployed to an Azure subscription created by the Spot PC deployment process and linked to the customer’s Azure tenant and Azure Active Directory (AAD) domain. This structure allows Spot by NetApp to incur the costs for the Azure components while also supporting segregation of each Spot tenant to its associated Azure tenant.

End user experience – authentication, routing, and virtual desktop session – are primarily controlled by the Azure Virtual Desktop and Windows 365 services. Spot PC provides automation and management of these services using additional Azure components. Note that AVD/Windows 365 hybrid deployments require both Azure Active Directory and Active Directory components, so Spot PC components are configured with the identity, permissions, and authentication appropriate for each security realm.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
