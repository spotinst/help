# Elastigroup Networking 

Elastigroup enables you to define a configuration of rationally similar workloads and enables the scaling of Virtual Machines (VMs) in the Azure cloud vendor. Defining the network configuration enables Elastigroup to provision the VMs in the appropriate Azure Virtual Network and configure the individual network interfaces that are initialized to meet the requirements of your workloads.  

## Virtual Network 

The Networking field mandates the definition of the resource group of the relevant virtual network and the name of the virtual network. Afterwards, it is required to define a list of at least one network interface. 

![azure-networking-1](https://github.com/spotinst/help/assets/106514736/5d0945f2-251c-4ed6-849b-f3c340477097)

The Virtual Network must be a valid virtual network in Azure that is registered under the same region as the Elastigroup. 
 
Each network interface defines a subnet it will launch to. A number of network interfaces can reference the same subnet. It is possible to define under each network interface a single Azure Network Security Group. It is also possible to use several Azure Application Security Groups on a single network interface.  

You can have Elastigroup define a Public IP on a network interface and describe the SKU (Standard or Basic) to provision a Public IP. When a public IP SKU is selected, it must be upheld between all the network interfaces of the Elastigroup. Note: The Public IP’s SKU can affect the applicable load balancers that the Elastigroup can utilize. 

## Static IP Pools 

With Elastigroup, you can view how your application scales up and down with our Auto-scaler. During the provisioning of your VMs, Elastigroup can effectively employ pools of various IP addresses, and upon scaling down, it will release or detatch the addresses.  

### Private IP Pool 

You can define a pool of private IPs for Elastigroup to provision IPs under the defined subnet.  

![azure-networking-2](https://github.com/spotinst/help/assets/106514736/8c2426a1-c6d1-4146-845a-45bbfa2fb0f9)
 
In the example above, there is a Virtual Network in Azure: TestVirtualNetwork, that has a subnet, TestSubnet3, where 10.0.1.1, 10.0.1.2, and 10.0.1.3 are already taken and provisioned (marked as red). If an Elastigroup defines a pool that includes [10.0.1.0, 10.0.1.1, 10.0.1.2, 10.0.1.3], upon the next scale-up in the Elastigroup, the VM launched will provision a static private IP on the address 10.0.1.0.   

Upon the next scaling operation, the pool of static private IPs will be exhausted and the Elastigroup will need an IP address outside of the pool. The Elastigroup will provision a dynamic private IP inside the subnet TestSubnet3. Upon scaling down operations, Elastigroup will deprovision the network interfaces with these IP addresses to be reused in the future. 

### Public IP Pool 

You can define a pool of static public IPs. Similarly to the static private IP pool feature, it is possible to define a list of static public IPs in Azure for Elastigroup to leverage instead of a dynamic public IP. 

Elastigroup validates that the public IPs are a valid configuration for the pool. On a regional Elastigroup every static public IP is a potential public IP for the pool. On zonal Elastigroups, the public IPs from the pools are utilized if Spot chooses a market with a public IP in that zone. Elastigroup does not guarantee that it will launch the VMs on the same zone as the IPs configured in the pool.  

If the pool is empty or exhausted in the zone or region, then Elastigroup will provision a dynamic public IP address. 

![azure-networking-3](https://github.com/spotinst/help/assets/106514736/41c84f14-4eea-49d8-8d03-276da93a9697)

If both vm-12345 and vm-12346 belong to the same Elastigroup, and the blue public IPs are part of the static public IP pool, the Elastigroup scaled a VM in Zone 1. The network interface associated with vm-12345 was assigned a blue public IP from the pool. Additionally, when a VM was launched in Zone 3, a new dynamic public IP was allocated. 

After both VMs are scaled down, Spot will maintain the public IPs in the pool but terminate the dynamic public IP not included in it. 

![azure-networking-4](https://github.com/spotinst/help/assets/106514736/df8bb8df-6681-412b-8827-61d6eb65ce18)
