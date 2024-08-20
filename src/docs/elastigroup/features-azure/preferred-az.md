# Preferred Availability Zones 

The Preferred Availability Zones feature in Elastigroup enables you to specify a preferred availability zone (AZ) for launching Spot virtual machines (VMs). If no VMs are available in the preferred AZ, Elastigroup will launch a VM from another configured AZ. 
 
The Preferred Availability Zones feature offers the following benefits: 

* **Reduced Network Costs**: Minimizing the frequency of zone changes and data transfers between zones, enables you to lower your network costs associated with data transfer. Elastigroup prioritizes launching VMs in the preferred AZ, reducing the need for inter-zone communication. 

* **Improved Application Performance**: Confining all your computing to a minimum geographic area, specifically one AZ where all your workloads run, you can enhance the performance of your applications. This reduces latency and improves the overall responsiveness of your applications. 

## Set the Preferred AZ Parameter 

To set the preferred AZ parameter for your Elastigroup, you can use the Elastigroup API. Complete the following steps: 

1. Make an API call to update the Elastigroup configuration. 
2. Include the preferred AZ parameter in the API request payload. 
3. Run the following command:  

```
"compute": { 
       "zones":  
      [ 
      "1" 
      ], 
  "preferredZone": "1", 
``` 

For detailed instructions on using the Elastigroup API to set the preferred AZ parameter, refer to the [Elastigroup API documentation](https://docs.spot.io/api/#tag/Elastigroup-Azure-Spot-VMs).
