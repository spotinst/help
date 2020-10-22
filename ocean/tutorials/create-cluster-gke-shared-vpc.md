# Create a Cluster for GKE Using Shared VPC

Shared Virtual Private Cloud (VPC) allows an organization to connect resources from multiple projects to a common [VPC network](https://cloud.google.com/vpc/docs/vpc), so that they can communicate with each other securely and efficiently using internal IPs from that network. When you use Shared VPC, you designate a project as a host project and attach one or more other service projects to it. The VPC networks in the host project are called Shared VPC networks.

In this tutorial, you will learn how to set up a GKE cluster with shared VPC to be managed as an Ocean cluster.

## Step 1: Configure Shared VPC

Ensure that you have a running GKE cluster with a [shared VPC configured](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-shared-vpc).

## Step 2: Set Permissions

Grant Compute Network User role to the Spot Service Account you created when you first created your Spot Account.

1. Browse to the shared VPC page in your GCP project.

`https://console.cloud.google.com/networking/xpn/details?project=<HOST_PROJECT_ID>`

2. Choose the desired host project and click Add Members from the menu to the right.

<img src="/ocean/_media/tutorials-shared-vpc-01.png" />

3. Click Add Members.

<img src="/ocean/_media/tutorials-shared-vpc-02.png" width="330" height="184" />

4. Fill in the desired service account and grant it Compute Network User role.

## Step 3: Create Ocean Cluster

To create an Ocean cluster that will manage your GKE cluster, use [this procedure](ocean/getting-started/gke).
