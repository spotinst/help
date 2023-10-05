# Create Ocean Cluster from OpenShift (v4.x)

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of all pods, containers, and applications.

This tutorial covers the creation of an Ocean cluster using [Spot](https://console.spotinst.com/spt/dashboard).

## Prerequisites

- OpenShift is installed and configured on AWS, Azure, or GCP
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

## Step 3: Connectivity

1. Create a Spot token or use an existing one.
2. Install the Ocean Controller Pod. Learn more about the Ocean Controller Pod and Ocean's anatomy here.
3. Ensure enable-csr-approval is set to True.
4. Click Test Connectivity to ensure the controller functionality.

```bash
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/scripts/init.sh | \
SPOTINST_TOKEN=<ENTER YOUR TOKEN HERE> \
SPOTINST_ACCOUNT=act-54c5d1ab \
SPOTINST_CLUSTER_IDENTIFIER=openshift \
ENABLE_CSR_APPROVAL=True \
bash
```

<img src="/ocean/_media/tools-openshift-4x-05.png" />

5. When the connectivity test is complete, click Create.

You're all set! Ocean will now ensure the most cost-effective capacity and size possible for your cluster.

## What's Next?

Learn more about Ocean scaling and optimization [features](ocean/features/).
