# AWS Load Balancers & Autohealing

If you are running an application or service behind AWS Elastic Load Balancer (ELB) such as Application Load Balancer (ALB), Elastigroup provides the freedom to run a blended cluster of multiple instance types (e.g., M3, M4, C3) and sizes (e.g., large, xlarge).

Elastigroup launches the target capacity in multiple uncorrelated spot markets to ensure a predictable and stable workload. Elastigroup’s unique value proposition is its ability to add resilience to workloads that otherwise would not be suitable to run on the spot market.

To ensure that the load balancer stops sending requests to instances that are marked for termination, Elastigroup de-registers and drains the instances a few minutes before the instance receives a shutdown signal from AWS. At the same time, Elastigroup begins spinning up new instances to ensure your desired capacity will not be degraded.

When you specify one or more load balancers, Elastigroup registers every instance with the load balancer. Elastigroup also de-registers instances from the load balancer upon termination and sends [SNS](https://aws.amazon.com/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc) or email notifications.

## Connect a Load Balancer

Choose one of the following methods to connect a load balancer to an Elastigroup:

- [Edit an Existing Elastigroup](elastigroup/tools-integrations/aws-load-balancers-elb-alb?id=edit-existing-elastigroup)
- [Create Elastigroup using Existing Load Balancer](elastigroup/tutorials/elastigroup-tasks/join-an-existing-elb)

## Edit Existing Elastigroup

To connect a load balancer to an existing Elastigroup, do the following:

1. In the left menu of the Spot console, click Elastigroup/Groups, and click on the name of an Elastigroup.
2. When the Elastigroup page opens, go to the Actions menu and click Edit Configuration.
3. Go to the Compute tab and scroll down to Load Balancers. Complete the Load Balancer and Autohealing configurations as described in [Import an Existing Elastic Load Balancer](elastigroup/tutorials/elastigroup-tasks/join-an-existing-elb).
4. Save your updates to the configuration.

## What’s Next?

Learn more about Elastigroup [Capacity Management](elastigroup/features/core-features/elastigroup-capacity-instances-or-weighted).
