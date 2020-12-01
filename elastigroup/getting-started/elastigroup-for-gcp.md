# Elastigroup for GCP

Elastigroup for GCP is an IaaS Optimization platform in which the user can provision, manage and scale compute infrastructure to support any Elastic Application or Load Balanced workload.

Elastigroup for GCP seamlessly integrates with various applications and services including GCE, GKE, Google Cloud Load Balancing, Stack Driver and more, while leveraging Preemptible VMs.

Preemptible VMs are highly affordable, short-lived compute instances suitable for batch jobs and fault-tolerant workloads. Preemptible VMs offer the same machine types and options as regular compute instances and last for up to 24 hours. PVMs offer significant savings, but normally, they would not be ideal for production or mission-critical workloads. Elastigroup for GCP changes that.

Based on historical and statistical data, Spot's Elastigroup predicts preemptions ahead of time and automatically migrate instances into different machine Types, Zones or fall back to On-Demand in order to ensure high availability and consistency. Elastigroup will also make sure that the preemption is done gradually to ensure service uptime.

<img src="/elastigroup/_media/gettingstarted-elastigroup-arch-gcp-01.png" width="537" height="310" />

To get started with Spot Elastigroup on GCP, begin by connecting your GCP Project to your Spot Account.

Note that you can take a Demo tour of the console before actually connecting your Account, by selecting Get a Console Walkthrough from the Cloud Provider selection screen.

## What's Next?

- [Connect your GCP project](connect-your-cloud-provider/gcp-project)
- [Create an Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-gcp)
