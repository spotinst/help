# Ocean AWS K8s Cloud Cluster Overview Dashboard 

The Cloud Cluster Overview dashboard provides enhanced functionality to analyze the Ocean Autoscaler actions with high granularity and gain deeper insights into its behavior. This topic delves into this dashboard's various components and sections, offering a detailed exploration of its capabilities. 

Ocean continuously analyzes the utilization of your nodes in the cloud infrastructure. It automatically scales compute resources to optimize utilization and availability. It achieves this by intelligently combining Spot, Reserved, and On-Demand compute instances. 

The Ocean Cloud Cluster Overview dashboard is divided into the following panels: 

*   **Ocean Savings panel**: Shows the amount of money, CPU, memory, and GPU compute resources saved when you utilize Ocean to manage your Kubernetes cluster. Specifically, these are savings from running spot instances, bin packing, and reverting to lower-cost nodes. 

* **Autoscaling Activity panel**: The Ocean Autoscaler automatically performs scale-up and scale-down, autohealing, and reverts nodes to lower-cost nodes, spots, and commitments based on resources or availability. This panel shows a summary of these autoscaling activities as widgets.

* **Interactive Autoscaling Activity graph**: This graph displays autoscaling activity over time, providing insights into the Ocean infrastructure/applications and cluster activity.

## Access the Ocean Cloud Cluster Overview  

To access the Ocean Cluster Overview dashboard: 

1.  In the left main menu, click **Ocean**, and click **Cloud Clusters**. 

2.  Select a cluster from the list of clusters. 

## Ocean Savings Panel 

![savings-panel-14-08](https://github.com/user-attachments/assets/1bd1c543-fd13-486c-9c6a-c37a3707bf7f)

The Ocean Savings panel contains a set of savings widgets (displayed as tabs), which show your savings according to Ocean’s main autoscaling processes for cluster optimization in a selected time range:  

*   **Running on Spot**: Savings from running on spot nodes instead of OD nodes. 

*   **Bin Packing**: Ocean proactively identifies underutilized nodes and efficiently bin-packs the pods on them to scale down the nodes and reduce the cluster cost. 

*   **Reverting to Lower-Cost node**: This process is applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes to optimize cluster utilization and reduce costs.
*   **Right-sizing**: Ocean savings from right-sizing your workloads.

In this panel: 

*   You can select a time range for displayed data from the drop-down list to the right of the savings widgets. Available options are Last 30 Days, Last 7 Days, and This Month. 

*   For each savings widget, click on "How is it calculated?  

### Ocean Savings from Running on Spot 

Ocean Autoscaler intelligently leverages these spot instances when appropriate, reducing costs while maintaining high availability. This tab lets you view the cost benefits of using spot instances in your cluster. 

Ocean savings from running on spot are calculated as the difference between the price of on-demand and spot nodes within a specified time range. This calculation considers the number of CPUs, memory, and GPUs running as spot nodes. 

To view these savings, click the **Running on Spot** tab (unless already displayed). 

This tab displays: 

*   Total cluster savings and the percentage of the saved cluster costs in the selected time range, where: 

    *   **Total cluster savings** = price for running on-demand instances – price for running spot instances. 
    *   **Percentage of cluster costs** = [total price for running on-demand instances – total price for running spot instances] / total price for running on-demand instances x 100. 

*   CPU resources in vCPU Hours. 
*   Memory resources in GiB Hours. 
*   GPU resources in GPU Hours. 

### Ocean Savings from Bin Packing 

In the context of autoscaling, bin packing savings are calculated based on the vCPU, memory, and GPU resources of the nodes that have been [Scaled Down](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down) by the Ocean Autoscaler. Once a minute, Ocean simulates whether any running pods can be moved to other nodes within the cluster. If so, Ocean drains those nodes to ensure continuous infrastructure optimization and increased cloud savings.   

This process ensures high resource utilization, reducing the number of nodes required and the overall cost. This efficient resource allocation shows you how much you're saving. 

To view these savings, click the **Bin Packing** tab (unless already displayed). 

This tab displays: 

*   Scaled-down nodes: If one or more nodes have been scaled down, the number of scaled-down nodes appears. Click to view the number of nodes scaled down in the selected time range in the Bin Packing window. An entry for each scaled-down node is listed with these details:
    * Pie-chart - Virtual Node Group percentage breakdown for nodes
    * Pie-chart - Lifecycle percentage breakdown (On-Demand, Savings Plans, Reserved Instances, and spots).
    * Instance ID. 
    * Virtual Node Group: You can click the link for a listed VNG to display your custom VNG details.
    * Lifecycle.
    * Scale-Down Timestamp, for example 06/25/2023 09:23:15   

*   Resource savings from bin packing in the following units:  
    * CPU resources saved in vCPU Hours. 
    * Memory resources saved in GiB Hours. 
    * GPU resources saved in GPU Hours.

### Ocean Savings from Reverting to a Lower Cost Node 

This process is applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes. For example, suppose a pod was initially placed on a more expensive node due to resource constraints. In that case, Ocean Autoscaler can replace it with a less expensive node when it becomes available, consequently saving costs. This tab lets you see how much you save from this dynamic resource allocation. 

Ocean savings for reverting to a lower-cost node are calculated from the difference in price between the old node and the new node. For more information, see [Revert to Lower Cost](https://docs.spot.io/ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node) Node. 

To view these savings, click the **Revert to Lower Cost** tab (unless already displayed). 

This tab displays:

*   Nodes reverted to lower cost: If one or more nodes have been reverted to lower cost, the number of reverted nodes appears. Click to view the number of nodes reverted to lower cost in the selected time range in the Revert to Lower Cost window. View the types and costs of the nodes, etc). 

     * Pie chart - Virtual Node Group percentage breakdown for nodes.
      
    Replacement information: an entry for each reverted node is listed with these details:
      
     * Instance ID of the original and reverted nodes.
     * Instance Type of the original and reverted nodes.
     * Lifecycle of the original and reverted nodes.
     * Hourly cost of the original and reverted nodes.
     * Hourly cost saved as a percentage: hourly cost of the reverted node / hourly cost of the original node * 100.
     * The Virtual Node Group's name (click the link for a listed VNG to display your custom VNG details).

*   Resource savings from reverting to lower cost in the following units:  
     * CPU resources saved in vCPU Hours. 
     * Memory resources saved in GiB Hours. 
     * GPU resources saved in GPU Hours.

### Ocean Savings from Right-Sizing Your Workloads

>**Note**: This tab will only be available if the optional Ocean automatic right-sizing feature is installed and enabled in your deployment.

These are your actual savings from using the Ocean automatic right-sizing feature.

To view these savings, click the **Right-Sizing** tab (unless already displayed). 

<img width="750" src="https://github.com/user-attachments/assets/d6c9ba02-430a-4132-ae17-72264dbb8fea" />

>**Note**: If no workloads have been optimized with automatic right-sizing, create and attach right-sizing rules to your workloads in the right-sizing [Advanced Optimization tab](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab).

This tab displays: 
* Total cluster savings from down-sizing recommendations and the percentage of the saved cluster costs in the selected time range, where:
  * <b>Total cluster savings = [costs for workloads based on original requests – cost for workloads based on Ocean-optimized requests]</b>. 
  * Percentage of cluster costs: <b>% savings = [[costs for workloads based on original requests]-[cost for workloads based on Ocean-optimized requests] / [costs for workloads based on original requests] * 100]</b>
 
* CPU resources in vCPU Hours.
* Memory resources in GiB/TiB Hours.
* GPU resources in GPU Hours.

Click **View Details** on the right of the right-sizing tab to see your [actual right-sizing savings](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-savings-tab), 


## Autoscaling Activity Panel 

<img width="1500" src="https://github.com/user-attachments/assets/42d56091-d8a9-4e1c-be4a-1916b97f00a0" />

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

#### Scale Down

Scaling down nodes refers to reducing the resources (such as CPU, memory, GPU) of individual nodes in a cluster. 

Ocean Autoscaler scales down nodes when the cluster is over-provisioned and does not utilize the full capacity of the nodes. In this case, scaling down right-sizes the resources to match the workload. In addition, if specific nodes in a cluster are consistently underutilized, Ocean Autoscaler scales down to redistribute the resources to other nodes or consolidate the workload onto fewer nodes. 

For more information, see [Scale Down](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down). 

The Scale Down widget shows the number of scale-down events and the number of scaled-down nodes in the selected time range. By monitoring these events on the Autoscaling Activity panel, you can track how your cluster optimizes resources and reduces costs. 

#### Revert to Spots

Suppose a node was launched as OD due to the unavailability of spot nodes in the market. In that case, Ocean continuously scans the market for an available spot node and reverts promptly upon finding one. 

The Revert to Spots widget shows the number of events for which an OD node was reverted to a spot node in the selected time range. 

By monitoring these events on the Autoscaling Activity panel, you can see when and how often your cluster takes advantage of cost-saving opportunities by utilizing Spot nodes. 

#### Revert to Commitments

If a node was launched as spot due to the absence of available commitments (Reserved Instances or Savings Plans) to utilize, Ocean persistently scans the market for an available commitment and promptly reverts upon finding one. 

The Revert to Commitments widget shows the number of events for which a spot node was reverted to a commitment in the selected time range.  

By monitoring these events on the Autoscaling Activity panel, you can understand how your cluster is dynamically adapting to changes in the cloud market to maintain optimal operation and taking advantage of cost-saving opportunities by utilizing commitments. 

For more information, see [Reserved Instances](https://docs.spot.io/ocean/tips-and-best-practices/?id=utilize-reserved-instances-for-aws-users). 

#### Revert to Lower Cost

Ocean Autoscaler searches for nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes and reverts these nodes to lower-cost nodes. 

The Revert to Lower Cost widget shows the number of events for which a node was reverted to a lower-cost node in the selected time range. For more information, see [Revert to Lower Cost Node](https://docs.spot.io/ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node).  

Tracking these events on the Autoscaling Activity panel lets you see when and how often your cluster is optimizing for cost savings. 

#### Dynamic Commitments

Ocean reverts from on-demand reserved instances and savings plans when they can be used in other workloads in your AWS account(s) to increase the overall coverage of their commitments. 

Ocean continuously tracks commitments and initiates proactive replacements to increase the account’s commitment coverage and decrease excessive on-demand node usage. Ocean does this by reverting to a different allocation plan or potentially using spot instances based on risk configuration to provide ongoing optimal adjustments. For more information, see [Dynamic Commitments](https://docs.spot.io/ocean/features/dynamic-commitments-aws).

#### Autohealing

Auto Healing monitors the status of each Kubernetes node by examining the condition object, which provides information about various aspects of the node. Specifically, Autohealing focuses on the Ready condition. If the Ready condition indicates a status of False or Unknown, the instance is deemed unhealthy, prompting the initiation of a replacement process. 

The Autohealing widget shows the number of events for which AWS autohealing replaced an unhealthy instance with a healthy instance. By monitoring these autohealing events on the Autoscaling Activity panel, you can track how effectively Ocean Autoscaler maintains your cluster's health and resilience to failures. 

###   Autoscaling Activity Graph

The Autoscaling Activity Graph provides intuitive insights into the interaction between the Ocean infrastructure and the applications it supports. It also provides cluster activity insights at a granular 
level so you can see why the Ocean Autoscaler triggered a specific scale event within the cluster.

The graph displays a breakdown by lifecycle, which you can view by vCPU, Memory, or GPU, together with workload and headroom requests.

The upper graph displays the autoscaling activity to analyze. By default, it displays a full set of activity curves. Click an item on the legend above the graph to turn its associated curve on or off.

These are the curves:

*  Lifecycle Types:
   * Spot.
   * On-demand.
   * Reserved.
   * Savings Plans.

*  Workload Requests: includes running pods and pending pods requests. 
*  Workloads with Headroom: includes running pods, running Headroom pods, pending pods, and pending Headroom pods.

>**Note**: The pending pods include all the pods in the Kubernetes cluster (pods that will be scheduled on Ocean nodes and those that won’t).

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To set the zoom level for the graph</summary>
 
   <div style="padding-left:16px">

1. On the top-right of the screen, select to zoom by 1 hour / 12 hours / 7 days.
2. Use the lower graph to zoom in or out of the selected period by dragging the sizing handles left or right.
>**Tip**: Set the period on the graph to 12 hours or less to view autoscaling events, which are displayed as dots on the graph.

<img width="827" src="https://github.com/user-attachments/assets/b1c08ae6-f2c0-4a5a-b693-a2e20368d05a" />

   </div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To display the autoscaling activity at a specific point on the graph</summary>
 
   <div style="padding-left:16px">

1. Mouse over the upper graph to view the main details.
2. Click **Cluster State Details** to view more information.

This is the information displayed:

* Autoscaling events (displayed for a period of 12 hours or less):
One or more autoscaling events are displayed in blue rectangles. These can be any Ocean autoscaling events displayed as widgets above the graph.
For example, Scale Up, Scale Down, Dynamic Commitments, or Autohealing.

For vCPU/memory(GiB)/GPU:

* Nodes Allocation (vCPU/GiB/GPU):
  * Total node allocation. 
  * Split according to lifecycle types.
*  vCPU/GiB/GPU of Workload:
    *  deamonSets Requested. 
    *  Pods Requested.
    *  Headroom requested.
    *  Total workload allocation percentage (includes only running pods, running headroom pods, and running DaemonSets pods that are scheduled on Ocean nodes).

Total Allocation Calculation:

* Sum of vCPU/Memory/GPU allocation - (running pods + running headroom + running DaemonSets)/nodes allocation.

  </div>
</details>

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">To display detailed information about a specific autoscaling event</summary>
 
   <div style="padding-left:16px">

* Click on an event displayed in a blue rectangle, for example, <img width="93" src="https://github.com/user-attachments/assets/5af702e2-f41e-43c6-ba03-20b5392782e4" />
  for a Scale Down event.

<img width="827" src="https://github.com/user-attachments/assets/80a3d140-e466-4548-91ea-74b749c6f6f2" />

>Note: The information shown in the box depends on the type of event.

The above example shows the pre and post scale resource utilization for the scale-down action. Ocean simulated two running pods that could be moved to other nodes for better node utilization. 
Each pod was rescheduled on a different target node. All the terminated instances were spots.

  </div>
</details>


##  Related Topics 

[Scaling (Kubernetes)](https://docs.spot.io/ocean/features/scaling-kubernetes)

 

 

 

 

 

 

 

 

 
