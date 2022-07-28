# Network Persistence

Managed Instance Network Persistence works by maintaining the EC2 instance's Elastic Network Interface (ENI), allowing the persistence of both public and private IPs associated with the instance.

## Private IP Persistence

Private IP Persistence maintains the same private IP address for the instance during Spot Instance replacements. To Enable Private IP Persistence:

1. Enter the Managed Instance's Configuration Wizard.
2. Under the Persistent Resources tab's Network section, check `Persist Private IP`.
3. Optionally, specify a particular private IP to be used by the Managed Instance, otherwise a random IP is chosen from the Subnet.
4. The Private IP is retained in every instance replacement.

<img src="/managed-instance/_media/network-persistence-01.png" />

## Public IP Persistence

Public IP persistence maintains the instances Elastic IP. To enable Elastic IP persistence:

1. Enter the Managed Instance's Configuration Wizard.
2. Under the Configuration tab's Advanced section, make sure the `Public IP Assignment` setting is configured to assign a public IP (can also be set to `According to Subnet Default` if subnet is configured to assign a public IP).
3. Under the Persistent Resources tab's Network section, select a specific Elastic IP to associate with the instance.
4. A Managed Instance launched with the associated Elastic IP will then persist that IP during recycles and replacements.

<img src="/managed-instance/_media/network-persistence-02.png" />

## Backend Actions

When the Managed Instance is configured to persist the Public or Private IP address the following actions are performed in the backend:

- An Elastic Network Interface (ENI) is created the first time the instance is Resumed and is associated with the newly created instance.
- The ENI is kept throughout the entire SMI lifecycle, including while the instance is Paused. This is designed to make sure that the IP addresses remain available when the SMI is Resumed.

> **Tip**: The persisted ENI is required to maintain the stateful instance. Do not delete it directly from AWS.

## Example Use Cases

- A cluster that communicates internally based on private IPs.
- Customers who manage their workloads based on IP addresses.
- Migrating existing services without having to change the configurations.
- Load-balanced instances that register based on private IP.
- NoSQL (Cassandra / Scylla / Mongo) databases that require a fixed private IP.
