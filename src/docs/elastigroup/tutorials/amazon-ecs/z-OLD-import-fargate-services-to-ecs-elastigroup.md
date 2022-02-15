<meta name="robots" content="noindex">

# Import Fargate Services to ECS Elastigroup

## Introduction

This tutorial covers importing Fargate-enabled ECS clusters into Spot Elastigroups. Spot Elastigroups provision, manage and scale the instances and clusters required to run your containers in the most cost-efficient way possible.

This makes Elastigroups an obvious choice for those looking to cut the costs of their AWS Fargate-enabled ECS clusters and still retain their focus on the applications without having to manage the underlying infrastructure.

To import a Fargate-enabled ECS cluster, Spot clones the selected Fargate services and runs them with the same VPC & Subnet settings on EC2 Spot Instances.

Elastigroup automatically and seamlessly predicts and replaces Spot Instances before they are interrupted, ensuring the uptime of the cluster and providing cost-savings of up to 90% over Fargate-enabled ECS clusters.

## Prerequisites

- Connected AWS account to Spot Console
- Updated Spot policy. Learn more about updating the [Spot policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy.md).
- Make sure you have the ecsInstanceRole. [If not, create a new one](https://docs.aws.amazon.com/batch/latest/userguide/instance_IAM_role.html).

## Step 1: Choose Use Case

Select the `Existing Fargate/ECS` Use case from the use case screen.

<img src="/elastigroup/_media/import-fargate-services-to-ecs-elastigroup_1.png" />

## Step 2: Select your ECS Fargate Cluster and Services

Fill in your desired Elastigroup name, as well as the region and name of your ECS cluster running Fargate tasks.

You will be shown with a list of detected services, from which to select which Fargate services you would like to import into Elastigroup.

<img src="/elastigroup/_media/import-fargate-services-to-ecs-elastigroup_2.png" />

The import process does not affect any existing services. Selected Fargate Tasks and Services are cloned by Spot and their settings are imported into an Elastigroup.

Last step before starting the import process will be to review your Elastigroup configuration and click the `Create` button:

<img src="/elastigroup/_media/import-fargate-services-to-ecs-elastigroup_3.png" />

On completion you'll see the Success message.

## Step 3: Begin the Import Process

Once your Elastigroup is created, you can track the fargate service import process by clicking the 'details' link in the banner that appears in the Elastigroup overview screen.

<img src="/elastigroup/_media/import-fargate-services-to-ecs-elastigroup_4.png" />

You will be able to see which services are currently being imported, and in what state they are currently in.

## Step 4: Import Complete

Once Elastigroup is finished importing all of your fargate services, the Elastigroup auto-scaler will start spinning up spot instances according to the services imported, making sure that the instances being spun are optimal according to the service size definition.

You can gradually scale down your previous Fargate services, and switch to using the same containerized services using elastigroup.

<img src="/elastigroup/_media/import-fargate-services-to-ecs-elastigroup_5.png" />
