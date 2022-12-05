<meta name="robots" content="noindex">

# Events

Spot Security strives to reduce the Signal-to-Noise ratio of cloud security events for the users and highlight the events that have occurred on your cloud network within a defined time period based on event security.

To view the Events, go to Spot Security in the left menu of the console and click Events.

## Event Overview
You can choose to see the events of a particular cloud account, asset type, or region or view all events altogether. In addition, you can choose a time range to view specific events.

You can select a time range to view among two hours, six hours, one day or a custom date and time in the top right corner. The selected time changes the data for the events overview as well as the events trendline.

Spot Security classifies the events into the following categories:

* Configuration Change
* IAM Change
* Critical Event
* Data Access
* Anomalies
* Audit and Compliance Impact- events and risks

<img src="/spot-security/_media/events-a1.png" />

### Risks per Event Type Over Time
This chart shows the risks for each event type over specific time ranges. Filters apply for all events in the asset and you can select filters for specific time ranges.

<img src="/spot-security/_media/events-i.png" />

## List of Events

The All Events tab provides a list of events based on the time range or preset you defined. In addition, you can use the filters that appear in the table.

<img src="/spot-security/_media/events-b1.png" />

For each event, you can see the:
* Event Name
* Event Type
* Asset Name
* Security Rules
* Severity Level
* Source IP
* Region
* User
* Session ID
* Event Time
* Source
* Suppress

## Event Details
Clicking on an individual event, gives you the following information:
* Event Details: Information about an event such as event time, user, event name and source, etc.

<img src="/spot-security/_media/events-e.png" />

* Asset Details: Information about an asset such as the asset name, cloud details and cloud account name, etc. You will also find information about:

  - Security Rules: List of all the security rules which were assessed for determining an event.

  - Affected Assets: List of all of the assets that are impacted by an event.

  - Historical Events: List of the latest 500 events that occurred in the asset and has at least one failing security rule.

  - Session Events: List of the latest 500 events that occurred in the same session as an event and has at least one failing security rule.

Download the CSV option on the right corner of the table to view the latest	100,000 historical and session events.

<img src="/spot-security/_media/events-f1.png" />

### Event Impact Map:
For each security rule, you can see the Event Impact Map to visualize the asset network.

<img src="/spot-security/_media/events-c1.png" />

### Event Detail Record

Event Detail Records present the time of an event, the source, region and more for each event.

<img src="/spot-security/_media/events-d1.png" />

## What’s Next?
Learn more about Spot Security [Inventory](spot-security/features/inventory).
