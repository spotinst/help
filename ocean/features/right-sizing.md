# Right Sizing

Ocean ensures pods and tasks are placed on the best possible VM that fits their resource requirements and other scheduling constraints such as labels, attributes, taints, tolerations, and affinity rules.

However, estimating the proper amount of CPU and Memory when assigning resource requests to workloads is also a challenge which teams face when designing Kubernetes or ECS clusters. To address this challenge and create even more resource-efficient clusters, Ocean has implemented a Right Sizing recommendation mechanism.

Ocean monitors workload utilization in real-time and provides recommendations for adjusting the resource requirements for different workload types.

<img src="/ocean/_media/features-rightsizing-01.png" width="360" height="138" />

Ocean continuously monitors the cluster CPU and Memory usage and provides recommendations when a workload consumes significantly more or less resources than it requested.

Applying the changes suggested by those notifications helps utilize resources in the cluster in a more precise manner and lower chances of cluster issues as resulting from under- or over-utilization of resources.

## How It Works (Ocean For Kubernetes)

For Ocean Kubernetes clusters, Right Sizing relies on the Metrics Server and displays data after an initial 4-day data collection period.

Once every 5 minutes, the controller queries the Metrics Server for pod utilization (the equivalent of kubectl top pods). The output produces a single point in time data point for each pod. Ocean then aggregates the data of the pods per deployment, i.e., averaging all the data points for pods of the same deployment.

The result is that every 5 minutes, we get a single datapoint (i.e., a single point for CPU and a single point for memory) for each deployment representing the average CPU and memory utilization for the pods of each deployment at a single point in time.

Ocean makes recommendations based on a mechanism that tries to even out peaks and troughs in resource demand. Currently, Ocean generates recommendations for Kubernetes deployments, statefulsets, and daemonsets.

### Kubernetes Usage Notes

Right-Sizing is available for Ocean users running Spot Controller Ver. 1.0.37 and later.
For Ocean Kubernetes clusters, Right Sizing relies on the Kubernetes Metrics Server. For more information about the Metrics Server, see the [tutorial](ocean/tutorials/use-right-sizing.md).

## How It Works (Ocean For ECS)

For ECS Ocean clusters, Right Sizing relies on Cloudwatch metrics and displays data after an initial 4-day data collection period.

Once every 15 minutes, Ocean queries the Cloudwatch metrics for service utilization. The output produces a single point in time data point for each service. Ocean then calculates an average service utilization by dividing each metric (CPU and memory) of the service by the number of tasks running in the service.

The result is that every 15 minutes, we get a single datapoint (i.e., a single point for CPU and a single point for memory) for each service representing the average CPU and memory utilization for the tasks of each service at a single point in time.

### ECS Usage Notes

For any Amazon ECS task or service using the EC2 launch type, Amazon ECS container instances require version 1.4.0 or later of the container agent to enable CloudWatch metrics.
Amazon ECS container instances require the `ecs:StartTelemetrySession` permission on the IAM role that the container instances are launched with.
For more information about ECS metrics, see [Amazon ECS CloudWatch Metrics](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-metrics.html).

## Use Right Sizing Recommendations

The Right Sizing engine runs every three hours in order to generate new recommendations and update existing ones.

You can get the Right Sizing recommendations through the API using one of the following calls:

Get Right Sizing Recommendations: Ocean for [ECS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-ecs/get-right-sizing-recommendations/), [K8s AWS](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/get-right-sizing-recommendations/), [GKE](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-gke/get-right-sizing-recommendations/)

You can also view Right Sizing recommendations on your Ocean console, under the Right Sizing tab, and under the tabs for Kubernetes Deployments or ECS Services.

<img src="/ocean/_media/features-rightsizing-02.png" />

### Recommendations:

<img src="/ocean/_media/features-rightsizing-03.png" />
