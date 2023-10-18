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

![datadog-1](https://github.com/spotinst/help/assets/106514736/a8c627d5-635d-4436-89cc-059b0750d122)

5. Select **Access** and then **API Keys**.

![datadog-2](https://github.com/spotinst/help/assets/106514736/a6acfc61-7fe4-4df6-95c3-1aa4b29d034b)

6. Click **+New Key**. 
7. Provide a new name for the API Key and click **Create Key**. 
8. Copy the API Key value and paste it into the Datadog API Key field in Spot Connect. 
9. Select **Access** and then **Application Keys**.

![datadog-3](https://github.com/spotinst/help/assets/106514736/2fd299e1-d818-41f9-ba0a-456b26d12772)

10. Click **+New Key**. 
11. Enter a new name for Application Key field and click **Create Key**. 
12. Copy the Application Key value and paste into the Datadog Application Key field in Spot Connect.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Datadog Alert Trigger](spot-connect/integrations/datadog?id=datadog-alert-trigger) 
* [Datadog Get API Test Results](spot-connect/integrations/datadog?id=datadog-get-api-test-results) 
* [Datadog Search Monitors](spot-connect/integrations/datadog?id=datadog-search-monitors)

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
 
![datadog-4](https://github.com/spotinst/help/assets/106514736/3274b5f9-f5d2-4566-804e-63447994fe8c)

7. Under the Webhook API Key Name, select an API Key you created earlier. 
8. Compose your workflow and save it.   

#### In Datadog 

1. Click **Integrations** and then click the **Integration** tab. 

![datadog-5](https://github.com/spotinst/help/assets/106514736/3a847ecb-d0bb-4088-96ef-112ee8cd153b)

2. In the search bar, search and select **Webhooks**.  
3. Click **+ New** to create a new Webhook.

![datadog-6](https://github.com/spotinst/help/assets/106514736/ba9f9b99-7a32-411a-a664-a3916466a6c7)

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

5. Replace < Spot-Connect-api-key >. 
6. Choose one of the Webhook API Key Names from the dropdown menu in the Spot Connect Workflow panel, and the corresponding Webhook API Key Value will appear.

**Note**: If no options are available for the Webhook API Key Name, click **Settings**. Under the Integrations tab, click **API Keys** to create a New API Key.   

7. Copy the Webhook API Key Value and replace < Spot-Connect-api-key > in the header. 
8. Click **Save** to complete Webhook creation.  

![datadog-7](https://github.com/spotinst/help/assets/106514736/50acc75b-59cf-43f1-90f6-ffad5fc0a112)

Below is an example monitor created in Datadog that sends notifications to the selected Webhook.  

![datadog-8](https://github.com/spotinst/help/assets/106514736/e8fe529d-4e18-421b-bb59-80500ae5f31d)

The page below shows that the webhook triggered the Spot Connect workflow.  

![datadog-9](https://github.com/spotinst/help/assets/106514736/60203b74-318b-42d0-92aa-64d0f39534ae)

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

![datadog-10](https://github.com/spotinst/help/assets/106514736/3a411605-07d1-4937-83ef-1d4d97f895f2)

3. Save and execute the workflow.

![datadog-11](https://github.com/spotinst/help/assets/106514736/273b2306-4d59-4fef-b380-9bc1ec83b532)

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

![datadog-12](https://github.com/spotinst/help/assets/106514736/83270494-5690-468e-8ddb-95479a5eb757)

5. Enter Optional inputs such as Page Index, Monitors Per Page, Sort Index for further filtering. 
6. Save and execute the workflow. 

![datadog-13](https://github.com/spotinst/help/assets/106514736/7e58c546-d070-4acb-bab1-5059e7b6bbe8)


