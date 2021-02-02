# Independent Elastigroup Integration

When Beanstalk deployment policy is set as: `Immutable` or `Rolling with additional batch` Elastigroup will use the `Independent` integration method to manage the cluster instances.

## Group Initialization

Once an Elastigroup is created with Beanstalk `Independent` integration, the following process takes place to replace the ASG instances with instances managed by Elastigroup:

1. Elastigroup launches additional instances (same amount as the original Elastic Beanstalk ASG).
2. The new instances are registered to the Elastic Beanstalk environment.
3. The new instances are registered to the Load Balancer.

> **Tip**: As a policy, the system avoids downscaling pre-existing workloads. Downscaling the original auto-scaling group can be done manually once the integration process is completed and the Elastigroup is running.

## Capacity Management

All capacity changes must be done via Elastigroup. Failing to do so may result in unexpected behavior. This includes detaching instances, Elastigroup/Beanstalk environment termination, scaling policies, and manual capacity changes.

## Application Updates and Deployment

For non-capacity changes only. In the following steps the Beanstalk environment is updated, then the new version is imported and a blue/green deployment is initiated to gracefully replace the existing Elastigroup's instances with new, updated instances.

1. Configure the Blue-Green deployment settings – Edit the group configuration and navigate to the Compute tab. In the bottom of the screen under Integrations, configure Strategy, Grace Period, and Batch Size. These settings will apply in the deployment that will start in step 3.

<img src="/elastigroup/_media/independent-elastigroup-integration_1.png" />

2. Open the Beanstalk environment in AWS and deploy the new version there.
3. Approximately 5 minutes after the new version is deployed to the Beanstalk environment, an [automatic Blue-Green deployment](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup) will start in the linked Elastigroup. This will replace the instances with new instances running the latest version.
