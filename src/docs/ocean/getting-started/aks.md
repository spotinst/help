# Connect an Existing AKS Cluster

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications.

In this procedure, you will use the [Spot Console](http://console.spotinst.com/) to connect an existing AKS cluster to Ocean.

## Prerequisites

- Your [Azure subscription](connect-your-cloud-provider/azure-account) connected to Spot
- A Kubernetes cluster on AKS running at least one node
- The Kubernetes command-line tool, kubectl, installed on your workstation and configured to work with the relevant AKS cluster

## Get Started

1. In the left menu of the Spot console, click Ocean/Cloud Clusters, and click Create Cluster.

<img src="/ocean/_media/create-cluster.png" />

2. Complete the stages of the connection procedure as described below.

## General

1. In the General stage, choose the following from the dropdown lists:
   - Resource Group: The Azure resource group that contains the AKS cluster
   - Import from AKS: The AKS cluster to import
2. For the Ocean Cluster Name, the system will copy the name of the AKS cluster to this field. Although you can modify it, we recommend that you leave it the same as the original AKS cluster name. This will make it easier to identify related entities in each system.

<img src="/ocean/_media/gettingstarted-join-existing-aks-01.png" />

3. Click Next.

## Connectivity

The Connectivity stage provides steps for you to install the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/) and establish the connection between the Ocean SaaS backend and your cluster. In addition, this is where the import from the AKS cluster to Ocean starts.

### Procedure

Complete the steps as described on the page and summarized below.

1. Create a Spot token (or use an existing one) and copy it to the text box.
2. Enter or automatically generate the Cluster Controller ID.
3. Run the displayed script on a workstation with `kube config` set to the AKS cluster context. To confirm that the Ocean Controller is functioning in the cluster, click Check Connectivity. Allow approximately two minutes for the test to complete.
4. Run the displayed script on a workstation with `kube config` set to the AKS cluster context to kick off the import process from the AKS cluster to Ocean as described below in detail.
5. Click Next.

### Import Process Overview

The script provided (in Step 4) is executed by the user. The script creates a Kubernetes job that will run once in the cluster and fetch the following:

- Cluster OS disk size and type
- Node pool tags, labels, taints, and OS disk size and type
- Networking and security configuration necessary for the successful registration of a VM as a node in the cluster. The Ocean cluster uses this data when provisioning VMs in Azure.

<img src="/ocean/_media/gettingstarted-join-existing-aks-02a.png" />

This fetched data is temporarily saved in the [Ocean SaaS](ocean/overview-kubernetes?id=ocean-saas) to be used in the final stage of the Ocean cluster creation.

When you click Next, the identifier (e.g., acd-b397b108) that was provided as part of the script is used to validate the import process against the Ocean SaaS.

Upon successful validation, you will advance to the Compute stage of the wizard where the imported data can be edited. Otherwise, the script should be run again. Note that Ocean regenerates a new identifier for each import attempt, so be sure to also copy the script again. In addition, as a new Kubernetes job is created, the job installed in the previous attempt should first be deleted.

## Compute

1. Confirm or edit the configuration imported in the previous stage, as needed.
   - VM Sizes: Ocean manages your instance selection to best fit your application needs. We recommend that you leave the default configuration, but you can choose to customize if needed.
   - Resource Limit:
     - Max CPU
     - Max Memory (GiB)
   - OS Disk
     - Disk Size
     - Disk Type
   - Tags
   - Virtual Node Groups (VNGs): These are based on the imported AKS node pools.
     - Name
     - OS Disk Size
     - OS Disk Type
   - Node Labels (Key/Value pairs)
   - Node Taints (Key/Value/Effect triplets)

<img src="/ocean/_media/gettingstarted-join-existing-aks-02.png" width="454" height="538" />

2. Click Next.

## Review

1. In the Review tab, you can review all the Ocean settings you have imported or configured.

<img src="/ocean/_media/gettingstarted-join-existing-aks-03.png" width="415" height="356" />

2. To view or edit the configuration in JSON format, click JSON on the upper right.
3. To finish, click Create.

You’re all set! Ocean will now ensure the most cost-effective capacity and sizing possible for your cluster.

## What’s Next?
- Learn how to [Connect an AKS Private Cluster](ocean/tutorials/connect-an-aks-private-cluster).
- Learn more about Ocean’s [scaling](ocean/features/scaling-kubernetes) and [headroom](ocean/features/headroom) features.
