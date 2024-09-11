# Create an Ocean CD Policy

You can create notifications for Ocean CD.

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Go to **Notification Center** > **Event Policies** > **Create Policy**.
3. Enter a **Name** for the policy (and a **Description**).
4. Select **Type**: Ocean CD.
5. Select **Personal policy** if you want the policy to be visible only to you. You will not be able to add integrations. If you don't select **Personal policy**, the policy will be available to other members of the account it is in, and you will be able to add integrations.
6. Click **Continue**.

To complete the policy definition, you need to complete all steps of the wizard. You'll select an account, rules, regions, and integrations. Once the policy is created, you may need to edit it to select users who will have access.

## Step 1: Select Resources

1. Select resource types for the policy. You can select the types of notifications you want to receive:
   * [Clusters](ocean-cd/tutorials/view-settings/?id=clusters)
   * [Rollouts](ocean-cd/tutorials/view-rollouts/)
   * [Entities](ocean-cd/getting-started/rollout-entities/)
3. Click **Next**.

## Step 2: Select Events

1. Select the types of events to receive notifications about.
2. If you want to configure integrations, click **Next (Optional)**. Otherwise, click **Create Policy Now**.

## Step 3: Add Integrations (Optional)

If you (as an admin user) are configuring a policy at the account level, you can select the integrations. The integrations decide how the notifications are delivered.

<details>
      <summary markdown="span">View image</summary>

  <img width="420" alt="eventpolicy-createcompute-4" src="https://github.com/user-attachments/assets/8b7d1639-cfc3-4e57-9208-73f5ce2b5bde">
     
   </details>

You can choose from these integrations:

- External Email to add email addresses that will receive notifications.
- Webhook to add webhooks to applications.
- Slack to add the webhook for a Slack channel. To define the Channel, [create a webhook URL](https://spinnakerteam.slack.com/apps/A0F7XDUAZ-incoming-webhooks).

These attributes are sent as part of the JSON message via Webhook or Slack:
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
