# Ocean AKS Cloud Cluster Overview Dashboard

The Cloud Cluster Overview dashboard provides enhanced functionality to analyze the Ocean Autoscaler actions with high granularity and gain deeper insights into its behavior. 
This topic delves into this dashboard's various components and sections, offering a detailed exploration of its capabilities. 

Ocean continuously analyzes the utilization of your nodes in the cloud infrastructure. It automatically scales compute resources to optimize utilization and availability. It achieves this by intelligently combining Spot, Reserved, and On-Demand compute instances.

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
Ocean savings from running on spot are calculated as the difference between the price of on-demand and spot nodes within a specified time range. This calculation considers the number of CPUs, memory, and GPUs running as spot nodes. 

To view these savings, click the **Running on Spot** tab (unless already displayed). 

This tab displays: 

* Total cluster savings and the percentage of the saved cluster costs in the selected time range, where: 
  * Total cluster savings = price for running on-demand instances – price for running spot instances. 
  * Percentage of cluster costs = [total price for running on-demand instances – total price for running spot instances] / total price for running on-demand instances x 100. 

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
  * Pie-chart - Lifecycle percentage breakdown (On-Demand, Savings Plans, Reserved Instances, and spots).
  * Node Name.
  * Virtual Node Group: You can click the link for a listed VNG to display your custom VNG details.
  * Node Pool (name of node pool)
  * VM Size: For example, standard_f4s
  * Lifecycle: (On-Demand, Savings Plans, Reserved Instances, and spots).
  * Scale-Down Timestamp, for example, 06/25/2023 09:23:15
 
<details>
   <summary markdown="span">View image</summary>

 ![image-bin-packs](https://github.com/user-attachments/assets/3661f5dd-fd9e-4584-9767-3701d7dda39a)
 
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
  * List of % and # of Spot. regular (on-demand) and unmanaged nodes.
* Ocean Managed Resources: a widget showing your managed resources.
  * CPU - Total # units, #, and % for managed spot nodes / regular nodes.

## Resource Allocation Panel

![resource-allocation-sample](https://github.com/user-attachments/assets/7aa25b61-8260-4aa4-a122-274786d1ef15)

This panel displays a cluster-level summary with widgets for CPU /Memory /GPU resources allocated to pods. You can review allocation trends over time. Use this information to verify that infrastructure utilization is maintained at 70-80%.
* CPU
* Memory
* GPU

Each widget displays:
* % Workload allocation.
* % Total allocation (including headroom). Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods that are scheduled on Ocean nodes).
  
To view more details:

* Click an item on the legend above the graph to turn its associated curve on or off.
* Select the time period to view at the top-right of the screen ( last 6 hours/1 day/7 days).
* Hover over a curve to see the resource allocation and percentage value at a specific point in time.

>**Note**: The **Nodes** tab shows the percentage workload allocation at the node level.
> The Resource Allocation panel contains widgets for CPU, memory, and GPU allocation per node over time.
> * % Workload allocation.
> * % Total allocation (Including headroom).

<details>
   <summary markdown="span">View image</summary>

![nodes-tab](https://github.com/user-attachments/assets/75ec851a-71c0-4170-8c78-8361f3944f16)

 </details>

## Related Topics

[Scaling - Kubernetes](https://docs.spot.io/ocean/features/scaling-kubernetes)











