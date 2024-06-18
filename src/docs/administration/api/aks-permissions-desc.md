
#   AKS Permissions

This topic describes:

* AKS infrastructure permissions.
* Azure RBAC Enabled Cluster, Kubernetes Permissions.

##   AKS Infrastructure Permissions

When creating a cluster, AKS generates or modifies the resources it needs (like VMs and NICs) to create and run the cluster on behalf of the user. This identity is distinct from the cluster's identity permission, which is created during cluster creation.

###  Identity Creating and Operating the Cluster Permissions

The identity that creates and operates the cluster needs these permissions:

*  Required to read disk encryption set ID
	* Microsoft.Compute/diskEncryptionSets/read

*  Required for updating proximity placement groups
    * Microsoft.Compute/proximityPlacementGroups/write	

*  Required to configure application gateways and join the subnet
   * Microsoft.Network/applicationGateways/read 
   * Microsoft.Network/applicationGateways/write 
   * Microsoft.Network/virtualNetworks/subnets/join/action	


*  Required to configure the Network Security Group for the subnet when using a custom VNET
    * Microsoft.Network/virtualNetworks/subnets/join/action	

*  Required to configure the outbound public IPs on the Standard Load Balancer
   * Microsoft.Network/publicIPAddresses/join/action 
   * Microsoft.Network/publicIPPrefixes/join/action	

*  Required to create and update Log Analytics workspaces and Azure monitoring for containers
   * Microsoft.OperationalInsights/workspaces/sharedkeys/read 
   * Microsoft.OperationalInsights/workspaces/read 
   * Microsoft.OperationsManagement/solutions/write 
   * Microsoft.OperationsManagement/solutions/read 
   * Microsoft.ManagedIdentity/userAssignedIdentities/assign/action	

*  Required to configure the IP-based Load Balancer Backend Pools
   * Microsoft.Network/virtualNetworks/joinLoadBalancer/action	


###  AKS Cluster Identity Permissions

The AKS cluster identity, which is created and associated with the AKS cluster, needs these permissions: 

*  Required for creating users and operating the cluster
   * Microsoft.ContainerService/managedClusters/* 	

*  Required to configure the load balancer for a LoadBalancer service
   * Microsoft.Network/loadBalancers/delete 
   * Microsoft.Network/loadBalancers/read 
   * Microsoft.Network/loadBalancers/write	

*  Required to find and configure public IPs for a LoadBalancer service
   * Microsoft.Network/publicIPAddresses/delete 
   * Microsoft.Network/publicIPAddresses/read 
   * Microsoft.Network/publicIPAddresses/write
	

*  Required for configuring public IPs for a LoadBalancer service
   * Microsoft.Network/publicIPAddresses/join/action	

*  Required to create or delete security rules for a LoadBalancer service
   * Microsoft.Network/networkSecurityGroups/read 
   * Microsoft.Network/networkSecurityGroups/write	

* Required to configure AzureDisks
  * Microsoft.Compute/disks/delete
  * Microsoft.Compute/disks/read
  * Microsoft.Compute/disks/write
  * Microsoft.Compute/locations/DiskOperations/read	

* Required to configure storage accounts for AzureFile or AzureDisk
  * Microsoft.Storage/storageAccounts/delete 
  * Microsoft.Storage/storageAccounts/listKeys/action 
  * Microsoft.Storage/storageAccounts/read 
  * Microsoft.Storage/storageAccounts/write 


*  Required to configure route tables and routes for nodes
   * Microsoft.Network/routeTables/read 
   * Microsoft.Network/routeTables/routes/delete 
   * Microsoft.Network/routeTables/routes/read 
   * Microsoft.Network/routeTables/routes/write 
   * Microsoft.Network/routeTables/write	

*  Required to find information for virtual machines in a VMAS, such as zones, fault domain, size, and data disks
   * Microsoft.Compute/virtualMachines/read	

*  Required to attach AzureDisks to a virtual machine in a VMAS
   * Microsoft.Compute/virtualMachines/write	

*  Required to find information for virtual machines in a virtual machine scale set, such as zones, fault domain, size, and data disks and operate them
   * Microsoft.Compute/virtualMachineScaleSets/*
	
*  Required to add a virtual machine in a VMAS to a load balancer backend address pool
   * Microsoft.Network/networkInterfaces/write	

*  Required to add a virtual machine scale set to a load balancer backend address pools and scale out nodes in a virtual machine scale set
   * Microsoft.Compute/virtualMachineScaleSets/write	

* Required to delete a virtual machine scale set to a load balancer backend address pools and scale down nodes in a virtual machine scale set
   * Microsoft.Compute/virtualMachineScaleSets/delete	

*  Required to attach AzureDisks and add a virtual machine from a virtual machine scale set to the load balancer
   * Microsoft.Compute/virtualMachineScaleSets/virtualmachines/write	

*  Required to search internal IPs and load balancer backend address pools for virtual machines in a VMAS
   * Microsoft.Network/networkInterfaces/read	

*  Required to search internal IPs and load balancer backend address pools for a virtual machine in a virtual machine scale set
   * Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/read	

*  Required to find public IPs for a virtual machine in a virtual machine scale set.
   * Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses/read	

*  Required to verify if a subnet exists for the internal load balancer in another resource group
   * Microsoft.Network/virtualNetworks/read 
   * Microsoft.Network/virtualNetworks/subnets/read	

*  Required to configure snapshots for AzureDisk
   * Microsoft.Compute/snapshots/delete 
   * Microsoft.Compute/snapshots/read 
   * Microsoft.Compute/snapshots/write	

*  Required to find virtual machine sizes for finding AzureDisk volume limits
   * Microsoft.Compute/locations/vmSizes/read 
   * Microsoft.Compute/locations/operations/read	


###  Additional Cluster Identity Permissions

When creating a cluster with specific attributes, you will need these additional permissions for the cluster identity. Since these permissions are not automatically assigned, you must add them to the cluster identity after creation.

*  Required if using a network security group in another resource group. Required to configure security rules for a LoadBalancer service
   * Microsoft.Network/networkSecurityGroups/write 
   * Microsoft.Network/networkSecurityGroups/read	

*  Required if using a subnet in another resource group such as a custom VNET
   * Microsoft.Network/virtualNetworks/subnets/read 
   * Microsoft.Network/virtualNetworks/subnets/join/action	

*  Required if using a subnet associated with a route table in another resource group, such as a custom VNET with a custom route table. Required to verify if a subnet already exists for the subnet in the other resource group
   * Microsoft.Network/routeTables/routes/read 
   * Microsoft.Network/routeTables/routes/write	

*  Required if using an internal load balancer in another resource group and to verify if a subnet exists for the resource group's internal load balancer.
   * Microsoft.Network/virtualNetworks/subnets/read	

*   Required if using a private DNS zone in another resource group, such as a custom privateDNSZone
   * Microsoft.Network/privatednszones/*	


##  Azure RBAC Enabled Cluster, Kubernetes Permissions

### Azure Kubernetes Service Contributor Role

The identity creating and operating the cluster needs these permissions:

* Get a managed cluster
   * Microsoft.ContainerService/managedClusters/read	

*  Creates a new managed cluster or updates an existing one
   * Microsoft.ContainerService/managedClusters/write

*  Create and manage a deployment
   * Microsoft.Resources/deployments/*	




