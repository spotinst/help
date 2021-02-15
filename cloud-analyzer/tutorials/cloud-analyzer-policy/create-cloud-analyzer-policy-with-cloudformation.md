# Create Cloud Analyzer Policy with CloudFormation

Use the Cloud Analyzer policy below if you are creating a policy with CloudFormation.

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Outputs": {
    "CARoleArn": {
      "Value": {
        "Fn::GetAtt": ["CloudAnalyzerRole", "Arn"]
      }
    }
  },
  "Parameters": {
    "AccountId": {
      "Type": "String"
    },
    "Token": {
      "Type": "String"
    },
    "CostAndUsageBucket": {
      "Type": "String",
      "Description": "The bucket name of where the *HOURLY* Cost and Usage Report is located. https://console.aws.amazon.com/billing/home?#/reports"
    },
    "DetailedBillingReportBucket": {
      "Type": "String",
      "Description": "The bucket name of where the Detailed Billing Report. It is listed here: https://console.aws.amazon.com/billing/home?#/preference"
    }
  },
  "Resources": {
    "CloudAnalyzerManagedPolicy": {
      "Type": "AWS::IAM::ManagedPolicy",
      "Properties": {
        "Description": "Cloud Analyzer Account Policy",
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
                "savingsplans:*",
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
                "s3:List*",
                "s3:GetBucketLocation",
                "s3:ListBucketMultipartUploads",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
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
                "s3:PutObject",
                "s3:ListBucket",
                "s3:PutObjectTagging",
                "s3:PutObjectAcl"
              ],
              "Resource": "arn:aws:s3:::sc-customer-*"
            },
            {
              "Sid": "S3BillingDBR",
              "Effect": "Allow",
              "Action": ["s3:get*"],
              "Resource": [
                {
                  "Fn::Join": [
                    "",
                    [
                      "arn:aws:s3:::",
                      { "Ref": "DetailedBillingReportBucket" },
                      "/*"
                    ]
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
    "CloudAnalyzerRole": {
      "Type": "AWS::IAM::Role",
      "Properties": {
        "AssumeRolePolicyDocument": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Principal": {
                "AWS": [
                  "arn:aws:iam::627743545735:root",
                  "arn:aws:iam::884866656237:root"
                ]
              },
              "Action": "sts:AssumeRole"
            }
          ]
        },
        "ManagedPolicyArns": [
          {
            "Ref": "CloudAnalyzerManagedPolicy"
          },
          "arn:aws:iam::aws:policy/job-function/Billing",
          "arn:aws:iam::aws:policy/AWSCloudFormationReadOnlyAccess",
          "arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess"
        ]
      }
    },
    "SetCredentials": {
      "Type": "Custom::spotinst-set-credentials",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-east-1:178579023202:function:spotinst-set-credentials",
        "AccountId": {
          "Ref": "AccountId"
        },
        "Token": {
          "Ref": "Token"
        },
        "s3BucketNameCloudAnalyzer": {
          "Ref": "CostAndUsageBucket"
        },
        "IamCloudAnalyzerRoleArn": {
          "Fn::GetAtt": ["CloudAnalyzerRole", "Arn"]
        }
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

```
"cloudformation:DescribeStacks"
"cloudformation:GetStackPolicy"
"cloudformation:GetTemplate"
"cloudformation:ListStackResources"
```

### Reserved Capacity Reservations

The following are read-only permissions for the reserved capacity reservations.

```
"dynamodb:List*"
"dynamodb:Describe*"
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

```
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

The following permissions are required to write information from your AWS Cost & Usage report to the Cloud Analyzer account. These are used to synchronize the Cost & Usage report.

```
{
  "Sid": "S3SyncPermissions",
  "Effect": "Allow",
  "Action": ["s3:PutObject", "s3:ListBucket", "s3:PutObjectTagging", "s3:PutObjectAcl"],
  "Resource": "arn:aws:s3:::sc-customer-*"
}
```

### IAM Role

This role and the corresponding permissions are issued to the Cloud Analyzer production and DR accounts.

```json
{
  "CloudAnalyzerRole": {
    "Type": "AWS::IAM::Role",
    "Properties": {
      "AssumeRolePolicyDocument": {
        "Version": "2012-10-17",
        "Statement": [
          {
            "Effect": "Allow",
            "Principal": {
              "AWS": [
                "arn:aws:iam::627743545735:root",
                "arn:aws:iam::884866656237:root"
              ]
            },
            "Action": "sts:AssumeRole"
          }
        ]
      },
      "ManagedPolicyArns": [
        {
          "Ref": "CloudAnalyzerManagedPolicy"
        },
        "arn:aws:iam::aws:policy/job-function/Billing",
        "arn:aws:iam::aws:policy/AWSCloudFormationReadOnlyAccess",
        "arn:aws:iam::aws:policy/AmazonEC2ReadOnlyAccess"
      ]
    }
  }
}
```

### Role ARN

The policy below allows Cloud Analyzer to get the newly created role ARN. The role ARN is what allows Cloud Analyzer to access your AWS account.

```json
{
  "SetCredentials": {
    "Type": "Custom::spotinst-set-credentials",
    "Properties": {
      "ServiceToken": "arn:aws:lambda:us-east-1:178579023202:function:spotinst-set-credentials",
      "AccountId": {
        "Ref": "AccountId"
      },
      "Token": {
        "Ref": "Token"
      },
      "s3BucketNameCloudAnalyzer": {
        "Ref": "CostAndUsageBucket"
      },
      "IamCloudAnalyzerRoleArn": {
        "Fn::GetAtt": ["CloudAnalyzerRole", "Arn"]
      }
    }
  }
}
```

## Get Account ID and Token

- You can find the account ID at the following location:
  https://console.spotinst.com/spt/settings/account/general
- You can create a token at the following location:
  https://console.spotinst.com/spt/settings/tokens/permanent

The user creating the token must have admin permissions.
