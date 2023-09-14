# Threats

AWS Threat Detection and Response is an advanced security feature offered by Spot Security to safeguard your cloud infrastructure from potential threats and unauthorized activities. By combining event analysis from CloudTrail with our proprietary anomaly detection methods, this feature provides comprehensive protection and maps detected anomalies to the ATT&CK MITRE framework for enhanced threat intelligence.

To view the Threats feature, in the left main menu in the Spot console, click **Spot Security** and then **Threats**.

In the Threats page, there are two main tabs:  

* Overview
* All Threats

## Overview

The Overview section provides three informative subsections:

* **Threats Over Time**: A line graph that displays the trend of threat counts over time, enabling you to select the view of the overall threat landscape in the range of a day, week or month.

<img src="/spot-security/_media/threats-1.png" />  

* **Threats by MITRE Tactics**: A graph that provides an overview of the total number of threats mapped to each specific MITRE tactic, enabling you to understand the distribution of threat tactics within the environment.

<img src="/spot-security/_media/threats-2.png" />

* **Cloud Accounts with Most Threats**: A chart that highlights the cloud accounts with the highest number of detected threats, enabling you to focus on specific accounts for targeted security measures.

<img src="/spot-security/_media/threats-3.png" />

## All Threats

### All Threats Table

The All Threats tab presents a comprehensive table of detected threats, providing valuable insights into the nature of threats, their origins, associated tactics and techniques, users involved, and the time of detection. Understanding this information enables you to make informed decisions regarding threat mitigation and implement necessary security enhancements.
You can find the table in the Threats section under the All Threats tab.

![threats-4a](https://github.com/spotinst/help/assets/106514736/2e66b65d-2433-4a50-9e86-27c34d0380ce)

The All Threats table includes the following columns:

* **Threat ID**: This unique identifier allows you to track and reference each detected threat individually, aiding in investigation and incident management.
* **Asset Type**: This will provide information about the service type such as EC2 or IAM etc.
* **Asset ID**: This column specifies the assosiated ID of the asset impacted by the detected threat, assisting in scoping the potential impact of the incident within the cloud infrastructure. 
* **Cloud Acount Name**: The cloud account that is related to the detected threat.  
* **Tactics and Techniques**: This column describes the specific tactics and techniques employed by threat actors during the attack or unauthorized activity, mapping them to the ATT&CK MITRE framework for contextual understanding of adversary behaviors. 
* **Detection Time**: This column indicates the date and time the security system identified suspicious activity, assisting in reducing response time and mitigation. 
* **User**: The user column identifies the user account linked to the detected threat, providing insights into the user's actions or potential compromise. This information aids in understanding the source of the threat and allows appropriate actions, such as user account review or access restriction.   

In addition to the table:

* Active threat tactics and techniques are highlighted in red, and you can filter threats using specific tactics and techniques as filters. 
* You can click the filter icon to filter threats based on the asset type. 
* You can choose to accept the risk of certain threats using the suppress option within the action buttons. Suppressed threats can be viewed by moving the Show Suppressed Threats toggle. 
* By clicking the Threat IDs in the All Threats table, you can access individual threat pages containing all the event records associated with the threat session. 

### Individual Threat Page

The individual threat page displays details of session events such as the event name, event type, asset ID, IP address, region, event time, session ID, and event source, providing comprehensive information about the specific threat events.
You can find the details of a threat by clicking a threat in the All Threats table.  

![threats-5b](https://github.com/spotinst/help/assets/106514736/575a454d-fcdd-4662-b812-e9e8b90dd73c)

Click **Table** or **Details** to view the threat analysis in the form of a table or JSON. The JSON view displays the event detail record.  

#### Event Detail Record  

The Event Detail Record provides additional context for each event. These records include information such as the time of the event, event source, region, and more. By reviewing these event details, you can gain a deeper understanding of the specific events associated with the threat, aiding in comprehensive threat analysis and response. You can click on next or previous to move between the event detail records of the session events.

<img src="/spot-security/_media/threats-6.png" />

## Incident Response 

Spot Security offers two methods to create incident response tickets for detected threats in their ticketing tool: 

* Conditional Workflow 
* On-Demand  

### Conditional Workflow 

A Conditional Workflow enables you to define specific criteria using the provided filters on the All Threats page.  

![threats-7](https://github.com/spotinst/help/assets/106514736/43ef3553-2e11-476e-b975-92439ddd429f)

Once the filters are applied, click **Create Conditional Workflow**, which will prompt you to enter your webhook details.  
![threats-8](https://github.com/spotinst/help/assets/106514736/5054c630-d9dc-48ef-958e-1a9016755b8f)


This enables automatic threat notifications and ticket creation whenever new threats that match the defined criteria are detected. 

If you do not have the webhook details, configure your workflow [here](https://docs.spot.io/spot-connect/integrations/spot_security?id=spot-security-webhook). Learn how to configure [Jira](https://docs.spot.io/spot-connect/integrations/jira) or [Slack Send Message](https://docs.spot.io/spot-connect/integrations/slack).  

### On-Demand: 

The OnDemand approach enables you to manually create threat tickets. When accessing the Individual Threats page, you can click **Create Incident Ticket** and select an available tool from the dropdown to set up the ticketing process.  

![threats-9](https://github.com/spotinst/help/assets/106514736/ed7753b5-b9dc-4437-b42c-816e7f13f682)

A green checkmark indicates the success of the configuration, enabling you to create tickets for specific threats with one click. 

![threats-10](https://github.com/spotinst/help/assets/106514736/7c092b95-e856-4512-9638-c3b53171ae46)

When you select a specific tool for the first time, it will prompt you to enter webhook details to configure it.  

![threats-11](https://github.com/spotinst/help/assets/106514736/08de46f2-5fff-4186-bd46-7863f53cb1a1)

If you do not have the webhook details, configure your workflow [here](https://docs.spot.io/spot-connect/integrations/spot_security?id=spot-security-webhook). You can also configure Jira or Send a Slack Message.  

### Viewing all Webhooks 

In the Adminstration page, under the Webhooks tab you can view all the webhooks that were created for the threats notification.  

![threats-12](https://github.com/spotinst/help/assets/106514736/913a4923-5234-4ea1-bef4-11bc38de5009)

## What’s Next?

Learn more about [Spot Security Inventory](spot-security/features/inventory).
