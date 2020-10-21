# Create Elastigroup from Existing EMR Cluster

In this tutorial, you will learn how to clone your Elastic MapReduce (EMR) clusters into an Elastigroup. AWS EMR provides a managed Big Data framework that enables you to easily add/remove cluster capacity to meet your requirements. EMR supports Hadoop, Apache Spark and other popular distributed frameworks. Running your EMR clusters on Elastigroup provides you with the significant discounts that Spot instances offer while maintaining 100% availability.

This tutorial focuses on cloning an existing EMR into Elastigroup. Elastigroup also enables you to wrap your existing cluster with Spot instances task nodes. Head to our tutorial on [Wrapping EMR Clusters](elastigroup/tools-integrations/elastic-mapreduce/advanced-import-use-bootstrap-and-configuration-files) to learn more.

## Prerequisites

1. A verified Spot Account.
2. A running EMR cluster.

## Step 1: Open the EMR Creation Wizard

Login to the Spot console and under Elastigroups navigate to the Creation Wizard by hitting the Create button:

Choose ‘EMR’ to launch the EMR creation wizard:

## Step 2: Add Elastigroup Description

Set the name and region of the Elastigroup. Click Next.

## Step 3: Configure Strategy and Compute

- Under Strategy select Clone and provide an “Origin Cluster” for Elastigroup to Clone.
- For the Master, Core and Task nodes select the Instance Types, Lifecycle (Spot/On-Demand), Target and Minimum/Maximum number of instances. To ensure Spot availability select multiple Instance Types.

---

**Tip:**

EMR Master and Core node instance groups must always have at least 1 instance running to avoid cluster termination. It is therefore highly recommended to avoid running them on a single Spot instance by either setting the Target capacities to more than 1 instance or setting the Lifecycle to On-Demand.

---

- To ensure widespread deployment, select as many Availability Zones (AZ) as possible and select Subnets within each AZ.
- (Optional) Assign tags to the Elastigroup.

## (Optional) Advanced Settings

- Set a Root Volume Size (GB)

---

**Tip:**

Decreasing root volume size is not recommended and might affect the proper launch of the instance group or the cluster.

---

- Include EMR Steps. This adds any steps configured in the original cluster to the clone in Elastigroup.

## (Optional) Step 4: Scaling Policies

Elastigroup offers a wide variety of scaling options for EMR, both for Core and Task nodes. Learn more about setting Elastigroup’s scaling policies for EMR [here](https://api.spotinst.com/integration-docs/elastigroup/services-integrations/elastic-mapreduce/scaling-policies-for-emr/). Click Next.

## Step 5: Review and Create

The Creation Wizard prepares a JSON template to launch an Elastigroup with the EMR configuration. All that’s left to do is click Create.

## Congratulations!

You’ve now created an EMR on Elastigroup, congrats! You’re now in the Elastigroup Manager view, where you can review, manage and monitor your running Elastigroup.

## What’s Next?

- Create a Wrapped EMR Cluster on Elastigroup to run tasks nodes for your existing EMR cluster on Spot instances.
- Configure Elastigroup’s [Scaling Policies for EMR](elastigroup/tools-integrations/elastic-mapreduce/scaling-policies-for-emr) Core and Task nodes.
- Check out our API Docs here to learn how to clone your EMR into an Elastigroup using RESTful APIs.
- AWS’s Elastic MapReduce (EMR) can occasionally get stuck with a Resizing status during changes in an instance group capacity. In these cases, the actual number of running instances won’t match the request number. Learn how [Elastigroup EMR Auto-Recovery](elastigroup/tools-integrations/elastic-mapreduce/elastigroup-auto-recover-for-emr) process handles these situations.
