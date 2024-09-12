# Optimize Your Cloud

The Optimization page shows key areas in your accounts where you can get significant savings, either costs or vCPU hours. There are actionable recommendations that you can start implementing with the click of a button.

To get started, go to the Spot console and click **Overview Dashboard** > **Optimization**.

This dashboard shows data taken directly from the cloud service providers.

The data on the page is summarized by cloud service provider. If you have multiple accounts connected to Spot, choose the cloud service provider you want to see (AWS, Azure, or GCP).

If you select Eco, you’re redirected to the Eco Optimization page.

<img width="900" src="https://github.com/user-attachments/assets/736d6406-ee62-4196-aa82-c92a595e49e7" />


## What can you do in the dashboard?

* Focus on a product and specific accounts.
* View estimated vCPU running hour statistics, either yearly or monthly (only available for Ocean and AWS).
* View missed and estimated savings.
* Filter workloads by service, account, and name to see an actionable list of workloads by resource.
* From the list of resources, you can import resources to Elastigroup or Ocean, depending on which product you're viewing. Click **Get started** on a resource to import it.
* Create preset from filters.
* Export to CSV.
* Select the fields to view in the list.

## Use Cases

 <details>
   <summary markdown="span">Ocean vCPU hours</summary>

   Let’s say you want to see how much you can save on vCPU hours on your EKS containerized environments. For example, you can filter on:

* **Product**: <i>Ocean</i>
* **Savings type**: <i>vCPU hours</i>
* **Service**: <i>EKS</i>

You can sort the list by estimated vCPU hours to identify the resources you can save the most on. Click **Get Started** to onboard the resource to Ocean.

 </details>

 <details>
   <summary markdown="span">Elastigroup savings</summary>

   Let’s say you want to see how much you can save on Elastigroup. For example, you can filter on:

* **Product**: <i>Elastigroup</i>
* **Savings type**: <i>Elastigroup savings</i>
* **Service**: <i>ASG</i>

You can sort the list by estimated monthly savings to identify the resources you can save the most on. Click **Get Started** to onboard the resource to Elastigroup.

 </details>
