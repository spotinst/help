# Committed Use Discounts 

 
Elastigroup assists in optimizing the usage of [committed use discounts (CUDs)](https://cloud.google.com/compute/docs/instances/committed-use-discounts-overview) to ensure minimal waste. Elastigroup strategically allocates reservations for maximum benefit, improving estimation accuracy for commitment usage. This provides visibility into savings plans and RI utilization, enabling enhanced methods for effectively utilizing vacant plans and maximizing cost savings. 

This feature enables you to utilize your existing committed use discounts before considering the addition of extra resources and makes efficient use of your cloud resources. 

This procedure describes how you can utilize your GCP committed use discounts in your Elastigroup. 

## Prerequisites 

The Utilize Commitment Plans feature enables you to leverage both spend-based and resource-based CUDs in your Elastigroup before adding additional resources. Ensure that the necessary prerequisites are in place for the method you want to utilize your usage.  
 

* For resource-based and spend-based commitment utilization:  

1. Log in to the GCP console and type **IAM & Admin** in the search bar.  
In the left main menu, click **IAM**.  

![commited-use-discounts-1](https://github.com/spotinst/help/assets/106514736/930c8ca3-0a6b-4e3f-9b52-9088fbc4498f)

3. Under the _View by Principal_ tab, click the Security Insights of a principal that begins with spotinst-role-act-xyz. The _Current permissions for Owner role_ window opens.  

![commited-use-discounts-2](https://github.com/spotinst/help/assets/106514736/d03723af-d0b9-4730-8680-972c90dd519f)

4. Ensure that the `compute.commitments.list` permission for Spot’s generated service account is in the [Spot policy](https://docs.spot.io/administration/api/spot-policy-in-gcp). 

When this step is completed, you can start utilizing resource-based CUDs. 

* For spend-based commitment utilization only: 

[Connect all your GCP projects to Spot accounts](https://docs.spot.io/connect-your-cloud-provider/first-account/gcp-manually?id=connect-gcp-manually), with one account assigned to each project. 

1. For projects that are not managed by Spot, create a Spot account with read-only permissions (required for calculating the commitment plans utilization status). 

* The required permission for read only accounts is `compute.instances.list` on Spot's generated service accounts. 

![commited-use-discounts-3](https://github.com/spotinst/help/assets/106514736/52c0db34-54c4-4cbc-9352-3a7fb26a949c)

2. In the search bar in the GCP console, type **API Library**. 

![commited-use-discounts-4](https://github.com/spotinst/help/assets/106514736/c3dab9c3-b07b-4854-8b04-a330b6b62300)

3. In the search bar, type **Cloud Commerce Consumer Procurement API** and select the option that appears in the dropdown menu.  
4. Click the **Cloud Commerce Consumer Procurement API** option that opens. 
5. In the _Cloud Commerce Consumer Procurement API_ window that opens, click **Enable**. 

![commited-use-discounts-5](https://github.com/spotinst/help/assets/106514736/bb5eed0e-5cf6-4e62-8efa-29b4d923bd2f)

6. Return to the search bar and type **Cloud Billing API** and select the option that appears in the dropdown menu. 
7. Click the **Cloud Billing API** option that opens. 
8. In the _Cloud Billing API_ window that opens, click **Enable**. 

![commited-use-discounts-6](https://github.com/spotinst/help/assets/106514736/9a833103-8205-4f67-a6e8-17b4ce364f72)

For all Spot service accounts created by the template “spotinst-role-act”, complete the following steps:  

1. In the left main menu in the GCP console, click **Billing** and then **Account Management**.  

![commited-use-discounts-7](https://github.com/spotinst/help/assets/106514736/8ec5d453-d1ca-4bf1-aad2-340281008df2)

2. Click **Add Principal** in the top right. In the _Grant access to “My Billing Account”_ window, enter the Service Account Name in the _New Principal_ field.  

![commited-use-discounts-8](https://github.com/spotinst/help/assets/106514736/085e1149-411f-497f-9277-2e63ff72860b)

3. Add the **Consumer Procurement Order Viewer** role to all the Spot service accounts permissions in your billing account that is linked to all the Spot service accounts that you found. 

## Enable CUDs Utilization  

To start utilizing commitment plans in your Elastigroup, the `shouldUtilizeCommitments` value should be `true` in the [Elastigroup API](https://docs.spot.io/api/#tag/Elastigroup-GCP/operation/elastigroupGcpCreate). 

 
