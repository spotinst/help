#  Automatic Right-Sizing Actual Savings

Cloud service provider relevance: <font color="#FC01CC">EKS</font>, <font color="#FC01CC">AKS, and GKE</font>

This topic shows you how to view your (actual) right-sizing savings from applying down-sizing recommendations to your workloads.

Before you begin, see [Ocean Cluster Automatic Right-Sizing](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab) for a full description of this Ocean feature.

To view your right-sizing savings: 

1. In the left main menu, click **Ocean** > **Cloud Clusters**.
2. Select a cluster from the list of clusters.
3. Click **Right Sizing > Savings**.

The Savings tab contains the following:  

*  Right-sizing savings panel
*  Workload savings list.

<img width="1000" src="https://github.com/user-attachments/assets/83e6c80e-9533-480d-a171-9d872e07550e" />

At the top of the actual savings overview, you can filter according to:

* Time
  * Last 30 days.
  * Last 7 days.
  * This month (from the first day of the month until today).
 
* Workloads (optimized workloads only).
* Namespaces.
 
The right-sizing savings panel shows the following:
* Savings in dollars.
* Selected time frame.
* Pie chart together with the savings per namespaces (that affected the most savings).

The workload savings list shows your actual right-sizing savings per workload.
These are the workloads that were optimized automatically based on Ocean's recommendations.

>Note: Only down-sizing recommendations apply.

* Workload Name.
* Namespace.
* Workload Type: (if the workload was deleted, it is marked as Deleted).
* CPU:
  * With Ocean (green color): The sum of all the CPU requests that Ocean recommended and applied automatically.
  * Without Ocean: The sum of all CPU requests in your original workloads.
* Memory:
  * With Ocean (green color): The sum of all of the memory requests that Ocean recommended and applied automatically.
  * Without Ocean: The sum of all the memory requests in your original workloads.
* Right-sizing savings (dollars) for the workload.

  

 
 
  
