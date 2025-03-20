# Network Persistence

Stateful Node Network Persistence works by maintaining the EC2 node's Elastic Network Interface (ENI), allowing the persistence of both public and private IPs associated with the node.

## Private IP Persistence

Private IP Persistence maintains the same private IP address for the node during Spot Node replacements. To Enable Private IP Persistence:

1. If the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the stateful node.
2. Click **Actions** > **Edit Configuration**.
3. On the Persistent Resources tab, go to **Network** and select `Persist Private IP`.
4. Optionally, specify a particular private IP to be used by the Stateful Node, otherwise a random IP is chosen from the Subnet.
5. The Private IP is retained in every node replacement.


## Public IP Persistence

Public IP persistence maintains the nodes Elastic IP. To enable elastic IP persistence:

1. If the Spot console, go to **Elastigroup** > **Stateful Nodes** and select the stateful node.
2. Click **Actions** > **Edit Configuration**.
3. On the Configuration tab, go to **Advanced** and make sure `Public IP Assignment` is configured to assign a public IP (can also be set to `According to Subnet Default` if subnet is configured to assign a public IP).
4. On the Persistent Resources tab, go to **Network** and select a specific Elastic IP to associate with the node.
5. A atateful node launched with the associated Elastic IP will then persist that IP during recycles and replacements.

## Backend Actions

When the stateful node is configured to persist the public or private IP address, the following actions are performed in the backend:

- An Elastic Network Interface (ENI) is created the first time the node is Resumed and is associated with the newly created node.
- The ENI is kept throughout the entire SMI lifecycle, including while the node is Paused. This is designed to make sure that the IP addresses remain available when the SMI is Resumed.

> **Tip**: The persisted ENI is required to maintain the stateful node. Do not delete it directly from AWS.

## Example Use Cases

- A cluster that communicates internally based on private IPs.
- Customers who manage their workloads based on IP addresses.
- Migrating existing services without having to change the configurations.
- Load-balanced nodes that register based on private IP.
- NoSQL (Cassandra/Scylla/Mongo) databases that require a fixed private IP.
