# Troubleshoot a Rollout

This page outlines scenarios that could hinder the smooth running of your [rollout](ocean-cd/tutorials/view-rollouts/) and provides guidance on resolving most of these issues through manual input.  

## InvalidSpec

#### Issue

If the YAML files applied in your namespace such as the services ones were not configured correctly, or one of your Ocean CD entities was wrongly configured or missing, Ocean CD displays an error message in the Spot console including information to resolve the issue.

#### Resolution

Change the configuration in the YAML according to the information supplied in the error message. Once you have changed the YAML, the rollout resumes without reapplying your SpotDeployment.

<img src="/ocean-cd/_media/troubleshoot-rollout-001.png" />

If you do not find the error on the Detailed Rollout page, view the [Detailed Workload page](ocean-cd/tutorials/view-workloads/details), where you can also find an indication of the error. The status of the rollout may be set as InvalidError, which also indicates that action needs to be taken.  

## Degraded Status Removal

#### Issue

The workload status is indicated as Degraded in the Detailed Workload page.

<img src="/ocean-cd/_media/troubleshoot-rollout-002.png" />

#### Resolution

To remove the Degraded status, apply the Live version again. This removes the desired version from the SpotDeployment and removes the changes of SpotDeployment done prior to the rollout.

An update appears in the console that the application was performed and the Degraded status was removed.  

<img src="/ocean-cd/_media/troubleshoot-rollout-003.png" />

## Rollout Disruption: Ocean CD Operator's Heartbeat Stopped

#### Issue

If the Ocean CD manager stops reporting a heartbeat during a rollout, a message will appear in the Spot console notifying that the operator is no longer running and that you need to take action internally. 

#### Resolution  

Refer to the pods’ logs for additional information. 

**Although the Ocean CD operator no longer has a heartbeat, it does not indicate that the rollout has stopped and it will continue independently without the operator. When the operator is restored, the data will be updated accordingly**.

![troubleshoot-rollout-1](https://github.com/spotinst/help/assets/106514736/61be709e-428b-4403-97fc-6ea9466558ac)

## Rollout Disruption: Argo Rollouts' Heartbeat Stopped 

#### Issue 

If the Argo Rollouts stops reporting a heartbeat, a message will appear in the Spot console notifying that the operator is no longer running and that you need to take action.  

#### Resolution  

Refer to the pods’ logs for additional information. 
 
**If the Argo Rollouts stop providing a heartbeat, your rollout will be disrupted. Ocean CD will be able to display the current status of the rollout, once the operator is back**. 

## Pre-Rollout Alert: Absence of Argo Rollouts and Ocean CD Operator Heartbeat 

#### Issue 

If the Operator does not send a heartbeat, no rollouts will be triggered. Ensure that the relevant node and the operator are running before a rollout can be started. 

#### Resolution

Refer to the pods’ logs for additional information. 

## Verification Data was not Received

#### Issue

Data from your verification provider may not be received when your verifications run during a rollout.

#### Resolution

Verify the following:  

* The cluster ID is well found in the verification provider. The cluster ID within which you are performing a rollout, may be the one configured in your verification provider.
* Your credentials were typed correctly. Incorrect typing of a credential can cause a lack of communication with the chosen monitoring tool.
* Your query is valid by running it internally in your monitoring tool prior to the rollout.

<img src="/ocean-cd/_media/troubleshoot-verification-data.png" />

## What’s Next?

Discover the various features of [Ocean CD](ocean-cd/concepts-features/).
