# Create an Elastigroup from Scratch- Legacy Design

This procedure describes how to create an Elastigroup using an empty template. To create an Elastigroup based on an existing workload such as AWS Elastic Beanstalk or AutoScaling Groups, choose your workload type under Use Cases and import a copy of your workload configuration.

## Prerequisite

[Connect your AWS account](connect-your-cloud-provider/aws-account.md) to Spot.

## Get Started

1. In the left menu of the Spot console, click Elastigroup/Groups, and click Create Elastigroup.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-01.png" />

2. When the Use Cases page appears, you will need to choose a use case template. Under Empty Template, click Start from Scratch.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-02.png" width="552" height="432" />

## Step 1: General

1. On the General page, enter the following information:
   - Name: The name of your Elastigroup
   - Region: The AWS region where your group will be located.
   - Description: A brief description describing the purpose of the group.
2. Click Next.

## Step 2: Compute

1. On the Compute page, complete the following:
   - VPC: Choose the VPC in which your Elastigroup will run.
   - Product: Choose the OS type to use (e.g., Linux, Red Hat, etc.)
   - On-demand Type: Choose the on-demand type to use in the event that no spot instances are available in your desired markets.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-03.png" />

2. Choose one or more Availability Zones (AZs) Elastigroup should consider when launching your instances. To maximize your savings, Elastigroup calculates the cost of launching spot instances in the selected AZs. We recommend selecting multiple Availability Zones to increase the number of spot instance markets available for Elastigroup to consider.
3. Subnets: Choose one or more subnets for each AZ you define.
4. Spot Types: Choose the instance types Elastigroup should consider when launching your instances. We recommend selecting multiple instance types to provide Elastigroup with as many Spot instance market options as possible.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-04.png" />

> **Tip**: We highly recommend selecting Multiple Availability Zones and multiple instance types, which provide Elastigroup with more Spot markets and result in lower prices and greater availability.

5. Launch Specification: Define the parameters below.
   - Image: Choose the AMI to use for your Elastigroup. The AMI should be based in the same region as your Elastigroup.
   - Security Groups: Choose one or more security to apply to your instances.
   - Key Pair: Enter the key pair that will be used for authenticating with your instances.
6. Click Next.

## Step 3: Predictive Rebalancing

The configuration of predictive rebalancing includes the major parts described below.

### Workload Capacity

In this part you define your workload capacity as described below.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-05.png" width="263" height="335" />

- Capacity Unit: The units of the number of servers required, either in Instances (default) or vCPU.
- Target: The desired number of instances or vCPUs under normal operation.
- Minimum: The lowest number of instances or vCPUs that can be available.
- Maximum: The highest number of instances or vCPUs that can be available.
- Choose one of the following:
  - Set by % of spot instances: Percent of total instances that should be spot instances. The rest will be on-demand instances.
  - Set by specific On-Demand count: A specific number of instances that must be On-Demand. The rest will be spot instances. If you chose vCPU as the capacity unit, Elastigroup will choose on-demand instance types that provide the total number of vCPUs requested. For example, if you requested four vCPUs, Elastigroup may choose two instance types with two vCPUs on each (or any other combination meeting the requirement), making a total of four vCPUs.

### Optimization Strategy

In this part you define your optimization strategy as described below.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-06.png" width="270" height="344" />

#### Fallback to On-Demand

If no spot instances are available, an on-demand instance will be provisioned to meet the capacity requirement.

#### Utilize Commitment Plans

Elastigroup will automatically provision on-demand instances if there are any vacant Savings Plans or reserved instances that match any instance type defined in the Compute page. The utilization order is: RIs, EC2 SP, Compute SP. Choose one of the following:

- Reserved Instances
- Reserved Instances and Savings Plans

> Tip: When you choose Utilize Commitment Plans, ensure that your RoleARN is updated with the [latest policy](administration/api/spot-policy-in-aws).

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-06a.png" width="275" height="231" />

#### Cluster Orientation

Specify which prediction algorithm to use:

- Balanced (recommended)
- Availability
- Cost
- Cheapest

### Continuous Optimization

In this part you can choose the optimization method.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-07.png" width="267" height="246" />

- Continuous Optimization: If fallback to on-demand instances has occurred, you can choose when your workload should be returned to spot instances or moved to an instance type that has already-purchased an available reserved capacity. Switch this On (default) to return the instances automatically.
- Choose one of the following:
  - Once Available: Your workload will return to spot instances automatically whenever they become available.
  - Custom: You define one or more time windows that your workloads can be returned to spot instances. When you choose this option, you will be prompted to fill in the time ranges.

### Instance Availability

This option enables you to define availability preferences and gain visibility into EC2 spot instance availability and lifespan. After you define a minimum instance lifetime and your other availability preferences, Spot will do the following:

- Display the resulting market scoring chart showing the probabilities of meeting your specifications.
- Deploy instances that have the highest probability of matching your specifications.

<img src="/elastigroup/_media/corefeatures-predictive-rebalancing-02.png" />

Specify the following:

- Minimum Instance Lifetime: The desired amount of time you wish your workloads to run without any interruption to their underlying instances. The shorter the lifetime you choose, the more accurate the market scoring will be.
- Preferred Availability Zones: Choose one or more of the availability zones that you defined in the Compute tab.
- Preferred Spot Types: Choose one or more of the instance types you defined in the Compute tab.
- Draining Timeout: In addition, you can define the draining period your application requires so the automation will start replacing the instances with enough time before the interruption is predicted to occur, allowing for complete and graceful draining.

When you have finished setting up Predictive Rebalancing, click Next.

## Step 4: Scaling (Optional)

Optionally, you can create a [Simple Scaling Policy](elastigroup/features/scaling/simple-scaling-policies.md) and/or a [Target Scaling Policy](elastigroup/features/scaling/target-scaling.md).

## Step 5: Review and Create

When you have finished filling in the information in the template, you can review the configuration and edit it in JSON, CloudFormation or Terraform formats.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-10.png" width="458" height="542" />

After reviewing and making any required changes, click Next and launch your Elastigroup.

## What's Next?

- Learn more about the [Features](elastigroup/features/) and integrations supported in [Elastigroup for AWS](elastigroup/getting-started/elastigroup-for-aws.md).
- Learn more about the [Predictive Rebalancing](elastigroup/features/core-features/predictive-rebalancing.md) algorithm, [Cluster Orientation](elastigroup/features/core-features/cluster-orientation.md), and defining [Maintenance Windows](elastigroup/features/core-features/maintenance-windows.md).
