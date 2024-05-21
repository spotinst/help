<meta name=“robots” content=“noindex”>

#  Migrate AKS Workload using the Console

This topic describes migrating your existing Kubernetes K8s workloads into an Ocean cluster via the Ocean Console.

Before starting, review the prerequisites [there will be a link to the first page]

##  Step 1: Select Instances to Migrate

<ol style="list-style-type: lower-alpha;">
<li>In the left main menu, click <b>Ocean</b> and click <b>Cloud Clusters</b></li>
<li>Select a cluster from the list of clusters.</li>
<li>Click <b>Start Migration</b> on the left of the screen under Ocean Managed Nodes.</li>

  [placeholder]

Ocean automatically detects the workloads (nodes and pods) that belong to the associated Kubernetes    cluster and displays all the discovered nodes in a table.
<li>Select the nodes (instances) you want to migrate into your Ocean cluster.</li>
</ol>


If any node entries show the Required Validation status under the Ready for Migration column, click **Validate** at the bottom left of the screen.

##  Step 2: Set Preferences

Select your workload migration preferences.

[placeholder]

Batch Size Percentage: Indicates the percentage of the cluster's target capacity that will be migrated during migration (per batch). For example, if the cluster's target capacity is 50 nodes, and the Batch Size Percentage is set to 20%, each batch will consist of 20% of the target capacity, 10 nodes (50 nodes * 20% = 10 nodes).   

Batch Size Healthy Percentage: indicates the minimum percentage of (migrated) healthy nodes in a single batch.

The migration will fail if the number of healthy nodes in a single batch is below this percentage. The range is 1-100; if the parameter value is null, the default value will be 50%. Instances that were not replaced due to PDB will be considered as healthy. 

You can override the behavior of the batchMinHealthyPercentage parameter by setting the ignorePdb parameter to True 

Evict stand-alone Pods: Ocean evicts pods that are not part of a Kubernetes deployment and will automatically reschedule these stand-alone pods.

Respect Pod Disruption Budget (PDB): Some pods may have a Pod Disruption Budget (PDB). In the Spot API, use respectPdb to instruct Ocean to verify the PDB. When respectPdb is set to True, Ocean will not migrate a node if the PDB is violated. 

Respect Restrict Scale Down during Roll: Rolls do not consider the restrict-scale-down label. Ocean will migrate a node even if a task or pod uses this label. Ocean's autoscaler takes all configured constraints into consideration before the roll. 

