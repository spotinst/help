<meta name="robots" content="noindex">

# Ocean CD Overview

Ocean CD focuses on the most painful aspects of modern application delivery, giving developers the freedom to push code with confidence while DevOps easily maintain governance and SLOs.

Ocean CD provides DevOps and Infrastructure teams with out of the box processes to reimplement and share complex and mission critical pieces of CD across different environments, such as progressive delivery and verification of the software deployments. Service owners are able to promote service changes to production without code or re-inventing deployment strategies. Developers are able to commit with confidence, now that the deployment phases are managed and visible.

## Ocean CD Functionality

Spot has built a developer-centric, Kubernetes-native solution that addresses the most significant CD challenges. Ocean CD simplifies the release process, eliminating the manual steps of the most popular market solutions, and provides full support of progressive delivery with automated application rollout and management. This includes granular visibility and intelligence into the rollout process.

Ocean CD provides a central place to observe the deployment (e.g., state, progress, and resources).

## How it Works

Ocean CD resides within Kubernetes and communicates with Spot to connect all parts of the delivery pipeline. The Ocean CD architecture and API enable a simple and secured installation that seamlessly fits into any existing environment. CI pipelines, Jenkins jobs, and other events before deployment to the cluster remain in place and untouched. With one simple command in the Kubernetes cluster, DevOps engineers can install the Ocean CD Operator and gain the SaaS logic and interface. As a multi-cluster product, Ocean CD enables you to track all the organizational clusters in which the controller is installed using one central dashboard.

To automate deliveries with Ocean CD, you will set up three basic types of entities:
- A SpotDeployment CRD: Ocean CD replacement of a Deployment Resource
- A Strategy: An entity including a definition of phases that manage
the way your workload changes are being exposed in the desired
cluster and namespace
- A RolloutSpec: An entity including the CD process description
for the selected workload

The Ocean CD Operator detects every applied SpotDeployment. Ocean CD operator monitors all of your resources: Pods, ReplicaSets, and Events.
Whenever the SpotDeployment is applied, the SaaS will trigger a rollout.

This process enables full automation of the rollout, and will support a manual failure policy should you choose to make use of it. Throughout a rollout, automatic traffic management, rollbacks, and informative errors (if needed)  will be displayed. Ocean CD will include full monitoring and tracking of the deployment.

## Entities and Architecture

For each deployment, Ocean CD makes use of a rolloutSpec and a strategy. You will use these entities to configure the specific behavior of the deployment.

### RolloutSpec

The Ocean CD rollout spec includes the CD process description for the selected workload. The structure of a rolloutSpec is shown in the example below, which you may use as a template for creating your own rolloutSpec.

Each time a workload is applied to the cluster, Ocean CD will use the rolloutSpec logic you defined for that workload to run the CD process. The structure of a rolloutSpec is shown in the example below, which you may use as a template for creating your own rolloutSpec.

```yaml
name: RolloutSpec-OceanCD
spotDeployment:
  clusterId: cluster-name
  namespace: mynamespace
  name: nginx-deployment
strategy:
  name: Strategy-OceanCD
traffic:
  stableService: rollouts-demo-stable
  canaryService: rollouts-demo-canary
failurePolicy:
  action: abort
```
​
The attributes of the rolloutSpec are described below.
- Name: Name of the rolloutSpec. Must be unique.
- SpotDeployment.ClusterId: Cluster Name
- SpotDeployment.Namespace: Cluster Namespace
- SpotDeployment.Name: CRD Name
- Strategy.name: Name of the Strategy. You may use an already created strategy and do not need to create a new one.
- Traffic: The [traffic manager]() you have chosen.
- FailurePolicy: The automatic action(s) OceanCD performs in case of a failure.

You can create your [rolloutSpec](ocean-cd/getting-started/) either in the Spot console or by using the [Ocean CD API]().

### Strategy

An Ocean CD strategy includes a definition of phases that manage the way your workload changes are exposed in the desired cluster and namespace.

Whenever your workload is applied to the cluster, Ocean CD uses the strategy as part of the rolloutSpec logic to run the CD process. The structure of a strategy is shown in the example below, which you may use as a template for creating your own strategy.

```yaml
name: Strategy-OceanCD
canary:
  steps:
  - name: My-first-phase
    setWeight: 20
    pause:
      duration: 2m
  - name: second-phase
    setWeight: 40
    pause: {}
  - name: third-phase
    setWeight: 80
    pause:
      duration: 1m
```

The attributes of a strategy are described below.
- Name: Name of the strategy. Must be unique.
- Steps.name: Optional. Name of the step.
- Steps.setWeight: Weight percentage of the step. The total of the weights must not exceed 100. If total weights are less than 100, Ocean CD will add on to the last phase until the total equals 100.
- Steps.pause.duration: Optional. The time in seconds, minutes, or hours that you may pause the step.

### Ocean CD Operator

The Ocean CD Operator resides in a pod in your Kubernetes cluster and provides the following major functions:
- Continuously fetches from the SaaS operations to execute
- Reports events to the SaaS that are relevant to the well functioning of the Ocean CD processes, such as changes in the cluster resources

Installation of the Operator is described in the [Getting Started]() page.

### SpotDeployment CRD

Ocean CD creates its own CRD (i.e., the SpotDeployment CRD) to replace the Kubernetes Deployment Resource. By creating a CRD, Ocean CD pinpoints in an efficient manner which deployments it manages.

Once the SpotDeployment CRD is applied to the Kubernetes cluster, the Operator reports to the SaaS to start a rollout with all of the needed data.

The Operator continues fetching data every five seconds to detect if any additional changes were applied to the cluster and reports to the Saas accordingly. In parallel, SaaS entities (such as RolloutSpec and Strategy) created either via API or in the console will be applied to the cluster.

### Argo Installations

When an updated SpotDeployment is applied to the cluster, the Ocean CD Operator identifies it and gets back from the SaaS the desired RolloutSpec (i.e., the desired Argo Rollout CRD). You do not need to deal with Argo rollouts, rather only with Ocean CD CRDs and strategies that are reusable and can be easily adjusted over multiple services and clusters.

You can compare Ocean CD and Argo rollouts to the way a Kubernetes deployment manages replica sets. While Argo rollouts get the desired rollout configuration and run it inside the cluster, Ocean CD manages the configurations, making the cluster much more scalable. Just as a Kubernetes deployment watches replica sets and manages their life cycle, Ocean CD manages the attributes and behaviors of multiple Argo rollout instances.

## Putting it all Together

Ocean CD fits right into your Cloud Kubernetes environment with:
- Your service provider (e.g., AWS, Google Cloud or Microsoft Azure) providing your cloud layer
- Spot Ocean providing container management and numerous optimization features in your infrastructure layer
- Ocean CD providing visibility, deployment automation, and continuous verification at the application level

You use the Kubernetes orchestrator of your choice (e.g., EKS, AKS, GKE, KOPS or others).

When you use Ocean and Ocean CD together, you gain a full Kubernetes backend that takes care of both application delivery and infrastructure optimization, all accessible from a single console.

### Fits into my Pipeline

CI pipelines, Jenkins jobs, and other processes before deployment to the cluster remain in place and untouched. With just a few clicks, DevOps engineers can install Ocean CD and take control of all delivery phases within Kubernetes.

### Comfortable with GitOps

GitOps architecture is considered an initiator that applies a change to the Kubernetes cluster, just like CI/CD pipelines or CI jobs. The only difference is that the deployment event is triggered by Git. So GitOps initiates the change event in the cluster, and Ocean CD knows to identify the event and manage it end-to-end.

### Works over Multiple Environments

An Ocean CD microservice may include multiple rollout configurations, and each rollout can trigger deployment into different environments. That means you can create a fully automated deployment process over multiple environments with a couple of clicks.

## Documentation Map

- [Getting Started](ocean-cd/getting-started/)
- [Tutorials](ocean-cd/tutorials/)
  - [View Settings](ocean-cd/tutorials/view-settings/)
  - [View Rollouts](ocean-cd/tutorials/view-rollouts/)
    - [Detailed Rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout)
  - [View Workloads](ocean-cd/tutorials/view-workloads/)
