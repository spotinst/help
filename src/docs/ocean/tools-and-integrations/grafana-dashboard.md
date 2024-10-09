<meta name="robots" content="noindex">

# Grafana Dashboard

This topic describes the integration of Ocean with Grafana and Prometheus to help you identify and investigate real-life anomalies in Ocean-managed clusters.

## Prometheus and Grafana

Prometheus and Grafana are among the most popular observability stacks in the market, especially within the DevOps community. Prometheus is a robust monitoring and alerting toolkit that scrapes and stores time series data, providing real-time insights into various metrics within your cluster. 

Grafana enhances Prometheus by offering powerful data visualization capabilities so you can create informative and interactive dashboards.

In Kubernetes environments, where the dynamic nature of workloads and infrastructure demands continuous monitoring, the Prometheus and Grafana stack provides deep visibility into the performance, health, and cost-effectiveness of your Kubernetes clusters, enabling proactive management and optimization.

## Spot Ocean Scaling and Cost Optimization Dashboard

The Ocean scaling and cost optimization dashboard provides real-time insights into the scaling, cost, usage, and right-sizing activities managed by Ocean within your Kubernetes cluster. It displays node provisioning, optimization, cost efficiency, and recovery operations metrics. 

Visualizations can help you understand how Ocean dynamically manages Kubernetes cluster resources to ensure optimal performance, cost savings, and high availability. Key actions such as scale-ups, scale-downs, node replacements, and manual interventions are highlighted to give a comprehensive view of your cluster's operational status and health. 

Visualizations include data on compute, storage, and networking expenses, helping you monitor and optimize cloud spending. They also highlight the cost distribution across different resource types and track usage patterns over time. 

The scaling and cost optimization dashboard exposes data that helps you make informed decisions about resource allocation, identify cost-saving opportunities, and ensure efficient utilization of cloud infrastructure. For Ocean right-sizing evaluations, the dashboard shows how efficient resource adjustments contribute to cost reduction while maintaining optimal cluster performance.

### Integration Benefits

[Ocean](https://spot.io/product/ocean/) manages the scaling of the Kubernetes data plane, and the data generated in the process can be valuable for monitoring your containerized environment. 

Using well-defined [Prometheus metrics](https://docs.spot.io/ocean/tools-and-integrations/prometheus/) to monitor Ocean provides insights into cluster scaling and debugging. You can also build alerts based on the metrics to address issues in real time and track trends on a dashboard with different Ocean metrics.

Ocean maintains an official set of metrics, natively scrapable by Prometheus. This set of metrics helps build a 360-degree view of Ocean’s actions while providing application-driven infrastructure.

## Dashboard Visualizations

<details>
  <summary markdown="span">Current Status</summary>

  <img src="https://github.com/user-attachments/assets/dfca3f37-24e2-4a6c-b038-59156444491d" />

  This dashboard contains the following widgets:
  * Ocean controller: Status in the cluster.
  * Kubernetes Cluster Nodes: Number of nodes in the Kubernetes cluster.
  * Nodes managed by Ocean: Nodes managed by Ocean, with drill-down for optimized and scaled nodes.
  * Cluster resources utilization: Resource utilization (CPU, memory, etc.) across the cluster.
  * Cluster cost during a specified time period.
  * Top 5 workloads with maximum cost.

</details>

<details>
  <summary markdown="span">Cost and Usage</summary>

 <img src="https://github.com/user-attachments/assets/9ba3bd90-357c-411c-bba4-84101275c9dd" />

  This dashboard contains the following widgets:
  * Month-to-Date cluster cost.
  * Average daily cluster cost during a specified time period.
  * Cluster cost breakdown during a specified time period.
  * Cluster cost over time: Compare costs for two time periods.

</details>

<details>
  <summary markdown="span">Network Metrics</summary>

<img src="https://github.com/user-attachments/assets/24ef6087-97f4-490d-9c0d-ba7655fe9be3" />

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

<img src="https://github.com/user-attachments/assets/6b632cb9-5ef4-4272-9400-5bcc6850a4a4" />

This dashboard contains the following widgets:

* Scaling up and down events summaries.
* Failed scale-up events summary.* 


</details>

## Variables

* Datasource: Select the cluster datasource in a Grafana installation with multiple datasources available.
* Ocean Cluster ID: This option filters data only for the selected ID, making it suitable for data sources with data from several Ocean clusters.
* Aggregation Interval: Used to set a relative time in panels with aggregated data. The relative time will be shown on the panel title.

## Metrics

Monitor the following key metrics to understand how Ocean scales.

### Current Status

* Ocean controller status. Source: Ocean.
* Kubernetes cluster Nodes. Source: Kubernetes API server.
* Nodes managed by Ocean. Source: Ocean.
* Cluster resources utilization - TBD
* Cluster cost during the selected aggregation interval. Source: Ocean.
* Top 5 workloads with maximum cost during the selected aggregation interval. Source: Ocean.
* The right-sizing feature suggests potential savings for cluster costs. Source: Ocean.

### Scaling

**Overview:**

* Cluster nodes’ allocatable resources (CPU, memory, GPU). Source: Ocean.
* Ocean cluster headroom allocatable resources (CPU, memory, GPU). Source: Ocean.
* Ocean cluster resources limit (CPU, memory). Source: Ocean.
* Ocean nodes breakdown by instance lifecycle and availability zone. Source: Ocean.
* Cluster nodes’ allocatable resources breakdown by instance lifecycle and availability zone. Source: Ocean

**Nodes Managed by Ocean Metrics**

* Ocean nodes count over time. Source: Ocean.
* Ocean nodes count by instance lifecycle and availability zone over time. Source: Ocean.
* Cluster nodes’ allocatable resources count by instance lifecycle and availability zone over time. Source: Ocean.

**8Resources Utilization Metrics:** Cluster resources (CPU, memory, GPU) utilization over time.

**Pods Metrics:**

* Average time for Pod to become ready over time. Source: Kubernetes API server.
* Pods in Running state. Source: Kubernetes API server.

**Scaling Activity Overview:**

* Scaling up and down events summaries. Source: Ocean.
* Failed to scale up and down event summaries. Source: Ocean.

**Ocean Controllers Metrics:**

* Ocean Kubernetes controller status over time. Source: Ocean.
* Ocean Kubernetes controller pods over time. Source: Kubernetes API server.
* Ocean Kubernetes controller memory consumption over time. Source: Kubernetes API server.
* Ocean metrics controller memory consumption over time. Source: Kubernetes API server.

### Cost Metrics

* Month-to-Date cluster cost. Source: Ocean.
* Average daily cluster cost during the selected aggregation interval. Source: Ocean.
* Cluster cost breakdown during the selected aggregation interval. Source: Ocean.
* Cluster cost over time during the selected aggregation interval vs the previous period. Source: Ocean.

**Compute and Storage Metrics:**

* Average cost per CPU during the selected aggregation interval. Source: Ocean.
* CPU by instance lifecycle breakdown during the selected aggregation interval. Source: Ocean.
* Cluster storage cost during the selected aggregation interval. Source: Ocean.
* Cluster storage cost breakdown during the selected aggregation interval. Source: Ocean.
* Cluster compute cost over time. Source: Ocean.
* Cluster storage cost over time. Source: Ocean.
* Cluster CPU usage over time. Source: Ocean.
* Cluster memory usage over time. Source: Ocean.

**Network Metrics:**

* Cluster network cost during the selected aggregation interval. Source: Ocean.
* Cluster network usage during the selected aggregation interval. Source: Ocean.
* Cluster network cost breakdown during the selected aggregation interval. Source: Ocean.
* Cluster Intra-AZ network usage over time. Source: Ocean.
* Cluster Inter-AZ network cost over time. Source: Ocean.
* Cluster Inter-AZ network usage over time. Source: Ocean.
* Cluster Internet network cost over time. Source: Ocean.
* Cluster Internet network usage over time. Source: Ocean.
* Cluster Inter-Region network cost over time. Source: Ocean.
* Cluster Inter-Region network usage over time. Source: Ocean.

### Right-Sizing

* Ocean metrics are relevant to Ocean Prometheus Exporter for EKS, AKS, and GKE. [More details](https://docs.spot.io/ocean/tools-and-integrations/prometheus/)

## Related Links

The template is also available in the [Spot Ocean public repository](https://github.com/spotinst/spot-ocean-grafana-dashboards), where you can submit feedback regarding any issues or propose new features to enhance the dashboard’s functionality further.

---I will add a link to the Grafana setup and configuration file---



