<meta name="robots" content="noindex">

# Schedule Stateful Capacity

Elastigroups that utilize the [Stateful Spot Instances](elastigroup/features/stateful-instance/) can schedule capacity changes, for example, for QA environments that need to launch instances in the morning and terminate them at night or the weekend.

In Elastigroup, you can schedule jobs based on a cron expression. This means that you can trigger a change in capacity.

Each line of a cron expression represents a job. The cron expression consists of five fields as described below.

- Minute (0 - 59)
- Hour (0 - 23)
- Day of month (1 - 31)
- Month (1 - 12)
- Day of week (0 - 6; Sunday through Saturday)

For example, the expression 5 21 \* \* 1-5 runs a job at 21:05 on every day from Monday through Friday. The asterisks indicate that this applies to all days of the month in all months of the year.

> **Tip**: We recommend using [Crontab Guru](https://crontab.guru/) to create and verify your Cron expressions.

## How Stateful Scheduling Works

A change in capacity for a stateful spot instance (SSI) triggers the following:

- For capacity-reducing scheduled actions,
  - The instance is paused
  - The EBS volumes and Elastic Network Interface are detached and are kept in an available state until the capacity increases
- Capacity increases resume the paused instances with the existing resources attached to the new instances as they launch.

For SSIs, Elastigroup supports the following actions:

- Set Stateful Capacity Range: Changes the stateful instances from Paused to Resuming until the number of running SSIs equals the scheduled action target. If there are no SSIs, then a new SSI is launched. (Do not choose _Set Capacity Range_, as this does not apply to stateful Elastigroups.)
- Stateful Recycle: Equivalent to rebooting or restarting the machine; initiates Pause then Resume operations.

## Set Stateful Capacity Range

You can set the stateful capacity range when creating a new Elastigroup or by editing an existing group. The steps below are for creating a new Elastigroup.

1. In the Scaling tab, scroll down to Scheduling and click Add Task. (If you are editing an existing stateful Elastigroup, go to the Actions menu, click Edit Configuration, and then go to the Scaling tab.)
2. Click Set Stateful Capacity Range.

<img src="/elastigroup/_media/stateful-scheduling-01.png" width="309" height="271" />

3. Enter the Target, Minimum, and Maximum limits.
4. Enter the cron expression that defines when the action will take place.

<img src="/elastigroup/_media/stateful-scheduling-02.png" />

5. If needed, add more scheduling rules, and then click Create.

## Stateful Recycle

You can schedule a stateful recycle when creating a new Elastigroup or by editing an existing group. The steps below are for creating a new Elastigroup.

1. In the Scaling tab, scroll down to Scheduling and click Add Task. (If you are editing an existing stateful Elastigroup, go to the Actions menu, click Edit Configuration, and then go to the Scaling tab.)
2. Click Stateful Recycle.

<img src="/elastigroup/_media/stateful-scheduling-03.png" width="255" height="265" />

3. Enter the cron expression that defines when the action will take place.
4. If needed, add more scheduling rules, and then click Create.

Only SSIs that are currently active will be recycled. Paused and error instances will be ignored.

## What’s Next?

Learn more about:

- [Stateful Instance Actions](elastigroup/features/stateful-instance/stateful-instance-actions)
- How to [Create a Stateful Elastigroup from Scratch](elastigroup/tutorials/elastigroup-tasks/create-a-stateful-elastigroup-from-scratch)
