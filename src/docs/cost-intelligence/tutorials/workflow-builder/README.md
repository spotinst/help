# Workflow Builder
You can create automated workflows in Workflow Builder. Flows are based on data in the Cost Intelligence dashboards.

Here are some examples of types of flows you can create:
* Send scheduled emails
* Generate alerts based on specific conditions
* Update custom datasets

<details>
     <summary markdown="span">View image</summary>

![image](https://github.com/spotinst/help/assets/167069628/b733cc21-b45f-4d0e-aa17-93dbd7961bf3)

   </details>

## Create a Workflow
1. Click Create New Flow.
   <details>
     <summary markdown="span">View image</summary>

    ![image](https://github.com/spotinst/help/assets/167069628/f7736d90-90f8-475f-a4dc-631dd1ce44df)

   </details>
   
3. Add a trigger to the flow by dragging it. All flows require a trigger.
    <details>
     <summary markdown="span">Triggers</summary>
      
    * **Scheduling**: the flow starts according to a set date and time, and can be set to repeat.
    * **Records Added**: the flow runs as soon as new data is received. For example, the flow starts when a new record is added to a data source, or each time a record is added by a data load process.
    * **Records Updated**: the flow starts whenever information changes in an existing dataset or a record is updated by a data load process.
    * **Webhook**: the flow is triggered from an external source using a URL. Selecting this trigger automatically generates a unique URL for the flow you are building. Click **Copy** to use this URL in your external application that triggers the flow. You can require authentication for the URL.
       > **Note**: Once a flow is saved, you cannot update this URL.

      ![image](https://github.com/spotinst/help/assets/167069628/8050da83-1ec1-47ba-94d3-c0a4f61ca6c6)

   </details>

4. You can add conditions if needed.

    <details>
     <summary markdown="span">Conditions</summary>

      Conditions can be added to any trigger to control when the trigger causes the flow to run. For example, you can add a condition to a <i>Records Added trigger</i> to define scenarios that must be met before the trigger runs. Another option is to add a condition to a <i>Scheduling</i> trigger, such as to send an alert if a metric is outside preset bounds. 

      Conditions can also be added to branch options of action components. For example, you can add a condition to the <i>One Record Found</i> branch option of a <i>Search Records</i> component to check the details of the record.

      To add a condition, drag the <i>If</i> condition and drop it below the trigger or action. Define the conditions that need to be met.

      ![image](https://github.com/spotinst/help/assets/167069628/17fcd69e-15f0-4aac-b501-cb70cd6bbc3b)

      Any actions you drag below the condition run when the condition is met. Actions dragged below the Else run when the condition is not met. For example:

      **If**

      * <i>If Field</i> allows you to specify a field that triggers the action.
      * <i>If Metric</i> allows you to specify a metric threshold that triggers the action.

      **And – Or**

     <i>And - Or</i> must be used with an <i>If</i> statement. Drag the <i>And - Or</i> into an existing <i>If</i> condition.
   
   </details>

5. You can add send actions if needed.

    <details>
     <summary markdown="span">Send actions</summary>

     * **Send to Webhook** to send data to an external webhook URL. Enter the URL and click **Add Parameters** to add data or tokens.
     * **Send Email** to send notifications and alerts in email. Enter a comma-delimited list of email addresses along with a subject and a message. The message body can be formatted with any of the standard options provided, including bold, italic, and underline. There are also justification and link options.
     * **Send SMS** to send notifications and alerts in text messages. Enter a mobile phone number and type a message with up to 140 characters. Any attachments you include in your message are sent as links that your recipient can click on to open the attachment in their web browser.
     * **Slack Notification** to send notifications and alerts in Slack. Configure the workspace, notification user, channels to send the notification, and the message:
       * **Workspaces** is the list of configured workspaces that you can send the notification to.
       * **Send Notification** as a Slack bot or a Slack user using Qrvey.
       * **Recipient** includes the list of all channels, users, and groups of the selected workspace that you can send the the message to. The list only includes recipients the bot or user has permissions to send to. You can select more than one recipient.
       * **Message** supports the use of tokens and basic Slack formatting using Markdown.
   
   </details>

4. You can add data actions if needed.

    <details>
     <summary markdown="span">Data actions</summary>

     <i>Record</i> functions are used for uploaded CSV datasets, while <i>Data</i> functions work with connected data sources.
     * **Search Record** to look up data based on the criteria you select. Use the branch options to perform actions based on the number of records found.
       Select the type and name of the dataset to search, then choose the fields and values you want to search for.
  
       ![image](https://github.com/spotinst/help/assets/167069628/f4502ba5-750e-43ad-89ce-14779330cb8a)
       
       Below the search box are branch options where you can place actions depending on the number of results found. You can specify different sets of actions for each of these branch options.
       The <i>Search Record</i> action loops through multiple records found individually. For example, if five records are found, the actions under the Multiple Records Found are performed five times, once for each record.
     * **Update Record** can be done once you have searched and found one or more records in your dataset. It can only be used in Search action branch options with at least one search result.
     * **Delete Record** can be done once you have searched and found one or more records in your dataset. It can only be used in <i>Search</i> action branch options with at least one search result.
     * **Insert Record** to add a new record to an existing dataset.
     * **Submit Data** to send data to a third party system using a URL. It is similar to a <i>form POST</i> in HTML.
     * **Post Data** to send data to a connected data source.
     * **Reload Data** from an existing data connection. It may take a few minutes for the reload to complete, depending on the size of your dataset and the speed of the data connection.
     * **Get Data** to search a connected data source and get results based on the field and value criteria you provided. Then, you can provide different actions for the branch options to handle the cases of one, multiple, or no records found.
     * **Update Token** to update the value of a stored token. You can update tokens by selecting their name and providing a value. To create a new token, click **Add/Manage Tokens**.
   
   </details>

## Sample Flow: Daily SMS

Here is a simple example of an SMS sent once a day for 3 days. It includes the month-to-date AWS cost of all configured AWS accounts.

![image](https://github.com/spotinst/help/assets/167069628/6c49c47f-672a-48ff-a839-3711a8f83b0b)

## Edit an Existing Workflow

To edit an <i>active</i> flow, click **Pause**, then you can make your changes.

## Tokens






## Workflow Activity Log

Every flow keeps a log of all its activities, including any changes made by users and every time the flow is triggered. If you’re not sure how your flow is performing, open the activity log. You can see detailed information about its activities, errors, and events.

To access the log, click **Activity**. You can search and filter the activity log.

Click **Refresh** to get new activity log events.

<details>
     <summary markdown="span">View image</summary>

![image](https://github.com/spotinst/help/assets/167069628/4fef9e64-3011-4325-8765-d5d14812c97e)

   </details>
