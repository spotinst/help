# Instana

The Instana integration ingests issues or incidents raised by built-in or custom events and responds to them automatically. 

Instana is an Application Performance Management (APM) solution that assists in managing microservices and cloud-native applications. You can create alerts from built-in events which are predefined health signatures based on integrated algorithms, or from custom events which enable you to create issues or incidents based on an individual metric of any given entity. 

Instana Webhook integration in a Spot Connect workflow enables you to trigger a workflow, when a specific Instana Alert goes into the state of ALERT. 

## Integration Actions 

You can use this action in the Spot Connect workflow builder as part of your workflow. 

* [Instana Webhook Trigger](spot-connect/integrations/instana?id=instana-webhook-trigger) 

### Instana Webhook Trigger 

To automatically execute a Spot Connect workflow with an Instana event in real-time, follow the steps here to set up Instana integration between Spot Connect and the third-party application. 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**. 

#### Create Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Instana**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the Instana trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier. 
6. Compose your workflow and save it. 

In the workflow builder, click the **Instana** trigger node to save the following values from right panel: 

* **Webhook API Key Value** 
* **Workflow Webhook URL** 

<img width="958" alt="instana-1" src="https://github.com/spotinst/help/assets/106514736/61f4ced9-f010-4a17-90cf-8849e2d1c80b">

#### In Instana 

Complete the following steps: 

1. Log in to Instana. 
2. Click **Settings** and **Alert Channels**. 
3. Click **Generic Webhook**. 

<img width="1427" alt="instana-2" src="https://github.com/spotinst/help/assets/106514736/ab713305-d9a3-4f35-9fe2-aed20b29ca7e">

#### Create Generic Webhook Alert Channel  

1. Enter a name for the Webhook alerts channel e.g. "spot-connect". 
2. Copy the Workflow Webhook URL from the Spot Connect workflow created and paste it into the Webhook URL. 
3. Under Custom HTTP Request Headers, select **Add Header**. 
4. Add `x-api-key` as Key. 
5. Copy the Webhook API Key Value from the workflow page and paste it into the Value field of the x-api-key. 
6. Click **Create**. 

<img width="1431" alt="instana-3" src="https://github.com/spotinst/help/assets/106514736/34ad492f-e6ef-4447-8aed-52695530a985">

7. Click **Settings** and then **Alerts**. 
8. Click **New Alert**.  

#### Create New Alert 

1. Enter a name for the Alert Configuration. 
2. Under Events, select **Send alerts on Event(s)** or **Send alerts by Event Type(s)**. 
3. If Alert on Events is selected, click **Add Events** and select all relevant events. 
4. Under Alerting, click **Add Alert Channels** and select the Alert Channel created in the previous step. 
5. Click **Create**.  
6. The Workflow is immediately executed when a specific Instana Alert goes into the state of ALERT. 

#### Action Example 

<img width="1105" alt="instana-4" src="https://github.com/spotinst/help/assets/106514736/34bbd57c-8c1f-4d52-beb3-b94979a45c98">


 
