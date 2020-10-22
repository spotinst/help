# Join an existing EKS Cluster

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications.

In this procedure, you will use the [Spot Console](http://console.spotinst.com/) to join an existing EKS cluster to Ocean.

## Prerequisites

- [Connect your AWS account to Spot](connect-your-cloud-provider/aws-account).
- Have an EKS cluster up and running.

## Get Started

1. In the left menu of the Spot Console, click Ocean/Cloud Clusters, and click Create Cluster.

<img src="/ocean/_media/create-cluster.png" />

2. When the Create Ocean Cluster page appears, you will need to choose a use case template. Under Join an Existing Cluster, click From EKS Worker Nodes.

<img src="/ocean/_media/from-eks-worker-nodes1.png" width="600" height="160" />

## Step 1: General

1. In the General page, enter a Cluster Name and Cluster Identifier and click the region where the cluster is running.
   - Cluster Name is the name of the Ocean entity that will be created.
   - Cluster Identifier is the unique key used to connect between the Ocean Saas and the Kubernetes cluster. The Cluster Identifier is automatically generated according to the Cluster Name entered.
2. Choose the autoscaling group or a specific instance from which you will import the compute configurations.

<img src="/ocean/_media/general.png" width="500" height="510" />

3. Click Next.

## Step 2: Compute

1. Ocean imports the compute configuration from your EKS cluster and displays it in the Compute page. Confirm or change the configuration if needed:
   - Cluster Network:
     - VPC
     - Subnets
   - Machine Types
     All types are selected by default to grant Ocean the most freedom of operation possible. Click Customize if an adjustment is required.
   - Instance Specifications:
     - Image
     - Security Groups
     - Instance Profile
     - Key Pair
     - User Data (Startup Script)

<img src="/ocean/_media/compute.png" />

2. Click next.

## Step 3: Connectivity

The Connectivity page provides steps for you to install the Spot Kubernetes Controller and establish the connection between the Ocean SaaS and the cluster. Complete the steps as described on the page and summarized below.

1. Create a Spot token (or use an existing one) and copy it to the text box.
2. Use the kubectl command-line tool to install the Spot Controller Pod. Learn more about the Spot Controller Pod and Ocean's anatomy here.
3. Click Test Connectivity to ensure the controller functionality. Allow approximately two minutes for the test to complete.
4. Click Next.

## Step 4: Review

Review all the Ocean settings you have configured. Click Create to finish or use the JSON or Terraform generated templates to create the Ocean cluster using other tooling.

You're all set! Ocean will now ensure the most cost-effective capacity and sizing possible for your cluster.

## What's Next?

- [Migrate your Workloads](ocean/tutorials/migrate-workload) to Ocean.
- Learn more about importing multiple workload types in the same cluster by using [Launch Specifications](ocean/features/launch-specifications).
