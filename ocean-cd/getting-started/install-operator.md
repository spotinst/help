# Install Operator

You can install the operator using the Spot console, the Spot API or Helm. All you need to do is to indicate whether your cluster has an Argo Rollout installation.

If you do not have an Argo Rollout installation, Ocean CD dynamically generates Argo rollout manifests on your behalf.  

Ocean CD supports the addition of your own flags and personal Argo customization.  

The operator is created with no limits of resources, but if you prefer to limit them, you can do so manually either using the YAML file, or using the values.yaml file.

Additional [supported resources](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml) are affinity, tolerations, podSecurityContext, and nodeSelector.

> Tip: If you do not want Ocean CD to generate Argo manifests (e.g., you have already configured your own customized ones), you may configure otherwise.

## Prerequisites

* A Kubernetes cluster up and running (on AWS, Azure or GCP).
* A workstation with the Kubernetes cluster context and kubectl installed.
* An existing Spot API Token. If not, you can create one using [this tutorial](administration/api/create-api-token?id=create-an-api-token).
* Operator Lifecycle Manager (OLM) installed. A tutorial is provided below.

## Install OLM

The purpose of OLM is to extend Kubernetes to provide a declarative way to install, manage, and upgrade operators on a cluster. OLM is required for all installation methods.

To install OLM, run the following command:

```
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.21.2/install.sh | bash -s v0.21.2
```

Be sure to use the [latest OLM version](https://github.com/operator-framework/operator-lifecycle-manager/releases) in order to include the latest updates and fixes.

## Install using the Spot Console

You can install the operator using the Spot console.  

1. Under Ocean CD in the Spot console, click Settings, and then click Add Cluster.

<img src="/ocean-cd/_media/getting-started-n01.png" />

2. When the Add Cluster window opens, complete the information:   

<img src="/ocean-cd/_media/end-to-end-1.png" width="500"/>

* **Cluster Identifier**: Your cluster ID must be unique, have up to 30 alphanumeric characters, and not contain spaces. It does not need to be related to the Ocean cluster ID (o-xxxxxx). Ocean CD can run on clusters that are not managed by Ocean.  

* [Argo Rollout Installation](https://docs.spot.io/ocean-cd/?id=argo-rollouts-as-an-engine): Ocean CD dynamically generates and manages Argo rollout manifests. In the dropdown, indicate that you already have Argo installed in your cluster by choosing the option that applies to you.

Click Download YAML. A YAML file downloads to your computer, and a new row appears in the Clusters list. Then, apply the YAML in your Kubernetes cluster.

<img src="/ocean-cd/_media/getting-started-n03.png" />

Once you have downloaded the YAML, the new row will remain with partial information for two minutes. If two minutes have elapsed and the YAML was not applied, the row and the banner will be removed. However, the YAML can still be applied at another time, and the Ocean CD will display the new data accordingly.

## Install using API

You can use the following API URL, using Postman or another API tool, that generates a YAML file output. Add the flags required for Argo installation.  

1. Run the following command:

```
https://api.spotinst.io/ocean/cd/clusterInstaller?clusterId=CLUSTER_ID&skipArgoRollouts=true
```

2. To apply the command using Curl, use the syntax below. Be sure to replace the authorization with your bearer token and the cluster ID with the identifier of your choice.

```
curl --location --request POST 'https://api.spotinst.io/ocean/cd/clusterInstaller?clusterId=CLUSTER_ID&skipArgoRollouts=true' \

--header 'Content-Type: application/json' \

--header 'Authorization: Bearer xxxxxxxx' \

--data-raw '' | kubectl apply -f -
```

## Install using Helm

Complete the steps below:

1. Add the OceanCD Helm chart repository:

```
helm repo add oceancd https://charts.oceancd.io
```

2. Update your local Helm chart repository cache:

```
helm repo update
```

3. Install spot-oceancd-operator. The example below enables the Argo installation. Replace the token and cluster ID to your own values.

```
helm install my-release oceancd/spot-oceancd-operator \
  --namespace oceancd \
  --create-namespace \
  --set token=xxxxx \
  --set clusterId=xxxxx \
  --set argoRollouts.create=true
```

**Installation using a Helm template is not supported.**

You can create a new namespace to install the operator by using the following commands:

```
  --namespace ${RELEASE_NAMESPACE} \
  --create-namespace \
```

Alternatively, you can configure all required chart values without using the set command-line argument, and use Spot’s `values.yaml` file.  

To download the relevant YAML, go to the [Github](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml) Repository.     

To run the relevant YAML, use the following command:  

```
helm install my-release oceancd/spot-oceancd-operator \
  --set token=REDACTED \
  --set clusterId=REDACTED \
  --namespace mynamespace \
  --create-namespace
  -f values.yaml
```

## What’s Next?

Learn how to create a [Spot deployment].  
