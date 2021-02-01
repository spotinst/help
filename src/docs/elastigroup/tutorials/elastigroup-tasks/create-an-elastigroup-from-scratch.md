# Create an Elastigroup from Scratch

## Introduction

This tutorial covers the general creation of an Elastigroup, using an empty template. The Empty Template is Available under Uses Cases in the [Creation Wizard](https://console.spotinst.com/#/aws/ec2/elastigroup/create/setup). To create an Elastigroup based on an existing workload such as AWS's Elastic Beanstalk or AutoScaling Groups, select your workload type under Use Cases and import a copy of your workload. To create an Elastigroup from scratch from the Onboarding Wizard select Create an Elastigroup from Scratch.

## Step 1: General Settings

- Enter a Name for your Elastigroup and select a Region.
- Add the Target, Minimum and Maximum Capacities for your Elastigroup

## Step 2: Compute Settings

- Select your desired VPC to run your Elastigroup in, as well as the Product type and the On-Demand type to use in the event that no Spot Instances are available in your desired markets.
- Select the Availability Zones you'd like Elastigroup to consider when launching your instances. To maximize your savings Elastigroup calculates the cost of launching Spot instances in the selected Availability Zones. We recommend selecting multiple Availability Zones to increase the number of Spot instance markets available for Elastigroup to consider.
- Select the instance types you'd like Elastigroup to consider when launching your instances. We recommend selecting multiple instance types to provide Elastigroup with as many Spot instance market options as possible.

> **Tip**: We highly recommend selecting Multiple Availability Zones and multiple instance types, which provide Elastigroup with more Spot markets and result in lower prices and greater availability.

- Choose an Image, Security Groups and (optionally) the Key Pair to use for your instances.

## Step 3: (Optional) Configure Scaling Policies

Optionally, create a [Simple Scaling Policy](elastigroup/features/scaling/simple-scaling-policies) and [Target Scaling Policy](elastigroup/features/scaling/target-scaling).

## Step 4: Review and Create

All that's left to do is review your settings and launch your Elastigroup!

## What's Next?

Learn more about the features and integrations supported in [Elastigroup for AWS](elastigroup/getting-started/elastigroup-for-aws).
