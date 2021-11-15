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

## Notification Event Structure

### Rollout Events

Ocean CD sends notification events with the following JSON structure:

```json
{
  "type": "<Based on the ‘Notification Event Type’>",
  "timestamp": "14/11/2021 05:00:22",
  "rolloutDetails": {
    "id": "rol-12345678",
    "startTime": "14/11/2021 04:59:34",
    "rolloutSpec": "<rolloutSpec name>",
    "microservice": "<microservice name>",
    "environment": "<environment name>",
    "namespace": ""
  },
  "kubernetesDetails": {
    "deployment": {
      "name": "",
      "labels": [
        {
          "key": "",
          "value": ""
        }
      ],
      "version": {
        "oldImage": "",
        "newImage": "",
        "oldVersion": "",
        "newVersion": ""
      }
    }
  },
  "failure": {
    "reason": ""
  }
}
```
### Cluster Heartbeat Failure Event

Ocean CD can send notification of controller heartbeat failures. This is a separate notification type (compared to rollout events) and can be set by using the [Ocean CD Update Cluster API](https://docs.spot.io/api/#operation/OceanCDClusterUpdate) (after the controller has been installed). Ocean CD sends notification events with the following JSON structure:

```json
{
  "type": "controller-heartbeat-failure",
  "timestamp": "14/11/2021 05:00:22",
  "clusterId": "",
  "controllerDetails": {
    "controllerVersion": "",
    "nodeName": "",
    "podName": ""
  }
}
```

## Add a New Webhook

To add a new webhook notification, do the following:
1. Use the [Create Notification Provider API](https://docs.spot.io/api/#operation/OceanCDNotificationProviderCreate) as described in the [Getting Started](ocean-cd/getting-started/) page.
2. Activate the cluster heartbeat notification by doing one of the following:
   - Use the [Update Rollout Spec API](https://docs.spot.io/api/#operation/OceanCDRolloutSpecUpdate) to add the notification to an existing rollout.
   - Use the [Create Rollout Spec API](https://docs.spot.io/api/#operation/OceanCDRolloutSpecCreate) if you are creating a completely new rollout object.
3. Activate the rollout-related notifications, by doing one of the following:
   - Use the [Update Rollout Spec API](https://docs.spot.io/api/#operation/OceanCDRolloutSpecUpdate) to add the notification to an existing rollout.
   - Use the [Create Rollout Spec API](https://docs.spot.io/api/#operation/OceanCDRolloutSpecCreate) if you are creating a completely new rollout object.

## What’s Next?

Learn more about the different types of [visibility features](ocean-cd/features/granular-visibility/) provided by Ocean CD.
