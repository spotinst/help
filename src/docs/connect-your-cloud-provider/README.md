# Introduction to Spot

Using the Spot SaaS platform, you can easily provision, manage, and scale your compute infrastructure on your chosen cloud provider.

<img src="/connect-your-cloud-provider/_media/introduction-to-spot.png" />

The Spot platform can predict interruptions of spot instances 15 minutes prior to their occurrence, allowing enough time to drain and migrate the interrupted machine to a different instance, and therefore ensuring 100% application uptime.

On top of that, Spot will run workloads on a mix of instance pricing options such as reserved and spot Instances, and whenever the spot market is unstable or unavailable, it will automatically fallback to on-demand, thus ensuring high availability.

In order to handle the various workload types, Spot offers two products that answer the compute needs of engineering teams:

- Elastigroup is suitable for running Web applications (autoscaling groups, ELB, and ALB)
- Ocean is designed for running containers (Kubernetes and ECS)

## Cloud Excess Capacity

As the majority of businesses are transitioning their workloads to the public cloud, the cloud providers are obligated to meet the rise in demand at any given time and therefore are gradually enlarging and expanding their data centers with additional compute resources.

The fact that not all resources are utilized most of the time has created a situation of excess capacity, idle resources that are not being used.

In order to encourage utilizing the excess capacity, AKA _spot instances_, Cloud providers are re-selling those spare resources back to the market at a significant discount (up to 90%).

However, when there is a rise in demand for a particular instance type, the cloud providers will terminate the discounted instance (with a 2-minute notification) and transfer it to a customer who is willing to pay more.

This obstacle has revolted users from leveraging the excess resources, due to the many challenges it brought them in terms of adjusting applications to handle interruptions and automating the failover process, in case the cloud provider terminates the instance.

## What's Next?

Connect your Cloud provider account to Spot: [AWS](connect-your-cloud-provider/aws-account.md), [Azure](connect-your-cloud-provider/azure-account.md), [GCP](connect-your-cloud-provider/gcp-project.md)
