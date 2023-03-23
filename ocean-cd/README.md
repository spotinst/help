# Ocean CD Overview

Ocean CD focuses on the most painful aspects of modern application delivery, giving developers the freedom to push code with confidence while DevOps easily maintain governance and SLOs.

Ocean CD provides DevOps and Infrastructure teams with out of the box processes to reimplement and share complex and mission critical pieces of CD across different environments, such as canary deployments. Service owners are able to promote service changes to production without code or re-inventing deployment strategies. Developers are able to commit with confidence, now that the deployment phases are managed and visible.

## How it Works

Ocean CD resides within Kubernetes and communicates with Spot to connect all parts of the delivery pipeline. The Ocean CD architecture and API enable a simple and secured installation that seamlessly fits into any existing environment. CI pipelines, Jenkins jobs, and other events before deployment to the cluster remain in place and untouched. With one simple command in the Kubernetes cluster, DevOps engineers can install the Ocean CD Operator and gain the SaaS logic and interface. As a multi-cluster product, Ocean CD enables you to track all the organizational clusters in which the controller is installed using one central dashboard.

<img src="/ocean-cd/_media/overview-01.png" width="450"/>

To automate deliveries with Ocean CD, you will perform the following basic steps:
- Create a SpotDeployment CRD: Ocean CD replacement of a Deployment Resource
- Define Strategy: An entity including a definition of phases that manage
the way your workload changes are being exposed in the desired
cluster and namespace
- Define RolloutSpec: An entity including the CD strategy and traffic definitions
for the selected SpotDeployment

The Ocean CD Operator detects every applied SpotDeployment, monitors all of your resources, and manages rollouts based on the SaaS logic. Whenever the SpotDeployment is applied, the SaaS will trigger a rollout.

This process enables full automation of the rollout, and will support a manual failure policy should you choose to make use of it. Throughout a rollout, automatic traffic management, rollbacks, and informative errors (if needed)  will be displayed. Ocean CD will include full monitoring and tracking of the deployment.

## Entities and Architecture

Ocean CD makes use of a set of fundamental entities for building a rollout. Examples of fundamental entities are Strategy, RolloutSpec, Verification Template, and Verification Provider. These are described in detail in the [Entities](ocean-cd/concepts-features/entities) page.

### Ocean CD Operator

The Ocean CD Operator resides in a pod in your Kubernetes cluster and provides the following major functions:
- Detects changes that are applied to SpotDeployments
- Continuously fetches from the SaaS operations to execute
- Reports events to the SaaS that are relevant to the well functioning of the Ocean CD processes, such as changes in the cluster resources

Installation of the Operator is described in the [Getting Started](https://docs.spot.io/ocean-cd/getting-started/?id=install-the-operator-using-spot-console) page.

### SpotDeployment CRD

Ocean CD creates its own CRD (i.e., the SpotDeployment CRD) to replace the Kubernetes Deployment Resource. By creating a CRD, Ocean CD pinpoints in an efficient manner which resources are managed by the Operator (using the SaaS logic).

Once the SpotDeployment CRD is applied to the Kubernetes cluster, the Operator reports to the SaaS to start a rollout with all of the needed data.

### Argo Rollouts as an Engine

[Argo Rollouts](https://argoproj.github.io/argo-rollouts/) is a progressive deployment strategies engine, but it's not a product that can act at scale. While Argo Rollouts get the desired rollout configuration and have strong capabilities of running it inside the cluster, Ocean CD manages the configurations which make it more scalable.

Ocean CD recognizes the advantages of Argo rollouts as an engine for CD strategies and uses it accordingly to manage and enable it as a scalable CD product providing the following benefits:
- From zero to canary in production readiness in minutes
- Easy adjustment of multiple deployment pipelines
- Re-usable canary strategies for all services and environments
- Validations and checkpoints during canary setup and ongoing
- Multi-cluster management in one place
- State of art UI for ongoing overview of processes and analytics
- Central troubleshooting

When an updated SpotDeployment is applied to the cluster, the Ocean CD Operator identifies it and gets back from the SaaS the desired RolloutSpec (i.e., the desired Argo Rollout CRD). You do not need to deal with Argo rollouts, rather only with Ocean CD CRDs and strategies that are reusable and can be easily adjusted over multiple services and clusters.

You can compare Ocean CD and Argo Rollouts to the way a Kubernetes deployment manages replica sets. While Argo rollouts get the desired rollout configuration and run it inside the cluster, Ocean CD manages the configurations, making the cluster much more scalable. Just as a Kubernetes deployment watches replica sets and manages their life cycle, Ocean CD manages the attributes and behaviors of multiple Argo rollout instances.

<img src="/ocean-cd/_media/overview-02.png" />

### Argo CD and Ocean CD

Argo CD has been provided with the ability to synchronize directly with SpotDeployment CRDs. If you are an Argo CD user, you will be able to utilize in real time the update of your Argo CD statuses: paused, degraded, healthy, and suspended.

## Putting it all Together

Ocean CD fits right into your Cloud Kubernetes environment with:
- Your service provider (e.g., AWS, Google Cloud or Microsoft Azure) providing your cloud layer
- Spot Ocean providing container management and numerous optimization features in your infrastructure layer
- Ocean CD providing visibility, deployment automation, and continuous verification at the application level

You use the Kubernetes orchestrator of your choice (e.g., EKS, AKS, GKE, kOps or others).

When you use Ocean and Ocean CD together, you gain a full Kubernetes backend that takes care of both application delivery and infrastructure optimization, all accessible from a single console.

### Fits into my Pipeline

CI pipelines, Jenkins jobs, and other processes before deployment to the cluster remain in place and untouched. With just a few clicks, DevOps engineers can install Ocean CD and take control of all delivery phases within Kubernetes.

### Comfortable with GitOps

GitOps architecture is considered an initiator that applies a change to the Kubernetes cluster, just like CI/CD pipelines or CI jobs. The only difference is that the deployment event is triggered by Git. So GitOps initiates the change event in the cluster, and Ocean CD knows to identify the event and manage it end-to-end.

### Works over Multiple Environments

An Ocean CD microservice may include multiple rollout configurations, and each rollout can trigger deployment into different environments. That means you can create a fully automated deployment process over multiple environments with a couple of clicks.

## Documentation Map

- Overview
- [Getting Started](ocean-cd/getting-started/)
  - [Install using Operator API or Helm](ocean-cd/getting-started/install-operator-using-API-or-helm)
  - [Migrate using API or CLI](ocean-cd/getting-started/migrate-using-api)
  - [Traffic Manager Reference](ocean-cd/getting-started/traffic-manager-reference)
  - [End-to-end Setup](ocean-cd/getting-started/end-to-end)
- Concepts & Features
  - [Entities](ocean-cd/concepts-features/entities)
  - [Verifications](ocean-cd/concepts-features/verifications)
- Tutorials
  - [View Settings](ocean-cd/tutorials/view-settings/)
  - [View Rollouts](ocean-cd/tutorials/view-rollouts/)
    - [Detailed Rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout)
    - [Troubleshoot a Rollout](ocean-cd/tutorials/view-rollouts/troubleshoot)
  - [View Workloads](ocean-cd/tutorials/view-workloads/)
