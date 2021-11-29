<meta name="robots" content="noindex">

# Detailed Rollout View

The Detailed Rollout View enables you to see a graphical representation of the live progress of a rollout and provides a historical view of rollout events so that you can go back and review the events after the rollout has been completed. When the rollout is completed, whether successfully or not, the rollout is saved for future overview and investigation of events.

To see the Detailed Rollout View of a rollout, do the following:

1. Click [Rollouts](ocean-cd/features/granular-visibility/?id=rollouts-list) in the left menu tree of the console. The Rollouts page appears.
2. In the Rollouts list, click the Rollout ID in the table. A page with the Detailed Rollout View for that rollout will appear.

The top of the page provides basic information about the rollout, and the major areas of this page include the:

- Rollout Flow Chart
- Rollout Phase Details
- Application View

<img src="/ocean-cd/_media/features-detailed-rollout-view-01.png" />

## Rollout Flow Chart

The flow chart illustrates the rollout phases that you defined in the rollout spec. By default, the chart includes the following phases:

- Rolling update: The green color and check mark indicate that this phase completed successfully and an arrow shows how the rollout was promoted to the next phase. During the phase completion there is also an indication of the rolling status of new pods.
- Finished: This phase includes the final microservice version following the rollout process completion. The completion of this phase can be either the desired rolled version (assuming a successful rollout), the last successful version (assuming an immediate rollback failure policy has been activated during the process), or a link to a new rollout process (assuming a rollback failure policy of type New Rollout has been activated during the process).

The Failure policy and [External Verification](ocean-cd/features/external-verifications) phases can also appear in the chart if you configured them as part of the [Rollout Spec](https://docs.spot.io/api/#operation/OceanCDRolloutSpecCreate) settings.

A Failure policy phase can be activated due to a Kubernetes rolling update failure or following a verification failure response or fallback response. A phase that has failed is indicated in red color and with an “x”.

<img src="/ocean-cd/_media/features-detailed-rollout-view-02.png" />

## Rollout Phase Details

When you click on a phase in the flow chart, a panel will appear on the right with the rollout phase details. Below is an example of information provided for the Rolling Update phase of a rollout.

<img src="/ocean-cd/_media/features-detailed-rollout-view-03.png" width="206" height="488" />

## Application View

Click Application View on the bottom left to get information at the Kubernetes and resource level. The different tabs provide the following types of information:

- Kubernetes Events: Real-time information about Kubernetes events.
- Kubernetes Resources: Real-time resource updates.
- Deployment YAML: Deployment manifest comparison of the new version that is being deployed vs. the old version. (Static document.)

<img src="/ocean-cd/_media/features-detailed-rollout-view-04.png" />

## What’s Next?

Learn more about the [Rollback](ocean-cd/features/rollback) feature.
