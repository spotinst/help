# Generic Webhook

Webhooks are automated messages sent from applications when an issue occurs. They have a message, or payload, and are sent to a unique URL. They are a simple mechanism and nearly every service can integrate with Spot Connect by using webhooks.

Webhook integration in a Spot Connect workflow lets you trigger an execution of a workflow after validating the webhook input. When creating a workflow, Spot Connect provides a generic webhook trigger node that can be invoked by any external application to automatically execute the workflow.

## Integration Actions

You can use this action in the Spot Connect workflow builder as part of your workflow.

* [Generic Webhook Trigger](spot-connect/integrations/webhook?id=generic-webhook-trigger)

## Generic Webhook Trigger

To automatically execute a Spot Connect workflow with a Generic Webhook event, complete the following steps to set up a webhook integration between Spot Connect and the third-party application.

### Configure in Spot Connect

If you do not already have a Spot Connect API Key, create one by completing the following steps:  

1. In the left main menu, click **Connect** and click **Settings**.
2. Scroll down and under Resources, click **API Keys**.  
3. Create an API Key and click **Save**.

#### Create a New Workflow

1. In the left main menu, click **Connect** and click **Workflows**.  
2. Click **New Workflow** and enter a name for the workflow.
3. Scroll down and select **Generic Webhook**.
4. Click **Create Workflow**.  

<img src="/spot-connect/_media/general-webhook-integration-1.png" />

5. In the center panel of the workflow builder, click the Generic Webhook trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier.  
6. Compose your workflow and save it.

In the workflow builder, click the copy icon in each of the fields Webhook API Key Value and the Workflow Webhook URL to save the values. You can paste and save them into your text editor. When you configure the third-party application, use those saved values.

<img src="/spot-connect/_media/general-webhook-integration-2.png" />  

### Connect to a Third-party Application

To trigger the execution of the Spot Connect workflow you created, a third-party system needs to send a POST request to a specific webhook URL, with an authorized API key included in the request header x-api-key. You can use Postman to test this.  

1. Log in to Postman.
2. Create a new POST request using Workflow Webhook URL value saved from Spot Connect.
3. Add a custom header.
    * Key: x-api-key.
    * Value: Webhook API Key Value saved from Spot Connect.
4. Enter a JSON string as the request Body.
5. Send the request.

You can find the workflow execution listed in the Spot Connect Executions page.

#### Action Example

Create a webhook request from Postman to trigger a workflow execution in Spot Connect.

<img src="/spot-connect/_media/general-webhook-integration-3.png" />   

The workflow execution from the webhook request.

<img src="/spot-connect/_media/general-webhook-integration-4.png" />   
