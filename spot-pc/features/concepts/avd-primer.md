# Concepts: AVD Primer

Azure Virtual Desktop (AVD) is a core technology used to deliver Spot PC and this article provides an introductory primer to that service, how it differs from traditional remote desktop (RD) implementations and highlights key features that are of particular relevance to Spot PC.

Microsoft provides through documentation on AVD and is a good resource for deep learning on the intricacies of AVD. One of the reasons Spot PC is valuable is that much of the nuance and exhaustive learning required to successfully leverage AVD manually has been automated and pre-architected for you. Thus, much of this detail is only important to satisfy curiosity and not a must-read to be successful with Spot PC. https://docs.microsoft.com/en-us/azure/virtual-desktop/overview

AVD is a collection of Microsoft services, software licenses and technologies that have been brought together in Azure to simplify the delivery of remote desktops to end users. In traditional RD implementations the same components are present although, for the most part, each component needed to be acquired, configured and maintained by the IT support organization of the end users (e.g., MSP, internal IT).

## Components of RD Deployments

To fully understand how AVD fits in this offering, it is helpful to step back and consider what components it takes to successfully deliver a RD solution, independent of a specific technology (e.g., AVD, RDS, VDI, etc...)

* User Access Devices
  * To connect to their remote resources (desktop and/or apps), end users need some sort of device with which to connect. Examples include computers, Mobile devices and even a [Smart Fridge](https://youtu.be/fV-qiahSYFw).
* User Access Clients
  * The client applications used to connect to remote resources, come in many flavors. Installed clients software and web-based clients are available from many vendors provide clients as do 3rd party vendors. Hosting of web clients and/or install and customization of local client software is often required and managed by the IT team.
* Gateway
  * The access client connects to the gateway with credentials to be routed to the appropriate datacenter and/or regional location.
* Broker
  * The broker also manages how users sessions are connected and reconnected to desktops and apps.  
* Load Balancing
  * For production deployments, balancing load between resources is important.
* Management
  * Management tools for the solutions are common, these range from simple PowerShell scripts and commands to multiple 3rd party vendors addressing different aspects/technologies for RD management.
* Diagnostics
  * To support the success of RD delivery, some solution for monitoring, logging and diagnostics is a requirement. Components that need this range from the network connection at the end user access devices to the VMs hosting the user sessions, and all the components in between.
* VM Images
  * VM images are commonly used to simplify and scale the management of VM configuration and customizations.
* Desktop Applications
  * Applications installed on the VMs hosting user sessions need to be deployment, audited and updated.
* Desktops and Streaming Apps
  * RD resources are exposed to users via a desktop environment with installed apps and/or via streaming apps that run remotely and are presented locally as if they are running on the local device.
* Client-Server Applications and databases
  * Just like local desktop users, RD users often use applications that run in a client-server model and require back-end servers for the application and/or database hosting. All of the associated management (storage, networking, security, images, etc...) is also required.
* Profile Management
  * User profiles are commonly used to store user-specific settings, data and personalization. A variety of technologies existing to facilitate this in RD environment, balancing the performance and the replication and availability of this data across multiple VM hosts.
* VM Sizing and Scaling
  * The size, quantity and availability of host VMs is another aspect of a RD environment that needs to be managed and monitored.
* Networking
  * Just like local user devices, the RD environment requires network configuration, security, monitoring and management.
* Security Policies and Tools
  * RD environments need multiple layers of security, protecting the user identity, authentication, OS, profile data, company data and more.
* OS Updates and Patching
  * The VMs hosting user sessions typically run some flavor of Windows and have requirements for patches and updates to maintain security and performance.  
* Data Storage layer
  * In an RD environment, the storage layer for company and user data takes on even more importance. The speed, redundancy and integrity of this data can make or break the success of the RD project, from security and performance perspectives.
* User management and Identity Provider
  * From assigning users to specific resources to data access policies, the management of users is just as important in an RD deployment as it is in traditional IT environments. Integrating with a distributed identity provider with advanced security functionality is a common requirement as well.
* Active Directory Domain
  * Typically project requirements state that the identity of users (and admins) be integrated with the company AD domain for security and manageability.
* Windows and User Session Licensing
  * The OS of the session host VMs, as well as the user sessions require licensing. In traditional RD deployments, that licensing was typically acquired via an EA with both Windows Server and User CAL licensing. The licensing requirements vary widely based on the nuances of the deployment architecture and the channels of licensing acquisition.
* End User Helpdesk
  * Just like traditional desktop users, RD end users need a helpdesk resource to contact for support. When supporting an RD environment, many aspects of the helpdesk role is the same as a traditional desktop environment. However, depending on the RD configuration, the nature or frequency of questions and incidents are shifted. Also the method of support and the skillset of the helpdesk staff may be very different, with a greater focus on network connectivity and session host VM support.
* Private Connectivity to IT Resources
  * Access to IT resources that are not hosted along side the RD resources is often a requirement for RD projects. From on-premises servers to cloud-hosted services across any number of public/private cloud vendors, there are diverse requirements for private connectivity to those resources. Often this takes the form of site-to-site VPN connectivity between the RD environment and the networks of those other IT resources. In Azure, Express Routes and vNet Peering are alternative options to establish private connectivity.


## Shifted Responsibility with AVD

One of the key features of AVD is the shifting of responsibility from the IT support organization to Microsoft. No longer do these components require IT to build, host and support them, rather Microsoft delivers them as a managed service in Azure.

* Gateway
  * The Remote Connection Gateway service facilitates the remote user connection to the AVD resources in Azure. This service also manages the reverse connection feature in AVD, opening a connection to the session host VM without the need for an open inbound port to the RD environment.
* Load Balancing
  *  AVD functionality includes a balancing service that routes user sessions tot VM resources. In AVD you can choose between "depth-first" or "breadth-first" mode. Depth-first fills up a VM host before sending users to the new VM hosts. Breadth-first equally distributes users across all available host VMs. In Spot PC that setting is managed automatically, with AI and ML technology managing this in conjunction with the size, quantity and availability of VM hosts.
* Broker
  *  The Connection Broker service in Azure brokers the connection between the user session and the desktop(s) and streaming apps available to the user.
* Management*
  * AVD includes limited management functionality in the Azure Portal and a more complete feature set via PowerShell and/or REST APIs. These methods enable powerful control but often require specialized skills and experience with these APIs and PowerShell modules.
* Diagnostics*
  * With AVD, significant data is available in the Azure portal and Azure Log Analytics for reviewing and learning from the metrics of your environment. This data is helpful for troubleshooting but additional configuration and/or data analysis/visualization tools are often needed to gain true insights.
* Web Client
  * Microsoft offers a modern web client for AVD, where end users can login and connect without installing a local access client. This client software is hosted and managed by Microsoft as a service.

    \* Often the functionality for **Management** and **Diagnostics** are great sources of access and functionality, but additional tools and/or experienced labor is required to fully support a production RD environment.

With AVD, the IT service team retains responsibility for the other items including:

* User Access Devices and Client Install
* VM Images
* Desktop Applications
* Desktop and Streaming Apps
* Client-Server Applications
* Profile Management
* VM Sizing and Scaling
* Networking
* Security Policies and Tools
* OS Updates and Patching
* Data Storage Layer
* User Management and Identity Provider
* Active Directory Domain
* Windows OS and User Session Licensing
* End User Helpdesk
* Private Connectivity to IT Resources

## More Shifted Responsibility with Spot PC

Spot PC extends the progress made by AVD in shifting the responsibility of management of the RD environment away from you, the IT team. The goal is to offload tactical items allowing the IT team to invest resources in the areas of the RD environment that can deliver strategic benefit to their end users.

Examples of this shifting responsibility include:
* VM Images
  * Spot PC includes end-to-end image lifecycle management functionality. This automates much of the back-end complexity and prerequisites required to user an image based VM management approach. This approach is also a requirement to support some of the advanced optimization and business continuity functionality found elsewhere in Spot PC. This functionality automates the tactical tasks and allows the admin to simply pick a source image, connect to a temporary VM to configure the image, one-click sys-prep and finalization of the image. Spot PC also handles distributing the image to appropriate Azure regions, removing up the temporary VM resources,  applying the image to host VMs and automating the deployment and availability of the new image to test and production users.
* Desktop Applications
  * The selection, install and configuration of desktop applications remains the responsibility of you, the IT team. Spot PC functionality for one-click remote access to all VMs and the Image management feature greatly simplify and automate the delivery of this IT function.
* Desktop and Streaming Apps
  * Desktop apps can be exposed in a remote desktop context and/or a streaming app. It remains the IT team's responsibility to determine the appropriate delivery method for the users and to manage that configuration. The Spot PC console includes configuration details to simplify and implement these settings.
* Client-Server Applications
  * Like desktop apps, the deployment and configuration of server resources to support client-server applications remains the responsibility of the IT team. The Spot PC service can be connected to these resources via vNet peering, site-to-site VPN or even Azure Express Route. Spot PC service includes configuration support for these Azure services. Additionally,
* Profile Management
  * With Spot PC, FSLogix profile containerization technology is automatically implemented and configured. User profiles are stored on the data storage layer as container images and mounted on the session host VM to maximize performance and data integrity. This best practice is completely automated and seamless.
* VM Sizing and Scaling
  * Spot PC AI and ML technology handles the size, quantity and availability of session host VMs automatically based on the purchased SKUs and real-time user activity. The IT team does not need to monitor or manage this aspect of the RD environment.
* Networking
  * Spot PC automatically defines and configured the Azure vNet and network security policies to support the Spot PC deployment. This is another area where the IT team does not need to take an active support role. At setup it is imperative that the IT team identifies a network address range that is open and unused across the company's various networks. The IT team can also apply additional customizations or security policies in coordination with the Spot PC services team.
* Security Policies and Tools
  * Spot PC automatically deploys Microsoft Defender for Cloud, the alerts and recommendations from this are populated int he Spot PC console for easy access. It is the IT team's responsibility to review and act on alerts and recommendations as well to configure and support security policies to support eh company's specific security needs. Additional security settings, such as Azure Conditional Access for MFA, are also the responsibility of the IT team, with close support from the Spot PC services team.
* OS Updates and Patching
  * Spot PC deploys and configures Windows Update for Business automatically, allowing Microsoft automation to handle the update and patching of the Windows OS. Application updates and patching is the responsibility of the IT team.
* Data Storage Layer
  * Spot PC automatically deploys and configures a storage layer Azure service based on the size of the environment. From Azure Files Premium  to Azure NetApp Files, the performance of the service grows based on the number of users licensed. The size of the available storage layer is also automatically managed, based on the purchased SKUs. The management and configurations of storage layer performance and capacity is included in the Spot PC service.
* User Management and Identity Provider
  * Azure AD is the identity provider for AVD and Spot PC. Users' assignment to specific Spot PC resources (desktops and apps) is governed by the users' membership in AD Security Groups. The IT team is responsible for organizing the users into the appropriate groups and the ongoing management of that membership. Spot PC automation translates that membership, automatically exposing the appropriate resources when membership changes are made. Via Azure AD Connect, Azure AD and the local AD Domain Controller are synced for management simplicity.
* Active Directory Domain
  * While Azure AD is the identity provider, the VMs in AVD and Spot PC must join the actual AD DC, typically via a site-to-site VPN. The deployment of this VPN, along with the setup of Azure AD Connect are septs of the onboarding process fulfilled via a self-service workflow with support from the Spot PC services team. The configuration and management of the AD DC remains the responsibility of the IT team.
* Windows OS and User Session Licensing
  * Licensing for the OS and user sessions in AVD are both handled as part of the end user's Microsoft 365 subscription, a responsibility that remains with the IT team. Licensing for the OS for non-session host VMs including the management VM and any purchased Business Servers is included in the Spot PC service, that licensing responsibility is part of the Spot PC service.
* End User Helpdesk
  * The support of end users is solely provided by the IT team, end user support is not included in the Spot PC service. The Spot PC console does include significant real-time data visibility, log aggregation, one-click remote access and configurations functionality to enable the helpdesk to efficiently support their end users.
* Private Connectivity to IT Resources
  * Spot PC includes services support to configure and support VPN, vNet peering and Express Route deployments. Typically the costs of these servers are not included in Spot PC, with some exceptions. The ongoing monitoring and maintenance of these services remain with the IT team.

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
