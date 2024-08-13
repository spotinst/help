# Create a Security Policy

You can create notifications for security resources.

1. In the Spot console, click the user icon <img height="14" src="https://docs.spot.io/administration/_media/usericon.png">  > **Settings**.
2. Go to **Notification Center** > **Event Policies** > **Create Policy**.
3. Enter a **Name** for the policy (and a **Description**).
4. Select **Type**: Spot Security.
5. Select **Personal policy** if you want the policy to be visible only to you. You will not be able to add integrations. If you don't select **Personal policy**, the policy will be available to other members of the account it is in, and you will be able to add integrations.
6. Click **Continue**.

To complete the policy definition, you need to complete all steps of the wizard. You'll select an account, rules, regions, and integrations. Once the policy is created, you may need to edit it to select users who will have access.


## Step 1: Select Account

1. Select the account the notification policy should apply to. Only accounts that are connected to a cloud service provider can create a notification policy.
2. Click **Next**.

## Step 2: Select Assets

1. Select the assets to include in your policy.
2. If you selected all the assets, **Future Assets** is enabled by default. This will enable the notifications for the assets which are onboarded later in these accounts.
3. Click **Next**.

## Step 3: Select Security Rules

1. Select the security rules that you want to generate security events from the Rules list. The frequency that the security notifications are sent is based on the severity of the security rules.
2. If you want to configure integrations, click **Next (Optional)**. Otherwise, click **Create Policy Now**.

## Step 4: Select Integrations (Optional)

If you (as an admin user) are configuring a policy at the account level, you can select the integrations. The integrations decide how the notifications are delivered.

You can choose from these integrations:

- External Email to add email addresses that will receive notifications.

  These attributes are sent as part of the CSV attached in the external email:  

   * Security Rule	 
   * Asset Name	 
   * Asset ID	 
   * Asset Type
   * Cloud
   * Cloud Account ID
   * Region

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
