# Elastigroup for Azure

Elastigroup for Azure is an IaaS Optimization platform in which the user can provision, manage and scale compute infrastructure to support any Elastic Application or Load Balanced workload.

Microsoft Azure Low-priority VMs are allocated from Microsoft Azure's excess compute capacity, enabling workloads to run for a reduced cost of up to 85% less.

With Low-Priority VMs, Microsoft effectively lets you borrow unused capacity for a great price. However, this capacity can be reclaimed at a moment's notice due to higher priority allocations. This makes Low-Priority VMs a less-than-ideal candidate for production workloads. Elastigroup for Azure changes that.

Based on historical and statistical data, Spot's Elastigroup predicts preemptions ahead of time and automatically migrate instances into different machine Types, Zones or fall back to regular priority (on-demand VMs) in order to ensure high availability and consistency. Elastigroup will also make sure that the preemption is done gradually to ensure service uptime.

<img src="/elastigroup/_media/gettingstarted-elastigroup-arch-azure-01.png" width="537" height="310" />

To get started with Spot Elastigroup on Azure, begin by connecting your Spot Account with Azure.

Note that you can take a Demo tour of the console before actually connecting your Account, by selecting the `Get a Console Walkthrough` from the Cloud Provider selection screen.

## What's Next?

- [Connect your Azure account](connect-your-cloud-provider/azure-account)
- [Create an Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-azure)
