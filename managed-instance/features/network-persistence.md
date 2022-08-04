# Network Persistence

Stateful Node Network Persistence works by maintaining the EC2 node's Elastic Network Interface (ENI), allowing the persistence of both public and private IPs associated with the node.

## Private IP Persistence

Private IP Persistence maintains the same private IP address for the node during Spot Node replacements. To Enable Private IP Persistence:

1. If you are using Spot and are in another location in the site, such as Elastigroup, Ocean or Eco, click the three bars in the upper left corner.

<img src="/connect-your-cloud-provider/_media/connect-additional-account-002.png" />

2. In the left menu, click Elastigroup.
3. In the same left menu, click Stateful Nodes.
4. Choose a node from the list.
5. Click Actions on the top right.
6. Choose Edit Configuration.
7. Click Persistent Resources tab.
8. Under the Network section, mark `Persist Private IP`.
9. Optionally, specify a particular private IP to be used by the Stateful Node, otherwise a random IP is chosen from the Subnet.
10. The Private IP is retained in every node replacement.

<img src="/managed-instance/_media/network-persistence-01.png" />

## Public IP Persistence

Public IP persistence maintains the nodes Elastic IP. To enable Elastic IP persistence:

1. If you are using Spot and are in another location in the site, such as Elastigroup, Ocean or Eco, click the three bars in the upper left corner as in the first step above.
2. In the left menu, click Elastigroup.
3. In the same left menu, click Stateful Nodes.
4. Choose a node from the list.
5. Click Actions on the top right.
6. Choose Edit Configuration.
7. Click Configuration tab.
8. Under the Configuration tab's Advanced section, make sure the `Public IP Assignment` setting is configured to assign a public IP (can also be set to `According to Subnet Default` if subnet is configured to assign a public IP).
9. Under the Persistent Resources tab's Network section, select a specific Elastic IP to associate with the node.
10. A Stateful Node launched with the associated Elastic IP will then persist that IP during recycles and replacements.

<img src="/managed-instance/_media/network-persistence-02.png" />

## Backend Actions

When the Stateful Node is configured to persist the Public or Private IP address, the following actions are performed in the backend:

- An Elastic Network Interface (ENI) is created the first time the node is Resumed and is associated with the newly created node.
- The ENI is kept throughout the entire SMI lifecycle, including while the node is Paused. This is designed to make sure that the IP addresses remain available when the SMI is Resumed.

> **Tip**: The persisted ENI is required to maintain the stateful node. Do not delete it directly from AWS.

## Example Use Cases

- A cluster that communicates internally based on private IPs.
- Customers who manage their workloads based on IP addresses.
- Migrating existing services without having to change the configurations.
- Load-balanced nodes that register based on private IP.
- NoSQL (Cassandra / Scylla / Mongo) databases that require a fixed private IP.
