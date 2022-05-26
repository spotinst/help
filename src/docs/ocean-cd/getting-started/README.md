<meta name="robots" content="noindex">

# Get Started with Ocean CD

To get started with Ocean CD, you will need to install the Ocean CD Operator and migrate a workload. The information below walks you through these procedures using the Spot console.

In addition, this page provides alternative procedures for installing the Operator with Kubectl or Helm, and sample templates for using different traffic managers.

## Install the Operator using Spot Console

The procedure below describes how to install the Ocean CD Operator using the Spot console.

### Prerequisite

- A Kubernetes cluster running in AWS, Azure or GCP

### Get Started

Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

### Add Cluster

When the Add Cluster popup appears, complete the procedure below.

<img src="/ocean-cd/_media/getting-started-n02.png" />

1. Complete the information below.
   - Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
   - [Argo Rollout Installation](): Ocean CD dynamically generates and manages Argo rollout manifests. The installation needs to know if you already have Argo installed on your computer. In the dropdown, select the option that applies to you.
   - Click Download YAML. When you click Download YAML, a YAML file will be downloaded to your computer, and a new row will appear in the Clusters list. If you would like to customize features or [flags]() prior to the installation, you may do so by changing your downloaded YAML file.

<img src="/ocean-cd/_media/getting-started-n03.png" />

2. Apply the YAML to your machine. The Ocean CD operator will be installed in the cluster, and an additional row will appear in the cluster table with initial information about the cluster and the controller.

<img src="/ocean-cd/_media/getting-started-n04.png" />

> Note: Once you have downloaded the YAML, the new row will remain with partial information for 10 minutes. If this time has elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

You are now ready to migrate your workload.

## Migrate a Workload using the Console

The procedures below describe how to migrate a Deployment to a SpotDeployment. This will enable Ocean CD to manage the deployments that you migrate. The migration includes the creation of the RolloutSpec and Strategy entities.

The migration does not delete your original deployment. If there are any resources that you do not want to keep, you will need to delete them manually.

You can also migrate your workload using the [Ocean CD API]().

### Prerequisites

- A Kubernetes cluster running in AWS, Azure or GCP.
- An Ocean CD Operator running in your cluster. Without the Operator, Ocean CD is not able to see resources running the cluster.

### Get Started

1. Under Ocean CD in the left sidebar, go to Workloads. There will be found a list of all of your deployments.
2. Hover over the Deployment to migrate, and click Migrate on the right side of the row.

<img src="/ocean-cd/_media/getting-started-n05.png" />

3. The Workload Migration Flow appears to give you an overview of the migration steps.

<img src="/ocean-cd/_media/getting-started-n06.png" />

Throughout the process, Ocean CD performs internal validations. At each step, Ocean CD lets you know if a misplaced configuration is found and banners pop up with information you can use.

### Migrate

Complete the steps below. When you click Create, Ocean CD saves and applies your  RolloutSpec and Strategy entities. Only the SpotDeployment YAML needs to be applied manually.

1. When the SpotDeployment CRD appears, you may copy, edit, and apply it to your Kubernetes cluster. If you do not need to make any changes to the CRD, just click Next and go on to the next step.

   If you decide not to insert the namespace directly into the SpotDeployment, you will need to add it in your Apply command.

<img src="/ocean-cd/_media/getting-started-n07.png" />

2. Edit the [strategy]() and click Next. If you already have a strategy defined, you can just click Skip.

<img src="/ocean-cd/_media/getting-started-n08.png" />

3. Edit the template for the [RolloutSpec]() Choosing a [traffic manager]() is optional. If you would like to specify a traffic manager, choose one from the dropdown list. When you choose a traffic manager, Ocean CD will populate the template automatically with the necessary traffic manager attributes. If you do not select a traffic manager, Ocean CD will use the Kubernetes default traffic methods based on replicas. When you are finished editing, click Create.

<img src="/ocean-cd/_media/getting-started-n09.png" />

## Migrate a Workload using the API

If you prefer to create your entities from scratch and migrate using the API, you can use this procedure. You will need to create a SpotDeployment YAML and the entities.

Complete the steps below:
1. Create a SpotDemployment YAML, create your entities, and apply them accordingly, using Postman or another tool you prefer. When you apply a SpotDeployment for the first time, Ocean CD creates the first replicas, but will not trigger a deployment.

   YAML templates and examples can be found in the [Ocean CD Public Repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/examples) or JSON syntax via the [Ocean CD API]().

2. Trigger a canary deployment, make one or more changes to the SpotDeployment you created and apply them.          

## Traffic Manager Reference

In the Migrate Workload procedure, you can choose a traffic manager in the RolloutSpec configuration, and Ocean CD will configure it automatically.

<img src="/ocean-cd/_media/getting-started-n10.png" />

This section shows templates for all of the traffic managers that Ocean CD supports. If you would like to use a template instead of the automatic configuration, you can use one of these.

### ALB: Instance Level

```yaml
strategy:
    canary:
      canaryService: rollouts-demo-canary
      stableService: rollouts-demo-stable
      trafficRouting:
        alb:
          stickinessConfig:
            enabled: true
            durationSeconds: 3600
          ingress: rollouts-demo-ingress
          servicePort: 80
          rootService: rollouts-demo-root
```

### ALB: IP Level

```yaml
strategy:
    canary:
      pingPong:
        pingService: rollouts-demo-canary
        pingService: rollouts-demo-stable
      trafficRouting:
        alb:
          stickinessConfig:
            enabled: true
            durationSeconds: 3600
          ingress: rollouts-demo-ingress
          servicePort: 80
          rootService: rollouts-demo-root          
```

### Ambassador

```yaml
strategy:
    canary:
      stableService: echo-stable
      canaryService: echo-canary
      trafficRouting:
        ambassador:
          mappings:
            - echo
```

### Istio: Host Level

```yaml
strategy:
    canary:
      canaryService: rollouts-demo-canary
      stableService: rollouts-demo-stable
      trafficRouting:
        istio:
          virtualServices:
          - name: rollouts-demo-vsvc1 # At least one virtualService is required
            routes:
            - primary # At least one route is required
          - name: rollouts-demo-vsvc2
            routes:
            - secondary # At least one route is required
```

### Istio: Subset Level

```yaml
strategy:
    canary:
      trafficRouting:
        istio:
          virtualServices:
          - name: rollouts-demo-vsvc # At least one virtualService is required
            routes:
            - primary # At least one route is required
          destinationRule:
            name: rollout-destrule    # required
            canarySubsetName: canary  # required
            stableSubsetName: stable  # required
```

### NGINX

```yaml
strategy:
    canary:
      canaryService: rollouts-demo-canary
      stableService: rollouts-demo-stable
      trafficRouting:
        nginx:
          stableIngress: rollouts-demo-stable
          additionalIngressAnnotations:
            canary-by-header: X-Canary
            canary-by-header-value: iwantsit         
```

### SMI

```yaml
strategy:
    canary:
      canaryService: rollouts-demo-canary
      stableService: rollouts-demo-stable
      trafficRouting:
        smi: {}
```

### Without Traffic Manager

If a traffic manager is not explicitly configured, Ocean CD by default uses Kubernetes traffic methods based on replicas. You only need to add the service names for the Canary and Stable versions as shown in the template below.

```yaml
traffic:
 stableService: < >
 canaryService: < >
```

## What’s Next?

Learn about viewing the [list of rollouts]() and the information provided in the [detailed rollout]() page.
