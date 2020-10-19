# Create a New EMR Cluster

In this tutorial, you will learn how to create your Elastic MapReduce (EMR) clusters in an Elastigroup.

AWS EMR provides a managed Big Data framework that enables you to easily add/remove cluster capacity to meet your analysis requirements.

EMR supports Hadoop, Apache Spark and other popular distributed frameworks. Running your EMR clusters on Elastigroup provides you with the significant discounts due to the fact that Elastigroup leverages Spot instances, while maintaining 100% availability.

Elastigroup also enables you to create your EMR cluster with Elastigroup, significantly increasing your potential savings.

This tutorial focuses on creating an EMR cluster from scratch and integrating it into Elastigroup.
In case you are already running an EMR cluster on AWS, you have the option to choose to  [wrap your existing cluster](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes) with Spot instances task nodes, or [clone your EMR cluster](elastigroup/tools-integrations/elastic-mapreduce/) into an Elastigroup.

## Prerequisites

1. A verified Spotinst account.
2. AWS Key Pair.

## Step 1: Open the Creation Wizard

* Login to the [Elastigroup Console](http://console.spotinst.com/) and navigate to the Creation Wizard by clicking on the Create button in the Elastigroups tab.
* In the Creation Wizard select EMR (Create a new cluster).

  <img src="/elastigroup/_media/create-a-new-emr-cluster_1.png" />

## Step 2: General Details

* Set the name of the Elastigroup.
* (Optional) Set a description for the Elastigroup.
* (Optional) Add tags by key-value pairs.
* Click Next.

<img src="/elastigroup/_media/create-a-new-emr-cluster_2.png" />

## Step 3: Define Compute Settings

* Select Region / Availability Zone (many as required).
* Fill EMR cluster details:
  * EMR version
  * Security options
    * Select Key Pair from list
    * (Optional) Select job flow rule from list
    * (Optional) Select service roles
  * (Optional)  General Options
    * Log Path – Set path for cluster logs, in format of an Amazon S3 location
    * Root Size – Set size for EBS volume (in GB)
    * Image – set ID for custom AWS EBS-backed linux AMI in case cluster uses custom AMI

      <img src="/elastigroup/_media/create-a-new-emr-cluster_3.png" />

  * Network
    * Select VPC and subnets
    * Select Master security group, and Core & Task security group
  * Instance Groups
    * Select spot markets, using Spot Market Scoring to use optimized markets
    * Select markets and Target for Master instance groups
    * Select markets and set capacity for Core and Task instance groups
      * Capacity in term of target, minimum, maximum by unit of instance / vCPU

<img src="/elastigroup/_media/create-a-new-emr-cluster_4.png" />

## Step 4: Scaling Policies

* Add scaling policies for scale up or scale down. User can add many policies
* For each policy:
  * Set policy type – for Core or Task instance group
  * Select namespace. default is: AWS/ElasticMapReduce
  * Set trigger properties: statistic and metric name
  * Set behavior: operator, threshold, and unit
  * (Optional) Add dimensions, pick from list and set value
  * Set duration
  * Set action for scaling policy:
    * Scale up policy:
      * Set capacity range: define new capacity range on up scale. set target, minimum, maximum
      * Add: Set amount of instances to add
      * Set minimum of: Set minimum instances. policy ensure instances above limit
    * Scale down policy
      * Set capacity range: define new capacity range on down scale. set target, minimum, maximum
      * Remove: Set amount of instances to remove
      * Set maximum of: Set maximum instances. policy ensure instances below limit
    * Cooldown
      * Set wait period (in seconds)

## Scheduled Actions

Configure scheduling actions in order to scale your cluster’s capacity during specific time frames.

Time frames can be once or periodic. define time range by cron expression.

Read more on [scheduling in Elastigroup](elastigroup/features/core-features/scheduling)

<img src="/elastigroup/_media/create-a-new-emr-cluster_5.png" />


## Step 5: Review & Create

All that’s left to do is review your settings and launch your new EMR cluster!

<img src="/elastigroup/_media/create-a-new-emr-cluster_6.png" />

Learn more on EMR cluster on Elastigroup here.
