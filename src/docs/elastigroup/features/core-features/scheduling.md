# Scheduling

Elastigroup provides a cron-based scheduling tool to schedule scaling actions, capacity changes and deployments. Schedule scale up processes in advance of anticipated holiday traffic, keep your costs down by terminating dev environments over weekends or schedule a deployment to minimize the potential impact on your users. Automate your regular scaling processes with Elastigroup and ensure that you’re paying only for the resources that you need.

## How It Works

Creating scheduling tasks with cron expressions can be done through the Console UI or via API. To set it using the console, enter the Creation Wizard or edit an existing Elastigroup configuration and under Scheduling in the General tab add a scheduling task. You can add multiple tasks to change the target, min and max instance capacity of the group or to schedule deployments.

---
**Tip**: The time zone used for cron expressions is UTC – Coordinated Universal Time.

---

The cron expression should include numerical values only. You can validate your cron expression at:  http://crontab.guru/.

### Example

The cron expression: `30 16 * * 1-5` will repeat at 16:30 UTC on Monday-Friday.

<img src="/elastigroup/_media/corefeatures-scheduling-01.png" />

## What’s Next?

Schedule tasks using the [Elastigroup API](https://docs.spot.io/spotinst-api/elastigroup/amazon-web-services/create/).
