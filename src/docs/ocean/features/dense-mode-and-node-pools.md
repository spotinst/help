<meta name=“robots” content=“noindex”>

#  Dense Mode and Node Pools

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

Ocean switches to dense mode when one of these conditions is met:

* The number of active node pools in the Virtual Node Group reaches saturation (dynamically determined and based on an algorithm): When this occurs, Ocean scales its node pools in dense mode without affecting node pools from other Virtual Node Groups.

* The Azure AKS version is not supported: Ocean switches to dense mode when the cluster cannot create new node pools and can only scale existing ones because Azure no longer supports the AKS version used by the cluster. 

In dense mode, Ocean only uses existing node pools for scaling operations and does not create new ones.

During normal operation conditions, other services recycle the node pools to align them with the cluster settings, such as specific SKUs, VM replacements, spot availability, etc. However, those processes will not work without creating new node pools.

>**Note**: logs for this feature are in the Elastilogs (console Logs tab). 

