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

<img src="/spot-security/_media/threats-4.png" />  

The All Threats table includes the following columns:

* **Threat ID**: This unique identifier allows you to track and reference each detected threat individually, aiding in investigation and incident management.
* **Cloud Account ID**: This column specifies the associated ID of the cloud account impacted by the detected threat, assisting in scoping the potential impact of the incident within the cloud infrastructure.
* **Tactics and Techniques**: This column describes the specific tactics and techniques employed by threat actors during the attack or unauthorized activity, mapping them to the ATT&CK MITRE framework for contextual understanding of adversary behaviors.
* **User**: The user column identifies the user account linked to the detected threat, providing insights into the user's actions or potential compromise. This information aids in understanding the source of the threat and allows appropriate actions, such as user account review or access restriction.
* **Detection Time**: This column indicates the date and time the security system identified suspicious activity, assisting in reducing response time and mitigation.  


In addition to the table:

* Active threat tactics and techniques are highlighted in red, and you can filter threats using specific tactics and techniques as filters.
* You can choose to accept the risk of certain threats using the suppress option within the action buttons. Suppressed threats can be viewed by moving the Show Suppressed Threats toggle.
* By clicking the Threat IDs in the All Threats table, you can access individual threat pages containing all the event records associated with the threat session.

### Individual Threat Page

The individual threat page displays details of session events such as the event name, event type, asset ID, IP address, region, event time, session ID, and event source, providing comprehensive information about the specific threat events.

<img src="/spot-security/_media/threats-5a.png" />

You can click **Table** or **Details** to view the threat analysis in the form of a table or JSON. The JSON view displays the event detail record.  

#### Event Detail Record  

The Event Detail Record provides additional context for each event. These records include information such as the time of the event, event source, region, and more. By reviewing these event details, you can gain a deeper understanding of the specific events associated with the threat, aiding in comprehensive threat analysis and response. You can click on next or previous to move between the event detail records of the session events.

<img src="/spot-security/_media/threats-6.png" />

## What’s Next?

Learn more about [Spot Security Inventory](spot-security/features/inventory).
