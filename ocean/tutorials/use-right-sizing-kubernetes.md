<meta name=“robots” content=“noindex”>

# Ocean AWS Kubernetes Cluster Right Sizing 

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization.  
Container resource requests, which are defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect assumptions for CPU and memory requirements can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application, over time. This way, you can define better resource requirements, based on actual consumption, to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 
Ocean provides container-level right-sizing recommendations, so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  
Before you attempt to fine-tune your cluster resources according to Ocean recommendation, make sure that you have the following: 
  * A Spot account. 
  * An AWS account. 
  * [Metrics Server](https://github.com/kubernetes-incubator/metrics-server#deployment) installed in your Kubernetes cluster. 
  * Ocean cluster managing your Kubernetes worker nodes. 
  * New Ocean controller installed. 

## How It Works 
For Ocean Kubernetes clusters, Right Sizing utilizes the Metrics Server and initializes recommendations after an initial data collection of four full days.
Once every fifteen seconds, the controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods).
Based on the last two weeks of collected metrics, Ocean calculates relevant consumption metrics for each resource, such as CPU and Memory, and bases its recommendations on these calculated metrics.

[screencap] 

The output produces a single point in time data point for each pod. Ocean then aggregates the data of the pods per workload container.
The aggregation is made to include maximum, minimum  and mean resource utilization values, which will be used in the recommendation generation process to ensure that each pod’s utilization is considered properly.
Using the per-workload container  aggregated data points, Ocean makes recommendations based on a mechanism that attempts to even out peaks and troughs in resource demand. The Right Sizing engine runs every six hours   to generate new recommendations and update existing ones.
•	Recommendations for decreasing resource requests are based on the above-described calculation using the 99th Percentile  of the maximum resource utilization data collected (e.g., max_memory_utilization).
•	Recommendations for increasing resource requests are based on the above-described calculation using the 85th Percentile mean resource utilization data collected (e.g., mean_memory_utilization).
  Currently, Ocean generates recommendations for Kubernetes deployments, statefulsets, SpotDeployments  and daemonsets.

You view Right Sizing recommendations on your Ocean console, under the Cloud Cluster Right Sizing tab (described later in this topic). 
Alternatively, you can get the Right Sizing recommendations through the [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanAwsFilterRightSizingWithFilter) 

## View Right Sizing for a Cluster 

Ocean provides resource recommendations to assist in adjusting deployment requests based on actual CPU and memory consumption. 
Resource resize recommendations are triggered when the requested resources deviate by 15% or more from the average metric recorded during the last two weeks. If the requested resources are either 15% above or 15% below the average metric, Ocean suggests resizing the resources to align them more closely with the observed consumption patterns. 
These recommendations can help optimize resource allocation and ensure that the requested resources align with the actual CPU and memory consumption, leading to improved efficiency and cost-effectiveness in managing your deployments. 

To view right sizing for a cluster:
1. In the left main menu, click Ocean, and click Cloud Clusters. 
2. Select a cluster from the list of clusters. 
3. Click the Right Sizing tab. 

The Right Sizing tab displays a dashboard divided into the following panels: 
 * Right Sizing Savings panel: Displays a summary of your potential max. savings from right sizing, and vCPU and memory usage and recommendations, for a selected namespace, workload, and container. 
 * Right Sizing Resource Usage panel: Displays a graphical representation of your vCPU and memory resources usage in the last two weeks. 
 * Right Sizing Recommendations panel: Displays your right sizing recommendations per deployment, and lets you drill down to view your right sizing recommendations per container. 

Note: If the Right Sizing tab does not display any data: 
 * Make sure that your metrics server is installed and functioning correctly. 
 * The initial four-day data collection period may not have elapsed. 

## Right Sizing Savings Panel

[screen capture]

The Right Sizing Savings panel contains a set of savings widgets, which show your potential savings from Ocean cluster right sizing, derived from data collected in the last two weeks:  
 * Potential Monthly Max. Savings. 
 * vCPU Usage: Used and allocated vCPU resources, a recommendation to increase or decrease the vCPU resources, and the percentage of overprovisioning. 
 * Memory Usage: Used and allocated memory resources, a recommendation to increase or decrease the memory resources, and the percentage of overprovisioning. 

In this panel: 
 * Select a namespace, workload, and container to filter your deployments from the provided drop-down lists. 

## Right Sizing Resource Usage Panel

[screen capture]

The Right Sizing Resources Usage panel contains two widgets: 
 * vCPU usage in last two weeks: Displays graphs for used, allocated, and recommended vCPU usage, based on data from the last two weeks. 
 * Memory usage in last two weeks: Displays graphs for used, allocated, and recommended memory usage, based on data from the last two weeks. 

## Right Sizing Recommendations Panel

[screen capture]

The Right Sizing Recommendations panel displays a tabulated list of your workloads with: 
 * Recommendations for vCPU and memory right sizing per deployment. Recommended increases are shown with a green Up arrow and recommended decreases are shown with a red Down arrow.  
 * Potential monthly max. savings if you adopt these recommendations.

To view a list of your potential savings and recommendations per container: 
Click on a workload link to drill down to the containers. For each container, you can then view the following: 
 * vCPU Request: showing current and Avg. utilization, and a recommended increase or decrease for this resource (in vCPU units). If no changes are required, a Keep icon is displayed. 
 * Memory Request: showing current and Avg. utilization, and a recommended increase or decrease for this resource (in MiB units). If no changes are required, a Keep icon is displayed. 
 * Right Sizing Recommendations: showing the recommended changes in vCPU and memory. Click on the Copy icon to save these changes for later. 

# Related Topics 

[link for feature topic] 
[Link for Right Sizing recommendations via the API](link)

