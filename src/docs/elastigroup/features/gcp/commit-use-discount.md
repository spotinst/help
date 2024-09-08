# Committed Use Discounts 

Elastigroup assists in optimizing the usage of [committed use discounts (CUDs)](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview) to ensure minimal waste. Elastigroup strategically allocates reservations for maximum benefit, improving estimation accuracy for commitment usage. This provides visibility into savings plans and RI utilization, enabling enhanced methods for effectively utilizing vacant plans and maximizing cost savings. 

This feature enables you to utilize your existing committed use discounts before considering the addition of extra resources and makes efficient use of your cloud resources. 

This procedure describes how you can utilize your GCP committed use discounts in your Elastigroup:
* [Resource-based and spend-based commitments](/elastigroup/features/gcp/commit-use-discount?id=resource-based-and-spend-based-commitments)
* [Spend-based commitments](/elastigroup/features/gcp/commit-use-discount?id=spend-based-commitments)
* [Resource-based commitment with a billing account](/elastigroup/features/gcp/commit-use-discount?id=resource-based-commitment-with-a-billing-account)

## Resource-Based and Spend-Based Commitments  

1. Log in to the GCP console and type **IAM & Admin** in the search bar.  
2. In the left main menu, click **IAM**.
3. Under the *View by Principal* tab, click the Security Insights of a principal that begins with spotinst-role-act-xyz. The _Current permissions for Owner role_ window opens.  

   <img width="400" height="300" alt="commited-use-discounts-2" src="https://github.com/spotinst/help/assets/106514736/d03723af-d0b9-4730-8680-972c90dd519f">

4. Ensure that the `compute.commitments.list` permission for Spot’s generated service account is in the [Spot policy](https://docs.spot.io/administration/api/spot-policy-in-gcp). 

When this step is completed, you can start utilizing resource-based CUDs. 

## Spend-Based Commitments 

[Connect all your GCP projects to Spot accounts](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually?id=connect-gcp-manually), with one account assigned to each project. 

1. For projects that are not managed by Spot, create a Spot account with read-only permissions (required for calculating the commitment plans utilization status). 

   The required permission for read only accounts is `compute.instances.list` on Spot's generated service accounts. 

   <img width="300" height="300" alt="commited-use-discounts-3" src="https://github.com/spotinst/help/assets/106514736/52c0db34-54c4-4cbc-9352-3a7fb26a949c">

2. In the search bar in the GCP console, type **API Library**.
3. In the search bar, type **Cloud Commerce Consumer Procurement API** and select the option that appears in the dropdown menu.  
4. Click the **Cloud Commerce Consumer Procurement API** option that opens. 
5. In the _Cloud Commerce Consumer Procurement API_ window that opens, click **Enable**.
6. Return to the search bar and type **Cloud Billing API** and select the option that appears in the dropdown menu. 
7. Click the **Cloud Billing API** option that opens. 
8. In the _Cloud Billing API_ window that opens, click **Enable**.

## Resource-Based Commitment with a Billing Account

A resource-based commitment with a billing account scope enables you to use the same CUD in multiple projects, as mentioned in [GCP](https://cloud.google.com/billing/docs/how-to/cud-analysis-resource-based#understanding_discount_sharing). Connect all of your GCP projects to Spot accounts, with one account assigned to each project, similar to [Spend-Based Commitments](/elastigroup/features/gcp/commit-use-discount?id=spend-based-commitments).

For projects that Spot does not manage, a Spot account with read-only permissions should be created to calculate the status of the commitment plan usage: `compute.instances.list` on Spot's generated service accounts.

The `compute.instances.list` permission for the project that purchased the CUD.

## Connect the `spotinst-role-act` Template

For all Spot service accounts created by the template `spotinst-role-act`, complete the following steps:  

1. In the left main menu in the GCP console, click **Billing** > **Account Management**.
2. Click **Add Principal** in the top right. In the _Grant access to My Billing Account_ window, enter the Service Account Name in the _New Principal_ field.
3. Add the **Consumer Procurement Order Viewer** role to all the Spot service accounts permissions in your billing account that is linked to all the Spot service accounts that you found. 

## Enable Committed Use Discounts  

To start utilizing commitment plans in your Elastigroup, the `shouldUtilizeCommitments` value should be `true` in the [Elastigroup API](https://docs.spot.io/api/#tag/Elastigroup-GCP/operation/elastigroupGcpCreate). 

 
