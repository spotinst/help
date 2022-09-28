# Connect an Existing GKE Cluster

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications.

In this procedure, you will connect an existing GKE cluster to Ocean using the [Spot Console](http://console.spotinst.com/).

## Prerequisites

- [Connect your GCP project to Spot](connect-your-cloud-provider/gcp-project). If you have done this already, go on to the next step. If you don't have a GCP project, go to the [Manage Resources](https://console.cloud.google.com/cloud-resource-manager?_ga=2.24189306.-1955943244.1544264785) page.
- Ensure that billing is enabled for your project: Learn how to [enable billing](https://cloud.google.com/billing/docs/how-to/modify-project).
- Ensure that you have enabled the Google Kubernetes Engine API: Enable the [GKE API](https://console.cloud.google.com/apis/library/container.googleapis.com?q=kubernetes%20engine&_ga=2.13270391.-1955943244.1544264785).

## Get Started

In the left menu of the Spot Console, click Ocean/Cloud Clusters, and click Create Cluster.

<img src="/ocean/_media/gke-create-cluster.png" />

## Step 1: General

1. In the General page, enter a Cluster Name and the Location Type and click the Region where the cluster is running.
   - Cluster Name is the name of the Ocean entity that will be created. For a cluster that you are importing, we recommend that you give it the same name as the original GKE cluster. This will make it easier to identify related entities in each system.
   - Location Type can be either Zonal or Regional.
2. Select the GKE cluster to import the configuration from.

<img src="/ocean/_media/gke-general.png" width="400" height="384" />

3. Click Next.

## Step 2: Compute

1. Ocean imports the compute configuration from your GKE cluster and displays it in the Compute page. Confirm or edit the configuration if need:
   - Machine Types.
     All types are selected by default to grant Ocean the most freedom of operation possible. Click Customize if an adjustment is required.
   - Resource Limit
     - Max vCPUs
     - Max Memory (GB)
   - Additional Configurations
     - Draining Timeout

<img src="/ocean/_media/gke-compute-a.png" width="462" height="322" />

2. Optionally, you can import all GKE node pools into Ocean as [virtual node groups](ocean/features/launch-specifications). (The default node pool will be automatically imported.)

<img src="/ocean/_media/gke-compute-vng.png" />

3. Click Next.

## Step 3: Connectivity

1. Create a Spot token or use an existing one.
2. Install the Ocean Controller. You can do this using [Helm](ocean/tutorials/spot-kubernetes-controller/install-with-helm) or by running [kubectl](ocean/tutorials/spot-kubernetes-controller/install-with-kubectl) commands.
3. Click Test Connectivity to ensure the controller functionality.

<img src="/ocean/_media/gke-connectivity.png" />

4. Click Next.

### For a Private GKE Cluster

1. For a private GKE cluster, install the Spotinst Kubernetes Controller with the following command:

```sh
kubectl apply -f https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-gcr.yaml
```

2. Ensure that your GKE cluster has NAT for the controller to be able to report information to the Ocean SaaS.
3. Click Test Connectivity to ensure the controller functionality.

### Preserve Original Node Pool

Preserve the original node pool and its name in order to sync upgrades of the node pool. The original node pool can be drained from all nodes as long as it is preserved.

For any change in the original node pool please contact us.

## Step 4: Review

Review all of the Ocean settings you have configured. Click Create to finish or use the generated JSON template to create the Ocean cluster using other tooling.

You're all set! Ocean will now ensure the most cost-effective capacity and sizing possible for your cluster.

## What's Next?

Manually scale down your existing GKE nodes in the node pools you migrated to get Ocean to provision pod-driven optimized infrastructure for your existing workloads. To do this, you can use the following command:

```sh
gcloud container clusters resize <cluster_name> --num-nodes=0 --region=<region/zone> --node-pool <node_pool_name>
```

To avoid unnecessary down time, the scale down of existing nodes should be gradual. For example, run the above command several times, reducing the value of `num-nodes` gradually. Use `num-nodes=0` only on the last time you run the command.

## What's Next?

- Learn how to [connect an existing ECS Cluster](ocean/getting-started/gke)
