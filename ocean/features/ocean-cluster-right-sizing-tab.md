<meta name=“robots” content=“noindex”>

#  Ocean Cluster Automatic Right Sizing

Cloud service provider relevance: <font color="#FC01CC">EKS</font> and <font color="#FC01CC">AKS</font>

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization. 

Container resource requests, defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect CPU and memory requirements assumptions can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right-sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application over time. This way, you can define better resource requirements based on actual consumption to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 

Ocean provides container-level right-sizing recommendations so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  

##  Prerequisites

Before you attempt to fine-tune your cluster resources according to Ocean's recommendation, you will need: 

*  A Spot account. 
* Ocean cluster managing your Kubernetes worker nodes. 
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

*  Supported manifests: Deployments, DaemonSets, and statefulSets.  
*  JVM xms and xmx are not considered in Ocean’s sizing recommendations
*  Unsupported HPA types: Any HPA not managed by GitOps or Helm
*  Recommendations are calculated based on hard-coded percentile values. This cannot be modified manually.
*  For supported HPA types - Righy Sizing will apply recommendations to the resource opposite to the trigger set.
*  If Vertical Pod Autoscaler custom resources already exist for your workloads before using Ocean Automatic right sizing, do not create any Rule Matching for them. 


##  How It Works 

For Ocean Kubernetes clusters, Right Sizing utilizes the Metrics Server and initializes recommendations after one hour of initial data collection. 

Once every 15 seconds, the Ocean Controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods). Based on the last 14 days of collected metrics, Ocean calculates relevant consumption metrics for each resource, such as CPU and Memory, and bases its recommendations on these calculated metrics. 

![features-rightsizing-01a](https://github.com/spotinst/help/assets/159915991/4ded53db-21ff-4a17-82b2-77b32c598351)

The output produces a single point-in-time data point for each pod. Ocean then aggregates the pods' data per workload container. 

Using the per-workload container aggregated data points, Ocean makes recommendations based on a mechanism that attempts to even out peaks and troughs in resource demand. The Right-Sizing engine runs every hour to generate new recommendations and update existing ones. 

*  Recommendations for decreasing memory requests are based on the maximum memory utilization. If the maximum value * (10% overhead + 5% stability margin) > request, the recommendation = [10% overhead * value + value].
*  Recommendations for decreasing CPU requests are based on the 99th percentile of the maximum CPU utilization data collected.
*  Recommendations for increasing memory requests are based on the maximum memory utilization. If the maximum value * (10% overhead - 5% stability margin) < request, the recommendation = [10% overhead * value - value].
*  Recommendations for increasing CPU requests are based on the 99th percentile of the maximum CPU utilization data collected.

You view Right Sizing recommendations via: 

*  Ocean console, under the Cloud Cluster Right Sizing [Advanced Optimization](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab) tab. 
*  [Spot API](https://docs.spot.io/api/#tag/Ocean-AWS/operation/oceanAwsFilterRightSizingWithFilter).

##  View Right Sizing for a Cluster 

Ocean provides resource recommendations to assist in adjusting deployment requests based on actual CPU and memory consumption. 

These recommendations can help optimize resource allocation and ensure that the requested resources align with the actual CPU and memory consumption, improving efficiency and cost-effectiveness in managing your deployments. 

To view right-sizing for a cluster:   

1.  In the left main menu, click **Ocean** > **Cloud Clusters**. 
2.  Select a cluster from the list of clusters. 
3.  Click the **Right Sizing** tab. 

The Right-Sizing tab displays a Dashboard divided into the following panels: 

*  The Right-Sizing Savings panel summarizes your potential maximum savings from right-sizing, vCPU, and memory usage and recommendations for a selected namespace, workload, and container. 
*  Right-sizing Resource Usage panel: This panel graphically displays your vCPU and memory resource usage in the last two weeks. 

If the Right Sizing tab does not display any data: 

*  Make sure that your metrics server is installed and functioning correctly. 
*  The initial one-hour data collection period may not have elapsed. 

>**Note**: You can filter your data according to namespaces, workloads/containers, or labels from the provided drop-down menus.

###  Right Sizing Savings Panel 

The Right-Sizing Savings panel contains a set of savings widgets, which show your potential savings from Ocean cluster right sizing, derived from data collected in the last two weeks:  

![saving-right-sizing](https://github.com/user-attachments/assets/e4d21c74-b667-40a2-92fe-e5b77de75954)

The workload status widget (on the left) shows one of the following statuses:
* Optimization maximized status: All workloads are optimized.
* Limited optimization status: All workloads have limited optimization. Hover over the widget and click the link to access the [Right Sizing Optimization list](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=workloads-optimization-list).
* No optimization status: No workloads are optimized, and the total Potential Monthly Maximum Savings are shown.
* Pending optimization status: All pending workloads will be optimized according to the configured [schedule](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab?id=work-with-right-sizing-rules). 

If you have workloads with differing statuses, the workload status widget shows a status according to the following logic:
* The potential savings are shown if at least one workload has potential savings.
* The limited optimization status is shown if at least one workload is pending, but none have potential savings.
* The pending status is shown if at least one workload is pending, but there are neither workloads with limited optimization nor workloads with potential savings.

> **Note**: The status changes according to the filters applied in this panel and the Workloads Optimization list in the [Advanced Optimization tab](ocean/features/ocean-cluster-right-sizing-recom-tab?id=automatic-right-sizing-recommendations-and-rules)

vCPU and memory usage widgets:
*  vCPU Usage: Used and allocated vCPU resources, recommended increase or decrease of vCPU resources, and overprovisioning. 
*  Memory Usage: Used and allocated memory resources, a recommendation to increase or decrease the memory resources, and the overprovisioning. 

###  Right Sizing Resource Usage Panel 

![usage-in-last-2-weeks-b](https://github.com/user-attachments/assets/74b65b39-1734-47d9-bf86-07ec1433d7da)

The right Sizing Resources Usage panel contains two widgets: 

*  vCPU usage in the last two weeks: Displays graphs for used, allocated, and recommended vCPU usage based on data from the last two weeks. 
*  Memory usage in the last two weeks: Displays graphs for used, allocated, and recommended memory usage based on data from the last two weeks. 



