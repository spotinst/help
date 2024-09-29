<meta name="robots" content="noindex">

# Manage Virtual Node Groups (AKS)

Virtual Node Groups (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster. 
This topic describes how to create, view, edit, and delete virtual node groups in Ocean.

>**IMPORTANT:** Before starting, make sure you have an up-and-running Ocean cluster.

## Access the Virtual Node Group Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **Virtual Node Groups** tab to display the virtual node groups list.

ADD SCREENSHOT HERE

This list lets you track live data per virtual node group and contains the following information:
*  ID: The identification code of the virtual node group.
*  Name: The user-defined name of the virtual node group. (If a virtual node group were defined without a name, it would appear as Unnamed).
*  Resource Allocation: Percent of defined CPU, Memory, and GPU currently used by the virtual node group.
*  Running Pods: Number of pods used by the virtual node group.
*  Nodes: Number of nodes used by the virtual node group.
*  Node Labels: Number of node labels the virtual node group uses.
*  Node Taints: Number of taints used by the virtual node group.
*  Tags: Number of tags used by the virtual node group.
*  Max Nodes: Maximum number of nodes defined for the virtual node group.

## Create/Edit a Virtual Node Group

To create/edit a Virtual Node Group:

1. In the Virtual Node Groups tab, click **Create VNG** above the list on the right of the screen (or to edit an existing virtual node group, click the link on the virtual node group's name in the list).
2. If you are creating a virtual node group, select one of these options.
   * Configure Manually: All virtual node group fields will be taken from the virtual node group Template.
   * Import configurations from Node Pools: Values are copied from the cloud service provider node group entity to the Ocean configuration. Later, there will be no active connection between these two entities. Ocean will provision new VMs, not as part of a managed Kubernetes service of node group entities.
  
ADD SCREENSHOT HERE

3. Edit the parameters in the New Virtual Node Group screen. Parameters left blank take values from the virtual node group Template.

### General Parameters





