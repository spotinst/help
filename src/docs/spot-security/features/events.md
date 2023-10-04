<meta name="robots" content="noindex">

# Events

Spot Security strives to reduce the Signal-to-Noise ratio of cloud security events for the users and highlight the events that have occurred on your cloud network within a defined time period based on event security.   

To view the Events, go to Spot Security in the left menu of the console and click Events. 

## Overview

In the event overview section you can view all event types and risk distribution. 

![events-1](https://github.com/spotinst/help/assets/106514736/da7c4e4c-41a6-40e9-8f03-06766c6d985b)

The bar chart displays the distribution of risks for each event type. When you click a card, the bar graph will display the risk distribution of that particular event type. 

![events-2](https://github.com/spotinst/help/assets/106514736/58bf97c6-aa58-4d1f-953f-8e18037ec518)

You can select a date range in the top right corner to view events.  

<img width="550" height="350" alt="events-3" src="https://github.com/spotinst/help/assets/106514736/482c0a21-93d3-41a7-b5ae-0bf7f4eaac56">

If you have both AWS and Azure events in your environment you can use the toggle to the left of the events to switch between AWS and Azure. 

<img width="300" height="40" alt="events-4" src="https://github.com/spotinst/help/assets/106514736/24f18ce5-2fa4-43e6-a1f8-c01276c89dd6">

Spot Security classifies the events into the following categories: 

* Configuration Change  
* IAM Change 
* Critical Event 
* Data Access 
* Operational 
* Anomalies  

## All Events 

The All Events tab provides a list of events based on the time range or preset you defined. For each event, you can see the:  

* Event Name 
* Event Type 
* Asset Type 
* Asset Name 
* Failing Security Rules Count 
* Severity Level 
* Source IP 
* Region 
* User 
* Session ID 
* Event Time 
* Source 
* Suppress 

![events-5](https://github.com/spotinst/help/assets/106514736/5679b2e3-dc49-4325-b6e0-85f786e16ed6)

In addition, you can use the Severity and Event Type filters to filter the events. You can also search for Event Name, Asset Type,Event Time, Source IP and Users to view specific events. 

![events-6](https://github.com/spotinst/help/assets/106514736/6f345926-5e07-4ffe-90e8-fb13bcf61a5e)

## Event Details 

Clicking an individual event, gives you the following details: 

* **Event Details**: Information about an event such as event time, user, event name and source, etc. 

![events-e](https://github.com/spotinst/help/assets/106514736/b9ad17d0-c23f-421b-9790-cbc7ee2d4fe6)

* **Asset Details**: Information about an asset such as the asset name, cloud details and cloud account name, etc. You will also find information about: 
    * **Security Rules**: List of all the security rules which were assessed for determining an event. 
    * **Affected Assets**: List of all of the assets that are impacted by an event. 
    * **Historical Events**: List of the latest 500 events that occurred in the asset and has at least one failing security rule. 
    * **Session Events**: List of the latest 500 events that occurred in the same session as an event and has at least one failing security rule. 

Download the CSV option on the right corner of the table to view the latest 	100,000 historical and session events. 

![events-8](https://github.com/spotinst/help/assets/106514736/338d56b6-56f0-44e6-953a-d8495549c7cf)

## Event Impact Map  

For each security rule, you can see the Event Impact Map to visualize the asset’s network.   

![events-9](https://github.com/spotinst/help/assets/106514736/5f9ea3bb-0def-4490-9c64-2b5831db12f0)

## Event Detail Record 

Event Detail Records present the time of an event, the source, region and more for each event. 

![events-10](https://github.com/spotinst/help/assets/106514736/85e5db8b-47a1-4464-8e52-b11218be0781)

## What’s Next?
Learn more about Spot Security [Inventory](spot-security/features/inventory).
