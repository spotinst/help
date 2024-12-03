# AWS Health Trigger

Webhooks are automated messages sent from applications when some alerts and notifications happen. They have a message, or payload, and are sent to a unique URL.

AWS Health provides ongoing visibility into your resource performance and the availability of your AWS services. The AWS Health delivers alerts and notifications triggered by changes in the health of AWS resources.

## Prerequisites
Set up an [API key](spot-connect/integrations/apikeys).

## Create a Workflow Using AWS Health Trigger Node

1. In the Spot console, select **Connect** > **Workflows**.  
2. Click **New Workflow** and enter a name for the workflow.
3. Select **AWS Health Trigger** > **Create Workflow**.

   <details>
   <summary markdown="span">View image</summary>
   <img width=900 src="/spot-connect/_media/general-webhook-integration-1.png" />

   </details>

4. In the center panel of the workflow builder, click the AWS Health trigger node to open the right panel.
5. In the **Webhook API Key Name**, select the API key you created earlier.  
6. Compose your workflow and save it.
7. In the workflow builder, copy the **Webhook API Key Value** and the **Workflow Webhook URL**. When you configure the third-party application, use those saved values.

   <details>
   <summary markdown="span">View image</summary>
    <img width="700" src="https://github.com/user-attachments/assets/94c4e7be-f3f6-42ba-8e5a-5ae1a2420ff2">

   </details>

## Create an Amazon EventBridge API Destination

1. [Create an EventBridge rule for AWS Health](https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html#creating-event-bridge-events-rule-for-aws-health).
2. On the Define rule detail page, select:
    * **Enable the rule to run on the selected event bus**
    * **Rule type**: <i>Rule with an event pattern</i>
3. On the Build event pattern page, select:
    * **Event type**: <i>All Events</i>
4. On the Select target(s) page, select:
    * **Target type**: <i>EventBridge API destination</i>
    * **PI destination**: select an existing API destination or create a new one
       * **API destination endpoint**: Workflow Webhook URL copied from Spot Connect AWS Health trigger node
    * **HTTP method**: <i>POST</i>
    * **Connection type**: select an existing connection or create a new one
       * **Destination type**: <i>Other</i>
       * **Authorization type**: <i>API Key</i>
          * **API key name**: <i>x-api-key</i>
          * **Value**: copy from Spot Connect AWS Health trigger node Webhook API Key Value
    * **Execution role**: Create a new role for this specific resource and keep the default role name
  5. Review settings and create the rule.

## Worfklow Execution

The Spot Connect AWS Health workflow is triggered when an EventBridge event for Health occurs.

You can view the workflow executions in the Spot console > **Connect** > **Executions**.
