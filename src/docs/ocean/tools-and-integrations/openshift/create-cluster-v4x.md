# Create Ocean Cluster from OpenShift (v4.x)

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of all pods, containers, and applications.

This tutorial covers the creation of an Ocean cluster using [Spot](https://console.spotinst.com/spt/dashboard).

## Prerequisites

- OpenShift is installed and configured on AWS.
- At least one worker node is up and running

## Get Started

1. Log on to your Spot account.
2. In the side menu of the console, click Ocean/Cloud Clusters.

<img src="/ocean/_media/tools-openshift-4x-01.png" width="220" height="133" />

3. Click Create Cluster.
4. Click the use case for OpenShift, `Connect an Existing OpenShift Cluster`.

<img src="/ocean/_media/tools-openshift-4x-02.png" width="300" height="385" />

## Step 1: Enter General Information

1. Enter a Cluster Name and Identifier and choose a Region.
2. Choose an Auto Scaling Group or worker node Instance to import the cluster configuration from.

<img src="/ocean/_media/tools-openshift-4x-03.png" width="450" height="349" />

## Step 2: Review Compute Settings

Confirm or change the settings imported by the Ocean Creation Wizard.

<img src="/ocean/_media/tools-openshift-4x-04.png" />

##  Step 3: Set up Connectivity

1. Create a Spot token or use an existing one.
2. Install the [Ocean Controller](https://docs.spot.io/ocean/tutorials/ocean-controller-v2) Pod. 
3. Ensure enable-csr-approval is set to True.
4. Click **Test Connectivity** to ensure the controller functionality.

```bash
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller-v2/scripts/init.sh | \
SPOTINST_TOKEN=<ENTER YOUR TOKEN HERE> \
SPOTINST_ACCOUNT=$SPOTINST_ACCOUNT \
SPOTINST_CLUSTER_IDENTIFIER=$SPOTINST_CLUSTER_IDENTIFIER \
ENABLE_OCEAN_METRIC_EXPORTER=false \
ENABLE_OCEAN_NETWORK_CLIENT=false \
INCLUDE_METRIC_SERVER=true \
bash

```

![kub-cluster-create](https://github.com/user-attachments/assets/658dc054-0ef4-4e4a-8519-5a9eac86fd7f)

5. When the connectivity test is complete, click **Create**.

Ocean will now ensure the most cost-effective capacity and size possible for your cluster.


