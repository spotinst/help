# Using Signals in Elastigroups

The instance signal API is used for notifying the system about the instance state, so that the system can act accordingly. Supported signals are:

- INSTANCE_READY – Whenever this signal is sent, the system will register the instance to the load balancer.
- INSTANCE_READY_TO_SHUTDOWN – Whenever this signal is sent, the system will terminate the Instance. This gives the client an option to terminate an instance only after the shutdown script has executed.

## Detach Action

A detach action is required prior to sending an INSTANCE_READY_TO_SHUTDOWN signal.

Once the instance is detached, the instance goes to the Handle_shutdown_script stage. In this step, the shutdown script will be executed. If you need the instance to drain and only then execute the shutdown script, you should address it within the shutdown script (for example, with the Sleep command).

## Signal Definition

You need to define the expected signals for your Elastigroup in the group configuration.

To add this to the Elastigroup configuration you can use the `Review` tab in the Elastigroup configuration wizard or use the Update group API and add the signal under `strategy` as shown below:

```json
{
  "group": {
    "strategy": {
      "signals": [
        {
          "name": "INSTANCE_READY",
          "timeout": 900
        },
        {
          "name": "INSTANCE_READY_TO_SHUTDOWN",
          "timeout": 200
        }
      ]
    }
  }
}
```

The Elastigroup configuration should have the following attributes:

- strategy.signals – Array – The signals defined for this group
  strategy.signals.name – string – The name of the signal defined for the group. Valid Values:
  - INSTANCE_READY
  - INSTANCE_READY_TO_SHUTDOWN
- strategy.signals.timeout – int – (Optional) The timeout in seconds to hold the instance until a signal is sent. If no signal is sent the instance will be replaced (INSTANCE_READY) or we will terminate the instance (INSTANCE_READY_TO_SHUTDOWN) after the timeout. The default value is 120 seconds. (The maximum value is 1800 seconds, and the minimum value is 60 seconds).

## Instance Termination Behavior

For instance termination, the system behaves in the following way:

- If only a draining timeout is configured, the system waits the draining time out configured and then terminates the instance.
- Once the signal (INSTANCE_READY_TO_SHUTDOWN) is sent, the system terminates the instance.
  - If no signal is sent, the system waits for the signal time out. (In other words, the system ignores the draining timeout configuration).
  - If no signal time out is configured, the default is 120 seconds.

## API

To send the signal, the [Create Instance Signal API](https://docs.spot.io/api/#operation/elastigroupAwsCreateInstanceSignal) should be used.

### Available Body Parameters

- instanceId – string – (required) The instance ID the signal refers to.
- signal – string – (required) The specific signal you want to trigger. Valid Values:
  - INSTANCE_READY
  - INSTANCE_READY_TO_SHUTDOWN

### Request

Headers:

```
Content-Type: application/json
Authorization: Bearer ${token}
```

Body

```json
{
  "instanceId": "i-123456",
  "signal": "INSTANCE_READY"
}
```

An example of a user data script that can be used in an Elastigroup for the Load balancer Signal:

```bash
instanceid=$( curl http://169.254.169.254/latest/meta-data/instance-id )
instance_signal=$( echo '{"instanceId" :  "'${instanceid}'",  "signal" : "INSTANCE_READY"}' )
echo $instance_signal > instance_signal
token=<YOUR API TOKEN>
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" -d @instance_signal https://api.spotinst.io/aws/ec2/instance/signal?accountId={ACCOUNT_ID}
```

An example of shutdown script that can be used in an Elastigroup for the instance ready to terminate Signal:

```bash
instanceid=$( curl http://169.254.169.254/latest/meta-data/instance-id )
instance_signal=$( echo '{"instanceId" :  "'${instanceid}'",  "signal" : "INSTANCE_READY_TO_SHUTDOWN"}' )
echo $instance_signal > instance_signal
token=<YOUR API TOKEN>
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer ${token}" -d @instance_signal https://api.spotinst.io/aws/ec2/instance/signal?accountId={ACCOUNT_ID}
```

## Remove a Signal

If you have a signal configured in your Elastigroup and you would like to disable it, do the following:

1. Go to the relevant ElastiGroup and click Actions/Edit Configuration/Review.
2. Click Edit Mode, and simply replace the value for the "signals" key with null.

```
"signals": null,
```

3. Click Update to apply the changes. You may also need to roll your group after making the change.

You can also make this configuration change using the API.
