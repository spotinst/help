# Connect an Existing GKE Cluster

This topic describes connecting an existing GKE cluster to Ocean using the [Spot Console](http://console.spotinst.com/).

## Prerequisites

- [Connect](connect-your-cloud-provider/gcp-project) your GCP project to Spot. If you don't have a GCP project, see [Manage Resources](https://console.cloud.google.com/cloud-resource-manager?_ga=2.24189306.-1955943244.1544264785).
- Ensure that billing is enabled for your project: Learn how to [enable billing](https://cloud.google.com/billing/docs/how-to/modify-project).
- Ensure that you have enabled the Google Kubernetes Engine API: Enable the [GKE API](https://console.cloud.google.com/apis/library/container.googleapis.com?q=kubernetes%20engine&_ga=2.13270391.-1955943244.1544264785).
- [Ocean Controller Version 2](ocean/tutorials/ocean-controller-v2/).

## Limitations

You cannot connect a GKE cluster with Autopilot mode turned on.

## Access the Cluster Creation Wizard

1. In the left menu of the Spot Console, click **Ocean > Cloud Clusters**. 
2. Click **Create Cluster**.

## Step 1: General

1. Enter a Cluster Name and the Location Type and click the Region where the cluster runs.
   * Cluster Name is the name of the Ocean entity to create. We recommend giving a cluster you import the same name as the original GKE cluster. This will make it easier to identify related entities in each system.
   * Location Type can be either Zonal or Regional.
2. Select the GKE cluster from which to import the configuration.

![gke-import-cluster-general](https://github.com/user-attachments/assets/32012514-48a5-4b1d-9140-6c772d364950)

## Step 2: Compute

1. Ocean imports the compute configuration from your GKE cluster and displays it on the Compute page. Edit the configuration if needed:
   - Machine Types.
     All types are selected by default to provide Ocean with maximum flexibility. Click **Customize** to adjust them.
   - Resource Limit
     - Max vCPUs
     - Max Memory (GB)
   - Additional Configurations
     - Draining Timeout

![gke-machine-types](https://github.com/user-attachments/assets/7a7ca8f0-3180-413a-9d59-ef380309248c)

2. Optionally, you can import all GKE node pools into Ocean as [virtual node groups](ocean/features/launch-specifications). (The default node pool will be automatically imported).

<details>
  <summary markdown="span">Click for image</summary>
  
<img src="https://github.com/user-attachments/assets/43e81df7-219f-464b-9cfe-dc29a407214a" />

</details>

## Step 3: Connectivity

Install the [Ocean Controller Version 2](ocean/tutorials/ocean-controller-v2/) and establish the connection between the Ocean SaaS and the cluster.

<details>
  <summary markdown="span">Click for image</summary>

![gke-import-connect](https://github.com/user-attachments/assets/45abcc14-406d-42ae-ba79-b247c1d2fbc4)

</details>

To install the Ocean Controller and establish connectivity: 

1. Create a Spot token (or use an existing one) and copy it to the text box.
2. Enter the Namespace. The default is **spot-system**.

3. To install the Ocean Kubernetes Controller, use either Helm (the preferred option) or via script. 

   * **Helm**: This is the preferred method because it lets you customize using command-line options or `values.yaml`. Install **Helm 3.x** and add the `spotinst` repo. Then, use the `helm install` command with set command-line options to install the Ocean controller in a separate spot-ocean namespace.

      ```
    
       # add repo
     
       helm repo add spot https://charts.spot.io
       helm repo update spot
   
       # install controller
        
      helm upgrade --install --wait ocean-controller spot/ocean-kubernetes-controller \
      --namespace "${NAMESPACE}" --create-namespace \ 
      --set spotinst.account="${SPOTINST_ACCOUNT}" \
      --set spotinst.clusterIdentifier="${SPOTINST_CLUSTER_IDENTIFIER}" \
      --set spotinst.token="${SPOTINST_TOKEN}"
      --set metrics-server.deployChart=false
       
       ```
    
   * **Connect via Script**: Use Spot’s script to install the Ocean Controller:

       ```bash
    
      curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller-v2/scripts/init.sh | \
      SPOTINST_TOKEN=$SPOTINST_TOKEN \
      SPOTINST_ACCOUNT=$SPOTINST_ACCOUNT Let me know if there is anything else I can help you with.
      SPOTINST_CLUSTER_IDENTIFIER=$SPOTINST_CLUSTER_IDENTIFIER \
      ENABLE_OCEAN_METRIC_EXPORTER=false \
      INCLUDE_METRIC_SERVER=false \
      bash
       
       ```  
      If you need admin privileges for this script, run the following command:

      ```kubectl create clusterrolebinding <cluster name> --clusterrole=cluster-admin --user=<userEmail>```

     
 >**Note**: Optionally install the [Ocean Prometheus exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/README)

 
4. Click **Test Connectivity** to confirm that the Ocean Controller is functioning in the cluster. The test takes around two minutes. A green **OK** is displayed when the Ocean Controller pod runs in the AKS cluster and communicates with the Ocean SaaS engine.  

Additional Tips:  

* For unsuccessful connectivity, check the outbound connection and that the Ocean Controller pods are running.
* To change the Ocean Controller init.sh script, download, edit, and execute it from the command line (bash shell). 

### For a Private GKE Cluster

1. For a private GKE cluster, install the Spotinst Kubernetes Controller with the following command:

```sh
kubectl apply -f https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-gcr.yaml
```

2. Ensure your GKE cluster has NAT so the controller can report information to the Ocean SaaS.
3. Click Test Connectivity to ensure the controller functionality.

### Preserve Original Node Pool

Preserve the original node pool and its name to sync upgrades of the node pool. The original node pool can be drained from all nodes as long as it is preserved.

For any changes to the original node pool, contact Spot Support.

## Step 4: Review

Review all the Ocean settings you have configured. Click **Create** to finish or use the generated JSON template to create the Ocean cluster using other tooling.


Optional: You can manually scale down your existing GKE nodes in migrated node pools so that Ocean provisions pod-driven optimized infrastructure for your existing workload. 
To do this, run the following command:
```sh
gcloud container clusters resize <cluster_name> --num-nodes=0 --region=<region/zone> --node-pool <node_pool_name>
```

To avoid unnecessary downtime, the scale-down of existing nodes should be gradual. For example, run the above command several times, gradually reducing the value of `num-nodes`. Only Use `num-nodes=0` for the last time you run the command.

