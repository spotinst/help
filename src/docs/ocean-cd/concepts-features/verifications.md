<meta name="robots" content="noindex">

# Verifications

Using the Verification Template entity, you can define the verifications that will take place during your deployment process, including metrics and monitoring tools. Once you have set the verifications, you can reference them into your Strategy entity and declare the steps in which they will take place.

## Background Verifications

*Background Verifications* occur behind the scenes, at the rollout level. They are not dedicated to a single phase only, but run as long as the rollout is in progress.

If a metric in a background verification fails, the rollout behaves according to the failure policy set in your strategy.

## Phase Verifications

*Phase Verifications* occur at the phase level. Within your strategy, you can set one or more verification templates within a phase.

If a metric in phase verification fails, the rollout behaves according to the failure policy set in your strategy.

## Tracking the Verification Progress

Once a rollout has been triggered, you can see in real-time either as a graph or as a table the results of each of your metrics.

### View Phase Verification

To see your phase verification, go to the relevant tab in the Rollouts page in the console.

<img src="/ocean-cd/_media/verifications-01.png" />

You can use the actions in the 3-dot menu at any time during the verifications no matter what failure policies you have set.

## Verification Results

The verification results possible are described below.

### Passed

A metric is passed when the success condition has been met.

### Failed

A metric is failed when either of the failure condition consecutiveErrorLimit or failure limit has been met.

### Inconclusive

A metric is inconclusive when it has reached the inconclusiveLimit parameter. An inconclusive metric indicates that the run was neither successful nor failed.

You can encounter an inconclusive metric under the following conditions:

1. You set both failure and success conditions. In this case, the inclusive verification would lie in any result found between the two.

For example:  

`Failure limit: result < 10`     
`Success limit: result > 30`

In this case, the inconclusive range would be from 10 to 30.

2. You don’t set any failure or success conditions. In this case, any result would be inconclusive.

## Failure Policy

In the event the verification shows a failure, the Abort failure policy will be activated.

## What’s Next?

Learn how to see the real-time progress in the [Detailed Rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
