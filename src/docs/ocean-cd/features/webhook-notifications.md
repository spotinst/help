<meta name="robots" content="noindex">

# Webhook Notifications

Ocean CD enables you to define notification providers (endpoints) that will receive a webhook API notification with the detailed rollout process data.

## Notification Event Types

The following event types will trigger a webhook notification to the endpoints you define:
- Controller heartbeat failure
- New deployment detection
- Kubernetes rolling update failed or finished
- Rollout stopped, failed, or finished
- Failure policy activated or finished
- Manual rollback

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
