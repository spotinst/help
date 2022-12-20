# Let Ocean Manage Machine Types

Ocean operation is based on containers, and as such, Ocean is free to utilize all types of cloud infrastructure, distribute optimally, and focus on cutting costs. Therefore, when it comes to machine types, it is usually best practice to let Ocean make the intelligent decisions about which machine family to launch.

In the Machine Types definition of the Compute tab, all of the machine types are already selected by default. Just leave this default setting on so that Ocean can choose from all possibilities. Ocean will then carefully match the node type to the specifications of the scheduled user workloads.

## Opt out of Machine Types

If you have a reason not to use certain machine types, you can deselect those family types. For example, your application may be specifically tuned for newer versions of CPU offered in the later families, and the older models cause performance issues. Deselect those families.

For Ocean in AWS, you can manage your instance types in the Instance Types panel as seen below.

<img src="/ocean/_media/tips-image-types-06.png" />

The relevant section for Ocean in GCP:

<img src="/ocean/_media/tips-image-types-05.png" />

You can use the instanceTypes attribute in the API to specify machine types that are allowed or not allowed in the cluster. The following options are available:

* instanceTypes.blacklist - Specify instance types to avoid in the cluster.
* instanceTypes.whitelist - Specify instance types that are allowed in the cluster.

The following rules apply to these:

* The permit list and the deny list may not be used at the same time.
* If no instance types are defined for both options, then all instance types are available.

## Set Instance Size Ranges

In some use cases, it is good practice to increase the minimum CPU or RAM of the individual nodes Ocean launches for your containerized workloads.

For example, you may want to increase the minimum machine size if you run many DaemonSets (that require a lot of resources) or if you have any DaemonSets that are licensed based on machine count.

Increasing the minimum machine size helps to limit the node count by not allowing very small nodes that can host only a very small number of containers. Efficiency is achieved by bin packing more containers per node.

Alternatively, depending on the sensitivity of your workloads and the general size of your cluster, you may wish to decrease the maximum CPU or RAM per node to limit the number of containers that will be affected in the event of a node replacement.

This can be done in the GCP console as seen below:

<img src="/ocean/_media/tips-image-types-04.png" />

## Select Instance Types with Advanced Filters

This section is relevant for AWS Kubernetes clusters.

By default Ocean launches the best instance type suitable for your workload. However, there are cases where clients would like to restrict the types available for scale in the Ocean cluster or in a specific Virtual Node Group. Since there are hundreds of types, selecting as many instance types as possible that meet the specific criteria you need may be challenging and requires manual work.   

**As best practice it is recommended to configure as many instance types as possible, to let Ocean choose the best market for your workloads**.

### Select Instance Types according to Filters

Instead of picking out specific instances, you can use filters to choose types of instances that Ocean will prefer. For example, you can define filters that would tell Ocean to choose instances according to criteria that fit your needs, such as include/exclude specific families, use different Hypervisor, use specific architecture, etc.

### Example 1: Use Maximum vCPU/RAM

Depending on the sensitivity of your workloads and the general size of your cluster, you may wish to decrease the maximum CPU or RAM per node to limit the number of containers that will be affected in the event of a node replacement.

### Example 2: Use the Nitro Hypervisor

The Nitro system enables AWS to innovate faster, reduce costs, and deliver added benefits like increased security and new instance types.
In some use cases, it is the best practice to use Nitro instance types for your workloads due to the following reasons:

* **More IP Addresses per Instance** - The AWS Nitro System instance types support significantly more IP addresses than non-Nitro System instance types. So if you want to use instance types that more pods can run on you should use the Nitro system instance types which have more IP addresses.

* **Use IPv6** - If you want to use the IPv6 family for your cluster, then you must use AWS Nitro System instance type.

### Supported Filters

The following are the Filters Ocean supports:

* **Min vCPU**: Minimum number of vCPU.
* **Max vCPU**:  Maximum number of vCPU
* **Min Memory GiB**: Minimum size of Memory (GiB).  
* **Max Memory GiB**: Maximum size of Memory (GiB).  
* **Min GPU**: Minimum numbers of GPUs.  
* **Max GPU**: Maximum numbers of GPUs.    
* **Include Families**: The filtered instance types belong to one of the instance families in this list. For example, c* includes all the families start with C - c4, c5, c6g, etc.
* **Exclude Families**: The filtered instance types must not belong to one of the instance families in this list.
* **Exclude Metal**: The default is false. This determines whether metal instance types are allowed or disallowed.   
* **Is Ena Supported**: Ena is supported or not.  
* **Architectures**: “i386”, “x86_64”, “arm64”. The filtered instance types belongs to one of the category types from this list.
* **Virtualization Types**: “hvm”, “paravirtual”, “arm64”. The filtered instance types will support at least one of the virtualization types from this list.  
* **Categories**: “Accelerated _computing”, “Compute_optimized”, “General_purpose”, “Memory_optimized”, “Storage_optimized”. The filtered instance types belongs to one of the categories types from this list.             
* **Min Enis**: Minimum number of network interfaces (ENIs).  
* **Disk Types**: “NVMe”, “EBS”, “SSD”, “HDD”. The filtered instance types has one of the disk types from this list.  
* **Min Network Performance**: Minimum Bandwidth in Gib/s of network performance.  
* **Max Network Performance**: Maximum Bandwidth in Gib/s of network performance.
* **Hypervisor**: "nitro", "xen". The filtered instance types will have a hypervisor type from this list.  
* **Root Device Type**: "Instance Store", "ebs". The filtered instance types will have a root device types from this list.  

Once the Filters are set, Ocean scales up nodes according to these parameters.

In case you would like to validate the filters before configuring them in your cluster, you can use the [Simulation of Filters API](https://docs.spot.io/api/#operation/oceanAwsInstanceTypeFiltersSimulation) call. This API call returns the list of instance types according to the filters.

**The whitelist, the blacklist, and the filters objects cannot be used at the same time. If you want to use one of them, all the others should be null**.

## What’s Next?
Learn more about [Virtual Node Groups](ocean/features/vngs/).
