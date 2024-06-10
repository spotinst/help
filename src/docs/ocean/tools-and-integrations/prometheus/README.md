# Prometheus for Kubernetes Data-Plane Monitoring

Ocean manages the scaling of the Kubernetes data plane, and the data generated in the process could be valuable for monitoring your containerized environment. Using well-defined Prometheus metrics for monitoring Ocean can help you understand the cluster scaling and debug any issues that may arise. In addition, you can build alerts based on the metrics to address issues in real-time and track important trends on a dashboard of different Ocean metrics.  

Ocean maintains an official set of metrics, natively scrapable by Prometheus. This set of metrics helps build a 360-degree view of Ocean's actions while providing application-driven infrastructure.

## Ocean Metrics

By monitoring a few key metrics, you can understand how Ocean scales. The metrics are described below with examples and are relevant to Ocean Prometheus Exporter for EKS, AKS, and GKE.

### ocean_managed_nodes

This metric tracks the total number of nodes Ocean manages in the cluster. The metric could be useful in responding to anomalies. In addition, the metric provides an easy breakdown to monitor specific [Virtual Node Groups](ocean/features/vngs/) in the cluster and other infrastructure characteristics such as instance lifecycle and type.

Prometheus metric type: gauge

Dimensions: `vng_id`, `lifecycle="Spot/OD/Preemptible"` , `az/zone`, `vm_type`, `ocean_name`, `vng_name`, `ocean_id`

Example:  
```
ocean_managed_nodes {vng_id="default", lifecycle="Spot", az="us-west-2a", vm_type="c5.2xlarge", ocean_name=”Prod”, vng_name = “default”, ocean_id= “o-XXXXX”} 13
ocean_managed_nodes {vng_id="ols-xxxxxxxx", lifecycle="OD", az="us-west-2b", type="c5.2xlarge", ocean_name=”Prod” , vng_name = “Vng1”,ocean_id= “o-XXXXX”} 2
ocean_managed_nodes {vng_id="ols-xxxxxxxx", lifecycle="Spot", az="us-west-2b", vm_type="m5.8xlarge",  vng_name = “Vng2”, ocean_id= “o-XXXXX”} 3
```

### ocean_nodes_added_total and ocean_nodes_removed_total

These counter-type metrics help track the rate of addition and removal of nodes in the cluster and their different reasons, as reflected in a dedicated label called `Reason.` `Reason` includes values such as: 

* `pendingPodsOrHeadroom`—The Ocean Autoscaler scaled up the node due to unscheduled pending pods or missing Headroom units on your cluster.  
* `scaleDownForOptimization`—The Ocean Autoscaler scaled down the node to optimize resource utilization on your cluster.  
* `odToSpotReplacement`—The node was scaled up/down due to a replacement from an on-demand to a spot node. The on-demand node was launched because there was no available spot node in the market then. Ocean continues scanning the market for an available spot node and reverts as soon as one is available.  
* `autoHealingReplacement`—The node was scaled up/down due to a replacement from an unhealthy instance to a new one. Ocean checks the instance’s status after the grace period, and if an instance fails the health check, it is automatically replaced with a new one.  
* `riUtilizationReplacement` (relevant only to AWS)—The node was scaled up/down due to a replacement from spot/OD to RI. Ocean constantly monitors your account's available RIs or Savings Plans (when the `strategy.utilizeReservedInstances` or `utilizeCommitments` flag is	enabled). If an Ocean-monitored node runs as a spot or OD, Ocean will try to replace it with the available RI or Savings Plan nodes. 
* `recoveryReplacement`—Since the provider took the instance, the node was scaled down. A new node was scaled up to replace it as part of the recovery process. 
* `revertToLowerCostReplacement` -  The node was scaled up/down due to the ‘Revert to lower cost’ process. For more information, click [here](ocean/features/revert-to-lower-cost-node?id=revert-to-lower-cost-node). 
* `shutdownHoursActivity` - The node was scaled up/down due to shutdown hours set on your cluster. For more information, click [here](ocean/features/running-hours?id=shutdown-hours).  
* `clusterRollReplacement` - The node was scaled up/down due to a cluster roll in your cluster. For more information, click [here](ocean/features/roll?id=roll).  
* `workloadMigration` (relevant only to AWS)- The node was scaled up due to a workload migration process on your cluster. For more information, click [here](ocean/tutorials/migrate-workload-via-ui?id=migrate-workload-using-the-console). 

Prometheus metric type: counter

Dimensions: `reason`, `VNG_Id`, `lifecycle="Spot/OD/Preemptible"`, `az/zone`, `vm_type`, `Ocean_Name`, `vng_name`, `ocean_id`, `Node_name` (optional, only for ocean_nodes_removed_total)

Example:
```
nodes_added_total{reason="revertToLowerCostReplacement", lifecycle="Spot", az="us-west-2a", vm_type="c5.xlarge", vng_name = “Vng2”, ocean_id= “o-XXXXX”} 46
nodes_added_total{reason="scaleUpForPendingPods", lifecycle="Spot", az="us-west-2b", vm_type="r5a.4xlarge", vng_name = “Vng2”, ocean_id= “o-XXXXX”} 13
```

### ocean_failed_scale_up and ocean_failed_scale_down

These counter-type metrics help track the rate of failed scale-ups and scale-down operations in the cluster and the
reasons behind them, as reflected in a dedicated label called `Reason.` `Reason` includes values such as:

* `auto_scaler_can't_handle_pvc` - failed to scale up. PVC can’t be handled.
* `no_instances_with_requested_resources`- failed to scale up. No instances matched all the pods' requested resources.
* `vngs_labels_not_match_all_affinities` - failed to scale up the instance. Pod’s affinity/ anti-affinity could not be
satisfied by the current group’s Virtual Node Group configuration.
* `topology_spread_constrains` - failed to scale up. pod topology spread constraints could not be satisfied by the current
group configuration.
* `no_applicable_instances` - failed to scale up. The current group configuration could not satisfy the Pod’s constraints.
* `vng_max_instance_count_reached` - failed to scale up. Virtual Node Group reached the maximum instance count running.
* `cluster_max_instance_count_reached` - failed to scale up. Clusters reached maximum instance count running.
* `cant_scale_up_pods_for_vngs` - failed to scale up due to technical failure to launch required instances.
* `vng_min_instance_count_reached` - failed to scale down. Virtual Node Group has reached the minimum capacity
of running instances.
* `cluster_min_instance_count_reached` - failed to scale down. Clusters have reached the minimum capacity of
running instances.

Prometheus metric type: counter

Dimensions: `oceanId`, `reason`, `vngId`, `vngName`

Example:
```
ocean_failed_scale_ups{oceanId="o-2cf2e886", reason="oceanId="o-2cf2e886", reason="cant_scale_up_pods_for_vngs", vngId="ols-9238181b", vngName="test-new”", vngId="ols-9238181b", vngName="test-new”}
ocean_failed_scale_downs{oceanId="o-2cf2e886", reason="cluster_min_instance_count_reached", vngId="Unknown", vngName="unKnown”}
```
>**Note**: If the vngId and vngName are ‘unknown’: at this point, when the pod was pending and waiting for the Ocean Autoscaler to scale up a node, the Ocean Autoscaler did not know which Virtual Node Group the pod should run in. 

## Tracking Ocean Managed Resources

It is also useful to track Ocean-managed resources to get a full picture.

### ocean_allocatable_cpu_vcpus, ocean_allocatable_memory_gibs, ocean_allocatable_gpu_units

These metrics track the total resources that can be allocated by all nodes in the cluster.

Prometheus metric type: gauge

Dimensions: `VNG_Id`, `lifecycle="Spot/OD/Preemptible"` , `az/zone`, `vm_type`, `Ocean_Name`, `vng_name`, `ocean_id`

Example:
```
allocatable_cpu{vng_id="ols-xxxxxxxx", lifecycle="OD/Spot/RI/SP", az="us-west-2a", vm_type="c5.2xlarge", vng_name = “Vng2”, ocean_id= “o-XXXXX”, “ocean_name”: “Prod”} 45
```

### ocean_allocatable_headroom_vcpus, ocean_allocatable_headroom_memory_gibs, ocean_allocatable_headroom_gpu_units

This metric tracks the total resource allocatable as headroom in all nodes in the cluster.

Prometheus metric type: gauge

Dimensions: `VNG_Id`, `lifecycle="Spot/OD/Preemptible"` , `az/zone`, `vm_type`, `Ocean_Name`, `vng_name`, `ocean_id`

Example:  
```
 allocatable_headroom_gpu{vng_id="ols-xxxxxxxx", lifecycle="OD", az="us-west-2a", vm_type="c5.2xlarge",  vng_name = “Vng2”, ocean_id= “o-XXXXX”, “ocean_name”: “prod”} 12
 ```

## Tracking Healthiness

### ocean_controller_heartbeat_info

This metric is a measure of the controller health in the cluster. The metric tracks Ocean connectivity health.

Prometheus metric type: gauge

Dimensions:  `Ocean_Name`, `ocean_id`

Example:  
```
ocean_controller_heartbeat_info{ “ocean_name”: “prod”, “ocean_id”: o-XXXXXX} 1
```

## Tracking Ocean Cluster Configurations

### ocean_cluster_limits_cpu_vcpu, ocean_cluster_limits_memory_gib  

These metrics return the value of the CPU and memory limits configured on the Ocean level.  
This can be used to set alerts when the limit is reached.

Prometheus metric type: gauge  

Dimensions: `ocean_name`, `ocean_id`

Example:
```
ocean_cluster_limits_cpu_vcpu{ocean_id="o-xxxxx", ocean_name="xxxx"} 203
```

## Related Topics

Learn how to use [Prometheus to scrape Ocean metrics](ocean/tools-and-integrations/prometheus/scrape).
