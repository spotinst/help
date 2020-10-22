# Set Running Hours

This tutorial describes how to build a weekly schedule defining the hours in which the workloads in your cluster will be up and running.

## Relevance

This tutorial is relevant for Kubernetes and ECS users.

## Prerequisite

Before you set the running hours, you must configure the minimum capacity in the Ocean cluster to 0.

## Schedule Your Running Hours

To schedule your running hours, do the following:

1. In your Ocean cluster, click Actions and choose Customize Scaling.

<img src="/ocean/_media/tutorials-set-running-hours-01.png" width="220" height="205" />

2. Click Cluster Running Hours.

<img src="/ocean/_media/tutorials-set-running-hours-02.png" width="400" height="293" />

3. Set your running hours by clicking or dragging the mouse in the timetable.
4. Click Update.

## During Off Hours

If you need to change the schedule during the off hours, you can do so without causing the cluster to `wake up` instantly. The cluster will wake up only when you activate it manually by making a capacity change.

## Using The API

You can also configure running hours using the API parameter cluster.scheduling.shutdownHours. Unlike the UI however, the API works by defining the off hours instead of the actual running hours. The time range defined represents the ranges in which the cluster will be scaled to zero. The API uses this mechanism in order to reduce chances of a human error that would cause an undesired scale-down to zero.

---

**Tip**: The value defined in the `shutdownHours.timeWindows` field is effective only when the `shutdownHours.isEnabled` field is set to `true`.

---

## What's Next?

Have a look at the Create Cluster in Ocean APIs: [K8s AWS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/create-2/), [ECS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-ecs/create/), [GKE](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-gke/create/)
