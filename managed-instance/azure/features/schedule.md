# Schedule Stateful Node Actions

In [Stateful Nodes](managed-instance/azure/), you can schedule when certain actions take place. For example, for a node that is not used on weekends, you can pause the node Friday evening after everyone has stopped working and then resume the node early Monday morning just before people start work again.

To schedule an action, use the `Scheduling` function in the [Create](https://docs.spot.io/api/#operation/azureStatefulNodeCreate) or [Update](https://docs.spot.io/api/#operation/azureStatefulNodeUpdate) API in the Stateful Node APIs.

You can schedule actions in the Advanced tab of the creation wizard when you [create a new stateful node](managed-instance/azure/getting-started/create-stateful-node) or you can schedule by editing the configuration of an existing stateful node.

Learn how to [schedule](managed-instance/azure/getting-started/create-stateful-node?id=scheduling) a stateful node.  

## Cron Expressions

Scheduling is based on cron expressions. Each line of a cron expression represents a job (i.e., an action). The cron expression consists of five fields as described below.
- Minute (0 - 59)
- Hour (0 - 23)
- Day of month (1 - 31)
- Month (1 - 12)
- Day of week (0 - 6; Sunday through Saturday)

For example, the expression 5 21 * * 1-5 runs a job at 21:05 on every day from Monday through Friday. The asterisks indicate that this applies to all days of the month in all months of the year.

> **Tip**: We recommend using [Crontab Guru](https://crontab.guru/) to create and verify your Cron expressions.

## What’s Next?

Learn how to [create a stateful node](https://docs.spot.io/api/#operation/azureStatefulNodeCreate) from scratch using the Spot API.
