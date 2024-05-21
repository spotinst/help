# Migrate Workload using the Spot API

This page describes migrating existing AKS Kubernetes workloads into an Ocean cluster.

Before you start this procedure, review the [prerequisites]()

##  Step 1: Get Started with the Workload Migration

The Get Migration Discovery API call returns the information about nodes that can be migrated into Ocean and the number of pods running on each node if the flag is true.

Additionally, the API call returns a Virtual Node Group parameter based on the node's labels and taints.

If the node does not have labels or taints, the value returns as Default (String).

If a match is found, this method returns the ID of the first matching Virtual Node Group.

A Virtual Node Group does not match the node’s labels and taints if the value is null. If a Virtual Node Group is not found, the Ocean Autoscaler won’t be able to scale up a node with these labels and taints. So, if the value is null, create a Virtual Node Group with the required labels and taints.
