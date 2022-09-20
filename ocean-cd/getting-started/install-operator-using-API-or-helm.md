# Install Operator using API or Helm

If you are not using the Spot console to install the operator, you can install using the Spot API or using Helm.

Whichever method you choose, you will need to indicate whether your cluster has an Argo Rollout installation. If you do not have an Argo Rollout installation, Ocean CD dynamically generates Argo rollout manifests on your behalf. In addition, Ocean CD supports the addition of your own flags and personal Argo customization.

In addition, the operator will be created without any limits set. If you want to limit resources, you may do so manually either via the YAML file, or via the values.yaml file.

> Tip: If you do not want Ocean CD to generate Argo manifests (e.g., you have already configured your own customized ones), you may configure otherwise.

For further information, have a look at additional [resources supported](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml) such as affinity, tolerations, podSecurityContext, and nodeSelector.

## Prerequisite
- Kubernetes cluster up and running (on AWS, Azure or GCP)
- Workstation with the Kubernetes cluster context and kubectl installed
- Install Operator Lifecycle Manager (OLM)
- API Token

The purpose of OLM is to extend Kubernetes to provide a declarative way to install, manage, and upgrade operators on a cluster. OLM is required for all installation methods.

To install OLM, use the following command:

```bash
curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.21.2/install.sh | bash -s v0.21.2
```

Be sure to use the [latest OLM version](https://github.com/operator-framework/operator-lifecycle-manager/releases) in order to include the latest updates and fixes.

## Install using API

Using Postman or another API tool, you may make use of the following API URL, which will result in a YAML file output. Be sure to add the flags required for Argo installation.

```
https://api.spotinst.io/ocean/cd/clusterInstaller?clusterId=CLUSTER_ID&skipArgoRollouts=true
```

Should you wish to apply the command using Curl, use the syntax below. Be sure to replace the Authorization with your Bearer Token and the ClusterID with the Identifier of your choice.

```curl
curl --location --request POST 'https://api.spotinst.io/ocean/cd/clusterInstaller?clusterId=CLUSTER_ID&skipArgoRollouts=true' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer xxxxxxxx' \
--data-raw '' | kubectl apply -f -
```

## Install using Helm

Complete the steps below.

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
  --set clusterId=REDACTED \
  # [...]
```

> **Tip**: Installation using a Helm template is not supported.

You can create a new namespace to install the Operator in using the following commands:

```
  --namespace ${RELEASE_NAMESPACE} \
  --create-namespace \
```
​​
Alternaltively, you can configure all required chart values without using the set command-line argument, and make use of our  values.yaml file.

To download the relevant YAML, go to the [Git](https://github.com/spotinst/spot-oceancd-releases/blob/main/charts/spot-oceancd-operator/values.yaml).

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

If you need to uninstall spot-oceancd-operator, use the procedure below.

```
helm uninstall my-release

kubectl get csv -A | grep spot-oceancd-operator | awk '{system("kubectl delete csv " $2 " -n " $1)}'
```

If you need to remove your OLM installation, you can run the following commands:

```
kubectl delete apiservices v1.packages.operators.coreos.com

kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/crds.yaml

kubectl delete -f https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/olm.yaml
```

For additional information, consult the [Ocean CD public repository](https://github.com/spotinst/spot-oceancd-releases/tree/main/Quick%20Start%20%26%20Examples).

## What’s Next?

Learn how to [migrate a workload using the API or CLI](ocean-cd/getting-started/migrate-using-api).
