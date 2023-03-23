# Cost Analysis

In a containerized world, in which multiple applications and services share the same infrastructure, it is often hard to distinguish between the costs of different applications, services, and environments.

Ocean breaks down the infrastructure costs of your clusters and provides insights on each of the layers which can be used to analyze the application costs and perform chargebacks without having to tag resources extensively.

Instead of seeing the cost of an entire cluster, you can see costs broken down into namespaces and individual workloads within each namespace, and you can filter according to your container labels and annotations. You can see this information further broken down into compute costs and storage costs for each workload. This enables you to gain a detailed understanding of the costs in your cloud infrastructure and provides an essential tool for managing your cloud expenses.

<img src="/ocean/_media/cost-analysis-2.png" />

## How It Works

For the cost analysis, Ocean calculates both compute and storage costs broken down into their sources. Ocean considers all workloads in the cluster, and the managed infrastructure cost is divided across all workloads according to their relative weights.

### Compute Costs

In order to provide a cost breakdown for the cluster, Ocean performs the following process:

1. Ocean continually (every hour) aggregates the resource allocation (CPU and memory) for each workload from the workload specification as collected from the container orchestrator.
2. Ocean calculates the overall managed infrastructure costs across Spot, reserved, and on-demand instances.
3. Based on the infrastructure costs and the workload information, Ocean calculates the costs of the individual workloads according to their weights.

For example, if a workload requests 20% of the total cluster allocatable resources, and the cluster cost was $100, then that workload's cost is calculated as $20.

### Compute Costs: Workload Resource Allocation (CPU and Memory)

The major elements of cluster resource allocation are vCPU and memory. Ocean assigns weights for costs for CPU and Memory depending on the following:

* The cloud provider pricing for vCPU when compared to memory.
* The ratio of equivalent compute (vCPU) to memory (GiB) resources allocated in the cluster, i.e., CPU to memory ratio. The CPU to memory ratio indicates if the cluster is more CPU optimized or memory optimized.

For a cloud provider, the cost of 1 vCPU varies from 7 to 13 times the cost of 1 GiB of memory, depending on instance family and type.

In addition, a cluster that is optimized for memory, using more memory optimized instances, should have a higher weight for memory compared to a cluster optimized for CPU, using more CPU optimized instances.

For example, in two clusters, Cluster-1 (memory optimized) and Cluster-2 (CPU optimized):

* Cluster-1 with 40 vCPU and 320 GiB Memory (1:8 CPU:Mem ratio)
  - Cost weight for Compute (vCPU) = 48% and Memory (GiB) = 52%
* Cluster-2 with 120 vCPU and 120 GiB Memory (1:1 CPU:Mem ratio)
  - Cost weight for Compute (vCPU) = 91% and Memory (GiB) = 9%

In Cluster-1, if workload-1 requests resources for 2 vCPUs and 12 GiB of memory and the total cluster allocatable resources are 40 vCPUs and 320 GiB of memory, then the resource allocation of that workload is calculated as:

`Resource allocation = (0.48 * 2/40) + (0.52 * 12/320) = 0.044 or 4.4%`

In other words, workload-1 used 4.4% of the total cluster allocatable resources. Workload-1 will be assigned 4.4% of Cluster-1 compute costs.

In Cluster-2, if workload-2 requests resources for 4 vCPUs and 6 GiB of memory, and the total cluster allocatable resources are 120 vCPUs and 120 GiB of memory, then the resource allocation of that workload is calculated as:

`Resource allocation = (0.91 * 4/120) + (0.09 * 6/120) = 0.035 or 3.5%`

In other words, workload-2 used 3.5% of the total cluster allocatable resources. Workload-2 will be assigned 3.5% of Cluster-2 compute costs.

<img src="/ocean/_media/cost-analysis-1.png" />

### Headroom

[Ocean Headroom](ocean/features/headroom) is also accounted for in the cost analysis. Note that headroom appears as a separate line item in the analysis and is independent of idle resources.

### Idle Resources

Remaining infrastructure resources that are not allocated to workloads are also reflected. They are included in the total cost of the cluster, and therefore, they are distributed among all the workloads in a way that represents the workload's consumption.

### Storage Costs

Ocean Cost analysis reflects Persistent Volume (PV) storage costs that result from the use of an AWS EBS or a GCP Persistent Disk. This is done according to the process described below:

1. Ocean collects hourly usage information such as the storage volume size, the volume ID, and the price per hour.
2. Ocean calculates Persistent Volume Claims (PVC) costs.
   a. Ocean considers all pods in the cluster that have PVCs and calculates the relevant cost for each pod as (pod run time)\*(storage pricing) using the corresponding PV object and its mapped storage volume. The storage pricing is taken from the information collected in Step 1.
   b. Ocean adds up the PVC costs for the given pod.
3. Ocean shows the storage costs broken down per workload, per hour. For the standalone pods, it calculates and shows the aggregated costs for standalone pods in the cluster.

### Root Volume Costs

To provide a comprehensive view, AWS EBS volumes that are connected to the underlying instances of the cluster nodes and are not used as PVs are also reflected as a part of the storage costs, divided evenly between all workloads running on an instance.

### EFS Costs (for AWS only)

Ocean also shows the Elastic File System (EFS) storage costs. EFS storage cost is calculated based on Amazon storage classes and throughput described on the [Amazon EFS Pricing](https://aws.amazon.com/efs/pricing/).

In order to relate the storage costs to the breakdowns of your workloads, Ocean does the following:

1. Fetches hourly cost of EFS entities in the AWS account.
2. Maps pods to their EFS of usage on an hourly basis, using the following logic:
   a. Ocean identifies pods using EFS storage by identifying certain properties defined on the PVC they are connected to.
   For a Kubernetes deployment, the PVC is the same for all replicas, and therefore, the storage cost per pod is split between the number of replicas run that hour.
   b. For the relevant pods identified, Ocean evenly spreads the cost between the different workloads that were using the EFS. In cases where a single EFS serves multiple applications (workloads) in the cluster or across different clusters, Ocean also spreads the cost evenly between the different workloads.

To retrieve the necessary EFS information, Ocean requires the following permission in the [Access Policy](administration/api/spot-policy-in-aws.md):

`elasticfilesystem:DescribeFileSystems`

### Network Costs

Ocean network costs measure data transfer costs (in $) and bandwidth usage (in GB) for Kubernetes applications.

To enable Network Costs, the network client (agent) needs to [be installed](ocean/tutorials/install-network-client) and run as a DaemonSet on every node in the Kubernetes cluster.

The different types of cloud provider data transfer costs which can be associated with Kubernetes applications are described in detail below.

<img src="/ocean/_media/network-costs-1.png" />

* **Internet**: When an application sends traffic out to the internet, to an IP address external to the cloud provider, the application is assigned cloud provider Internet data transfer costs based on the amount of data (in GB) transferred. For example, a streaming service that sends videos to external clients on the internet or a sales application backing up data to DB service in a private cloud. Cloud providers do not charge for internet traffic coming into the cluster.
* **Inter-Region**: When an application sends traffic that crosses a cloud provider regional boundary and goes to a cluster or service in a different region, the application entails cloud provider Inter-region data transfer costs based on the amount of data (in GB) transferred. For example: backing up DB data between North America and Europe regions. The cost typically depends on the source region of the application generating the traffic.
* **Inter-AZ**:  When an application sends traffic that traverses a cloud provider availability zone (AZ) boundary and goes to a service or application pod in a different availability zone but in the same region, the cloud provider charges Inter-AZ data transfer cost in both ingress and egress directions. As a result, both source and destination applications or services will have Inter-AZ  data transfer costs based on the amount of data transferred (in GB).
* **Intra-AZ**: Typically traffic within the same AZ (Intra-AZ) has no cost, but there are cases when an application sends traffic to a different cluster or accesses an application or service using public IPs. In those cases, the cloud provider charges similar Inter-AZ data transfer costs in both ingress and egress directions. This typically happens when traffic uses Public IP for services like DNS, Ingress, Load Balancer, Transit Gateway, NAT Gateway etc. For example:
  - DNS or Ingress path url is resolved to a Public IP.
  - Load balancer service that is resolved by NodePort public IP instead of private pod IP or service ClusterIP.

**If all application traffic is within the cluster in the same AZ and only private IPs are used, Ocean network costs will show some Intra-AZ bandwidth usage but the cost will be $0.00.**

#### High-level Architecture for Network Costs

The [Ocean network client is installed](ocean/tutorials/install-network-client?id=install-the-ocean-network-client-in-the-cluster) in the Kubernetes cluster and runs as a Kubernetes DeamonSet on each node in the cluster. The Ocean network client includes an exporter and an eBPF packet counter. They collect network flow metrics from pods on the node and send aggregated flow data at regular intervals to the Ocean backend cluster (AWS) for network cost calculation and further aggregation which can be up to 90 days.   

<img src="/ocean/_media/network-costs-3.png" />

## Breakdown Types

The default breakdown of costs is shown per workload (e.g., kubernetes deployments). However, it is possible to show cost itemization per labels and annotations. This is a powerful tool that enables you to analyze your cluster usage per department in your organization, per application, per functions such as development, testing, production, etc., or per any system of labeling you have implemented.

The breakdown also gives you cost information about different Kubernetes elements (i.e., Kinds) such as deployment, daemonSet, statefulSet, and Job.

## Data Captured

Ocean captures and displays data only from instances (nodes) that are managed by Ocean. If you have instances in your cluster that are not managed by Ocean, they are not included in the analysis.

## What's Next?

Learn about the charts, views, and reports you can create in Ocean in [Analyze Your Costs](ocean/tutorials/analyze-your-costs).
Learn how to [Create a Cost Analysis Filter](ocean/tutorials/create-a-cost-filter) and customize the information displayed.
