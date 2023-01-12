# Troubleshoot a Rollout

This page describes cases that could prevent the triggering of your rollout (link to Rollouts page) and describes how you can resolve most of these issues with manual input.  

## InvalidSpec

#### Issue

If the YAML files applied in your namespace were not configured correctly, Ocean CD displays an error message in the Spot console including specific information required for you to resolve the issue.

For example, the errors could be that the services you applied do not share the same labels as your SpotDeployment, or that the services were not found in the same namespace as the SpotDeployment. The Spot console supplies the details you need to resolve the issue.

#### Resolution

Change the configuration in the YAML according to the information supplied in the error message. Once you have changed the YAML, the rollout resumes without reapplying your SpotDeployment.

<img src="/ocean-cd/_media/troubleshoot-rollout-001.png" />

If you do not find the error on the Detailed Rollout page, view the Workload page, where you can also find an indication of the error. The status of the rollout may be set as InvalidError, which also indicates that action needs to be taken.  

## Degraded Status Removal

#### Issue

The workload status is indicated as [Degraded](ocean-cd/tutorials/view-workloads/details) in the Detailed Workload page.

<img src="/ocean-cd/_media/troubleshoot-rollout-002.png" />

#### Resolution

To remove the Degraded status, apply the [Live](ocean-cd/tutorials/view-workloads/details) version again. This removes the desired version from the SpotDeployment and removes the changes of SpotDeployment done prior to the rollout.

An update appears in the console that the application was performed and the Degraded status was removed.  

<img src="/ocean-cd/_media/troubleshoot-rollout-003.png" />

## No Heartbeat during a Rollout

#### Issue

During a rollout, no heartbeat is detected from the Ocean CD Operator.

#### Resolution

The operator can stop reporting a heartbeat because the node it was running on was terminated. If this happens, a banner appears in the Spot console indicating that the operator is no longer running and that you need to take action. (For example, you would need to restart the node the operator runs on.)

However, the operator may stop and this indicates that Ocean CD does not currently have visibility over the rollout. This does not indicate that the rollout has stopped and it can continue independently without the operator.  

<img src="/ocean-cd/_media/troubleshoot-rollout-003.png" />

## No Heartbeat Before a Rollout

#### Issue

When no rollout is in progress, no heartbeat is detected from the Ocean CD Operator.

#### Resolution

If the Operator does not send a heartbeat, no rollouts will be triggered. Ensure that the relevant node and the operator are running before a rollout can be started.

## Verification Data was not Received

#### Issue

Data from your verification provider may not be received when your verifications run during a rollout.

#### Resolution

Verify the following:  

* The cluster ID is well found in the verification provider. The cluster ID within which you are performing a rollout, may be the one configured in your verification provider.
* Your credentials were typed correctly. Incorrect typing of a credential can cause a lack of communication with the chosen monitoring tool.
* Your query is valid by running it internally in your monitoring tool prior to the rollout.

## What’s Next?

Learn more about the information provided in the [Detailed Rollout](ocean-cd/tutorials/view-workloads/details) page.
