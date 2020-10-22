# Tutorial: Roll Configuration Updates

## Introduction

This tutorial covers configuration updates that require a rolling update. This includes the following changes to infrastructure resources:

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

Once Maintenance is completed and the necessary Elastic Beanstalk configuration changes are made, a `blue-green` deployment is forced where a graceful replacement of existing instances with new, updated instances (that contain the new configuration change) takes place.

The tutorial covers In-ASG and Independent Beanstalk integration methods in separate steps.

## Prerequisites

- A healthy Beanstalk environment in your AWS account
- Elastigroup is synced with Beanstalk environment.
- The most up-to-date [Spot IAM policy](administration/api/spot-policy-in-aws) is configured in your AWS account

## In-ASG Beanstalk Integration Method

While in Maintenance Mode, the service remains available and your instances are still running.

1. Open the Elastigroup Management View. Under Configuration Update click Start Maintenance.

<img src="/elastigroup/_media/roll-configuration-updates_1.png" />

2. Perform the changes to the Beanstalk environment in the [AWS Console](https://console.aws.amazon.com/).
3. After making the changes, select Roll Updates to initiate a blue/green deployment that gracefully replaces the Elastigroup's instances with new instances containing the configuration changes. To learn more about deployments and rolling in Elastigroup, click [here](elastigroup/tutorials/elastigroup-actions-menu/deploy-or-roll-elastigroup).

## Independent Integration Method

1. Perform the changes to the Beanstalk environment in the AWS Console.
2. In the Elastigroup Management View, under Actions select Beanstalk.

<img src="/elastigroup/_media/roll-configuration-updates_2.png" width="228" height="466" />

3. In the pop-up window, click Re-Import Config to import the updated configuration.
4. Configure the blue/green deployment to be initiated. The blue/green deployment gracefully replaces all the instances in the Elastigroup with new instances containing the configuration changes. For more on deployments and rolls in Elastigroup click here.
5. Click Save & Deploy.

<img src="/elastigroup/_media/roll-configuration-updates_3.png" width="228" height="200" />
