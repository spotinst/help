<meta name="robots" content="noindex">

# Rollback

Rollback is a mission critical event that comes as a standard feature of Ocean CD. Ocean CD provides several types of rollbacks to enable a managed, smooth, and visible process that takes a microservice back to its last successful version.

## During Rollout Process

The following types of rollbacks can be implemented during the rollout process:
- Immediate Automatic Rollback: Immediate rollback to the last successful version. This rollback is executed as part of the “In progress” Ocean CD rollout flow, with no need to go through the full rollout spec process.
- New Rollout: Triggers a new Ocean CD rollout event that takes the last successful version through all the rollout spec phases.
- Manual Rollback: Ocean CD sends a webhook API to a predefined notification provider. The webhook includes an indication of a failure event. Rollback will be executed once an API request is received back, allowing you to intervene and decide if and when the rollback should be executed. If no request has been received, a fallback policy will be activated.

### Example: Immediate Automatic Rollback

In the example below, the flow in the Detailed Rollout View indicates that a failure has occurred as a fallback for not getting back an API request following [external verification](ocean-cd/features/external-verifications). The failure policy of immediate rollback has been activated and the rollback is in progress. The rollback status is clearly displayed, showing the relevant version IDs and the number of replicas completed.

<img src="/ocean-cd/_media/features-rollback-01.png" />

## After Successful Rollout

You can decide to roll back a live version even though the rollout process has been successfully completed from a technical perspective. You can activate the rollback at any time and trigger a new rollout event that takes the previous successful version through all the rollout spec phases.

> **Note**: This option is available only for detailed rollouts of a live version.

### Example: After Successful Rollout

In the example below, the rollback was completed successfully, and the failure policy was not activated. However, you can roll back the version manually at any time by clicking the Rollback action.

<img src="/ocean-cd/_media/features-rollback-02.png" />

## Change Rollback Setting

To change a rollback setting, use the Update Rollback API or Create Rollout Spec API and change the parameters as they are described in the [Getting Started](ocean-cd/getting-started/) page or in the Create Rollback API.

## What’s Next?

Learn more about [webhook notifications](ocean-cd/features/webhook-notifications).
