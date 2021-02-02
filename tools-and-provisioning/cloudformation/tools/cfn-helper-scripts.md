# CFN Helper Scripts

[CFN helper scripts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-helper-scripts-reference.html) are used to retrieve and interpret resource metadata, install packages, create files, and start services. It is commonly used in user-data scripts.

In order to use cfn helper scripts in Elastigroup user-data, you will need to specify credentials by using an IAM role that is allowed to access Cloud Formation stack resources.

## How to use CFN Helper Scripts in Elastigroup User-Data

### Step 1: Create a new IAM Policy

1. Login to your AWS console and navigate to the [IAM](https://console.aws.amazon.com/iam) page.
2. Click Policies in the side menu, and then Create Policy.

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_1.png" width="476" height="321" />

3. Switch to JSON view and add this snippet to the policy.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "cloudformation:SignalResource",
        "cloudformation:DescribeStackResource"
      ],
      "Resource": "*"
    }
  ]
}
```

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_2.png" />

4. Click review, give the policy a name and create the policy:

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_3.png" />

### Step 2: Attach the IAM Policy to your IAM Role

1. Under Roles from the side menu, locate the IAM role used by your Elastigroup and click on it:

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_4.png" width="381" height="267" />

2. Search your newly created policy, and click Attach Policy:

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_5.png" />

> **Tip**: Beanstalk Elastigroups do not need to modify their user-data.

### Step 3: Modify your Elastigroup User-Data (Non-Beanstalk Elastigroups)

Modify your user-data to invoke CFN helper scripts using the role name.

> **Tip**: If your Instance profile name is different from the role name attached to it, use the role name in the user-data script.

For example, for a cfn-init call add the role:

```
/opt/aws/bin/cfn-init -v --stack <cfn-stack-id> --resource <logical-resource> --role <my-role>
```

<img src="/tools-and-provisioning/_media/cfn-helper-scripts_6.png" />

Windows user-data:

```
C:\Program Files\Amazon\cfn-bootstrap\cfn-init.exe --stack <cfn-stack-id> --resource <logical-resource> --role <my-role>
```
