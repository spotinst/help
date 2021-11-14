<meta name="robots" content="noindex">

# Granular Visibility

Ocean CD provides granular visibility on several levels and in different views. This includes a view at the cluster level, a view focusing on rollout events, and [detailed visibility per rollout](ocean-cd/features/granular-visibility/detailed-rollout-view).

The views described in this page are relevant once you set up the entities described in the [Getting Started](ocean-cd/getting-started/) page and have active rollouts.

## Cluster Level View

To see information at the cluster level, go to Ocean CD in the left menu tree and click Settings. The Settings page opens with the Clusters tab open. In the Clusters tab, you can track rollout activity per cluster as described in the [Getting Started](ocean-cd/getting-started) page.

<img src="/ocean-cd/_media/features-granular-visibility-01.png" />

## Rollouts View

To see this page, go to Ocean CD in the left menu tree and click Rollouts. The Rollouts page appears as shown below and includes two areas:
- Summary Line
- Rollouts List

### Summary Line

The tiles in the summary line include the following information:
- Managed Clusters Heartbeat: Number of clusters that provide a heartbeat out of all the connected clusters.
- Microservices: The number of microservices with active rollouts, managed by Ocean CD.
- Environments: The number of environments with active rollouts set up in Ocean CD
- Successful Rollouts: The number of successful rollouts per total number of rollouts attempted.

<img src="/ocean-cd/_media/features-granular-visibility-02.png" />

### Rollouts List

The Rollouts list provides information about each microservice rollout event for all clusters where an Ocean CD controller is installed. Each row represents a rollout event and includes the data described below.

- Rollout ID: A unique identifier for a rollout event. A Rollout ID is generated each time an initiator (described below) triggers a rollout event. To see more details about a particular rollout, click [Detailed Rollout View](ocean-cd/features/granular-visibility/detailed-rollout-view).
- Rollout Spec: An Ocean CD object that connects between a microservice and its target environment and includes the logic that Ocean CD uses to manage the rollout process.
- Microservice: An Ocean CD object that binds a Kubernetes deployment with the respective Ocean CD rollout spec, based on label selectors.
- Environment: An internal Ocean CD object that tells where each microservice is deployed. In other words, the environment is the destination of an Ocean CD rollout.
- Initiator: See below about [Initiator](ocean-cd/features/granular-visibility?id=initiator).
- Rollout State: See below about [Rollout State](ocean-cd/features/granular-visibility?id=rollout-state).
- Start: Rollout beginning time and date.
- Duration: Amount of time for the rollout to complete (for the entire rollout process, not only the Kubernetes rolling update).
- Version: See below about version and [version comparison](ocean-cd/features/granular-visibility?id=version-and-comparison).
- Namespace: As defined in the deployment manifest.
- Cluster ID: An Ocean CD object, as you provided in the cluster settings.
- Cloud provider: The name of the cloud provider in which the cluster is deployed.

> **Tip**: There may be additional information about these parameters in the Getting Started page and in the [Ocean CD APIs](https://docs.spot.io/api/#tag/Ocean-CD).

### Initiator
This parameter initiates a new rollout event (i.e., a new table entry). Ocean CD adds a new row when one of the following types of initiations occurs:
- Detection: A new microservice that is managed by Ocean CD is detected.
- Failure policy: This occurs following a failure policy activation of type New Rollout, deploying a previous version through all Ocean CD rollout phases.
- Manual: Following a manual user action on rollout that has been completed (rollback).

*Managed* means that Ocean CD has a rollout spec with settings that include:
- A microservice that has label selectors that match with part or all of the detected deployment labels.
- An environment that matches with the deployment target environment, based on namespace.

### Rollout State

The rollout state can be one of the following states:
- Success: The rollout process has been completed, and the required updates are in the desired environment after passing the Ocean CD logical rollout phases. A failure policy phase has not been activated during the rollout.
- In Progress: The rollout process has started. The last phase of the Ocean CD rollout has not been finished yet.
- Failed: The rollout process has been completed. A failure policy phase has been activated during the rollout.

The rollout states are also indicated with graphic icons.

### Version and Comparison

The version is taken from a special VersionLabelKey that you can add in the deployment manifest and is defined as part of the microservice settings. If the label does not exist, Ocean CD will present the image (taken from the Pod Template) under the version column.

The Live label is attached to version cells that represent the last deployed version of the microservice into a specific environment.

To see a version comparison, click the Version cell in the table. A popup will show a comparison of the selected rollout event microservice version to the previous version with the differences highlighted.

<img src="/ocean-cd/_media/features-granular-visibility-03.png" />

## What’s Next?

Learn more about a more detailed level of visibility in the [Detailed Rollout View](ocean-cd/features/granular-visibility/detailed-rollout-view).
