# Link EC2-Classic Instance to VPC

## Introduction

In order to link an instance running within EC2-Classic to a VPC security group, you need to use a custom User-data script as part of your Elastigroup configuration to allow the registration of instances to the VPC.

## Step 1: Create an IAM Role

As a preceding step you should also create an IAM role for the instance that will have the following permission in its policy:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Stmt1500534977000",
            "Effect": "Allow",
            "Action": [
                "ec2:AttachClassicLinkVpc"
            ],
            "Resource": [
                "*"
            ]
        }
    ]
}
```

This IAM role should be selected in the Elastigroup configuration under Additional Settings > Compute tab.

## Step 2: Enter a User-Data Script

This should be entered into the User-Data field under Additional Settings > Compute tab.

```bash
#!/bin/bash -x
echo "Running sportInst user data script" >> /var/log/cloud-init-output.log
instance_id=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
echo " Installing pip"
yum install -y python-pip
echo "Make sure aws-cli installed and up-to-date" >> /var/log/cloud-init-output.log
pip install awscli --upgrade --user
export PATH=~/.local/bin:$PATH
echo "Attach the EC2-Classic instance to VPC"
aws ec2 attach-classic-link-vpc --instance-id $instance_id --vpc-id VPC_ID --groups SECURITY_GROUPS --region REGION

```

Make sure you replace VPC_ID, SECURITY_GROUPS and REGION with the values you would like to apply.

Continue with the group creation or update the group configuration.
