# Create Eco Policy with CloudFormation

Use the policy below to if you are creating an Eco policy with Cloudformation.

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
        "Description" :"This role is for Spot by Netapp for use with the Cloud Analyzer, Eco and other FinOps products. If you have any questions, please contact us at: eco@netapp.com",
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
