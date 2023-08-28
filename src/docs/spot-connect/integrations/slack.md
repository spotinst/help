# Slack

Slack is a very popular communication tool and you can use the Slack integration to send messages and notifications to your Slack team. One of the most common workflow integrations is the connection to the user's communication suite.  

This integration is a path forward for users who want to connect to their Slack workspace with the Spot Connect platform to interact with workflows, get execution statuses, approvals, etc.

The integration between Spot Connect and Slack enables you to:

* Send notification messages from Spot Connect workflows to Slack.
* Manage Spot Connect workflow approvals via direct messages to Slack teams.

## Configure Slack in Spot Connect

1. In the left main menu, click **Connect** and click **Settings**.
2. Under the Integrations tab, select **Slack**.  
3. Configure a new integration instance with the information below.

Details needed to set up a Slack instance in Spot Connect:

Parameter | Description | Required
--------- | ----------- | --------
Integration Alias   | A name for the integration instance. | True

1. Click **Add to Slack**.  
2. You may be prompted to log into your Slack workspace. If not, verify that you are logged in to the Slack workspace that you want to add Spot Connect to.
3. Review the permissions requested by Slack app Spot Connect by NetApp to access your workspace and click **Allow**.
4. If the Slack app can successfully access your workspace, you will be redirected back to the Slack integration settings page in Spot Connect.
5. Login to your Slack client, invite the Spot Connect by NetApp Slack bot user to the Slack channel(s) where you would like to receive messages on.

`/invite @Spot Connect by NetApp`

## Integration Actions

You can add these actions in the Spot Connect workflow builder as part of your workflow.

* [Approval](spot-connect/integrations/slack?id=approval)
* [Slack Add Users](spot-connect/integrations/slack?id=slack-add-users)
* [Slack Archive Channel](spot-connect/integrations/slack?id=slack-archive-channel)
* [Slack Create New Channel](spot-connect/integrations/slack?id=slack-create-new-channel)
* [Slack Send Message](spot-connect/integrations/slack?id=slack-send-message)  

### Approval

Approve or deny any request to continue the execution of a workflow.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Slack Instance   | Select a Slack integration instance configured in Spot Connect. | True
Select Slack Channel to notify   | Select a Slack channel to notify for approval. | True
Notes for Reviewer   | This note will be attached to the Slack message that requests for approval.  | True
Interval before triggering time out   | Specify an interval before the approval request times out. The maximum timeout is 7 days. | True
If approved, continue to the following step.   | Select the next workflow step to execute upon approval. | True
If denied, continue to the following step.   | Select the next workflow step to execute upon denial. | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
Execution Start Time   | String | A string representation of time when the execution started. i.e Wed 12 May 2021 22:52:46.441000
Message Channel ID   | String | The ID of the Slack channel where the message was sent.
Message Timestamp   | String | Timestamp of the Slack message that was sent for approval.
Workflow Name   | String | Name of the workflow associated with the execution.

#### Action Example

<img src="/spot-connect/_media/slack-1.png" />

> **Note**: In addition to selecting the two next steps on the Approval node right panel, you also need to connect the Approval node with the two downstream nodes in the workflow builder.

<img src="/spot-connect/_media/slack-2.png" />

<img src="/spot-connect/_media/slack-3.png" />

## Slack Add Users

Add users to a previously created Slack channel.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Slack Instance   | Select a Slack integration instance configured in Spot Connect. | True
Channel Name   | Name of Slack channel to add users to. | True
Users   | Dropdown list of Slack users to add to the above channel.  | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
message   | String | List of Slack User IDs of the users added to the channel

#### Action Example

<img src="/spot-connect/_media/slack-4.png" />

## Slack Archive Channel

You can archive a specified Slack channel. Archived channels can still be searched but are closed to any new activity.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Slack Instance   | Select a Slack integration instance configured in Spot Connect. | True
Channel Name   | The name of the channel to archive. | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
message   | String | Status of the archive command.

#### Action Example

<img src="/spot-connect/_media/slack-5.png" />

## Slack Create New Channel

Create a new Slack channel.  

> **Note**: The Spot Connect by NetApp Slack bot user is automatically added to any channel created using this action, public or private. This allows the other Slack actions to see the channel.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Slack Instance   | Select a Slack integration instance configured in Spot Connect. | True
Channel Name   | Name of the new channel.  | True
Private   | Make the new channel private.  | False

#### Output

Parameter | Type | Description
--------- | ----------- | --------
channel_info   | Object | Output of the Slack [conversations.create](https://api.slack.com/methods/conversations.create) API call. Channel names may only contain lowercase letters, numbers, hyphens, and underscores, and must not be longer than 80 characters.
channel_url   | String | A URL for the newly created channel.

#### Action Example

<img src="/spot-connect/_media/slack-6.png" />



<img src="/spot-connect/_media/slack-7.png" />

## Slack Send Message

Send Slack messages to a given channel.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
Slack Instance   | Select a Slack integration instance configured in Spot Connect. | True
Slack Channel   | Name of Slack channel where you send a Slack message to  | True
Message Text   | The message to be sent to the channel   | True

#### Output  

There is no output of this action.

#### Action Example

<img src="/spot-connect/_media/slack-8.png" />
