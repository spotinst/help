# Import an AKS Cluster for Regions Without Availability Zones

Several regions in Azure do not support Availability Zones, so you can only create resources at a regional level. This topic shows how to define your AKS cluster configuration at the regional level so you can safely run your workloads (for any PVC or storage type) in Ocean as follows.

To specify global regions for a workload:

1. click **Ocean > Cloud Clusters** in the left main menu.

2. Select a cluster from the list of clusters.

3. In the Virtual Node Groups (VNG) tab, select the specific Virtual Node Group where you want to define global regions for a workload.

4. Click **None** in the list in the Availability Zones area.

![ocean-vng-regions](https://github.com/user-attachments/assets/672f04bf-3b58-46aa-8a51-d8e91f124fa3)

