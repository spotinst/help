<meta name="robots" content="noindex">

## View Workloads

You can view all the workloads in your cluster. Click Workloads in the left sidebar menu and the list of workloads will be displayed.

<img src="/ocean-cd/_media/tutorials-workloads-01.png" />

You can use the filter at the top to find a specific workload or filter for a set of workloads.

The list of live workloads provides the following information:
- Workload name: Name given to the workload (e.g., the application name).
- Workload type: Indicates whether the workload is a Deployment (i.e., not migrated to Ocean CD) or a Spotdeployment (already migrated).
- Cluster ID: The cluster where the workload is running.
- Namespace: Kubernetes object that partitions a single Kubernetes cluster into multiple virtual clusters. The namespace displayed in the Workloads table is the namespace (i.e., a virtual group of instances) to which the workload belongs.
- Image: Name and version number of the current version.
- Version age: Time since the current image was deployed.
- Ready pods: Number of pods running this image.
- Revisions: Number of different images of this workload that have been deployed.

## What’s Next?

If you are not already an Ocean user, learn how to use [Ocean](ocean/) to automate your cloud infrastructure for containers.
