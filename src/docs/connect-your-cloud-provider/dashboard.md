# Overview Dashboard

The Dashboard provides a compute overview of your entire organization. On the Dashboard, you can see insights and recommendations, potential savings, and an overview of savings for the Spot products you are using, including Elastigroup, Ocean, and Eco.

## Go to the Dashboard

If you have just connected your cloud account using one of the connection wizards in the Spot console, the Dashboard will open when you complete the wizard. 

Click Overview at the top of the left sidebar and click Dashboard. 

<img src="/connect-your-cloud-provider/_media/view-dashboard-000.png" />

The main areas of the dashboard are described below.

## Insights & Recommendations

Once you have connected your cloud provider, Spot provides recommendations based on your cloud provider(s), the kind of account you connected (e.g., linked account or management account), and the resources existing in your cloud account.

<img src="/connect-your-cloud-provider/_media/view-dashboard-001.png" />

If Spot presents a lot of recommendations, be sure to click **View All** so that you can see all the recommendations for savings and optimization. The following recommendations you may see: 
- Connect a Linked Account: You can link additional accounts to Spot, including accounts from different cloud providers.
- Connect a Management Account: This enables you to use Eco (AWS only). Appears if you do not already have a management account connected.
- Invite more users to Spot: This opens the user administration in Spot where you can add more users in your organization. Appears only if you have administrator rights in Spot.
- Create your first Elastigroup: Appears if you have no Elastigroup.
- Create your first Stateful Node: Appears if you have no Stateful Node.
- Create your first Ocean Cluster: Appears if you have no Ocean cluster.
- Set up your Strategy for Eco: Appears if you have already connected a management account.

Additional recommendations for connections, imports, and integrations may appear depending on what Spot detects in your cloud, for example, Connect your EKS Cluster to Ocean, Import MongoDB to Stateful Node, Use Jenkins with Elastigroup, and many others.

## Potential Savings

Spot analyzes the instances you have in your cloud provider account and provides estimates of amounts you could save by using Spot to manage your workloads and commitments. Analyses are presented for containers, elastic applications, commitments, and resource groups.

<img src="/connect-your-cloud-provider/_media/view-dashboard-002.png" />

- Containers: Recommendation and estimate of savings if you would run your container workload on spot instances instead of on-demand instances.
- Elastic Applications: Recommendation and estimate of savings if you would run your application workload on spot instances instead of on-demand instances.
- Commitments: Recommendation and estimate of savings if you would run your workload on a portfolio of reserved instances and savings plans instead of on-demand instances.
- Resource Groups: Recommendation and estimate of savings if you would run your workload on spot instances instead of on Azure resources.

Each preview contains the number of instances in that category currently running, an estimation of additional savings that could be obtained using optimization, and the potential savings percentage.
The Reservations preview appears only if you are connected to AWS with a management account.

## Fee Calculation

The Monthly Fee is calculated each month as a percentage of your monthly savings.  

### Elastigroup/Ocean Service Savings Definition

For each cloud provider, “Savings” is defined as follows:

#### AWS Spot Instances

Your actual AWS Spot Instances charges deducted from the published cost of AWS EC2 On-Demand Instances. The On-Demand Instance charges can be found on the AWS website at https://aws.amazon.com/ec2/pricing/on-demand/.

#### Microsoft Azure Spot Virtual Machines (VMs)

Your actual Microsoft Azure Spot VM charges deducted from the published cost of Azure On-Demand VMs. The On-Demand VMs charges can be found on Microsoft Azure’s website at https://azure.microsoft.com/en-us/pricing/details/virtual-machines/linux/.

#### Google Cloud Platform (GCP) Spot and/or preemptible VMs

Your actual GCP Spot VMs charges deducted from the published cost of GCP On-Demand VMs. The On-Demand VMs charges can be found on GCP’s website at https://cloud.google.com/compute/pricing.

### Eco Service Savings Definition

For each cloud provider, “Savings” is defined as follows:

#### AWS Reserved Instances (RIs) and Savings Plans (SPs)  

Your actual AWS RIs and/or SPs charges deducted from the published cost of AWS EC2 On-Demand Instances. The On-Demand Instance charges can be found on AWS’s website at https://aws.amazon.com/ec2/pricing/on-demand/.

#### Microsoft Azure RIs, SPs and Reserved Capacity (RC)  

Your actual Azure RIs and/or SPs and/or RCs charges deducted from the cost of Microsoft Azure Pay-As-You-Go Instances, as published in the Customer’s Azure price sheet, which is presented to Spot by NetApp.

#### GCP Committed Usage Discounts (CUD)  

Your actual GCP CUD charges deducted from the published cost of GCP On-Demand VMs. The On-Demand VMs charges can be found on GCP’s website at https://cloud.google.com/compute/pricing.

#### Billing Engine and Cost Intelligence Fee Calculation 

The monthly fee is calculated each month as a percentage of the total cloud spend. Unless otherwise specified, “Spend” is your charges as detailed in your cloud provider’s bills at the end of each month. This includes taxes, credits, and program discounts, but excludes your cloud provider’s support services. 
