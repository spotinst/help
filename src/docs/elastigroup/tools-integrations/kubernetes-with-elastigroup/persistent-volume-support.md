# Persistent Volume Support

## Introduction

The Ocean Controller supports [Persistent Volumes (PV)](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolume) and [Persistent Volume Claims (PVC)](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim). Persistent Volumes are Kubernetes storage resources, while Persistent Volumes Claims are requests for storage resources which consume PVs. Pods using Persistent Volume Claims to request Persistent Volumes are placed only on nodes in the same Availability Zone as the Persistent Volume. You can utilize Persistent Volumes already created or create them dynamically by using storage classes.

> **Tip**: Currently we recommend using `storageClass` PVCs, which provision the PVs dynamically if needed and ensure that Pods can always be scheduled.

## How it Works

The Ocean Controller monitors Pods for Persistent Volume Claims, ensuring that the [Autoscaler](elastigroup/tools-integrations/kubernetes-with-elastigroup/kubernetes-cluster-autoscaling) respects the PVCs during scaling events.

## When Scaling Up

- The `spot-controller` routinely searches for Pods that are pending scheduling.
- The `spot-controller` looks for any Persistent Volume Claims associated with the Pods.
- If PVCs are found, scaling is limited to the Availability Zones (AZs) in which the requested PVs are located.
- Scale up activities limited to specific AZs by Persistent Volume Claims are logged in the Spot Console's Elastilog:

<img src="/elastigroup/_media/persistent-volume-support_1.png" />

## When Scaling Down

When scaling down the Kubernetes cluster, the controller will not terminate nodes that have pods with Persistent Volume Claims.
