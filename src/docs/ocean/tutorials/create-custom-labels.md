# Create Custom Labels

In this tutorial you will learn how to use custom labels with Ocean Launch Specifications.

## Relevance

This tutorial is relevant for Kubernetes users.

## Label Definition

Labels are key and value pairs that are attached to objects such as pods. Labels enable you to constrain a pod to run only on particular nodes or have a preference for a particular node.

Ocean supports custom label selectors, built-in node labels, and affinity/anti-affinity for pods and nodes.

Once configured, Ocean considers the constraints and launches capacity only when pods that have the predefined labels are waiting to be scheduled.

## Step 1: Label the Pods

Ensure that your pods are labeled properly. See the [Kubernetes documentation](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/) for more information.

## Step 2: Define the Custom Labels in Ocean

1. In your Ocean cluster, go to Actions and click Launch Specifications.
2. Click Add Launch Specification. This will add a new Launch Specification to your Ocean Cluster.
3. In the Launch Specification, add a key and value pair for the custom label and click Add.

<img src="/ocean/_media/tutorials-create-custom-label-01.png" />

## Step 3: Add Labels to the Nodes

### Add Labels to EKS

Add labels to the nodes by using the user data:

`--kubelet-extra-args --node-labels=mykey=myvalue,mykey2=myvalue2`

For example:

```sh
#!/bin/bash
set -o xtrace
/etc/eks/bootstrap.sh Ocean_Cluster --kubelet-extra-args --node-labels=mykey=myvalue,mykey2=myvalue2
For all of the above, new nodes will be launched with new labels.
```

### Add Labels to kOps Clusters

These are clusters that were created by kOps natively.

1. Recognize the IG name you originally created (`nodes` in the following example):
2. Run `kops edit ig nodes` and add the relevant label.

<img src="/ocean/_media/tutorials-create-custom-label-02.png" />

3. Run `kops update cluster`.

## What's Next?

Learn how to [Manage Virtual Node Groups](ocean/tutorials/manage-virtual-node-groups).
