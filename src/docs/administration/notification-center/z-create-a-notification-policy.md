# Create a Notification Policy

This page describes the procedures to create a new notification policy in Spot console’s Notification Center.

## Get Started

To access the Notification Center, do the following:

1. In the upper right, click on the User icon, and then click My Account in the menu.

<img src="/administration/_media/notification-center-00.png" width="331" height="68" />

2. In the left menu, click Notification Center. The Notification Center dashboard appears.
3. In the upper right, click Create Policy.

## Create New Policy

In the Create New Policy popup, your user name (i.e., your company email address) appears in the Owner field.

<img src="/administration/_media/create-new-notification-policy-01a.png" width="500" />

1. Complete the following information:
   - Policy Name: Give the policy a name.
   - Policy Description: Enter a few words describing what or who the policy is for.
2. Mark Personal Visibility if you want the policy to be visible only to you. You will not be able to add integrations. If you leave the checkbox blank, the policy will be available to other members of the account it is in, and you will be able to add integrations.
3. Click Continue.

To complete the policy definition, you will need to complete all parts of the wizard to select resources, events, and integrations. Once the policy is created, you may also need to edit the policy to select users who will have access.

## Step 1: Select Account

Select the account the notification policy should apply to.

<img src="/administration/_media/create-new-notification-policy-01-1.png" width="400" />

Only accounts that are connected to a cloud provider can create a notification policy.

## Step 2: Select Resources

Choose one of the options determining which resources will be monitored. The options are described below.

<img src="/administration/_media/create-new-notification-policy-02z.png" width="700" />

### All Resources

When you choose All Resources, all the resources in the account will be monitored. If any resources are added in the future, they will also be monitored.

### Rule-Based Resources

When you choose Rule-Based Resources, you define criteria for monitoring in a Condition and a Condition Set.

A _Condition Set_ is a group of one or more Conditions. When there are multiple condition sets, they relate to each other with an OR operation.

A _Condition_ is a rule within a condition set. Multiple conditions within a condition set, relate to each other with an AND operation.

<img src="/administration/_media/create-new-notification-policy-02a.png" />

Each condition contains the following:

- Identifier: The resource type to be monitored, such as the following:
  - Name
  - Region
  - AMI
  - Tag
  - Load Balancer
  - Availability Zone
  - Security Group
  - VPC
- Operator: The criterion for matching a search, such as:
  - Is
  - Contains
  - Does not contain
  - Begins with
  - Ends with
- Value: The string to be matched, such as a phrase, a word, or part of a word.

Any new resources added to the account that match the defined criteria will automatically be included in the monitoring.

## Manual Resources

When you choose Manual Resources, you then select from a list of existing resources. Only those resources will be monitored for notifications. Any new resources added to the account in the future will not be included unless you edit the policy and add them to the monitoring list.

<img src="/administration/_media/create-new-notification-policy-03.png" width="472" height="211" />

You can filter the list and search for a resource by entering a type, a name, an ID in the filter box, or you can just type in string and search.

## Step 3: Select Events

Choose the types of events you want to receive notifications about. You can use the filter box to search for a specific event type.

<img src="/administration/_media/create-new-notification-policy-04a.png" width="500" />

If you want to configure integrations, click Next. Otherwise, click Create.

## Step 4: Select Integrations (Optional)

If you (an Admin user) are configuring a policy at the Account level, you can select one or more integrations. The integrations determine how the notifications will be delivered.

<img src="/administration/_media/create-new-notification-policy-05a.png" width="600" />

The following integrations are available:

- External Email: Add email addresses that will receive notifications.
- Webhook: Add webhooks to applications.
- SNS: Add an SNS topic ARN to receive notifications in AWS.
- Slack: Add the webhook for a slack channel. In order to define the Channel, create a webhook URL [here](https://spinnakerteam.slack.com/apps/A0F7XDUAZ-incoming-webhooks).

The following attributes will be sent as part of the JSON message via Webhook, SNS or Slack:

- default
- accountId
- resourceId
- organizationName
- trigger_policies
- accountName
- resourceName
- title
- message

## Select Users

Once you (an Admin user) have created an Account level policy, only you are registered to the policy. You can now edit the policy and determine which Spot users will receive notifications. See [Edit Registered Users](administration/notification-center/edit-a-notification-policy?id=edit-registered-users).

## What’s Next?

Learn how to [Edit an Existing Policy](administration/notification-center/edit-a-notification-policy).
