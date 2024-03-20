Ocean AWS ECS Cluster Right Sizing

To help you improve the efficiency and performance of your cloud environments, Ocean’s rightsizing capabilities provide recommendations that target over-provisioning and underutilization.

Containers are deployed to ECS instances (VMs) created for the cluster. ECS manages them together with tasks that are part of the task definition.

Before you attempt to fine-tune your cluster resources according to Ocean recommendations, make sure that you have the following:

-   A Spot account.
-   An AWS account.
-   [Metric Server](https://github.com/kubernetes-incubator/metrics-server#deployment) installed in your ECS cluster.
-   [Ocean cluster](https://docs.spot.io/ocean/getting-started/eks/create-a-new-cluster) managing your ECS worker nodes.

How it Works

AWS CloudWatch provides monitoring and management for AWS cloud resources and applications running on AWS. CloudWatch includes logs, metrics, alarms, and events. CloudWatch integrates with ECS for monitoring CPU and memory utilization, network, and disk metrics.

In the case of ECS Ocean clusters, right sizing is achieved by utilizing CloudWatch metrics. CloudWatch collects data over a four-day period to provide accurate insights into CPU and memory utilization, network metrics, and disk metrics. This data can then be used to optimize resource allocation and ensure efficient utilization of ECS Ocean clusters.

Ocean queries the CloudWatch metrics for service utilization every 15 minutes. For each service, the output is a single data point representing the average CPU and memory utilization at that specific point in time. This single data point is calculated by dividing the total CPU and memory metrics of the service by the number of tasks running within the service.

This process allows you to obtain a single data point for CPU and a single data point for memory every 15 minutes, providing insights into the average utilization of CPU and memory for the tasks within each service at that moment in time. This information can be valuable for monitoring and optimizing resource allocation in ECS Ocean clusters.

For enabling CloudWatch metrics in AWS ECS tasks or services using the EC2 launch type, note the following:

-   Refer to the AWS documentation to identify the specific version of the container agent needed for AWS ECS container instances to support CloudWatch metrics.
-   To enable CloudWatch metrics for ECS container instances, the IAM role assigned to the container instances must have the ecs:StartTelemetrySession permission. This permission allows the container instances to start a telemetry session and send metrics data to CloudWatch.

Resource Recommendations

Ocean provides resource recommendations to assist in adjusting deployment requests based on actual CPU and memory consumption.

Resource resize recommendations are triggered when the requested resources deviate by 15% or more from the average metric recorded during the last two weeks. If the requested resources are either 15% above or 15% below the average metric, Ocean suggests resizing the resources to align them more closely with the observed consumption patterns.

These recommendations can help optimize resource allocation and ensure that the requested resources align with the actual CPU and memory consumption, leading to improved efficiency and cost-effectiveness in managing your deployments.

To view right sizing for a cluster:

1.  In the left main menu, click **Ocean**, and click **Cloud Clusters**.
2.  Select a cluster from the list of clusters.
3.  Click the *Right Sizing* tab.

The Right Sizing tab displays a dashboard divided into the following panels:

-   Right Sizing Cluster Resources panel: Displays two widgets with graphical representations of your vCPU and memory resources usage for the selected period.
-   Top Resizing Recommendations panel: Displays your right sizing recommendations per service.

Note: If the Right Sizing tab does not display any data:

-   Make sure that your metrics server is installed and functioning correctly.
-   The initial four-day data collection period may not have elapsed.

Right Sizing Cluster Resources Panel

![A screenshot of a computer Description automatically generated](media/0abb2a1338621cfb41c58d9046b118f3.png)

The Right Sizing Cluster Resources panel contains two widgets:

-   vCPU usage: Displays graphs for requested and recommended vCPU usage, based on data for the selected period.
-   Memory usage: Displays graphs for requested and recommended memory usage, based on data for the selected period.

You can select data to display for either 7 days, 30 days, or 90 days, by clicking the tab selector on the right of the screen.

Top Resizing Recommendations

![](media/af99773e577d94ed5fb1f4310221a786.png)  
The Top Resizing Recommendations panel shows recommendations per service.

For each service, you can view:

-   Task count for the service.
-   Current Resources:
-   % usage of vCPU.
-   Memory usage in MiB units.
-   Recommended Resources
-   % usage of vCPU.
-   Memory in MiB units.
-   Up or down arrow indicating a recommended increase or decrease in resources.

Right Sizing Notifications

The Right Sizing tab may display one of several notification messages, determined by the status of the Metrics Server reports and the Right Sizing service. The messages indicate one of the following:

-   The metric server task is not yet installed on your cluster and must be installed.
-   The metric server is installed, but the system has not received any reports.
-   The last report from the Metrics Server is more than three hours old.
-   The metrics server is installed, and data is being collected by the Right Sizing service. The progress bar reflects the amount of data left to collect before suggestions can be displayed.
-   Data collection works as intended. There are no suggestions to make, or all previous suggestions have been applied or dismissed.
-   The Metrics Server is installed, but the system is still collecting data.

Related Topics

[link for feature topic]

[Link for Kubernetes topic]

[Link for Right Sizing recommendations via the API]
