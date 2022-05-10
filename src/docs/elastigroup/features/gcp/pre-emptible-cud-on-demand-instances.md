# GCP Pricing Models

This article provides a brief overview of the most common pricing models on GCP. All the major cloud providers use the same pricing models, just with different terms. Elastigroup utilizes these pricing models to ensure that your computing cluster is always cost-optimized.

## On-Demand

In the On-Demand pricing model, users pay only for the instances they run. This is the standard pricing model for all cloud providers and the base price for all discounted models.

## Preemptible VM Instances

GCP provide their spare compute capacity, known as preemptible Instances, at a heavily reduced price. However, GCE might terminate (preempt) these instances if it requires access to those resources for other tasks

Preemptible VMs offer the same machine types and options as regular compute instances and last for up to 24 hours. pricing can be up to 80% less than On-Demand pricing.

## Spot Virtual Machines

Spot Virtual Machines (VMs) are highly affordable compute instances suitable for batch jobs and fault-tolerant workloads. Spot VMs offer the same machine types, options, and performance as regular compute instances. If your applications are fault tolerant and can withstand possible instance preemptions, then Spot instances can reduce your Compute Engine costs by up to 91%.

Unlike Preemptible VMs that can be terminated by GCP for up to 24 hours, Spot VMs do not have this restriction. Spot VMs are currently supported via the [Spot API](https://docs.spot.io/api/#tag/Elastigroup-GCP). Learn more in the [Google documentation about Spot VMs](https://cloud.google.com/compute/docs/instances/spot).

## Committed Use Discounts (CUD)

GCE offers a discount of 37-55% in exchange for a long-term commitment. The exact discount depends on the length of commitment (1 or 3 years), the instance type and region.

## What's Next?

- [Launch your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-gcp).
- Learn more about [Elastigroups](elastigroup/getting-started/elastigroup-for-gcp).
