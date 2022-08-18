<meta name="robots" content="noindex">

# Stateful Instances

The Elastigroup Stateful feature utilizes Spot Instances while providing persistence for your data, network and other configuration during instance replacements such as instance tags.
Spot Instances are transient and can disappear at any moment. While this is not an issue for stateless applications as they are designed to easily scale horizontally, it brings a great challenge to stateful applications.

Elastigroup's Stateful feature is designed to support any fault-tolerant application, such as database clusters and stream-processing. If you have a stateful application or an application that is designed to withstand node failure such as a database cluster, you may have decided in the past that Spot instances were not the best use case for you. With Elastigroup's Stateful feature you can maintain your data and configurations while taking advantage of Spot Instance cost savings.

## Common Use Cases

Every fault-tolerant application that requires data persistency can benefit from the Stateful feature.

- Single Non-prod Server Database: In non-production environments databases can typically tolerate a 'maintenance window' once in a while. This is a perfect use case for Elastigroup's Stateful feature.
- Cassandra: If the Cassandra node is replaced Elastigroup clones the instance and brings it back. The Cassandra cluster will behave as if the instance was down for some time. Bringing up a clone of the previous instance ensures that cluster IOPs are not wasted on bringing a new instance up.
- Development instances: Non-production instances can be run on Spot Instances with occasional downtime. Instances that are interrupted are brought back automatically within a few minutes.
- Elastic.co: Elasticsearch node recovery will take a fraction of the time required to provision a brand new instance. From the standpoint of the Elasticsearch cluster the instance was only down for a period of time (depending on the size of the data volumes attached). No changes are necessary for the cluster to provision this as long as it has enough instances for quorum.
- Kafka: Kafka's architecture is designed based on several components and each component has its unique role. Elastigroup's Stateful feature supports Brokers and ZooKeeper clusters, as well as the consumers, which Elastigroup can run seamlessly on Spot Instances.
- MongoDB: When running a MongoDB cluster, it's important to preserve the data, when the data is missing a `rebuild` process is initiated and the data is resynced in its whole. As part of the stateful feature, Elastigroup allows retaining the data volumes of the machine, Any EBS volume that is attached to the instance will be continuously snapshotted while the machine is running and will be used as the block device mapping configuration upon replacement.

## Stateful Persistency Options

Elastigroup's Stateful feature provides a combination of snapshots, volumes and ENIs to ensure data persistency.

- [Persist root volume](elastigroup/features/stateful-instance/persist-root-volume): Selecting to persist the root volume ensures that Operating System and root volume configurations are maintained during instance replacements.
- [Persist data volumes](elastigroup/features/stateful-instance/persist-data-volumes): Data devices are maintained using one of the following methods:
  - Reattach Volumes: The same EBS volumes are detached from the original instance and reattached to the new instance.
  - Snapshot Backups: During the launch of a new instance, new EBS volumes are created and attached to it.
- [Persist private IP](elastigroup/features/stateful-instance/persist-network): New instances are provisioned with the same private IP using the same Elastic Network Interface.
  - Private IP Pool – Specify a pool of private IPs to be used by the Stateful instances.

## Importing a Stateful Instance

Elastigroup provides the ability to import an existing stateful instance, with the original root and data volumes. Importing stateful instances is also available using the [API](https://docs.spot.io/api/#operation/importStatefulInstance). Learn how to [import an existing stateful instance](elastigroup/features/stateful-instance/import-a-stateful-instance).
