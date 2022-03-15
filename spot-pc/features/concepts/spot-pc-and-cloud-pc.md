# Concepts: Spot PC and Win365 Cloud PC

Microsoft provides two offerings for virtual desktops in the Azure Cloud: Azure Virtual Desktop (AVD) and Windows 365. While each supports a specific type of virtual desktop use case, the Spot PC managed service supports both options.

## AVD Desktops

Spot PC uses AVD desktops for pooled user scenarios. In these cases, users typically need access to web/SaaS applications, store data mostly in the cloud using OneDrive or a similar service, or only use a limited number of Windows applications. In these scenarios, Spot PC can group users together on one virtual machine and then manage the compute resources (CPU, memory) to ensure each user has a good virtual desktop experience.

Spot PC can also provision personal AVD virtual desktops for cases that Windows 365 cannot support, including the use of a Graphics Processing Unit (GPU) for heavy graphics applications like Computer Aided Design (CAD) or graphics design.

AVD is also useful when a customer configuration has characteristics that Windows 365 does not currently support. Examples of this case include Azure tenants that are not Intune registered domains or have complex networks that prevent direct line of sight from the Windows 365 cloud PCs to the nearest domain controller.

## Win365 Cloud PC Desktops

By contrast, Windows 365 cloud PCs are designed to extend the Microsoft 365 feature set to individual users. Cloud PCs of various sizes are assigned to specific users, and they can further customize the cloud PC with additional applications and customizations. This configuration is useful when users have a wide degree of applications to install or need to ensure a consistent configuration and virtual desktop type from session to session. Cloud PCs also tend to integrate better with other Microsoft 365 products such as Office and Teams since the user identity for these applications is stored with the cloud PC.

The Spot PC web application allows administrators to deploy, configure, and monitor both AVD and Windows 365 virtual desktops, all without needing to switch to other Microsoft tools or other sections of the Azure portal.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
