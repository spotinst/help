<meta name="robots" content="noindex">

# Set up and Configure Grafana for Ocean

Before you begin, make sure you have all of the following prerequisites:

* Working Grafana account.
* Prometheus server.
* [Ocean controller](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/): Manages scaling the Kubernetes data plane.
* [Ocean network client](https://docs.spot.io/ocean/tutorials/install-network-client-v2): Handles network cost analysis in an Ocean-managed cluster.
* [Ocean metrics exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape?id=install-the-exporter): Exposes Ocean-specific metrics to Prometheus.
* kube-state-metrics service.

## Configure Prometheus

1. Configure Prometheus to scrape Ocean metrics by adding the Ocean Metric Exporter as a scrape target.
2. Define necessary jobs and targets in your Prometheus configuration file to ensure metrics are accurately collected.
3. Add Prometheus as a data source in Grafana (under New Connection) and connect with your cluster.

## Import the Ocean Scaling and Cost Optimization Dashboard to Grafana

1. Copy the Ocean Grafana ID **21768** to the clipboard.
2. In your Grafana dashboard screen, click **New > Import**.

<img width = 400 alt="grafana-import-dashboard" src="https://github.com/user-attachments/assets/2c4ae5fc-114a-4134-b429-6bc4d798c4df" />

3. Paste in the ID and click **Load**.

<img width = 400 alt="grafana-import-part2-dashboard" src="https://github.com/user-attachments/assets/4d95f01d-9613-46ee-94ac-73baea4823aa" />

5. Select the **Prometheus** datasource.
6. Click **Import**. 

The following set of dashboards will now be available in Grafana:

* Current Status (displayed by default).
* Scaling.
* Cost and Usage.

See a description of these dashboards at [link to the first Grafana page].

## Ocean-Grafana Version History

------Maintain history here or on a separate page???------











