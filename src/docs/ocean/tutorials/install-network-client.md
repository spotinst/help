# Install the Ocean Network Client in the Cluster

This tutorial describes how to install the Ocean Network Client as a DaemonSet in your Ocean managed Kubernetes cluster. In order to measure Network Costs  with traffic flow visibility, the network client needs to run in privileged mode on every node in the cluster.

The procedures below describe how you can install the Ocean Network Client with Helm or Kubectl.

## Prerequisites

* The Ocean controller must be installed and run correctly.
* The Ocean network client should be installed in the same namespace (typically kube-system) as the Ocean controller
* The Ocean network client can be installed using Helm version 3 and above. Not supported with Helm 2.x
* Ocean network client uses eBPF TC and requires Linux 4.14 or higher. Not supported on Windows nodes.

## Supported Operating Systems

The Ocean Network Client is supported on Linux and requires Linux kernel version of 4.14 or later. For example:

* Standard AWS linux 2 AMI
* RHEL 8.x
* CentOS 8.x
* Ubuntu 18.4, 20.4

## Installation Considerations

The following are some considerations when installing the Ocean network client:
* The Ocean network client requires privileged access (ADMIN_BPF) to allow the eBPF program to attach to the pod and host network interfaces on each node.
* The network client uses a lightweight eBPF program based on TC BPF to capture traffic flow data (IP addresses, protocols TCP/UDP ports, transmitted TX and received RX packet and byte counts)  in and out of the pods with minimum impact to existing workloads.  
* In most cases the network client requires a minimal amount of compute (CPU and memory) overhead. Typical compute overhead needed is ~20m vCPU and ~20MiB resources for an average of 2K flows per node. Actual resources needed depend on cluster size, number of flows and data transfer interval (default 60s).
* Flow data on each node is aggregated, compressed before it is sent to the Ocean backend cluster. This could result in some minimal data transfer cost overhead, typically <$10 per month per cluster. Actual data transfer costs will depend on cloud provider pricing, number of nodes, number of flows and data transfer interval.

### Install Ocean Network Client with Helm

This tutorial describes how to install Ocean Network Client DaemonSet using Helm. Installation is only supported with Helm version 3.x (not supported with Helm 2.x). You can learn more about the installation in the Github Repository.

1. Add the Spot’s Helm chart repository:
`helm repo add spot https://charts.spot.io`
2. Update your local Helm chart repository cache:
`helm repo update`
3. Install the Ocean Network Client
`helm install <NAME> spot/ocean-network-client`
For example:
`helm install ocean-net-client spot/ocean-network-client`
NOTE: Configure all required chart values using the set command line argument or a values.yaml file.
4. If you want to upgrade the Ocean network client version:
`helm upgrade ocean-net-client spot/ocean-network-client \
--reuse-values \
--version <VERSION>`
5. In order to discover the available Ocean network client versions, use the following command:
`helm search spot/ocean-network-client --versions`

### Install the Ocean Network Client with Kubectl

To install the latest network client version, run the following command:
`kubectl apply -f
https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/network-client/templates/network-client.yaml`

## What's Next?

Learn more about [Network Costs](link).
