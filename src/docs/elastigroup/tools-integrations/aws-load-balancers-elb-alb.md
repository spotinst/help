# AWS Load Balancers: ELB & ALB

If you are running an application or service behind AWS Elastic Load Balancer (ELB) or Application Load Balancer (ALB), Elastigroup provides the freedom to run blended cluster from multiple instance types, sizes (`{M3,M4,C3,C4}.{Large,Xlarge,etc..}`) and purchasing options (`Spot`, `On-Demand`, `Reserved`).

Elastigroup launches the target capacity in multiple uncorrelated Spot Markets, to ensure a predictable and stable workload. Its unique value proposition is its ability to add resiliency to workloads that otherwise would not be suitable to run on the spot market.

<img src="/elastigroup/_media/aws-load-balancers-elb-alb_1.png" />

To ensure that the load balancer stops sending requests to instances that are marked for termination, Elastigroup will de-register and drain the instances a few minutes before the instance gets a shutdown signal from AWS. At the same time, Elastigroup will begin spinning up new instances in parallel to ensure your desired capacity won’t be degraded.

Specify one or more load balancers, and Elastigroup will register every instance with the load balancer. Elastigroup also de-registers instances from the load balancer upon termination and sends a `SNS\Email notifications`.

## Integrate a Load Balancer

1. Enter the Creation Wizard to create a new Elastigroup or select Edit Configuration to integrate a load balancer with an existing Elastigroup.
2. In the Compute Tab under Load Balancers select the load balancer to attach from the drop-down selection.

   - **Amazon Load Balancer** – The ELB or ALB Target Group.
   - **Auto Healing** – Select which health check service will automatically perform health checks on your EC2 instances. If an instance fails the health check, it is automatically removed from the Elastigroup and will be replaced with a new instance.
     - **ELB** – Use amazon’s Elastic load balancer health check.
     - **TARGET Group** – Use the AWS Application load balancer health check.
     - **EC2** – Use the AWS EC2 Status check.
     - **HCS** – Use Spot health check. You can read more about it here: [Spot HCS service](elastigroup/tools-integrations/custom-health-check-service).
     - **MLB** – Use the Multai Load Balancer health check service.
   - **Health Check Grace Period** – Specify the timeout (in seconds) until newly launched instances become healthy. If an instance fails the health check after the given grace period, it will be terminated and replaced with a new one.
   - **Unhealthy Duration** – Specify the amount of time (in seconds) you want to keep existing instances that are deemed unhealthy before the instance is terminated and replaced with a new one.

3. Complete the Creation Wizard.
