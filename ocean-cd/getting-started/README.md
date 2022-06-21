<meta name="robots" content="noindex">

# Get Started with Ocean CD

To get started with Ocean CD, you will need to install the Ocean CD Operator and migrate a workload. The information below walks you through these procedures using the Spot console.

## Install the Operator

The procedure below describes how to install the Ocean CD Operator using the Spot console. It is also possible to [install the Operator using the API or Helm](ocean-cd/getting-started/install-operator-using-API-or-helm).

### Prerequisite

- A Kubernetes cluster running in AWS, Azure or GCP
- [OLM installation](ocean-cd/getting-started/install-operator-using-API-or-helm?id=prerequisite)

### Get Started

Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

### Add Cluster

You can install the operator using either a [YAML](ocean-cd/getting-started/?id=YAML) file or using [HELM](ocean-cd/getting-started/?id=HELM).

#### YAML

When the Add Cluster popup appears, complete the procedure below.

<img src="/ocean-cd/_media/getting-started-n02a.png" width="440" />

1. Complete the information below.
   - Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
   - [Argo Rollout Installation](ocean-cd/?id=argo-rollouts-as-an-engine): Ocean CD dynamically generates and manages Argo rollout manifests. The installation needs to know if you already have Argo installed on your computer. In the dropdown, select the option that applies to you.
   - Click Download YAML. When you click Download YAML, a YAML file will be downloaded to your computer, and a new row will appear in the Clusters list. If you would like to [customize features or flags](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/oceancd-operator/values.yaml) prior to the installation, you may do so by changing your downloaded YAML file.

<img src="/ocean-cd/_media/getting-started-n03.png" />

2. Apply the YAML to your machine. The Ocean CD operator will be installed in the cluster, and an additional row will appear in the cluster table with initial information about the cluster and the controller.

<img src="/ocean-cd/_media/getting-started-n04.png" />

> **Tip**: Once you have downloaded the YAML, the new row will remain with partial information for 10 minutes. If this time has elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

You are now ready to migrate your workload.

#### HELM

When the Add Cluster popup appears, complete the procedure below.

<img src="/ocean-cd/_media/getting-started-n041.png" width="440" />

1. Click HELM and complete the information below:
   - Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
   - Token: The API Spot Token pre-generated via our console
   - Argo Rollout Installation (link to Argo Installation in Overview page): Ocean CD dynamically generates and manages Argo rollout manifests. The installation needs to know if you already have Argo installed on your computer. In the dropdown, select the option that applies to you.

> Tip: The See Commands button becomes active only after all three parameters are filled in.

2. Run all of the commands provided into your Kubernetes cluster.

<img src="/ocean-cd/_media/getting-started-n042.png" width="440" />

Once you have finished running all of the commands, you will be able to see your cluster in the Cluster Settings table.

You are now ready to migrate your workload.

## Migrate a Workload

The procedures below describe how to migrate a Deployment to a SpotDeployment. This will enable Ocean CD to manage the deployments that you migrate. The migration includes the creation of the RolloutSpec and Strategy entities.

The migration does not delete your original deployment. If there are any resources that you do not want to keep, you will need to delete them manually.

For further information on the syntax of our entities, see examples in the [Ocean CD public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples)

You can also migrate your workload using the [Ocean CD API](ocean-cd/getting-started/migrate-using-api) and manually creating your SpotDeployment CRD. Just copy the deployment and change its kind. Then send API requests to create a Strategy and a RolloutSpec using the Ocean CD API.

### Prerequisites

- A Kubernetes cluster running in AWS, Azure or GCP.
- An Ocean CD Operator running in your cluster. Without the Operator, Ocean CD is not able to see resources running the cluster.

### Get Started

1. Under Ocean CD in the left sidebar, go to Workloads. You will see a list of all of your deployments.
2. Hover over the deployment to migrate, and click Migrate on the right side of the row.

<img src="/ocean-cd/_media/getting-started-n05.png" />

3. The Workload Migration Flow appears to give you an overview of the migration steps.

<img src="/ocean-cd/_media/getting-started-n06.png" width="400" />

Throughout the process, Ocean CD performs internal validations. At each step, Ocean CD lets you know if a misplaced configuration is found and banners pop up with information you can use.

### Migrate

Complete the steps below. When you click Create, Ocean CD saves and applies your  RolloutSpec and Strategy entities. Only the SpotDeployment YAML needs to be applied manually.

1. When the SpotDeployment CRD appears, you may copy, edit, and apply it to your Kubernetes cluster. If you do not need to make any changes to the CRD, just click Next and go on to the next step.

> **Tip**: Any first apply of your SpotDeployments will not trigger a rollout. Only the pods will be created. To trigger a rollout with the entities of your choice, you need to apply additional changes to the SpotDeployment (see step 4).

If you decide not to insert the namespace directly into the SpotDeployment, you will need to add it in your Apply command.

<img src="/ocean-cd/_media/getting-started-n07.png" />

2. Edit the [strategy](ocean-cd/?id=strategy) and click Next. If you already have a strategy defined, you can just click Skip.

<img src="/ocean-cd/_media/getting-started-n08.png" />

3. Edit the template for the [RolloutSpec](ocean-cd/?id=rolloutspec). Choosing a traffic manager is optional. If you would like to [specify a traffic manager](ocean-cd/getting-started/traffic-manager-reference), choose one from the dropdown list. When you choose a traffic manager, Ocean CD will populate the template automatically with the necessary traffic manager attributes. If you do not select a traffic manager, Ocean CD will use the Kubernetes default traffic methods based on replicas. When you are finished editing, click Create.

<img src="/ocean-cd/_media/getting-started-n09.png" />

5. Add changes to your SpotDeployment container spec and apply. This time a new rollout will be created and triggered.

## What’s Next?
- Learn how to [install the Operator using the API or Helm](ocean-cd/getting-started/install-operator-using-API-or-helm).
- Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
