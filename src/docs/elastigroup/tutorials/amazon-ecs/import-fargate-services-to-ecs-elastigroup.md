<meta name="robots" content="noindex">

# Connect a Fargate Service

You can import an [ECS Fargate](https://aws.amazon.com/fargate/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&fargate-blogs.sort-by=item.additionalFields.createdDate&fargate-blogs.sort-order=desc) service into an existing Ocean ECS cluster. Upon Fargate service import, Spot clones the selected Fargate services and runs them with the same VPC and subnet settings on EC2 spot Instances. This enables you to focus on your applications and enjoy all the optimization and scaling features of Ocean without having to manage the underlying infrastructure.

## Relevance

This tutorial is relevant for users of Ocean for ECS.

## Prerequisites

- An AWS account connected to Spot
- ECS cluster having Fargate enabled services
- An Ocean cluster running and managing the ECS cluster

## Choose an Ocean Cluster

You will need to choose an existing Ocean cluster to add the Fargate services to.

1. In the left menu of the Spot Console, click Ocean/Cloud Clusters.
2. Click on the name of an Ocean cluster.

## Import Fargate Services

1. In the Ocean cluster Overview, click Actions and click Import Fargate Services. This item will appear in the Actions menu only if there are Fargate services running in the ECS cluster.

<img src="/ocean/_media/tutorials-fargate-01.png" />

2. Choose one or more Fargate services in the dropdown list and click Import.

<img src="/ocean/_media/tutorials-fargate-02.png" />

The import process may take several minutes to complete depending on the number of services being imported. An indicator window displays the progress of the import including the completion of each stage.

<img src="/ocean/_media/tutorials-fargate-03.png" width="303" height="216" />

There is no need to leave the progress popup open. When closed, a banner will be displayed as long as the process is still running. Upon completion, Ocean will display a message indicating the successful import.

## View an Imported Service

You can view a summary and details about the Fargate services you imported and are now of type EC2.

1. Click on the Services tab in the Ocean cluster.

<img src="/ocean/_media/tutorials-fargate-04.png" />

2. In the list of services, click a Fargate service.

<img src="/ocean/_media/tutorials-fargate-05.png" />

The service overview appears as shown below.

<img src="/ocean/_media/tutorials-fargate-06.png" />

The service overview displays the following details:

- Config: Click the link to view the JSON configuration.
- [Network Mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html): The Docker networking mode used for the containers in the ECS task.
- Running Tasks: Number of tasks currently running.
- Requested Tasks: Number of tasks currently requested.
- Pending Tasks: Number of tasks currently pending.
- Running Tasks Over Time: A graph showing the number of tasks running over a defined time period.
- Tasks: A table describing the tasks running in the service.
  - Task ID
  - Container Instance
  - Type
  - Launch Time
  - Status

## What’s Next?

Learn more about using the APIs to import Fargate services to Ocean:

- [Import Fargate to Existing Ocean Cluster](https://docs.spot.io/api/#operation/oceanEcsFargateImportToExist)
- [Import Fargate to New Ocean Cluster](https://docs.spot.io/api/#operation/oceanEcsFargateImportToNew)
