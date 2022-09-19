<meta name="robots" content="noindex">

# Get Started with Ocean CD

To get started with Ocean CD, you will need to install the Ocean CD Operator and migrate your workload. The information below walks you through these procedures using the Spot console.

## Install the Operator using the Console

The procedure below describes how to install the Ocean CD Operator using the Spot console.

If you do not want to use the console, you can [install the Operator using the API or Helm](ocean-cd/getting-started/install-operator-using-API-or-helm).

### Prerequisites

- A Kubernetes cluster running in AWS, Azure or GCP
- OLM installation
- Permissions from your CI tool to deploy new deployments into your clusters
- If you use permission lists or tools such as OPA, allow all of the images Ocean CD uses

### Get Started

Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

### Add Cluster

You can install the operator using either a [YAML](ocean-cd/getting-started/?id=YAML) file or using [HELM](ocean-cd/getting-started/?id=HELM).

#### YAML

When the Add Cluster popup appears, complete the procedure below.

<img src="/ocean-cd/_media/getting-started-n02a.png" width="440" />

1. Complete the information below.
   - Cluster Identifier: This is a logical identifier for your cluster which must be unique and have up to 30 alphanumeric characters without any spaces. You can choose any ID, and it does not need to be coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean.
   - [Argo Rollout Installation](ocean-cd/?id=argo-rollouts-as-an-engine): Ocean CD dynamically generates and manages Argo rollout manifests. The installation needs to know if you already have Argo installed on your computer. In the dropdown, select the option that applies to you.
   - Click Download YAML. When you click Download YAML, a YAML file will be downloaded to your computer, and a new row will appear in the Clusters list. If you would like to [customize features or flags](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/oceancd-operator/values.yaml) prior to the installation, you may do so by changing your downloaded YAML file.

<img src="/ocean-cd/_media/getting-started-n03.png" />

2. Apply the YAML to your machine. The Ocean CD operator will be installed in the cluster, and an additional row will appear in the cluster table with initial information about the cluster and the controller.

<img src="/ocean-cd/_media/getting-started-n04.png" />

> **Tip**: Once you have downloaded the YAML, the new row will remain with partial information for two minutes. If this time has elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

You are now ready to migrate your workload.

#### HELM

When the Add Cluster popup appears, complete the procedure below.

<img src="/ocean-cd/_media/getting-started-n041.png" width="440" />

1. Click HELM and complete the information below:
   - Cluster Identifier: This is a logical identifier for your cluster. You can choose any ID, and it is not coupled to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean. The cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces.
   - Token : The API Spot Token pre-generated via our console. If you do not have one, you may click on the generate button above the field. The API will automatically be saved as a personal token by Ocean CD.
   - Argo Rollout Installation (link to Argo Installation in Overview page): Ocean CD dynamically generates and manages Argo rollout manifests. The installation needs to know if you already have Argo installed on your computer. In the dropdown, select the option that applies to you.

> **Tip**: The See Commands button becomes active only after all three parameters are filled in.

2. Run all of the commands provided into your Kubernetes cluster.

<img src="/ocean-cd/_media/getting-started-n042.png" width="440" />

> **Tip**:  Installation using a Helm template is not supported.

Ocean CD provides you with the ability to run the commands pre-configured into your cluster or to download the `values.yaml` within which you can add any additional requirements of yours.

> **Tip**:  Installation using a Helm template is not supported. Also, the `values.yaml` file will accept any secret.yaml of yours instead of a hard-coded token.

You are now ready to migrate your workload.

## Migrate a Workload using the Console

The procedures below describe how to migrate a Deployment to a SpotDeployment via the UI. This will enable Ocean CD to manage the deployments that you migrate. The full migration process includes the creation of the RolloutSpec, the Strategy, the Verification Template, and the Verification Provider [entities]().

The migration does not delete your original deployment. If there are any resources that you do not want to keep, you will need to delete them manually.

For further information on the syntax of our entities, see examples in the [Ocean CD public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples)or the Entities page.

If you prefer to use an API, you can migrate your workload using the [Ocean CD API or CLI](ocean-cd/getting-started/migrate-using-api).

### Prerequisites

- A Kubernetes cluster running in AWS, Azure or GCP.
- An Ocean CD Operator running in your cluster. Without the Operator, Ocean CD is not able to see resources running the cluster.

### Get Started

1. Under Ocean CD in the left sidebar, go to Workloads. You will see a list of all of your deployments.
2. Hover over the deployment to migrate, and click Migrate on the left side of the row.

<img src="/ocean-cd/_media/getting-started-n05a.png" />

3. The Workload Migration Flow appears to give you an overview of the migration steps.

<img src="/ocean-cd/_media/getting-started-n06.png" width="400" />

Throughout the process, Ocean CD performs internal validations. At each step, Ocean CD lets you know if a misplaced configuration is found and banners pop up with information you can use.

### Migrate

Complete the steps below. When you click Create, Ocean CD saves and applies your  RolloutSpec and Strategy entities. Only the SpotDeployment YAML needs to be applied manually.

1. Migrate your Deployment to Spotdeployment by applying the changes described in the tutorial.

<img src="/ocean-cd/_media/getting-started-n061.png" />

> **Tip**: Any first apply of your SpotDeployments will not trigger a rollout. Only the pods will be created. To trigger a rollout with the entities of your choice, you need to apply additional changes to the SpotDeployment (see step 4).

2. Edit the [strategy](ocean-cd/?id=strategy) and click Next. The strategy name should not exceed 63 characters. If you already have a strategy defined, you can just click Skip.

<img src="/ocean-cd/_media/getting-started-n08a.png" />

3. Edit the template for the [RolloutSpec](ocean-cd/?id=rolloutspec). Choosing a traffic manager is optional. If you would like to [specify a traffic manager](ocean-cd/getting-started/traffic-manager-reference), choose one from the dropdown list. When you choose a traffic manager, Ocean CD will populate the template automatically with the necessary traffic manager attributes. If you do not select a traffic manager, Ocean CD will use the Kubernetes default traffic methods based on replicas. When you are finished editing, click Create.

> **Tip**: Any YAML entities you insert in your traffic object will need to be applied to the same namespace as your SpotDeployment.

<img src="/ocean-cd/_media/getting-started-n09a.png" />

4. Add changes to your SpotDeployment container spec and apply. This time a new rollout will be created and triggered.

## What’s Next?
- Learn how to [install the Operator using the API or Helm](ocean-cd/getting-started/install-operator-using-API-or-helm).
- Learn how to migrate your workload using [API or CLI](ocean-cd/getting-started/migrate-using-api).
- Learn about viewing the [list of rollouts](ocean-cd/tutorials/view-rollouts/) and the information provided in the [detailed rollout](ocean-cd/tutorials/view-rollouts/detailed-rollout) page.
- Get going fast with the [end-to-end setup](ocean-cd/getting-started/end-to-end).
