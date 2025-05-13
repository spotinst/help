# Groups

The Groups page shows you all the details about your Elastigroup. In addition, you can edit and manage the group from this page. The information you can see depends on your features and integrations.

1. In the Spot console, go to **Elastigroup** > **Groups**.
2. Click an **Elastigroup Name**.

<details>
   <summary markdown="span">View image</summary>

  <img width="700" src="https://github.com/user-attachments/assets/3698a171-263b-44c4-aa77-2080773e21a1" />

</details>


In an Elastigroup, from Actions, you can:

* Edit configuration
* [Manage capacity](elastigroup/tutorials/elastigroup-actions-menu/manage-group-capacity)
* [Deploy](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup)
* [Add notification](elastigroup/tutorials/elastigroup-actions-menu/create-notifications)
* View configuration to see or export the config JSON
* [Set health check](elastigroup/tutorials/elastigroup-actions-menu/set-health-checks)
* [Suspend processes](elastigroup/tutorials/elastigroup-actions-menu/suspend-processes)
* Delete group

## Overview

The overview tab gives you quick access to insights and summary data about the group. You can see an overview of your current cost efficiency status, detailed Elastigroup information, and track group analytics.

For example, you can see:

* Summary information about the group

   <details>
    <summary markdown="span">See more about the group</summary>

    * <b>Running instances</b> is the number of instances running in the Elastigroup.
    * <b>Spot running hours</b> is the total number of spot instances running hours in the selected time period.
    * <b>Actual cost</b> is your calculated compute cost for the selected time period using spot instances.
    * <b>On-demand costs</b> is the amount of money in dollars you spent for on-demand instances.
    * <b>Saved</b> is the amount of money in dollars you saved during the selected time period.
    * <b>Savings percentage</b> is the percent savings comparing your actual cost to your potential cost.

    </details>


* Activity broken down by events, such as scaling up/down and replacement (predictive rebalancing, commitment coverage, recovery, revert to spot, preferred, commitments). You can see activity for 6 hours, 24 hours, or 7 days. Hover over an event in the graph to see the details of the activity.

* Details of the group, such as ID, instance types, availability zones, when it was created, load balancers, integrations, AMI, persisted resources.

## Instances

The instances tab shows you the list of instances in your Elastigroup. You can select the fields you see by clicking the column selector <img height="18" src="https://github.com/user-attachments/assets/e5bc0ee3-3053-443d-a9b4-7642b68f95fe" />. Click on an instance to open it in the AWS console.

From **Actions**, you can:

* Detach instances to remove them and launch new ones:
   * **Draining timeout** in seconds lets you set how long to keep the instance active before terminating.
   * **Decrement group’s capacity** lets you change the group instance count target, reducing it by a single instance. This means no replacement instance is launched. If you want replacement instances launched, do <i>not</i> select Decrement group’s capacity.

* Lock instances to prevent them from being scaled down during autoscaling. You set how long the protection lasts. Fix strategy is also prevented.
   Locking does not prevent:
    * A spot interruption if one occurs.
    * Node replacement during a cluster roll.

## Costs

The costs tab gives you a clear breakdown of expenses for the group, identifying trends, and helps you make decisions about your Elastigroup usage. You can view by compute lifecycle or all resources.

Daily spend breakdown shows you how much your compute cost was on each day of the time period. Hover on the graph to see the amounts for a specific day.

You can see the compute lifecycle broken down by spot, on-demand, reserved instances, and commitments. For all resources, you have network, storage, and compute.

<details>
   <summary markdown="span">View image</summary>

  <img width="700" src="https://github.com/user-attachments/assets/a65ab46e-5c43-4404-a01c-6aab83750779" />

</details>

The summary shows the totals for both compute lifecycle and all resources.

<details>
   <summary markdown="span">View image</summary>

  <img width="300" src="https://github.com/user-attachments/assets/d04681a1-68fd-4147-8990-a6fcb82fe230" />

</details>

## Deployments

The deployments tab shows you the list of deployments in your Elastigroup. Click on an ID to view details for the [deployment](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup), such as when it was started and finished, launching new instances, detaching old instances.

There are several reasons that a deployment could fail. Some of the more common issues are:

* The grace period was too short.
* A version of your application is problematic, for example, the codebase or a new AMI.
* If more than 50% of the instances in a specific batch are unhealthy after the grace period, the deployment will fail.

If a deployment fails, the instance remains running for troubleshooting purposes. Some instances in the Elastigroup may have the old configuration, while the rest may have the new configuration. To fix the failed roll, stop and detach either the old instances or the new ones. Update the Elastigroup configuration and deploy again to apply the configuration updates.

Elastigroup will not start new deployments or any scaledown activities until the failed deployment is completely stopped or resolved.

## Recommendations

[Availability zone scores and recommendations](elastigroup/features/core-features/az-scores) assist you in making informed decisions when choosing the best availability zones to launch instances at. The data on the recommendation page is based on availability zone scores calculated by Elastigroup, taking both Cost and Spot markets availability into account. To make sure tailor-made data is displayed, the data comprising the availability zone scores is directly related to the allowed instance types configured in your group.

## Monitoring

The monitoring tab shows you information about the utilization of your Elastigroups. It helps you optimize resource allocation (right-sizing), identify performance issues, and manage costs effectively. You can view graphs with historical vCPU and memory utilization data for the last 6 hours, 24 hours, 7 days, or 30 days. Memory utilization is available if a [CloudWatch agent](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-on-EC2-Instance.html) is installed.

## Log

The log tab lists up to 1,000 logged messages at a time. You can filter on the date range, a severity, or a specific resource.
