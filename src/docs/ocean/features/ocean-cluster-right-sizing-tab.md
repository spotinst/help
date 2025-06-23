#  Ocean Cluster Automatic Right Sizing

Cloud service provider relevance: <font color="#FC01CC">EKS</font> and <font color="#FC01CC">AKS</font>

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization. 

Container resource requests, defined in a Kubernetes cluster, determine a pod’s allocation to a node. Incorrect CPU and memory requirements assumptions can incur unnecessary and costly cloud infrastructure waste. Ocean lets you access detailed right-sizing recommendations that fine-tune these resource requests based on the actual resource utilization of any running application over time. This way, you can define better resource requirements based on actual consumption to avoid over-provisioning or underutilizing a cluster and increase the cluster's efficiency. 

Ocean provides container-level right-sizing recommendations so you can focus on improving specific application resource requests and make impactful changes to resource utilization.  

All Ocean customers have a minimal version for automatic right-sizing that supports up to 10 workloads. 

<img width="1100" src="https://github.com/user-attachments/assets/e5e77a76-1789-4eb7-8f13-9689e3e873cd" />

To opt-in and turn on the full capabilities of this powerful feature, [Contact Support in the Spot console online chat or by email](https://spot.io/support/)

##  Prerequisites

Before you attempt to fine-tune your cluster resources according to Ocean's recommendation, you will need: 

*  A Spot account. 
* Ocean cluster managing your Kubernetes worker nodes. 
*  [Ocean Controller Version 2.0.52 and above](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/) installed and running.
   *  Make sure to install the [Metrics Server](https://github.com/kubernetes-incubator/metrics-server#deployment).

*  Kubernetes 1.33 and above; for the option to apply automatic recommendations without having to restart pods (subject to [Kubernetes limitations](https://kubernetes.io/docs/tasks/configure-pod-container/resize-container-resources/#limitations)).

*  Vertical Pod Autoscaler project (VPA) 1.4.1. If you need to upgrade, see [Upgrade VPA](link TBD). If the VPA is not already running on your cluster, run the following helm commands:

    ```sh.
    
    helm repo add spot https://charts.spot.io 
    helm repo update 
    helm install <my-release-name> spot/ocean-vpa
    ```

>**Note**: To turn on automatic right-sizing, contact your [support](https://spot.io/support/) team via email or chat.

##  How It Works 

For Ocean Kubernetes clusters, Right-sizing utilizes the Metrics Server and initializes recommendations after one hour of initial data collection. 

Once every 15 seconds, the Ocean Controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods). Based on the last 14 days of collected metrics, Ocean calculates relevant consumption metrics for each resource, such as CPU and Memory, and bases its recommendations on these calculated metrics. 

![features-rightsizing-01a](https://github.com/spotinst/help/assets/159915991/4ded53db-21ff-4a17-82b2-77b32c598351)

The output produces a single point-in-time data point for each pod. Ocean then aggregates the pods' data per workload container. 

Using the per-workload container aggregated data points, Ocean makes recommendations based on a mechanism that attempts to even out peaks and troughs in resource demand. The Right-Sizing engine runs every hour to generate new recommendations and update existing ones. 

<BR>

**Ocean can automatically apply these recommendations to your workloads**. 

>**Note**: if you have Kubernetes 1.33 or above, Ocean can automatically apply the recommendations without having to restart pods.

Recommendations for decreasing and increasing memory or CPU requests are based on the percentile defined for the cluster (the default is the 85th percentile).

Ocean handles the right-sizing workload limits as follows:

*  Automatic tuning for up-sizing recommendations: Ocean automatically adjusts the workload's limit values for up-sizing based on the recommended resource allocations while maintaining the same ratio between the requests and the limit.
*   Automatic tuning for down-sizing recommendations: Ocean keeps the existing limits.

You view the right-sizing recommendations via: 

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

![saving-right-sizing](https://github.com/user-attachments/assets/0be792e0-0a94-42ac-aea1-42e1acce8f5f)

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
*  vCPU Usage: Used and allocated vCPU resources, recommended increase or decrease of vCPU resources, and over-provisioning. 
*  Memory Usage: Used and allocated memory resources, a recommendation to increase or decrease the memory resources, and the overprovisioning. 

###  Right Sizing Resource Usage Panel 

This panel contains two widgets:

* vCPU usage in the last 2 weeks: Displays graphs for used, allocated, and recommended vCPU usage based on data from the last 2 weeks.
* Memory usage in the last 2 weeks: Displays graphs for used, allocated, and recommended memory usage based on data from the last 2 weeks.

<img width="1000" src="https://github.com/user-attachments/assets/a94b2d5f-b191-4142-acbc-085809aa21d4" />

Hover over a data point in the **vCPU usage in the last 2 weeks** widget to view usage details:
>**Note**: The default **85th percentile vCPU usage** and **Maximum memory usage** options are used to calculate the right-sizing recommendations for all usage parameters.
* Allocated vCPU usage based on data from the last 2 weeks.
* Actual vCPU usage based on data from the last 2 weeks (you can change the default from the **Usage drop-down menu**).
  * 85th percentile vCPU usage (**default**)
  * 99th percentile vCPU usage 
  * 95th percentile vCPU usage
  * 90th percentile vCPU usage
  * Average vCPU usage
* Suggested vCPU usage based on data from the last 2 weeks.
Hover over a data point in the **Memory usage in the last 2 weeks** widget to view:
* Allocated memory usage in GiB based on data from the last 2 weeks.
* Actual memory usage in GiB based on data from the last 2 weeks (you can change the default from the **Usage drop-down menu**).
  * Maximum memory usage in GiB (**default**)
  * Average memory usage in GiB
* Suggested memory usage in GiB based on data from the last 2 weeks.

## Related Topics

* [Right-Sizing Troubleshooting](https://docs.spot.io/ocean/features/troubleshoot-right-sizing)
* [Right-Sizing Rules and Reommendations](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-recom-tab)




