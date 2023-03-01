# Detailed Workload

This page describes how you can view the history of a workload and provides information about rollouts of the workload that may require your attention.

To view the detailed workload, click the workload name in the [Workloads](ocean-cd/tutorials/view-workloads/) page. A workload name becomes a hyperlink the moment the SpotDeployment has been created. If no rollout has been triggered, the first launch of pods is still considered as revision number 01.  

## Revision History

The Revision History provides a running history of the versions that have been deployed. The revision history includes the date of the update, the rollout image, its revision ID, and its rollout status (successful, rolled back, canceled, and paused).

<img src="/ocean-cd/_media/detailed-workload-1.png" />

## Statuses

The revision history provides information about the outcome of each rollout. In addition, the history uses labels to indicate desired and live versions and whether a workload has been degraded. The labels include:

* **Desired**: The latest version you have applied in your SpotDeployment that you want to view.  

* **Live**: The current version that is considered stable.

* **Degraded**: Indicates that your latest SpotDeployment rollout was rolled back. The live version is the stable version and the desired version is the canary version.

In most cases, the desired and the live versions are the same. The version you want to see running (desired) is the actual running version (live).   

However, there can be cases where they do not correspond. This occurs when a workload is in a degraded state.  

A degraded status may easily be removed either by applying your SpotDeployment with the details of your live version or by triggering a whole new rollout with a new version.  

<img src="/ocean-cd/_media/detailed-workload.png" />

## Rollout Trend

This area provides information regarding all of the finished rollouts in your workload. It presents the reasons for the success or failure of each of your rollouts.  

* Manual Intervention: Any rollout that was manually rolled back using the console actions.
* Kubernetes Error: Any rolled back rollout due to Kubernetes errors encountered.
* Metric Failure: Any rolled back rollout due to verification failures.

<img src="/ocean-cd/_media/detailed-workload-2.png" />

You will be able to use filters to pinpoint your rollout results.

<img src="/ocean-cd/_media/detailed-workload-3.png" />

## What’s Next?

If you are not already an [Ocean](ocean/) user, learn how to use Ocean to automate your cloud infrastructure for containers.
