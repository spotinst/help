<meta name="robots" content="noindex">

# Spot Ocean Scaling and Cost Optimization Dashboard

This dashboard provides real-time insights into the scaling, cost, usage, and right-sizing activities managed by Spot Ocean within your Kubernetes cluster. It showcases metrics related to node provisioning, optimization, cost efficiency, and recovery operations. The visualizations help you understand how Spot Ocean dynamically manages Kubernetes cluster resources to ensure optimal performance, cost savings, and high availability. Key actions such as scale-ups, scale-downs, node replacements, and manual interventions are highlighted to give a comprehensive view of your cluster's operational status and health. It includes comprehensive data on compute, storage, and networking expenses, helping you monitor and optimize cloud spending. Visualizations highlight the cost distribution across different resource types and track usage patterns over time. This information empowers customers to make informed decisions about resource allocation, identify cost-saving opportunities, and ensure efficient utilization of cloud infrastructure. Additionally, the dashboard enables the evaluation of Ocean's right-sizing capability, demonstrating how efficient resource adjustments contribute to cost reduction while maintaining optimal cluster performance.

sample

<details>
  <summary markdown="span">Click to view sample</summary>

</details>

<details>
  <summary markdown="span">Click to view sample</summary>

</details>

<details>
  <summary markdown="span">Click to view sample</summary>

</details>


[Spot Ocean](https://spot.io/product/ocean/) manages the scaling of the Kubernetes data plane, and the data generated in the process can be valuable for monitoring your containerized environment. Using well-defined Prometheus metrics for monitoring Ocean helps you understand cluster scaling and debug any issues that may arise. In addition, you can build alerts based on the metrics to address issues in real time and track important trends on a dashboard of different Ocean metrics.

Ocean maintains an official set of metrics, natively scrapable by Prometheus. This set of metrics helps build a 360-degree view of Ocean’s actions while providing application-driven infrastructure.

## Variables

* Datasource: Select the cluster datasource in a Grafana installation with multiple datasources available.
* Ocean Cluster ID: This option filters data only for the selected ID, making it suitable for data sources with data from several Ocean clusters.
* Aggregation Interval: Used to set a relative time in panels with aggregated data. The relative time will be shown on the panel title.

## Metrics

By monitoring the following key metrics, you can understand how Ocean scales.

### Current Status

Ocean controller status. Source: Ocean.
Kubernetes cluster Nodes. Source: Kubernetes API server.
Nodes managed by Ocean. Source: Ocean.
Cluster resources utilization - coming soon.
Cluster cost during the selected aggregation interval. Source: Ocean.
Top 5 workloads with maximum cost during the selected aggregation interval. Source: Ocean.
Cluster cost’s potential savings suggested by the right-sizing feature. Source: Ocean.






