<meta name="robots" content="noindex">

#  Automatic Right-Sizing Actual Savings

Cloud service provider relevance: <font color="#FC01CC">EKS</font> and <font color="#FC01CC">AKS</font>

This topic shows you how to view your (actual) right-sizing savings from applying recommendations to your workloads.

Before you begin, see [Ocean Cluster Automatic Right-Sizing](https://docs.spot.io/ocean/features/ocean-cluster-right-sizing-tab) for a full description of this Ocean feature.

To view your right-sizing savings: 

1. In the left main menu, click **Ocean** > **Cloud Clusters**.
2. Select a cluster from the list of clusters.
3. Click the **Right Sizing** tab.  
4. Click **Savings**. 

The Savings tab contains the following:  

*  Right-sizing Savings panel
*  Workload savings list.

 <img width="1200" src="https://github.com/user-attachments/assets/9bb38bde-1fb1-4313-9efa-1c1ea4e2778a" />

At the top of the actual savings overview, you can filter according to:

* Time
  * Last 30 days.
  * Last 7 days.
  * This month (from the first day of the month until today).
 
* Savings benchmark:
  * Original requests: Cost is based on the workload requests initially used by right-sizing
  * Current Requests: Cost is based on the latest workload requests.
 
* Workloads (optimized workloads only).
* Namespaces.
 
The right-sizing savings panel shows the following:
* Savings in dollars.
* Selected time frame.
* Pie chart together with the savings per namespaces (that affected the most savings).

The workload savings list shows your actual right-sizing savings per workload.
These are the workloads that were optimized based on automated and manual recommendations:
>**Note**: The list does not show workloads for which there are no actual savings. 
* Workload Name.
* Namespace.
* Workload Type: (if the workload was deleted, it is marked as Deleted).
* CPU:
 * With Ocean (green color): The sum of all the CPU requests Ocean recommends.
 * Without Ocean: The sum of all CPU requests in your original workloads.
* Memory:
 * With Ocean (green color): The sum of all of the memory requests recommended by Ocean.
 * Without Ocean: The sum of all the memory requests in your original workloads.
* Right-sizing savings (dollars) for the workload.

  

 
 
  
