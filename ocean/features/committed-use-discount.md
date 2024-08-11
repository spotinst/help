<meta name="robots" content="noindex">

# Committed Use Discount

Cloud service provider relevance: <font color="#FC01CC">GCP</font>.

Ocean clusters and virtual node groups help you optimize using [committed use discounts (CUDs)](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview) to ensure minimal waste. Ocean strategically allocates reservations for maximum benefit, improving estimation accuracy for commitment usage. This provides visibility into savings plans and reserved instance utilization, enabling enhanced methods for effectively utilizing vacant plans and maximizing cost savings.

You can use your existing committed-use discounts before adding extra resources. This lets you make efficient use of your cloud resources.

## Prerequisites

The utilize commitment plans feature lets you leverage both spend-based and resource-based CUDs in your Ocean clusters and virtual node groups before adding additional resources. Make sure the necessary prerequisites are in place for the method you want to utilize your usage.

## Resource-based and Spend-based Commitment Utilization

1. [Sign in to the GCP IAM console](https://console.cloud.google.com/iamadmin/).
2. On the View by Principals tab, click the Security Insights of a principal that begins with <i>spotinst-role-act-</i>.

   <img width="900" src="https://github.com/user-attachments/assets/1cf99a10-f4c0-4a36-8d9a-1c5792a7ae55">
   
3. In the Spot policy, make sure the compute.commitments.list permission for Spot’s generated service account is listed.

   <img width="400" src="https://github.com/user-attachments/assets/4c246fa7-6696-453f-8c5b-87b634713734">

# Spend-based Commitment Utilization Only

[Connect all your GCP projects to Spot accounts](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually?id=connect-gcp-manually), with one account assigned to each project:

1. For projects that are not managed by Spot, create a Spot account with read-only permissions (required for calculating the commitment plans utilization status).
   
   The required permission for read-only accounts is compute.instances.list on Spot's generated service accounts.
   
   <img width="300" src="https://github.com/user-attachments/assets/bfae81c5-9015-447f-8eb4-e4929d11f707" />

2. In the GCP console, search for <i>API Library</i>.

   <img width="900" src="https://github.com/user-attachments/assets/00ba5abc-6a93-4121-bdb4-6fbab61290ae" />

3. In the API Library, search for and select <i>Cloud Commerce Consumer Procurement API</i>.

4. In Cloud Commerce Consumer Procurement API, click **Enable**.

   <img width="500" src="https://github.com/user-attachments/assets/faaff57e-ba66-4415-b5f3-ab9f4bd8ade4" />

5. Return to the search bar and search for and select **Cloud Billing API**.

6. In Cloud Billing API, click **Enable**.

   <img width="500" src="https://github.com/user-attachments/assets/a7cc5aad-25be-4970-8ddc-4566a5075ee7" />
   
7. In the GCP console, click **Billing** > **Account Management** > **Add Principal**.

   <img width="900" src="https://github.com/user-attachments/assets/8aa17634-1e00-4b99-b8d3-dfb93dd1dc09">

8. In New principals, enter the <i>Service Account Names</i>.

   <img width="800" src="https://github.com/user-attachments/assets/e2395e18-e05f-42fa-9fd6-a0a092dbe53b">

9. Add the **Consumer Procurement Order Viewer** role to all the Spot service account permissions in your billing account that is linked to all the Spot service accounts that you found.

10. Click **Save**.

## Enable CUD Utilization

* For Ocean clusters in the Spot console:
  <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, go to <b>Ocean</b> > <b>Cloud Clusters</b>.</li>
   <li>Click <b>Create Cluster</b>.</li>
   <li>Follow the <a href="https://docs.spot.io/ocean/getting-started/">instructions for creating a cluster</a>.</li>
   <li>Select <b>Utilize CUDs</b> on the Compute tab > <b>Additional Configurations</b>.</li>
 </ol>
 
* For Ocean clusters in the <a href="https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKEClusterCreate">API</a>, add <i>shouldUtilizeCommitments</i> to <b>strategy</b>:
    <pre><code>"strategy": {
      "shouldUtilizeCommitments": true
    },</code></pre>
    
* For virtual node groups in the Spot console:
  <ol style="list-style-type: lower-alpha;">
   <li>In the Spot console, go to <b>Ocean</b> > <b>Cloud Clusters</b>.</li>
   <li>Click <b>Create Cluster</b>.</li>
   <li>Follow the <a href="https://docs.spot.io/ocean/getting-started/">instructions for creating a cluster</a>.</li>
   <li><a href="https://docs.spot.io/ocean/tutorials/manage-virtual-node-groups">Create a VNG</a>.</li>
   <li>Add <i>shouldUtilizeCommitments</i> to <b>strategy</b>:
         <pre><code>"strategy": {
      "shouldUtilizeCommitments": true
    },</code></pre>
      </li>
   <li>Click <b>Save</b>.</li>
 </ol>
 
* For virtual node groups the <a href="https://docs.spot.io/api/#tag/Ocean-GKE/operation/OceanGKELaunchSpecCreate">API</a>, add <i>shouldUtilizeCommitments</i> to <b>strategy</b>:
    <pre><code>"strategy": {
      "shouldUtilizeCommitments": true
    },</code></pre>
