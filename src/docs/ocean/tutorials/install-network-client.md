# Install the Ocean Network Client in the Cluster

This tutorial describes how to install the Ocean Network Client as a DaemonSet in your Ocean managed Kubernetes cluster. In order to measure [Network Costs](ocean/features/cost-analysis?id=network-costs) for container or Kubernetes workloads, the Ocean network client needs to run with privileged access on every node in the cluster.

There are several options to install the Ocean Network Client listed below.  

* [Install or Update with Helm](ocean/tutorials/install-network-client?id=install-or-update-the-ocean-network-client-with-helm)
* [Install or Update with Kubectl](ocean/tutorials/install-network-client?id=install-or-update-the-ocean-network-client-with-kubectl)
* [Install or Update with Terraform](ocean/tutorials/install-network-client?id=install-or-update-the-ocean-network-client-with-terraform)
* [Install with Controller Init Script](ocean/tutorials/install-network-client?id=install-the-ocean-network-client-with-controller-init-script)

After installing the Network Client, it may take 1-2 hours for the Network Costs column to appear in the Spot console or for the [oceanK8sClusterAggregatedDetailedCosts](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanK8sClusterAggregatedDetailedCosts) API to show the network costs breakdown.  

## Prerequisites
* The Ocean controller must be installed and run correctly.
* The Ocean network client should be installed in the same namespace (typically kube-system) as the Ocean Kubernetes controller.
* The Ocean network client can be installed using Helm version 3 and later. Not supported with Helm 2.x.
* The Ocean network client uses eBPF TC and requires nodes with Linux v4.18 kernel or later. Not supported on Windows nodes.

## Supported Operating Systems

The Ocean Network Client is supported on Linux and requires Linux kernel version of 4.18 or later. For example:

* EKS with AWS Linux 2 AMI
  - Kubernetes 1.23 and below: Linux v5.4 kernel
  - Kubernetes 1.24 and above: Linux 5.10 kernel
* Ubuntu  
  - 18.4 (Linux v5.4 kernel)
  - 20.4 (Linux v5.14 kernel)
* RHEL 8.x
* CentOS 8.x

## Installation Considerations

The following are some considerations when installing the Ocean network client:

* Ocean network client requires privileged access and system capabilities (SYS_ADMIN, NET_ADMIN) to allow the client to attach pod and host network port on each node.  
  - Linux kernel v5.8, does not require SYS_ADMIN capability. The capabilities can be reduced to CAP_BPF and NET_ADMIN.
* Ocean network client runs as a DaemonSet on every node in the cluster. In most cases the network client requires a minimal amount of compute (CPU and memory) overhead. Actual resources needed depend on cluster size, number of flows and data transfer interval (default 60s).
  - Resource requests: 10m vCPU (1% CPU) and ~100MiB  
  - Resource limits: 300m vCPU and ~500MiB  
* The network client uses a lightweight [eBPF](https://lwn.net/Articles/740157/) program based on [TC BPF](https://man7.org/linux/man-pages/man8/tc-bpf.8.html) to capture traffic flow data (IP addresses, protocols TCP/UDP ports, transmitted TX and received RX packet and byte counts) in and out of the pods with minimum impact to existing workloads.   
* Flow data on each node is aggregated, compressed before it is sent to the Ocean backend cluster. This could result in some minimal data transfer cost overhead, typically <$10 per month per cluster. Actual data transfer costs depend on cloud provider pricing, number of nodes, number of flows and data transfer interval.  

## Install or Update the Ocean Network Client with Helm  

This tutorial describes how to install or upgrade the Ocean Network Client DaemonSet using Helm. Installation is only supported with Helm version 3.x (not supported with Helm 2.x). To learn more at Ocean Network Client hem chart [Ocean Network Client Helm chart](https://github.com/spotinst/charts/tree/main/charts/ocean-network-client).

### Install the Ocean network client for the first time with Helm 3.x

1. Add the Spot Helm chart repository https://charts.spot.io using command `helm repo add`.

2. Update the local Helm chart repository cache using command `helm repo update`, so that it includes Spot repo `spot/ocean-network-client`.

3. Install the Ocean network client, using command `helm repo install`.

```
helm repo add spot https://charts.spot.io
helm repo update
helm install <NAME> spot/ocean-network-client
```

Replace <NAME> with a name for Ocean network client chart.
`helm install ocean-net spot/ocean-network-client`

NOTE: Configure all required chart values using the `set` command line argument or a `values.yaml` file.

### Update the Ocean network client version with Helm 3.x

1. Discover all the available released Ocean network client versions using command `helm search`.  

2. Then upgrade to a specific version or latest version from the list above using command `helm upgrade`.

```
helm search spot/ocean-network-client –version
helm upgrade <NAME> spot/ocean-network-client \
--reuse-values
--version <VERSION>
```

Replace `<NAME>` and `<VERSION>` with a name for the Ocean network client chart and version that you want it to be upgraded to.

```
helm upgrade ocean-net spot/ocean-network-client \
--reuse-values
--version 1.0.9
```  

## Install or Update the Ocean Network Client with Kubectl

To install the Ocean network client or upgrade Ocean network client to latest version, run the `kubectl apply` command with publicly available Ocean network-client Kubernetes manifest (YAML template).

`kubectl apply -f https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/network-client/templates/network-client.yaml`

To change or update the Ocean network client version edit manifest `network-client.yaml`
image: public.ecr.aws/spotinst/spot-network-client: <VERSION>  

```YAML
serviceAccountName: ocean-network-client
     terminationGracePeriodSeconds: 30
     containers:
       - name: "spotinst-ocean-network-client"
         image: public.ecr.aws/spotinst/spot-network-client:1.0.2 #version
         securityContext:
           privileged: true
           capabilities:
             drop: ["all"]
             add: [ "NET_ADMIN", "SYS_ADMIN"] # bpf needs SYS_ADMIN network netlink needs NET_ADMIN
         imagePullPolicy: Always
         resources:
           limits:
             cpu: 300m
             memory: 500Mi
           requests:
             cpu: 10m
             memory: 100Mi
```

## Install or Update the Ocean Network Client with Terraform

Use Terraform [Ocean Network Client module](https://registry.terraform.io/modules/spotinst/ocean-network-client/spotinst/latest) to install and manage the network client.  
To install or update to the latest network client version using Terraform, use the example below. Set the version to the latest Ocean network client module available in Spot terraform registry.

Usage example for Ocean network client module:

```
provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
  }
}

module "ocean-network-client" {
  source  = "spotinst/ocean-network client/spotinst"
  version = "<LATEST_VERSION>"
}
```

## Install the Ocean Network Client with Controller Init Script

The Init script (init.sh) is used to install the Ocean Kubernetes controller in the cluster. Using the Init script (init.sh) option to install the Ocean Network Client can only be done when creating a new Ocean cluster or importing an new Kubernetes cluster to Ocean.  

To enable the Ocean Network client in the new Ocean managed cluster set `ENABLE_OCEAN_NETWORK_CLIENT=true,` in the Ocean controller init.sh script.

In the Create or Import cluster wizard using the Spot console, enable or check the `ENABLE_OCEAN_NETWORK_CLIENT` variable.  

```
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/scripts/init.sh | \
SPOTINST_TOKEN=<TOKEN> \
SPOTINST_ACCOUNT=<ACCOUNT> \
SPOTINST_CLUSTER_IDENTIFIER=<CLSUTER_ID> \
ENABLE_CSR_APPROVAL=true \
ENABLE_OCEAN_METRIC_EXPORTER=true \
ENABLE_OCEAN_NETWORK_CLIENT=true
```

## What's Next?

Learn more about [Network Costs](ocean/features/cost-analysis?id=network-costs).
