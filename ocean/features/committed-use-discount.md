<meta name="robots" content="noindex">

## Committed Use Discount

Ocean clusters and virtual node groups help you optimize using [committed use discounts (CUDs)](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview) to ensure minimal waste. Ocean strategically allocates reservations for maximum benefit, improving estimation accuracy for commitment usage. This provides visibility into savings plans and reserved instance utilization, enabling enhanced methods for effectively utilizing vacant plans and maximizing cost savings.

You can use your existing committed-use discounts before adding extra resources. This lets you make efficient use of your cloud resources.

## Prerequisites

The utilize commitment plans feature lets you leverage both spend-based and resource-based CUDs in your Ocean clusters and virtual node groups before adding additional resources. Make sure the necessary prerequisites are in place for the method you want to utilize your usage.

**Resource-based and spend-based commitment utilization**

1. [Sign in to the GCP IAM console](https://console.cloud.google.com/iamadmin/).
2. On the View by Principals tab, click the Security Insights of a principal that begins with <i>spotinst-role-act-</i>.

   ![ocean-cud-1](https://github.com/user-attachments/assets/1cf99a10-f4c0-4a36-8d9a-1c5792a7ae55)
   
3. In the Spot policy, make sure the compute.commitments.list permission for Spot’s generated service account is listed.

   <img width="400" src="https://github.com/user-attachments/assets/4c246fa7-6696-453f-8c5b-87b634713734">

**Spend-based commitment utilization only**

[Connect all your GCP projects to Spot accounts](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually?id=connect-gcp-manually), with one account assigned to each project:

1. For projects that are not managed by Spot, create a Spot account with read-only permissions (required for calculating the commitment plans utilization status).
   
   The required permission for read-only accounts is compute.instances.list on Spot's generated service accounts.
   
   <img width="300" src="https://github.com/user-attachments/assets/bfae81c5-9015-447f-8eb4-e4929d11f707" />

2. In the GCP console, search for <i>API Library</i>.

   <img src="https://github.com/user-attachments/assets/00ba5abc-6a93-4121-bdb4-6fbab61290ae" />

3. In the API Library, search for and select <i>Cloud Commerce Consumer Procurement API</i>.

4. In Cloud Commerce Consumer Procurement API, click **Enable**.

   <img width="500" src="https://github.com/user-attachments/assets/faaff57e-ba66-4415-b5f3-ab9f4bd8ade4" />

5. Return to the search bar and search for and select **Cloud Billing API**.

6. In Cloud Billing API, click **Enable**.

   <img width="500" src="https://github.com/user-attachments/assets/a7cc5aad-25be-4970-8ddc-4566a5075ee7" />
   
7. In the GCP console, click **Billing** > **Account Management** > **Add Principal**.

   <img width="968" alt="ocean-cud-7" src="https://github.com/user-attachments/assets/8aa17634-1e00-4b99-b8d3-dfb93dd1dc09">

8. In New principals, enter the <i>Service Account Names</i>.

   ![ocean-cud-8](https://github.com/user-attachments/assets/e2395e18-e05f-42fa-9fd6-a0a092dbe53b)

9. Add the **Consumer Procurement Order Viewer** role to all the Spot service account permissions in your billing account that is linked to all the Spot service accounts that you found.

10. Click **Save**.

### Enable CUD Utilization

1. In the Spot console, go to **Ocean** > **Cloud Clusters**.
2. Click on the cluster name, then **click Actions** > **Edit Cluster**.
3. Go to the Compute tab and click **Additional Configurations**.
4. Select **Utilize CUDs**.
5. Click **Next** > **Update**.
