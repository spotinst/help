<meta name=“robots” content=“noindex”>

# Ocean AWS K8s Cloud Cluster Overview Dashboard 

The Cloud Cluster Overview dashboard provides enhanced functionality to analyze the Ocean Autoscaler actions with high granularity and gain deeper insights into its behavior. This topic delves into the various components and sections of this dashboard, offering a detailed exploration of its capabilities. 

Ocean continuously analyzes the utilization of your nodes in the cloud infrastructure. It automatically scales compute resources to optimize utilization and availability. It achieves this by intelligently combining Spot, Reserved, and On-Demand (OD) compute instances. 

The Ocean Cloud Cluster Overview dashboard is divided into the following panels: 

*   **Ocean Savings panel**: Shows the amount of money, CPU, memory, and GPU compute resources saved when you utilize Ocean to manage your Kubernetes cluster. Specifically, these are savings from running spot instances, bin packing, and reverting to lower-cost nodes. 

* **Autoscaling Activity panel**: The Ocean Autoscaler automatically performs scale-up and scale-down, autohealing, and reverts nodes to lower-cost nodes, spots, and commitments based on resources or availability. This panel shows a summary of these autoscaling activities. 

## Access the Ocean Cloud Cluster Overview  

To access the Ocean Cluster Overview dashboard: 

1.  In the left main menu, click **Ocean**, and click **Cloud Clusters**. 

2.  Select a cluster from the list of clusters. 

## Ocean Savings Panel 

![ocean-savings-panel-3](https://github.com/spotinst/help/assets/159915991/da31b4ee-f38f-4bc9-8ea0-e577105e5c9a)

The Ocean Savings panel contains a set of savings widgets (displayed as tabs), which show your savings according to Ocean’s main autoscaling processes for cluster optimization in a selected time range:  

*   **Running on Spot**: Savings from running on spot nodes instead of OD nodes. 

*   **Bin Packing**: Ocean proactively identifies underutilized nodes and bin-packs the pods on the nodes more efficiently to be able to scale down the nodes and reduce the cluster cost. 

*   **Reverting to Lower-Cost node**: Process applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes to optimize cluster utilization and reduce costs. 

In this panel: 

*   You can select a time range for displayed data from the drop-down list to the right of the savings widgets. Available options are Last 30 Days, Last 7 Days, and This Month. 

*   For each savings widget, you can click on a How is it calculated?  

### Ocean Savings from Running on Spot 

Ocean Autoscaler intelligently leverages these spot instances when appropriate, reducing costs while maintaining high availability. This tab lets you view the cost benefits of using spot instances in your cluster. 

Ocean savings from running on spot are calculated as the difference between the price of OD nodes and spot nodes within a specified time range. This calculation considers the number of CPUs, memory, and GPUs, that are running as spot nodes. 

To view these savings, click the **Running on Spot** tab (unless already displayed). 

This tab displays: 

*   Total cluster savings, and the percentage of the saved cluster costs in the selected time range, where: 

    *   **Total cluster savings** = price for running OD instances – price for running spot instances. 

    *   **Percentage of cluster costs** = [total price for running OD instances – total price for running spot instances] / total price for running OD instances x 100. 

*   CPU resources in vCPU Hours. 

*   Memory resources in GiB Hours. 

*   GPU resources in GPU Hours. 

### Ocean Savings from Bin Packing 

In the context of autoscaling, bin packing savings are calculated based on the vCPU, memory, and GPU resources of the nodes that have been [Scaled Down](https://docs.spot.io/ocean/features/scaling-kubernetes?id=scale-down) by the Ocean Autoscaler. Once a minute, Ocean simulates whether any running pods can be moved to other nodes within the cluster. If so, Ocean drains those nodes to ensure continuous infrastructure optimization and increased cloud savings.   

This process ensures high resource utilization, reducing the number of nodes required and consequently, the overall cost. You can see how much you're saving through this efficient resource allocation. 

To view these savings, click the **Bin Packing** tab (unless already displayed). 

This tab displays: 

*   Scaled-down nodes: If one or more nodes have been scaled down, the number of scaled-down nodes appears. Click to view the number of nodes scaled down in the selected time range in the Bin Packing window. A table entry for each scaled-down node is listed with the following details: 

    *   Instance ID. 

    *   VNG: You can click on the link for a listed VNG to display your custom VNG details. 

    *   Lifecycle. 

    *   Savings %. 

    *   Scale down timestamp. 

*   Resource savings from bin packing in the following units:  

    *   CPU resources saved in vCPU Hours. 

    *   Memory resources saved in GiB Hours. 

    *   GPU resources saved in GPU Hours. 

### Ocean Savings from Reverting to a Lower Cost Node 

This process is applied to nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes. For example, suppose a pod was initially placed on a more expensive node due to resource constraints. In that case, Ocean Autoscaler can replace it with a less expensive node when it becomes available, consequently saving costs. This tab lets you see how much you save from this dynamic resource allocation. 

Ocean savings for reverting to a lower-cost node are calculated from the difference in price between the old node and the new node. For more information, see [Revert to Lower Cost](https://docs.spot.io/ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node) Node. 

To view these savings, click the **Revert to Lower Cost** tab (unless already displayed). 

This tab displays: 

*   **Total savings** = [old instance price – new instance price] x new instance running time. 

*   **Resource savings** = difference in resources used by the old and new instances.  

    *   CPU resources saved in vCPU Hours. 

    *   Memory resources saved in GiB Hours. 

    *   GPU resources saved in GPU Hours. 

## Autoscaling Activity Panel 

![autoscaling-activity-3](https://github.com/spotinst/help/assets/159915991/36ed0e79-70b1-4130-a1fc-95649e4a8126)

The Autoscaling Activity panel contains the following widgets:  

*   Scale Up widget. 

*   Set of Continuous Optimization widgets. 

### Scale Up 

This widget displays scaling-up events, which are instances when the Ocean Autoscaler increases the resources (CPU, memory, storage) in your cluster to accommodate higher workloads. A scale up event is triggered when there are 'unschedulable' pods, i.e., pods that cannot be placed due to insufficient resources like CPU, memory, or GPU on the existing nodes. In response, Ocean Autoscaler identifies the optimal nodes to place these pods and increases the resources accordingly. This process ensures efficient resource allocation, improved performance, and shorter processing times.  

Scaling up nodes also enables allocating more resources to specific tasks, improving performance, and reducing processing time. 

The Scale Up widget shows the number of scale-up events and the number of scaled-up nodes in the selected time range. By tracking these events on the Autoscaling Activity panel, you can monitor how effectively your cluster responds to workload demands. 

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

Ocean Autoscaler searches for nodes with underutilized compute resources that cannot be scaled down from the cluster's set of nodes and reverts these nodes to lower cost nodes. 

The Revert to Lower Cost widget shows the number of events for which a node was reverted to a lower-cost node in the selected time range. For more information, see [Revert to Lower Cost Node](https://docs.spot.io/ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node).  

By tracking these events on the Autoscaling Activity panel, you can see when and how often your cluster is optimizing for cost savings. 

#### Autohealing

Auto Healing monitors the status of each Kubernetes node by examining the condition object, which provides information about various aspects of the node. Specifically, Autohealing focuses on the Ready condition. If the Ready condition indicates a status of False or Unknown, the instance is deemed unhealthy, prompting the initiation of a replacement process. 

The Autohealing widget shows the number of events for which AWS autohealing replaced an unhealthy instance with a healthy instance. By monitoring these autohealing events on the Autoscaling Activity panel, you can track how effectively Ocean Autoscaler maintains your cluster's health and resilience to failures. 

##  Related Topics 

[Scaling (Kubernetes)](https://docs.spot.io/ocean/features/scaling-kubernetes)

 

 

 

 

 

 

 

 

 
