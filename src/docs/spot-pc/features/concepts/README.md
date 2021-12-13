# Spot PC: Concepts
This section covers concepts and policies that are specific to Spot PC to help define terms used in the documentation and the Spot PC console.

## Spot PC Hierarchy
Spot PC is organized in a way to maximize the flexibility of the access and control of Spot PC resources. Multiple layers of organization exist to achieving this goal. This diagram illustrates each layer from organization to users:<br>
<img src="/spot-pc/_media/features-concepts-01.png" width="500"> </a>

### Spot Group
The Spot Group represents a collection of users with homogeneous application requirements.

Spot Groups are populated by one or more existing security groups from the customer Active Directory configuration. Users are added/removed from the Spot Group by being added or removed to the linked AD security group(s).

A single VM image is assigned to the Spot Group. Thus, all host VMs are identical and all user sessions on those machines will have access to the same applications.

A user can be a member of multiple Spot Groups and will receive access to the appropriate resources. Note that users with multiple Spot Groups assigned may consume additional Spot PC licensing.

One or more session host VM is built for each Spot Group. The machines are dedicated to the Spot Group and not shared with other Spot Groups. These machines are used to host the user sessions. The size and quantity of available hosts are determined by Spot PC licensing and the performance optimization technology included in Spot PC.

### Tenant
The Tenant represents a customer that uses the Spot PC service.

A Spot PC tenant must be associated with one (and only one) Azure tenant.

Tenants can contain one or more Spot Group(s).

### Organization
The Organization represents an IT support organization. Typically this is a Managed Services Provider (MSP) supporting multiple customers or an internal IT department supporting one or more business units.

All tenants are assigned to one (and only one) Organization. Multiple Tenants can be assigned to the same Organization.

## Session Hosts
Sessions hosts are the virtual machines (VMs) that host the end user sessions. These VMs run in azure within the Spot PC Azure subscription. All sessions hosts within a Spot Group are identical as they are created by the single VM image that is assigned to the Spot Group. The size and quantity of available session hosts are determined by Spot PC licensing and the performance optimization technology included in Spot PC.

Pooled Spot PC users share one or more session hosts to achieve lower costs. When more than one session host is deployed for a Spot Group, users are assigned to sessions hosts based on current load to maximize performance.

Personal Spot PC users do not share sessions hosts to achieve greater performance. Personal users are assigned to a session host that is currently unused.

## Spot PC Admins
The admin(s) that logs into the Spot PC console to deploy and configure Spot PC. These admins can have various levels of permissions across one or more organizations and tenants within those organizations.

## Images
VM Images are an area of emphasis and focus for Spot PC management. The goal is that all customization to session host VM be done at the image level, allowing Spot PC optimization automation to manage the creation, deletion and availability of session hosts automatically.

This this end the Spot PC Console includes an Images workflow for creating, customizing and sealing VM images. This workflow integrates with Azure Images and Azure Image Gallery and makes the task of managing images far simpler.

Within the Spot PC Console there is an Image Set Library, accessible from the Config Actions menu, within any tenant. From this menu the Spot PC administrator can:
* List (view) the image set library
* Create a new image set
* Edit an existing image set
* Delete an existing image set

## Spot PC Desktops
Spot PC deployments offer a managed option where customized architecture is used to deliver a customizable experience to Spot PC users. Spot PC technology manages the deployment, the data layer and available VM resources (VM size and qty) in order to maximize performance and minimize costs.

Instructions on configuring Spot PC desktops can be found [here](spot-pc/tutorials/deploy-windows-365-cloud-pc).

## Windows 365 Cloud PC
Spot PC deployments also offer the Windows 365 Cloud PC option. Windows 365 Cloud PC is a desktop service managed by Microsoft and available in several defined performance tiers.

For more information on Windows 365 Cloud PC, visit that [product page here](https://www.microsoft.com/en-us/windows-365).

Instructions on configuring Windows 365 Cloud PC with Spot PC console can be found [here](spot-pc/tutorials/deploy-windows-365-cloud-pc).

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
