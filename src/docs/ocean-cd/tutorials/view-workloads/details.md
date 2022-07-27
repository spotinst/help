# Detailed Workload

The detailed workload page provides information about the history of the workload and provides information about rollouts of this workload that may require your attention.

To view the detailed workload, click the Workload Name in the [Workloads](ocean-cd/tutorials/view-workloads/) page. A workload name becomes clickable at the moment the SpotDeployment has been created. The launching of the first pods (although no rollout has yet become triggered) will be considered as revision number 01.

<img src="/ocean-cd/_media/tutorials-detailed-workload-01.png" />

## Revision History

The Revision History provides a running history of the versions that have been deployed, including the date of the update, the rollout image, its revision ID, and its rollout status (successful, rolled back, canceled, and paused).

<img src="/ocean-cd/_media/tutorials-detailed-workload-02.png" width="250" />

### Statuses

The revision history provides information about the outcome of each rollout. In addition, the history uses labels to indicate desired and live versions and whether a workload had been degraded. The labels include:
- Desired: The latest version you have applied in your SpotDeployment. The one you wish to see running.
- Live: The currently running version. The one you consider as stable.
- Degraded: Indicates that your latest SpotDeployment rollout was rolled back. Your live version would be your stable version, and the desired would be the canary one.

In most cases, the Desired and the Live versions will be the same. The one you wish to see running (desired) will be the actual running one (live).

However there may be cases where they do not correspond. Such use cases occur when your workload is in a degraded state.

A degraded status may easily be removed either by applying your SpotDeployment with the details of your live version or by triggering a whole new rollout with a new version.

<img src="/ocean-cd/_media/tutorials-detailed-workload-021.png" />

## What’s Next?

If you are not already an [Ocean](ocean/) user, learn how to use Ocean to automate your cloud infrastructure for containers.
