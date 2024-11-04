<meta name="robots" content="noindex">

# Manage Virtual Node Groups (GKE)

Virtual Node Groups (VNGs) provide a single layer of abstraction that enables you to manage different types of workloads on the same cluster.
This topic describes how to create, view, edit, and delete virtual node groups in Ocean. See also [Default Virtual Node Group](https://docs.spot.io/ocean/features/vngs/?id=default-virtual-node-group).

>**IMPORTANT**: Before starting, ensure you have an up-and-running Ocean cluster.

## Access the Virtual Node Group Tab

1. Click **Ocean > Cloud Clusters** in the left main menu.
2. Select a cluster from the list of clusters.
3. Click the **Virtual Node Groups** tab to display the virtual node groups list.

Screenshot

The virtual nodes group list lets you track live data per virtual node group and contains the following information:

* ID: The identification code of the virtual node group.
* Name: The user-defined name of the virtual node group. (If a virtual node group were defined without a name, it would appear as Unnamed).
* Resource Allocation: Percent of defined CPU, Memory, and GPU currently used by the virtual node group.
* Running Pods: Number of pods used by the virtual node group.
* Node Count: Number of nodes used by the virtual node group.
* Max Nodes: Maximum number of nodes defined for the virtual node group.

## Create/Edit a Virtual Node Group

To create/edit a Virtual Node Group:

1. In the Virtual Node Groups tab, click **Create VNG** above the list on the right of the screen (or to edit an existing virtual node group, click the link on the virtual node group's name in the list).
2. If you are creating a virtual node group, select one of these options.
   * Configure Manually: All virtual node group fields will be taken from the virtual node group Template.
   * Import configurations from Node Pools: Values are copied to the Ocean configuration from the cloud service provider node pools entity. Later, there will be no active connection between these two entities. Ocean will provision new instance types instead of a managed Kubernetes service of node group entities.
  
3. Click **Next**.

4. Review all the virtual node group parameters (listed below) and update if necessary before saving.

>**Note**:
>- Parameters left blank use values from the default virtual node group.
>- To restore attributes to default (template) virtual node group values, click the **Restore to vng template values** for the field or list.

Screenshot


### General Parameters

* Name: The name you assign to the new Virtual Node Group.
* Availability Zones.

### Node Pool Properties

* Root Volume Size  (GiB)
* Root Volume Type
* Image
* Secure Boot
* Integrity monitoring
* Respective GKE Node Pool

### Node Selection Parameters

When the nodes' labels and taints are set, Ocean uses them to select the right virtual node group for a pending pod.

* Node Labels: Key/Value pairs defined on the Kubernetes nodes.
* Node [Taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/): Triplets of Key, Value, and Effect defined on the Kubernetes nodes.

## Configure Instance Types

This section describes selecting instance types and sizes in your cluster per virtual node group (custom or template) according to your application needs.

1. In the virtual node groups tab, scroll down to the Instance Types panel and select one of the options:

  * Automatic: Let Ocean Autoscaler select your instance types and sizes according to your applications' needs. In this case, click **Save** to complete the procedure. 
  * Manual Selection: You can manually define a list of instance types from which Ocean can scale. This option includes several filters (in the left pane) to select instance types with customized sizes.

Screenshot

2. If you selected Automatic, click **Save** to complete the procedure.
3. If you manually define your instance types, view the currently selected size, vCPU, Memory (GiB), and GPU units for each type in the list.

    * The instance types shown in the default virtual node group are only those supported in the cluster's region.
    * In other virtual node groups, Ocean automatically grays out instance types not selected in the default virtual node group and those not meeting AMI architecture requirements for the specific virtual node group. Hover over the instance type to view the reason.
    * Click a down arrow to see the available instance options. Check/uncheck options as required.

4. The Advanced instance types size filtering controls to the left of the instance types selection list let you filter the following attributes:

    * Upper and lower limits for No. Of vCPUs (up to 256).
    * Upper and lower limits for the Memory (up to 1024 GiB).
    * Upper and lower limits for the No. Of GPUs (up to 8).
    * Exclude Series: You can exclude any series by clicking Exclude in the instance type selection list row for that series (or by typing the series in the Exclude Series field. The series then appears in the Exclude Series filter in the filtering controls.
    * Include Series: The Include Series field allows you to include instance types. For example, you can include the series and instance type types to select a GPU type.

5. Click Apply to filter the instance type Selection list. All your filters are applied to the instance type list. A color-coded bar appears above the list to provide a rating for the applied filter.
6. Repeat the previous steps until you are satisfied with the results.
7. Save the changes for the virtual node group.


