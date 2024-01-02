# Humio

The integration between Humio and Spot Connect provides users with the ability to automate and streamline cloud log management. 

Humio is powerful and extremely useful for system administrators. It provides a fast, flexible platform for logs and server metrics. With Humio Cloud, your log entries and other metrics are sent to your own private, secure repository. After that, use the Humio interface to analyze your data and to create alerts to let you know when events occur, or parameters are exceeded. 

The alerts can be later ingested by Spot Connect with this integration and relevant information can be retrieved actively in the middle of any investigation from Spot Connect. 

The integration between Spot Connect and Humio enables you to: 

* Trigger a workflow in Spot Connect, when a specific Humio Alert goes into the state of ALERT. 
* Search logs/metrics stored in Humio. 

## Configure Humio in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Humio**.  
3. Configure a new integration instance with the information below. 

Details needed to set up a Humio instance in Spot Connect: 

|       Parameters        |                        Description                    |      Required  |
|-------------------------|:-----------------------------------------------------:|:--------------:|
|      Integration Alias  |     Alias for Humio Integration Instance              |     True       |
|      Humio URL          |     Humio Cloud URL, e.g. https://cloud.us.humio.com  |     True       |
|      Humio API Token    |     API Token obtained from Humio                     |     True       |

Complete the following steps in your Humio account to obtain the desired parameter values to enter in Spot Connect: 

1. In your Humio account, click **Manage Your Account** and then **Personal API Token**. 
2. Copy the API Token and paste it into the Humio API Token field in Spot Connect. 
3. Copy the Humio URL from the browser’s search bar (e.g. https://cloud.us.humio.com) and paste it into the Humio URL field in Spot Connect.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Humio Search](spot-connect/integrations/humio?id=humio-search)
* [Humio Webhook Trigger](spot-connect/integrations/humio?id=humio-webhook-trigger)

### Humio Search 

Use this action to run a Humio search query in a Humio repository. 

#### Input

|       Parameter Name  |                                                     Description                                                |      Required  |
|-----------------------|:--------------------------------------------------------------------------------------------------------------:|:--------------:|
|      Humio Instance   |     Select a Humio integration instance configured in Spot Connect                                             |     True       |
|      Repository Name  |     Humio repository to search                                                                                 |     True       |
|      Query            |     the actual query. See Query Language for details.                                                          |     True       |
|      Start Time       |     The start date and time. This parameter tells Humio not to return results from before this date and time.  |     True       |
|      End Time         |     The end date and time. This parameter tells Humio not to return results from after this date and time.     |     True       |
|      S3 Bucket        |     S3 bucket to store search result from Humio Query.                                                         |     False      |


#### Output

|       Parameter Name      |       Type   |                               Description                          |
|---------------------------|:------------:|:------------------------------------------------------------------:|
|      result               |     String   |     Query result                                                   |
|      is_result_truncated  |     Boolean  |     Boolean value which denoted if the result is truncated or not  |
|      result_bucket_key    |     String   |     S3 bucket key path of search result                            |
|      s3_bucket            |     String   |     Name of the bucket                                             |

#### Action Example 

From the left panel, drag and drop **Humio Search** action node in the workflow builder and enter the required information in the right input panel. 
 
<img width="968" alt="humio-1" src="https://github.com/spotinst/help/assets/106514736/e56d696f-17c7-4aa0-9c31-48c938de5bfc">

![humio-2](https://github.com/spotinst/help/assets/106514736/cd29f1c5-1a35-4773-9da2-d515e7d236d2)

![humio-3](https://github.com/spotinst/help/assets/106514736/990607cc-d7ef-4361-9f0e-650f41a2d8a3)

### Humio Webhook Trigger 

To execute a Spot Connect workflow with a Humio alert in real-time, complete the following steps to set up a webhook integration between Spot Connect and Humio. 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 
1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**.  

#### Create Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Humio**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the Humio trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier. 
6. Compose your workflow and save it. 

In the workflow builder, click the Humio trigger node to save the following values from the right panel: 
* **Webhook API Key Value** 
* **Workflow Webhook URL** 

![humio-4](https://github.com/spotinst/help/assets/106514736/d1f673ff-754c-4cbb-a50f-1c64c9a510a7)

#### In Humio 

1. Navigate to a Humio repository and click **Alerts**.  
2. Click **Actions** and click **New Action**. 
3. Enter a name and continue. 

![humio-5](https://github.com/spotinst/help/assets/106514736/203166f8-e9ee-4216-8080-048933f3ced8)

4. Select **Action Type** as **Webhook**. 
5. Set **Endpoint URL** to **Workflow Webhook URL** saved from Spot Connect Humio Trigger. 
6. Select **POST** Method. 
7. Enter the following information in the Http Headers fields: 
  * **Header Name**: Content-Type 
  * **Header Value**: application/json 
  * **Header Name**: x-api-key 
  * **Header Value**: add **Webhook API Key value** saved earlier from the trigger node in Spot Connect. 
8. Create the action by clicking on the **Create Action** button. 

![humio-6](https://github.com/spotinst/help/assets/106514736/9868c18e-9f6e-43f0-a463-63b9247fccd8)

9. When the webhook call is made, the workflow is triggered. Click **Test Action** to validate that the workflow was executed.

![humio-7](https://github.com/spotinst/help/assets/106514736/3bd4a717-5576-4335-8e8a-c3af78fa1f91)

![humio-8](https://github.com/spotinst/help/assets/106514736/a63f32a9-43c7-4f44-96d3-c52984f8574b)
