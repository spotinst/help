<meta name="robots" content="noindex">

# Features: OS Patching
<!--

Planned Feature, not yet implemented. Manually configured Windows Update until then.

From the PRD:

Windows Update for Business is a deployment service that allows the Windows 10 operating system to be updated on targeted Azure Virtual Machines (VMs). For Spot PC, Windows Update for Business will be used to update both feature versions (named versions like 21H1) and quality versions (specific security and bug fix releases). Spot PC management will propagate new versions by creating an OS Update candidate for all Spot PC tenants and then following deployment rules to execute the update on a per Spot tenant basis. In general, the update candidate will:

Be created by Spot support based on evaluation of new/recent entries in the update Catalog.

Designate the update catalog entry by selecting it from the Catalog collection via the Graph API.

Support a per tenant opt-out option that will persist from deployment to deployment.

Support an override option that will allow excluded Spot PC tenants to receive a specific update in emergency situations.

Support a default rollout setting to determine how the release should be rolled out, with preference for immediate Start Date and an Devices per Offering setting of 100.

Provide Spot PC support with the ability to edit defaults before a deployment is executed.

Settings for each Spot PC tenant will include:

A flag to exclude the Spot tenant from automated OS updates.

A default rollout schedule for both feature and quality releases, including Start Date (relative to Spot Support OS update start date), End Date (relative End Data in days from Start Date) or alternatively an Devices Per Offering and Duration Per Offerings option.

A history of deployments and their status.

Windows Update for Business References:

Windows Update for Business Automated Deployment Overview: Announcing the Windows Update for Business deployment service - Microsoft Tech Community

Graph API: updates resource type - Microsoft Graph beta | Microsoft Docs

Spot PC should allow a Spot PC Administrator to create an OS Update

An OS Update should specify the update content target by selecting it from the Catalog list. GET command: https://docs.microsoft.com/en-us/graph/api/windowsupdates-catalog-list-entries?view=graph-rest-beta&tabs=http

As OS Update should specify that the update should override Spot PC tenant exclusion flags (Default = false)

An OS Update should specify a Start Date/Time as an the beginning of the target rollout and designate a specific Devices per Offering and Duration between Offerings options. Leaving Devices per Offering and Duration between Offerings blank will only set the Start Date/Time for the OS Update.

An OS Update should specify if the update type is Feature or Expedited Quality.

Spot PC Tenants should include the following attributes for the managing Windows Update for Business:

A flag to exclude the tenant’s session virtual machines from all updates except the emergency override OS updates.

A default deployment rollout schedule for Feature deployment types, including a Start Date (relative to the OS Update Start Date/Time) and either an End Date or Devices Per Offering and Duration between Offerings attribute pair or an End Date (days from the designated Start Date)

A default deployment rollout schedule for Quality deployment types, including a Start Date (relative to the OS Update Start Date/Time) and either an End Date or Devices Per Offering and Duration between Offerings attribute pair or an End Date (days from the designated Start Date)

All new session VMs for a Spot Tenant should be Enrolled into the Deployment service POST https://docs.microsoft.com/en-us/graph/api/windowsupdates-updatableasset-enrollassetsbyid?view=graph-rest-beta&tabs=http

All new session VMs for a Spot Tenant should be added to an Updatable Asset Group: POST https://docs.microsoft.com/en-us/graph/api/windowsupdates-updatableassetgroup-addmembersbyid?view=graph-rest-beta&tabs=http

OS Updates should be translated to a Windows Update for Business Deployment for each non-excluded Spot PC tenant:

Create a Deployment for the tenant, including the target update instance selected from the Catalog and stored in the OS Update, including the rollout schedule. POST https://docs.microsoft.com/en-us/graph/api/windowsupdates-updates-post-deployments?view=graph-rest-beta&tabs=http

Update the Deployment to target specific virtual machines by using the Update Deployment Audience endpoint. POST https://docs.microsoft.com/en-us/graph/api/windowsupdates-deploymentaudience-updateaudience?view=graph-rest-beta&tabs=http

Track status of the Deployment GET https://docs.microsoft.com/en-us/graph/api/windowsupdates-deployment-get?view=graph-rest-beta&tabs=http and report back to the Spot PC console. Note: Update Compliance (Monitor Windows Updates and Microsoft Defender for Cloud with Update Compliance (Windows 10) - Windows Deployment | Microsoft Docs) provides a more granular, VM level data set on the current version/update state. The configuration of this component and integration of its data is out of scope for v1 but will be incorporated in future release plans.

-->

## What’s Next?

Learn more about [Getting Started](spot-pc/getting-started/) with Spot PC.
