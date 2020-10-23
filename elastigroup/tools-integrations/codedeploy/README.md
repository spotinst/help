# Get Started with CodeDeploy for Elastigroup

## Introduction

AWS CodeDeploy is a service that automates code deployments to any instance, including Amazon EC2 instances and instances running on-premises. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications.

## How does it work?

CodeDeploy handles deployment in groups with revisions. We integrate with the existing Deployment Groups. For each new instance or group of instances that are in the Elastigroup, we will create a temporary deployment group with the same settings and configurations as the original deployment group. After we apply the same set of settings on the temporary deployment group we have a matching revision with the original group of instances and we delete the temporary deployment group after removing the instances from the temporary group and assigning them to the original group.

In order to get Spot Elastigroup and AWS CodeDeploy integrated, please follow these steps.

## Prerequisites

Before starting, ensure your Spot policy is up-to-date with the latest permissions. You can either get the entire JSON from our API docs to replace the Policy or simply add the following to your policy:

```json
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["codedeploy:*"]
    }
  ]
}
```

In case of Revision that is being pulled from S3, The EC2 instances need to be launched with proper permissions to access files from S3 buckets.
So you need to create an Instance Profile Role with the Following permissions:

```json
{
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:Get*", "s3:List*"]
    }
  ]
}
```

Associate the Elastigroup with your CodeDeploy IAM Instance Role.

## Step 1: User Data Startup Script

Use the following User Data startup script in the group configuration in order to install the Code Deploy agent.

```bash
#!/bin/bash -x
REGION=$(curl 169.254.169.254/latest/meta-data/placement/availability-zone/ | sed 's/[a-z]$//')
yum update -y
yum install ruby wget -y
cd /home/ec2-user
wget https://aws-codedeploy-$REGION.s3.amazonaws.com/latest/install
chmod +x ./install
./install auto
```

## Step 2: Register for Integrations

1. Scroll down the Compute tab and expand the Integrations section.
2. Enable CodeDeploy integration and select your application and deployment group resources. The application and deployment group resources should already exist in your AWS account.

<img src="/elastigroup/_media/codedeployREADME_1.png" />

- **cleanupOnFailure** – While true we delete the temporary group created. If False we don't delete the temporary deployment group in case of failure (so the user can view the logs of the group and the deployment).
- **terminateInstanceOnFailure** – while true, we terminate the instance that failed. If false, we keep the instances that failed.

3. Proceed with the Elastigroup creation.
