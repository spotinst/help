# Elastigroup Auto-Recover for EMR

## Introduction

AWS's Elastic MapReduce (EMR) can occasionally get stuck with a Resizing status during changes in an instance group capacity. In these cases, the actual number of running instances won't match the request number. Elastigroup's EMR Auto-Recovery process is designed to handle this situation.

Here's what a stuck EMR looks like without Elastigroup's EMR Auto-Recover:

<img src="/elastigroup/_media/elastigroup-auto-recover-for-emr_1.png" />

## How it Works

When a change in instance group capacity is applied, a process will monitor its status and if the time limit of 30 minutes is exceeded, Spot Elastigroup will automatically stop the resizing process on the specific instance group and will create a new instance group with the same configuration which we will fall back to.

The original instance group will be `banned` for 2 hours and all actions of launching new instances will be applied in the new instance group. i.e. – if in the original instance group there were 3 missing instances that were requested to be launched, they will be launched as part of the new instance group.

> **Tip**: In order to prevent Elastigroups from scaling rapidly while a resize process is running, all scaling operations are suspended as long as one of the instance groups in the cluster is in resizing mode.

Once the resizing process is finished, scaling operations will be resumed.

Here's a diagram of the Auto-Recovery process:

<img src="/elastigroup/_media/elastigroup-auto-recover-for-emr_2.png" />

## What's Next?

- Create a [Wrapped EMR Cluster](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes) on Elastigroup to run tasks nodes for your existing EMR cluster on Spot instances.
- Clone your [existing EMR cluster](elastigroup/tools-integrations/elastic-mapreduce/) into an Elastigroup.
- Learn about Elastigroup's [Scaling Policies for EMR](elastigroup/tools-integrations/elastic-mapreduce/scaling-policies-for-emr).
