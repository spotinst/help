<meta name=“robots” content=“noindex”>

# Spot PC: Release Notes

## 1/26/2023
_When:_ 1/26/2023 at 10pm - 11pm Eastern
_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Email Alert Threshold 
  * Spot PC is proud to announce the Email Alert Threshold which is a default of 250 emails per hour per tenant. When the threshold met, all recipients in a tenant’s notification profiles will receive an email that email alerts have been suspended.
 Plus, the notification badge will display a pinned notice that the tenant has passed threshold and email alerts have been suspended. Tenant users and Spot PC techs can enable and disable alert emails. However, only Spot PC support can change the email alert
 threshold limit. 
* Command Center Access using Local Admin
  * Spot PC is excited to present Command Center Access using Local Admin. Users now have the option to use Local Admin instead of just Domain User Access. Local Admin can now use automatically Command Center without entering a password. When Command
 Center is started Computer Management and Notepad will open as well.  
* Command Center Change Tracking
  * In Command Center, users can enable or uninstall change tracking. Users can track software, registry, inventory and services and these changes will be upload the Azure Log Analytics workspace.
* Spot Group List Update
  * The Spot Group List now has three new default columns - Active Sessions, Disconnected Sessions, Total Sessions. 
* New Column: Source 
  * The User Session List now has a new Column, Source. The Source Column denotes the Spot Group that user session is a part of. 
* Security Updates 
  * Spot PC is continuing our security efforts, checking signatures before downloading the upgrading and securing SSL Certificates in Azure Key Value are latest examples. 
* New Tooltips 
  * Both the Business Servers and Images' Create and Edit Workflows have new tooltips.
* Process List Update
  * The Process List now has a refresh button for manual refreshes. 
* Prerequisites for FSLogix agent automatic upgrade in future versions
  * Spot PC is delighted to preview prerequisites for FSLogix agent automatic upgrade in future versions. FSLogix agent version can be specified from approved version list and can be focus on site or tenant with inheritance. New deployments will
 default to 'install latest'. Existing deployments will have the feature disabled by default, and it must be enabled explicitly. Updates will occur gracefully and opportunistically. This new feature can be managed through Command Center but will be available
 in Spot PC Web App in a future release.  

## 1/12/2023
_When:_ 1/12/2023 at 10pm - 11pm Eastern
_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Alerts Notification Badge
  * Spot PC is excited to present the Alerts Notification Badge to the header of the Web App. With real-time alerts that are created by specific tenant-based monitors. Alerts can be filtered by all tenants or by specific tenants.
* Log View Improvements
  * Spot PC has improved Log View. Logs can be expanded across the screen with the Full button with the search bar still available. To get out of the full screen, press the minimize button. While in the logs, visibility has improved when highlighted blue hover is enabled with black text. 
* New Notifications Profiles
  * Spot PC is proud to announce Notification Profiles are now available under Config Actions. At this point in time, emails can be added to notification profiles that can be assigned to monitors.  
* Logs Update 
  * Log Analytics retention has increased to 90 days for new tenants. In timeframe, 60 day and 90 days are now available options for filtering in Logs.
* Default Monitors Updates 
  * Default Monitors are now created for automatically for new tenants. Default Monitors can be added for existing tenants manually. 

## 12/15/2022
_When:_ 12/15/2022 at 10pm - 11pm Eastern
_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Code Signing
  * Spot PC is excited to announce Code Signing is now available for our exe's and DLL's. This change improves compatibility with customer 3rd party anti-malware and management tools.  
* New Downloadable Reports
  * Downloadable reports are now available in .csv format for Alerts and Security tabs in Spot PC Web App.
* Monitors & Alerts Updates
  * In the Alerts Tab, source column is now reflected properly for new alerts.
* Azure Files Backup 
  * Backup of Azure Files storage accounts are now standardized. New AF volumes are now set to back up with the standard retention - 7 nightly backups, 5 weekly backups, 12 monthly backups, 5 yearly backups. 
* Image Set Update: Reboot
  * Spot PC is proud to announce Reboot for Image Sets. The computer icon now includes Reboot in the drop down below Connect and Connect As. Reboot improves troubleshooting options for admins when status of the image set is 'manually configure VM'. 
* User Session Update: New Column 
  * Under the User Session Tab, Session Idle Time column was added to the table in order to provide a view to disconnection and idleness. 
* Image Set Update: Notes
  * Spot PC has improved Image Set Notes. The latest Image Set Notes are now displayed in the individual image set banner. Also, global image set notes have moved from the right pane and are now a modal. 
* Performance Update
  * Under the Performance Tab in user sessions, a unit of time, milliseconds, was added to the graphs in order to provide clarity. 
* Onboarding Changes
  * In the Onboarding workflow, when AADDS directory type is selected NetBIOS is hidden. 'allow traffic forward' will be grayed out while in progress.  
* UI Enhancements
  *  Spot PC made following UI Enhancements.
	1. Revamp of the left sidebar. This significantly reduced the horizontal width allowing more general space. Chat is now situated on the bottom of the left sidebar.  
	2. Multiple Select has removed for Image Sets
	3. The refresh button is back for all Logs
	4. New Icons across the webapp for actions in tables and for Organizations and Tenants in the header.
 	5. Search option has been streamlined to allow more vertical space 
	6. Config Actions' accordion is now aligned in formation
* Sites Updates
  * Sites now have new tooltips to Sites' fields in attributes and other key locations in the workflow.  


## 12/6/2022
_When:_ 12/6/2022 at 10pm - 11pm Eastern
_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Monitors and Alerts
  * This hot fix improves the reliability of Monitor creation and management and fixes an intermittent Alerts display problem

## 11/17/2022
_When:_ 11/17/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Admin Invitation Expiration
  * Spot PC now has an expiration policy of 15 days for Admin Invitations. After the expiry date, new invites can be sent within the UI by hitting resend.  
* Spot Group Details View Update: Image Set Details 
  * Spot PC has introduced a new section, Image Sets Detail, on the Spot Group Detail View Page. The Image Sets Detail includes a history of image sets including past, current and scheduled. 
* Security Alerts & Recommendations Improvements
  * Security Alerts and Recommendations has improved navigation for filtered lists. When searching a severity or phrase, cycling through items of that search is now supported. To go back to filtered list, there's a back button. 
* New Tooltips
  * Spot PC has new tooltips: 
    1. Domain Name Tooltip: In Connect to Spot PC to your AD Domain with Onboarding, a tooltip to explain the source of the dropdown names and when to provide a manual input name has been added.  
    2. Connectivity Type Tooltip: In user logon activity, a tooltip has added to clarify between new and existing sessions. 
* UI Enhancements
  * Spot PC has added a plethora of UI Enhancements throughout: 
    1. Config Actions has new icons for actions with a white background. 
    2. Quick Actions has a blue background with new icons for actions. 
    3. Log View now has all the queries inline, and refreshes with new selections.  
    4. In Admin Roles, the checkbox color for permissions is now blue.
    5. Performance improvements when retrieving spot groups list and image setlist
* Machine Detail View Update: OS Disk 
  * Spot PC has added OS Disk in the Machine Detail View. OS Disk value shows the used space and size of the disk with the units. 

## 11/3/2022
_When:_ 11/3/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* New Config Action: Monitors
  * Spot PC is delighted to introduce a New Config Action - Monitors. Monitors are rules that continuously evaluate a specific performance parameter like network round trip time or CPU utilization % and produce alerts when the current values reach warning and critical levels. Spot PC monitors will include both a default set of rules for common parameters and tenant level parameters created by administrators. In the list view, the actions column has the ability to pause or activate the monitor in real time. In the Create workflow, naming the monitor, the metric that will have conditionals place it on and a description that can provide a resolution. 
* Image Set Update:  Connect As 
  * Spot PC is proud to announce Connect As for Image Sets. The computer icon now has a drop down with Connect and Connect As. Using Connect As, admins can choose which username and password to use connect with including Domain Accounts.  Overall, all Image Set Icons are now visible all times but are disabled when they can't be used. 
* Image Set Update: Image Validation
  * When a new image set version is created, Spot PC automation now waits and retries if Azure reports the new image is not ready to create a validation VM.
* User Logon Activity Report
  * Spot PC has reformatted User Logon Activity Report. Now downable in csv format with additional columns powered by WVDConnections  which are customizable and be rearranged to an individualistic benefitable way to enable quick troubleshooting. New columns include Client IP address, and AVD client version and type.  
* Extensibility Changes 
  * Spot PC has renamed the options under Extensibility Config Actions to 'API Accounts' to 'Accounts' and 'Accounts' and 'Tenant Admins' to better describe items underneath it.    
* Security Tile Now Active 
  * Clicking the Security Tile now leads to Security Tab and the recommendation page. 
* Logs: Duration Addition 
  * Under the Logs Tab in Admin Activity, a unit of time, milliseconds, was added to the Duration column in order to provide clarity. 
* Admin User Updates 
  * Admin User lists now reflect the Invitation Date as the date an admin was added, not the first date they attempted to log in.
* Process List Refresh
  * The Spot PC Web UI does not force and immediate refresh on the process list when a terminate process action has been taken. This change corrects a slow refresh condition which incorrectly reported the terminated processes as still active.
* Cloud PC and Business Server User Logon Tracking
  * Logon and logoff events for Cloud PCs and Business Servers have been added to the User Logon activity view. 
* Create Business Server Name Validation 
  * In the Create Business Server workflow, the Business Server Name field in Spot PC now has validation that matches Azure's conventions. 

## 10/20/2022
_When:_ 10/20/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Filtered Performance tab added to the Dashboard
  * A Performance tab that filters machines, sessions, and data volumes by Spot Group has been added to the dashboard. There are three sub-tabs that display trending graphs: Machines, User Sessions and Data Volumes. In Machines, compare machines within a tenant, view the top 5 machines in a Spot Group or pick the exact machines that you want to see in the Spot Group. In User Sessions, you can do the same for each user.
* Sites Updates
  * Spot PC has improved Sites in the following ways.
    1. Address Range Validation: An error message will appear if an unavailable address is used.
    2. Directory Type will display only choices that are valid for a specific tenant instance. If a tenant was created for Direct Join, a site can only use the Azure AD directory type.
* New Config Action: Data Volumes
  * Data Volumes lists and details have moved to the Config Actions menu.
* Spot Group Details Update
  * Session Time Security Settings has been added to the Spot Group Details page and can be changed using the Edit option.
* New Limited Availability Tooltip
  * Spot Groups with a status of Limited Availability will now display a tooltip that describes the reason that all session virtual machines are not available.
* New Column: Process ID
  * The Process ID for a user session has been added to the session details for both Machines and User Sessions.
* FSLogix Shrink Disk Automation for Hybrid AD Tenants
  * Spot PC has added an automated task that compresses the size of FsLogix containers if they are not locked. The compression task is run every Sunday at 12:01 am local time (as defined by the time on the SpotPCmanager1 server)
* Azure Front Door component added to the default tenant configuration
  * Spot PC now includes an instance of Azure Front Door to control traffic into the web based administrative access to managed virtual machines (session VMs and Business Servers). The Web Application Firewall (WAF) component of the Azure Front Door can be restricted per tenant.
 
## 10/06/2022
_When:_ 10/06/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* New Spot Group Status
  * Spot PC has improved details when displaying the health status of a Spot Group. The new Spot Group Status is "Limited Availability" which indicates that some but not all of the session hosts in the group are available for end user login.
* Onboarding Reinforcements
  * Spot PC has increased capacity for onboarding micro-services to support new tenant deploys.

## 09/22/2022
_When:_ 09/22/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Spot Group Updates
  * Spot PC is delighted to introduce a multitude of Spot Group enhancements:
    1. Spot Group Detail View*: Now each Spot Group has it own individual page where more details not on the table are present. Actions buttons are available in the top of the view.
    2. Spot Group Status View*: In this new column, users can see the updates on the session hosts.
    3. *Spot Group Tooltips*: In the Spot Group Table, while hovering over the action column each icon has a tooltip description.
    4. Spot Groups now have improved support for very large numbers of Azure AD Groups
* Introducing Table Updates
  * Spot PC has introduced a duo of improvements to all tables through out:
    1. Spot PC is proud to present *Customizable Columns*. Now in the top right corner as a button, users can remove columns and rearrange columns as they see fit.     
    2. Spot PC is excited to present *Frozen Header*. Now when in tables that have an large number of rows, the header will be present while scrolling down.
* Sites Improvements
  * Spot PC has multitude of improvements to Sites:
  * Introducing Admin User Changes
    * Spot PC has improved Admin User Changes. In accounts, admin users' roles can now modified at the organizational level in the UI instead of manually re-adding.
  * Onboarding Updates
    * Spot PC improved resiliency of Onboarding initialization. Users can now retry failed actions.  
* Image Set Updates
  * Spot PC has a couple of updates for Image Set:
    1. Improved feedback when a viable image set is not available in a given site
    2. Prompt for confirmation when deleting an image set

## 09/14/2022 (Hotfix)
_When:_ 09/14/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing pagination for Spot Groups
  * Spot Groups creation will now have pagination and filtering when dealing with large numbers of azure active directory groups, to resolve loading issues

## 09/9/2022
_When:_ 09/9/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Sites 
  * Spot PC is proud to present Sites. Now an option under Config Actions, Sites are a way to create and manage resources in Spot PC by grouping them logically, by geolocation, network, and compliance requirements. 
* Logs Querying Update
  * Spot PC has improved the logging experience by adding in AVD specific logs as defaults to the query types. The AVD logs in question are WVDCheckpoints, WVDConnections, and WVDErrors. 
* Logging Improvements 
  * Spot PC can now collect more AVD logging information, including event and diagnostic information from Workspaces and Application Groups. 
* Tags for Azure Virtual Machines 
  * Spot PC is adding tags to Azure Virtual Machines to help classify their role (session hosts, business servers, personal virtual machines) which can be seen the Azure portal.
* Timing Change for Spot PC OUs
  * Spot PC changed the timing for when Spot PC child OUs are created in the Active Directory instance for hybrid AD deployments. Previously, the child OUs were created when Spot Groups are created, but now all Spot PC OUs are created during the onboarding process. This will allow more predictably for AD policy implementation and permission setting activities.
* Live Updates for Image Version List
  * The image version list is refreshed automatically upon creation of a new version. Previously a manual refresh was required to show the new version.
* Image Sorting Improvement
  * The sort order image versions has been changed so that the most recent version is at the top of the list and the oldest version is at the bottom of the list. This change makes it easier to access the most recent version.

## 08/25/2022
_When:_ 08/25/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing "Connect as..."
  * Spot PC is excited to present "Connect as..." option in Quick Actions  for logging into VMs, Business Servers. Now admins can choose which username and password to use connect with including Domain Accounts.  
* Granular Permission Updates
  * Spot PC is proud to announce that granular permissions now have a downloadable option for roles. Admins can now chose singular, several or all roles to download to an excel spreadsheet with all the scopes inside. 
* Spot Group Updates 
  * Spot PC has multitude of improvements to Spot Groups: 
1. For the following release methods, Immediate and Scheduled, now have a Session Termination Time that can be changed from the default of 5 minutes
2. In Select Image Set, admins can now change the source Image Set for Spot Group updates, including Global image sets. Admins are no longer limited to a new version of the image set chosen when the Spot Group was created
3. Instead of an empty image set list, during creation of a Spot Group a warning message will appear if there are no available image sets in the chosen Spot PC Site
4. The load balancing method for Spot Groups have now changed from depth first to breadth first

* Bulk User Log Off
  * The User Session list in the Spot PC Dashboard now supports the ability to select multiple user sessions to terminate. Previously, each user session needed to be terminated individually from the User Session Detail page Quick Actions menu.
* Editable Details
  * In Organization Details, first name, last name, and email are now editable and in Tenant Details time zone is also editable.
* Onboarding Updates
  * When Health Checks succeed or skipped the Go button will light up Green. However, when health check fail, the admin user can choose the option to Skip Health Checks. In this case, the Go button is enabled with a blue color to denote that the provisioning process may still experience issues.

## 08/15/2022
_When:_ 08/15/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Granular Tenant Roles
  * SpotPC is proud to announce Granular Tenant Roles. SpotPC has created a series of Tenant Roles with different permissions that can be assigned to organization users. Tenant role access for each admin can also be changed or removed.
  * __Tenant Manager Role__: A tenant role that allows the highest level permissions with access to all tenant functions.  
  * __Tenant Contributor Role__: A tenant role that allows read/write access to all tenant functions. However, delete access is not available.
  * __Tenant Reader Role__: A tenant role that allows read access to all tenant functions.
  * __Custom Roles__: A organization administrator can create a custom set of roles for specific access to each tenant and can use one of the built-in roles as a base.
* Image Set Improvements
  * SpotPC has added a plethora of improvements to Image Sets:
    1. A warning message to the sealing image since it's a irreversible process
    2. Improved logging that captures SysPrep failure messages in the Spot PC Spoc Log, which are visible in the Dashboard
    3. Image creation instances will remain on for 72 hours after build before shutting down. Admins can turn the VM instance back on from the Spot PC image version list by clicking the Connect to Machine link
    4. Newly created image versions are now tested immediately by creating a new azure VM from the image to ensure its valid for virtual session VM use in Spot Groups
* Backup Schedules for Business Servers & Personal
  * SpotPC has backups that are now enabled for new Business server and Personal Virtual Desktops VMs created going forward. The backup occurs once a day, with 7 daily, 5 weekly, 12 monthly, and 5 annual retention/recovery points.
* Tooltip Size Increase
  * Tooltip text size has been increased to make them more readable in all form factors.
-->

## 07/28/2022
_When:_ 07/28/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Live Updates
  * Instead of constant refreshing, SpotPC is proud to announce that updates and notifications are now live and instant. This is now true for Image Sets, Spot Groups, Banner Notifications, and more to come in future releases.
* Introducing Persistent Changes in UI
  * When an admin makes changes in SpotPC's different views. The admin can now leave that page and return to the page later in the session with their customizations still in place. For example, table sorting and searching.
* New Collapsible Sidebar
  * SpotPC heard that customers weren't only using it a desktop screens. So now in smaller screens the left portion of the screen can collapse to give a responsive view of the dashboard.
* Spot Group Name and Friendly Name
  * SpotPC listened to our customer's pain points, and we made the necessary changes to cut down on confusion. Spot Group list now features both Name and Friendly Name as two separate columns. Plus in Edit Spot Group, the names are displayed Name - Friendly Name.
* Tenant ID + Custom ID
  * SpotPC learned that customers wanted more IDs. The tenant list now features an Tenant ID and Custom ID column. Both ID columns are now searchable and sortable.  
* Onboarding Improvements
  * Health Checks have replaced Discovery Logs. Improvements to tooltips. Streamline workflow between Health Checks and Go.
* Business Server Improvements
  * Spot PC now has a new table just for Business Servers.
* Support for Pooled Spot Group with Azure AD Direct Join
  * Admins can enable Azure Files Volumes to work with Azure AD Direct Join for FsLogix Profile Roaming. 

## 07/14/2022
_When:_ 07/14/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Delete Option for Self-Service Business Server Management
  * SpotPC excited to share that Delete Business Server is now available as part of the Self-Service Business Server Management. You can find List and Delete Business Server through in the UI via Config Actions. 
* Marketplace Landing Page
  * SpotPC is proud to announce Marketplace Landing Page is now live. After making a purchase in Azure, this creates a transition with a summary and chance to request assistance.  
* Security Recommendations Details 
  * SpotPC's Security Recommendations Details are now available. Next to the Security Alerts under the Security Tab, the Security Recommendations Details include remediation steps. 

## 06/23/2022
_When:_ 06/23/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.

* Introducing Self-Service Business Server Management
  * Spot PC is proud to announce Self-Service Business Server Management is now available. You can now Create and Edit Business Server through in the UI via Config Actions.
* New Onboarding Option: AD Direct Join in Preview
  * Spot PC is excited to give an early preview of AD Direct Join. AD Direct Join is now the third option in the Connect Spot PC to your Admin Domain stage in onboarding. It is only available for personal machine types at this time.  
* Announcement Banner 
  * Spot PC now has banner that will give several types of announcements such as updates, releases, and downtime prominently under the header. 
* New Workflow Change in Spot Groups
  * The Spot Group Workflow has been enhanced to put site selection earlier in the process for a better user experience.  
* Tenant Assignment for Org Users
  * Spot PC admins now have the ability to select the number of tenants (one or multiple) that new organization users are assigned to.  

## 06/09/2022
_When:_ 06/09/2022 at 10pm - 11pm Eastern

_Impact:_ Access to desktops and application services for End Users will remain uninterrupted. Access to Spot PC console will remain available.
* UI Enhancements
  * Assorted performance and stability enhancements behind the scenes
* Additional Automated Testing
  * Spot PC's team has added another wave of automated tests to ensure that upcoming automation works, all the time.   

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



## 04/28/2022

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
