# Detailed Rollout

The Detailed Rollout page provides information of the rollouts that are triggered by Ocean CD. To view a detailed rollout page complete the following steps:

1. Click the menu on the left and choose Rollouts.  
2. Click the rollout ID in the Rollouts table.  

The rollout details are presented in the following manner:

* Summary Line
* Rollout Phases, Statuses and Actions
* Application View
* Rollout Details

## Summary Line

<img src="/ocean-cd/_media/tutorials-detailed-rollout-02.png" />

The summary line includes the following information:
- Version type: Refers to the previous and new version configured.
- Image: Shows the current image and the image being rolled out.
- Kubernetes service: Displays the name of the services used for the rollout. 
- Traffic split: The percent of traffic exposed to the stable version and the Canary version.
- Replicas: A graphical representation of the number of available replicas running the stable version and the number of replicas running the Canary version. The icons also show the status of each replica.

## Rollout Phases, Statuses and Actions

This section shows the progress of the rollout and provides information about each of its phases.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-03.png" width="180" />

### Types of Statuses of Phases  

#### Initialization and Deallocation of Pods

The console displays updates of pods that are in initialization processes and that are deallocated. Rollouts will not be completed and phase actions will not be triggered until these processes are finished.  

#### Initialization

<img src="/ocean-cd/_media/tutorials-detailed-rollout-10.png" />

#### Deallocation

<img src="/ocean-cd/_media/tutorials-detailed-rollout-11.png" />

### Failures

Updates of failed phases are sent in the console and they enable you to easily understand the status and the steps undertaken.  

**Failure Types**

* **Kubernetes failures**: Such errors include CrashLoop pod status, ImageLoop, Liveness Probe Failure, and others. In these cases, Ocean CD triggers a rollback action once the progressDeadlineSeconds are over, regardless of the failure policy set.

* **Verification failures**: These failures occur if the metrics set in your verification templates fail. The way Ocean CD responds to this type of failure, depends on the failure policy set in your RolloutSpec. Learn more about the [verifications](ocean-cd/concepts-features/verifications).

* **Verification data not received**: These failures occur when there is lack of communication between the monitoring tool or a misconfiguration in the verification template and the verification provider. The way Ocean CD responds to this type of failure depends on the failure policy set in your RolloutSpec.  

* **Rollouts rolled back due to manual intervention**: This occurs if you choose to manually roll back the rollout.

### Paused Status (Phase Level)

Throughout a rollout, Ocean CD indicates when and how long a phase is in a paused status. This pause is the direct consequence of the pause status set in your strategy prior to the rollout.  

#### Pause Without a Predefined Window

When a pause without a predefined window occurs, the phase turns into a paused status, and its overall rollout status becomes visible in the list of rollouts in the Rollouts page and in all rollout cards (i.e., in the Summary Line).  

When a predefined window hasn’t been configured in your strategy prior to the rollout, the pause continues until you choose an action that ends the pause.

You can take the following actions at any time:  

* Resume
* Roll Back  

#### Pause With a Predefined Window  

When a pause with a predefined window occurs, the phase turns to a paused status until the predefined window configured in the strategy entity is completed. After the window, the rollout moves to the next phase without any further action required.  

### Dropped

Phases are considered as dropped, if they were not performed at all. For example during a roll back at an early stage, Ocean CD rolls back immediately to the previous version, without performing any of the left phases.

### Canceled

Ocean CD allows the triggering of a new rollout, while another rollout is already running. This action would consider any phases of the overridden rollout to be canceled.  

### Type of Actions in a Rollout:  

Click the three dots at the top of the Rollout Phases panel at any time to start one of the following actions:

* **Promote**: Promote one phase to the next.
* **Promote All**: Promote a phase to the end of the rollout, triggering success.
* **Pause Rollout**: Pause a full rollout. Once the rollout is resumed, it restarts the  phase where it left off.

<img src="/ocean-cd/_media/tutorials-detailed-rollout-07.png" />

> Tip: This action is different from the action that you set in the strategy and does not behave in the same manner. Once you have chosen the action, the entire rollout (and not only the phase) is paused, and remains so as long as it is not promoted or rolled back.

* **Roll Back**: The rollout is terminated and the previous version (i.e., Stable) is restored.  
* **Retry**: Retry your full rollout. Available only when a rollback is completed and is applicable to the last SpotDeployment only.   

## Application View

The Application view provides information about the Kubernetes layer and the CRD differences. Each of the views also provides tools to export the data and copy to the clipboard.  

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
