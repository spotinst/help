<meta name="robots" content="noindex">

# Edit a Stateful Instance

Once you have [created](elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch) a stateful instance or [imported](elastigroup/features/stateful-instance/import-a-stateful-instance) one to Elastigroup, you can always go back and edit the configuration.

## Get Started

1. In the Spot console, go to Elastigroup/Groups and click on the Elastigroup you want to edit. In the list of Elastigroups, stateful groups are indicated with the red database icon.

<img src="/elastigroup/_media/stateful-edit-01.png" />

2. In the Elastigroup Overview page, go to the Actions menu and click Edit Configuration. The Stateful editing wizard opens as shown below.

<img src="/elastigroup/_media/stateful-edit-02.png" width="478" height="389" />

## Edit the Elastigroup Parameters

You can edit parameters in each of the Stateful tabs as necessary. The following tabs are included with editable attributes under each tab:

- General:
  - Name
  - Initial Capacity
  - Image
  - Security Groups
  - Key Pair
  - Tags
- Instance Type
  - On-demand Type
  - Availability Zones
  - Spot Types
  - Advanced parameters
- Persistence
  - Maintenance Window
  - Storage Persistency
  - Network Persistency
- Instance Details
  - IAM Role
  - Tenancy
  - AMI Auto-backup
  - Detailed Monitoring
  - EBS Optimization
  - User Data
  - Shutdown Script
  - Auto-assign IPv4 Public IP
  - IPv6
  - Load Balancers
  - Autohealing
- Scaling
  - Capacity Settings
  - Scheduling
  - Target Scaling Policies
  - Simple Scaling
  - Termination Policy
- Review: Enables you to edit the configuration directly in the following formats:
  - JSON
  - CloudFormation
  - Terraform

For descriptions of the parameters in each tab, see [Create a Stateful Elastigroup from Scratch](elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch).

When you have finished editing, click Update to save the changes.

The Stateful editing wizard is different from the main Elastigroup wizard. To edit parameters in the full Elastigroup wizard, go to the bottom of the page and click Switch to Full Edit Wizard.

<img src="/elastigroup/_media/stateful-edit-03.png" width="463" height="183" />

## What’s Next?

Learn more about [Managed Instance](managed-instance/), the Spot solution for launching and managing a single compute instance.
