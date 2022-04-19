# Stateful Nodes

When running stateful applications in the cloud, it is more likely you’ll find them using pay-as-you-go (i.e., on-demand) VMs, which will stay up and running throughout the application’s lifetime. On the other hand, using pay-as-you-go VMs typically cost a lot more than spot VMs. As these applications grow, so too does the cloud bill, and finding ways to optimize costs is becoming a strategic goal. With the potential to save up to 90% on cloud compute, it is hard to overlook the benefits of Spot VMs for these workloads.

With Spot by NetApp, you don’t have to choose between resiliency, performance, or cost. You can easily run stateful workloads using spot capacity. With Stateful Nodes, you can have cost-efficient, reliable infrastructure that also keeps storage and IPs persistent at all times. You can utilize Azure’s spot VM technology to save up to 90% of your infrastructure costs while running stateful applications without any concerns.

## Common Use Cases

Managing your stateful workload using a single instance solution is a very popular approach for many compute workloads such as:
- Personal developer machines
- Single DB instances
- Machine learning environments
- Applications that require stateful (IP and storage) capabilities

## Stateful Persistence Options

The Stateful Node feature provides the ability to persist your OS disk, data disks, and network.

### Persist OS Disk

Choosing to persist the OS disk ensures that your operating system and root volume configurations are maintained during node replacements.

### Persist Data Disk

Data and OS disks are maintained using one of the following methods:
- Re-attach: The same volumes are detached from the original node and reattached to the new node. If the new node is launched in a different availability zone, a new volume is created from the latest snapshot and attached to the new node. (Volumes cannot be migrated between availability zones.)
- Take Snapshot: Periodic snapshots of the data volume are taken while the node is running. Upon node replacement, a new volume is created from the latest snapshot and is attached to the new node.

### Persist Network

New nodes are provisioned with the same private IP using the same Elastic Network Interface.

<img src="/elastigroup/_media/azure-features-stateful-nodes-01.png" />

## What’s Next?
- Learn more about [persisting the OS and data disks](elastigroup/features-azure/stateful-nodes/persist-os-data-disks).
- Try out the [Stateful Node Tutorials](elastigroup/tutorials-azure/use-stateful-nodes/).
