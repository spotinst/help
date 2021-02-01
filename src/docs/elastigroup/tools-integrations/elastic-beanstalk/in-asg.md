# In-ASG

Once Beanstalk integration is configured, Elastigroup takes control of instance provisioning, scaling and deploying. The Amazon ASG becomes passive, Beanstalk's `min` `capacity` is set to 0 and max capacity is set to double the original `max capacity`.

> **Tip**: Instances in the Beanstalk environment must be managed exclusively by Elastigroup.

## Group Initialization Process

Once an Elastigroup is created with the Beanstalk integration, the following process takes place:

1. The Elastigroup instances are launched
2. The new instances are registered to Beanstalk's ELB
3. Beanstalk capacity range is updated
4. Auto Scaling Group scaling policies are removed
5. Existing instances (original ASG instances) are detached
6. The Following ASG processes are suspended:
   - Launch
   - Terminate
   - HealthCheck
   - ReplaceUnhealthy

## Application Updates and Deployment

When updating the application version or deploying a new application, no additional actions are required on the Elastigroup.

## Infrastructure Configuration Changes

Infrastructure configuration changes are changes made in the Beanstalk environment settings that require new EC2 instances to be provisioned. This includes changes to the launch configuration such as key pair settings and changes to VPC. In these cases, it is crucial to put the Elastigroup in `Maintenance Mode` before changing your Elastic Beanstalk configuration. In a rolling update, a blue-green deployment is launched and all the group's instances are gracefully replaced to apply changes.

## Maintenance Mode

Maintenance mode allows you to perform configuration changes to your infrastructure related resources which require a rolling update. This includes the following changes:

| **Namespace: aws:autoscaling:launchconfiguration** | **Namespace: aws:ec2:vpc** |
| -------------------------------------------------- | -------------------------- |
| EC2KeyName                                         | VPCId                      |
| IamInstanceProfile                                 | Subnets                    |
| ImageId                                            | ELBSubnets                 |
| MonitoringInterval                                 | ELBScheme                  |
| SecurityGroups                                     | DBSubnets                  |
| SSHSourceRestriction                               | AssociatePublicIpAddress   |
| BlockDeviceMappings                                |
| RootVolumeType                                     |
| RootVolumeSize                                     |
| RootVolumeIOPS                                     |

> **Tip**: While in Maintenance Mode, the service remains available, and your instances are still running.

Once Maintenance is completed and the necessary Elastic Beanstalk configuration changes are made, a `blue-green` deployment is forced where a graceful replacement of existing instances with new, updated instances (that contain the new configuration change) takes place.

## Changes to be made via Elastigroup

Some configurations are managed solely by Elastigroup, and do not require maintenance mode. This includes capacity management and instance types.

### Instance types

Elastigroup allows you to configure multiple instance types for the same environment. Therefore, changes to instance type need to be made directly in Elastigroup.

### Capacity Changes

It's crucial that all capacity changes are done via Elastigroup. Failing to do so may result in unexpected behavior. This includes detaching instances, Elastigroup/Beanstalk environment termination, scaling policies, and manual capacity changes.

## Transition from Beanstalk Independent to Beanstalk In-ASG Elastigroup

The In-ASG integration type requires an initialization process that differs from that of the Independent Elastigroup integration. The following steps recreate the Elastigroup for your Beanstalk environment:

1. Delete the Elastigroup.
2. Perform the changes in the Elastic Beanstalk console to adjust to In-ASG: change the environment to be load balanced, or change the deployment type to one that is supported by the In-ASG integration.
3. Roll the configurations updates and re-import the environment back into Spot. To learn how to roll configuration updates for the Independent integration click [here](elastigroup/tools-integrations/elastic-beanstalk/roll-configuration-updates).
