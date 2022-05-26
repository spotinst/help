# Spot PC: Release Notes

## 05/26/2022

_When:_ 05/26/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Releases Notes in the Web App
  * In the Spot PC web console in the top right hand corner of the user tile, a link to release notes are available above logout. From the most recent release notes, web app users can navigate to more documentation about Spot PC.
* Simplified Onboarding Workflow
  * Spot PC's onboarding process for tenants has been streamlined to make discovery authorization and connecting your Azure tenant to into one step. This allows us to support international customers by aligning them in the appropriate CSP early creating a better user experience.
* User Session Termination
  * Spot PC now supports user session termination that can be used when pursing remediation for stuck user sessions for any user logged into a Spot Group.
* Multiple Tabs Open
  * Spot PC can now support multiple tabs open in one browser for ease of viewing.
* Spot Group and session Virtual Machine tags in Spot PC web console
  * Spot PC is glad to announce that tagging is now available in the web console in the Create and Edit Spot Group workflows in Config Actions in a key-value pair format.

## 05/12/2022

_When:_ 05/12/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Organization Admin Log activity changes
  * Spot PC web console All Tenants/Admins tab will display only Admin Activities that initiate a change to Spot PC configurations while excluding activities that just retrieve configuration or dashboard data. In addition, the log can now be filtered to only display activity for a single tenant.
* Personal Dedicated virtual session machines will default to FsLogix user profile set to off
  * Personal dedicated virtual session machines are configured for permanent assignment to a specific user. In these cases, the Azure Virtual Desktop recommendation is to store user data locally on the virtual machine, so FsLogix service and profile is configured as disabled by default.
* Display tenant admins list under the Extensibility section of Config Action
  * Spot PC web console will now displays both tenant context admin and API user accounts in the Config Actions/Extensibility list.
* Defender for Cloud automatic enablement chooses the Qualys option
  * Each new session virtual machine is enabled with Defender for Cloud. Spot PC automation will now select the vulnerability scanning option that includes the integrated Qualys option to enable more comprehensive scans.
* Automatic configuration of Azure Lighthouse for Spot PC Support access to Spot PC Azure components
  * Spot PC Support uses Azure Lighthouse to retrieve additional operational data from Log Analytics and to provide support technicians secure access to Azure components. Access requires partner notification and consent in addition to an approved Privileged Identity Management access request. All activities are logged and auditable.
* Add subscription ID attribute to Spot PC site creation in Command Center
  * New Spot PC sites can now be added with a subscription ID that is different from the original Spot PC subscription. This attribute is currently only available in Spot PC Command Center and requires a support request to implement.
* Spot Group and session Virtual Machine tags
  * New API endpoints have been added to allow administrators to add tags to both Spot Groups and personal session virtual machines. The tags are pairs of Variable/Values and can be used to identify information such as Cost Centers for back charging or purpose like "test" or "render". This feature is currently API level only, with web console access planned for a future release.
* New API endpoint User Assigned personal session VM
  * A new API endpoint will return a list of personal virtual machines that have been assigned to a user.
* Spot PC Azure subscription name
  * For new Spot PC deployments, the Spot PC Azure subscription that is added will now contain the name of the Azure tenant. This change will help partners and customers clearly identify Spot PC subscriptions and will allows Spot PC support to identity the Azure tenant from the subscription name.
* Granular secrets management for customer configuration information
  * Spot PC automation utilizes Microsoft best practices for storing and updating secrets and key data, including the use of Key Vaults. The configuration has been updated to provide a more granular level of storage and access for various automated processes and identities
* Default to the All Tenants list if there is no active Tenant selection
  * Spot PC web console remembers the last tenant selection the admin user made and returns to that tenant context after a pause if the session is still valid. When a tenant selection is not available, the default view will now return to the All Tenants view for the Organization.
* Immediate Update of source Image for Spot Groups
  * Spot PC tracks which image is used to create session virtual machines for a Spot Group. This attribute will now be updated immediately upon change instead of waiting for a daily sync.



## 04/28/2021

_When:_ 04/28/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* User Login Times in the UI
  * The Spot PC web console now displays end user logon times in the UI.
  * This release introduces the total logon time.
* API account creation/management in the UI
  * Spot PC's previously announced REST API supports customers orchestrating workflows via external events. This update allows tenant admins to create and manage their own API accounts from within the Spot PC UI.  


## 04/14/2022

_When:_ 04/14/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

### Changes
* Automatic Activation of Cloud Insights
  * Spot PC's monitoring is powered by Cloud Insights. Activation is now automatic, with the metrics picked up by Spot PC will be available right out of the box for all new tenants.
* Introduce Spot Group Columns for Image Set and Image Version
  * This will allow administrators to tell at a glance which image set and version a Spot Group is using.
* Introduce display of Users logged into a Machine
  * Adding visibility into the Machine context that shows which users are logged in.
* Introduce Search function for Tenant lists
  * Search function is added to the tenant list to speed finding a specific tenant within the list of tenants.
* Various Security Enhancements and Updates
  * Various enhancements and updates from our ongoing security hardening efforts.
* Streamline Columns in List Spot Group
  * Removing some columns to improve look as usability of the Spot Group List view.

---
## 03/31/2022

  _When:_ 03/31/2022 at 10pm - 11pm Eastern

  _Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

### Changes
* Introducing Stateful Desktops
  * Stateful desktops support a variety of customer use cases. A few key examples are Developers and GPU-driven (users can customize their own machine and have changes persist across time).
  * This also allows customers to let end users install apps on their own personal machines as desired.
* Introducing Support for International (non-US) Customers - EU
  * We're thrilled to announce support for the EU as a part of this release. Customer's don't have to do anything different - they simply proceed through the Onboarding workflow as they normally would and Spot PC simply handles things on the back-end.
  * Geos coming in the near term:
    * Australia
    * Canada
    * Japan
    * Middle East
* Defender for Cloud Enhancements
  * Iteratively improving and adjusting in order to deliver a better configured security posture for customers and a visual representation of that in the Secure Score.
* Support for BYO Images
  * Added support for custom images added by the partner, even when built outside of Spot PC.
* Updated Regions available in the Onboarding Workflow
  * Since Azure does not maintain every service in every region, some of the services Spot PC leverages may not be available in a region. Updates to maintain accuracy of recommended regions at onboarding.
* Improved Clarity for Images used by Spot Groups and which Spot Groups are using which Image
  * Introducing Image Set version details in the workflows that reference image versions and adding the Spot Groups using the images to the List Image Sets view and in the details of an image version.
  * Introducing columns in the List Spot Group table to highlight the image set and image version used.
* Introducing UI Enhancements - Breadcrumbs and Shimmer Effects
  * Added breadcrumbs UI element allowing users to navigate directly back to the exact page they want to.
  * We also have a visual improvement for when data is loading on a page. For example, user experience data takes a few seconds to stream into the table in the Users module. Previously, the table would temporarily appear blank as data became available. Now, there is a brief shimmering effect that indicates data is loading before it appears.
* Introducing License Alerts for Windows 365
  * This update provides a visual indicator for when the number of Windows 365 users that are managed by Spot PC exceeds the number of licenses for Windows 365.
* Introducing Tenant Level API
  * Spot PC intends to allow customers to orchestrate workloads as desired, which means exposing certain APIs. Added a scope for the APIs for allowing deliniation by tenant, allowing customers to use automation to proceed through Spot PC workflows via external triggers.
* Reduced Spot PC App Permissions
  * Spot PC follows the Zero Trust framework wherever possible, including the Least Required Methodology. Any permissions we can remove without impacting customers and their desired outcomes will be removed.
  * The Spot PC Application deployed in the customer's tenant had permissions which where are able to be removed.
    * GroupMember.ReadWrite.All
    * Application.ReadWrite.All
* Introducing Disabling/Enabling Connections to Machines
  * Adding the ability to enable/disable new user connections to a specific machine.
* Add a setting that controls Spot PC Web UI session timeout
  * Spot PC allows an admin to set how long an admin session in the Spot PC UI can remain idle before being logged out automatically.
  * Most specifically, this enables customers in an effort to meet the NIST framework that requires timeouts to be set to 15 minutes.
* Additional Automated Tests
  * This represents our continuing commitment to testing all aspects of the Spot PC UI, including visualizing what steps are being taken in the UI via the automation tests.
  * This updates adds 4 more workflow validation tests to the list in the link to the right.
* Improved Clarity when Deleting a Spot Group
  * Adding text to clarify what happens when a Spot Group is deleted.


## What’s Next?

Get started [deploying Spot PC](spot-pc/getting-started/onboarding-workflow) by following the Onboarding Workflow.
