# Spot PC: Monitored Metrics
Spot PC uses Cloud Insights and other technologies to monitor and alert on specific metrics that we've found can impact the end user experience. This article contains recommendations derived from our experience and research along with data from Microsoft's documentations. All environments are unique and the following information should be taken in context with your own experience and knowledge of the specific environment.

## Spot PC Alerts

### Virtual Machine Context
The following metrics are collected from the VMs in Spot PC, both session hosts and and Business Servers running alongside Spot PC.

#### CPU Consumption %: 
Indicates the average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

- High value Indicates Users or applications are consuming a large amount of CPU resources.  

**Resolving high CPU Consumption %:** First, use the time interval function to change the duration of the data displayed. This can give you a sense of when the issue originally began and if there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming CPU resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.

Alerting thresholds:

Critical: 90%+ consumption for 5 consecutive minutes

Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

#### Memory Consumption %:  
Description: Indicates the average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Memory Consumption % Indicates: Users or applications are consuming a large amount of Memory (RAM) resources.  
Resolving high Memory consumption %: First, use the time interval function to change the duration of the data displayed. This can give you a sense of when the issue originally began and if there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.
Alerting thresholds:
Critical: 90%+ consumption for 5 consecutive minutes
Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

#### Processor Queue Length 
Description: Indicates the average number of actions waiting to be executed by the CPU for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Processor Queue Length Indicates: A number of actions are lined up for execution by the CPU. This will manifest as actions appearing to 'hang' for end users. 
Resolving high Processor Queue Length consumption: First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider adding additional CPU to relieve this bottleneck – even if CPU consumption % isn't high – because per Microsoft guidance, there is only one queue for all CPUs. Generally speaking, a value under 10 (or a value under 2 * CPU QTY, so 16 for an 8 CPU VM) is fine for a short period of time.
Alerting thresholds:
Critical: Greater than 10 for 5 consecutive minutes
Warning: Greater than 6 for 5 consecutive minutes

#### Page File Used % 
Description: Indicates the average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Page File Used % Indicates:  One or more applications are consuming too much RAM. Memory management is likely offloading RAM consumption in the form of paging, which is manifesting here.  
Resolving high Page File Used %: First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.
Alerting thresholds:
Critical: 75+% consumption for 5 consecutive minutes
Warning: 50+% (but less than 75%) for 5 consecutive minutes

#### Round Trip Time 
Description: Indicates the average connection quality of the user’s session (ms between their physical location and virtual desktop) for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Round Trip Time Indicates:  Reduced connection quality between the user’s physical location and the location of their virtual desktop. This is an ongoing measurement, making it more relevant than the quality of a user’s login time since that is a point-in-time metric.

This may manifest in “it feels slow” complaints or at worst, in a user’s session disappearing (technically, entering a disconnected state – the user can log in and resume working without losing their work, but at first it appears as if their desktop is now gone).   
Resolving high Round Trip Time: First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider adding additional Sites to resolve geographic-based challenges users are facing. Root cause resolutions for these issues are ultimately up to the ISPs responsible for the networks and the hops in between those networks. Tools like Traceroute or Pingplotter can help identify where the challenges lie in the connection at a point in time.    
Alerting thresholds:
Critical: 200+ milliseconds for 5 consecutive minutes
Warning: 150+ milliseconds for 5 consecutive minutes

#### User Input Delay 
Description: Indicates the average amount of time it takes a user’s action to take effect and be shown to them in their virtual desktop consumption for the period indicated. This is often reflected in how quickly the user sees the text they type appear in an email or in a Word document. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High User Input Delay Indicates:  Reduced performance for end users – this may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.
Resolving high User Input Delay: First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. This is not related to network latency – it is related to machine performance. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.
Alerting thresholds:
Critical: 200+ milliseconds for 5 consecutive minutes
Warning: 150+ milliseconds for 5 consecutive minutes

#### Frames Skipped – Insufficient Network Resources
Description: Indicates the average number of frames skipped due to a lack of network resources for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Frames Skipped – Insufficient Network Resources Indicates:  The network (for example, the VNET in Azure) does not have enough throughput to handle the load placed on it, resulting in values being displayed here.     
Resolving high Frames Skipped - Insufficient Network Resources: First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the bandwidth available to the network.
Alerting thresholds:
Critical: 10+ frames for 5 consecutive minutes
Warning: 5+ frames for 5 consecutive minutes

#### Frames Skipped – Insufficient Client Resources
Description: Indicates the number of frames skipped due to lack of resources available on the user’s local device for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Frames Skipped – Insufficient Client Resources Indicates: The user’s virtual desktop may see a performance impact due to a high CPU and RAM consumption on the user’s local device. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.
Resolving high Frames Skipped – Insufficient Client Resources: First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Next, check what monitoring elements are available on the local device – it could be another monitoring service, Task Manager, etc. - to see what is causing excessive resource consumption on the local device.

If the issue is consistent, then consider a more wholistic approach to performance monitoring on the end user’s device. Troubleshooting and reducing CPU/RAM consumption locally should resolve this session host-level alert for their user session. While this is a worst-case scenario, the user may need a new, upgraded device to connect from. This could be especially true if their device is older, refurbished/heavily modified or both.
Alerting thresholds:
Critical: 10+ frames for 5 consecutive minutes
Warning: 5+ frames for 5 consecutive minutes

#### Frames Skipped – Insufficient Server Resources
Description: Indicates the number of frames skipped due to insufficient server resources for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 
High Frames Skipped – Insufficient Server Resources Indicates:  Resource consumption on the VM itself is resulting in reduced performance in user sessions. This should be easy to confirm, as CPU/RAM (or both) should indicate high consumption as well. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.  
Resolving high Frames Skipped – Insufficient Server Resources: First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Troubleshooting what is consuming excessive CPU/RAM should reduce the values displayed here. If the issue is consistent, then consider adding additional CPU/RAM to relieve this bottleneck.
Alerting thresholds:
Critical: 10+ frames for 5 consecutive minutes
Warning: 5+ frames for 5 consecutive minutes

### Storage Layer Context
The following metrics are collected from the storage service that supports the Spot PC environment.  Typically this service is run on Azure NetApp Files or Azure Files.

####

### End User Context
The following metrics are collected from various places including the session host VMs, the local control plane and Azure platform services.  These metrics relate to a specific end user and their connection, rather than an entire VM or Azure service.

####

### Spot PC Control Plane Context
The following metrics are collected from the local control plane VM (Spot PC Manager) and pertain to the services required to support the Spot PC environment which are hosted on that VM within the Spot PC Azure tenant.

####




## What’s Next?

Get started [deploying Spot PC](spot-pc/getting-started/onboarding-workflow) by following the Onboarding Workflow.
