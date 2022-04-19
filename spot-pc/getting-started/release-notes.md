# Spot PC: Release Notes

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
  * Various enhancements an dupdates from our ongoing security hardening efforts.
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
