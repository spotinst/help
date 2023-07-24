# Create a Stateful Elastigroup from Scratch

This procedure describes how to create a stateful Elastigroup using the [Stateful Creation Wizard](https://console.spotinst.com/spt/aws/ec2/elastigroup/stateful/create/general), that is able to persist Volumes, Elastic IPs, Private IPs and more, across spot interruptions. Using Stateful Elastigroups allows you to run a variety of stateful workloads using managed and SLA driven Spot Instances.
First, we'll start by creating a new Elastigroup, selecting 'Stateful' under the [Use Cases](https://console.spotinst.com/spt/aws/ec2/elastigroup/create/setup) tab.

## Step 1: General Settings

- Enter a Name for your Elastigroup and select a Region.
- Set the initial capacity for your group. You can choose to measure capacity either in number of instances or via a total count of vCPUs
- Select your desired VPC to run your Elastigroup in, as well as the Product type and the Image you wish all instances to be instantiated from.
- Select the security groups to be attached to the instances and the key-pairs associated with them.
- Optionally, you can choose to add tags to your stateful group's instances.

<img src="/elastigroup/_media/create-a-stateful-elastigroup-from-scratch_1.png" />

## Step 2: Instance Type

- Select the On-Demand instance type you would like to be used in case there aren't any spot instances found for your instance type.
- Select the Availability Zones you'd like Elastigroup to consider when launching your instances. To maximize your savings Elastigroup calculates the cost of launching Spot instances in the selected Availability Zones. We recommend selecting multiple Availability Zones to increase the number of Spot instance markets available for Elastigroup to consider.
- Select the instance types you would like Elastigroup to consider when launching your spot instances. We recommend selecting multiple instance types to provide Elastigroup with as many Spot instance market options as possible.

> **Tip**: We highly recommend selecting multiple Availability Zones and multiple instance types, which provide Elastigroup with more Spot markets and result in lower prices and greater availability.

## Step 3: Persistence

In this step, you are required to choose which type of persistence you would like your Elastigroup to maintain.

### Storage Persistence

Choose whether you would like Elastigroup to persist your instance root volume or data volumes, upon interruption.

You can also pick the type of method in which data volumes are maintained, connected, and backed up.

### Network Persistence

Choose whether you would like Elastigroup to persist network settings, such as Instance private IPs.

<img src="/elastigroup/_media/create-a-stateful-elastigroup-from-scratch_2.png" />

At least one persistence feature has to be selected in this step.

## Step 4: Instance Details

- Select launched instance details, like IAM role, tenancy, whether to apply detailed monitoring EBS optimization or EC2 auto-healing.
- Fill in any [user data or shutdown scripts](elastigroup/features/compute/shutdown-scripts) you would like to run upon instance starting or terminating.

## Step 5: (Optional) Scaling Policies

Optionally create a [Simple Scaling Policy](elastigroup/features/scaling/simple-scaling-policies) or a [Target Scaling Policy](elastigroup/features/scaling/target-scaling).

## Step 6: Review

You can now review your Elastigroup configuration and finish the creation process.
