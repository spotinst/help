# Import an AKS Cluster for Regions Without Availability Zones

Several regions in Azure do not support Availability Zones, so you can only create resources at a regional level. This topic shows how to define your AKS cluster configuration at the regional level so you can safely run your workloads (for any PVC or storage type) in Ocean as follows. There is no need to define a specific region because it is already set at the regional level.

When creating an AKS cluster with Availability Zones using an Azure Resource Manager template:

* If you explicitly define a null value in a template, for example, `availabilityZones: null,` the template considers the property non-existent, so you cannot deploy the cluster in an Availability Zone.

* You cannot deploy the cluster in an Availability Zone if you don't include the `availabilityZones:` property in the template.

* You cannot update settings for Availability Zones on an existing cluster, as the behavior is different when you update an AKS cluster with Azure Resource Manager templates. If you explicitly set a null value in your template for Availability Zones and update the cluster, it doesn't update the cluster for Availability Zones. However, if you don't include the Availability Zones property with syntax such as `availabilityZones: [],` the deployment attempts to turn off Availability Zones on the existing AKS cluster and fails.

To specify global regions for a workload:

1. click **Ocean > Cloud Clusters** in the left main menu.

2. Select a cluster from the list of clusters.

3. In the Virtual Node Groups (VNG) tab, select the specific Virtual Node Group where you want to define global regions for a workload.

4. Click **None** in the list in the Availability Zones area.

![ocean-vng-regions](https://github.com/user-attachments/assets/672f04bf-3b58-46aa-8a51-d8e91f124fa3)

