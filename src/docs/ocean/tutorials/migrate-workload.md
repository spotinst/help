# Migrate Workload to Ocean

Ocean automates the migration process of manually draining and re-scheduling your Kubernetes pods on new nodes. You can migrate and register your workloads (nodes and pods) into Ocean so they will be managed by Spot.

Cloud service provider relevance: <font color="#FC01CC">AWS Kubernetes</font>  

## Prerequisites

Before you start the procedure in this tutorial, you need the following:
- A Kubernetes cluster running on AWS infrastructure.
- A Kubernetes cluster connected to an Ocean cluster.
- Ocean Controller version 1.0.44 installed in the cluster.
- Deactivated Kubernetes Cluster Autoscaler.
- Dedicated [Virtual Node Groups](ocean/features/vngs/?id=virtual-node-groups) for your workload to enable the Ocean Autoscaler to scale up nodes.  

> **Tip**: If the Kubernetes Autoscaler is active, there will be inconsistency in spinning up new nodes.

After you have successfully completed creating your Ocean cluster, you can start the Workload Migration by using the console or the API.

### Guides
* Migrate the Workload using [the Console](ocean/tutorials/migrate-workload-via-ui).
* Migrate the Workload using [the API](ocean/tutorials/migrate-workload-via-api).


