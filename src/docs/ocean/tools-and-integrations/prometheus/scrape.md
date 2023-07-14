# Scrape Ocean Metrics using Prometheus

This page is relevant to Ocean for AWS Kubernetes and GCP.

You can use Prometheus to scrape [important Ocean metrics](ocean/tools-and-integrations/prometheus/README). Using a simple exporter, Ocean is able to provide data in [open metrics](https://openmetrics.io/) format for Prometheus to scrape.

The Ocean metrics exporter is a lightweight application that runs in the Kubernetes cluster and continuously scrapes metrical data from the Ocean SaaS. The metrics exporter scrapes every 60 seconds and formats the data for Prometheus to scrape.

Although the exporter application is independent of the Ocean controller, a functioning controller is required for data to stream into Ocean Saas and update the metrics.

## Prerequisites

* Ocean running in a cluster with a reporting controller
* Prometheus installed in the cluster

## Install the Exporter

### Via Helm
[This helm chart](https://github.com/spotinst/charts/tree/main/charts/ocean-metric-exporter) entirely covers this step.
1. Add the Spot Helm chart repository:

`helm repo add spot https://charts.spot.io`

2. Update your local Helm chart repository cache:

`helm repo update`

3. Install ocean-metric-exporter:

`helm install my-release spot/ocean-metric-exporter`

### Via Infrastructure as Code
Alternatively, use the [Terraform module](https://registry.terraform.io/modules/spotinst/ocean-metric-exporter/spotinst/latest) to incorporate the exporter in your Infrastructure as Code (IaC) setup.

### Via Kubernetes CLI

Run the following command:
```
kubectl apply -f
https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/spot-ocean-metric-exporter-beta/spot_ocean_metric_exporter.yaml
```

This yaml file contains the Kubernetes deployment and the Kuberneres service with the latest version.

### Configure Prometheus  

This step configures Prometheus to generate scrape requests to the Kubernetes service that exposes the Ocean exporter.

Add the following to the set of Prometheus jobs configured in your environment:  
scrape_configs:

  - job_name: 'spot-ocean-metrics' # The job name is assigned to scraped metrics by default.

    metrics_path: '/metrics'  # The HTTP resource path on which to fetch metrics from targets.

    scrape_interval: 30s                   # How frequently to scrape targets from this job.

    static_configs:

    - targets: ['spot-ocean-metric-exporter.kube-system.svc.cluster.local:5050'] #kube-system represents the namespace where the exporter service resides at

Ocean metrics are scraped every 60 seconds and saved into Prometheus.

<img src="/ocean/_media/prometheus-scrape-01.png" />

## Configurable Options

You can configure labels, categories and metrics to scrape with the Prometheus exporter [version 1.0.1](https://artifacthub.io/packages/helm/spot/ocean-metric-exporter) and later.

### Categories  

Each category represents a group of metrics. If the categories are not set - all will be included by default. The possible categories are:  

* scaling  
* cost_analysis  

### Metrics  

For each category you [can configure allowed metrics and deny specific metrics](ocean/tools-and-integrations/prometheus/?id=ocean-metrics). Allow metrics are the metrics that would be scraped, while the denied metrics would not be scraped.   

**If the same metric is in the allow list and deny list – it will be denied.**

#### Scaling Metrics  

* ocean_nodes_removed_total  
* ocean_nodes_added_total  
* ocean_controller_heartbeat_info_total  
* ocean_managed_nodes_total  
* ocean_allocated_cpu_vcpus_total  
* ocean_allocated_memory_gibs_total  
* ocean_allocated_gpu_units_total  
* ocean_allocated_headroom_vcpus_total  
* ocean_allocated_headroom_memory_gibs_total  
* ocean_allocated_headroom_gpu_units_total
* ocean_cluster_limits_cpu_vcpu  
* ocean_cluster_limits_memory_gib  

#### Cost Analysis Metrics  

* ocean_cpu_usage  
* ocean_memory_usage  
* ocean_compute_cost  
* ocean_storage_cost  
* ocean_networking_cost  
* ocean_networking_usage   

### Labels  

You can configure allow labels and deny labels for the metrics.  

**If you set a label as allow and deny – it will be denied**.  

#### Default Labels  
These labels are the default for all the metrics of scaling and cost analysis. It is not possible to remove them:

* ocean_id  
* ocean_name  

#### Scaling Metrics Labels  

Not relevant to ocean_controller_heartbeat_info. For this metric, only the default labels are used.

* vng_id  
* az  
* lifecycle  
* vm_type  
* reason  
* vng_name  
* node_name – Relevant only for ocean_nodes_removed_total

#### Cost Analysis Metrics Labels  

* namespace  
* resource_type  
* resource_name  
* traffic_type – only for the networking metrics. Its value can be ‘internet’, ‘interRegion’, ‘interAZ’, ‘intraAZ’.  
* direction - only for the networking metrics. Its value can be ‘In’ or ‘Out’.  
* storage_type – only for the metric ‘ocean_storage_cost’, its value can be ‘pv’, ‘nonPv’, ‘pvEfs’.

## Grafana Dashboard
One popular use of metrics saved in Prometheus is dashboarding. As Grafana is a popular dashboarding tool, Spot has created a [Grafana dashboard](https://grafana.com/grafana/dashboards/16475) that you can download. The dashboard enables you to visualize Ocean metrics and may be incorporated into your existing dashboard base.

<img src="/ocean/_media/prometheus-scrape-02.png" />

## What’s next?

In Ocean, click Roadmap to share feedback and request future metrics.
Learn more about Ocean's [scaling](ocean/features/scaling-kubernetes) processes.
