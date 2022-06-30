# Spot PC: Onboarding Workflow
The Spot PC onboarding workflow is designed to deploy the Spot PC environment balancing configurability with simplicity. Depending on the choices you make along the way some of these documented options may or may not be presented. This document is designed to be used as a guide to help understand the benefits and caveats of each choice in this workflow.

Onboarding a new Spot PC tenant is performed from within the [Spot PC console](https://admin.pc.spot.io/). For new administrators with no existing tenants, their initial login will automatically log them into the new tenant workflow.

# Workflow Steps
The Spot PC onboarding workflow has six distinct steps. Once completed, the Spot PC environment will be built in the client's Azure Tenant with a baseline configuration. After this workflow has completed, the next steps will be to select (or customize) a VM image and create a Spot Group. Those two steps will finalize the build, creating host VMs and enabling end user access to their new Spot PC desktops.

## Step 1: Authorize Spot PC Discovery and Connect Spot PC to your Azure tenant
<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow2-01.png" target="_blank"><img style="float: left;" src="/spot-pc/_media/onboarding-workflow2-01.png" hspace=20 vspace=20 alt="Click Image for Full Size" width="450"> </a> In order to automate the implementation of the selections to follow, the workflow needs some basic Azure tenant information and permissions to be granted by a Global Admin (GA) account from that tenant. Using the GA's permissions, Spot PC will add two Azure Enterprise Apps (Spot PC & Spot PC Discovery) which will be the credentials used for all future deployments and automation actions against the customer's Azure tenant. Once those two Enterprise apps are created, the GA's credentials won't be retained or reused again.

###	Tenant ID


To ensure the Spot PC deployment is done against the appropriate Azure Tenant, simply enter the Tenant ID of the Customer's Azure AD Tenant. This can be found in may places within the Azure Management Portal. A simple place to locate this value is within the Azure Management Portal, on the Overview Page for the Azure Active Directory service, under Basic Information > Tenant ID.

###	Authorize Spot PC Discovery
Clicking Authorize Spot PC Discovery will open a new browser window and bring you to Microsoft's "Permissions requested" authentication page. At this point you'll login and Accept the permissions request. Note, the Azure account that should be used for this permissions grant needs to be a Global Admin on the Azure AD tenant.

###	Connect Account
Clicking Connect Account will open a new browser window and bring you to  Microsoft's M365 Admin Center > Settings > Partner Relationships. You'll be prompted to authorize NetApp as a reseller for the customer's Azure Tenant. Authorizing NetApp will not supplant any existing (or future) reseller relationship(s) that may also serve this customer.

###	Refresh Button
The authorization of Spot PC Discovery and the acceptance of the new reseller relationship can take a moment to register on the account. Clicking refresh will poll Azure to check if the necessary changes are complete.

##	Step 2: Select an Azure Region and Define Network
The second section of the onboarding workflow defines some of the fundamental decisions that need to be made regarding the Azure region and the network scope for the new Spot PC environment.

###	Select Preferred Azure Region
Select the region into which the core Spot PC components should be initially deployed. Spot PC can support users across multiple regions within a single tenant however some platform resources will be deployed to support the customer Spot PC environment and they need a home. Typically the region where the bulk of users will be hosted is a good choice. There are regional differences in the available resource types, this is particularity relevant for GPU users and larger deployments that wish to run on Azure NetApp Files. This [Microsoft Tool](https://azure.microsoft.com/en-us/services/virtual-desktop/assessment/) can estimate end user experience based on region.

###	Custom Spot PC vNet Scope
The Spot PC deployment will be done into a Virtual Network with a defined network scope. It is important that this range of IP addresses not overlap with any existing (or future) network architecture at this customer. In the event that private connectivity is established (now or in the future), overlapping with another subnet can cause issues. The onboarding workflow asks for a /20 range but this can be customized post-deployment if more IP addresses are required.
The network scope must fall into one of these private ranges:

- 192.168.0.0 through 192.168.255.255
- 172.16.0.0 through 172.31.255.255
- 10.0.0.0 through 10.255.255.255

##	Step 3: Connect Spot PC to your AD Domain
The user and machine authentication for Spot PC is handled by Microsoft Azure AD (AAD) and/or an Active Directory Domain Controller (ADDC). Several AAD and/or ADDC configurations are supported by the onboarding workflow. The third section covers all of the supported deployment scenarios related to AAD and ADDC.

###	Directory Type
####	Deploy New Active Directory DC in Spot PC (coming soon)
This option is not yet available in preview. This option will deploy a VM in the Spot PC Azure subscription and configure it as a domain controller to support this Spot PC deployment.

Once deployed, Azure AD Connect will need to be manually installed to sync the ADDC with AAD to support same sign-on functionality for users.

In this scenario, the user authentication is performed against AAD and the machines are joined to the domain controller for machine authentication.

####	Connect to Existing Active Directory DC
This option will use an existing ADDC for the machine authentication process. For this to work, private network connectivity must be established between the Spot PC vNet and the network of the ADDC. Depending on how this is configured the Spot PC onboarding team can assist with the creation of vNet Peering, site-to0site VPN and the appropriate Network Security Group configurations.

To successfully be integrated with Spot PC, Azure AD Connect will need to be manually installed to sync the ADDC with AAD to support same sign-on functionality for users.

In this scenario, the user authentication is performed against AAD and the machines are joined to the domain controller for machine authentication.

####	Connect to Azure AD Join (Preview)
This option uses native Azure AD functionality to handle both user and machine authentication processes. This deployment method greatly simplifies the onboarding process as no external network connectivity is required.

For same sign-on, Azure AD Connect can be enabled on an ADDC to keep the users in AAD and AD in sync.

With Azure AD Join, the options for traditional AD functions (e.g. GPOs) are limited.

####	Connect to Existing Azure AD Domain Services
Much like an existing ADDC, Azure AD Domain Services (AADDS) can be used as the domain controller supporting Spot PC.

AADDS is automatically synced with AAD so end users will be able authenticate to Spot PC with same sign-on.

With AADDS the users authenticate against AAD and the machines are joined to the AADDS domain for authentication.

###	Domain Name
Select the primary domain name for this Azure AD Tenant. This should be available as a drop down selection.

###	Custom NetBIOS Name
In rare cases the NetBIOS name for an ADDC is not the default (the first 15 characters of the domain name). In that case, please enter the actual NetBIOS name.

###	Domain Join Permissions
When integrating with an AADC, credentials are needed to join Spot PC VMs with the domain. These credentials are stored by Spot PC and used on an ongoing basis. It is recommended that this account be purpose-built and limited to Domain Join permissions on the domain.

###	DC Network Connectivity
This step seeks to confirm that network connectivity back to the ADDC has been established. This connectivity may be via a VPN form the Spot PC network directly to the ADDC network. Alternativly, if private connectivity already exists between Azure and the ADDC (outside of the Spot PC deployment), Spot PC can configure vNetPeering and Network Security Groups to open that connectivity without additional private connections needing to be established.

##	Step 4: Connect to your Domain Controller’s Network
###	Select the network containing your AD Domain Controller
If multiple networks are visible to the Azure Admin account, you'll be able to select which network contains the ADDC.

##	Step 5: Confirm Azure AD Sync
Azure AD Connect is required for some Domain deployment types, when required the Spot PC workflow will check for active AD Connect sync activity. If none is found instructions are shown for deploying that application and a re-check button is available.

###	Check Status
Clicking Check Status will re-poll the Azure environment to verify a successful AD Connect sync.

##	Step 6: Review and Build
The final step simply displays all of your selection options for review prior to clicking Go! to complete the onboarding workflow and initiate the final automated deployment actions.

<!--      
# Progress Sidebar
## Initialization Logs
### Create Subscription
### Create Azure AD Application
### Configure Azure AD Application Roles
### Configure Subscription Permissions
### Register Resource Providers
### Create Resource Group
### Create Log Analytics Workspace
### Enable Defender for Cloud
### Create Key Vault
### Create Cosmos Account
### Create Service Bus
### Create Service Bus Queues
### Create Cosmos Database & Containers
### Configure Subscription Quotas
### Provision Cloud Insights Tenant
### Deploy Container
## Peering Virtual Networking Logs
### Peer Virtual Networks
## Discovery Logs
### Begin Discovery
### Validate DNS
### Validate Domain
### Validate Domain Account
## Deployment Logs
### Begin Deployment
### Validate deployment parameters
### Deploy ARM Template
### Process ARM DSC
### Join SpotPCManagerl to Domain
### Set up Spot PC OUs
### Install Spot PC Orchestration Service
### Assign Html5 Web Address
### Allocate Storage
### Initialize SPOC Service
-->

## What’s Next?

Learn how to [deploy your first Spot Group](spot-pc/tutorials/deploy-spot-pc) into this new Spot PC account.
