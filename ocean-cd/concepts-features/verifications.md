# Continuous Verifications

You can define the verifications that take place during the deployment process. This feature also enables you to define the type of metrics you want to receive and which monitoring tools to use.  

Ocean CD offers a way to configure a set of queries and rules, also known as verifications using different providers along with progressive deployments. The particularity of Ocean CD is that it processes the query requested in real time along with the rules configured to determine if the metric has failed or succeeded. There is no need to reach your monitoring tool in parallel, all tools are found in the Spot console.

## Verification Types

### Background Verifications

Background verifications occur behind the scenes, at the rollout level. They are not dedicated only to a single phase, but they run while the rollout is in progress.  

<img src="/ocean-cd/_media/background-verifications.png" />

### Phase Verifications

Phase verifications occur at the phase level. Within your strategy, you can set one or more verification templates within a phase.

<img src="/ocean-cd/_media/phase-verifications.png" />

## Tracking the Verification Progress

Once a rollout has been triggered, you can view the results of each of the metrics in the form of a graph or a table.   

Click the Phase Verifications or Background Verification tab in the [Detailed Rollouts](ocean-cd/tutorials/view-rollouts/detailed-rollout) page depending on the type of verification you are running.

<img src="/ocean-cd/_media/verifications-01.png" />  

## Verification Results

The verification results are described below.

* **Passed**: A metric is passed when the success condition has been met.

* **Failed**: A metric is failed if the failure condition consecutiveErrorLimit or failure limit has been met.  

## Dry Run Verifications

Ocean CD enables you to choose whether the metric runs as a dry run. Enable the boolean parameter during the verification template configuration.   

This is useful if you want to use a metric as part of a verification without impacting the final state of the rollout. There is no impact on the rollout regardless of the result for that metric.

<img src="/ocean-cd/_media/dry-run-verifications.png" />

## Failure Policy

For each verification, you can define a failure policy in the RolloutSpec entity. If the verification fails, Ocean CD enacts the policy. You can choose one of the following policies:   

* **Roll back**: Ocean CD rolls back your rollout upon metric failure verification and returns to the previous stable version.  

* **Pause**: Ocean CD pauses the rollout upon metric failure verification and enables you to choose in real time how to pursue the rollout.  

* **Promote**: Ocean CD promotes your rollout, regardless of the result of the verifications.  

## What’s Next?

Learn about [viewing the list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout page](ocean-cd/tutorials/view-rollouts/detailed-rollout).
