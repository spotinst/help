# Import an Existing Elastic Load Balancer

You can import the configuration of an existing AWS Elastic load balancer (ELB) to Spot so that the ELB can be managed as an Elastigroup in Spot.

## Prerequisites

- A Spot account connected to your AWS account
- At least one running instance connected to an AWS load balancer

## Get Started

1. In the Spot console, click **Elastigroup** > **Groups** > **Create Elastigroup**.
   <details>
   <summary markdown="span">View image</summary>

   <img src="/elastigroup/_media/tutorials-create-eg-from-scratch-01.png" />

   </details>
   
3. In Use Cases, click **Elastic Load Balancer**.

4. In AWS Load Balancer, select **Create an Elastigroup from an existing AWS load balancer**.
   - Region: The AWS region where the balancer is located.
   - Load Balancer Type: You can choose either **Classic** or **Application/Network**.
   - Balancers: Select a balancer.

   <details>
   <summary markdown="span">View image</summary>

   <img src="/elastigroup/_media/aws-load-balancers-elb-alb-3.png" width="436" />

</details>

   > **Tip**: Elastigroup supports importing target groups only of type <b>Instance</b>.

Spot creates the Elastigroup based on the load balancer parameters imported from AWS.

After the initial creation of the Elastigroup, you can choose to keep the original configuration parameters or modify them if necessary. For a general description of the Elastigroup configuration parameters, see [create an Elastigroup](elastigroup/getting-started/create-an-elastigroup-for-aws).

## Review the Configuration

In the Review tab under Summary, you can review the final configuration of your Elastigroup. In addition, Spot automatically generates a template of your Elastigroup to be used by Cloudformation or Terraform.

When you are finished reviewing and making any modifications required in the configuration, click **Create**. Spot will create your Elastigroup load balancer.

## Complete Autohealing Information

After you import a target group, this target group will be selected as the load balancer in the group, but no autohealing will be configured. You need to configure the autohealing in the group.

1. In the Compute tab, scroll down to Autohealing and choose the service that will perform health checks on your EC2 instances. Depending on which load balancers you chose, the following options may appear:

   - ELB: AWS Elastic Load Balancer health check.
   - EC2: AWS EC2 Status check.
   - Target Group: AWS Application Load Balancer health check.
   - HCS: Spot’s custom [Health Check Service](elastigroup/tools-integrations/custom-health-check-service).
   - CodeDeploy
   - OpsWorks

   HCS, CodeDeploy, and OpsWorks will appear only if they were configured in the Elastigroup.
   <details>
   <summary markdown="span">View image</summary>
    
    <img src="/elastigroup/_media/aws-load-balancers-elb-alb-5.png" />

</details>

2. Enter the following Autohealing parameters:
   - Health Check Grace Period: Specify the timeout (in seconds) until newly launched instances become healthy. If an instance fails the health check after the given grace period, it will be terminated and replaced with a new one.
   - Unhealthy Duration: Specify the amount of time (in seconds) you want to keep existing instances that are deemed unhealthy before the instance is terminated and replaced with a new one.
3. Click **Next**.
