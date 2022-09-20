# Troubleshoot a Rollout

This page describes cases that could prevent the triggering of your [rollout](ocean-cd/tutorials/view-rollouts/) and describes how you can resolve most of these issues with manual input.

## InvalidSpec

#### Issue

If the YAML files applied in your namespace were not configured correctly, Ocean CD displays an error message in the Spot console including specific information required for you to resolve the issue.

For example, the errors could be that the services you applied do not share the same labels as your SpotDeployment, or that the services were not found in the same namespace as the SpotDeployment. The Spot console will supply the details you need to resolve the issue.

#### Resolution

Change the configuration in the YAML according to the information supplied in the error message. Once you have changed the YAML, the rollout resumes automatically without requiring you to re-apply your SpotDeployment.

<img src="/ocean-cd/_media/troubleshoot-rollout-001.png" />

If you do not find the error on the Detailed Rollout page, look in the Workload page, which also indicates the error.  The status of the rollout will be set as InvalidError, indicating that an action needs to be taken.

## Degraded Status Removal

#### Issue

The workload status is indicated as [Degraded](ocean-cd/tutorials/view-workloads/details) in the Detailed Workload page.

<img src="/ocean-cd/_media/troubleshoot-rollout-002.png" />

#### Resolution

To remove the Degraded status, apply the [Live](locean-cd/tutorials/view-workloads/details) version again. This removes the desired version from the SpotDeployment and removes the changes of SpotDeployment done prior to the rollout.

The UI will update you accordingly that the application was performed and the Degraded status was removed.

<img src="/ocean-cd/_media/troubleshoot-rollout-003.png" />

## No Heartbeat during Rollout

#### Issue

During a rollout, no heartbeat is detected from the Ocean CD Operator.

#### Resolution

A reason that the Operator stopped reporting a heartbeat could be that the node it was running on was terminated. If this happens, a banner appears in the Spot console indicating that the Operator is no longer running and that you need to take action. (For example, you would need to restart the node the Operator runs on.)

However, a stopped Operator does not mean that the rollout has stopped. This means only that Ocean CD does not currently have visibility over the rollout. The rollout could continue independently of the Operator.

<img src="/ocean-cd/_media/troubleshoot-rollout-004.png" />

## No Heartbeat when no Rollouts

#### Issue

During a time that no rollout is in progress, no heartbeat is detected from the Ocean CD Operator.

#### Resolution

If the Operator does not send a heartbeat, no rollouts will be triggered. You will need to ensure that the relevant node and the Operator are running before a rollout can be started.

## What’s Next?

Learn more about the information provided in the [Detailed Rollout](ocean-cd/tutorials/view-workloads/details) page.
