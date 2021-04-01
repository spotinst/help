# Import an Existing Autoscaling Group

In this procedure, you will import the configuration of an existing AWS Autoscaling Group (ASG) to Spot so that the ASG can be managed as an Elastigroup in Spot.

## Prerequisites

- An AWS account with autoscaling groups configured
- A Spot account connected to an AWS account

## Get Started

1. In the left menu of the Spot Console, click Elastigroup/Groups, and click Create Elastigroup.
2. Click Autoscaling Group and choose Create an Elastigroup from an existing Auto Scaling Group.
3. Choose the Region and then choose the ASG you will use to create an Elastigroup cluster. Click Select.

Spot creates the Elastigroup based on the ASG parameters imported from AWS. A summary of the parameters appears with the Review tab open. You can review the list of parameters.

<img src="/elastigroup/_media/tasks-join-existing-asg-01.png" width="452" height="500" />

## General Tab

After the initial creation of the Elastigroup, you can choose to keep the original configuration parameters or modify them as necessary. Under the General tab, you can define the following parameters:

- Basic Settings
  - Name: Name of the Elastigroup cluster.
  - Region: AWS region the ASG is in.
  - Description: A few words describing the purpose of the Elastigroup.
- Capacity Settings
  - Capacity Unit: Choose Instance of CPUs
  - Target, Minimum, Maximum: The capacity definitions.
  - On-Demand Count: Number of on-demand instances to include in the cluster.
  - Spot Instances %: Portion of the cluster by percent to be made up of spot instances.
- Availability and Cost-Efficiency Settings
  - Cluster Orientation
  - Draining Timeout
  - Utilize Reserve Instances
  - Fallback to On-Demand
  - Maintenance Window
- Downscale Imported ASG

<img src="/elastigroup/_media/tasks-join-existing-asg-02.png" />

## Compute Tab

In the Compute tab, verify that the imported values are correct or modify as necessary.

<img src="/elastigroup/_media/tasks-join-existing-asg-03.png" />

- VPC: Verify that the VPC selected is the correct one.
- Product: Verify that the Product selected is the correct one.
- On-Demand Type: Select the On-Demand Instance type that the Elastigroup will fall-back to if the spot market is unavailable.
- Availability Zones: Select the availability zones in which the Elastigroup cluster will be able to run, and select the relevant Subnet(s).

> **Tip**: In order to have a more diverse Spot market, it is recommended to select multiple availability zones and their corresponding subnets.

- Spot Types: Select the eligible instance types you wish to have in your Elastigroup.

> **Tip**: It is recommended to select multiple instance types in order to increase the spot market scoring.

- Launch Specification: In this section, you can configure which image the instance will launch with, Security groups, Key-Pairs and related AWS tags.
- Additional Configurations: In this section, you can configure additional items related to your Elastigroup.
- Stateful: You can specify details for a stateful instance.
- Load Balancers: You can specify a load balancer.
- Auto-Healing: In this section, you can configure which type of health checks will be performed on the instance.
- Integrations: You can add an integration tool to use with the cluster.

## Scaling Tab

Under the Scaling tab, you can configure scaling and termination policies, in cases that you will need to scale instances to support the load of your web application.

## Review Tab

In the Review tab under Summary, you can review the final configuration of your Elastigroup. In addition, the Spot automatically generates a template of your Elastigroup to be used by Cloudformation or Terraform.

When you are finished reviewing and making modifications to the configuration, click Create. Spot will create your Elastigroup.

## What's Next?

- For more information about the General settings, read about [Cluster Orientation](elastigroup/features/core-features/cluster-orientation.md), [Maintenance Windows](elastigroup/features/core-features/maintenance-windows.md), and [Capacity Units](elastigroup/features/core-features/elastigroup-capacity-instances-or-weighted.md).
- For more information about Scaling, read about [Target Scaling Policies](elastigroup/features/scaling/target-scaling.md), [Simple Scaling Policies](elastigroup/features/scaling/simple-scaling-policies.md), and [Termination Policy](elastigroup/features/compute/termination-policy.md).
