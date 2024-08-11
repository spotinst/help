# Create a Compute Policy

You can create notifications for compute products, such as Elastigroup and Ocean resources.

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Go to **Notification Center** > **Event Policies** > **Create Policy**.
3. Enter a **Name** for the policy (and a **Description**).
4. Select **Type**: Compute.
5. Select **Personal policy** if you want the policy to be visible only to you. You will not be able to add integrations. If you don't select **Personal policy**, the policy will be available to other members of the account it is in, and you will be able to add integrations.
6. Click **Continue**.

To complete the policy definition, you need to complete all steps of the wizard. You'll select an account, rules, regions, and integrations. Once the policy is created, you may need to edit it to select users who will have access.

## Step 1: Select Account

1. Select the account the notification policy should apply to. Only accounts that are connected to a cloud service provider can create a notification policy.
2. Click **Next**.

## Step 2: Select Resources

1. Select the resources to include in your policy:
   * **All Resources** in the account will be monitored. Any resources that are added in the future will also be monitored.
   * **Rule-Based Resources** defines criteria for monitoring in a <i>condition</i> and a <i>condition set</i>. Any new resources added to the account that match the defined criteria will automatically be included in the monitoring.

     <details>
      <summary markdown="span">More about conditions and condition sets</summary>

     * A <i>Condition Set</i> is a group of one or more conditions. When there are multiple condition sets, they relate to each other with an <i>OR</i> operation.
     * A <i>Condition</i> is a rule within a condition set. Multiple conditions within a condition set, relate to each other with an AND operation.

       <img width="583" alt="eventpolicy-createcompute-1" src="https://github.com/user-attachments/assets/0f6692fa-d0dd-4257-927f-120a2d4d3685">
       
       Each condition contains:
        - Identifier: the resource type to be monitored, such as:
          - Name
          - ID
          - Region
          - AMI
          - Tag
          - Load Balancer
          - Availability Zone
          - Security Group
        - Operator: The criterion for matching a search, such as:
          - Is
          - Is not
          - Contains
          - Does Not Contain
          - Begins with
          - Ends with
        - Value: The string to be matched, such as a:
          - Phrase
          - Word
          - Part of a word
  
    </details>

   * **Individual Resources** are the only resources that will be monitored for notifications. Any new resources added to the account in the future will not be included unless you edit the policy and add them to the monitoring list.
     <details>
      <summary markdown="span">View image</summary>

     <img alt="eventpolicy-createcompute-2" src="https://github.com/user-attachments/assets/cbd6966b-c849-4d29-841a-45e25e080d2c">
     
    </details>
     
2. Click **Next**.

## Step 3: Select Events

1. Select the types of events to receive notifications about.
   
      <details>
      <summary markdown="span">View image</summary>

      <img width="650" alt="eventpolicy-createcompute-3" src="https://github.com/user-attachments/assets/7f6c5803-dd33-437f-8c1a-c8cdbe5f091b">
     
    </details>

2. If you want to configure integrations, click **Next (Optional)**. Otherwise, click **Create Policy Now**.

## Step 4: Select Integrations (Optional)

If you (as an admin user) are configuring a policy at the account level, you can select the integrations. The integrations decide how the notifications are delivered.

<details>
      <summary markdown="span">View image</summary>

  <img width="420" alt="eventpolicy-createcompute-4" src="https://github.com/user-attachments/assets/8b7d1639-cfc3-4e57-9208-73f5ce2b5bde">
     
   </details>

You can choose from these integrations:

- External Email to add email addresses that will receive notifications.
- Webhook to add webhooks to applications.
- SNS to add an SNS topic ARN to receive notifications in AWS.
- Slack to add the webhook for a Slack channel. To define the Channel, [create a webhook URL](https://spinnakerteam.slack.com/apps/A0F7XDUAZ-incoming-webhooks).

These attributes are sent as part of the JSON message via Webhook, SNS, or Slack:
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

Once you (an admin user) have created an account-level policy, only you are registered to the policy. You can edit the policy and select Spot users to receive notifications.
