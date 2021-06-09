# Azure AKS Engine

Microsoft Azure provides two ways to provision Kubernetes, AKS and aks-engine. The latter is how Spot integrates Elastigroups and Low-Priority VMs into a native Azure Kubernetes cluster.

Unlike the managed AKS service, aks-engine supports the latest versions of Kubernetes, azure native container networking, standard load balancers and persistent volume claims with scale sets. These features are necessary for the best possible experience with Kubernetes on Azure.

Spot is able to analyze artifacts produced by aks-engine and provision an Elastigroup that manages Low-Priority and On-Demand VMs within that same cluster. All the benefits of Elastigroup, including fallback to on-demand and multiple VM types are now available to Kubernetes.

## Get Started

There are two methods to get running with Kubernetes and Elastigroup on Azure.

- **Quick Start** – This procedure automatically provisions and imports configurations to Spot with a single command.
- **AKS Engine Import** – This procedure manually runs aks-engine followed by spotinst-aks-engine import with fine-grained control of build options.

> **Tip**: In order to edit the group configuration before creating it, you must use the manual option (i.e., AKS Engine Import) with the `--dry-run` flag.

The procedures are described below.

## Quick Start

Spot provides a docker image that packages all dependencies necessary to run aks-engine, create and integrate Elastigroup resources and launch the Ocean Controller automatically.

When the container is executed with the proper environment variables both aks-engine and spot-aks-engine import will create a fully provisioned Kubernetes cluster.

Before running this image you will need:

- Azure subscription_id, client_id and client_secret – The Application Registration will need permission to create a resource group within the Subscription
- Spot Token – Will be used to create the integrated Elastigroup
- Create an output directory in the current working path to store aks-engine artifacts

```
docker run -it --rm \
  -e SPOTINST_ACCOUNT=act-XXXXXXXX \
  -e SPOTINST_TOKEN=XXXXXXXX \
  -e AZURE_SUBSCRIPTION_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
  -e AKS_DNS_PREFIX=spot-aks-engine-prefix \
  -e AZURE_LOCATION=eastus \
  -e AZURE_CLIENT_SECRET="XXXXXXXX" \
  -e AZURE_CLIENT_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
  -v $PWD/output:/output \
  spotinst/spotinst-aks-engine-tools create-simple
```

> **Tip**: AKS_DNS_PREFIX must be unique for the subscription (account).

On completion the Elastigroup SIG will be returned:

```
$ docker run -it --rm \
  -e SPOTINST_ACCOUNT=act-XXXXXXXX \
  -e SPOTINST_TOKEN=XXXXXXXX \
  -e AZURE_SUBSCRIPTION_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
  -e AKS_DNS_PREFIX=spotinst-aks-engine-demo \
  -e AZURE_LOCATION=eastus \
  -e AZURE_CLIENT_SECRET="XXXXXXXX" \
  -e AZURE_CLIENT_ID=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX \
  -v $PWD/output:/output \
  spotinst/spotinst-aks-engine-tools create-simple
WARN[0003] apimodel: missing masterProfile.dnsPrefix will use "spotinst-aks-engine-demo"
INFO[0022] Starting ARM Deployment (spotinst-aks-engine-demo-1874602557). This will take some time...
INFO[0263] Finished ARM Deployment (spotinst-aks-engine-demo-1874602557). Succeeded
Spot Elastigroup sig-2dd2ddbe successfully created
```

A new Azure resource group will contain the new Kubernetes cluster with a scale set managed by Spotinst. It is safe to scale the set created by aks-engine to zero.

Proceed to Expected Output below.

## AKS Engine Import

### AKS-engine-0.46.3

Download OS respective binary: https://github.com/Azure/aks-engine/releases/tag/v0.46.3

### Spot-aks-engine

Download OS respective binary:

**Linux**: [[386](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-linux-386)] [[amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-linux-amd64)]

**Darwin**: [[386](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-darwin-386)] [[amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-darwin-amd64)]

**Windows**: [[386](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-windows-386)] [[amd64](https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/aks-engine/v0.1.4/spotinst-aks-engine-windows-amd64)]

### Run aks-engine

It is possible to customize the api-model of aks-engine but the following settings are required for full use of external load balancing and persistent volume claims with Azure Scale Sets:

1. Enable Standard Load Balancer:
   orchestratorProfile.kubernetesConfig.loadBalancerSku = `Standard`
2. Use _azure_ networking plugin:
   orchestratorProfile.kubernetesConfig.networkPlugin = `azure`

The full instructions for aks-engine can be found [on GitHub](https://github.com/Azure/aks-engine/blob/master/docs/README).

Minimally a cluster can be created with the [api model](https://github.com/spotinst/spotinst-aks-engine-tools/blob/master/models/k8s-azurenet.json) that is used in the simple setup above.

The deploy process of aks-engine will save all relevant cluster information to an output folder. This location is needed to integrate with Elastigroup.

### Run spot-aks-engine

Once aks-engine has created the cluster, import the configuration to Spot with spot-aks-engine.

```
Usage:
  spotinst-aks-engine import [flags]

Flags:
      --dry-run                   Dump Elastigroup Config and exit
  -h, --help                      help for import
  -o, --output-directory string   aks-engine output directory that contains template files (default "./output")
  -r, --resource-group string     Azure resource group Elastigroup should use
      --set stringToString        Set extra Elastigroup configuration properties (default [])
  -s, --subscription string       Azure subscription used for the account / aks deployment
```

To scale the Elastigroup on import provide the min, max and target as extra options:

```
spotinst-aks-engine import\
--resource-group $AZURE_RESOURCE_GROUP \
--output-directory /output/$AKS_DNS_PREFIX \
--subscription $AZURE_SUBSCRIPTION_ID \
--set capacity.maximum=MIN \
--set capacity.maximum=MAX \
--set capacity.target=TARGET
```

When complete a new resource group will contain the new Kubernetes cluster with a scale set managed by Spot. It is safe to scale the set created by aks-engine to zero.

## Expected Output

After following the directions for either the Quick Start or the import, the following resources will be present.

### Aks-engine Output

The output directory will contain everything needed to manage the Kubernetes deployment, including SSH keys and the kubeconfig needed to connect to the cluster.

### Spot Elastigroup

```
$ ls output/spotinst-aks-engine-demo/
apimodel.json      azuredeploy.parameters.json  client.crt      etcdpeer0.crt      kubeconfig
apiserver.crt      azureuser_rsa      client.key      etcdpeer0.key      kubectlClient.crt
apiserver.key      ca.crt        etcdclient.crt      etcdserver.crt      kubectlClient.key
azuredeploy.json    ca.key        etcdclient.key      etcdserver.key
```

When spot-aks-engine import completes an ID is returned. This ID is the group that manages the worker nodes for Kubernetes and can be viewed in the Spot Console.

`Spot Elastigroup sig-2dd2ddbe successfully created.`

### Console View

<img src="/elastigroup/_media/azure-aks-engine_1.png" />

### Azure Resources

<img src="/elastigroup/_media/azure-aks-engine_2.png" />
