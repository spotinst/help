<meta name="robots" content="noindex">

# Stateful Instance

The concept of data integrity and consistency is crucial when managing workloads. This aspect may be trivial when running with on-demand instances, but not when working with EC2 spot instances, which are conceptually ephemeral and can be revoked at any given moment. Spot takes this into consideration and enables you to leverage Elastigroup while handling data concerns easily and with confidence.

The Elastigroup Stateful feature utilizes spot Instances while providing persistence for your data, network, and other configuration during instance replacements.

Stateful is designed to support any fault-tolerant application, such as database clusters and stream-processing. With Elastigroup's Stateful feature, you can maintain your data and configurations while taking advantage of spot instance cost savings.

## Common Use Cases

Every fault-tolerant application that requires data persistency can benefit from the Stateful feature.

- Single Non-prod Server Database: In non-production environments databases can typically tolerate a maintenance window once in a while. This is a perfect use case for Elastigroup's Stateful feature.
- Cassandra: If the Cassandra node is replaced, Elastigroup clones the instance and brings it back. The Cassandra cluster will behave as if the instance was down for some time. Bringing up a clone of the previous instance ensures that cluster IOPs are not wasted on bringing a new instance up.
- Development instances: Non-production instances can be run on spot instances with occasional downtime. Interrupted instances are brought back automatically within a few minutes.
- Elastic.co: Elasticsearch node recovery will take a fraction of the time required to provision a brand new instance. From the standpoint of the Elasticsearch cluster, the instance was only down for a period of time (depending on the size of the data volumes attached). No changes are necessary for the cluster to provision this as long as it has enough instances for quorum.
- Kafka: Kafka architecture is based on several components, and each component has its unique role. Elastigroup's Stateful feature supports Brokers and ZooKeeper clusters, as well as the consumers, which Elastigroup can run seamlessly on spot instances.
- MongoDB: When running a MongoDB cluster, it is important to preserve the data. When data is missing, a rebuild process is initiated and the data is resynced in its whole. As part of the stateful feature, Elastigroup allows retaining the data volumes of the machine. Any EBS volume attached to the instance will be continuously snapshotted while the machine is running and will be used as the block device mapping configuration upon replacement.

## How it Works

The [flow diagram](elastigroup/features/stateful-instance/stateful-elastigroup-flow) describes on a high level how Spot manages the persistence of stateful instances.

## Stateful Persistence Options

Elastigroup's Stateful feature provides a combination of snapshots, volumes, and ENIs to ensure data persistence.

- [Persist root volume](elastigroup/features/stateful-instance/persist-root-volume): Choosing to persist the root volume ensures that operating system and root volume configurations are maintained during instance replacements.
- [Persist data volumes](elastigroup/features/stateful-instance/persist-data-volumes): Data devices are maintained using one of the following methods:
  - Reattach Volumes: The same EBS volumes are detached from the original instance and reattached to the new instance.
  - Snapshot Backups: During the launch of a new instance, new EBS volumes are created and attached to it.
- [Persist private IP](elastigroup/features/stateful-instance/persist-network): New instances are provisioned with the same private IP using the same Elastic Network Interface.
  - Private IP Pool – Specify a pool of private IPs to be used by the stateful instances.

## What’s Next?

Elastigroup provides the ability to import an existing stateful instance with the original root and data volumes.

- Learn how to [import an existing stateful instance](elastigroup/features/stateful-instance/import-a-stateful-instance).
- Import stateful instances using the [API](https://docs.spot.io/api/#operation/importStatefulInstance).
