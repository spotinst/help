# Spot PC: Onboarding Workflow
The Spot PC onboarding workflow is designed to deploy the Spot PC environment balancing configurability with simplicity. Depending on the choices you make along the way some of these documented options may or may not be presented. This document is designed to be used as a guide to help understand the benefits and caveats of each choice in this workflow.

Onboarding a new Spot PC tenant is performed from within the [Spot PC console](https://admin.pc.spot.io/). For new administrators with no existing tenants, their initial login will automatically log them into the new tenant workflow.

# Workflow Steps
The Spot PC onboarding workflow has six distinct steps. Once completed, the Spot PC environment will be built in the client's Azure Tenant with a baseline configuration. After this workflow has completed, the next steps will be to select (or customize) a VM image and create a Spot Group. Those two steps will finalize the build, creating host VMs and enabling end user access to their new Spot PC desktops.

## Step 1: Authorize Spot PC Discovery and Connect Spot PC to your Azure tenant
###	Tenant ID
###	Authorize Spot PC Discovery
###	Connect Account
###	Refresh Button
##	Step 2: Select an Azure Region and Define Network
###	Select Preferred Azure Region
###	Custom Spot CV vNet Scope
##	Step 3: Connect Spot PC to your AD Domain
###	Directory Type
####	Deploy New Active Directory DC in Spot PC (coming soon)
####	Connect to Existing Active Directory DC
####	Connect to Azure AD Join (Preview)
####	Connect to Existing Azure AD Domain Services
###	Domain Name
###	Custom NetBIOS Name
###	Domain Join Permissions
###	DC Network Connectivity
##	Step 4: Connect to your Domain Controller’s Network
###	Select the network containing your AD Domain Controller
##	Step 5: Confirm Azure AD Sync
###	Check Status
##	Step 6: Review and Build




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

## What’s Next?

Learn how to [deploy your first Spot Group](spot-pc/tutorials/deploy-spot-pc) into this new Spot PC account.
