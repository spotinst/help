# Cloud Analyzer Policy

The Cloud Analyzer policy is shown below.

Use this policy only if you know the Role ARN associated with Cloud Analyzer.

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Outputs": {
    "SpotFinOpsRoleArn": {
      "Value": {
        "Fn::GetAtt": ["SpotFinOpsRole", "Arn"]
      }
    }
  },
  "Parameters": {
    "CostAndUsageBucket": {
      "Type": "String",
      "Description": "The bucket name of where the *HOURLY* Cost and Usage Report is located. https://console.aws.amazon.com/billing/home?#/reports"
    }
  },
  "Resources": {
    "SpotFinOpsManagedPolicy": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "Description": "SC Account Policy",
        "PolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Sid": "FullPolicy",
              "Effect": "Allow",
              "Action": [
                "cloudformation:DescribeStacks",
                "cloudformation:GetStackPolicy",
                "cloudformation:GetTemplate",
                "cloudformation:ListStackResources",
                "dynamodb:List*",
                "dynamodb:Describe*",
                "savingsplans:List*",
                "savingsplans:Describe*",
                "ec2:Describe*",
                "ec2:List*",
                "ec2:GetHostReservationPurchasePreview",
                "ec2:GetReservedInstancesExchangeQuote",
                "elasticache:List*",
                "elasticache:Describe*",
                "es:List*",
                "es:Describe*",
                "cur:*",
                "ce:*",
                "rds:Describe*",
                "rds:ListTagsForResource",
                "redshift:Describe*",
                "trustedadvisor:*",
                "support:*",
                "organizations:List*",
                "organizations:Describe*"
              ],
              "Resource": ["*"]
            },
            {
              "Sid": "S3SyncPermissions",
              "Effect": "Allow",
              "Action": [
                "s3:GetBucketLocation",
                "s3:ListBucketMultipartUploads",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:PutObject",
                "s3:List*",
                "s3:ListBucket",
                "s3:PutObjectTagging",
                "s3:PutObjectAcl"
              ],
              "Resource": "arn:aws:s3:::sc-customer-*"
            },
            {
              "Sid": "S3BillingDBR",
              "Effect": "Allow",
              "Action": [
                "s3:GetBucketLocation",
                "s3:ListBucketMultipartUploads",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:List*",
                "s3:get*"
              ],
              "Resource": [
                {
                  "Fn::Join": [
                    "",
                    ["arn:aws:s3:::", { "Ref": "CostAndUsageBucket" }, "*"]
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    ["arn:aws:s3:::", { "Ref": "CostAndUsageBucket" }, "/*"]
                  ]
                }
              ]
            },
            {
              "Sid": "ServiceQuotas",
              "Effect": "Allow",
              "Action": "servicequotas:*",
              "Resource": "*"
            }
          ]
        }
      }
    },
    "SpotFinOpsRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": [
                  "arn:aws:iam::884866656237:root",
                  "arn:aws:iam::627743545735:root"
                ]
              },
              "Action": "sts:AssumeRole"
            }
          ]
        },
        "ManagedPolicyArns": [
          {
            "Ref": "SpotFinOpsManagedPolicy"
          },
          "arn:aws:iam::aws:policy/job-function/Billing",
          "arn:aws:iam::aws:policy/AWSCloudFormationReadOnlyAccess",
          "arn:aws:iam::aws:policy/ServiceQuotasFullAccess"
        ]
      }
    }
  }
}
```

## Policy Overview

The policy grants the following permissions for operating the Cloud Analyzer system.

- Access to retrieve billing reports using APIs and S3 for the Detailed Billing Report, the Cost Explorer, and the Cost & Usage Report.
- Read-only permissions (on the management account only) for the Amazon services that offer reserved capacity, such as EC2, RDS, RedShift, Elasticache, ElasticSearch, and DynamoDB.
- Access to Support & Trusted Advisor for monitoring and changes to the reserved instance service limit.

## Explanation Of Permissions In Policy

### S3 Billing Bucket

The following are permissions for the CloudFormation script to read the S3 billing bucket names.

```json
"cloudformation:DescribeStacks"
"cloudformation:GetStackPolicy"
"cloudformation:GetTemplate"
"cloudformation:ListStackResources"
```

### Reserved Capacity Reservations

The following are read-only permissions for the reserved capacity reservations.

```json
"dynamodb:List*"
"dynamodb:Describe*"
"savingsplans:List*",
"savingsplans:Describe*",
"ec2:Describe*"
"ec2:List*"
"ec2:GetHostReservationPurchasePreview"
"ec2:GetReservedInstancesExchangeQuote"
"elasticache:List*"
"elasticache:Describe*"
"rds:Describe*"
"rds:ListTagsForResource"
"redshift:Describe*"
```

### Cost & Usage Report

The following provides access to the Cost and Usage Report (CUR).

`"cur:*"`

### CostExplorer Data

The following provides access to CostExplorer data.

`"ce:*"`

### Service Limit

The following provides access to Service Limit information.

`"trustedadvisor:*"`

### S3 Bucket Billing Data

```json
"s3:List*"
"s3:GetBucketLocation"
"s3:ListBucketMultipartUploads"
"s3:AbortMultipartUpload"
"s3:ListMultipartUploadParts"
```

Support permissions allow Cloud Analyzer to create tickets if it hits any reserved instance related service limits.

`"support:*"`

### Account Organization

The following permissions are used to review account organization information if necessary.

```
"organizations:List*"
"organizations:Describe*"
```

### Copy Permissions

The following permissions are required to write information from your AWS Cost & Usage report to the Cloud Analyzer account. These are used to synchronize the Cost & Usage report and are required for the system to work. Do not remove these lines from the policy.

```json
{
  "Sid": "S3SyncPermissions",
  "Effect": "Allow",
  "Action": [
    "s3:PutObject",
    "s3:ListBucket",
    "s3:PutObjectTagging",
    "s3:PutObjectAcl"
  ],
  "Resource": "arn:aws:s3:::sc-customer-*"
}
```
