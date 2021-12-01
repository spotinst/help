# Create Notifications

## Set up Elastigroup's Notifications

Elastigroup's notifications allow you to receive notifications for different events in the Elastigroup based on SNS or other subscriptions such as Email or HTTP endpoints. This article covers getting started with Elastigroup's Notifications and customizing the notifications content to meet your needs.

## Prerequisites

- A running Elastigroup

## Step 1: Open the Notifications Module

In your Elastigroup click on the Actions button and select Add Notifications.

<img src="/elastigroup/_media/create-notifications_1.png" />

Click the Subscribe or Subscribe to a Notification button.

<img src="/elastigroup/_media/create-notifications_2.png" />

Existing notifications can't be modified. To make changes create a new notification and remove the old one.

## Step 2: Configure Notification

For SNS select aws-sns as the Protocol Type and the SNS Topic ARN the notifications will be posted to. To post the notifications to an HTTP/HTTPS endpoints, select web as the Protocol Type and enter the endpoint.

<img src="/elastigroup/_media/create-notifications_3.png" />

Setting up Notifications for additional Platforms such as `email` and `email-json` are currently only available via our [API](https://docs.spot.io/api/#operation/notificationsServiceSubscriptionsSubscribe).

## Step 3: Event Types

**Group Deployment Completed**: Triggers a notification when a deployment process has finished successfully (for more information see [Deploy](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup.md)).

**Group Deployment Failed**: Triggers a notification when a deployment process has failed to finish with errors.

**Group Update Completed**: Triggers a notification when the Elastigroup updates successfully. Useful for monitoring Elastigroup updates by other users or provisioning tools.

**Instance Launch**: Triggers a notification when a new instance is launched in the Elastigroup.

**Instance Launch Failed**: Triggers a notification when an attempt to launch an instance in the Elastigroup fails.

**Instance Terminate**: Triggers a notification when an instance is marked for termination. This notification is issued prior to _Instance Terminated_.

**Instance Terminated**: Triggers a notification when one of the instances is terminated.

**Scale Failed – Group Max Capacity**: Triggers a notification when the group hits the max capacity defined in the Elastigroup, preventing additional scale up actions from taking place. This event does not include scale-up attempts by the ECS or Kubernetes autoscaler.

**Signal Timeout– Instance Not Ready**: Triggers a notification when a signal reaches its timeout. For more on configuring signals for Elastigroups click [here](elastigroup/features/compute/using-signals-in-elastigroups).

**Unhealthy Instance**: Triggers a notification when one of the instances in the group is recognized as unhealthy based on the Health Check configured. The Unhealthy Instance event type also applies to HCS users. For more on configuring Health Checks see our documentation [here](elastigroup/tutorials/elastigroup-actions-menu/set-health-checks).

## Step 4: Format (Optional)

In the `Format` field you can optionally change the default output of the notification.

The format of the notification content supports the following variables: event, instance-id, resource-id, resource-name, subnet-id, availability-zone, reason.

To use variables in custom formats, please wrap the variable name with a percentage sign. For example: %resource-id%

### Default Notification Content

```
{
     "event": "<event>",
     "instanceId": "<instance-id>",
     "resourceId": "<resource-id>",
     "resourceName": "<resource-name>"
}
```

### Custom Content Format Example

```
{
    "event": "%event%",
    "resourceId": "%resource-id%",
    "resourceName": "%resource-name%",
    "myCustomKey": "My content is set here",
    "AWS_Account_ID": "123456789"
}
```

### Custom Content Format Example For Slack Endpoints (Mandatory)

```
{
    "username": "Spotinst",
    "icon_url": "https://s3.amazonaws.com/spotinst-console/client-logos/spotinst-logo-blue.png",
    "attachments": [
        {
            "color": "#DE9D2E",
            "title": "event:%event%",
            "title_link": "https://console.spotinst.com/#/aws/ec2/elastigroup/view/{{resourceId}}",
            "fields": [
                {
                    "title": "Elastigroup Id",
                    "value": "%resource-id%",
                    "short": true
                },
                {
                    "title": "Elastigroup Name",
                    "value": "%resource-name%",
                    "short": true
                }
            ],
            "footer": "Spot API",
            "footer_icon": "https://s3.amazonaws.com/spotinst-console/client-logos/spotinst-logo-blue.png",
            "mrkdwn_in": [
                "text",
                "pretext"
            ]
        }
    ]
}
```

### Instance Launch

```
{
"default": "spotinst:notification:instance",
"event": "AWS_EC2_INSTANCE_LAUNCH",
"instanceId": "i-0d1c09565f353e90e",
"resourceId": "sig-675240da",
"resourceName": "ElasticSearch_Test"
}
```

### Instance Terminate

```
{
 "default": "spotinst:notification:instance",
 "availabilityZone": "us-west-2a",
 "event": "AWS_EC2_INSTANCE_TERMINATE",
 "instanceId": "i-0d1c09565f353e90e",
 "reason": "Instance Replacement",
 "resourceId": "sig-675240da",
 "resourceName": "ElasticSearch_Test"
}
```

### Reason Values and Explanations

The following is a list of values that can be in the `reason` field and an explanation for each one.

- `Scale down` – Terminated due to target capacity change by user.
- `Auto Scale` – Detached by any Autoscaler (K8S, ECS…).
- `Manual detach of old instances` – After a deployment was Stopped.
- `Manual detach of new instances` – After a deployment was Stopped.
- `Detach as part of deployment` – Standard detach of `Blue` instances in a deployment.
- `Instance replacement` – Spot Interruption / instance terminated on AWS / User detached without decrementing capacity.
- `Replacement has finished` – In case of `replacement finished with Error`, the new instances will be detached with this reason / Detached as a part of a proactive replacement (when not covered by any of the following reasons).
- `Replacement of type 'Fixing Strategy' has finished`
- `Replacement of type 'Preventive' has finished`
- `Replacement of type 'Unhealthy Instance' has finished`
- `Replacement of type 'Signal Timeout' has finished`
- `Replacement of type 'Spot Type Preference' has finished`
- `Replacement of type 'Reserved Instance Utilization' has finished`
- `Replacement of type 'Expensive Spot' has finished`

### Instance Terminated

```
{
 "default": "spotinst:notification:instance",
 "availabilityZone": "us-west-2a",
 "event": "AWS_EC2_INSTANCE_TERMINATED",
 "instanceId": "i-0d1c09565f353e90e",
 "resourceId": "sig-675240da",
 "resourceName": "ElasticSearch_Test"
}
```

## What's Next?

- Configure [Slack Notifications](administration/users/configure-slack-notifications)
- Configure [Email Notifications](administration/users/configure-email-notifications)
