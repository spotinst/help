# Datadog

Use the Datadog integration to ingest alerts raised by the monitoring system and respond to them automatically. 

Datadog gives you the ability to create monitors that actively check metrics, integration availability, network endpoints, and more. 

The Spot Connect Datadog integration provides you with the list of available monitors and selects the monitor to trigger a workflow when it goes into the state of Alert. 

Datadog in a Spot Connect workflow enables you to: 

* Trigger a workflow in Spot Connect, when a specific DataDog monitor goes into the state of Alert. 
* Retrieve data from Datadog Monitors based on a search query. 
* Return the test result from all the synthetic tests. 

## Configure Datadog in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Datadog**. 
3. Configure a new integration instance with the information below.

Details needed to set up a Datadog instance in Spot Connect: 

|       Parameter               |                     Description                |      Required  |   |
|-------------------------------|:----------------------------------------------:|:--------------:|---|
|      Integration Alias        |     A name for the integration instance        |     True       |   |
|      Datadog API Key          |     API key for your Datadog instance          |     True       |   |
|      Datadog Application Key  |     Application key for your Datadog instance  |     True       |   |

Follow these steps in your Datadog account to obtain the desired parameter values to enter in Spot Connect. 
1. Log in to your Datadog account.  
2. In your Datadog account, click **Organization Settings**.  
3. Click your username in the bottom left corner. 
4. Select **Organization Settings**.

![datadog-1](https://github.com/spotinst/help/assets/106514736/0a420921-9639-4e2f-a01e-cfef015c5415)

5. Select **Access** and then **API Keys**.

![datadog-2](https://github.com/spotinst/help/assets/106514736/4f7a6e26-b6b9-4b34-8db6-d5ff4ede0a23)

6. Click **+New Key**. 
7. Provide a new name for the API Key and click **Create Key**. 
8. Copy the API Key value and paste it into the Datadog API Key field in Spot Connect. 
9. Select **Access** and then **Application Keys**.

![datadog-3](https://github.com/spotinst/help/assets/106514736/abf5f792-9c46-48fc-ba20-4c503235cf59)

10. Click **+New Key**. 
11. Enter a new name for Application Key field and click **Create Key**. 
12. Copy the Application Key value and paste into the Datadog Application Key field in Spot Connect.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* Datadog Alert Trigger 
* Datadog Get API Test Results 
* Datadog Search Monitors

### Datadog Alert Trigger 

To execute a Spot Connect workflow with a Datadog alert, complete the following steps to set up a webhook integration between Spot Connect and Datadog. 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, first create one by completing the following steps:  

1. In the left main menu, click **Connect** and click **Settings**.  
2. Click **Resources** and then click **API Keys**. 
3. Click the **Workflows** page to create a new workflow with a proper trigger type. 
4. On the **Workflows** page, select **New Workflow** and enter a name for the workflow. 
5. Click Datadog and open the workflow builder. 
6. In the workflow builder, click the Datadog trigger node to open the right panel.
 
![datadog-4](https://github.com/spotinst/help/assets/106514736/578161c0-036d-4442-bb80-3127c7806254)

7. Under the Webhook API Key Name, select an API Key you created earlier. 
8. Compose your workflow and save it.   

#### In Datadog 

1. Click **Integrations** and then click the **Integration** tab. 

![datadog-5](https://github.com/spotinst/help/assets/106514736/ad5d0901-0a16-4db2-8c2d-d007d47ca68e)

2. In the search bar, search and select **Webhooks**.  
3. Click **+ New** to create a new Webhook.

![datadog-6](https://github.com/spotinst/help/assets/106514736/e16b500e-94f2-4024-ba3d-ffb670a1f543)

4. Complete the New Webhook interface with the following information: 

* Enter a Datadog Webhook Name. 
* Copy the Workflow Webhook URL from the Spot Connect Workflow as the URL of the New Webhook. 
* Add "alert_id": "$ALERT_ID" in the JSON object for Payload. Optionally, add or remove any other fields. 
* Mark the Custom Headers box. 
* Copy the JSON header information below and paste it into the Custom Header field:

```
{
 "x-api-key": "<Spot-Connect-api-key>",
 "Content-Type": "application/json"
}
```

5. Replace <Spot-Connect-api-key>. 
6. Choose one of the Webhook API Key Names from the dropdown menu in the Spot Connect Workflow panel, and the corresponding Webhook API Key Value will appear.

**Note**: If no options are available for the Webhook API Key Name, click Settings. Under the Integrations tab, click API Keys to create a New API Key.   

7. Copy the Webhook API Key Value and replace <Spot-Connect-api-key> in the header. 
8. Click **Save** to complete Webhook creation.  

![datadog-7](https://github.com/spotinst/help/assets/106514736/efb4c4bc-4c06-4e0b-9acb-3de2557f38a9)

Below is an example monitor created in Datadog that sends notifications to the selected Webhook.  

![datadog-8](https://github.com/spotinst/help/assets/106514736/629bc940-3c4d-4d93-9bc3-3a78cf8fd265)

The page below shows that the webhook triggered the Spot Connect workflow.  

![datadog-9](https://github.com/spotinst/help/assets/106514736/11da63ea-d2a9-4540-8361-d9f788ed47e3)

### Datadog Get API Test Results 

Use the action to get the last 50 test results summaries for all Synthetic API tests. 

#### Input

|       Parameter        |                                Description                            |      Required  |   |
|------------------------|:---------------------------------------------------------------------:|:--------------:|---|
|      Datadog Instance  |     Select a Datadog integration instance configured in Spot Connect  |     True       |   |
|      Start Timestamp   |     Date-time from which to start querying results                    |     False      |   |
|      End Timestamp     |     Date-time up to which to query results                            |     False      |   |

#### Output

|       Parameter  |       Type  |                   Description               |   |
|------------------|:-----------:|:-------------------------------------------:|---|
|      result      |     Object  |     A list of test result objects in JSON   |   |

#### Action Example 

1. From the workflow builder in the left panel, drag and drop the Datadog Get API Test Results action node onto the workflow builder. 
2. Click the action node and select a Datadog integration instance. 

![datadog-10](https://github.com/spotinst/help/assets/106514736/178cc32b-7ca2-4315-b05a-87cd147375d6)

3. Save and execute the workflow.

![datadog-11](https://github.com/spotinst/help/assets/106514736/b2efd3b1-1451-460e-8c67-76ce3f714e3d)

### Datadog Search Monitors 

Perform a search query and return matching monitors. 

#### Input 

|       Parameter Name    |                                                                                   Description                                                                               |      Required  |   |
|-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Datadog Instance   |     Select a Datadog integration instance configured in Spot Connect                                                                                                        |     True       |   |
|      Query              |     The query to be executed. Query documentation: https://docs.datadoghq.com/monitors/manage_monitor/#find-the-monitors                                                    |     True       |   |
|      Page Index         |     Page to start paginating from                                                                                                                                           |     False      |   |
|      Monitors Per Page  |     Number of monitors to return per page                                                                                                                                   |     False      |   |
|      Sort Order         |     String for sort order, composed of field and sort order separate by a comma, e.g. name,asc. Supported sort directions: asc, desc. Supported fields: name, status, tags  |     False      |   |

#### Output

|       Parameter Name  |       Type  |              Description         |   |
|-----------------------|:-----------:|:--------------------------------:|---|
|      result           |     Object  |     A list of Monitors in Json.  |   |

#### Action Example 

1. From the workflow builder in the left panel, drag and drop the Datadog Search Monitors action node onto the workflow builder. 
2. Click the action node. 
3. Select a Datadog integration instance. 
4. Enter a datadog monitor search query. View the [syntax](https://docs.datadoghq.com/monitors/manage/search/). 

![datadog-12](https://github.com/spotinst/help/assets/106514736/59de8608-1ceb-4851-8ff1-f2c31c8a754e)


