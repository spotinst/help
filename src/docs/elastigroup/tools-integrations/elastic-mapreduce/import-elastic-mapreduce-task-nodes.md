# Import Elastic MapReduce Task Nodes

## Run your Task Nodes on Spot Instances with Elastigroup

This tutorial covers how to use Elastigroup to wrap your existing Master and Core nodes with Task nodes running on Spot instances while retaining Task node availability. Task nodes are optional additional nodes that provide additional parallel computing power. With Elastigroup you can run your Task nodes on Spot instances while retaining 100% availability.

Elastigroup also enables you to clone your existing EMR cluster into an Elastigroup, significantly increasing your potential savings. Learn how to clone your EMR cluster into an Elastigroup [here](elastigroup/tools-integrations/elastic-mapreduce/).

## Prerequisites

- A verified Elastigroup account.
- A running EMR cluster.

## Step 1: Open the Creation Wizard

- Log in to the [Elastigroup Console](http://console.spotinst.com/) and navigate to the Creation Wizard by clicking on the Create button in the Elastigroups tab.
- In the Creation Wizard, select EMR.

## Step 2: Add Elastigroup Description

- Set the name and region of the Elastigroup. Click Next.

## Step 3: Strategy and Configuration

- Under Strategy select Wrap.
- Under Task nodes select the Instance Types, Lifecycle (Spot/On-Demand), Target and Minimum/Maximum number of instances. To ensure Spot availability select multiple Instance Types.

<img src="/elastigroup/_media/import-elastic-mapreduce-task-nodes_1.png" />

## Step 4: Scaling Policies (Optional)

- Elastigroup offers a wide variety of scaling options for EMR, both for Core and Task nodes. Learn more about Elastigroup's scaling policies for EMR [here](elastigroup/tools-integrations/elastic-mapreduce/scaling-policies-for-emr).
- Click Next.

## Step 5: Review and Create

The Creation Wizard prepares a json template to launch an Elastigroup with the EMR configuration. All that's left to do is click Create!

<img src="/elastigroup/_media/import-elastic-mapreduce-task-nodes_2.png" />

## That's It!

Elastigroup is now running Task nodes for your EMR cluster, congrats! You're now in the Elastigroup Manager view, where you can review, manage and monitor your running Elastigroup.

## What's Next?

- [Clone your EMR cluster](elastigroup/tools-integrations/elastic-mapreduce/) into an Elastigroup.
- Create Scaling Policies for EMR Core and Task nodes.
- AWS's EMR can occasionally get stuck in Resizing status. Elastigroup has an EMR Auto-Recovery process that monitors the resizing process and if necessary launches a replacement instance group. To learn more about Elastigroup's EMR Auto-Recovery click [here](elastigroup/tools-integrations/elastic-mapreduce/).
- Check out our [API Reference](https://docs.spot.io/api/) to learn how to create an Elastigroup to run your Task nodes using RESTful APIs.
