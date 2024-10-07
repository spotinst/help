<meta name="robots" content="noindex">

# Set up and Configure Grafana for Ocean

## Prerequisites

Before you begin, make sure you have all of the following:

* [Ocean controller](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/): Manages scaling the Kubernetes data plane.
* [Ocean network client](https://docs.spot.io/ocean/tutorials/install-network-client-v2): Handles network cost analysis in an Ocean-managed cluster.
* [Ocean metrics exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape?id=install-the-exporter): Exposes Ocean-specific metrics to Prometheus.
* kube-state-metrics service.
* Prometheus server.

### Configure Prometheus

1. Configure Prometheus to scrape Ocean metrics by adding the Ocean Metric Exporter as a scrape target.
2. Define necessary jobs and targets in your Prometheus configuration file to ensure metrics are accurately collected.

### Link to the Grafana Cloud Dashboard

Download the Spot Ocean Scaling Dashboard Template and follow the instructions provided to import and configure the dashboard in your Grafana instance.

### Configure Grafana

1. Connect Grafana to Prometheus as a data source.
2. Import the Spot Ocean Scaling and Cost Optimization Dashboard into Grafana using either:
    * The template link provided
    * Grafana.com ID: 21768









