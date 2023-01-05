# Stateful Node for AWS

Run stateful applications on stateful nodes. Stateful Nodes utilize spot nodes while providing persistence for the root volume, data volumes and network interface, in addition to other launch specifications during node replacements.

Spot nodes are transient and can be interrupted at any moment by AWS. While this is not an issue for stateless applications as they are designed to easily scale horizontally, it brings a great challenge to stateful applications.

Spot Stateful Nodes are designed to support any fault-tolerant applications, such as databases and stream-processing servers. If you have a stateful application or an application that is designed to withstand node failure, you may have decided in the past that Spot nodes were not the best use case for you. With Stateful Nodes you can maintain your configurations with zero data loss while taking advantage of the cost savings provided by spot nodes.

## Common Use Cases

Every fault-tolerant application that requires data persistency can benefit from the stateful capabilities offered by Stateful Nodes.

### Single Non-prod Server Database

In non-production environments, databases can typically tolerate a 'maintenance window' once in a while. This is a perfect use case for Stateful Nodes.

### Cassandra

If the Cassandra node is replaced, Stateful Node clones the resources and brings the node back. The Cassandra cluster the node is connected to will behave as if the node was down for some time. Bringing up a clone of the previous node ensures that cluster IOPs are not wasted on bringing a new node up.

### Development Nodes

Non-production nodes can be run on Spot Nodes with occasional downtime. Nodes that are interrupted are brought back automatically within a few minutes.

### Elastic.co

Elasticsearch node recovery will take a fraction of the time required to provision a brand new node. From the standpoint of the Elasticsearch cluster the node was only down for a period of time (depending on the size of the data volumes attached). No changes are necessary for the cluster to provision this as long as it has enough nodes for quorum.

### Kafka

Kafka's architecture is designed based on several components and each component has its unique role. Stateful Node supports Brokers and ZooKeeper cluster nodes, as well as the consumers, which can run seamlessly on Spot Nodes.

### MongoDB

When running a MongoDB cluster, it's important to preserve the data, when the data is missing a `rebuild` process is initiated and the data is resynced in its whole. Stateful Nodes allow the retaining of the data volumes of the machine. Any EBS volume that is attached to the node will be continuously snapshotted while the machine is running, and the final snapshot will be used as part of the block device mapping configuration upon replacement.

### ML/AI

Running a cluster of fast.ai ImageNet processing nodes on Spot Nodes would normally incur heavy speed penalties due to the loading times associated with stopping and starting compute jobs. Stateful Nodes enable EBS Data volume persistence in a manner which keeps the original Data volume ready for use and reattaches it to the replacement node. This circumvents the `warm up time` that would otherwise be required, and enables fast launch times even for heavy applications.

### Big Data

Running Redis cluster secondaries on the Stateful Node platform reduces the cluster's cloud compute costs by leveraging AWS Spot Nodes. Due to the fact that Redis cluster nodes are stateful applications that require data continuity, it is possible to deploy the agent servers by leveraging Stateful Nodes' stateful features.

## Stateful Persistence Options

Stateful Nodes utilize a combination of snapshots, volumes and ENIs to ensure state persistence.

- [Persist root volume](managed-instance/features/root-volume-persistence): Selecting to persist the root volume ensures that Operating System and root volume configurations are maintained during node replacements.
- [Persist data volumes](managed-instance/features/data-volume-persistence): Data devices are maintained using one of the following methods:
  - Reattach Volumes: The same EBS volumes are detached from the original node and reattached to the new node.
  - Snapshot Backups: During the launch of a new node, new EBS volumes are created and attached to it as part of the launch specifications.
- [Persist Network Interface](managed-instance/features/network-persistence): New nodes are provisioned with the same private IP using the same Elastic Network Interface.
  - Private IP Pool – Specify a pool of private IPs to be used by the Stateful nodes.

## What's Next?

Learn more about [root volume persistence](managed-instance/features/root-volume-persistence).
