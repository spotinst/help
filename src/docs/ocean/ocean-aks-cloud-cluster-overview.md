# Ocean AKS Cloud Cluster Overview Dashboard

The Cloud Cluster Overview dashboard provides enhanced functionality to analyze the Ocean Autoscaler actions with high granularity and gain deeper insights into its behavior. 
This topic delves into this dashboard's various components and sections, offering a detailed exploration of its capabilities. 

Ocean continuously analyzes the utilization of your nodes in the cloud infrastructure. It automatically scales compute resources to optimize utilization and availability. It achieves this by intelligently combining spot, reserved, and regular compute instances.

* Ocean Savings panel shows the amount of money, CPU, memory (GiB/TiB), and GPU compute resources saved when you utilize Ocean to manage your Kubernetes cluster. Specifically, these are savings from running spot instances, bin packing, and reverting to lower-cost nodes. 
* The Ocean Managed Nodes and Resources panel shows information about your Ocean-managed and unmanaged nodes and your managed CPU, memory, and GPU resources.
* Resource Allocation panel shows resource allocation information about your managed CPU, memory (GiB/TiB), and GPU resources at the cluster level.
  * Drill down to view resource allocation information at the namespace, Virtual Node Group, node pool, or node level. Each has a dedicated tab to the right of the Overview tab.

## Access the Ocean Cloud Cluster Overview

To access the Ocean Cluster Overview dashboard: 
1. click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters. 

## Ocean Savings Panel

![savings-tab-sample2](https://github.com/user-attachments/assets/d36f3ea4-215a-4eb1-bad3-a6acdd3533f6)

The Ocean Savings panel contains a set of savings widgets (displayed as tabs), which show your savings according to Ocean’s main autoscaling processes for cluster optimization in a selected time range:  

* Running on Spot: Savings from running on spot nodes instead of OD nodes. 
* Bin Packing: Ocean proactively identifies underutilized nodes and efficiently bin-packs the pods on them to scale down the nodes and reduce the cluster cost.

In this panel: 

* You can select a time range for displayed data from the drop-down list to the right of the savings widgets. Available options are Last 30 Days, Last 7 Days, and This Month. 
* For each savings widget, click on "How is it calculated?  

## Ocean Savings from Running on Spot

Ocean Autoscaler intelligently leverages these spot instances when appropriate, reducing costs while maintaining high availability. This tab lets you view the cost benefits of using spot instances in your cluster. 
Ocean savings from running on spot are calculated as the difference between the price of regular and spot nodes within a specified time range. This calculation considers the number of CPUs, memory, and GPUs running as spot nodes. 

To view these savings, click the **Running on Spot** tab (unless already displayed). 

This tab displays: 

* Total cluster savings and the percentage of the saved cluster costs in the selected time range, where: 
  * Total cluster savings = price for running regular instances – price for running spot instances. 
  * Percentage of cluster costs = [total price for running regular instances – total price for running spot instances] / total price for running regular instances x 100. 

* CPU resources in vCPU Hours.
* Memory resources in GiB/TiB Hours.
* GPU resources in GPU Hours.

## Ocean Savings from Bin Packing

In the context of autoscaling, bin packing savings are calculated based on the vCPU, memory, and GPU resources of the nodes that have been [Scaled Down](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down) by the Ocean Autoscaler. Once a minute, Ocean simulates whether any running pods can be moved to other nodes within the cluster. If so, Ocean drains those nodes to ensure continuous infrastructure optimization and increased cloud savings.   

This process ensures high resource utilization, reducing the number of nodes required and the overall cost. This efficient resource allocation shows you how much you're saving. 

To view these savings, click the **Bin Packing** tab (unless already displayed). 

![bin-packing-tab](https://github.com/user-attachments/assets/9f1de767-b7c3-4336-9f16-bc150a914397)

This tab displays: 

* Number of Scaled-down nodes: If one or more nodes have been scaled down, click the link on the button to view details. 
  * Pie-chart - Virtual Node Group percentage breakdown for nodes.
  * Pie-chart - Lifecycle percentage breakdown (regular, Savings Plans, Reserved Instances, and spots).
  * Node Name.
  * Virtual Node Group: You can click the link for a listed Virtual Node Group to display more details.
  * Node Pool (name of node pool)
  * VM Size: For example, standard_f4s
  * Lifecycle: (regular, Savings Plans, Reserved Instances, and spots).
  * Scale-Down Timestamp, for example, 06/25/2023 09:23:15
 
<details>
   <summary markdown="span">View image</summary>

   <img src="https://github.com/user-attachments/assets/cd441ec3-7fe1-4e8f-9c31-888a000105ef"/>

</details>

* Resource savings from bin packing in the following units:
  * CPU resources saved in vCPU Hours.
  * Memory resources saved in GiB Hours.
  * GPU resources saved in GPU Hours.

## Ocean Managed Nodes and Resources Panel

![managed-nodes-resources](https://github.com/user-attachments/assets/3b5a9bb0-b3d2-4b75-b510-88f5de04afbc)

This panel contains a set of widgets that display categorized information on your managed nodes and resources.

* Ocean-Managed Nodes: a widget that shows the following:
  * Pie-chart - numerical breakdown for managed/unmanaged nodes. Hover over the chart to view more information.
  * List of % and # of Spot. regular (regular) and unmanaged nodes.
* Ocean Managed Resources: a widget showing your managed resources.
  * CPU - Total # units, #, and % for managed spot nodes / regular nodes.

## Resource Allocation Panel

![resource-allocation-sample](https://github.com/user-attachments/assets/7aa25b61-8260-4aa4-a122-274786d1ef15)

This panel displays a **cluster-level** summary with widgets for CPU /Memory /GPU resources allocated to pods. You can review allocation trends over time. Use this information to verify that infrastructure utilization is maintained at 70-80%.
* CPU
* Memory
* GPU

Each widget displays:
* % Workload allocation.
* % Total allocation (including headroom). Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods scheduled on Ocean nodes).

To view more details:
* Click an item on the legend above the graph to turn its associated curve on or off.
* Select the time period to view at the top-right of the screen ( last 6 hours/1 day/7 days).
* Hover over a curve to see the resource allocation and percentage value at a specific point in time.

>**Note**: The **Nodes** tab shows the percentage workload allocation at the **node level**.
> The Resource Allocation panel contains widgets for CPU, memory, and GPU allocation per node over time.
> * % Workload allocation.
> * % Total allocation (Including headroom).

<details>
   <summary markdown="span">View image</summary>

![nodes-tab](https://github.com/user-attachments/assets/75ec851a-71c0-4170-8c78-8361f3944f16)

 </details>


<!--! new-->
## Autoscaling Activity Panel 

![autoscaling-panel-14-08](https://github.com/user-attachments/assets/6db596fa-2705-4af4-96c0-060cfaefd6cb)

The Autoscaling Activity panel contains the following widgets:  

*   Scale Up widget. 
*   Set of Continuous Optimization widgets.
*   Autoscaler graph.

### Scale Up 

This widget displays scaling-up events, which are instances when the Ocean Autoscaler increases the resources (CPU, memory, storage) in your cluster to accommodate higher workloads. A scale-up event is triggered when there are 'unschedulable' pods, i.e., pods that cannot be placed due to insufficient resources like CPU, memory, or GPU on the existing nodes. In response, Ocean Autoscaler identifies the optimal nodes to place these pods and increases the resources accordingly. This process ensures efficient resource allocation, improved performance, and shorter processing times. 

Scaling up nodes also enables allocating more resources to specific tasks, improving performance and reducing processing time. 

The Scale Up widget shows the number of scale-up events and scaled-up nodes in the selected time range. Tracking these events on the Autoscaling Activity panel allows you to monitor how effectively your cluster responds to workload demands. 

For more information, see [Scale Up](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-up). 

### Continuous Optimization 

Ocean Autoscaler performs several automatic processes to optimize cluster resources.  





Scaling down nodes refers to reducing the resources (such as CPU, memory, GPU) of individual nodes in a cluster. 

Ocean Autoscaler scales down nodes when the cluster is over-provisioned and does not utilize the full capacity of the nodes. In this case, scaling down right-sizes the resources to match the workload. In addition, if specific nodes in a cluster are consistently underutilized, Ocean Autoscaler scales down to redistribute the resources to other nodes or consolidate the workload onto fewer nodes. 

For more information, see [Scale Down](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down). 

The Scale Down widget shows the number of scale-down events and scaled-down nodes in the selected time range. By monitoring these events on the Autoscaling Activity panel, you can track how your cluster optimizes resources and reduces costs. 

#### Revert to Spots

Suppose a node was launched as OD due to the unavailability of spot nodes in the market. In that case, Ocean continuously scans the market for an available spot node and reverts promptly upon finding one. 

The Revert to Spots widget shows the number of events for which a regular node was reverted to a spot node in the selected time range. 

By monitoring these events on the Autoscaling Activity panel, you can see when and how often your cluster utilizes spot nodes to take advantage of cost-saving opportunities. 

#### Revert to Commitments

If a node was launched as a spot due to the absence of available commitments (Reserved Instances or Savings Plans) to utilize, Ocean persistently scans the market for an available commitment and promptly reverts upon finding one. 

The Revert to Commitments widget shows the number of events for which a spot node was reverted to a commitment in the selected time range.  

By monitoring these events on the Autoscaling Activity panel, you can understand how your cluster is dynamically adapting to changes in the cloud market to maintain optimal operation and taking advantage of cost-saving opportunities by utilizing commitments. 

For more information, see [Reserved Instances](https://docs.spot.io/ocean/tips-and-best-practices/?id=utilize-reserved-instances-for-aws-users). 

#### Revert to Lower Cost

Ocean Autoscaler searches for nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes and reverts these nodes to lower-cost nodes. 

The Revert to Lower Cost widget shows the number of events for which a node was reverted to a lower-cost node in the selected time range. For more information, see [Revert to Lower Cost Node](https://docs.spot.io/ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node).  

Tracking these events on the Autoscaling Activity panel lets you see when and how often your cluster is optimizing for cost savings. 

###   Autoscaling Activity Graph

The Autoscaling Activity Graph provides intuitive insights into the interaction between the Ocean infrastructure and the applications it supports. It also provides cluster activity insights at a granular 
level so you can see why the Ocean Autoscaler triggered a specific scale event within the cluster.

The graph displays a breakdown by lifecycle, which you can view by vCPU, Memory, or GPU, together with workload and headroom requests.

![activity-graph-screen-1](https://github.com/user-attachments/assets/9be9c4db-ea65-4bd1-a195-dd549d76770a)

The upper graph displays the autoscaling activity to analyze. By default, it displays a full set of activity curves. Click an item on the legend above the graph to turn its associated curve on or off.

These are the curves:

*  Lifecycle Types:
   * Spot.
   * Regular.
   * Reserved.
   * Savings Plans.

*  Workload Requests: includes running pods and pending pods requests. 
*  Workloads with Headroom: includes running pods, running Headroom pods, pending pods, and pending Headroom pods.

>**Note**: The pending pods include all the pods in the Kubernetes cluster (pods that will be scheduled on Ocean nodes and those that won’t).

To set the zoom level for the graph:

1. On the top-right of the screen, select to zoom by 1 hour / 12 hours / 7 days.
2. Use the lower graph to zoom in or out of the selected period by dragging the sizing handles left or right.
>**Tip**: Set the period on the graph to 12 hours or less to view autoscaling events, which are displayed as dots on the graph.

![activity-graph-screen-2](https://github.com/user-attachments/assets/0583b815-7e68-4208-9edb-049171ccb3a6)

To display the autoscaling activity at a specific point on the graph:

1. Mouse over the upper graph to view the main details.
2. Click **Cluster State Details** to view more information.

This is the information displayed:

* Autoscaling events (displayed for a period of 12 hours or less):
One or more autoscaling events are displayed in blue rectangles. These can be any Ocean autoscaling scale-up and scale-down events displayed as widgets above the graph.
For example, Scale Up or Scale Down.

For vCPU:

* Nodes Allocation (vCPU):
  * Total node allocation. 
  * Split according to lifecycle types.
*  vCPU of Workload:
    *  deamonSets Requested. 
    *  Pods Requested.
    *  Headroom requested.
    *  Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods that are scheduled on Ocean nodes).

For Memory: 

* Nodes Allocation (GiB):
  * Total node allocation. 
  * Split according to lifecycle types.
*  Workload (GiB):
    *  deamonSets Requested. 
    *  Pods Requested.
    *  Headroom requested.
    *  Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods that are scheduled on Ocean nodes).

For GPU:

* Nodes Allocation (GPU):
  * Total node allocation. 
  * Split according to lifecycle types.
*  GPU of Workload:
    *  deamonSets Requested. 
    *  Pods Requested.
    *  Headroom requested.
    *  Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods that are scheduled on Ocean nodes).

Total Allocation Calculation:

* Sum of vCPU/Memory/GPU allocation - (running pods + running headroom + running DaemonSets)/nodes allocation. 

 

## Related Topics

[Scaling - Kubernetes](https://docs.spot.io/ocean/features/scaling-kubernetes)











