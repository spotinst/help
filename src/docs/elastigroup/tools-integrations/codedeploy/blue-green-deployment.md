# CodeDeploy: Blue-Green Deployment

## Introduction

With blue/green CodeDeploy deployments, a new set of instances are provisioned, on which CodeDeploy installs the latest version of the application. CodeDeploy then reroutes load balancer traffic from an existing set of instances running the previous version of the application to the new set of instances running the latest version. After traffic is rerouted to the new instances, the existing (old) instances can be terminated. Blue/green deployments allow you to test the new application version before sending production traffic to it. Instances provisioned as part of a blue/green deployment will reflect the most up-to-date server configurations.

## How Does it Work

Elastigroups with Code deploy integration offers an option to utilize the B/G deployment mechanism. The Elastigroup will provision new instances in the Elastigroup with 'green' tags (user configurable) after the Tags are added to the instances, the user may start the deployment from AWS Code Deploy console. Once completed, Elastigroup will detach the old, 'blue' instances.

## Prerequisites

- In the AWS Console, edit the desired deployment group and under Environment configuration ensure that Amazon EC2 instances is selected.

<img src="/elastigroup/_media/blue-green-deployment_1.png" />

- In Spot Console – make sure your AMI has the Code Deploy agent installed or install it via your [user-data script](https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install.html).
- In Spot Console – make sure you have associated the Code Deploy IAM Role in the Elastigroup configuration.

## Configuring a Blue-Green Deployment

1. Go to Spot Console and select the Elastigroup.

<img src="/elastigroup/_media/blue-green-deployment_2.png" />

2. Go to the CODEDEPLOY B/G tab:
3. Choose the Deployment Group, set the Deployment Timeout (the amount of time the deployment can take before we fail the deployment, in seconds), Add the Keys and Values for the 'Green' tags and click Start Deployment Mode:
   The Green and Blue Instances must have the same tag key but different tag value.

<img src="/elastigroup/_media/blue-green-deployment_3.png" />

4. Elastigroup will then provision new instances and tag them with the Green Tags.
5. Once instances were launched, you may go to your AWS console and start a CodeDeploy deployment. Make sure to choose 'Amazon EC2 Instances' in the 'Identify instances to include in the new environment' and use the same 'Green' tags provided in step 3.

<img src="/elastigroup/_media/blue-green-deployment_4.png" />

6. Once Elastigroup detects that the deployment has completed successfully, it will finalize the Deployment process and detach (terminate) the old instances.
