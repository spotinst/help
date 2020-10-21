# Manage Event Definitions

## View Event Definitions

To view the event definitions, do the following:

1. In Cloud Analyzer, go to the Trends & Notifications page.
2. In the upper right corner, click Event Definition.

<img src="/cloud-analyzer/_media/tutorials-event-def-01.png" />

The Event Definition table shows a list of events defined in the system, including three predefined (default) events. The table includes the following:

- Name: The name of the event. The three default events have the prefix “predefined”.
- Description: A brief statement with the event scope describing the event rule
- Creator Name: Name of the user who created the rule
- Creation Time: Date and time the rule was created
- Status: Indication of whether the rule is active or inactive

## Modify an Event Definition

To modify an event definition do the following:

1. In the Event Definition page, click on the name of the event to be modified.
2. When the Event Definition box appears, click Edit.
3. Make your changes and click Save.

<img src="/cloud-analyzer/_media/tutorials-event-def-02.png" width="350" height="399" />

## Create a New Event Definition

You can define events and set thresholds for Cloud Analyzer to recognize and record an event.

To create a new event definition, do the following:

1. In the Event Definition page, click Create New Definition.
   2.Complete the information in the Create New Event Definition form and click Create.

<img src="/cloud-analyzer/_media/tutorials-event-def-03.png" width="350" height="596" />

3. In the form, you will need to complete the following information:

- Name: A clear identifier that you want to call the event definition.
- Description: A few words stating the purpose of the event definition.
- Detect Irregularities for: Choose the relevant Tag Key.
- Tag Value: The desired values that go with the Tag Keys.
- Scope: The time frame in which metrics are compared. The following time frames are used:
  - Monthly: The analysis is performed comparing the last 30 days with the previous four 30-day periods.
  - Weekly: The analysis is performed comparing the last 7 days with the previous four 7-day periods.
  - Daily: The analysis is performed comparing the last day with the same day a week ago, two weeks ago, three weeks ago, and four weeks ago.
    For example: If today is Monday, data is compared from today (i.e., the last 24 hours) and from the same period on the previous Monday, two Mondays ago, three Mondays ago, and four Mondays ago.
- Threshold: Percent increase over the expected value. When this value is exceeded, an event is recorded.
- Ignore Cost Decrease: Mark this checkbox if you do not want to get an alert for a decrease in cost.
