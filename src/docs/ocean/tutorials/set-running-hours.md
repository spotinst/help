# Set Shutdown Hours

This tutorial describes how to build a weekly schedule defining the hours in which the workloads in your cluster will be up and running and the shutdown hours.

## Relevance

This tutorial is relevant for Kubernetes and ECS users.

## Prerequisite

Before you set the shutdown hours, you must configure the minimum capacity in the Ocean cluster to 0.

## Schedule Your Shutdown Hours

To schedule your Shutdown hours, do the following:

1. In your Ocean cluster, click Actions and choose Customize Scaling.

<img src="/ocean/_media/tutorials-set-running-hours-01a.png" />

2. Click Cluster Shutdown Hours.

<img src="/ocean/_media/tutorials-set-running-hours-02b.png" />

3. Set your shutdown hours by clicking or dragging the mouse in the timetable.
4. Click Update.

## During Off Hours

If you need to change the schedule during the off hours, you can do so without causing the cluster to `wake up` instantly. The cluster will wake up only when you activate it manually by making a capacity change.

## Using The API

You can also configure shutdown hours using the API parameter cluster.scheduling.shutdownHours. The time range defined in the API represents the ranges in which the cluster will be scaled to zero. The API uses this mechanism in order to reduce chances of a human error that would cause an undesired scale-down to zero.

> **Tip**: The value defined in the `shutdownHours.timeWindows` field is effective only when the `shutdownHours.isEnabled` field is set to `true`.

## Set Shutdown Hours per VNG

You can use the API (AWS) to configure [shutdown hours](ocean/features/running-hours?id=shutdown-hours-per-vng) for one or more individual VNGs.

Use the [Create](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) or the [Update](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecUpdate) VNG API to set up the shutdown hours. Configure it under: `launchSpec.scheduling.shutdownHours` as shown below.

Note that `isEnabled` must be set to True in order to enable the shutdown hours.

<img src="/ocean/_media/tutorials-set-running-hours-03.png" width="278" height="514" />

## What's Next?

Learn more about the Create Cluster in Ocean APIs: [K8s AWS](https://docs.spot.io/api/#operation/OceanAWSClusterCreate), [ECS](https://docs.spot.io/api/#operation/OceanECSClusterCreate), [GKE](https://docs.spot.io/api/#operation/OceanGKEClusterCreate)
