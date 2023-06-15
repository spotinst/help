# PagerDuty

The PagerDuty integration standardizes and speeds up the resolution of various cloud alerts. PagerDuty aggregates data from myriad monitoring tools and creates actionable insights in the form of incidents. You can tap into the real-time PagerDuty intel with the workflow automation features of Spot Connect to improve full-stack visibility and accelerated incident response.  zzz

The integration between Spot Connect and PagerDuty enables you to:

* Ingest incidents from PagerDuty that are collected from various monitoring tools and grouped into actionable insights.
* Leverage automated workflows in Spot Connect and create incident response best practices to reduce MTTR.
* Access hundreds of Spot Connect’s third-party integration actions to coordinate response across multiple cloud infrastructure functions such as AWS, GCP, and Azure.

## Configure PagerDuty in Spot Connect  

1. In the left main menu, click Connect and click Settings.
2. Under the Integrations tab, select PagerDuty.  
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

* PagerDuty Create Incident
* PagerDuty Resolve Incident
* PagerDuty Webhook Trigger

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

Parameter | Description | Required
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


#### Output

Parameter | Description | Required
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



<img src="/spot-connect/_media/pagerduty-5.png" />

<img src="/spot-connect/_media/pagerduty-6.png" />
