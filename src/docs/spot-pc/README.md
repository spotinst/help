# Spot PC

Spot PC is a managed, continuously optimized cloud desktop service that runs Azure Virtual Desktops (AVD) and/or Windows 365 Cloud PCs. The service is easy to deploy and secure for both end users and administrators, all while offered at a fixed price per user per month for each user type.

**Key features of the service include:**

- **Managed desktops** - Spot PC delivers native cloud desktops based on AVD and/or Windows 365 Cloud PC. Using AI-driven automation and optimization from Spot by NetApp creates cost optimized virtual desktops that provide users with a superior experience. Spot PC tools simplify image management, resource allocation and more.

- **Rapid deployment and migration assistance** - Spot PC experts will assist with application and data migration while the Spot PC automated deployment workflow reduces the time from purchase to usable cloud desktops.

- **Choice of AVD and/or Windows 365 Cloud PC** - Spot PC creates and manages both types of Azure-based virtual desktops.

- **Enhanced security and protection** - Microsoft Defender for Cloud is enabled for all AVD session VMs, and the Spot PC console reports security alerts and recommendations for both AVD and Windows 365 desktops. In addition, Spot PC automatically backs up the user data volume every night.

- **Unified cross-tenant management** - A global view of all accounts, resources, and users under your control with secure drill down into any tenant to immediately troubleshoot, diagnose, and resolve identified issues.

- **Powerful console with rich analytic dashboards** - Complete visibility to user session and session VM performance, along with automation tools to make configuration more efficient.

- **Application lifecycle management** - Workflow driven tasks to create and manage both images and application installation packages, including MSIX App Attach and scripted installs.

**Let the experts manage your cloud desktops so you can focus on your business. Benefits of Spot PC include:**

- **Elimination of operational burdens** - With fully managed cloud desktops from our experts, your IT resources can focus on what they do best, making end users productive and helping your business grow.

- **Deliver more cloud desktops at less cost** - Utilizing Spot by NetApp optimization and automation technologies, Spot PC reduces management and infrastructure costs by up to 70%.

- **Realize predictable, reliable costs** - With Spot PC’s fixed monthly per seat subscription, you can predict exactly what your cloud desktop spend will be, allowing you to budget based on your needs.

- **End worries about application management** - Spot PC ensures your applications work in your cloud desktop environment and provides tools and guidance to maintain applications as your desktop needs evolve.

## Components and services

- Co-managed & secured Desktop-as-a-Service (DaaS)
- A service that is configured, not customized
- Cross-tenant customer support for MSPs
- Continuously optimized for price & performance
- Tools for application migration & application management
- Windows 10/11 image management tools & update automation
- RESTful API integrations with PSA

<img src="/spot-pc/_media/spot-pc-01.png" />

## Resource Allocation

Spot PC session hosts are built in Azure using Spot automation to maximize availability and performance for end users while minimizing unnecessary costs.

Spot PC builds and maintains hosts for each user type. These hosts will be kept in an offline state when not needed and brought online to support real-time workloads. Host machines typically take 2 minutes to come online and be ready for new user sessions. Spot PC maintains an extra 10% of online capacity in each Spot Group to provide end users with instant availability for nearly all login patterns. It is possible that user login storms (when many users simultaneously login) may cause some users to receive a login failure. The system automates the availability of additional resources and simply retrying 1-2 minutes later should be enough effort for a user to successfully connect.

### Resource Allocation Note

Below, examples of the resources allocated to each user type are outlined. The exact Azure VM type (e.g., RAM/CPU/GPU configuration) used for session hosts is determined by automation and thus the specific resources available to users is not a specific, fixed, amount. Spot PC aggregates usage and performance data to optimize these algorithms. Specific concerns about end users' performance experience should be raised with Spot PC support so adjustments can be made to ensure performance and productivity are maintained.

### Pooled User Session Hosts

Pooled users share a host with up to 9 other pooled users (10 total). Spot PC builds one VM host for every 10 licensed Pooled users (rounding up).

Pooled end users can expect performance roughly equivalent to sharing a 4vCPU host with 32 GiB RAM (e.g., E4as v4). (See Resource Allocation Note [above](https://docs.spot.io/spot-pc/?id=resource-allocation-note))

For pooled users, each user session is assigned to a host sequentially (aka "depth mode"), filling each host with 10 users before moving on to fill the next host. Once a host reaches 6 active sessions, an additional host is proactively brought online to be ready ahead of the need for additional capacity.

### Personal User Session Hosts

Personal users connect to their own host machine. Spot PC builds a VM host for every licensed Personal user.

Personal end users can expect performance roughly equivalent to 2 vCPUs and 8GiB RAM (e.g., D2as v4). (See Resource Allocation Note [above](https://docs.spot.io/spot-pc/?id=resource-allocation-note))

### GPU User Session Hosts

GPU users connect to their own host machine. Spot PC builds a VM host for every licensed Personal user.

GPU end users can expect performance roughly equivalent to 4 vCPUs, 14GiB RAM and 2Gib Video RAM on the AMD Radeon Instinct MI25 GPU (e.g., NV4as v4). (See Resource Allocation Note [above](https://docs.spot.io/spot-pc/?id=resource-allocation-note))

### Data Storage Layer

The technology used to support the data layer is either Azure Files or Azure NetApp Files, depending on the number of licensed Spot PC users supported by that storage layer. A detailed comparison of these technologies can be found [here](https://docs.microsoft.com/en-us/azure/storage/files/storage-files-netapp-comparison).

For deployments supporting less than 50 users, [Azure Files is used with the Premium ](https://docs.microsoft.com/en-us/azure/storage/files/storage-files-planning#storage-tiers) tier.

> From Microsoft: "Premium file shares are backed by solid-state drives (SSDs) and provide consistent high performance and low latency, within single-digit milliseconds for most IO operations, for IO-intensive workloads. Premium file shares are suitable for a wide variety of workloads like databases, web site hosting, and development environments. Premium file shares can be used with both Server Message Block (SMB) and Network File System (NFS) protocols."

For deployments supporting 50-249 users, [Azure NetApp Files is used with the Standard](https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-service-levels) tier.

> From Microsoft: "The Standard storage tier provides up to 16 MiB/s of throughput per 1 TiB of capacity provisioned."

For deployments supporting 250 or more users, [Azure NetApp Files is used with the Premium](https://docs.microsoft.com/en-us/azure/azure-netapp-files/azure-netapp-files-service-levels) tier.

> From Microsoft: "The Premium storage tier provides up to 64 MiB/s of throughput per 1 TiB of capacity provisioned."

The size of the data storage layer is calculated at 25Gib licensed user. Additional storage can be purchased in 1TiB blocks and will augment the existing storage layer on the storage type as determined by the user quantity (above).

### Business Server

Many use cases require dedicated server infrastructure to support customer workflows. Spot PC environments can easily be integrated with other (self-managed) Azure Subscription resources via vNet peering. This option makes integrating machines and services with the Spot PC environment easy to manage without requiring ongoing support from the Spot PC team.

Occasionally, server resources may be required in the same subscription as the Spot PC session hosts. This may be due to technical requirements or business reasons. To support this requirement, Spot PC offers an add-on subscription to add Business Server resources as a separate SKU. The SKU includes a set mix of resources (4vCPU/8GiB RAM/128GiB HDD) which can be applied to one or more machines. The minimum size is 2 vCPU, 8GiB RAM and 128GiB Managed Disk. Multiple Business Server SKUs can be purchased, with the resources applied to a single VM or multiple. For example, two Business Server SKUs could support either 1x D4as_v4 (4vCPU/8GiB/256GIB HDD) or 2x D2as_v4 (2vCPU/4GiB/128GIB HDD) each.

## Co-Management: Who Does What?

Spot PC co-management is a collaboration between Spot by NetApp, the IT administrator, and the tenant organization. Each entity has a role in a successful Spot PC experience.

### Operate: Spot by NetApp

- Architecture & solutions coaching
- Onboarding and migration project planning and support
- Spot PC deployment support (including Azure Components)
- Provide end-to-end Image management platform
- Monitoring and alert response for VMs, network, data volumes, security
- OS Updates
- Run time optimization of compute and storage
- On-Demand Tier 2 and 3 Support (chat, phone, ticket)

### Configure: Managed Service Provider/Cloud Operations

- User needs assessment, use case and solution sizing
- Customer/User communication
- Customize VM image with apps and settings
- Image update testing, approval & timing
- AD user management & security
- On-premises device and network support
- Application licensing including M365
- Environment monitoring/response (co-managed with Spot)
- Helpdesk, Tier 1 troubleshooting & end user support
- User entitlement and MACD (moves, adds, changes, deletes)
- Set/customize security policy & standards for end users

## Getting Support

- Support Issues - Support cases can be created and updated within the Spot PC console under [Support Issues](spot-pc/features/spot-pc-console/support-issues/)
- Tickets can also be opened by emailing support@spotpc.netapp.com however cases opened via email may experience routing delays since manual intervention may be required to route the case to the appropriate support resources.
- Support can also be reached by phone at: 1 (844)-645-6789
- Normal support business hours: Monday-Friday, 7:00am-7:00pm Central Time.
- After hours (on-call) support available via phone only.

## What's Next?

Learn how to [Get Started with Spot PC](spot-pc/getting-started/onboarding-workflow) today.
