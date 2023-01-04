# Configurations for the Ocean Prometheus Exporter

Helm link:
https://artifacthub.io/packages/helm/spot/ocean-metric-exporter

There are three configurations for the Prometheus exporter:

* Categories
* Metrics
* Labels

## Categories

Each category represents a group of metrics. If the categories are not set - they will all be included by default. The possible categories are:

* scaling
* cost_analysis

## Metrics

For each category, you can configure allowed metrics and deny specific metrics. The allow metrics are the metrics that would be scraped, while the denied metrics will not be scraped.  

**If the same metric is in the allow list and deny list – it will be denied.**

### Scaling Metrics

- ocean_nodes_removed
- ocean_nodes_added
- ocean_controller_heartbeat_info
- ocean_managed_nodes
- ocean_allocated_cpu_vcpus
- ocean_allocated_memory_gibs
- ocean_allocated_gpu_units
- ocean_allocated_headroom_vcpus
- ocean_allocated_headroom_memory_gibs
- ocean_allocated_headroom_gpu_units

### Cost Analysis Metrics
- ocean_cpu_usage
- ocean_memory_usage
- ocean_compute_cost
- ocean_storage_cost
- ocean_networking_cost
- ocean_networking_usage

### Labels

You can configure allow labels and deny labels for the metrics.  
**If you set a label as allow and deny – it will be denied.**

#### Default labels

- ocean_id
- ocean_name

These labels are the default for all the metrics of scaling and cost analysis. It is not possible to remove them.  

#### Scaling Metrics Labels (not relevant for ocean_controller_heartbeat_info)

- vng_id
- az
- lifecycle
- vm_type
- reason
- vng_name
- node_name – Relevant only for ocean_nodes_removed

#### Cost Analysis Metrics Labels

- namespace
- resource_type
- resource_name
- traffic_type – only for the networking metrics, it value can be ‘internet’, ‘interRegion’, ‘interAZ’, ‘intraAZ’.
- direction - only for the networking metrics, it value can be ‘In’ or ‘Out’.
- storage_type – only for the metric ‘ocean_storage_cost’, its value can be ‘pv’, ‘nonPv’, ‘pvEfs’.

## Install the Latest Version of the Prometheus Exporter  

Ocean Prometheus Exporter enables scaling and cost analysis categories. In addition, it enables all the metrics listed above.

If you want to limit your data to just specific scaling or cost analysis metrics, you can customize the config YAML to select a category (scaling or cost_analysis) or choose to allow or remove specific metrics or labels. For example:

### metricsConfiguration categories :  

  - scaling  
  - cost_analysis  

### permitMetrics:

  - ocean_nodes_removed  
  - ocean_nodes_added  
  - ocean_controller_heartbeat_info  
  - ocean_managed_nodes  
  - ocean_allocated_cpu_vcpus  
  - ocean_networking_cost  
  - ocean_networking_usage  

### denyMetrics allowLabels:  

  - vng_id  
  - az  
  - lifecycle  
  - reason  
  - vng_name  
  - namespace  
  - resource_type  
  - traffic_type  
  - direction

Once you reinstall the exporter, make sure to apply the file above (in this example the name of the file is Ocean_exporter_config.yaml):

helm upgrade my-release spot/ocean-metric-exporter –f ocean_exporter_config.yaml

**If this is the first installation, use the helm install command.**

## Cost Analysis Metrics

### ocean_cpu_usage, ocean_memory_usage, ocean_compute_cost

These metrics track the hourly aggregated usage information of the total cluster resource: CPU usage, memory usage and compute cost.

They help track the usage rate according to the hour, the division of resources, resource types and namespace by dedicated labels. These metrics help manage the usage costs efficiently.  

#### Labels

- namespace
- resource_type
- resource_name

### ocean_storage_cost

This metric tracks the hourly aggregated storage cost of the total cluster resource and the storage cost according to the hour, the division to resources, resource types, and namespace by dedicated labels. You can also use storage_type label for the type of storage that helps to manage the usage costs efficiently.  

#### Labels

- namespace
- resource_type
- resource_name
- storage_type – only for the metric ‘ocean_storage_cost’, its value can be ‘pv’, ‘nonPv’, ‘pvEfs’.

### ocean_networking_cost, ocean_networking_usage

These metrics track the hourly aggregated networking information of the total cluster resource. They track the usage rate according to the hour, the division of resources, resource types and namespace by dedicated labels. It can be useful to manage the usage costs efficiently.  

#### Labels

- namespace
- resource_type
- resource_name
- traffic_type – only for the networking metrics, its value can be ‘internet’, ‘interRegion’, ‘interAZ’, ‘intraAZ’.
- direction - only for the networking metrics, its value can be ‘In’ or ‘Out’.

## What's Next
Learn more about [Prometheus metrics](ocean/tools-and-integrations/prometheus/).
