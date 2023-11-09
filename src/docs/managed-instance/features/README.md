# Stateful Node Features

Stateful Node is tailored to the single node use case and is the ideal way to optimize cost by leveraging cloud excess capacity while mitigating the risks of running on spot nodes. 

Stateful Node provides recovery and flexibility by enabling customers to leverage Spot algorithms and expansive statistical database. This ensures workloads are launched in the best possible Spot market for pricing and availability while gaining granular control with detailed dashboards and monitoring tools. 

Stateful Node provides quick access to lossless state maintenance on Spot, with root, data volume, and network persistence. This is ideal for use cases such as monolithic applications, dev/test machines, or database workloads. 

Stateful Node also supports scheduling actions and provides continuous backup options to enable cross-AZ and cross-Region resilience and recovery. 

## Volume Persistency Types 

There are two volume persistency types of the stateful resource retention rates:  

### Root Volume Persistency 

* While the instance is running, a snapshot is taken for the root volume every 5 minutes, and the latest 3 snapshots are kept (incremental backup). 
* When the stateful instance is paused, Spot creates an image using the latest root volume snapshot which was taken after the instance termination. 
Elastigroup only keeps the latest snapshot for each volume.  
* When the stateful instance is deallocated, the data (Images, Volumes, and Snapshots) are kept for 4 days by default. (It can be configured via internal config on an hourly basis). 

### Data Volume Persistency 

Elastigroup provides 2 different methods for data volume persistency: 
* **Reattach Volumes (recommended for large data volumes)**: The same EBS volume is detached from the original instance and reattached to the newly launched instance. If the new instance is launched in a different AZ, we create a new volume from the latest snapshot and attach it to the new instance (as volumes cannot be migrated between AZs). Volumes can be created based on the AMI’s Block Device Mapping on the first resume of the Stateful instance or can be attached through the AWS console. Spot maintains the same volumes as long as the instance is launched in the same Availability Zone. 
* **Snapshot Backups (On-Launch)**: Periodic snapshots of the data volume are taken while the instance is running. For each data volume, 3 snapshots are kept. Upon Spot instance replacement, a new EBS volume is created from the latest snapshot and is attached to the new instance by updating the AMI’s Block Device Mapping configuration.  

## Stateful Resources Retention Rate 

* Reattach + One AZ- The data volume is preserved, attached, and detached in every Spot replacement. 
* Reattach + Multi AZ- A Snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup). 
* Snapshot backups (On-Launch)- A snapshot is taken for each data volume every 5 minutes and the latest 3 Snapshots are kept (incremental backup). 

### Pause a Stateful Instance 
Only the latest Snapshot for each volume is kept after the instance is paused. 

### Resume a Stateful Instance 

* Snapshot backups: New volumes are created from the latest snapshots while the instance launches. 
* Reattach + The instance is launched in the same AZ as the previous instance: The existing volumes are being attached to the new instance. 
* Reattach + The instance is launched in a different AZ from the previous instance: New volumes are created in the same AZ as the new instance and are attached. 

Once a stateful instance is deallocated, the stateful persisted resources (Images, Volumes, and Snapshots) are kept for 4 days by default. If you want our – If you want the persisted stateful resources to delete quicker and even on an hourly basis, you can reach out to our support team support@spot.io. 
 
Please keep in mind AWS does not charge based on the number of snapshots as [EBS Snapshots](https://aws.amazon.com/ebs/pricing/) are stored incrementally, which means you are billed only for the changed data blocks stored. The main reason for the periodic snapshots is to make the snapshot process quicker and not wait too long to complete the snapshot creation process for any data changes in the volumes that are persisted. 
In case of large Data volumes, you can use Reattach and single AZ configuration to avoid any data volume snapshots from being created. 

## What's Next?

This section describes Stateful Node features in detail. To learn about Stateful Node, choose a topic in the sidebar on the left.
