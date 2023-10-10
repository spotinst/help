# Create a Security Policy

This page describes the procedures to create a policy for security notifications.

## Get Started

To access the notification policies, do the following:

1. In the upper right, click the User icon, and then click My Account in the menu.

<img src="/administration/_media/create-security-policy-1.png" width="400" />

2. In the top center, click on Settings.
3. In the left menu, click Notification Center and Event Policies.
4. The Event Policies dashboard opens.
5. In the upper right, click Create Policy.

### Create New Policy

1. In the Create Policy popup, enter the following information:
* Policy Name: Give the policy a name.
* Policy Type: In the dropdown, choose Security.
* Policy Description: Enter a few words describing what or who the policy is for.

<img src="/administration/_media/create-security-policy-2.png" width="400" />

2. Mark Personal policy if you want the policy to be visible only to you. You will not be able to add integrations. If you leave the checkbox blank, the policy will be available to other members of the account it is in, and you will be able to add integrations.
3. Click Continue.

To complete the policy definition, you will need to complete all parts of the wizard to select an account, rules, regions, and integrations. Once the policy is created, you might need to edit it to select users who will have access.  

## Step 1: Select Account

Select the account the notification policy should apply to.

<img src="/administration/_media/create-security-policy-9.png" width="1000" />

Only accounts that are connected to a cloud provider can create a notification policy.

## Step 2: Select Assets

Choose the assets you wish to be notified of if any security rules fail to perform them.

<img src="/administration/_media/create-security-policy-10.png" />

You can turn on the Future Assets toggle if you select All Assets across the selected accounts. This will enable the notifications for the assets which are onboarded later in these accounts.

## Step 3: Select Security Rules

Choose the security rules that you want to generate security events from the Rules list.  

<img src="/administration/_media/create-security-policy-11.png"  />

The frequency that the security notifications is sent is based on the severity of the security rules selected.

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
