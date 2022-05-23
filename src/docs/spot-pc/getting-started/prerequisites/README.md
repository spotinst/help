# Spot PC: Prerequisites

This document describes the required elements for deploying Spot PC. A core component of Spot PC is Azure Virtual Desktop (AVD), thus Spot PC inherits the prerequisites for AVD.

## Spot PC Deployment Prerequisites (Required)
The following list covers required discovery steps to perform before starting a Spot PC onboarding.

  - **[Azure AD (AAD) Tenant ID](spot-pc/getting-started/prerequisites/?id=azure-ad-tenant-id)**
    - **[Azure Admin with Global Administrator rights on the Azure Tenant](spot-pc/getting-started/prerequisites/?id=azure-admin-with-global-administrator-rights-on-the-azure-tenant)**
    - **[Identify default custom domain name for AAD](spot-pc/getting-started/prerequisites/?id=default-custom-domain-name-for-aad)**
  - **[Existing domain controller (AD DC)](spot-pc/getting-started/prerequisites/?id=existing-domain-controller)**
    - **[AD domain account (local) with AD join rights](spot-pc/getting-started/prerequisites/?id=domain-admin-account-with-domain-join-rights)**
    - **[Identify existing AD domain name](spot-pc/getting-started/prerequisites/?id=existing-ad-domain-name)**
  - **[Identify existing Azure vNet with network access to AD DC](spot-pc/getting-started/prerequisites/?id=identify-external-azure-vnet-for-ad-dc)**
    - **[Identify external vNet subscription](spot-pc/getting-started/prerequisites/?id=identify-external-vnet-subscription)**
    - **[Azure admin with rights on this Azure subscription](spot-pc/getting-started/prerequisites/?id=azure-admin-with-permissions-on-this-azure-subscription)**
  - **[Available vNet IP scope identified](spot-pc/getting-started/prerequisites/?id=virtual-network-scope)**
  - **[Azure AD Connect installed](spot-pc/getting-started/prerequisites/?id=azure-ad-connect)**
  - **[Identify primary Azure region](spot-pc/getting-started/prerequisites/?id=identify-preferred-azure-region)**

    ### Azure AD Tenant ID
    The customer must have an Azure AD tenant containing all Spot PC users. Since M365 creates an Azure AD tenant, meeting that requirement will also satisfy this requirement. For the onboarding workflow, please document the Azure AD Tenant ID. Your Tenant ID can be found in the Azure AD section of the Azure portal: https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview

    #### Azure Admin with Global Administrator Rights on the Azure Tenant
    To authorize the Spot PC deployment into this Tenant, an Azure Admin account with Global Administrator permissions on this Azure AD Tenant is required. During the onboarding workflow, that Admin Account will login to approve invite and delegated admin permissions required for Spot PC to work in this Tenant.

    #### Default Custom Domain Name for AAD
    If a default custom domain name has been configured on this Azure AD tenant, it is important to document that and have it on-hand when going through the onboarding workflow.

    ### Existing Domain Controller
    Spot PC requires an AD Domain Controller (AD DC) to already exist, and for connectivity between an Azure vNet and that AD DC. Most commonly the AD DC is connected to an existing azure vNet via a Site to Site VPN or Express Route. Alternatively, the AD DC may be running in an Azure subscription and thus already be connected to an Azure vNet.

    As part of the Spot PC onboarding, the Spot PC vNet(s) will be peered (with vNet Peering) with the external AD DC vNet.  Occasionally, network security group settings on the external AD DC vNet may need to be set to allow network traffic from Spot PC vNet(s) to the AD DC.

    #### Domain Admin Account with Domain Join Rights
    A local Domain Admin account with Domain Join permissions is required to allow Spot PC to join Spot PC VMs with the AD DC. It is recommended that this admin account be dedicated to this function and have permissions limited to just domain join. During the onboarding workflow, these user credentials will be provided to Spot PC to enable the automation of this step.

    #### Existing AD Domain Name
    The domain name of the local domain should be documented and on-hand while going through the onboarding workflow.

    #### Document Existing NetBIOS Name
    In rare cases the NetBIOS configured for your existing domain can require an extra configuration step by our onboarding team. To get ahead of that possibility, please confirm and document the current NetBIOS name by following these instructions:
    * Connect to an existing AD DC with domain admin Permissions
    * Run _nbtstat -n_ or right click on the root domain in ADUC and select properties.
    * Document the "Domain name (pre-Windows 2000)" entry.
    <br><a href="https://docs.spot.io/spot-pc/_media/getting-started-prerequisites-01.png" target="_blank"><img src="/spot-pc/_media/getting-started-prerequisites-01.png" alt="Click to Enlarge" width="1000"> </a>

    ### Identify External Azure vNet for AD DC
    An external Azure vNet must be configured with network access to the AD DC. This is typically accomplished via a site-to-site VPN or by running the AD DC on a VM attached to that vNet. A Spot PC network will be created and peered with this existing vNet as part of the Onboarding Workflow.

    A basic VPN from the Spot PC network directly to the on-premises AD DC network is available as well. This solution, using a the basic VPN Gateway, is limited to 100Mbps and isn't a scalable solution for larger or intensive workloads (e.g. loading data from on-premises storage). It should only be used in production for authentication back to the AD DC and only for smaller environment. 

    #### Identify External vNet Subscription
    So that permission for vNet Peering is available, identify the Azure Subscription that contains the external Azure vNet (the vNet with AD DC network connectivity).

    #### Azure Admin with Permissions on this Azure Subscription
    For the subscription that contains the external vNet, an Azure Admin with at least one of the following subscription roles is required. During the onboarding workflow, that Admin Account will login and authorize Spot PC to automate the vNet Peering.

    Required Subscription Role:
    - Owner
    - Contributor
    - Network Contributor

    ### Virtual Network Scope
    The customer will need to select a network scope for Spot PC. Often, Spot PC will be integrated with on-premises (or other public cloud) resources via a site-to-site VPN or Azure vNet peering. To avoid conflicts with current or future integrations, it is important to define a network scope that won't overlap with other resources in the environment.

    The network scope must fall within one of these ranges:

    - 10.0.0.0 – 10.255.255.255
    - 172.16.0.0 – 172.31.255.255
    - 192.168.0.0 – 192.168.255.255

    ### Azure AD Connect
    Azure AD Connect is a required component that syncs the customer's AD DC with their Azure AD tenant. The customer AD DC must be configured with Azure AD Connect for Spot PC to deploy successfully. A guide for this is found [here](spot-pc/tutorials/install-ad-connect).

    ### Identify Preferred Azure Region
    Each Spot Group is deployed into a single Azure Region. During the onboarding workflow, the default Azure Region for the tenant must be selected. Future Spot Groups deployed within the tenant can be placed in other Azure Regions to fit project requirements.

    Commonly the closest region to the end user(s) is the best choice, however regions vary in service availability and some may not have the resources available to support your workload. Microsoft offers a [very useful tool](https://azure.microsoft.com/en-us/services/virtual-desktop/assessment/) for determining which Azure Region will offer the best performance based on your location.

## Additional Considerations

### [Confirm Microsoft 365 Licensing](spot-pc/getting-started/prerequisites/?id=microsoft-365-licensing)
  - Microsoft 365 Licensing for AVD

### [Identify Purchased SKUs](spot-pc/getting-started/prerequisites/?id=identify-purchased-skus)
  - Total pooled/shared users
    - Define Spot Group quantity
    - Identify AD Groups for "User <-> Spot Group" assignment
  - Total personal users
    - Define Spot Group quantity
    - Identify AD Groups for "User <-> Spot Group" assignment
    - Determine Dedicated vs. On-Demand host definition
    - For Dedicated Desktops, define Automatic vs. Direct assignment
  - Total GPU users
    - Define Spot Group quantity
    - Identify AD Groups for "User <-> Spot Group" assignment
    - Determine Dedicated vs. On-Demand host definition
    - For Dedicated Desktops, define Automatic vs. Direct assignment
  - Total TiB additional storage
  - Total business servers & CPU/RAM allocation
    - Determine number of Business servers
    - Define CPU/RAM allocation (2vCPU/4GiB increments)

### [Identify primary application list](spot-pc/getting-started/prerequisites/?id=identify-primary-application-list)
  - List of common apps
  - Identify client/server apps
  - Identify database requirements

### [Assess existing Azure and on-premises networking configuration](spot-pc/getting-started/prerequisites/?id=assess-existing-azure-and-on-premises-resources)
  - List other existing Azure Subscription(s)
  - Azure resources to be exposed to Spot PC users

### [Assess data migration needs](spot-pc/getting-started/prerequisites/?id=assess-data-migration-needs)
  - Quantify total size of data to migrate
  - Assess change rate of existing data
  - Identify location(s) of existing and available bandwidth

    ## Microsoft 365 Licensing
    Windows 10/11 user access rights for Spot PC are included in the users' Microsoft 365 (M365) subscription, a requirement for AVD and Spot PC.

    Supported licensing options are documented here: https://azure.microsoft.com/en-us/pricing/details/virtual-desktop/

    Spot by NetApp has no role in purchasing, enrolling or enforcing M365 licensing. The onboarding workflow does not validate the availability of M365 licensing and can be completed regardless of the user licensing status. It is the customer/partner's responsibility to apply and manage M365 licensing to be in compliance with AVD licensing requirements.

    ## Identify Purchased SKUs
    Identifying the quantity of purchased users and how they are organized is a recommended exercise to perform earlier in the Spot PC deployment project. Spot PC users and desktops are organized into "Spot Groups" to simplify administration tasks.  Depending on the type of Spot Group, the behavior of session host allocation to users can vary.  More detail on tis topic is [found here.](spot-pc/features/concepts/spot-groups)

    Having an awareness of the purchased Spot PC SKUs and how they will be deployed is helpful at the beginning of the deployment project.

    ## Identify Primary Application List
    Immediately after the onboarding workflow is complete, the next step is to build your first VM Image, and knowing the applications required by your end users is very helpful. An audit of current apps in use, along with a mapping of which users need which applications from the outset will greatly smooth-out the deployment project.

    Special attention should be paid to client-server applications and applications that require a database.

    ## Assess Existing Azure and On-Premises Resources
    Occasionally services and resources (such as a server) need to be exposed to the users in Spot PC from another location. Via vNet Peering, network connectivity can be established between other Azure vNets and the Spot PC environment. If there are outside resources that Spot PC users need to access, identify and document those for the onboarding project.

    ## Assess Data Migration Needs
    As part of the Spot PC deployment project, many customers have significant quantities of data to migration into the Spot PC storage layer. Knowing the scope of this aspect of the project upfront will make the project faster and simpler. Consolidating data before migration can also greatly simplify the effort.

## What’s Next?

Learn more about [End-User prerequisites](spot-pc/getting-started/prerequisites/end-user-prerequisites) or get started [deploying Spot PC](spot-pc/getting-started/onboarding-workflow) by following the Onboarding Workflow.
