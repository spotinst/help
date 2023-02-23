# Create a Security Policy

This page describes the procedures to create a policy for security notifications.

## Get Started

To access the notification policies, do the following:

1. In the upper right, click the User icon, and then click My Account in the menu.

<img src="/administration/_media/create-security-policy-1.png" />

2. In the top center, click Notification Center.
3. In the left menu, click Event Policies. The Event Policies dashboard appears.
4. In the upper right, click Create Policy.

### Create New Policy

1. In the Create Policy popup, complete the following information:
* Policy Name: Give the policy a name.
* Policy Type: In the dropdown, choose SecOps.
* Policy Description: Enter a few words describing what or who the policy is for.

<img src="/administration/_media/create-security-policy-2.png" />

2. Mark Personal Visibility if you want the policy to be visible only to you. You will not be able to add integrations. If you leave the checkbox blank, the policy will be available to other members of the account it is in, and you will be able to add integrations.
3. Click Continue.

To complete the policy definition, you will need to complete all parts of the wizard to select an account, rules, regions, and integrations. Once the policy is created, you may need to edit it to select users who will have access.  

## Step 1: Select Account

Select the account the notification policy should apply to.

<img src="/administration/_media/create-security-policy-3.png" />

Only accounts that are connected to a cloud provider can create a notification policy.

## Step 2: Select Rules

Choose rules determining which services and events will generate security notifications.

1.  Choose a service from the dropdown list.

<img src="/administration/_media/create-security-policy-4.png" />

2. Choose rules from the Rules list. You can mark multiple rules in the list.

<img src="/administration/_media/create-security-policy-5.png" />

3. Click Add Service if you want to add additional services for notification.

<img src="/administration/_media/create-security-policy-6.png" />

## Step 3: Select Regions

Choose the regions to include for security notifications. You can mark one or multiple regions in the dropdown list.

<img src="/administration/_media/create-security-policy-7.png" width="150" />

Once you have chosen your regions, you can click Create to create the policy.

## Step 4: Select Integrations (Optional)

If you (an Admin user) are configuring a policy at the Account level, you can select one or more integrations. The integrations determine how the notifications will be delivered.

<img src="/administration/_media/create-security-policy-8.png" width="500" />

The following integrations are available:

* External Email: Add email addresses that will receive notifications.

The following attributes will be sent as part of the CSV attached in the external email:  

* Security Rule	 
* Asset Name	 
* Asset ID	 
* Asset Type
* Cloud
* Cloud Account ID
* Region

## Select Users

Once you (an Admin user) have created an Account level policy, only you are registered to the policy. You can now edit the policy and determine which Spot users will receive notifications.

## What’s Next?

Learn how to [Edit an Existing Policy](administration/notification-center/edit-a-notification-policy).
