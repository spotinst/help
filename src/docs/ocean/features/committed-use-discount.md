# Committed Use Discount

Cloud service provider relevance: <font color="#FC01CC">GKE</font>.

Ocean clusters help you optimize using [committed use discounts (CUDs)](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview) to ensure minimal waste. Ocean strategically allocates reservations for maximum benefit, improving estimation accuracy for commitment usage. This provides visibility into savings plans and reserved instance utilization, enabling enhanced methods for effectively utilizing vacant plans and maximizing cost savings.

You can use your existing committed-use discounts before adding extra resources. This lets you make efficient use of your cloud resources.

The utilize commitment plans feature lets you leverage spend- and resource-based CUDs in your Ocean clusters before adding additional resources. Ensure the prerequisites are in place for the method you want to use.

Ocean manages the committed use discount virtual machines by automatically: 

* **Scale up**: Ocean uses the commitment utilization status to decide when to scale up on-demand virtual machines instead of spot instances. This helps utilize commitment plans in markets they apply to.

* **Scale down**: Instances that use commitment plans are given priority during the scale-down process, ensuring the commitment plan strategy is maintained.

* **Revert to reserved**: Ocean maintains the group’s strategy to utilize commitment plans. This is done by checking if there are spot instances in the group that can be replaced with on-demand instances that utilize commitment plans.

You can utilize your GCP committed use discounts in Ocean for:
* [Resource-based and spend-based commitment Utilization](docs.spot.io/ocean/features/commited-use-discount?id=resource-based-and-spend-based-commitment-utilization)
* [Spend-based commitments](docs.spot.io/ocean/features/commited-use-discount?id=spend-based-commitment-utilization-only)
* [Resource-based commitment with a billing account](docs.spot.io/ocean/features/commited-use-discount?id=resource-based-commitment-with-a-billing-account)

## Resource based and Spend-based Commitment Utilization

1. [Sign in to the GCP IAM console](https://console.cloud.google.com/iamadmin/).
2. On the View by Principals tab, click the Security Insights of a principal that begins with <i>spotinst-role-act-</i>.
   
3. In the Spot policy, ensure the compute.commitments.list permission for Spot’s generated service account is listed.

   <img width="400" src="https://github.com/user-attachments/assets/4c246fa7-6696-453f-8c5b-87b634713734">

## Spend based Commitment Utilization Only

[Connect all your GCP projects to Spot accounts](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually?id=connect-gcp-manually), with one account assigned to each project:

1. For projects not managed by Spot, create a Spot account with read-only permissions (required for calculating the commitment plans utilization status).
   
   The required permission for read-only accounts is `compute.instances.list` on Spot's generated service accounts.
   
   <img width="300" src="https://github.com/user-attachments/assets/bfae81c5-9015-447f-8eb4-e4929d11f707" />

2. In the GCP console, search for <i>API Library</i>.

3. In the API Library, search for and select <i>Cloud Commerce Consumer Procurement API</i>.

4. In Cloud Commerce Consumer Procurement API, click **Enable**.

5. Return to the search bar and search for and select **Cloud Billing API**.

6. In Cloud Billing API, click **Enable**.
  
7. In the GCP console, click **Billing** > **Account Management** > **Add Principal**.

8. In New principals, enter the <i>Service Account Names</i>.

9. Add the **Consumer Procurement Order Viewer** role to all the Spot service account permissions in your billing account that is linked to all the Spot service accounts that you found.

10. Click **Save**.

## Resource Based Commitment with a Billing Account

A resource-based commitment with a billing account scope enables you to use the same CUD in multiple projects, as mentioned in [GCP](https://cloud.google.com/billing/docs/how-to/cud-analysis-resource-based#understanding_discount_sharing). Connect all of your GCP projects to Spot accounts, with one account assigned to each project, similar to [Spend-Based Commitments](docs.spot.io/ocean/features/commited-use-discount?id=spend-based-commitment-utilization-only).  docs.spot.io

For projects that Spot does not manage, a Spot account with read-only permissions should be created to calculate the status of the commitment plan usage: `compute.instances.list` on Spot's generated service accounts.

The `compute.instances.list` permission for the project that purchased the CUD.

## Enable CUD Utilization

* For Ocean clusters in the Spot console:
  <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, go to <b>Ocean</b> > <b>Cloud Clusters</b>.</li>
   <li>Click <b>Create Cluster</b>.</li>
   <li>Follow the <a href="https://docs.spot.io/ocean/getting-started/">instructions for creating a cluster</a>.</li>
   <li>Select <b>Utilize CUDs</b> on the Compute tab > <b>Additional Configurations</b>.</li>
 </ol>
 
* For Ocean clusters in the [API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate), make sure <b>shouldUtilizeCommitments</b> is <i>true</i>:
   <details>
   <summary markdown="span">View code</summary>
    <pre><code>"strategy": {
      "shouldUtilizeCommitments": true
    },</code></pre>

    </details>
<!--    
* For virtual node groups in the Spot console:
  <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, go to <b>Ocean</b> > <b>Cloud Clusters</b>.</li>
   <li>Click <b>Create Cluster</b>.</li>
   <li>Follow the <a href="https://docs.spot.io/ocean/getting-started/">instructions for creating a cluster</a>.</li>
   <li><a href="https://docs.spot.io/ocean/tutorials/manage-virtual-node-groups">Create a VNG</a>.</li>
   <li>Make sure <b>shouldUtilizeCommitments</b> is <i>true</i>:
     <details>
     <summary markdown="span">View code</summary>
      <pre><code>"strategy": {
        "shouldUtilizeCommitments": true
      },</code></pre>

     </details>
      </li>
   <li>Click <b>Save</b>.</li>
 </ol>
 
* For virtual node groups the [API](https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate), make sure <b>shouldUtilizeCommitments</b> is <i>true</i>:
   <details>
   <summary markdown="span">View code</summary>
    <pre><code>"strategy": {
      "shouldUtilizeCommitments": true
    },</code></pre>

    </details>
-->
