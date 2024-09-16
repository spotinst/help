# Getting Started

It's easy to get started with Ocean. It integrates with multiple container and Kubernetes environments, including ECS, EKS, AKS, and GKE, as well as with your existing DevOps tools, such as Terraform, CloudFormation, and Ansible, to support your cloud-native applications.

To get started with an Ocean cluster, connect your Cloud account now: [AWS](connect-your-cloud-provider/aws-account), [Azure](connect-your-cloud-provider/azure-account), [GCP](connect-your-cloud-provider/gcp-project). Once you have connected your account, here are several ways to create an Ocean-managed cluster.

## Select a Method

- [EKS](/ocean/getting-started/eks/)
- [AKS](/ocean/getting-started/aks)
- [kOps](/ocean/tools-and-integrations/kops/)
- [GKE](/ocean/getting-started/gke)
- [ECS](/ocean/getting-started/ecs)
- [OpenShift](/ocean/tools-and-integrations/openshift/)

## Ocean Insights

Ocean Insights is an analysis tool that demonstrates optimizations and savings that Ocean can apply to your Kubernetes cluster. An insights analysis is an optional step to connect to the ocean engine and migrate your workloads into ocean management.

In addition to connecting a first cluster to Ocean, you should run Insights on the other Kubernetes clusters in your environment. This will help you understand the extent of ocean value throughout your environment, including production clusters, without changing those clusters.

There is no charge for running Ocean Insights, and it does not require any changes to the existing infrastructure other than deploying the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/). See [Connect Ocean Insights](ocean/getting-started/insights) to learn how to analyze your Kubernetes cluster with Ocean Insights. Insights are currently available to Ocean for AWS and Ocean for GCP users.

> **Note**: Insights can be connected only to clusters not managed by Ocean.
