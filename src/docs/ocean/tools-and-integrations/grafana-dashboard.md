<meta name="robots" content="noindex">

# Grafana Dashboard

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

This topic describes the integration of [Ocean](https://docs.spot.io/ocean/) with Grafana and Prometheus to help you identify and investigate real-life anomalies in Ocean-managed clusters.

## Prometheus and Grafana

Prometheus and Grafana are among the most popular observability stacks in the market, especially within the DevOps community. Prometheus is a robust monitoring and alerting toolkit that scrapes and stores time series data, providing real-time insights into various metrics within your cluster. 

Grafana enhances Prometheus by offering powerful data visualization capabilities so you can create informative and interactive dashboards.

In Kubernetes environments, where the dynamic nature of workloads and infrastructure demands continuous monitoring, the Prometheus and Grafana stack provides deep visibility into the performance, health, and cost-effectiveness of your Kubernetes clusters, enabling proactive management and optimization.

## Spot Ocean Scaling and Cost Optimization Grafana Dashboard

The Ocean scaling and cost optimization dashboard provides real-time insights into the scaling, cost, usage, and right-sizing activities managed by Ocean within your Kubernetes cluster. It displays node provisioning, optimization, cost efficiency, and recovery operations metrics.  

Visualizations can help you understand how Ocean dynamically manages Kubernetes cluster resources to ensure optimal performance, cost savings, and high availability. Key actions such as scale-ups, scale-downs, node replacements, and manual interventions are highlighted to give a comprehensive view of your cluster's operational status and health. 

Visualizations include data on compute, storage, and networking expenses, helping you monitor and optimize cloud spending. They also highlight the cost distribution across different resource types and track usage patterns over time. 

The scaling and cost optimization dashboard exposes data that helps you make informed decisions about resource allocation, identify cost-saving opportunities, and ensure efficient utilization of cloud infrastructure. For Ocean right-sizing evaluations, the dashboard shows how efficient resource adjustments contribute to cost reduction while maintaining optimal cluster performance.

### Integration Benefits

Ocean manages the scaling of the Kubernetes data plane, and the data generated in the process can be valuable for monitoring your containerized environment. 

Using well-defined [Prometheus metrics](https://docs.spot.io/ocean/tools-and-integrations/prometheus/) to monitor Ocean provides insights into cluster scaling and debugging. You can also build alerts based on the metrics to address real-time issues and track trends on a dashboard with different Ocean metrics.

Ocean maintains an official set of metrics, natively scrapable by Prometheus. This set of metrics helps build a 360-degree view of Ocean’s actions while providing application-driven infrastructure.

## Dashboard Visualizations

<details>
  <summary markdown="span">Current Status</summary>

  <img width="1024" alt="grafana-dashboard-current-status" src="https://github.com/user-attachments/assets/3e46cfab-2f88-4a76-87d5-10ad16afcc38">

  This dashboard contains the following widgets:
  * Ocean controller: Status in the cluster.
  * Kubernetes Cluster Nodes: Number of nodes in the Kubernetes cluster.
  * Nodes managed by Ocean: Nodes managed by Ocean, with drill-down for optimized and scaled nodes.
  * Cluster resources utilization: Resource utilization (CPU, memory, etc.) across the cluster.
  * Cluster cost during a specified time period.
  * Top 5 workloads with maximum cost.
  * Potential savings from right-sizing.

</details>

<details>
  <summary markdown="span">Cost and Usage</summary>
  
<img width="1024" alt="grafana-dashboard-cost-and-usage" src="https://github.com/user-attachments/assets/cd688d9c-fec7-4b6b-9519-df97a466a362">

This dashboard contains the following widgets:
  * Month-to-Date cluster cost.
  * Average daily cluster cost during a specified time period.
  * Cluster cost breakdown during a specified time period.
  * Cluster cost over time: Compare costs for two time periods.

</details>

<details>
  <summary markdown="span">Network Metrics</summary>

 <img width="1024" alt="grafana-dashboard-network-metrics" src="https://github.com/user-attachments/assets/f1616d7b-1b7b-4260-b2ab-fdfd196be4f5">
 
This dashboard contains the following widgets:
* Cluster network cost for a specified time period.
* Cluster network usage for a specified time period.
* Cluster network cost breakdown for a specified time period.
* Cluster Intra-AZ network usage over time: Network usage within the same availability zone over time.
* Cluster Inter-AZ network cost over time: Network costs associated with traffic between different availability zones over time.
* Cluster Inter-AZ network usage over time: Network traffic between different availability zones over time.
* Cluster Internet network cost over time: Network costs associated with internet traffic over time.
* Cluster Internet network usage over time: Internet network traffic over time.
* Cluster Inter-Region network cost over time: Network costs related to traffic between different regions over time.
* Cluster Inter-Region network usage over time: Network traffic between different regions over time.



</details>

<details>
  <summary markdown="span">Scaling Activity Overview</summary>

  <img width="1024" alt="grafana-dashboard-scaling-activity" src="https://github.com/user-attachments/assets/20c59bdb-4a66-4906-9fcb-399bdf12de26">

This dashboard contains the following widgets:

* Scaling up and down events summaries.
* Failed scale-up events summary. 

</details>

<details>
  <summary markdown="span">Right Sizing</summary>

<img width="1024" alt="grafana-dashboard-right-sizing" src="https://github.com/user-attachments/assets/393bd4d8-03fa-43f9-b99f-5db7fb457017">

</details>

This dashboard contains the following widgets:

* vCPU suggestions over time.
* Memory suggestions over time.
* Top 5 workloads with potential monthly max. savings.

## Variables

* Datasource: Select the cluster datasource in a Grafana installation with multiple datasources available.
* Ocean Cluster ID: This option filters data only for the selected ID, making it suitable for data sources with data from several Ocean clusters.
* Aggregation Interval: Used to set a relative time in panels with aggregated data. The relative time will be shown on the panel title.

## Metrics

Ocean metrics are relevant to Ocean Prometheus [Exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape).

Monitor the following key metrics to understand how Ocean scales.

### Current Status

* **Ocean controller status:** This graph shows the current status of the Ocean controller within your Kubernetes cluster, providing real-time insights into controller health and operational status. Monitor to ensure the controller functions correctly and effectively manages resources, which is crucial for maintaining optimal cluster performance.
* **Kubernetes cluster Nodes:** Source: Kubernetes API server. This graph shows the number of nodes within your Kubernetes cluster, helping you monitor whether your cluster is correctly scaled to handle workloads. You can use this to ensure that your cluster's node count aligns with your applications' demands, to maintain smooth operations, and to prevent resource bottlenecks.
* **Nodes managed by Ocean**: This graph shows the nodes managed by Spot Ocean, providing transparency into which nodes are optimized and scaled. This metric verifies that Spot Ocean effectively manages and optimizes your cluster resources, improving resource utilization and cost efficiency. 
* **Cluster cost during the selected aggregation interval:**. This graph shows the cost associated with the cluster during a specified time period, letting you track and manage your spending. By understanding the cost implications of running your cluster, you can make informed decisions to optimize resource usage and reduce overall costs.
* **Top 5 workloads with maximum cost during the selected aggregation interval:** This graph shows the top 5 workloads contributions to cluster costs, helping you identify high-cost areas. By focusing optimization efforts on these workloads, you can reduce unnecessary expenses and improve the cost-efficiency of your cluster operations.
* **Cluster cost's potential savings suggested by the right-sizing feature during the selected Aggregation Interval variable value:** This graph indicates the cost savings that could be achieved through Spot Ocean's right-sizing recommendations. This metric provides you with valuable insights into potential cost reductions so you can optimize resource allocations and ensure efficient use of cloud resources, ultimately leading to significant savings. 

### Scaling Overview

* **Cluster nodes’ allocatable resources (CPU, memory, GPU):** This graph shows the allocatable resources (CPU, memory, GPU) available on cluster nodes. The provided insights into the available resources for scheduling new workloads ensure optimal resource allocation, allowing for better planning and efficient utilization of cluster resources. 
* **Ocean cluster headroom allocatable resources (CPU, memory, GPU):** This graph shows the headroom resources available for scaling within the Ocean-managed cluster. It helps ensure that there is sufficient headroom for scaling up applications without facing immediate resource constraints, so you can maintain smooth operations even during demand spikes.
* **Ocean cluster resource limit (CPU, memory):** This graph shows the maximum resource limits (CPU, memory) configured for the Ocean-managed cluster. Monitor these limits to avoid overprovisioning and ensure that resource usage stays within the defined capacity, which is crucial for maintaining cost efficiency and compliance with cluster settings. 
* **Ocean nodes breakdown by instance lifecycle and availability zone:** This graph breaks down Ocean-managed nodes by their lifecycle stage (e.g., Spot/On-Demand/RI/SP). Detailed visibility into node distribution and lifecycle can help your capacity planning and troubleshooting, ensuring your resources are effectively distributed and managed across the cluster. 
* **Cluster nodes’ allocatable resources breakdown by instance lifecycle and availability zone:** This graph shows allocatable resources across nodes, categorized by instance lifecycle and availability zone. Understanding how resources are distributed and utilized across different nodes and zones can help optimize resource allocation and improve overall cluster efficiency. 

### Nodes Managed by Ocean Metrics

* **Ocean nodes count over time:** This graph tracks the count of Ocean-managed nodes over time, providing insights into how the number of managed nodes changes. It can help you understand scaling trends and capacity adjustments, ensuring that resources are aligned with workload demands over time.
* **Ocean nodes count by instance lifecycle and availability zone over time:** This graph shows the count of Ocean-managed nodes categorized by instance lifecycle and availability zone over time. Historical insights into node lifecycle and zone distribution can help your long-term capacity planning and resource allocation across different zones. 
* **Cluster nodes’ allocatable resources count by instance lifecycle and availability zone over time:** This graph shows the count of allocatable resources on cluster nodes, categorized by lifecycle and availability zone over time. It can help you track how resource availability evolves, providing valuable information for effective resource management and ensuring that resources are consistently aligned with operational needs. 

### Pods Metrics

* **Average time for Pod to become ready over time:** Source: Kubernetes API server. This graph tracks the average time required for a pod to transition to a ready state. It can help you measure the responsiveness of your Kubernetes cluster, identifying potential delays or issues in pod startup, which is crucial for maintaining efficient and reliable application deployments. 
* **Pods in Running state. Source: Kubernetes API server:** This graph shows the number of currently running pods, providing a snapshot of active pods. It can help you monitor your applications' health and activity level, ensuring that the necessary workloads are operational and performing as expected. 

### Scaling Activity Overview

* **Scaling up and down events summaries:** This table summarizes events related to scaling up and down within the cluster. Visibility into scaling activities can help you understand how your cluster adapts to changing workloads and ensure that resources are being managed dynamically to meet demand. 
* **Failed to scale-up events summaries:** This table summarizes events related to failed scale-up attempts within the cluster. It provides insight into scaling errors so you can identify root causes and quickly resolve issues. 
 
### Ocean Controllers Metrics

* **Ocean Kubernetes controller status over time:** This graph displays the status of Ocean's Kubernetes controllers over time so you can monitor their health and performance. This can help maintain the smooth functioning of the cluster's resource management by ensuring that controllers operate efficiently. 
* **Ocean Kubernetes controller pods over time:** Source: Kubernetes API server. This graph shows the number of Ocean Kubernetes controller pods over time. It helps you track the deployment of controller pods so enough controllers are running to manage the cluster effectively and meet operational demands.
* **Ocean Kubernetes controller memory consumption over time:** Source: Kubernetes API server. This graph tracks the memory usage of Ocean Kubernetes controller pods over time. It can help you monitor memory usage and identify potential resource bottlenecks to proactively manage memory resources and maintain optimal controller performance. 
* **Ocean metrics controller memory consumption over time:** Source: Kubernetes API server. This graph shows the memory consumption of Ocean metrics controllers over time. It can help you manage memory resources and optimize the performance of controllers, so they have enough resources to function efficiently without causing performance issues.

### Cost Metrics Overview

* **Month-to-Date cluster cost:** This graph shows the cost incurred by the cluster from the start of the current month. It provides a real-time view of your monthly spending and can help you track costs and budget effectively, ensuring they remain within financial targets. 
* **Average daily cluster cost during the selected aggregation interval variable value:** This graph shows the average daily cost of the cluster during a specified time period. By analyzing daily spending patterns, you can better manage your costs, making informed decisions to optimize daily expenditures and improve overall cost efficiency.
* **Cluster cost breakdown during the selected aggregation interval variable value:** This graph breaks down the cluster cost into categories during a selected time period. It provides detailed insights into cost distribution, helping identify areas where spending can be optimized and uncover opportunities for cost savings.
* **Cluster cost over time during the selected aggregation interval variable value:** This graph compares cluster costs over time between the selected and previous periods. It can help you evaluate cost trends and assess the impact of changes on overall spending so you understand the financial implications of your decisions and adjust strategies as required.

### Compute and Storage Metrics

* **Average cost per CPU during the selected aggregation interval variable:** This graph shows the average cost per CPU during a specified time period. Understanding the financial impact of CPU utilization can help you optimize resource usage and manage costs effectively.
* **CPU by instance lifecycle breakdown during the selected aggregation interval variable value:** This graph breaks down CPU costs by instance lifecycle during a selected time period. It can help you understand CPU cost distribution across different instance stages, enabling more informed resource allocation and cost management decisions. 
* **Cluster storage cost during the selected aggregation interval variable value:** This graph shows the cost associated with cluster storage during a specified time period. It provides visibility into storage costs and can help you optimize storage usage and manage expenditures related to storage resources.
* **Cluster storage cost breakdown during the selected aggregation interval variable value:** This graph breaks down storage costs by different categories during a selected time period. It identifies cost drivers in storage and can help you manage and optimize your storage expenditures by focusing on the most significant cost areas. 
* **Cluster compute cost over time:** This graph tracks compute costs over time and can help you monitor long-term trends in compute expenses. It enables better budget planning and ensures that compute resources are being utilized efficiently in alignment with cost management goals.
* **Cluster storage cost over time:** This graph tracks storage costs over time, providing insights into long-term storage spending. It can help you manage costs by highlighting trends and enabling better decision-making for storage resource allocation.
* **Cluster CPU usage over time:** This graph shows CPU usage metrics over time, helping you monitor CPU utilization. By ensuring that resources are used efficiently, it supports optimal performance and cost management within the cluster.
* **Cluster memory usage over time:** This graph shows memory usage metrics over time, providing insights into memory utilization. It can help you optimize resource allocation by identifying patterns in memory usage and ensuring that resources are aligned with operational needs.

### Network Metrics

* **Cluster network cost during the selected aggregation interval variable value:** This graph shows the cost of network usage during a specified time period. It can help you monitor network-related expenses to manage and optimize network costs by clearly showing how much is spent on network resources. 
* **Cluster network usage during the selected aggregation interval variable value:** This graph shows network usage during a specified time period. It provides visibility into network traffic, can help you understand network resource needs, and ensures that the infrastructure is correctly scaled to meet demand.
* **Cluster network cost breakdown during the selected aggregation interval variable value:** This graph breaks down network costs by different categories during a selected time period. It can help you identify network cost drivers to manage network expenses effectively by focusing on areas where savings can be made.
* **Cluster Intra-AZ network usage over time:** This graph tracks network usage within the same availability zone over time. It provides insights into intra-zone traffic and can help you optimize network resources by understanding how traffic flows within a single zone. 
* **Cluster Inter-AZ network cost over time:** This graph shows network costs associated with traffic between different availability zones over time. It can help you manage costs related to inter-zone network traffic, ensuring that expenses are controlled and resources are efficiently utilized. 
* **Cluster inter-AZ network usage over time:** This graph shows the network traffic between different availability zones over time. It provides insights into inter-zone network usage patterns and can help you with resource planning and optimizing network performance across zones. 
* **Cluster Internet network cost over time:** This graph tracks network costs associated with internet traffic over time. It can help you to manage costs related to internet traffic, optimizing network expenditures by understanding the financial impact of external network usage. 
* **Cluster Internet network usage over time:** This graph shows internet network traffic over time. It provides insights into internet traffic patterns and can help you optimize network resources and manage external traffic efficiently. 
* **Cluster Inter-Region network cost over time:** This graph shows network costs related to traffic between different regions over time. It can help you manage costs associated with inter-region traffic, ensuring that cross-regional network expenses are aligned with budgetary goals.
* **Cluster Inter-Region network usage over time:** This graph shows network traffic between different regions over time. It provides insights into inter-region traffic patterns and can help you with resource planning and cost management by highlighting how network resources are used across regions. 

### Right-Sizing Metrics


* **VCPU Suggestions Overtime:** This graph shows Spot Ocean's recommended VCPU allocation through right-sizing recommendations compared to the actual allocated VCPU and the average usage of VCPU by the cluster’s workloads. By visualizing these metrics, you can identify opportunities to optimize VCPU resources, leading to potential cost savings and more efficient cluster operations.
* **Memory Suggestions Overtime:** This graph shows Spot Ocean's recommended memory allocation through right-sizing recommendations compared to the allocated memory and the average memory usage by the cluster’s workloads. By analyzing these insights, you can uncover potential cost savings and enhance memory resource utilization, ensuring efficient use of cloud resources.
* **Top 5 Workloads with Potential Monthly Max. Savings:** This graph highlights the top 5 workloads that could achieve the maximum cost savings through Spot Ocean's right-sizing recommendations. By focusing on these high-potential savings areas, you can significantly reduce your cloud expenses and optimize resource allocations, ultimately improving the overall cost-efficiency of their cluster operations.

## Related Links

* The Grafana template is also available in the [Spot Ocean public repository](https://github.com/spotinst/spot-ocean-grafana-dashboards), where you can submit feedback regarding any issues or propose new features to enhance the dashboard’s functionality.
* [Grafana Setup and Configuration](https://docs.spot.io/ocean/tools-and-integrations/setup-and-config-grafane-4-ocean)



