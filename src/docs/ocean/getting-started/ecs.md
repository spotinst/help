# Connect an Existing ECS Cluster

Ocean is a managed infrastructure service for ECS that automatically adjusts infrastructure capacity and size to meet the needs of all tasks, containers, and applications.

<iframe width="350" height="350" src="https://www.youtube.com/embed/FJMKCB0_vAA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this procedure, you will connect an existing ECS cluster to Ocean using the [Spot Console](http://console.spotinst.com/).

## Prerequisites

- [Connect your AWS account to Spot](connect-your-cloud-provider/aws-account).
- Have an ECS cluster with at least a single container instance running.

## Get Started

1. In the left menu of the Spot Console, click Ocean/Cloud Clusters, and click Create Cluster.

<img src="/ocean/_media/ecs-create-cluster.png" />

2. When the Create Ocean Cluster page appears, you will need to choose a use case template. Under Connect an Existing Cluster, click Connect an Existing ECS Cluster.

<img src="/ocean/_media/ecs-join.png" />

## Step 1: General

1. In the General page, choose the Region where the cluster is running, enter an Ocean Name, and choose the ECS Cluster to connect.
   - Ocean Name is the name of the Ocean entity that will be created. For a cluster that you are importing, we recommend that you give it the same name as the original cluster (ECS Cluster Name). This will make it easier to identify related entities in each system.
   - ECS Cluster Name is the ECS cluster to import the compute configuration from.

<img src="/ocean/_media/ecs-general.png" width="500" height="381" />

2. Click Next.

## Step 2: Compute

1. Ocean imports the compute configuration from your ECS cluster and displays it in the Compute page. Confirm or edit the configuration if needed:
   - Cluster Network
     - VPC
     - Subnets
   - Machine Types
     All types are selected by default to grant Ocean the most freedom of operation possible. Click Customize if an adjustment is required.
   - Instance Specifications
     - Image
     - Security Group
     - Security Profile
     - Key Pair
     - User Data (Startup Script)
     - Tags (Key and Value)
   - Resource Limits
     - Max vCPUs
     - Max Memory
   - Additional Configuration
     - Public IP Assignment
     - Draining Timeout

<img src="/ocean/_media/ecs-compute.png" />

2. Click Next.

## Step 3: Review

Review all the Ocean settings you have configured. Click Create to finish or use the JSON or Terraform generated templates to create the Ocean cluster using other tooling.

You're all set! Ocean will now ensure the most cost-effective capacity and sizing possible for your cluster.

## What's Next?

- If you wish to run different types of workloads in the same cluster, be sure to create a [Virtual Node Group](ocean/features/vngs/).
- [Manually scale down](https://docs.aws.amazon.com/cli/latest/reference/ecs/update-container-instances-state.html#update-container-instances-state) your existing ECS nodes in the node pools you migrated to get Ocean to provision pod-driven optimized infrastructure for your existing workloads.
- [Import Fargate services](https://docs.spot.io/api/#operation/oceanEcsFargateImportToNew) to Ocean clusters using the Spot APIs.
