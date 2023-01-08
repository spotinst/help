# Verifications

You can define the verifications that take place during the deployment process. This feature also enables you to define the type of metrics you want to receive and which monitoring tools you want to use.  

## Verification Types

### Background Verifications

Background verifications occur behind the scenes, at the rollout level. They are not dedicated only to a single phase, but they run while the rollout is in progress.  

<img src="/ocean-cd/_media/background-verifications.png" />

### Phase Verifications

Phase verifications occur at the phase level. Within your strategy, you can set one or more verification templates within a phase.

<img src="/ocean-cd/_media/phase-verifications.png" />

###  Tracking the Verification Progress

Once a rollout has been triggered, you can view the results of each of the metrics in the form of a graph or a table.  

Go to the Phase Verifications or Background Verification tab in the [Detailed Rollouts](link) page depending on the type of verification you are running.

<img src="/ocean-cd/_media/verifications-01.png" />

## Verification Results

The verification results are described below.

**Passed**: A metric is passed when the success condition has been met.
**Failed**: A metric is failed if the failure condition consecutiveErrorLimit or failure limit has been met.  
**Inconclusive**: A metric is inconclusive when it has reached the `inconclusiveLimit` parameter. An inconclusive metric indicates that the run was neither successful nor failed.  

You can encounter an inconclusive metric under the following conditions:

* You set both failure and success conditions. In this case, the inclusive verification would lie in any result found between the two.  

For example:    

```
Failure limit: result < 10      

Success limit: result > 30
```

In this case, the inconclusive range is from 10 to 30.

* You didn’t set any failure or success conditions. In this case, any result would be inconclusive.

## Dry Run Verifications

Ocean CD enables you to choose whether the metric runs as a dry run. Enable the boolean parameter during the verification template configuration.  

This is useful if you want to use a metric as part of a verification without impacting the final state of the rollout. There is no impact on the rollout regardless of the result for that metric.

SCREENSHOT

## Failure policy

For each verification you can define a failure policy in the RolloutSpec entity. If the verification fails, Ocean CD enacts the policy. You can choose one of the following policies:   

* **Roll back**: Ocean CD rolls back your rollout upon verification metric failure and returns to the previous stable version.  

* **Pause**: Ocean CD pauses the rollout upon verification metric failure and allows the user to choose in real time how to pursue the rollout.  

* **Promote**: Ocean CD promotes your rollout, regardless of the result of the verifications.  

## What’s Next?

Learn how to see the real-time progress in the [Detailed Rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
