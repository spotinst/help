# Stateful Managed Instances

Run Stateful Applications On Managed Instances. Managed Instances utilize Spot Instances while providing persistence for the root volume, data volumes and network interface, in addition to other launch specifications during instance replacements.

Spot Instances are transient and can be interrupted at any moment by AWS. While this is not an issue for stateless applications as they are designed to easily scale horizontally, it brings a great challenge to stateful applications.

Spot Managed Instances are designed to support any fault-tolerant applications, such as databases and stream-processing servers. If you have a stateful application or an application that is designed to withstand node failure, you may have decided in the past that Spot instances were not the best use case for you. With Managed Instances you can maintain your configurations with 0 data loss while taking advantage of the cost savings provided by Spot Instances.

## Common Use Cases

Every fault-tolerant application that requires data persistency can benefit from the Stateful capabilities offered by Managed Instances.

- Single Non-prod Server Database: In non-production environments, databases can typically tolerate a ‘maintenance window’ once in a while. This is a perfect use case for Managed Instances.
- Cassandra: If the Cassandra node is replaced, Managed Instance clones the resources and brings the node back. The Cassandra cluster the node is connected to will behave as if the instance was down for some time. Bringing up a clone of the previous instance ensures that cluster IOPs are not wasted on bringing a new instance up.
- Development instances: Non-production instances can be run on Spot Instances with occasional downtime. Instances that are interrupted are brought back automatically within a few minutes.
- Elastic.co: Elasticsearch node recovery will take a fraction of the time required to provision a brand new instance. From the standpoint of the Elasticsearch cluster the instance was only down for a period of time (depending on the size of the data volumes attached). No changes are necessary for the cluster to provision this as long as it has enough instances for quorum.
- Kafka: Kafka’s architecture is designed based on several components and each component has its unique role. Managed Instance supports Brokers and ZooKeeper cluster nodes, as well as the consumers, which can run be seamlessly run on Spot Instances.
- MongoDB: When running a MongoDB cluster, it’s important to preserve the data, when the data is missing a “rebuild” process is initiated and the data is resynced in its whole. Managed Instances allow the retaining of the data volumes of the machine. Any EBS volume that is attached to the instance will be continuously snapshotted while the machine is running, and the final snapshot will be used as part of the block device mapping configuration upon replacement.
- ML/AI: Running a cluster of fast.ai ImageNet processing nodes on Spot Instances would normally incur heavy speed penalties due to the loading times associated with stopping and starting compute jobs. Managed Instances enable EBS Data volume persistence in a manner which keeps the original Data volume ready for use and reattaches it to the replacement instance. This circumvents the “warm up time” that would otherwise be required, and enables fast launch times even for heavy applications.
- Big Data: Running Redis cluster slaves on the Managed Instance platform reduces the cluster’s cloud compute costs by leveraging AWS Spot Instances. Due to the fact that Redis cluster nodes are stateful applications that require data continuity, it is possible to deploy the slave servers by leveraging Managed Instances’ stateful features.

## Stateful Persistence Options

Managed Instances utilize a combination of snapshots, volumes and ENIs to ensure state persistence.

- [Persist root volume](managed-instance/features/root-volume-persistence.md): Selecting to persist the root volume ensures that Operating System and root volume configurations are maintained during instance replacements.
- [Persist data volumes](managed-instance/features/data-volume-persistence.md): Data devices are maintained using one of the following methods:
  - Reattach Volumes: The same EBS volumes are detached from the original instance and reattached to the new instance.
  - Snapshot Backups: During the launch of a new instance, new EBS volumes are created and attached to it as part of the launch specifications.
- [Persist Network Interface](managed-instance/features/network-persistence.md): New instances are provisioned with the same private IP using the same Elastic Network Interface.
  - Private IP Pool – Specify a pool of private IPs to be used by the Stateful instances.
