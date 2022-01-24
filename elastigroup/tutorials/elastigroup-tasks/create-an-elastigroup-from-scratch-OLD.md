<meta name="robots" content="noindex">

# Create an Elastigroup from Scratch

This procedure describes how to create an Elastigroup using an empty template. To create an Elastigroup based on an existing workload such as AWS Elastic Beanstalk or AutoScaling Groups, choose your workload type under Use Cases and import a copy of your workload configuration.

## Prerequisite

[Connect your AWS account](connect-your-cloud-provider/aws-account.md) to Spot.

## Get Started

1. In the left menu of the Spot console, click Elastigroup/Groups, and click Create Elastigroup.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-01.png" />

2. When the Use Cases page appears, you will need to choose a use case template. Under Empty Template, click Start from Scratch.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-02.png" width="552" height="432" />

## Step 1: General

1. On the General page, enter the following Basic settings:
   - Name: The name of your Elastigroup
   - Region: The AWS region where your group will be located.
   - Description: A brief description describing the purpose of the group.
2. Enter the Capacity settings:
   - Capacity Unit: Choose either instances or vCPU.
   - Target: The desired number of instances or vCPUs in your Elastigroup.
   - Minimum: In the case of a scale down policy action, this is the minimum number of instances or vCPUs that must run in the group. The minimum acceptable value is 0.
   - Maximum: In the case of a scale up policy action, this is the maximum number of instances or vCPUs allowed in the group. The minimum acceptable value is 0.

> **Tip**: If you are creating an Intelligent Traffic Flow group for the first time, it is not recommended to set a target of 0 because the migration will not start immediately.

3. Choose one of the following:
   - On-demand Count: The number of on-demand instances to include in the Elastigroup.
   - Spot Instances %: The percentage of spot instances to include in the Elastigroup. Use the slider to set the percent. The remaining percentage will be on-demand instances.
4. Choose the following Availability and Cost-Efficiency settings:
   - Cluster Orientation: Specify the prediction algorithm strategy.
   - Draining Timeout: Set the amount of time (seconds) that Elastigroup will allow to de-register and drain instances before termination.
   - Utilize Commitment Plans:
   - Fallback to On-demand: Elastigroup provides a fallback mechanism in case no spot instances are available. Mark this option if you would like the option to automatically fall back to an on-demand instance in such a case.
   - Maintenance Window: In the event of a fallback to on-demand, select the time period for the Elastigroup to automatically replace the on-demand instances with spot instances.
     - Once Available
     - Never
     - Custom
5. Click Next.

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

## Step 3: Networking

The networking configuration includes the incoming traffic balancing and autohealing, which are described below.

### Incoming Traffic Balancing

Choose one of the following options for incoming traffic balancing:

- No Load Balancer: The instances will not be registered to any Classic load balancers or target groups.
- Attach Existing Load Balancers: The instances will be registered to target groups or classic load balancers that you selected.
- Intelligent Traffic Flow (ITF): Elastigroup will optimize the distribution of traffic flow between the instances it creates.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-04a.png" />

After choosing one of the above options, complete the required information related to the option.

> Tip: If you are updating the Elastigroup to use ITF and it was previously not using ITF, then a roll is required.

### Autohealing

1. To add health checks to the group, click the Autohealing arrow.
2. Complete the following information:
   - Health Check Service: The service that performs the autohealing health checks.
   - Health Check Grace Period: The timeout (in seconds) until newly launched instances become healthy. If an instance fails the health check after the given grace period, it will be terminated and replaced with a new one.
   - Unhealthy Duration: The amount of time (in seconds) you want to keep existing instances that are deemed unhealthy before the instance is terminated and replaced with a new one.
   - Minimum Healthiness: The minimum number of instances (as a percent) that must be healthy for the group to be indicated as healthy.

> **Tip**: It is recommended to set Target Groups as the health check type when working with ITF.

## Step 4: Scaling (Optional)

Optionally, you can create a [Simple Scaling Policy](elastigroup/features/scaling/simple-scaling-policies.md) and/or a [Target Scaling Policy](elastigroup/features/scaling/target-scaling.md).

## Step 5: Review and Create

When you have finished filling in the information in the template, you can review the configuration and edit it in JSON, CloudFormation or Terraform formats.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-10.png" width="458" height="542" />

After reviewing and making any required changes, click Next and launch your Elastigroup.

## What's Next?

- Learn more about the [Features](elastigroup/features/) and integrations supported in [Elastigroup for AWS](elastigroup/getting-started/elastigroup-for-aws.md).
