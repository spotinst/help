<meta name="robots" content="noindex">

# Ocean AKS Cloud Cluster Overview Dashboard

The Cloud Cluster Overview dashboard provides enhanced functionality to analyze the Ocean Autoscaler actions with high granularity and gain deeper insights into its behavior. 
This topic delves into this dashboard's various components and sections, offering a detailed exploration of its capabilities. 

Ocean continuously analyzes the utilization of your nodes in the cloud infrastructure. It automatically scales compute resources to optimize utilization and availability. It achieves this by intelligently combining Spot, Reserved, and On-Demand compute instances.

* Ocean Savings panel shows the amount of money, CPU, memory, and GPU compute resources saved when you utilize Ocean to manage your Kubernetes cluster. Specifically, these are savings from running spot instances, bin packing, and reverting to lower-cost nodes. 
* The Ocean Managed Nodes and Resources panel shows information about your Ocean-managed and unmanaged nodes and your managed CPU, memory, and GPU resources.
* Resource Allocation panel shows resource allocation information about your managed CPU, memory, and GPU resources at the cluster level.
  * Drill down to view resource allocation information at the node level in the Nodes tab.

## Access the Ocean Cloud Cluster Overview

To access the Ocean Cluster Overview dashboard: 
1. In the left main menu, click Ocean > Cloud Clusters.
2. Select a cluster from the list of clusters. 

## Ocean Savings Panel

placeholder for screencap

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
* Memory resources in GiB Hours.
* GPU resources in GPU Hours. 







