# Schedule Stateful Capacity

Elastigroups that utilize the [Stateful Spot Instances](elastigroup/features/stateful-instance/stateful-instances) can schedule capacity changes, for example for QA environments that need to launch instances in the morning and terminate them at night or the weekend.

Elastigroups allows you to set Jobs based on a Cron expression. This means you can trigger a change in capacity. Each line of a cron expression represents a job and looks like this:

┌───────────── minute (0 – 59)

│ ┌───────────── hour (0 – 23)

│ │ ┌───────────── day of month (1 – 31)

│ │ │ ┌───────────── month (1 – 12)

│ │ │ │ ┌───────────── day of week (0 – 6) (Sunday to Saturday;

│ │ │ │ │ 7 is also Sunday on some systems)

│ │ │ │ │

│ │ │ │ │

For example:

`5 21 * * 1-5 = (At 21:05 on every day-of-week from Monday through Friday)`

> **Tip**: We recommend using https://crontab.guru/ to create and verify your Cron expressions.

## How Stateful Scheduling Works

A change in capacity for a Stateful Spot Instance (SSI) triggers the following set of actions. For capacity-reducing scheduled actions, the instance is paused and the EBS volumes and Elastic Network Interface are detached and are kept in an available state until the capacity increase. Capacity increases resume the paused instances, with the existing resources attached to the new instances as they launch.

For SSI, we support the following options:

- Update capacity
- Recycle

## Update Capacity

1. Edit the Elastigroup configuration via the Actions menu or create a new Elastigroup.
2. In the general Elastigroup Creation Wizard, under the General tab scroll to locate Scheduling and expand it. In the Stateful Creation Wizard, Scheduling can be found under the Scaling tab.
3. Click on Add Task
4. Set the Action type to Set Stateful Capacity Range (or Update Capacity in the Stateful Creation Wizard).
5. Select the new Target, Min and Max limits (optional)
6. Provide the Cron expression that sets the time the Action will take place.
7. Add more scheduling rules as needed, then Update or Create the Elastigroup.

<img src="/elastigroup/_media/stateful-schedulecapacity-01.png" />

## Recycle

1. Edit the Elastigroup configuration via the Actions menu or create a new Elastigroup.
2. In the Stateful Creation/Edit Wizard, Scheduling can be found under the Scaling tab.
3. Click on Add Task
4. Set the Action type to Recycle.
5. Provide the Cron expression that sets the time the Action will take place.
6. Add more scheduling rules as needed, then Update or Create the Elastigroup.

Only group SSIs that are currently active will be recycled. Paused and error instances will be ignored.
