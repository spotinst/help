# Set up and Configure Grafana for Ocean

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>

Before you begin, make sure you have all of the following prerequisites:

* Prometheus server and Grafana server: employed in the cluster.
* [Ocean controller](https://docs.spot.io/ocean/tutorials/ocean-controller-v2/): Manages scaling the Kubernetes data plane.
* [Ocean network client](https://docs.spot.io/ocean/tutorials/install-network-client-v2): Handles network cost analysis in an Ocean-managed cluster.
* [Ocean metrics exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape?id=install-the-exporter): Exposes Ocean-specific metrics to Prometheus.
* kube-state-metrics service: (installed with Prometheus) A listening service that generates metrics about the state of Kubernetes objects by leveraging the Kubernetes API.

## Configure Prometheus

1. [Configure Prometheus](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape?id=configure-prometheus) to scrape Ocean metrics by adding the Ocean Metric Exporter as a scrape target.
2. Define necessary jobs and targets in your Prometheus configuration file to ensure metrics are accurately collected.
3. Add Prometheus as a data source in Grafana (under New Connection) and connect with your cluster.

## Import the Ocean Scaling and Cost Optimization Dashboard to Grafana

1. Copy the Ocean Grafana ID **21768** to the clipboard.
2. In your Grafana dashboard screen, click **New > Import**.

<img width = 400 alt="grafana-import-dashboard" src="https://github.com/user-attachments/assets/2c4ae5fc-114a-4134-b429-6bc4d798c4df" />

3. Paste in the ID and click **Load**.

<img width = 400 alt="grafana-import-part2-dashboard" src="https://github.com/user-attachments/assets/4d95f01d-9613-46ee-94ac-73baea4823aa" />

4. Select the **Prometheus** datasource.
5. Click **Import**. 

The following set of Ocean [dashboards](https://docs.spot.io/ocean/tools-and-integrations/grafana-dashboard) is available in Grafana:

* Current Status (displayed by default).
* Cost and Usage.
* Network Metrics.
* Scaling Overview.
* Right Sizing.








