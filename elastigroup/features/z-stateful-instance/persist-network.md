<meta name="robots" content="noindex">

# Persist Network

Private IP Persistence maintains the same Private IP address for the instances during spot instance replacements. New instances are provisioned with the same private IP using the same elastic network interface.

Elastigroup provides the following options for IP persistence:

- Maintain Private IP: A random IP is chosen for the subnet ID of the Elastigroup. This IP is retained in every instance replacement.
- Private IP Pool: Specify a pool of private IPs to be used by the Stateful Spot Instances (SSI).

## Example Use Cases

- A cluster that communicates internally based on private IPs.
- Customers who manage their workloads based on IP addresses.
- Migrating existing services without having to change the configurations.
- Load-balanced instances that register based on private IP.
- NoSQL databases (e.g., Cassandra, Scylla, Mongo) that require a fixed set of Private IPs.

## Maintain a Private IP

Once the Elastigroup is configured to persist the Private IP address,
Stateful Spot Instances (SSIs) are created according to the group target capacity, each one holding a random IP chosen from the subnet ID of the Elastigroup. An Elastic Network Interface (ENI) is created the first time the SSI is resumed and is associated with the newly created instance. The ENI is kept throughout the entire SSI lifecycle, including in points where the Stateful instance is paused. This is designed to make sure that the IP address remains available when the SSI is resumed after an interruption.

> **Tip**: The ENI is required to maintain the stateful instance. Do not delete it directly from AWS.

## Private IP Pools

A Private IP Pool can be defined for your Stateful Elastigroup in the Stateful Creation Wizard, under the Persistence tab's Network Persistency section. When you select the Maintain private IP option, you may also select specific Private IPs under Private IP Pool:

<img src="/elastigroup/_media/stateful-persistnetwork-01.png" width="490" height="215" />

When assigning several Private IPs, the group creates a Stateful Spot Instance (SSI) in a Paused state for each Private IP. The instances can then be launched by using the [Resume action](elastigroup/features/stateful-instance/stateful-instance-actions). If one of the SSIs in the group is deallocated, a new Paused SSI is created to replace it automatically, in order to maintain the association between the instances and the Private IP Pool. If the requested number of instances exceeds the number of provided IPs, random IPs are taken from the subnet ID to cover the additional instances.

## Remove an IP from the Private IP Pool

When an IP is removed from the pool (or the option is deselected entirely) any SSIs that were created for the IP and never Resumed are Deallocated.

## Persist an Elastic IP

Spot Stateful works by persisting the network interface, so it can be used to persist both a private IP and an Elastic IP associated with the instance.

1. Enter the Stateful Creation Wizard.
2. Under the Persistence tab's Network Persistency section, create an Elastic IP pool by selecting one or more Elastic IPs to associate with the instances launched in the Elastigroup.
3. Instances launched with an associated Elastic IP will then persist that IP during recycles and replacements.

<img src="/elastigroup/_media/stateful-persistnetwork-02.png" />
