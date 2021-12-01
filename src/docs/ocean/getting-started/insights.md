# Connect Ocean Insights

Ocean Insights provides a convenient way for you to see how Ocean can reduce your cluster costs and optimize your cluster resources. Insights reads and analyzes data from your Kubernetes cluster and then presents a detailed report of potential savings that you could achieve. This Insights analysis is free of charge and does not require any migration or changes to your cluster configuration.

> **Note**: Insights can be connected only to clusters that are not managed by Ocean.

## Get Started

To connect Ocean Insights to your Kubernetes cluster:

1. Go to Ocean in the Spot console and click Insights.

<img src="/ocean/_media/gettingstarted-insights-01.png" />

2. If this is the first time you are connecting a cluster to Insights in this account, click Connect Insights in the middle of the page. If there are already Insights clusters in this account, click Connect Insights above the list of existing Insights clusters.

## Enter Cluster Details

1. Enter a name for your Insights cluster. The name will help identify the cluster and its insights among other clusters you chose to connect. For easy identification, we recommend using the same name as your Kubernetes cluster.
2. Enter a Spot token, or click Generate Spot Token to create a new one.

<img src="/ocean/_media/gettingstarted-insights-02.png" />

## Install the Ocean Controller

This step will install the Ocean Controller in your Kubernetes cluster. Working in read-only mode, the controller will gather the data required to analyze the cluster.

1. Copy the script appearing in the Spot UI and run it on a machine that has the kubectl command-line tool installed and configured. Ensure that the correct context is defined in kube config.

```shell
curl -fsSL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/cluster-controller/scripts/init.sh |
	SPOTINST_TOKEN="<redacted>" \
	SPOTINST_ACCOUNT="<redacted>" \
	SPOTINST_CLUSTER_IDENTIFIER="<redacted>" \
	bash
```

2. After the script has completed successfully, return to the same page in the Spot UI and click Connect Connectivity. Ocean will verify that communication with the controller is working as expected. This could take a couple of minutes.
3. When Connectivity Status shows a green checkmark, click Connect Insights on the bottom right.

Ocean needs a few minutes to generate a summary based on the collected and analyzed data.

## View Cluster Insights

When the analysis is ready, the Insights analysis page appears with the name of your cluster at the top. The analysis includes the parts described below.

### Cluster Details

The cluster details include:

- Last Heartbeat
- Kubernetes Version
- Running Pods
- Controller Version
- Creation Date and Time

### Savings Potential

This area shows your:

- Estimated Current Costs: An estimate based on the instances detected in the cluster and relevant attributes such as instance type, size, and lifecycle (e.g., on demand or spot). Note that although Ocean utilizes commitment plans automatically and continuously in the cluster, commitment plans as well as EDPs are not considered in this estimation.
- Estimated Potential Costs: This estimate is based on two parts:
  - Converting all on-demand instances to spot instances. (If you do not plan to use spot instances, click the toggle switch in the upper right. This will show an estimate based on bin packing only.)
  - Optimizing the allocation of compute infrastructure by workloads using Ocean’s bin packing abilities.

<img src="/ocean/_media/gettingstarted-insights-04.png" />

Insights calculates potential monthly savings as percents and dollar amounts. Hover your mouse over the bar to see the breakdown of savings achieved by using spot instances and applying the bin packing optimization.

### Requested Resources

Insights presents information about the resources requested by your cluster. This includes the current amounts and the average values of vCPU, memory, and GPU resources requested by your workloads. When you click on a tile, you can see the corresponding trend chart up to the last 24 hours.

<img src="/ocean/_media/gettingstarted-insights-05.png" />

### Bin Packing Optimization Potential

This graph demonstrates the potential for optimizing your resource utilization by applying Ocean bin packing. For each resource, the graph shows a bar for the current allocation and a bar for the estimated allocation after bin packing has been applied. Each bar also shows the percent allocation of resources by workloads, based on their requested resources displayed above.

<img src="/ocean/_media/gettingstarted-insights-07.png" />

## Ocean Insights List

Once your Insights analysis is created, it is saved and added to a list of clusters on the Ocean Insights page. You can connect multiple Insights clusters and refer back to them on this page. These will remain and provide updated insights until the cluster is connected to Ocean.

<img src="/ocean/_media/gettingstarted-insights-08.png" />

## Connect to Ocean

Once you have reviewed the Insights analysis of your Kubernetes cluster, we make it really easy for you to go ahead and connect your cluster to Ocean so you can start saving costs and optimizing the cluster.

1. On the cluster Insights page, click Connect as Ocean Cluster. (You can also do this from the list of Insights clusters.)
2. Complete the information requested in the connection wizard (described below).
3. Review the configuration and click Connect.

### General

In the General page of the connection wizard, complete the following:

1. In the General page, enter a Cluster Name and Cluster Identifier and click the region where the cluster is running.
   - Cluster Name: The name of the Ocean entity that will be created. For a cluster that you are importing, we recommend that you give it the same name as the original cluster. This will make it easier to identify related entities in each system.
   - Cluster Identifier: The unique key used to connect between the Ocean SaaS and the Kubernetes cluster. The Cluster Identifier is automatically generated according to the Cluster Name entered, however, you can change the name when you are creating the cluster.
2. Choose the autoscaling group or a specific instance from which you will import the compute configurations.
3. Click Next.

### Compute

1. Ocean imports the compute configuration from your Kubernetes cluster and displays it in the Compute page. Confirm or change the configuration if needed:
   - Cluster Network:
     - VPC
     - Subnets
   - Machine Types: All types are selected by default to grant Ocean the most freedom of operation possible. Click Customize if an adjustment is required.
   - Instance Specifications:
     - Image
     - Security Groups
     - Instance Profile
     - Key Pair
     - User Data (Startup Script)
2. Click next.

### Review

The Review page presents a summary of all the information you entered to connect the cluster to Ocean. You can review and modify information if necessary. Click Connect to connect the cluster to Ocean. Ocean will then add the cluster to the list of Ocean clusters and start optimization and management of the cluster on spot instances. You can now migrate your workloads to the cluster.

## What’s Next?

- [Migrate your Workloads](ocean/tutorials/migrate-workload) to Ocean.
- Learn more about importing multiple workload types in the same cluster by using [Virtual Node Groups](ocean/features/launch-specifications).
