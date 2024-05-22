<meta name=“robots” content=“noindex”>

#  Ocean EKS Cluster Right Sizing 

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization. 

Container resource requests, defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect CPU and memory requirements assumptions can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right-sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application over time. This way, you can define better resource requirements based on actual consumption to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 

Ocean provides container-level right-sizing recommendations so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  

Before you attempt to fine-tune your cluster resources according to Ocean's recommendation, make sure that you have the following: 

*  A Spot account. 
*  Metrics Server installed in your Kubernetes cluster. 
*  Ocean cluster managing your Kubernetes worker nodes. 
*  [Ocean Controller Version 2](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) installed and running. From version 2.0.52 
*  To enable this feature, contact your support team via email or chat.

##  How It Works 

For Ocean Kubernetes clusters, Right Sizing utilizes the Metrics Server and initializes recommendations after one hour of initial data collection. 

Once every fifteen seconds, the controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods). Based on the last two weeks of collected metrics, Ocean calculates relevant consumption metrics for each resource, such as CPU and Memory, and bases its recommendations on these calculated metrics. 

[placeholder for graphic]

The output produces a single point-in-time data point for each pod. Ocean then aggregates the pods' data per workload container. 

The aggregation includes maximum, minimum, and mean resource utilization values, which will be used in the recommendation generation process to ensure that each pod’s utilization is considered properly. 

Using the per-workload container aggregated data points, Ocean makes recommendations based on a mechanism that attempts to even out peaks and troughs in resource demand. The Right-Sizing engine runs every hour to generate new recommendations and update existing ones. 

*  Recommendations for decreasing resource requests are based on the above-described calculation using the 99th Percentile of the maximum resource utilization data collected (e.g., max_memory_utilization). 
*  Recommendations for increasing resource requests are based on the above-described calculation using the 85th Percentile mean resource utilization data collected (e.g., mean_memory_utilization). Currently, Ocean generates recommendations for Kubernetes deployments, statefulsets, SpotDeployments, and daemonsets.

You view Right Sizing recommendations via: 

*  Ocean console, under the Cloud Cluster Right Sizing Recommendation tab [put link here]. 
*  [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanAwsFilterRightSizingWithFilter).






