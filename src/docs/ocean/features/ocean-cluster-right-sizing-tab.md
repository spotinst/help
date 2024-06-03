<meta name=“robots” content=“noindex”>

#  Ocean EKS Cluster Automatic Right Sizing 

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization. 

Container resource requests, defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect CPU and memory requirements assumptions can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right-sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application over time. This way, you can define better resource requirements based on actual consumption to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 

Ocean provides container-level right-sizing recommendations so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  

##  Prerequisites

Before you attempt to fine-tune your cluster resources according to Ocean's recommendation, make sure that you have the following: 

*  A Spot account. 
*  Metrics Server installed in your Kubernetes cluster. 
*  Ocean cluster managing your Kubernetes worker nodes. 
*  [Ocean Controller Version 2.0.52 and above](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) installed and running.
   *  Make sure to install the [Metrics Server](https://github.com/kubernetes-incubator/metrics-server#deployment).
*  Vertical Pod Autoscaler project (VPA) Version 1.0.0 and above installed on your cluster. Otherwise, run the following commands:

```sh

helm repo add spot https://charts.spot.io 
helm repo update 
helm install <my-release-name> spot/ocean-vpa
```
>**Note**:To turn on Automatic Right-Sizing, contact your [support](https://spot.io/support/) team via email or chat.

##  Limitations  

*  If Vertical Pod Autoscaler custom resources already exist for your workloads before using Ocean Automatic right sizing, do not create any Rule Matching for them. 
*  Supported manifests: Deployments, DaemonSets, and statefulSets  
*  Workloads must have more than one replica for restart capability. 


##  How It Works 

For Ocean Kubernetes clusters, Right Sizing utilizes the Metrics Server and initializes recommendations after one hour of initial data collection. 

Once every fifteen seconds, the controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods). Based on the last two weeks of collected metrics, Ocean calculates relevant consumption metrics for each resource, such as CPU and Memory, and bases its recommendations on these calculated metrics. 

![features-rightsizing-01a](https://github.com/spotinst/help/assets/159915991/4ded53db-21ff-4a17-82b2-77b32c598351)

The output produces a single point-in-time data point for each pod. Ocean then aggregates the pods' data per workload container. 

The aggregation includes maximum, minimum, and mean resource utilization values, which will be used in the recommendation generation process to ensure that each pod’s utilization is considered properly. 

Using the per-workload container aggregated data points, Ocean makes recommendations based on a mechanism that attempts to even out peaks and troughs in resource demand. The Right-Sizing engine runs every hour to generate new recommendations and update existing ones. 

*  Recommendations for decreasing resource requests are based on the above-described calculation using the 99th Percentile of the maximum resource utilization data collected (e.g., max_memory_utilization). 
*  Recommendations for increasing resource requests are based on the above-described calculation using the 85th Percentile mean resource utilization data collected (e.g., mean_memory_utilization).
*  Currently, Ocean generates recommendations for Kubernetes deployments, statefulsets, SpotDeployments, and daemonsets.

You view Right Sizing recommendations via: 

*  Ocean console, under the Cloud Cluster Right Sizing Recommendation tab [put link here]. 
*  [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanAwsFilterRightSizingWithFilter).

##  View Right Sizing for a Cluster 

Ocean provides resource recommendations to assist in adjusting deployment requests based on actual CPU and memory consumption. 

Resource resize recommendations are triggered when the requested resources deviate by 15% or more from the average metric recorded during the last two weeks. If the requested resources are either 15% above or 15% below the average metric, Ocean suggests resizing them to align them more closely with the observed consumption patterns. 

These recommendations can help optimize resource allocation and ensure that the requested resources align with the actual CPU and memory consumption, improving efficiency and cost-effectiveness in managing your deployments. 

To view right-sizing for a cluster:   

1.  In the left main menu, click **Ocean**, and click **Cloud Clusters**. 
2.  Select a cluster from the list of clusters. 
3.  Click the **Right Sizing** tab. 

The Right-Sizing tab displays a Dashboard divided into the following panels: 

*  The Right-Sizing Savings panel summarizes your potential maximum savings from right-sizing, vCPU, and memory usage and recommendations for a selected namespace, workload, and container. 
*  Right-sizing Resource Usage panel: This panel graphically displays your vCPU and memory resource usage in the last two weeks. 

>**Note**: If the Right Sizing tab does not display any data: 

*  Make sure that your metrics server is installed and functioning correctly. 
*  The initial one-hour data collection period may not have elapsed. 

>**Note**: You can filter your data according to namespaces, workloads/containers, or labels, from the provided drop-down menus.

###  Right Sizing Savings Panel 

The Right-Sizing Savings panel contains a set of savings widgets, which show your potential savings from Ocean cluster right sizing, derived from data collected in the last two weeks:  

*  Potential Monthly Maximum Savings. 
*  vCPU Usage: Used and allocated vCPU resources, a recommendation to increase or decrease the vCPU resources, and the percentage of overprovisioning. 
*  Memory Usage: Used and allocated memory resources, a recommendation to increase or decrease the memory resources, and the percentage of overprovisioning. 

![right-sizing-savings-panel](https://github.com/spotinst/help/assets/159915991/3693d491-2caa-4254-ae5c-4eafa6123b89)

###  Right Sizing Resource Usage Panel 

The right Sizing Resources Usage panel contains two widgets: 

*  vCPU usage in the last two weeks: Displays graphs for used, allocated, and recommended vCPU usage, based on data from the last two weeks. 
*  Memory usage in the last two weeks: Displays graphs for used, allocated, and recommended memory usage based on data from the last two weeks. 

![right-sizing-usage-panel](https://github.com/spotinst/help/assets/159915991/82488c4a-5683-432b-b589-a30b1d15ed99)

