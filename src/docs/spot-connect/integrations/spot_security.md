# Spot Security Webhook 

Webhook integration in a Spot Connect workflow lets you trigger an execution of a workflow after validating the webhook input. When creating a workflow, Spot Connect provides a Spot Security webhook trigger node that can be invoked by any Spot Security application once a new alert is generated to automatically execute the workflow. 

## How to Create a Spot Security Webhook  

To automatically execute a Spot Connect workflow with a Security webhook event, follow the steps below:  

### In Spot Connect 

1. Create an API Key if you do not already have a Spot Connect API Key. In the left main menu, click **Connect** and click **Settings**. 
2. Click **Resources** and then **API Keys**. 
3. Click **+ Add New** and create an API key.  
4. In the left menu, click the **Workflows** page to create a new workflow with the proper trigger type and select **New Workflow**. 
5. Enter a name for the workflow. 
6. Select **Spot Security** trigger type. 
7. Click **Create Workflow**. 
8. In the center panel of the workflow builder, click the Spot Security trigger node to open the right panel. Under Webhook API Key Name, select an API Key you created earlier. Compose your workflow and save it. 
9. In the workflow builder, you can copy the following values from the workflow builder: 

<img width="807" alt="spot-security-1" src="https://github.com/spotinst/help/assets/106514736/eb7301ea-318f-4708-82ef-b1eda3df6d34">

* Webhook API Key Value 
* Workflow Webhook URL 

After configuring the webhook you can integrate with tools (Slack and Jira) and get notifications. For example:  

* [How to configure Slack here](spot-connect/integrations/slack)
* Send Slack Message  

## Integrate Spot Security 

To integrate threats with Spot Connect to get alerted on Jira or Slack, you can follow the information here. 

## View Execution Workflow 

The workflow execution is listed on the Spot Connect Executions page. You can view which alerts have been sent and which workflows have been executed. 

<img width="833" alt="spot-security-2" src="https://github.com/spotinst/help/assets/106514736/2e2c760c-1462-4ec2-a462-4dd5a359c710">
