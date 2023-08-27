# PagerDuty

The PagerDuty integration standardizes and speeds up the resolution of various cloud alerts. PagerDuty aggregates data from myriad monitoring tools and creates actionable insights in the form of incidents. You can tap into the real-time PagerDuty intel with the workflow automation features of Spot Connect to improve full-stack visibility and accelerated incident response.  

The integration between Spot Connect and PagerDuty enables you to:

* Ingest incidents from PagerDuty that are collected from various monitoring tools and grouped into actionable insights.
* Leverage automated workflows in Spot Connect and create incident response best practices to reduce MTTR.
* Access hundreds of Spot Connect’s third-party integration actions to coordinate response across multiple cloud infrastructure functions such as AWS, GCP, and Azure.

## Configure PagerDuty in Spot Connect  

1. In the left main menu, click **Connect** and click **Settings**.
2. Under the Integrations tab, select **PagerDuty**.  
3. Configure a new integration instance with the information below.

Details needed to set up a PagerDuty instance in Spot Connect:

Parameter | Description | Required
--------- | ----------- | --------
Integration Alias   | A name for the integration instance. | True
PagerDuty API Token | API Token obtained from PagerDuty. | True

Follow these steps in your PagerDuty account to obtain the desired parameter values to enter in Spot Connect.

1. In your PagerDuty account, click **Integrations** and **Developer Tools**.
2. Click **API Access Keys**.
3. Create a new API Key.
4. Copy the API Key value and paste it into the PagerDuty API Token field in Spot Connect.

## Integration Actions

You can add these actions in the Spot Connect workflow builder as part of your workflow.

* [PagerDuty Create Incident](spot-connect/integrations/pagerduty?id=pagerduty-create-incident)
* [PagerDuty Resolve Incident](spot-connect/integrations/pagerduty?id=pagerduty-resolve-incident)
* [PagerDuty Webhook Trigger](spot-connect/integrations/pagerduty?id=pagerduty-webhook-trigger)

### PagerDuty Create Incident

Use the action to create an incident in PagerDuty.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
PagerDuty Instance    | Select a PagerDuty integration instance configured in Spot Connect. | True
Incident Title | Title for PagerDuty Incident to be created by this workflow execution.  | True
PagerDuty Service    | Select a PagerDuty Service. | True
Escalation Policy  | Select a PagerDuty Escalation Policy.  | True
From User    | A valid user associated with the PagerDuty account making the request. | True

#### Output

Parameter | Type | Description
--------- | ----------- | --------
created_at    | String  | The date/time the incident was first triggered.
incident_id | String   | ID of the incident.
title    | String  | A succinct description of the nature, symptoms, cause, or effect of the incident.
incident_number  | Integer  | The number of the incident. This is unique across your account.
status    | String | The current status of the incident.

#### Action Example

1. In the left main menu, click **Connect** and click **Workflows**.
2. Click **New Workflow** and create a new workflow. Enter a name for your workflow and select **PagerDuty**.
3. Click + on the left panel. Scroll down and click **PagerDuty**.  
4. Drag and drop the PagerDuty Create Incident action node onto the workflow builder.
5. Click the action node.
6. Select a PagerDuty integration instance.
7. Enter an incident title.
8. Select a PagerDuty service from the drop-down menu.
9. Select an Escalation Policy from the drop-down menu.
10. Select a user to create the PagerDuty incident.

<img src="/spot-connect/_media/pagerduty-1.png" />  

### PagerDuty Resolve Incident

Use the action to resolve an incident in PagerDuty.

#### Input

Parameter | Description | Required
--------- | ----------- | --------
PagerDuty Instance    | Select a PagerDuty integration instance configured in Spot Connect. | True
PagerDuty Incident Id | ID of PagerDuty incident.   | True
From User    | A valid user associated with the PagerDuty account making the request. | True
Add Note     | Add a note to the incident.  | False

#### Output

Parameter | Type | Description
--------- | ----------- | --------
incident_id | String   | ID of the incident.
title    | String  | A succinct description of the nature, symptoms, cause, or effect of the incident.
incident_number  | Integer  | The number of the incident. This is unique across your account.
status    | String | The current status of the incident.

#### Action Example

1. In the left main menu, click **Connect** and click **Workflows**.
2. Click **New Workflow** and create a new workflow. Enter a name for your workflow and select **PagerDuty**.
3. Click + on the left panel. Scroll down and click **PagerDuty**.
4. Drag and drop the PagerDuty Resolve Incident action node onto the workflow builder.
5. Click the action node.
6. Select a PagerDuty integration instance.
7. Enter a PagerDuty incident ID.
8. Select a user to resolve the PagerDuty incident.
9. Add a note to resolve the incident. (Optional).

<img src="/spot-connect/_media/pagerduty-2.png" />

### PagerDuty Webhook Trigger  

To automatically execute a Spot Connect workflow with a PagerDuty alert in real-time, complete the following steps to set up a webhook integration between Spot Connect and PagerDuty.  

#### Configure in Spot Connect

If you do not already have a Spot Connect API Key, create one by completing the following steps:   

1. In the left main menu, click **Connect** and click **Settings**.  
2. Scroll down and under Resources, click **API Keys**.   
3. Create an [API Key](spot-connect/integrations/apikeys) and click **Save**.

#### Create a New Workflow

1. In the left main menu, click **Connect** and click **Workflows**.  
2. Click **New Workflow** and enter a name for the workflow.
3. Scroll down and select **PagerDuty** trigger type.
4. Click **Create Workflow**.
5. In the center panel of the workflow builder, click the PagerDuty trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier.  
6. Compose your workflow and save it.

In the workflow builder, click the copy icon in each of the fields Webhook API Key Value and the Workflow Webhook URL to save the values. You can paste and save them into your text editor. When you configure the third-party application, use those saved values.

<img src="/spot-connect/_media/pagerduty-3.png" />

#### In PagerDuty

Configure PagerDuty to send a webhook request to Spot Connect when an incident occurs.

1. In your Pager Duty account, click **Services** and **Service Directory**.
2. Select any existing PagerDuty service (e.g. CloudWatch-Memory-Alert) and click **Integrations**.
3. Click **Extensions and Add-Ons** and **Add or Manage extensions**.
4. Click **New Extension**.
5. In Extension Type, select **Generic V2 Webhook**.
6. In the URL field, enter the Workflow Webhook URL value saved from Spot Connect.
7. Custom Headers:
    * Header Name: x-api-key
    * Header Value: enter Webhook API Key Value saved from Spot Connect.
8. Save the extension.

**Action Example**

When a PagerDuty alert is triggered by CloudWatch-Memory-Alert, a Generic Webhook request is sent to Spot Connect’s webhook URL.    

<img src="/spot-connect/_media/pagerduty-4.png" />

The associated workflow execution.

<img src="/spot-connect/_media/pagerduty-5.png" />

<img src="/spot-connect/_media/pagerduty-6.png" />
