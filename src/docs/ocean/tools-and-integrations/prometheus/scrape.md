# Scrape Ocean Metrics using Prometheus

Feature state: Beta

You can use Prometheus to scrape [important Ocean metrics](ocean/tools-and-integrations/prometheus/README). Using a simple exporter, Ocean is able to provide data in [open metrics](https://openmetrics.io/) format for Prometheus to scrape.

The Ocean metrics exporter is a lightweight application that runsrunning in the Kubernetes cluster and continuously scrapesscraping metrical data from the Ocean SaaS. The metrics exporter scrapes every 60 seconds and formats the data for prometheus to scrape.

Although the exporter application is independent of the Ocean controller, a functioning controller is required for data to stream into Ocean Saas and update the metrics.

## Prerequisites

* Ocean running in a cluster with a reporting controller

* Prometheus installed in the cluster

## Install the Exporter

##### Via Helm
[This helm chart](https://github.com/spotinst/charts/tree/main/charts/ocean-metric-exporter) entirely covers this step.
1. Add the Spot Helm chart repository:

`helm repo add spot https://charts.spot.io`
2. Update your local Helm chart repository cache:

`helm repo update`
3. Install ocean-metric-exporter:

`helm install my-release spot/ocean-metric-exporter`

##### Via Infrastructure as Code
Alternatively, use [https://registry.terraform.io/modules/spotinst/ocean-metric-exporter/spotinst/latest](https://registry.terraform.io/modules/spotinst/ocean-metric-exporter/spotinst/latest) Terraform module to incorporate the exporter in your IaC setup.

##### Via Kubernetes CLI
run:
kubectl apply -f https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/spot-ocean-metric-exporter-beta/spot_ocean_metric_exporter.yaml

This yaml file contains the k8s deployment and the k8s service with the latest version.

## Configure Prometheus

This step configures Prometheus to generate scrape requests to the Kubernetes service that exposes the Ocean exporter.

To the set of Prometheus jobs configured in your environment, add the following:

```
    scrape_configs:
      - job_name: 'spot-ocean-metrics' # The job name is assigned to scraped metrics by default.
        metrics_path: '/metrics'  # The HTTP resource path on which to fetch metrics from targets.
        scrape_interval: 30s                   # How frequently to scrape targets from this job.
        static_configs:
        - targets: ['spot-ocean-metric-exporter.kube-system.svc.cluster.local:5050'] #kube-system represents the namespace where the exporter service resides at
```


Ocean metrics will be scraped every 60 seconds and saved into Prometheus.

Grafana Dashboard
One popular use of metrics saved in Prometheus is dashboarding. As Grafana is a popular dashboarding tool, Spot has created a [Grafana dashboard](https://grafana.com/grafana/dashboards/16475) that you can download. The dashboard enables you to visualize Ocean metrics and may be incorporated into your existing dashboard base.

## What’s next?

In Ocean, click Roadmap to share feedback and request future metrics.
Learn more about Ocean's [scaling](ocean/features/scaling-kubernetes) processes.
