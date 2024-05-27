<meta name=“robots” content=“noindex”>

# Spot PC: Onboarding Workflow

Onboarding a new Spot PC tenant is performed from within the [Spot PC console](https://admin.pc.spot.io/). For new administrators with no existing tenants, their initial login will automatically log them into the new tenant workflow.

## Onboarding Workflow Video

A walkthrough of the Onboarding Workflow functionality is detailed here:

<iframe src="https://www.youtube-nocookie.com/embed/YLDgldXgVzA?vq=hd1080&modestbranding=1&rel=0&theme=light&color=white" height="480" frameborder="0"></iframe>

## Add New Tenant
The Onboarding Workflow can be accessed by clicking "+ Add New Tenant" from the Spot PC Dashboard.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-01.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-01.png" alt="Click Image for Full Size" width="1000"> </a>

## Connect Your Azure Account
The first step is to enter the Azure Tenant ID for the target tenant. The tenant ID can be located in the Azure Portal for the tenant. After entering, click "Connect Account" to authorize Spot PC for this Tenant. Clicking the refresh icon will force Spot PC to re-check for an existing link. Once the link is confirmed, you can move on to Step 2, "Authorize Spot PC Discovery."

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-02.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-02.png" alt="Click to Enlarge" width="1000"> </a>

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-04.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-04.png" alt="Click to Enlarge" width="1000"> </a>

## Authorize Spot PC Discovery

Spot PC uses an Azure Enterprise application to discover the existing Azure tenant's networks and to locate the AD DC (or Azure AD Domain Service). Deploying this Enterprise App requires an additional permission set be granted by the Azure admin account.

After clicking _Authorize Spot PC Discovery_ you'll be asked to login with an Azure admin that has the Azure Tenant Owner role assigned. The specific permissions requested are required for Spot PC automation to deploy and manage the Spot PC environment.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-05.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-05.png" alt="Click to Enlarge" width="1000"> </a>

## Select an Azure Region and Define Network

Select an appropriate Azure Region. This [Microsoft Tool](https://azure.microsoft.com/en-us/services/virtual-desktop/assessment/) can estimate end user experienced based on region.

Not all Azure regions can support all Spot PC configurations. Regions with the best support are shown as "Spot PC Recommended." Limited regions may be unable to support larger environments and/or GPU enabled workloads. Consult with the Spot PC onboarding team if you'd like to select a limited region to confirm it can support your use case.

In addition to end user experience, consideration should be made to locate the Spot PC environment near other Azure resources such as hosted domain controllers, existing data storage and/or line of business application services.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-06.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-06.png" alt="Click to Enlarge" width="1000"> </a>

### Custom Spot PC vNet Scope

This step also offers the ability to define a custom vNet Scope for the Spot PC deployment. This is optional and without input, Spot PC will randomly select a viable network range.

Spot PC is typically integrated with other resources and networks via VPNs and/or vNet Peering. It is important that the range used by Spot PC does not overlap with any other ranges in use for this tenant, both in and out of Azure. Please select a range that does not overlap with any other networks.

The network scope defaults to a /20 which supports up to 2096 addresses in Spot PC. This can be changed post-deployment to expand capacity or reduce address consumption on the network.

The network scope must fall into one of these private ranges:

- 192.168.0.0 through 192.168.255.255
- 172.16.0.0 through 172.31.255.255
- 10.0.0.0 through 10.255.255.255

### Initialization Progress

After the region is selected, the initialization of the tenant begins. Several resources are created by Spot PC in the Spot PC Azure subscription. This step can take several minutes. Progress is shown to the right under "Initialization Logs". The next step in the wizard cannot begin until this initialization process finishes.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-03.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-03.png" alt="Click to Enlarge" width="1000"> </a>

## Connect Spot PC to your AD Domain

While the users' identity must be a part of the Azure AD, each machine must authenticate against AD (AD DC, AADDS or Azure AD). The following options are supported by Spot PC:

1. Hybrid AD with Azure site-to-site VPN allowing Spot PC VMs to joing the local AD DC.
2. Hybrid AD with Azure vNet Peering allowing Spot PC VMs to join Azure-hosted AD DC. 
3. Azure AD Domain Services (AADDS) acting as the AD DC within the end-customer's Azure Tenant.
4. Azure AD Direct Join (in currently in Preview) can joing Spot PC VMs to Azure AD without any AD DC. 

Therefore if used, the existing AD DC must be accessible from the Spot PC Azure subscription. As noted in the [pre-deployment article]((/spot-pc/getting-started/prerequisites/?id=existing-domain-controller), this is done via site-to-site VPN or vNet Peering from Spot PC to any other Azure vNet that has established connectivity to the AD DC.

Select the appropriate domain address (e.g., company.onmicrosoft.com)

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-07.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-07.png" alt="Click to Enlarge" width="1000"> </a>

### Connect to your Domain Controller's Network

When an Existing AD DC is selected, the AD DC needs to be accessible to Azure. This means the AD DC VM must be hosted in Azure or be connected to Azure via a VPN/Express Route.

A Domain Join admin account and password is collected at this point to facilitate the joining of Spot PC VMs to the existing AD DC. A unique admin account for solely this purpose is recommended for security reasons.

## Connect your Network

For Spot PC to connect with the AD DC, the Spot PC vNet will need to be peered with an existing Azure vNet that has visibility to the AD DC.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-08.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-08.png" alt="Click to Enlarge" width="1000"> </a>

## Confirm Azure AD Sync

For Spot PC to operate the existing AD DC must be synced with Azure AD via Azure Active Directory Connect. This step simply confirms that this sync is in place and has had sync activity in the past 24 hours. More information on AD Connect can be found [here.](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/whatis-azure-ad-connect)

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-09.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-09.png" alt="Click to Enlarge" width="1000"> </a>

## Review and Build

All of your selections are shown for your review before clicking to finalize the deployment.

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-10.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-10.png" alt="Click to Enlarge" width="1000"> </a>

### Deployment Logs

As the automation runs and builds the Spot PC environment, several milestones are tracked, and that progress is shown on the right side of the page. These steps are:

<a href="https://docs.spot.io/spot-pc/_media/onboarding-workflow-11.png" target="_blank"><img src="/spot-pc/_media/onboarding-workflow-11.png" alt="Click to Enlarge" width="1000"> </a>

**Peer Virtual Network**

- In this step we're creating a peering link between the new Spot PC virtual network used by virtual desktops, and your existing customer network (which has visibility to your AD DC or Azure AD Domain services resources).

**Request SSL Certificate**

- In this step we're issuing an SSL certificate that's used to secure any of the optional public-facing endpoints. This is primarily used to secure the in-browser "connect to server" functionality available to Spot PC admins.

**Validate Deployment Parameters**

- This step evaluates all your inputs in the Onboarding Workflow and transforms them into an ARM template and Desired State Configuration (DSC) used during the deployment automation.

**Deploy ARM Template**

- Spot PC sends the deployment's ARM template to the Spot PC subscription/resource group and initiates the deployment. This triggers Azure to add the Azure resources to the Spot PC subscription such as virtual networks, virtual machines, network security groups, etc...

**Process ARM DSC**

- Initiates the DSC for platform resources in the subscription. The primary platform resource is the SpotPCManager1 VM.

**Join SpotPCManager1 to Domain**

- Performs the AD join process for the SpotPCManager1 virtual machine using the Domain Join account provided earlier in the workflow.

**Set up Spot PC OUs**

- Creates the Spot PC 'home' organizational unit (OU) in the AD Domain and configures it for Spot PC.

**Install Spot PC Orchestration Service**

- Installs the Spot service on the SpotPCManager1 virtual machine and configures it for Spot PC.

**Assign HTML5 Web Address**

- Registers the new HTML5 gateway used by connect-to-server using a unique, publicly routable DNS address

## What’s Next?

Learn how to [deploy your first Spot Group](spot-pc/tutorials/deploy-spot-pc) into this new Spot PC account.
