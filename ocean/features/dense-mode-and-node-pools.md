<meta name=“robots” content=“noindex”>

#  Dense Mode and Node Pools

##  AKS Node Pools

In AKS, nodes with the same configuration are grouped into node pools, which contain the underlying VMs that run your applications.

![node-pools-list](https://github.com/spotinst/help/assets/159915991/d48abfb2-b129-4581-bdc9-3d867ffb39fa)


In Ocean, each Virtual Node Group (VNG) manages its own set of node pools, so each Virtual Node Group has multiple node pools but not vice versa.

![cluster-manage-node-pools](https://github.com/spotinst/help/assets/159915991/90fdf59e-9489-4434-a7e0-95deccca4a68)

AKS is responsible for launching the VMs with the given configuration and registering them with the cluster.
Ocean uses the node pool data to get information about a VM.
Managing node pools is challenging when considering scaling up because the maximum number of node pools in an AKS cluster is 100, though the number may be lower in practice.

##  Dense Scaling Mode

For Ocean with AKS 2.0, new nodes are scaled up using AKS’s node pools in accordance with the native AKS method for launching nodes.

Due to the limited number of node pools in AKS clusters, Ocean considers Market Density and scales from existing node pools. 

In normal operation, Ocean creates new node pools to extend the number of markets. 

Ocean switches to dense mode when one of these conditions is met:

* The Virtual Node Group is saturated (dynamically determined and based on an algorithm).

* The Azure AKS version is outside of the supported range.

>**Note**: If the number of active node pools reaches saturation, Ocean scales its node pools in dense mode without affecting node pools from other Virtual Node Groups.

Ocean switches to dense mode when the cluster cannot create new node pools and can only scale existing node pools because Microsoft no longer supports the AKS version used by the cluster. 

In dense mode, Ocean only uses existing node pools for scaling operations and does not create new ones. This can impact savings/VM availability because existing node pools and SKUs might experience price changes from Microsoft—Cloud, Computers, Apps & Gaming.   

During normal operation conditions (options 1+2 in the list above), other services recycle the node pools to keep them aligned with the cluster settings, such as specific SKUs, VM replacements, spot availability, etc. However, those processes will not work without creating new node pools.

>**Note**: logs for this feature are in the Elastilogs. More detailed logs are in the Azure_ocean_core_operations service.

