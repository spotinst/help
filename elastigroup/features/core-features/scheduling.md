# Scheduling

Elastigroup provides a cron-based scheduling tool to schedule scaling actions, capacity changes, and deployments. This gives you the flexibility to schedule events when they are most convenient for you and your customers. For example, you can schedule a deployment to minimize the potential impact on your users, schedule scale up processes in advance of anticipated holiday traffic, and keep your costs down by terminating development environments over weekends.

Automate your regular scaling processes with Elastigroup and ensure that you are paying only for the resources that you need.

## Action Types

You can schedule a number of different action types. Schedulable action types include:

- Set Capacity Range: Update the capacity settings for the Elastigroup including Target, Minimum, and Maximum.
- Automatic Deployment: Start a [deployment](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup) at a defined time. You also specify the Batch Size (as a percent of the total deployment) and Grace Period (in seconds).
- Scale Up: Specify the number of new instances to launch.
- Scale Down: Specify the number of running instances to terminate.
- Percentage Scale Up: Amount to scale up as a percentage based on the current target. For example, if the current target is 10 instances, and the Percentage Scale Up is 50%, then 15 instances will be running after the scaling action.
- Percentage Scale Down: Amount to scale down as a percentage based on the current target.
- Set Stateful Capacity Range: Update the capacity settings for a stateful Elastigroup including Target, Minimum, and Maximum. This action changes the status of paused instances to running and can trigger a scaling action depending on the value of the updated Target.
- Stateful Recycle: Restarts all the stateful instances in the group.

## Cron Expression

Spot uses a standard cron expression to schedule the action. The cron expression should include numerical values only, and you can validate your cron expression at http://crontab.guru/. The time zone used for cron expressions is Coordinated Universal Time (UTC).

### Example

The cron expression `30 16 * * 1-5` defines a recurring Scale Up task that repeats at 16:30 UTC, Monday through Friday.

<img src="/elastigroup/_media/corefeatures-scheduling-01.png" />

## Schedule a Task

You can schedule one or more tasks in Elastigroup when you create a new Elastigroup or when you are editing the configuration of the group. The procedure below is for editing an existing Elastigroup.

1. In the overview page for an Elastigroup, open the Actions menu and click Edit Configuration.

<img src="/elastigroup/_media/corefeatures-scheduling-00.png" />

2. Click the Scaling tab.
3. Go down to the Scheduling area and click Add Task.

<img src="/elastigroup/_media/corefeatures-scheduling-00a.png" width="514" height="144" />

4. Choose the Action Type and fill in the additional information associated with that action type.
5. Fill in the cron expression to schedule the action.

The task schedule will take effect when you save your modifications to the configuration, e.g., when you click Update in the Review page. If you are creating a new Elastigroup, the task will take effect when you click Create on the Review page.

## What's Next?

Learn more about the kinds of [scaling policies](elastigroup/features/scaling/) you can define in Elastigroup.
