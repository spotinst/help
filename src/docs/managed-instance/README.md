# Managed Instance

Stateful nodes provide a solution for launching and managing a single node instance. On the AWS cloud, for a standard single node workload, an on-demand EC2 node is launched. The node is expected to be highly available, easily manageable, and integrate well with additional services and monitoring tools.

Stateful Nodes provide a way to achieve the same functionality on spot nodes. This provides the benefit of significant cost savings, while the downside of spot nodes, namely spot interruptions, are mitigated through the use of advanced persistence features.

With Stateful Nodes it is possible to maintain state (i.e., root and block device volume data and network interfaces) across varying node types, sizes, and pricing models (spot, RI, on-demand) even across different availability zones.

## What's Next?

[Get started](managed-instance/getting-started/) with a stateful node.
