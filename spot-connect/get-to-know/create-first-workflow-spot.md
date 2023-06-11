# Create your First Workflow - Spot Integration

With Spot Connect, you can automatically execute a workflow with actionable results, including Slack notifications, approval policies, and Elastigroup-specific actions like scale up, scale-down, delete a group, and more.

The following procedure is an example of an automatic scale-down action on a budgeted Elastigroup.  

## Create a Budget for an Elastigroup

Create a budgeted alert in Elastigroup for the automatic scale-down.

1. In the left main menu, click **Elastigroup** and click **Budgets**.
2. Click an Elastigroup ID to set a budget.

<img src="/spot-connect/_media/create-wkflw-spot-elastigroup-2.png" width="500" height="160" />

3. Set the threshold.  

<img src="/spot-connect/_media/create-wkflw-spot-elastigroup-3.png" width="350" height="200" />

4. Set the SNS alert type.  

<img src="/spot-connect/_media/create-wkflw-spot-elastigroup-4.png" />

## Configure the Integrations

Adding a Spot Programmatic Access Token is required to authenticate and execute Spot Operations in a workflow.  

1. In the left main menu, click **Connect** and **Integrations**.
2. Under Cloud Services, click **Spot by Netapp**.  
3. Click **Add Authorization**.

<img src="/spot-connect/_media/create-wrkflw-spot-2.png" />  

4. Provide an alias for the Spot Token.
5. Enter your Spot Programmatic Access Token. If a Programmatic token is unavailable, you can [create a personal token](https://docs.spot.io/administration/api/create-api-token), but a Programmatic Access Token is recommended.  
6. Click **Add Authorization**.

### Slack

The Slack integration enables you to send notifications and messages from a workflow to a specific Slack Channel and manage workflow approvals.

1. In the left main menu, click **Connect and Integrations**.
2. Under Integrations, click **Slack**.  
3. In the top right, click **Add integration**.

<img src="/spot-connect/_media/create-wrkflw-spot-3.png" />

4. Enter an alias for the Slack Workspace.
5. Click **Add to Slack**.

<img src="/spot-connect/_media/create-wrkflw-spot-7.png" width="400" height="500" />

6. In the top right corner, verify that you selected the correct workspace and click **Submit**.  

_If you do not have permission to access the Slack Workspace, you can request to install it, which is sent to the App Manager for approval_.

#### Enable a Slack Channel for Selection

1. In the Slack App, right-click the channel and select **View Channel Details**.
2. Click the Integrations tab and click **Add a Workflow**.  
4. Search for and add the Spot Connect by Netapp app.
5. Verify the app is listed in the integrations.

<img src="/spot-connect/_media/create-wrkflw-spot-4.png" width="500" height="500" />

### API Key

API keys are unique to a Spot Organization. The webhook requires an API key to trigger a workflow and send the webhook body payload to the workflow.

1. In the left main menu, click **Connect** and **Integrations**. Scroll down to Resources.  
2. Click API keys and click **Add New**.
3. Enter an API Key Name and click **Save**.

## Create the Workflow

Create a workflow using the Spot Elastigroup AWS node.

1. In the left main menu, click **Connect** and **Workflows**.
2. Click **New Workflow**.
3. Enter a suitable workflow name. **Workflow names cannot start with “aws”, “amazon”, or “amz”**.
4. Select the **Generic Webhook** trigger type. This enables you to automatically trigger the workflow from any third-party application that supports webhook notifications.
5. Click **Create Workflow**.

<img src="/spot-connect/_media/create-wrkflw-spot-5.png" />

6. In the left panel, click the settings icon.

<img src="/spot-connect/_media/create-wrkflw-spot-6.png" />

7. In the Description field, enter a workflow description. A workflow description is required to save and run the workflow.

### Configure the Trigger Node

1. Click the Generic Webhook trigger node.

<img src="/spot-connect/_media/create-wrkflw-spot-9.png" />

2. From the Webhook API Key Name dropdown menu, select the API Key created above. The webhook URL and required API Key is provided.

<img src="/spot-connect/_media/create-wrkflw-spot-10.png" />

3. The API key can be added as a Header or Query Parameter, which is embedded in the URL for usage with AWS SNS Topics.

**Note**:
* The workflow cannot be saved with the trigger node configured and requires at least one additional node added.
* Since the Generic Webhook trigger is configured, Spot Connect is unaware of which third-party application sends the webhook payload. Therefore, the Output of the trigger node does not show the JSON Schema of the webhook. However, his can be copied by following the steps listed [here](spot-connect/get-to-know/create-first-workflow-spot?id=workflow-execution-alert-body).

#### Extract the Elastigroup ID from the Webhook JSON Formatted Alert Body

The JSONPath node provides another way to extract information from a node's output. This workflow is used as a placeholder to save the workflow and verify the webhook body payload after automatically executing the workflow with a webhook trigger.

1. Click + on the left panel and click **Core**.
2. Drag and drop the JSONPath node onto the canvas.
3. JSONPath node extracts values from keys in JSON arrays and objects.
4. Manually connect the trigger node with the JSONPath node.
5. Change the name of the node to a descriptive name. For example: Elastigroup_ID.
6. In the center panel, select the JSONPath node in the node. The JSONPath expression is an expression language to filter JSON Data. The JSONPath window opens.  

<img src="/spot-connect/_media/create-wrkflw-spot-11.png" />

7. In the JSON Inputs, select the Trigger node from the dropdown menu.  

<img src="/spot-connect/_media/create-wrkflw-spot-12.png" />

8. In the Previous Step Output field, select **output_json**.
9. In the JSON Path Expression, set the path as **$.Account_ID**. The following output is displayed:  

<img src="/spot-connect/_media/create-wrkflw-spot-13.png" />

This extracts the value from the Account_ID key provided in the webhook body payload.

10. Click **Save Workflow** to save the new workflow version.

## Workflow Execution Alert Body

Set the workflow execution alert body as the output schema for the generic trigger node.

The trigger node output JSON schema is essential for setting values from previous steps in the next nodes in line. The generic webhook trigger node does not provide a JSON schema by default. The output schema can be updated with the alert workflow execution alert body (webhook body).

To update the output schema of the trigger node, complete the following steps:

* Verify the workflow is saved
* Execute the workflow via the third-party application webhook notification. If you know the webhook JSON formatted payload, you can also use Postman while building your workflow.

1. Select **Executions**.
2. Select the workflow.
3. Select the **Alert Body** tab.
4. Click **Use as the output schema**.
5. Open the Workflow builder.
6. Select the generic webhook trigger node.
7. Select the Output tab in the configuration panel.
8. Click **View Outputs**.

<img src="/spot-connect/_media/create-wrkflw-spot-14.png" />

The JSON schema is provided for the webhook body from your third-party application.

9. Delete the JSONPath node. This is not required in this example workflow.
10. Save the new workflow version.

## Get the Friendly Name of Elastigroup using the Spot API

The webhook body payload only provides the Elastigroup ID, but we would like to give the familiar name of Elastigroup in the Slack message. Retrieve the Elastigroup configuration details by using the List Elastigroup API call.

1. Click + on the left panel and click **Spot by Netapp**.
2. Drag and drop the **Spot Elastigroup AWS** node onto the canvas.
3. Manually connect the Generic Webhook trigger node to the new Spot Elastigroup AWS node.
4. In the right panel, click the **Input** tab to configure the Spot Elastigroup AWS node.
5. Select the Spot Instance name (API programmatic token).
6. Select the Spot Account. The Spot Accounts available for selection are based on the Spot token selected in the previous step.
7. Select the Spot Operation and select [List Elastigroup](https://docs.spot.io/api/#operation/elastigroupAwsListElastigroup). The required and optional inputs are displayed.

<img src="/spot-connect/_media/create-wrkflw-spot-15.png" />

8. Click the settings icon above the groupID field and select **Set value from the previous step**.
9. In the groupID field, select **Trigger [trigger_1]**.
10. In the Previous Step Output, select `output`.
11. Click **Configure**.
12. Select the key name from the trigger node JSON Schema.
13. Click **Save Output**.

The value of the Elastigroup_Id will automatically be entered in the groupId field.

<img src="/spot-connect/_media/create-wrkflw-spot-16.png" />

14. Save the new workflow version.

## Send a Notification to a Slack Channel

The following tutorial describes how to receive a notification in a Slack channel that informs that the budgeted Elastigroup has reached the threshold.  

1. Click + on the left panel and click **Core**.
2. Drag and drop the Slack Send Message node onto the canvas.
3. Manually connect the List Elastigroup node to the new Slack Send Message node.
4. Configure the Slack Send Message by completing the following steps:

<img src="/spot-connect/_media/create-wrkflw-spot-17.png" />

a. Select the Slack Instance created above and select the Slack Channel. If your Slack channel does not appear in the dropdown menu, make sure to add the Spot Connect integration to the channel.  
b. Click **+ Add Slack Variables**.

<img src="/spot-connect/_media/create-wrkflw-spot-18.png" />

5. In the Set Slack Variable field, enter the variable name EG-Name.
6. Select the **List Elastigroup node** and `output` in the Previous Step Output field.  
7. Select **Configure**.
8. Select the key name and click **Save Output**.

<img src="/spot-connect/_media/create-wrkflw-spot-19.png" />

9. Click **Save Variable**.  
10. Enter the message in the Message Text Input. Type the variable with double brackets **or** click **Insert variable** and select the created variable.

`Budget threshold reached for {{EG-Name}}`

11. Save the new workflow version.

## Approval Request

Send an approval notification to the slack channel, and if approved, automatically scale down the cluster by a set number of nodes.

1. Click + on the left panel and click **Control Structures**.
2. Drag and drop the Approval node onto the canvas.  
3. Manually connect the Slack Send Message node with the new Approval Node.
4. Manually add the two paths for approval and denial by completing the following steps:  

a. To create one path, drag and drop the Spot Elastigroup AWS onto the canvas.

b. Manually connect the Approval Node with the Spot Elastigroup AWS node

c. Rename the node to “Scale Down Elastigroup.”

d. Use this path for approval.

e. To create the other path, drag and drop the Spot Elastigroup AWS onto the canvas.

f. Manually connect the Approval Node with the Spot Elastigroup AWS node.

### Configure the Approval Node

1. Select the Slack Instance created earlier.
2. Select the Slack Channel. If your Slack channel does not appear in the dropdown menu, make sure to add the Spot Connect integration to the channel.  
3. In the Slack App, right-click the channel and select **View Channel Details**.
4. Select the **Integrations** tab and click **Add apps**.
5. Search for and add the Spot Connect app.
6. Verify the app is listed in the integrations and enter notes to the reviewer.
7. Set the Interval before triggering a time out.
  * For approved, select the node **Spot Elastigroup AWS #2**.  
  * For denied, select the node **Stop #1**.

<img src="/spot-connect/_media/create-wrkflw-spot-20.png" width="400" height="800" />

## Scale Down the Elastigroup Cluster  

If you approved the flow in Slack, configure the scale down of the Elastigroup that reached the budget threshold.

### Configure the Scale Down Elastigroup Node

1. Select the **Spot Instance name** (API programmatic token).
2. Select the **Spot Account**. The Spot Accounts available for selection are based on the Spot token selected in the previous step.
3. Select the **Spot Operation**.
4. Select [Scale Down](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsScaleDown). The required and optional inputs are displayed.
5. Click the settings icon above the groupID field and select the Configuration gear.
6. Select **Set value from the previous step**.
7. Select **Trigger [trigger_1]**.
8. In the Previous Step Output field, select `output`.
9. Click **Configure**.  
10. Select **Elastigroup_Id** from the trigger node JSON Schema.
11. Click **Save Output**. The value of the Elastigroup_Id will be automatically entered in the groupId field.
12. In the adjustment field, set the number of nodes by which you want to scale the Elastigroup.

<img src="/spot-connect/_media/create-wrkflw-spot-26.png" />

13. Click **Save Workflow** to save the new workflow version.  

## Run the Workflow using Webhook

Open your API platform. The following procedure is an example that uses Postman. You can use any other third-party application that supports webhook notifications.

### Configure Postman

1. Log in to Postman and create a new HTTP Request.  
2. Select the Generic webhook trigger node.
3. Copy the Workflow Webhook URL
4. In Postman, paste the webhook URL in the request URL.
5. Select the Generic webhook trigger node and copy the Webhook API Key Value.
6. Under the Header tab (in Postman), paste the SPI Key Value in “x-api-key”.
7. Under the Body tab, select raw, and change the format to JSON.
8. Enter the relevant data from your Elastigroup with the following JSON Schema:

```json
{
  "Organization_Name": "SpotOrgname",
  "Account_Name": "SpotAccountname",
  "Account_ID": "act-29ddd123",
  "MTD_Spend": "3.8",
  "Budget": "4.0",
  "Elastigroup_Id": "sig-e26f1234"
}
```

9. Click **Send**.

## Run the Workflow Using the Spot Console

1. Log in to the Spot Console and in the left main menu, click Connect.
2. Select Executions. The page displays all execution history logs for the last 30 days.
3. Select the latest workflow execution with the status In Progress.

<img src="/spot-connect/_media/create-wrkflw-spot-21.png" />

* Each step is shown with the description of the status as completed successfully, failed, or waiting.
* Each step can be selected and reviewed.

<img src="/spot-connect/_media/create-wrkflw-spot-22.png" />

## Approve the Workflow using Slack

1. Open the select Slack Channel to review the slack message and approval.

<img src="/spot-connect/_media/create-wrkflw-spot-27.png" />

2. Click **Approve** for the workflow to continue with scaling down the identified Elastigroup.

## View Executions

You can view the executions you created in the Execution Detail page after you have successfully run your workflow.  

In the left main menu, click **Connect** and **Executions**. This page gives a general overview of an execution. You can review each step individually by clicking on the step.

<img src="/spot-connect/_media/create-wrkflw-spot-23.png" />

Click a step ID to view the details of that step. You can view the input and output information by clicking the relevant tab.

<img src="/spot-connect/_media/create-wrkflw-spot-24.png" />

<img src="/spot-connect/_media/create-wrkflw-spot-25.png" />

Learn how to [create your first workflow with AWS](spot-connect/get-to-know/create-first-workflow-aws).
