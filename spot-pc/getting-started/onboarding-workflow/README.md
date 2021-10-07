<meta name="robots" content="noindex">


# Spot-PC Onboarding Workflow
Onboarding a new Spot PC tenant is performed from within the Spot PC console.  For new administrators with no existing tenants, their initial login will automatically log them into the new tenant workflow.

The Onboarding workflow can be accessed by clicking "+ Add New Tenant" from the Spot PC Dashboard.<br><img src="/spot-pc/_media/onboarding-workflow-01.png" />


The onboarding workflow has seven steps, each step is outlined below.<br><img src="/spot-pc/_media/onboarding-workflow-02.png" />


## Connect Your Azure Account
Enter the Tenant ID for the Azure AD tenant where the Spot PC users are located.  This can be found in the Azure AD section of the Azure portal: https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/Overview

## Select an Azure Region
Select an appropriate Azure Region. This [Microsoft Tool](https://azure.microsoft.com/en-us/services/virtual-desktop/assessment/) can estimate end user experienced based on region.

Not all Azure regions can support all Spot PC configurations.  Regions with the best support are show as "Spot PC Reccommended."  Limited regions may be unable to support larger environemnts and/or GPU enabled workloads.
 
In addition to end user experience, consideration should be made to locate the Spot PC environment near other Azure resources such as hosted domain controllers, existing data storage and/or line of business application serivces.  

### Initialization Progress
After the region is selected, the initilaization of the tenant begins.  Several resources are created by Spot PS in the Spot PC Azure subscription.  This step can take several minutes.  Progress is shown to the right under "Initilization Logs".  The next step in the wizard can not begin until this initilization process finishes.<br><img src="/spot-pc/_media/onboarding-workflow-02.png" />

## Select your Active Directory Type
While the users' identity must be a part of the Azure AD, each machine must also be joined to an Active Directory Domain Controller (AD DC) and Azure AD does not currently support that function.  Therefore an AD DC must be assessable from the Spot PC Azure subscription.  There are two options to fullfill this requirement.

 * Build a new AD DC - the AD DC role will be installed on a VM in the Spot PC Azure Subscription as part of the Spot PC onboarding automation.
 * Connect to an existing AD DC - Join Spot PC VMs to an existing AD DC via VPN/vNet Peering.

In either case, select the appropriate domain address (e.g. company.onmicrosoft.com)

### Connecting to an Existing AD DC
When an Exising AD DC is sleected, the AD DC needs to be accessable to Azure.  This means the AD DC VM must be hosted in Azure or be connected to azure via a VPN/Express Route.

A Domain Join admin account and password is collected at this point to facilitate the joining of Spot PC VMs to the exisitng AD DC.  A unique admind account for solely this purpose is reccommended for security reasons.


## Connect your Network


## Confirm Azure AD Sync

## Review and Build


## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started) with Spot PC.
