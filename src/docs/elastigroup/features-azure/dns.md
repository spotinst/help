# DNS Integration 

Elastigroup has the capability to register your IPs with one or multiple Azure DNS services. When your Elastigroup is launched, it handles the IP registration process. When you detach the Virtual Machine from the Elastigroup, the IPs will be deregistered from the Azure DNS. 

## Public DNS – A Record Sets 

Today, Elastigroup only supports Public DNS with A record sets.  

![dns-1](https://github.com/spotinst/help/assets/106514736/9d3d7d78-a576-41d4-acdf-ffd4da96e207)
  
Elastigroup registers the public IP of the VMs during both the launch and termination phases. 

![dns-2](https://github.com/spotinst/help/assets/106514736/e9544b40-6fff-418e-8da7-6f2f19c7b4d7)

In the following example, the group sig-12345, is integrated with an Azure DNS Test.com. 

When launching a new VM, Elastigroup will define the VM as configured. 

![dns-3](https://github.com/spotinst/help/assets/106514736/e94a620a-b0f2-456e-8e5b-12eb3a3ad159)

In the example above, Elastigroup launched the VM vm-12345 upon scale up and provisioned the public IP 158.158.158.158. After that, Elastigroup will write this public IP to the RecordSet. 

![dns-4](https://github.com/spotinst/help/assets/106514736/6eb429e0-7885-4a5c-9a90-78f118e8af20)

After detaching the VM, the Elastigroup will deregister the public IP from the Record Sets. 

![dns-5](https://github.com/spotinst/help/assets/106514736/405691f3-f18e-4667-8764-303b036ac114)

## Cross Account DNS Registration 

When you insert the spotinstAccountId field in the dnsZone, Elastigroup registers the VMs launched on one Elastigroup in another Spot Account under the same Organization but in a different Azure Subscription. 

## Limitations 

Due to Azure's limitation of 20 records in an A record set, Elastigroup restricts the maximum capacity to 10 or fewer VMs. These limitations enable the Elastigroup to register all VMs to the record set, providing replacements and deployments while avoiding overloading the A record set. 

 
