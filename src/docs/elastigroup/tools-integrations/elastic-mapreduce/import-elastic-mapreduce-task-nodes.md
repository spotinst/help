# Import an Existing EMR Cluster

You can import an existing EMR cluster to Elastigroup. Elastigroup then manages the cluster, enabling you to take advantage of numerous optimization features and significant cost savings.

You can choose from two different strategies of importing the EMR cluster:

_Clone_: Elastigroup copies the configuration of an existing environment (including terminated environments) and creates a new cluster with this configuration.

_Wrap_: Elastigroup manages scaling of only the task nodes of an existing EMR cluster.

The procedures below describe each import strategy in detail.

## Prerequisites

- A verified Spot account
- A running EMR cluster

## Get Started

1. In the left menu of the Spot console, click Elastigroup/Groups, and click Create Elastigroup.

<img src="/elastigroup/_media/tutorials-create-eg-from-scratch-01.png" />

2. In the Use Cases page, click EMR.

<img src="/elastigroup/_media/create-a-new-emr-cluster-01.png" width="274" height="82" />

3. Choose Use an Existing Cluster, and click Select.

<img src="/elastigroup/_media/import-emr-01.png" width="174" height="142" />

## General

1. In the General tab, complete the following information:
   - Name: The display name of the cluster
   - Region: The AWS region of the instances in the cluster
   - Description: A few words identifying the purpose of the cluster
2. Click Next.

## Strategy & Compute

### Strategy

Choose the import strategy you would like to use and enter the relevant Origin Cluster or Source Cluster.

<img src="/elastigroup/_media/import-emr-02.png" />

### Instance Groups

If you are cloning an environment, define your instance groups as follows:

Primary

- Instance Types: Choose one or more preferred instance types for the primary.
- Life Cycle: Choose Spot or On-Demand.

Core

- Instance Types: Choose one or more preferred instance types for the core.
- Life Cycle: Choose Spot or On-Demand.
- Target
- Minimum
- Maximum
- Capacity Unit

Task

- Instance Types: Choose one or more preferred instance types for the task instances.
- Life Cycle: Choose Spot or On-Demand.
- Target
- Minimum
- Maximum
- Capacity Unit

<img src="/elastigroup/_media/import-emr-03.png" />

> Tip: EMR Primary and Core node instance groups must always have at least one instance running to avoid cluster termination. It is highly recommended to avoid running them on single spot instances by either setting the Target capacities to more than one instance or setting the Lifecycle to On-Demand.

If you are wrapping an environment, you only need to configure the Task Instance Groups.

### Tags

If you are cloning an environment, you can define tags in the Tags section.

### Scheduling

You can schedule actions for the Task Instance Groups. For more information, see [Scheduled Actions](elastigroup/tools-integrations/elastic-mapreduce/create-a-new-emr-cluster?id=scheduled-actions).

### Advanced

If you are cloning an environment, you can define Advanced parameters as described below.

- Set a Root Volume Size (GB)

> Tip: Decreasing root volume size is not recommended and might affect the proper launch of the instance group or the cluster.

- Include EMR Steps. This adds any steps configured in the original cluster to the clone in Elastigroup.

## Scaling (Optional)

You can define scaling policies as described in [Create a New EMR Cluster](elastigroup/tools-integrations/elastic-mapreduce/create-a-new-emr-cluster).

## Review

In the Review tab, you can review your EMR cluster configuration in the JSON format that Elastigroup will use to create the Elastigroup. If you need to make changes, you can go back to the other tabs and edit, or you can make your changes directly in the JSON. When you are finished reviewing, click Create.

## What’s Next?

- Amazon EMR can occasionally get stuck with a Resizing status during changes in an instance group capacity. In this case, the actual number of running instances will not match the request number. Learn how [Elastigroup EMR Auto-Recovery](elastigroup/tools-integrations/elastic-mapreduce/elastigroup-auto-recover-for-emr) process handles these situations.
- Check out our [API Reference](https://docs.spot.io/api/) and learn how to create an Elastigroup to run your task nodes using RESTful APIs.
