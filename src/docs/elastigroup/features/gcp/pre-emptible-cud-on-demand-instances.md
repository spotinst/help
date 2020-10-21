# Preemptible, CUD & On-Demand Instances

This article provides a brief overview of the three most common pricing models on GCP, nevertheless all cloud providers offer the same three pricing models with different terms.

Elastigroup utilizes these pricing models to ensure that your computing cluster is always cost-optimized. To learn more about your cloud provider’s pricing visit their website.

## On-Demand

In the On-Demand pricing model, users pay only for the instances they run. This is the standard pricing model for all cloud providers and the base price for all discounted models.

## Preemptible VM Instances

GCP provide their spare compute capacity, known as preemptible Instances, at a heavily reduced price. However, GCE might terminate (preempt) these instances if it requires access to those resources for other tasks

Preemptible VMs offer the same machine types and options as regular compute instances and last for up to 24 hours. pricing can be up to 80% less than On-Demand pricing.

## Committed Use Discounts (CUD)

GCE offers a discount of 37-55% in exchange for a long-term commitment. The exact discount depends on the length of commitment (1 or 3 years), the instance type and region.

## What’s Next?

- [Launching your first Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-gcp.md).
- Learn more about [Elastigroups](elastigroup/getting-started/elastigroup-for-gcp.md).
