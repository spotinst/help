# Getting Started

It is really easy to get started with Ocean. It integrates with multiple container and Kubernetes environments including ECS, EKS, and GKE as well as with your existing DevOps tools, such as Terraform, CloudFormation, and Ansible, to support your cloud-native applications.

To get started with an Ocean cluster, connect your Cloud account now: [AWS](connect-your-cloud-provider/aws-account), [Azure](connect-your-cloud-provider/azure-account), [GCP](connect-your-cloud-provider/gcp-project). Once you have connected your account, here are several ways to create an Ocean-managed cluster.

## Choose the Right Method

- [EKS](/ocean/getting-started/eks/)
- [AKS](/ocean/getting-started/aks)
- [kOps](/ocean/tools-and-integrations/kops/)
- [GKE](/ocean/getting-started/gke)
- [ECS](/ocean/getting-started/ecs)
- [OpenShift](/ocean/tools-and-integrations/openshift/)

## Ocean Insights

Ocean Insights is an analysis tool that demonstrates optimizations and savings that Ocean can apply on your Kubernetes cluster. An Insights analysis is an optional step you can take towards connecting to the Ocean engine and migrating your workloads into Ocean management.

In addition to connecting a first cluster to Ocean, you may want to run Insights on the other Kubernetes clusters in your environment. This will help you to understand the extent of Ocean value throughout your environment, including production clusters, without making any changes to those clusters.

There is no charge for running Ocean Insights and it does not require any changes on the existing infrastructure other than deploying the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/). To learn how to analyze your Kubernetes cluster with Ocean Insights, see [Connect Ocean Insights](ocean/getting-started/insights). Insights is currently available to Ocean for AWS and Ocean for GCP users.

> **Note**: Insights can be connected only to clusters that are not managed by Ocean.

## What's Next?

Learn more about scaling, headroom, virtual node groups, and many other [Ocean Features](/ocean/features/).
