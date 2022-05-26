<meta name="robots" content="noindex">

# Ocean CD Overview

Ocean CD focuses on the most painful aspects of modern application delivery, giving developers the freedom to push code with confidence while DevOps easily maintain governance and SLOs.

Ocean CD provides DevOps and Infrastructure teams with out of the box processes to reimplement and share complex and mission critical pieces of CD across different environments, such as progressive delivery and verification of the software deployments. Service owners are able to promote service changes to production without code or re-inventing deployment strategies. Developers are able to commit with confidence, now that the deployment phases are managed and visible.

## Ocean CD Functionality

Spot has built a developer-centric, Kubernetes-native solution that addresses the most significant CD challenges. Ocean CD simplifies the release process, eliminating the manual steps of the most popular market solutions, and provides full support of progressive delivery with automated application rollout and management. This includes granular visibility and intelligence into the rollout process.

Ocean CD provides a central place to observe the deployment (e.g., state, progress, and resources). These visibility features allow quick identification of issues during and after the deployment process and ensure reliability at scale.

You will set up external verifications, the method Ocean CD uses to integrate your unique test outcomes as part of an orchestrated release process, and define webhook API notifications to communicate between Ocean CD and your external DevOps related tools.

Ocean CD performs automated Rollback, a mission critical feature not covered out of the box by Kubernetes. You will be able to define the failure policy which determines the type of rollback that will be employed.

## How it Works

Ocean CD resides within Kubernetes and communicates with Spot to connect all parts of the delivery pipeline. The Ocean CD architecture and API enable a simple and secured installation that seamlessly fits into any existing environment. CI pipelines, Jenkins jobs, and other events before deployment to the cluster remain in place and untouched. With one simple command in the Kubernetes cluster, DevOps engineers can install the Ocean CD Controller and gain the SaaS logic and interface. As a multi-cluster product, Ocean CD enables you to track all the organizational clusters in which the controller is installed using one central dashboard.

<img src="/ocean-cd/_media/ocean-cd-overview-01.png" />

To automate deliveries with Ocean CD, you will set up three basic types of entities:

- A Microservice, which is a logical object that binds a Kubernetes deployment with the respective Ocean CD rollout spec (based on label selectors). _In other words, the microservice object you define tells Ocean CD about a Kubernetes deployment of yours, making it a managed workload._
- An Environment, which is a logical object that represents the target inside the cluster to which a microservice will be deployed, based on Ocean CD rollout spec. _When you define an environment object, you tell Ocean CD about a required destination for a rollout._
- A Rollout Spec - An Object that connects between a Microservice and its target Environment and includes the logic that Ocean CD will use in order to manage the rollout process (deployment strategy, verifications, failure policies, notifications types, and webhook APIs). _When you create a rollout spec, you match a microservice to an environment and configure the various options of how that rollout will take place._

The Ocean CD Controller detects every applied deployment (using an admission webhook) with the required changes in your Kubernetes cluster. Ocean CD controller checks the deployment labels and namespace.  
Whenever there is a match with a rollout spec that includes a microservice with matching labels and environment that targets the deployment namespace, then the SaaS will instruct the controller on the actions that need to be automatically executed.

This process enables full automation of the rollout, with verification and rollback, including monitoring and tracking of the deployment.

## Putting it all Together

As shown in the illustration below, Ocean CD fits right into your Cloud Kubernetes environment with:

- Your service provider (e.g., AWS, Google Cloud or Microsoft Azure) providing your cloud layer
- Spot Ocean providing container management and numerous optimization features in your infrastructure layer
- Ocean CD providing visibility, deployment automation, and continuous verification at the application level

You use the Kubernetes orchestrator of your choice (e.g., EKS, AKS, GKE, KOPS or others).

<img src="/ocean-cd/_media/ocean-cd-overview-02.png" />

When you use Ocean and Ocean CD together, you gain a full kubernetes backend that takes care of both application delivery and infrastructure optimization, all accessible from a single console.

### Fits into my Pipeline

CI pipelines, Jenkins jobs, and other processes before deployment to the cluster remain in place and untouched. With just a few clicks, DevOps engineers can install Ocean CD and take control of all delivery phases within Kubernetes.

### Comfortable with GitOps

GitOps architecture is considered an initiator that applies a change to the Kubernetes cluster, just like CI/CD pipelines or CI jobs. The only difference is that the deployment event is triggered by Git. So GitOps initiates the change event in the cluster, and Ocean CD knows to identify the event and manage it end-to-end.

### Works over Multiple Environments

An Ocean CD microservice may include multiple rollout configurations, and each rollout can trigger deployment into different environments. That means you can create a fully automated deployment process over multiple environments with a couple of clicks.

## What’s Next?

Learn more about [Getting Started](ocean-cd/getting-started/) with Ocean CD.
