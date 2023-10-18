# AWS SNS Webhook 

Webhooks are automated messages sent from applications when something happens. They have a message, or payload, and are sent to a unique URL. 

SNS webhook accepts requests and executes a Spot Connect workflow corresponding to the configured webhook URL. 

After configuring an SNS with Spot Connect, the SNS sends a webhook call to Spot Connect for every notification that is received. After authorization, the workflow will be triggered.  

SNS Webhook integration in a Spot Connect workflow enables you to: 

* Trigger execution of a workflow after validating the webhook input. 

## Integration Actions 

You can use this action in the Spot Connect workflow builder as part of your workflow. 

* [Amazon SNS Webhook Trigger](spot-connect/integrations/sns?id=amazon-sns-webhook-trigger) 

### Amazon SNS Webhook Trigger 

To automatically execute a Spot Connect workflow with an SNS webhook event, complete the following steps to set up a webhook integration between Spot Connect and the third-party application. 

#### In Spot Connect 

Create a Spot Connect API Key if you do not already have one. Complete the following steps:  

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Resources tab, select **API Keys** and click **+ Add New**.  
3. Create an API Key and click **Save**.  

Create a new workflow with the proper trigger type. Complete the following steps:  

1. In the Spot Connect menu, click **Workflows** and click **New Workflow**.  
2. Enter a name for the workflow and select **Amazon SNS** trigger type.  
3. Open the workflow builder. 

In the center panel of the workflow builder, click the Amazon SNS trigger node to open the right panel. Under Webhook API Key Name, select an API Key you created earlier. Create your workflow and save it. 

In the workflow builder, click the Amazon SNS trigger node to save the following values from the right panel: 

* Webhook API Key Value 
* Workflow Webhook URL

![amzn-sns-1](https://github.com/spotinst/help/assets/106514736/48d4a2d8-a8cf-4a19-99c6-83d0b84e1824)

#### In the AWS SNS Console 

To trigger an execution of the Spot Connect workflow you have just created, AWS SNS needs to send a POST request to a specific webhook URL with an authorized API key included in the request header. 

Complete the following steps: 

1. Log in to the AWS Console. 
2. Click **Simple Notification Service** and click **Topics**. 
3. Select a topic for the Webhook to be configured under and click **Create Subscription**. 
4. Select Protocol as **HTTPS**. 
5. Compose the endpoint URL <webhook-url>?x-api-key=<key-value>, whereas: 
   * <webhook-url> is Workflow Webhook URL copied from the Spot Connect workflow 
   * <key-value> is Webhook API Key Value from the workflow.   
6. Copy and paste the full endpoint URL from step 5 into the Endpoint field.

![amzn-sns-2](https://github.com/spotinst/help/assets/106514736/eb8e2f71-b0a4-4c9f-9f22-0004dbcd7806)

7. Click **Create Subscription**.
8. When the subscription is created, Spot Connect receives a confirmation call, and is automatically confirmed. (The confirmation may take a few seconds). 
 
![amzn-sns-3](https://github.com/spotinst/help/assets/106514736/2cf37794-a5ae-410d-9e05-3edb384e1820) 

9. To test a connection with Spot Connect, click **Publish message**. Add a subject and message body. Click **Publish message**.  

#### Action Confirmation 

In the Spot Connect menu, click the Executions page. You can see a confirmation that the workflow was executed from the webhook request.  

![amzn-sns-4](https://github.com/spotinst/help/assets/106514736/2b5ad042-61e3-4d4d-b08d-e621c9f826df)
  

 
 

 

