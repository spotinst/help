# GCP Load Balancers: Backend Services

The GCP Load Balancer is a software defined globally distributed load balancing service.

It enables GCP users to distribute applications across the world and scale compute up and down with very little configuration and cost.

<img src="/elastigroup/_media/gcp-loadbalancers-01.png" width="620" height="349" />

## Global Backend Service

Global Backends (instance groups) that may be connected to this kind of backend service can be spread across multiple different regions.

Each backend is a resource to which a GCP load balancer distributes traffic. User should set 1 or more instance group per service.

## Regional Backend Service

Regional Backends (instance groups/target pools) that may be connected to this kind of backend service can be only from the region.

For regional backend service, we utilize Scheme configuration to identify type of regional backend service:

- External: An external backend service receives traffic from outside of the VPC (also called internet).
- Internal: An internal backend service receives traffic from inside of the VPC (between the customer machines).

## Backend Services with Elastigroup

If you are running an application or service behind GCP's Backend Services (Load Balancers), Elastigroup provides the freedom to run blended cluster from multiple instance types, sizes
({n1-standard,n1-highmem,n1-highcpu,n1-ultramem}{2,4,8,16,etc..})
and purchasing options (Preemtive, On-Demand).

Elastigroup launches the target capacity for Preemptible VMs, to ensure a predictable and stable workload. Its unique value proposition is its ability to add resiliency to workloads that otherwise would not be suitable to run as Preemptible VMs.

<img src="/elastigroup/_media/gcp-loadbalancers-02.png" />

To ensure that the backend service stops sending requests to instances that are marked for termination, Elastigroup will de-register and drain the instances a few minutes before the instance gets a preemption signal from GCE. At the same time, Elastigroup will begin spinning up new instances in parallel to ensure your desired capacity won't be degraded.

## Integrate a Backend Service

1. Enter the Creation Wizard to create a new Elastigroup or select Edit Configuration to integrate a backend service with an existing Elastigroup.
2. In the Compute Tab under Backend Services click on 'Add'.
3. Set your required backend service (LB): Global / Regional.
4. For Global, just choose the backend service from the list. You can add named ports, e.g.:
   - Name: `HTTPS`
   - Ports: `[443, 8443]`
5. For Regional, choose the scheme type and then the backend service from the list.
