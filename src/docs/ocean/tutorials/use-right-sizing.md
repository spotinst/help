# Use Right Sizing

In this tutorial you will learn about Ocean resizing suggestions and how to use them. This feature will help you define better resource requirements, based on actual consumption, in order to avoid over- or under-provisioning a cluster and increase the cluster's efficiency.

## Relevance

This tutorial is relevant for Kubernetes users.

## Prerequisites

Before performing the procedures in this tutorial, you will need the following:

- A Spot account
- An AWS account
- [Metric Server](https://github.com/kubernetes-incubator/metrics-server#deployment) installed in your Kubernetes cluster
- An [Ocean cluster](ocean/getting-started/eks/create-a-new-cluster) managing your Kubernetes worker nodes

## Step 1: Monitor Deployment Resource Consumption

Ocean collects usage metrics for all deployments in the cluster periodically, e.g., once every five minutes. Based on the past two weeks of collected metrics, Ocean calculates relevant consumption metrics for each resource, e.g., CPU and Memory, and bases its suggestions on these calculated metrics.

Resizing suggestions and the graphs described below display data after at least four days of deployment metrics collection.

1. Open your Ocean cluster console.
2. Under Namespaces, click on the deployment (i.e., Resource) you wish to review to find CPU Utilization and Memory Utilization charts.

<img src="/ocean/_media/tutorials-use-rightsizing-01.png" />

The CPU and memory utilization charts for that resource appears on the right. If the deployment shows recommendations for multiple containers, click on the container to see the relevant charts.

<img src="/ocean/_media/tutorials-use-rightsizing-02.png" />

## Step 2: Adjust Resource Allocation according to Actual Consumption

Resource suggestions will be provided to help you adjust deployment requests to actual resource usage per CPU and Memory. Resource resize recommendations are triggered if the requested resources are 15% above or below the average metric during the last two weeks.

In your Ocean cluster, go to the Right Sizing tab.

<img src="/ocean/_media/tutorials-use-rightsizing-03.png" />

Review the suggested resources offered for all your deployments.

To deep dive into a specific deployment and review resource suggestion, click on the requested deployment.

## Right Sizing Notifications

In addition to the above content, the Right Sizing tab may display one of several notification messages, determined by the status of the Metrics Server reports and the Right Sizing service. The messages indicate one of the following:

- The Metrics Server pod is not yet installed on your cluster and must be installed.
- The Metrics Server is installed, but the system has not received any reports.
- The last report from the Metrics Server is more than three hours old.
- The Metrics Server is installed and data is being collected by the Right Sizing service. The progress bar reflects the amount of data left to collect before suggestions can be displayed.
- Data collection works as intended. There are no suggestions to make, or all previous suggestions have been applied or dismissed.
- The Metrics Server is installed, but the system is still collecting data.

## What's Next?

Learn how to [View Scaling Constraints](ocean/tutorials/view-scaling-constraints).
