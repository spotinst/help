<meta name="robots" content="noindex">

# View Workloads

This view provides a mapping of all of the workloads, whether deployments or SpotDeployments, are found in your cluster.  

Ocean CD enables you to migrate a deployment to Ocean CD’s CRD by clicking Migrate that is found when hovering over a deployment as seen below.

<img src="/ocean-cd/_media/view-workloads-1.png" />

You can use the filter at the top to find a specific workload or filter for a set of workloads.

The list of live workloads provides the following information:

* **Workload Name**: The name given to the workload (e.g., the application name).
* **Workload Type**: Indicates whether the workload is a Deployment (i.e., not migrated to Ocean CD) or a SpotDeployment (already migrated).
* **Cluster ID**: A string of characters identifying the cluster.  
* **Namespace**: Kubernetes object that partitions a single Kubernetes cluster into multiple virtual clusters. The namespace displayed in the Workloads table is the namespace (i.e., a virtual group of instances) to which the workload belongs.
* **Image**: The name and version number of the current version.
* **Ready Pods**: The number of pods running this image.

## What’s Next?

If you are not already an Ocean user, learn how to use [Ocean](ocean/) to automate your cloud infrastructure for containers.
