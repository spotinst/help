# View Trends and Notifications

The Trends and Notifications dashboard identifies trends and irregularities in cloud spending across cloud providers and accounts using custom or predefined parameters.

## Top Trends

The Top Trends graph shows cloud account spending over time and highlights irregular events. The graph represents each cloud account selected in the Accounts dropdown with a different color and can be filtered by timeframe.

<img src="/cloud-analyzer/_media/tutorials-view-trends-01.png" />

## Summary Table

The summary table includes the following columns:

- Event ID: Identifier assigned by Cloud Analyzer when the event is created. You can see more detailed information about an event by clicking on the [Event ID](cloud-analyzer/tutorials/view-trends-notifications/view-event-details).
- Account: The account name to which the event belongs
- Resource: A tag or service name which is customer-defined on the [Event Definition](cloud-analyzer/tutorials/view-trends-notifications/manage-event-definitions) page
- Trend Scope: The time frame in which metrics are compared. The following time frames are used:
  - Monthly: The analysis is performed comparing the last 30 days with the previous four 30-day periods.
  - Weekly: The analysis is performed comparing the last 7 days with the previous four 7-day periods.
  - Daily: The analysis is performed comparing the last day with the same day a week ago, two weeks ago, three weeks ago, and four weeks ago.
    For example: If today is Monday, data is compared from today (i.e., the last 24 hours) and from the same period on the previous Monday, two Mondays ago, three Mondays ago, and four Mondays ago.
- Expected Cost: The cost range that was expected for this time period based on previous time periods
- Cost: Actual cost of the event
- Change (%): Comparison of expected cost to actual cost as a percent
- Time: The time (date) at which Cloud Analyzer recognized the anomaly

## Additional Trend Information and Actions

From the Trends & Notifications page, you can access additional information and perform the following actions:

- [Define New Events](cloud-analyzer/tutorials/view-trends-notifications/manage-event-definitions)
- [View Event Details](cloud-analyzer/tutorials/view-trends-notifications/view-event-details)
- [Archive Events](cloud-analyzer/tutorials/view-trends-notifications/view-all-archive)
