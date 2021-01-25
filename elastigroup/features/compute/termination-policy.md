# Termination Policy

The instance termination policy API is used for controlling how Elastigroup will terminate the instances during scale-down operation.

Supported termination policies are:

- Default
- Newest Instances

The following are features related to termination process:

- Detach instances. You can also decide which instance to terminate manually by using the detach option.
- Lock instances. If you have some instances that are running jobs and you don't want to terminate them you can also use the lock/protect option.
- Unlock instances. Release the instance from the protection.

> **Tip**: Termination policies will only apply to unlocked instances. Instance lock enables you to protect specific instance from termination.

For more info, see Instance Actions. Learn how to lock an instance, or unlock an instance using the API.

## Default Policy

The default termination policy implements an intelligent algorithm to decide which instances will be picked as candidates for termination during scale down.

The following parameters are taken into consideration:

- Healthiness of the instance. Unhealthy instances will be terminated before healthy ones.
- Spot availability prediction. The system continuously monitors and predicts spot markets performance.
  We prefer to terminate first instances from volatile markets so we could keep instances in stable and better markets.
- Strategy questions. How many reserved instances, how many on demand instances etc.
  According to defined strategy on Elastigroup, we check if On-Demand count was set – we won't terminate them. We prefer to terminate first the spot instances before RIs and ODs.
- AMI status. Prefer to scale down first the instances with older AMI version.
- Time considerations (Newest vs Oldest). Like AMI status, we are checking instance uptime. Prefer to terminate first the oldest instances.

The algorithm assigns weights to each of the parameters stated above, calculates accordingly, and decides which instances will be terminated first.

## Newest Instance Policy

This policy will change the behavior of the default policy's Time Considerations to prefer the newest instances in the group.

Using the newest instances policy enables you to extend as much as possible the functional and stable instances.

Also, this policy can be useful when you are testing a new launch configuration, but you don't want to keep it in production.
