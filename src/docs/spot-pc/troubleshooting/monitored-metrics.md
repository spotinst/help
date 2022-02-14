# Spot PC: Monitored Metrics
Spot PC uses Cloud Insights and other technologies to monitor and alert on specific metrics that we've found can impact the end user experience. This article contains recommendations derived from our experience and research along with data from Microsoft's documentations. All environments are unique and the following information should be taken in context with your own experience and knowledge of the specific environment.

## Spot PC Alerts

### Virtual Machine Context
The following metrics are collected from the VMs in Spot PC, both session hosts and and Business Servers running alongside Spot PC.

#### CPU Consumption %: 
Indicates the average % consumption for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Warning: 75%-90% consumption for 5 consecutive minutes
- Critical: 90%+ consumption for 5 consecutive minutes

High value indicates that users or applications are consuming a large amount of CPU resources.  

Note: This data is displayed in various parts of the Spot PC console.  On the Machines dashboard view (where all machines are summarized in a table) both "CPU % Trend" (average) and "CPU % Peak" (highest value in range) values are displayed.  On the Machine Performance view (where the details for a single machine are displayed) the time-series chart displays the average value.

**Resolving high CPU Consumption %:** First, use the time interval function to change the duration of the data displayed. This can give you a sense of when the issue originally began and if there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming CPU resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.

#### Memory Consumption %:  
Indicates the average % consumption for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Warning: 75%-90% consumption for 5 consecutive minutes
- Critical: 90%+ consumption for 5 consecutive minutes

High value indicates that users or applications are consuming a large amount of Memory (RAM) resources.  

Note: This data is displayed in various parts of the Spot PC console.  On the Machines dashboard view (where all machines are summarized in a table) both "RAM % Trend" (average) and "RAM % Peak" (highest value in range) values are displayed.  On the Machine Performance view (where the details for a single machine are displayed) the time-series chart displays the average value.

**Resolving high Memory consumption %:** First, use the time interval function to change the duration of the data displayed. This can give you a sense of when the issue originally began and if there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.

#### Processor Queue Length 
Indicates the average number of actions waiting to be executed by the CPU for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Warning: Greater than 6 for 5 consecutive minutes
- Critical: Greater than 10 for 5 consecutive minutes

A high value indicates that a number of actions are lined up for execution by the CPU. End users may report hanging or frozen applications.

**Resolving high Processor Queue Length:** First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider adding additional CPU to relieve this bottleneck – even if CPU consumption % isn't high – because per Microsoft guidance, there is only one queue for all CPUs. Generally speaking, a value under 10 (or a value under 2 * CPU QTY, so 16 for an 8 CPU VM) is fine for a short period of time.

#### Page File Used % 
Indicates the average % consumption for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Warning: 50%-75% consumption for 5 consecutive minutes
- Critical: 75%+ consumption for 5 consecutive minutes

A high value indicates that one or more applications are consuming too much RAM. Memory management is likely offloading RAM consumption in the form of paging, which is manifesting here.

**Resolving high Page File Used %:** First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.

#### Round Trip Time 
Indicates the average connection quality of the user’s session (ms between their physical location and virtual desktop) for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Warning: 150+ milliseconds for 5 consecutive minutes
- Critical: 200+ milliseconds for 5 consecutive minutes

A high value indicates reduced connection quality between the user’s physical location and the location of their virtual desktop. This is an ongoing measurement, making it more relevant than the quality of a user’s login time since that is a point-in-time metric. This may manifest in “it feels slow” complaints or user sessions spontaneously disconnecting.  

**Resolving high Round Trip Time:** First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider adding additional Sites to resolve geographic-based challenges users are facing. Root cause resolutions for these issues are ultimately up to the ISPs responsible for the networks and the hops in between those networks. Tools like Traceroute or Pingplotter can help identify where the challenges lie in the connection at a point in time.    

#### User Input Delay 
Indicates the average amount of time it takes a user’s action to take effect and be shown to them in their virtual desktop consumption for the period indicated. This is often reflected in how quickly the user sees the text they type appear in an email or in a Word document. The default time interval displayed is the last 15 minutes, with multiple data-points per minute. 

Alerting thresholds:
- Warning: 150+ milliseconds for 5 consecutive minutes
- Critical: 200+ milliseconds for 5 consecutive minutes

A high value indicates reduced performance for end users – this may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.

**Resolving high User Input Delay:** First, use the time interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. This is not related to network latency – it is related to machine performance. Next, navigate to the Performance tab to see which specific users and processes are consuming RAM resources. Finally, either communicate with the user/s directly and/or use the Connect to Machine Quick Action to navigate to the machine to troubleshoot further.

#### Frames Skipped – Insufficient Network Resources
Indicates the average number of frames skipped due to a lack of network resources for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute. 

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

A high value indicates that the network (for example, the VNET in Azure) does not have enough throughput to handle the load placed on it, resulting in values being displayed here.

**Resolving high Frames Skipped - Insufficient Network Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the bandwidth available to the network.

#### Frames Skipped – Insufficient Client Resources
Description: Indicates the number of frames skipped due to lack of resources available on the user’s local device for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute. 

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

A high value indicates that the user’s virtual desktop may see a performance impact due to a high CPU and RAM consumption on the user’s local device. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.

**Resolving high Frames Skipped – Insufficient Client Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Next, check what monitoring elements are available on the local device – it could be another monitoring service, Task Manager, etc. - to see what is causing excessive resource consumption on the local device.

If the issue is consistent, then consider a more wholistic approach to performance monitoring on the end user’s device. Troubleshooting and reducing CPU/RAM consumption locally should resolve this session host-level alert for their user session. While this is a worst-case scenario, the user may need a new, upgraded device to connect from. This could be especially true if their device is older, refurbished/heavily modified or both.

#### Frames Skipped – Insufficient Server Resources
Description: Indicates the number of frames skipped due to insufficient server resources for the period indicated. The default time interval displayed is the last 15 minutes, with multiple data-points per minute.

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

A high value indicates that resource consumption on the VM itself is resulting in reduced performance in user sessions. This should be easy to confirm, as CPU/RAM (or both) should indicate high consumption as well. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.  

**Resolving high Frames Skipped – Insufficient Server Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Troubleshooting what is consuming excessive CPU/RAM should reduce the values displayed here. If the issue is consistent, then consider adding additional CPU/RAM to relieve this bottleneck.

#### Storage Usage %: 
Description: Indicates the average % consumed of the available disk space for the period indicated. Default time window of the last 3 hours, this is displayed every minute 

Alerting thresholds:
- Critical: 90+%  for 2 consecutive hours
- Warning: 75+% (but less than 90%) for 2 consecutive hours

High value indicates that data stored on the disk is near the total amount of disk space available. Best practices suggest staying under 90% of the available disk to avoid performance impacts, with more and more impact to performance as you get closer to 100% consumption of the disk space available. Some backup programs can report errors if attempting to back up data where more than 85% of the disk is consumed.

**Resolving high Storage Usage %:** There are two options for resolving scenarios where the Managed Disk storage consumed is nearing the amount of storage provisioned for a Managed Disk. 
Attempt to clean out data that is no longer used/relevant - this represents the zero-cost option. Examples include clearing out cache or temp data, clearing out the recycle bin, removing installers for applications that are no longer needed, etc.  
Increase the size of the Managed Disk – while this represents a larger cost, it leaves room for growth and provides additional storage space/performance.

#### Disk Queue Length: 
Description: Indicates the average number of IO actions waiting for the disk for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

High value indicates a large number of IO requests are being made against the storage system.  

**Resolving high Disk Queue Length consumption:** When disk queue length is a frequent bottleneck, consider increasing the performance tier of your managed disk. If you are already using Premium SSD, you can review the System event log on the system, to see if there are any error indicating problems with the disk or the storage subsystem and potentially open a ticket with Microsoft to resolve anything you find there. 

Alerting thresholds:
- Critical: Greater than 5 for 5 consecutive minutes
- Warning: Greater than 2 (but less than 5) for 5 consecutive minutes

#### OS Disk Reads/second
Description: Indicates the average number of disk read operations for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- As this metric is effectively IOPS, this metric not alerted on – IOPS are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that there is a lot of read activity on the disk.

**Resolving high OS Disk Reads/second consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent and/or maxing out based on what is available at your current tier, then consider upgrading the performance / performance tier of your storage.

#### OS Disk Writes/second
Description: Indicates the average number of disk write operations for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- As this metric is effectively IOPS, this metric not alerted on – IOPS are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that there is a lot of write activity on the disk.

**Resolving high OS Disk Writes/second consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent and/or maxing out based on what is available at your current tier, then consider upgrading the performance / performance tier of your storage.

#### OS Disk Read Bytes/second
Description: Indicates the average number of data read by the disk per second for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- As this metric is effectively IOPS, this metric not alerted on – IOPS are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that there is a lot of read activity on the disk.

**Resolving high OS Disk Reads/second consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Troubleshooting what is consuming excessive CPU/RAM should reduce the values displayed here. If the issue is consistent and/or maxing out based on what is available at your current tier, then consider upgrading the performance / performance tier of your storage.

#### OS Disk Write Bytes/second
Description: Indicates the average number of data written to disk per second for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- As this metric is effectively IOPS, this metric not alerted on – IOPS are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that there is a lot of write activity on the disk.

**Resolving high OS Disk Reads/second consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Troubleshooting what is consuming excessive CPU/RAM should reduce the values displayed here. If the issue is consistent and/or maxing out based on what is available at your current tier, then consider upgrading the performance / performance tier of your storage.

#### GPU Usage %: 
Description: Indicates the average GPU Usage % consumption for the period indicated. For the default time window of the last 3 hours, this is displayed every minute. 

Alerting thresholds:
- Critical: 75+% consumption for 5 consecutive minutes
- Warning: 50+% (but less than 75%) for 5 consecutive minutes

High value indicates that a large amount of graphics processing/rendering has been offloaded from the CPU and onto the GPU.   

Note: if you see both zero GPU Usage % and high CPU consumption on this VM, then odds are the hardware acceleration is disabled for the VM (or that some other GPU enabling GPO is off).  

**Resolving high GPU Usage % consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

#### Frame Buffer Usage: 
Description: Indicates the average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 75+% consumption for 5 consecutive minutes
- Warning: 50+% (but less than 75%) consumption for 5 consecutive minutes

High value indicates that a large number of IO requests are being made against the storage system. This is more common in scenarios/applications with large data sets, such as CAD applications. 

**Resolving high Frame Buffer Usage:** When disk queue length is a frequent bottleneck, consider increasing the performance of your  

#### GPU Memory % 
Description: Indicates the average GPU Memory % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) for 5 consecutive minutes

High value indicates that a large amount of GPU memory available is being accessed by the GPU. This also allows the GPU to communicate with its own memory much faster.

Note: GPU Memory consumption is separate and independent from the VM's Memory consumption, meaning they don't share resources.  

Note: when GPU Memory % is high but GPU Usage % is low it could be an indicator that the GPU is processing data faster than the memory available can get the data to the GPU for processing.  

**Resolving high GPU Memory %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, consider increasing the size of the VM in order to increase the amount of GPU RAM available.

#### Video Decoder % 
Description: NVIDIA GPUs utilize hardware decoding, reducing CPU consumption and reserving it for other purposes. This is independent of graphics performance. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the GPU is offloading a substantial amount of processing actions related to video performance/quality from the CPU. If CPU consumption is high and this value is null, it is likely that hardware acceleration has been disabled for this VM.

**Resolving high Video Decoder %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

#### Video Encoder %:  
Description: NVIDIA GPUs utilize hardware encoding, reducing CPU consumption and reserving it for other purposes. This is independent of graphics performance. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the GPU is offloading a substantial amount of processing actions related to video performance/quality from the CPU. If CPU consumption is high and this value is null, it is likely that hardware acceleration has been disabled for this VM.

**Resolving high Video Encoder %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

#### Session Host Services

##### SpotAgent
Description: SpotAgent facilitates automation actions from Spotmgr1.

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: SpotAgent being offline will not process Spot PC automation from Spotmgr1.

**Resolving SpotAgent alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### SpotAgent
Description: SpotAgent facilitates automation actions on Spotmgr1.

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: SpotAgent being offline will not process Spot PC automation on Spotmgr1.

**Resolving SpotAgent alerts:** Connect to the Spotmgr1 server and open Task Manager, then restart the service  

##### Windows Defender Service:
Description: Windows Defender delivers antivirus and security services for a VM

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: Windows Defender being offline may leave the OS less protected against security threats.

**Resolving Windows Defender alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### FSLogix Service:
Description: the FSLogix service facilitates profile services

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: FSLogix being offline

**Resolving FSLogix alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### Cloud Insights Acquisition Unit:
Description: The Cloud Insights acquisition unit facilitates the collection of data from from a VM.

Impact: Cloud Insights acquisition unit being offline

**Resolving Cloud Insights acquisition unit alerts:** Connect to the session host server and open Task Manager, then restart the service  

Alerting threshold:
- Critical: service not responding for 5+ minutes

##### Spark Gateway/Myrtille
Description: The Spark Gateway/Myrtille service facilitates HTML5 connections from both the UI and for end user logins, if applicable.

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: Spark Gateway/Myrtille being offline would prevent users from generating an HTML5 connection to a server

**Resolving Spark Gateway/Myrtille alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### Remote Desktop Agent (RDAgent):
Description: The Remote Desktop Agent facilitates MFA for connections to the session host server.

Impact: The Remote Desktop Agent service being offline indicates that the session host may be unavailable to user sessions.

**Resolving Remote Desktop Agent alerts:** Connect to the session host server and open Task Manager, then restart the service  

#### Remote Desktop Agent Boot Loader (RDAgentBootLoader):
Description: The RDAgentBootLoader service… 

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: The RDAgentBootLoader service being offline indicates that changes made via the UI will not be reflected in the Local Control Plane

**Resolving RDAgentBootLoader alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### Windows Azure Guest Agent:
Description: The  platform server contains a SQL database that houses platform settings 

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: The Windows Azure Guest Agent service being offline indicates that changes made via the UI will not be reflected in the Local Control Plane

**Resolving Windows Azure Guest Agent alerts:** Connect to the session host server and open Task Manager, then restart the service  

##### Windows Azure Network Agent:
Description: The platform server contains a SQL database that houses platform settings 

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: The Windows Azure Network Agent service being offline indicates that changes made via the UI will not be reflected in the Local Control Plane

**Resolving Windows Azure Network Agent alerts:** Connect to the session host server and open Task Manager, then restart the service  

### Storage Layer Context
The following metrics are collected from the storage service that supports the Spot PC environment.  Typically this service is run on Azure NetApp Files or Azure Files.

#### ANF Volume Capacity:
Description: Displays the amount of storage consumed related to the amount of storage provisioned. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 95+% consumption for 5 consecutive minutes
- Warning: 90+% (but less than 95%) consumption for 5 consecutive minutes

High value indicates that the amount of storage consumed on an ANF volume is nearing the amount of storage provisioned to the ANF volume. Best practices suggest staying under 90% of the available disk to avoid performance impacts, with more and more impact to performance as you get closer to 100% consumption of the provisioned size of the volume.

**Resolving high Capacity:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether this is an increasing trend you have to plan for or a one-time increase in storage consumed. If the amount of storage continues to trend upwards, then consider increasing the size of the volume to accommodate the growth over time vs. a one-time increase.

#### ANF IOPS:
Description: This is a representation of the total amount of operations on the volume.  The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- IOPS are not alerted on – they are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that a high amount of read and write activity against the volume.  

**Resolving high IOPS:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of your ANF capacity pool/volume.

#### ANF Latency:
Description: This is a representation of the read and write latency from the volume in milliseconds. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting Thresholds:
- Critical: 20+ milliseconds for 1 consecutive minutes
- Warning: 10+ (but less than 25) milliseconds for 1 consecutive minutes

High value indicates that the amount of time it takes each individual I/O action to resolve. The higher the latency and the larger the IOPS, the more impact storage performance will have on individual user sessions.  

**Resolving high Latency:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the latency began increasing and whether there is a recurring pattern. If the issue is consistent, then open a ticket from the Azure portal and ask the Microsoft team to investigate.

#### ANF Throughput
Description: This is a representation of the read and write latency from the volume in milliseconds. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting Thresholds:
- Throughput is not alerted on – they are a highly relative data point that is largely used as a reference for other, related metrics

High value indicates that the amount of time it takes each individual I/O action to resolve. The higher the latency and the larger the IOPS, the more impact storage performance will have on individual user sessions.  

**Resolving high Latency:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the latency began increasing and whether there is a recurring pattern. If the issue is consistent, then open a ticket from the Azure portal and ask the Microsoft team to investigate.

### End User Context
The following metrics are collected from various places including the session host VMs, the local control plane and Azure platform services.  These metrics relate to a specific end user and their connection, rather than an entire VM or Azure service.

#### CPU Consumption %: 
Description: Indicates the user’s average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90%+ consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the user and their applications are consuming a large amount of CPU resources.  

**Resolving high CPU Consumption %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and if there is a recurring pattern. Additionally, you can shadow the user session, terminate processes from VDS or connect to the VM to resolve issues as an admin.  

#### Memory Consumption %:  
Description: Indicates the user’s average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90%+ consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the user and their applications are consuming a large amount of Memory (RAM) resources.  

**Resolving high Memory consumption %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Additionally, you can shadow the user session, terminate processes from VDS or connect to the VM to resolve issues as an admin.  

#### Round Trip Time 
Description: Indicates the average connection quality of the user’s session (ms between their physical location and virtual desktop) for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 200+ milliseconds for 5 consecutive minutes
- Warning: 150+ milliseconds for 5 consecutive minutes

High value indicates that there is reduced connection quality between the user’s physical location and the location of their virtual desktop. This is an ongoing measurement, making it more relevant than the quality of a user’s login time since that is a point-in-time metric.

This may manifest in “it feels slow” complaints or at worst, in a user’s session disappearing (technically, entering a disconnected state – the user can log in and resume working without losing their work, but at first it appears as if their desktop is now gone).   

**Resolving high Round Trip Time:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider adding additional Sites to resolve geographic-based challenges users are facing. Root cause resolutions for these issues are ultimately up to the ISPs responsible for the networks and the hops in between those networks. Tools like Traceroute or Pingplotter can help identify where the challenges lie in the connection at a point in time.    

#### User Input Delay 
Description: Indicates the average amount of time it takes a user’s action to take effect and be shown to them in their virtual desktop consumption for the period indicated. This is often reflected in how quickly the user sees the text they type appear in an email or in a Word document. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 200+ milliseconds for 5 consecutive minutes
- Warning: 150+ milliseconds for 5 consecutive minutes

High value indicates that  there is reduced performance for end users – this may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.

**Resolving high User Input Delay:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. This is not related to network latency – it is related to VM performance. If this is consistent, consider increasing the resources available to the VM as a way to relieve this bottleneck.

#### Frames Skipped – Insufficient Network Resources
Description: Indicates the average number of frames skipped due to a lack of network resources for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

High value indicates that the network (for example, the VNET in Azure) does not have enough throughput to handle the load placed on it, resulting in values being displayed here.     

**Resolving high Frames Skipped - Insufficient Network Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the bandwidth available to the network.

#### Frames Skipped – Insufficient Client Resources
Description: Indicates the number of frames skipped due to lack of resources available on the user’s local device for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

High value indicates that the user’s virtual desktop may see a performance impact due to a high CPU and RAM consumption on the user’s local device. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.

**Resolving high Frames Skipped – Insufficient Client Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Next, check what monitoring elements are available on the local device – it could be another monitoring service, Task Manager, etc. - to see what is causing excessive resource consumption on the local device.

If the issue is consistent, then consider a more wholistic approach to performance monitoring on the end user’s device. Troubleshooting and reducing CPU/RAM consumption locally should resolve this session host-level alert for their user session. While this is a worst-case scenario, the user may need a new, upgraded device to connect from. This could be especially true if their device is older, refurbished/heavily modified or both.

#### Frames Skipped – Insufficient Server Resources
Description: Indicates the number of frames skipped due to insufficient server resources for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 10+ frames for 5 consecutive minutes
- Warning: 5+ frames for 5 consecutive minutes

High value indicates that resource consumption on the VM itself is resulting in reduced performance in user sessions. This should be easy to confirm, as CPU/RAM (or both) should indicate high consumption as well. This may result in “it feels slow” complaints or “I can’t work” reports in extreme scenarios.  

**Resolving high Frames Skipped – Insufficient Server Resources:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. Troubleshooting what is consuming excessive CPU/RAM should reduce the values displayed here. If the issue is consistent, then consider adding additional CPU/RAM to relieve this bottleneck.

#### GPU Usage %: 
Description: Indicates the average GPU Usage % consumption for the period indicated. For the default time window of the last 3 hours, this is displayed every minute. 

Alerting thresholds:
- Critical: 75+% consumption for 5 consecutive minutes
- Warning: 50+% (but less than 75%) for 5 consecutive minutes

High value indicates that a large amount of graphics processing/rendering has been offloaded from the CPU and onto the GPU.   

Note: if you see both zero GPU Usage % and high CPU consumption on this VM, then odds are the hardware acceleration is disabled for the VM (or that some other GPU enabling GPO is off).  

**Resolving high GPU Usage % consumption:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

#### Frame Buffer Usage: 
Description: Indicates the average % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 75+% consumption for 5 consecutive minutes
- Warning: 50+% (but less than 75%) consumption for 5 consecutive minutes

High value indicates that a large number of IO requests are being made against the storage system. This is more common in scenarios/applications with large data sets, such as CAD applications. 

**Resolving high Frame Buffer Usage:** When disk queue length is a frequent bottleneck, consider increasing the performance of your  

#### GPU Memory % 
Description: Indicates the average GPU Memory % consumption for the period indicated. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) for 5 consecutive minutes

High value indicates that a large amount of GPU memory available is being accessed by the GPU. This also allows the GPU to communicate with its own memory much faster.

Note: when GPU Memory % is high but GPU Usage % is low it could be an indicator that the GPU is processing data faster than the memory available can get the data to the GPU for processing.  

Note: GPU Memory consumption is separate and independent from the VM's Memory consumption, meaning they don't share resources.  

**Resolving high GPU Memory %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, consider increasing the size of the VM in order to increase the amount of GPU RAM available.

#### Video Decoder % 
Description: NVIDIA GPUs utilize hardware decoding, reducing CPU consumption and reserving it for other purposes. This is independent of graphics performance. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the GPU is offloading a substantial amount of processing actions related to video performance/quality from the CPU. If CPU consumption is high and this value is null, it is likely that hardware acceleration has been disabled for this VM.

**Resolving high Video Decoder %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

#### Video Encoder %:  
Description: NVIDIA GPUs utilize hardware encoding, reducing CPU consumption and reserving it for other purposes. This is independent of graphics performance. The default time interval displayed is the last 3 hours, with data provided for every minute. 

Alerting thresholds:
- Critical: 90+% consumption for 5 consecutive minutes
- Warning: 75+% (but less than 90%) consumption for 5 consecutive minutes

High value indicates that the GPU is offloading a substantial amount of processing actions related to video performance/quality from the CPU. If CPU consumption is high and this value is null, it is likely that hardware acceleration has been disabled for this VM.

**Resolving high Video Encoder %:** First, use the Time Interval function to change how long the data is displayed. This can give you a sense of when the issue originally began and whether there is a recurring pattern. If the issue is consistent, then consider increasing the size of the VM to one with a larger amount of GPU allocated.

### Control Plane Context
The following metrics are collected from the local control plane VM (Spot PC Manager) and pertain to the services required to support the Spot PC environment which are hosted on that VM within the Spot PC Azure tenant.

#### MSSQLServer:
Description: The platform server contains a SQL database that houses platform settings 

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: The SQL service being offline indicates that changes made via the UI will not be reflected in the Local Control Plane

**Resolving MSSQLServer alerts:** Connect to the Local Control Plane server and open Task Manager, then restart the service  

#### SPOC:
Description: This service performs user and application tasks, including all activation/modification activity 

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: The SPOC service being offline would prevent changes made in the UI from going into effect and being applied to users and applications

**Resolving SPOC alerts:** Connect to the Local Control Plane server and open Task Manager, then restart the service  

#### Spark Gateway/Myrtille
Description: The Spark Gateway/Myrtille service facilitates HTML5 connections from both the UI and for end user logins, if applicable.

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: Spark Gateway/Myrtille being offline would prevent users from generating an HTML5 connection to a server

**Resolving Spark Gateway/Myrtille alerts:** Connect to the session host server and open Task Manager, then restart the service  

#### FlexLM License Manager:
Description: This service operates the FlexLM license manager used by Mechdyne TGX

Alerting threshold:
- Critical: service not responding for 5+ minutes

Impact: Interruption of this service will cause the licensing manager to go offline thus effecting the ability of the TGX Sender to obtain/validate licenses

**Resolving FlexLM License Manager alerts:** Connect to the Local Control Plane server and open Task Manager, then restart the service  

## What’s Next?
Get help from [Spot PC Support](spot-pc/troubleshooting/getting-support) for advanced assistance.
