#  Dense Mode and Node Pools

Cloud service provider relevance: <font color="#FC01CC">AKS</font>  

##  AKS Node Pools

In AKS, nodes with the same configuration are grouped into node pools containing the underlying VMs that run your applications.

![node-pools-list](https://github.com/spotinst/help/assets/159915991/d48abfb2-b129-4581-bdc9-3d867ffb39fa)


In Ocean, each Virtual Node Group (VNG) manages its own set of node pools, so each Virtual Node Group has multiple node pools but not vice versa.

![cluster-manage-node-pools-with-logo](https://github.com/spotinst/help/assets/159915991/814858ce-bf5f-4391-8a8c-8d4f266501ef)

AKS is responsible for launching the VMs with the given configuration and registering them with the cluster.
Ocean uses the node pool data to get information about a VM.

##  Dense Scaling Mode

For Ocean with AKS, new nodes are scaled up using AKS’s node pools in accordance with the native AKS method for launching nodes.

Due to the limited number of node pools in AKS clusters, Ocean considers Market Density and scales from existing node pools. 

In normal operation, Ocean creates new node pools to extend the number of markets. 

During normal operation conditions, other services recycle the node pools to align them with the cluster settings, such as specific SKUs, VM replacements, spot availability, etc. However, those processes will not work without the ability to create new node pools.

Ocean switches to dense mode when one of these conditions is met:

* The number of active node pools in the Virtual Node Group reaches saturation (dynamically determined and based on an algorithm): When this occurs, Ocean scales its node pools in dense mode without affecting node pools from other Virtual Node Groups.

* The Azure AKS version is not supported: Ocean switches to dense mode when the cluster cannot create new node pools (Azure AKS Limitation) and can only scale existing ones because Azure no longer supports the AKS version used by the cluster.

In dense mode, Ocean only uses existing node pools for scaling operations and does not create new ones.

## View Node Pools in the Console

To access the Node pools tab:
* Click **Ocean > Cloud Clusters** on the left main menu.
* Select a cluster from the list of clusters.
* Click the **Node Pools** tab.

<details style="background:#f2f2f2; padding:6px; margin:10px 0px 0px 0px">
   <summary markdown="span" style="color:#7632FE; font-weight:600">Click to view image</summary>

   <div style="padding-left:16px">

   <img width="1200" src="https://github.com/user-attachments/assets/78c534a7-8581-4cbb-a410-1a8be3b75dab" />

</div>

</details>

The node pools list contains these columns:

* Node Pool: Click on the link to open the node pool details, attributes, and list of nodes (in the Nodes tab).
  * You can sort this column by either name or [status](https://docs.spot.io/ocean/features/dense-mode-and-node-pools?id=node-pool-status).
* Virtual Node Group: Click on the link to open the configuration for the virtual node group.
* Availability Zone: Availability zone for the node pool.
* VM Size: Machine type.
* Life Cycle: Regular or spot.
* Node Count: Number of nodes in the node pool.
* OS: For example, Linux.
* OS Disk: Ephemeral or managed.
* OS SKU: For example, Ubuntu.
* Image: Image name.
* K8s version: Kubernetes version number.

### Node Pool Status

* ![icon-successful-20](https://github.com/user-attachments/assets/699bf863-e329-4260-965d-3119809a0755) Running successfully.
* ![icon-spinner](https://github.com/user-attachments/assets/eec9cbca-90d5-43cc-bef6-801ac4caa746) Spinner (node pool being processed).
* ![icon-lock](https://github.com/user-attachments/assets/4d48eece-0127-4c82-b108-5a5e5530a34f) Locked. When a node pool is locked in Azure, modifications, scaling, or deletions by Ocean are restricted to ensure stability and prevent unintended changes. The locking mechanism helps maintain operational integrity during critical operations.
* ![icon-warmedup](https://github.com/user-attachments/assets/6ade61d6-3bca-44c3-b644-21c5597ae12f) Warmed-up: Node pool that has been pre-provisioned and is ready to manage workloads:
  * Pre-provisioning: Nodes in a warmed-up pool are created in advance, which reduces the time needed to scale up when traffic increases. This helps ensure that applications can respond quickly to sudden spikes in demand.
  * The nodes are ready, meaning they are fully initialized and can accept pods without the delay associated with starting new nodes from scratch.
  * Use case: This is particularly useful for applications with predictable traffic patterns, improving performance and reliability.
*  ![icon-unmanaged1](https://github.com/user-attachments/assets/ec73f5a1-0f69-49ca-87e8-6ecd450da37c)  Unmanaged Node Pool.

  









