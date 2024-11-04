<meta name="robots" content="noindex">

# Manage Virtual Node Groups (GKE)

Virtual Node Groups (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.
This topic describes how to create, view, edit, and delete virtual node groups in Ocean. See also [Default Virtual Node Group](https://docs.spot.io/ocean/features/vngs/?id=default-virtual-node-group).

>**IMPORTANT**: Before starting, ensure you have an up-and-running Ocean cluster.

## Access the Virtual Node Group Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **Virtual Node Groups** tab to display the virtual node groups list.

Screenshot

The virtual nodes group list lets you track live data per virtual node group and contains the following information:

* ID: The identification code of the virtual node group.
* Name: The user-defined name of the virtual node group. (If a virtual node group were defined without a name, it would appear as Unnamed).
* Resource Allocation: Percent of defined CPU, Memory, and GPU currently used by the virtual node group.
* Running Pods: Number of pods used by the virtual node group.
* Node Count: Number of nodes used by the virtual node group.
* Max Nodes: Maximum number of nodes defined for the virtual node group.

## Create/Edit a Virtual Node Group






