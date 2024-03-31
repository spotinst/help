# Threats

AWS Threat Detection and Response is an advanced security feature offered by Spot Security to safeguard your cloud infrastructure from potential threats and unauthorized activities. By combining event analysis from CloudTrail with Spot's proprietary anomaly detection methods, this feature provides comprehensive protection and maps detected anomalies to the ATT&CK MITRE framework for enhanced threat intelligence. 

To view the Threats feature, in the left main menu in the Spot console, click **Spot Security** and then **Threats**.

There are two main tabs on the Threats page:   

* Overview
* All Threats

## Overview

In the Overview section you can view information for all providers, AWS, and Azure using the tabs at the top. 

### Threats Over Time
A line graph that displays the trend of threat counts over time, enables you to select the view of the overall threat landscape in the range of a day, week or month. 

![threats-a1](https://github.com/spotinst/help/assets/106514736/dfe06d64-4221-4d7a-8923-f216e51fa310)

### Threats by MITRE Tactics
A graph that provides an overview of the total number of threats mapped to each specific MITRE tactic, enables you to understand the distribution of threat tactics within the environment. 

<img width="352" alt="threats-a2" src="https://github.com/spotinst/help/assets/106514736/d2bae1fa-d007-4df1-b8c9-2f1c52320b51">

### Cloud Accounts with Most Threats 
A chart that highlights the cloud accounts with the highest number of detected threats, enables you to focus on specific accounts for targeted security measures.

![threats-a3](https://github.com/spotinst/help/assets/106514736/ec8571df-e026-469c-84f6-2007346fe0cd)

## All Threats

### All Threats Table

The All Threats tab presents a comprehensive table of detected threats divided into separate cloud providers. It provides insights into the nature of threats, their origins, associated tactics and techniques, users involved, and the time of detection. This information enables you to make informed decisions regarding threat mitigation and implement necessary security enhancements. 

![threats-a4](https://github.com/spotinst/help/assets/106514736/6fd17786-d495-44bb-8a29-ed7feeaca730)

The All Threats table includes the following columns:

* **Threat ID**: The unique identifier that enables you to track and reference each detected threat individually, aiding in investigation and incident management.
* **Asset Type**: The service type such as EC2, IAM, etc.
* **Asset ID**: The associated ID of the asset impacted by the detected threat, assisting in scoping the potential impact of the incident within the cloud infrastructure.
* **Cloud Acount Name**: The cloud account that is related to the detected threat.  
* **Tactics and Techniques**: A description of the specific tactics and techniques of threats during the attack or unauthorized activity, mapping them to the ATT&CK MITRE framework for contextual understanding of adversary behaviors.  
* **Detection Time**: The date and time the security system identified suspicious activity, assisting in reducing response time and mitigation.  
* **User**: The user account or tenant linked to the detected threat.    

In addition to the table:

* Active threat tactics and techniques are highlighted in red, and you can filter threats using those tactics and techniques as filters. 
* You can click the filter icon to filter threats based on the asset type. 
* You can choose to accept the risk of certain threats using the Suppress option in the Action menu. Suppressed threats can be viewed by moving the Show Suppressed Threats toggle. 
* By clicking the Threat IDs in the All Threats table, you can access individual threat pages containing all the event records associated with the threat session. 

### Individual Threat Page

The individual threat page displays details of session events such as the event name, event type, asset ID, IP address, region, event time, session ID, and event source, while providing information about the specific threat events. 

You can find the details of a threat by clicking a threat in the All Threats table.

![threats-a5](https://github.com/spotinst/help/assets/106514736/88a793ee-747e-4659-9e7c-e990bbf26423)

Click **Table** or **Details** to view the threat analysis in the form of a table or in a JSON format that displays the event detail record.  

#### Event Detail Record  

The Event Detail Record provides additional context for each event. These records include information such as the time of the event, event source, region, and more. By reviewing these event details, you can gain a deeper understanding of the specific events associated with the threat, aiding in comprehensive threat analysis and response. Click **Next** or **Previous** to move between the event detail records of the session events.

![threats-a6](https://github.com/spotinst/help/assets/106514736/77e54f37-ca42-4c34-bae4-29d255568f13)

## Incident Response 

Spot Security offers two methods to create incident response tickets for detected threats in their ticketing tool: 

* Conditional Workflow 
* On-Demand  

To create them you need to set up a workflow in Spot Connect by completing the following steps:  

Step 1: In the left main menu in the console, select [Spot Connect](https://docs.spot.io/spot-connect/get-to-know/). 

Step 2: Create your [API Keys](https://docs.spot.io/spot-connect/integrations/apikeys?id=api-keys) on Spot Connect. 

Step 3: Create a Spot Security workflow by completing the following steps: 

1. In the left main menu of the Spot Connect console, click **Workflows** and then the **Templates** tab. You can select your workspace and see who can view the workflows. 
2. In the search bar, enter **Create Jira Ticket on Spot Security Alert**.

![threats-a7](https://github.com/spotinst/help/assets/106514736/a26fc8f5-e131-4df3-ad70-cc2540997482)
     
3. Click the 3 dots at the top right of the widget and select **Duplicate**.  
4. Enter a name for the workflow and click **Create Workflow**. You are redirected to the workflow page where you configure the workflow. 
5. In the workflow panel in the center, click the Spot Security node. 
6. In the right panel, enter the API key that you want to configure your workflow with. If you have not configured your API key, you can create a new one [here](https://docs.spot.io/spot-connect/integrations/apikeys?id=api-keys). 
7. When you select the API keys, the **Webhook API Key Value** and **Workflow Webhook URL** open in the right panel. Use them to configure the incident response in Spot Security. 

![threats-a7](https://github.com/spotinst/help/assets/106514736/0f55fc2a-ceeb-42d2-9b2d-1bb2a355578d)

### Configure Notification in Jira 

To configure a Jira notification, complete the following steps:  

1. Click the **Jira Create Issue** node in the workflow panel that you created in Step 3. 
2. In the right panel, select a Jira instance from the Jira Instance dropdown menu. If you have no instance added, click **Add Integration Instance** in the menu. 
3. To configure Jira, follow these [steps](https://docs.spot.io/spot-connect/integrations/jira). 
4. When the configuration is complete, select the instance from the dropdown menu. 
5. Complete the mandatory fields: Jira Project Key, Issue Type, Summary, Priority, Reporter, Description, Steps to Reproduce. 
6. Click **Save New Version** at the top right to save the workflow.  

### Configure Notification in Slack 

To configure a Slack notification, complete the following steps: 

1. Delete the **Jira Create Issue** in the workflow that you created in Step 3. 
2. Click the **+** icon in the left navigation bar and search for **Slack Send Message**.

<img width="997" alt="threats-a14" src="https://github.com/spotinst/help/assets/106514736/58939cd8-dd0b-4202-8283-d5ea9cf887e0">

3. From the workflow builder in the left panel, drag and drop **Slack Send Message** to the JSON Path. 
4. Click the Slack SEnd Message node and in the right panel, enter the message text, add slack channels and/or users. If the Slack node is not configured, add it by completing the steps [here](https://docs.spot.io/spot-connect/integrations/slack).  
5. In Slack, add “@Spot connect by netapp” in the Slack channel. 
6. Click the settings icon near **S3 Pre-signed URLs for Attachments** and select **Value from previous step**. 
7. In the Choose a step dropdown menu select **JSONPath**. 
8. In the Choose an output from the step select **raw_ouput**. 
9. Return to the Spot Connect console and click **Save New Version** at the top right to save the workflow. 

### Conditional Workflow 

A Conditional Workflow enables you to define specific criteria using the provided filters on the All Threats page.  

![threats-a8](https://github.com/spotinst/help/assets/106514736/12d93a34-247b-452a-a13d-7163d87ad825)

1. In the Threats page, click the **All Threats** tab and then click the filter icon. 
2. After the filters are applied, click **Create Conditional Workflow**. 
3. Enter the webhook details that you created during the workflow creation. 

![threats-a9](https://github.com/spotinst/help/assets/106514736/18bec79d-be10-47ab-8b51-c8b9df8defa1)

**Note**: The supported filters for the conditional workflows are the following: Asset Type, Cloud Accounts, Regions, Asset Type, Users. 

When new threats that meet the specified criteria are detected, an automatic threat notification is enabled, and a ticket is generated. Depending on the workflow you have set up, you will receive either individual attachments for each matching threat on Slack or a single Jira ticket containing all the attachments that meet the criteria.   
### On-Demand 

The On-Demand (OD) approach enables you to manually create threat tickets. When accessing the Individual Threats page, you can click **Create Incident Ticket** and select an available tool from the dropdown to set up the ticketing process.  

![threats-a10](https://github.com/spotinst/help/assets/106514736/7e458511-86c0-477d-a8d2-0fb98b681e46)

A green checkmark indicates the success of the configuration, enabling you to create tickets for specific threats with one click. 

![threats-a11](https://github.com/spotinst/help/assets/106514736/6dbf118d-253b-4f09-847a-712d2df4110a)

When you select a specific tool for the first time, you need to enter webhook details to configure it. After the initial configuration, you will be able to directly create an incident workflow.   

![threats-a12](https://github.com/spotinst/help/assets/106514736/a32129d1-9e28-461f-b5ea-8ec6653d2d7b)

### View all Webhooks 

In the Administration page, under the Webhooks tab you can view all the webhooks that were created for the threat's notification.  

The Webhook tab displays a table with the following columns: 

* Webhook API Key Name 
* Webhook API Key Value 
* Workflow Webhook URL 
* Created at 
* Workflow Name 
* Conditions 
* Delete 

To differentiate between On-Demand and Conditional Workflow Webhook you can view the workflow name column. The On-Demand workflows have an icon of the specific tool that you are using (for example Jira or Slack) next to it. There can be only one conditional workflow for each tool. 

You can search for the workflow name by using the search bar at the top. Click the bin icon in the Delete column to delete a webhook.

![threats-a13](https://github.com/spotinst/help/assets/106514736/87144869-3061-4bca-8eec-3effac97be05)
