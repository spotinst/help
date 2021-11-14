<meta name="robots" content="noindex">

# Webhook Notifications

Ocean CD enables you to define notification providers (endpoints) that will receive a webhook API notification with the detailed rollout process data.

## Notification Event Types

The following event types will trigger a webhook notification to the endpoints you define:
- controller-heartbeat-failure: The controller is not reporting a heartbeat for the configured amount of time.
- kubernetes-rolling-update-failed: The Kubernetes rolling update failed.
- kubernetes-rolling-update-finished: The Kubernetes rolling update finished.
- rollout-started: The Ocean CD rollout process began.
- rollout-failed: The Ocean CD rollout finished in failed status.
- rollout-failed-to-roll-back: Ocean CD failed to roll back the version.
- rollout-rolled-back: Ocean CD successfully rolled back the version.
- rollout-finished: The Ocean CD rollout successfully finished.
- start-external-verification: Ocean CD informs you start the external verification on your side.


## Add a New Webhook
To add a new webhook notification, do the following:
1. Use the Create Notification Provider API as described in the [Getting Started](ocean-cd/getting-started/) page.
2. Activate the cluster heartbeat notification by doing one of the following:
   - Use the Update Rollout API to add the notification to an existing rollout.
   - Use the Create Rollout API if you are creating a completely new rollout object.
3. Activate the rollout-related notifications, by doing one of the following:
   - Use the Update Rollout API to add the notification to an existing rollout.
   - Use the Create Rollout API if you are creating a completely new rollout object.

## What’s Next?

Learn more about the different types of [visibility features](ocean-cd/features/granular-visibility/) provided by Ocean CD.
