<meta name="robots" content="noindex">

# Get Started with ECS on Elastigroup

## Introduction

This Quick Start deploys Spot Elastigroup for Amazon Elastic Container Service (Amazon ECS) on the Amazon Web Services (AWS) Cloud.

Spot Elastigroup enables the use of production-grade Spot Instances by leveraging a prediction algorithm to predict the Spot Instance interruption 15 minutes ahead of time. Elastigroup then immediately spins up a new node in a different Spot capacity pool. As soon as that new node is healthy, Elastigroup starts to drain the instance that is marked for an interruption. Elastigroup then terminates the instance after draining is completed.

This Quick Start is for organizations that want to use Spot Elastigroup's capabilities to ensure availability and to efficiently scale Amazon ECS clusters that are running as Spot Instances at a discount of roughly 80% compared to On-Demand Instances, with additional savings from automatic task-based scaling.

You can also import an existing ECS cluster – this action will fetch all the data needed in order to create a new ECS cluster on Elastigroup based on the configuration of the imported ECS cluster.Elastigroup for ECS is available via the [Amazon QuickStart](https://aws.amazon.com/quickstart/architecture/spotinst-elastigroup/) guides.

With this Quick Start, Spot Elastigroup deployment takes about 7 minutes. The deployment is automated by AWS CloudFormation templates.

## Prerequisite: Create an ECS IAM Role

- Before the Amazon ECS agent can register container instance into a cluster, the agent must have IAM Role with appropriate account credentials.
- If you haven't done this already, here's how to create an ECS IAM Role.
  1. Navigate to your IAM console
  2. Go to – Roles.
  3. Create a new Role and name it `ECS-ContainerInstance`
  4. Under `AWS Service Roles` choose: `Amazon EC2 Role for EC2 Container Service`
  5. Attach the policy and create the Role.
  6. On the Elastigroup setup, you should specify the newly created IAM Role under `Launch Specification`

## Step 1: Select your ECS Optimized AMI

1. Enter the Elastigroup [Creation Wizard](https://console.spotinst.com/#/aws/ec2/elastigroup/create/setup) and select Amazon ECS.
2. Amazon ECS provides [ECS Optimized AMIs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_container_instance.html) which contain an Amazon ECS agent that automatically registers new instances to your desired ECS cluster. In the Compute tab under Launch Specifications enter the ID of your preferred ECS Optimized AMI based on your region.

## Step 2: Set IP Configuration for your Elastigroup Instances

In order to register to your ECS cluster, each instance in your Elastigroup needs to be associated with a public IP.

1. Under the Compute tab go to Additional Configurations.
2. Under Public IP choose one of the following:
   - Associate public IP
   - Subnet default

## Step 3: Update your User Data (Startup Script) to import the ECS Cluster

By default, your container instances will launch into your default cluster. If you want to launch into a different cluster, use the following script for the User Data field in the Additional Configurations section of the Compute tab, replacing `CLUSTER_NAME` with the name of your desired cluster.

### Linux:

```
#!/bin/bash
echo ECS_CLUSTER=CLUSTER_NAME >> /etc/ecs/ecs.config
```

### Windows:

```
<powershell>

Import-Module ECSTools

Initialize-ECSAgent -Cluster CLUSTER_NAME -EnableTaskIAMRole -LoggingDrivers '["json-file","awslogs"]'

</powershell>
```

## Step 4: Set the ECS Integration

- In the Compute tab, under the Integrations section, select ECS and provide your Cluster Name.
- Continue with the Creation Wizard and create your Elastigroup.

## What's Next?

Now that you have created an ECS-integrated Elastigroup, learn more about the [ECS Auto-Scaler](elastigroup/features/amazon-ecs/automatic-autoscaler-for-ecs.md) and how it efficiently and automatically scales your cluster.
