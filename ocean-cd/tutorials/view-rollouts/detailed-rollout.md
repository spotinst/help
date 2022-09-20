<meta name="robots" content="noindex">

# Detailed Rollout

The Detailed Rollout page provides the details of a specific rollout. To view a detailed rollout page, click the row of the rollout in the Rollouts list on the [View Rollouts](ocean-cd/tutorials/view-rollouts/) page.

The top line of the page shows the name of the rollout (Inventory App in the example below), the rollout type, an icon indicating the rollout status, and the time and duration of the rollout.

At the top of the page, you will also see banners providing information and guidance about the rollout process as various events occur.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-01.png" />

The rollout details are presented in the following areas on the page.
- Summary Line
- Rollout Phases
- Application View
- Rollout Details

## Summary Line

Just above the summary line, you can see the cluster name, the namespace and the rollout ID.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-02.png" />

The summary line includes the following information:
- Rollout type: Shows the current rollout type (e.g., Canary in the example above) as compared to Stable, which is the current version running.
- Image: Shows the current image and the image being rolled out.
- Kubernetes service: Enables network access for a set of pods.
- Traffic split: The percent of traffic exposed to the stable version and the Canary version being rolled out.
- Replicas: A graphical representation of the number of available replicas running the stable version and the number of replicas running the Canary version. The icons also show the status of each replica.

## Rollout Phases & Statuses

This area shows the progress of the Canary version rollout and provides information about each phase of the rollout. The arrow at the top hides the Rollout phases area and expands the application view area.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-03.png" width="180" />

### Failures

Should any of your phases encounter a failure or enter a pause, the display will be updated accordingly, enabling you to easily understand the status and the steps you would need to take.

Ocean CD will behave in accordance with the potential failure policy or paused statuses set prior to the rollout.

### Failure Types

1. Kubernetes failures may always be encountered. These failures could include: CrashLoop pod status, ImageLoop, Liveness Probe Failure, and others. For failures like these, OceanCD will automatically trigger a rollback action once the progressDeadlineSeconds are over,  regardless of the failure policy set.
2. Verification Failures. These failures will only occur if the metrics set in your Verification templates were to fail. The way OceanCD replies to such failure, will be entirely dependent on the failure policy set in your RolloutSpec. Learn more about the [verifications](ocean-cd/concepts-features/verifications).
3. Rollouts rolled back due to manual intervention.

### Paused Status (Phase Level)

Throughout a rollout, Ocean CD will indicate when and for how long the phase will be in a paused status. This pause is the direct consequence of the pause status set in your strategy prior to the rollout.

#### Pause Without a Pre-Defined Window

For such cases, the phase will be in a paused status, and its overall status will be visible in the list of rollouts in the Rollouts page and in all rollout cards (i.e., in the Summary Line).

When no pre-defined window has been configured in your strategy prior to the rollout, the pause will continue up until you decide otherwise.

You will be able to take the following actions at any time:
- Resume
- Roll Back.

#### Pause With a Pre-Defined Window

For such cases, the phase will be in a paused status until the pre-defined window configured in the strategy entity is completed. After the window, the rollout will automatically move on to the next phase without any further action required.

### Initialization & Deallocation of pods

Ocean CD will update you when pods are in initialization processes and when pods are being deallocated. No rollouts will come to term and no phase actions will be triggered until these processes are completed.

#### Initialization

<img src="/ocean-cd/_media/tutorials-detailed-rollout-10.png" />

#### Deallocation

<img src="/ocean-cd/_media/tutorials-detailed-rollout-11.png" />

### Actions

At any time, you can click the three dots at the top of the Rollout Phases panel and initiate one of the actions.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-07.png" />

The following actions are available:
- Promote: Promote one phase to the next.
- Promote All: Promote a phase to the end of the rollout, triggering success.
- Pause Rollout: Pause a full rollout. Once the rollout is resumed, it will restart the phase where it left off.

> **Tip**: This action is not the same as the one you have set in your strategy and will not behave in the same manner. Once you have chosen it, the whole rollout (and not only the phase) will be paused, and it will remain as such as long as it is not promoted or rolled back.

- Roll Back: The rollout will be terminated and the previous version (i.e., Stable) will be restored.
- Retry: Available to you only once a rollback is completed and is applicable to the last SpotDeployment only. With this action you can retry your full rollout.

Whenever you click an action, you will be prompted to confirm before the action is actually taken.

### Rollout Cancelation

You can cancel a running rollout. Ocean CD supports a cancellation which provides you real-time status information including the newly created Rollout ID.

To cancel a rollout, just reapply the Spotdeployment running.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-09.png" width="450" />

## Application View

The Application view provides information about the Kubernetes layer and the CRD diff. Each of the views also provides convenient tools to export the data and copy to the clipboard.

### Kubernetes Events

The default view is by Kubernetes events as shown below.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-04.png" />

### Kubernetes Resources

This view shows the status breakdown per pod.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-05.png" />

### CRD Diff

This view shows the difference between the CRD of the rollout and the CRD of the previous desired state.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-06.png" />

## Rollout Details

To see the YAML files configured for a rollout, click Rollout Details on the upper right.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-08.png" />

In the Rollout Details, you will be able to see the complete Strategy, and RolloutSpec YAMLs.

## What’s Next?

Learn more about [viewing a workload](ocean-cd/tutorials/view-workloads/).
