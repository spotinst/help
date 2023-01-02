# Install Operator using API or Helm

You can install the operator using the Spot console and this can also be done using Spot API or Helm. You need to indicate whether your cluster has an Argo Rollout installation.

If you do not have an Argo Rollout installation, Ocean CD dynamically generates Argo rollout manifests on your behalf. Ocean CD supports the addition of your own flags and personal Argo customization.  

In addition, the operator is created with no limits of resources. If you want to limit resources, you can do so manually either using the YAML file, or using the values.yaml file.

> Tip: If you do not want Ocean CD to generate Argo manifests (e.g., you have already configured your own customized ones), you may configure otherwise.

Additional resources supported](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml) are affinity, tolerations, podSecurityContext, and nodeSelector.

## Prerequisites

* A Kubernetes cluster up and running (on AWS, Azure or GCP).
* A workstation with the Kubernetes cluster context and kubectl installed.
* Operator Lifecycle Manager (OLM) installed.
* API Token.

The purpose of OLM is to extend Kubernetes to provide a declarative way to install, manage, and upgrade operators on a cluster. OLM is required for all installation methods.

To install OLM, run the following command:

```
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.21.2/install.sh | bash -s v0.21.2
```

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

3. Install spot-oceancd-operator:

```
helm install my-release oceancd/spot-oceancd-operator \

  --set token=REDACTED \

  --set clusterId=REDACTED  
```

> Tip: Installation using a Helm template is not supported.

You can create a new namespace to install the operator by using the following commands:

```
  --namespace ${RELEASE_NAMESPACE} \

  --create-namespace \
```

Alternatively, you can configure all required chart values without using the `set` command-line argument, and use Spot’s `values.yaml` file.  

To download the relevant YAML, go to the [Github Repository.](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml).

To run the relevant YAML, use the following command:

```
helm install my-release oceancd/spot-oceancd-operator \

  --set token=REDACTED \

  --set clusterId=REDACTED \

  --namespace mynamespace \

  --create-namespace

  -f values.yaml
```

### Uninstall Ocean CD Operator

To uninstall spot-oceancd-operator, run the following commands:

```
helm uninstall my-release  
```

```
kubectl get csv -A | grep spot-oceancd-operator | awk '{system("kubectl delete csv " $2 " -n " $1)}'  
```

To remove your OLM installation, you can run the following commands:

```
kubectl delete apiservices v1.packages.operators.coreos.com
```

```
kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/crds.yaml
```

```
kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/olm.yaml
```

For additional information, consult the [Ocean CD public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples).

## What’s Next?

Learn how to [migrate a workload using the API or CLI](ocean-cd/getting-started/migrate-using-api).
