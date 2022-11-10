# Advanced Instance Types

Advanced instance types assists in selecting appropriate instance types from the vast selection of over 270 instance types available on AWS EC2. This feature is currently available on the cluster level only for AWS Kubernetes users.

Advanced instance types help you select compatible instance types for your application to run on according to specific criteria. It decreases the manual work to set a large set of instance types easily in an Ocean cluster and using multiple Spot instances helps in reducing costs.

For example, in some use cases, it is the best practice to increase the minimum CPU or RAM of the individual nodes Ocean launches for your containerized workloads.

Increasing the minimum machine size helps limit the node count by not allowing very small nodes that can host only a very low number of containers. Efficiency is achieved by bin packing more containers per node.

Alternatively, depending on the sensitivity of your workloads and the general size of your cluster, you may wish to decrease the maximum CPU or RAM per node to limit the number of containers that will be affected in the event of a node replacement.

The following are the resource criteria Ocean supports:

* MinVcpu: Integer. minimum number of vCPU.
* MaxVcpu:  Integer. maximum number of vCPU
* MinMemoryGiB: Double. minimum size of Memory (GiB).
* MaxMemoryGiB: Double. maximum size of Memory (GiB).
* MinGpu: Integer. Minimum total numbers of GPUs.
* MaxGpu: Integer. Maximum total numbers of GPUs.   
* Includefamilies: Array of strings. The filtered instance types will belong to one of the instance families in this list (asterisk wildcard is also supported).
* Excludefamilies: Array of strings. The filtered instance types must not belong to one of the instance families in this list (asterisk wildcard is also supported).
* ExcludeMetal: Boolean. Default: false. Determine whether metal instance types are allowed or disallowed.  
* IsEnaSupported: Boolean. Ena is supported or not.
* Architectures: Array of strings. Items Enum: “i386”, “x86_64”, “arm64”. The filtered instance types will belong to one of the categories types from this list.
* VirtualizationTypes: Array of strings. Items Enum: “hvm”, “paravirtual”, “arm64”. The filtered instance types will support at least one of the virtualization types from this list.
* Categories: Array of strings. Items Enum: “Accelerated _computing”, “Compute_optimized”, “General_purpose”, “Memory_optimized”, “Storage_optimized”. The filtered instance types will belong to one of the categories types from this list.            
* MinEnis: Integer. Minimum number of network interfaces (ENIs).
* DiskTypes: Array of strings. “NVMe”, “EBS”, “SSD”, “HDD”. The filtered instance types wil have one of the disk types from this list.
* MinNetworkPerformance:  Integer. Minimum Bandwidth in Gib/s of network performance.
* MaxNetworkPerformance: Integer. Maximum Bandwidth in Gib/s of network performance.

Some examples of configuration:

* To find Instance Types with min 4 GiB of memory, min 2 vCPUs, and runs on the x86_64 architecture -
```
{
   "filters": {
      		 "minVcpu" : "2",
		“minMemory”: “4”,
		“architecture”: “x86_64”
   }
}
```
* To find Instance Types that are built in the nitro system, with min 2 vCPUs, and run on the arm based architecture -
```
{
   "filters": {
      		 "minVcpu" : "2",
		“hypervisor”: “nitro”,
		“architecture”: “arm”
   }
}
```

Once the Advanced Instance Types is set, Ocean scales up nodes according to these parameters.

To configure the Advanced Instance Types, add the following via API - instanceTypes.filters

**The whitelist, the blacklist, and the filters can not be used at the same time.**

## What’s Next?

Learn more about
