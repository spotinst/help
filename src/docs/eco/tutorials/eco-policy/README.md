# Eco AWS Policy

The Eco policy is shown below. The policy below is relevant only for customers who have not yet signed a contract for Eco. If you have signed a contract and need the Eco policy, please contact Spot Support.

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
      }, 
      "RoleName": { 
        "Type": "String", 
        "Default": "SpotByNetApp_Finops_ReadOnly" 
      }, 
      "PolicyName": { 
        "Type": "String", 
        "Default": "SpotByNetApp_Finops_ReadOnly_Policy" 
      } 
    }, 
    "Resources": { 
      "SpotFinOpsManagedPolicy": { 
        "Type": "AWS::IAM::ManagedPolicy", 
        "Properties": { 
          "ManagedPolicyName": { "Ref" : "PolicyName" }, 
          "Description": "Spot by NetApp Finops ReadOnly Policy", 
          "PolicyDocument": { 
            "Version": "2012-10-17", 
            "Statement": [ 
              { 
                "Action": [ 
                  "cloudformation:Describe*", 
                  "cloudformation:EstimateTemplateCost", 
                  "cloudformation:Get*", 
                  "cloudformation:List*", 
                  "cloudformation:ValidateTemplate", 
                  "cloudformation:Detect*" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyCloudFormation" 
              }, 
              { 
                "Action": [ 
                  "es:ListElasticsearchInstanceTypes", 
                  "es:DescribeReservedElasticsearchInstanceOfferings", 
                  "es:DescribeReservedElasticsearchInstances" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyElasticSearch" 
              }, 
              { 
                "Action": [ 
                  "rds:DescribeReservedDBInstances", 
                  "rds:DescribeDBInstances", 
                  "rds:DescribeReservedDBInstancesOfferings", 
                  "rds:ListTagsForResource" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyRDS" 
              }, 
              { 
                "Action": [ 
                  "redshift:DescribeReservedNodeOfferings", 
                  "redshift:DescribeReservedNodes", 
                  "redshift:DescribeClusters" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyRedshift" 
              }, 
              { 
                "Action": [ 
                  "elasticache:DescribeReservedCacheNodesOfferings", 
                  "elasticache:DescribeReservedCacheNodes", 
                  "elasticache:DescribeCacheClusters", 
                  "elasticache:ListAllowedNodeTypeModifications", 
                  "elasticache:ListTagsForResource" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyElasticache" 
              }, 
              { 
                "Action": [ 
                  "dynamodb:DescribeReservedCapacityOfferings", 
                  "dynamodb:DescribeReservedCapacity" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyDynamoDB" 
              }, 
              { 
                "Action": [ 
                  "ec2:DescribeHostReservations", 
                  "ec2:DescribeReservedInstances" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyEC2" 
              }, 
              { 
                "Action": [ 
                  "savingsplans:DescribeSavingsPlanRates", 
                  "savingsplans:DescribeSavingsPlans", 
                  "savingsplans:DescribeSavingsPlansOfferingRates", 
                  "savingsplans:DescribeSavingsPlansOfferings", 
                  "savingsplans:ListTagsForResource" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlySavingsPlans" 
              }, 
              { 
                "Action": [ 
                  "account:GetAccountInformation", 
                  "billing:GetBillingData", 
                  "billing:GetBillingDetails", 
                  "billing:GetBillingNotifications", 
                  "billing:GetBillingPreferences", 
                  "billing:GetContractInformation", 
                  "billing:GetCredits", 
                  "billing:GetIAMAccessPreference", 
                  "billing:GetSellerOfRecord", 
                  "billing:ListBillingViews", 
                  "ce:DescribeNotificationSubscription", 
                  "ce:DescribeReport", 
                  "ce:GetAnomalies", 
                  "ce:GetAnomalyMonitors", 
                  "ce:GetAnomalySubscriptions", 
                  "ce:GetCostAndUsage", 
                  "ce:GetCostAndUsageWithResources", 
                  "ce:GetCostCategories", 
                  "ce:GetCostForecast", 
                  "ce:GetDimensionValues", 
                  "ce:GetPreferences", 
                  "ce:GetReservationCoverage", 
                  "ce:GetReservationPurchaseRecommendation", 
                  "ce:GetReservationUtilization", 
                  "ce:GetRightsizingRecommendation", 
                  "ce:GetSavingsPlansCoverage", 
                  "ce:GetSavingsPlansPurchaseRecommendation", 
                  "ce:GetSavingsPlansUtilization", 
                  "ce:GetSavingsPlansUtilizationDetails", 
                  "ce:GetTags", 
                  "ce:GetUsageForecast", 
                  "ce:ListCostAllocationTags", 
                  "ce:ListSavingsPlansPurchaseRecommendationGeneration", 
                  "consolidatedbilling:GetAccountBillingRole", 
                  "consolidatedbilling:ListLinkedAccounts", 
                  "cur:GetClassicReport", 
                  "cur:GetClassicReportPreferences", 
                  "cur:ValidateReportDestination", 
                  "freetier:GetFreeTierAlertPreference", 
                  "freetier:GetFreeTierUsage", 
                  "invoicing:GetInvoiceEmailDeliveryPreferences", 
                  "invoicing:GetInvoicePDF", 
                  "invoicing:ListInvoiceSummaries", 
                  "payments:GetPaymentInstrument", 
                  "payments:GetPaymentStatus", 
                  "payments:ListPaymentPreferences", 
                  "tax:GetTaxInheritance", 
                  "tax:GetTaxRegistrationDocument", 
                  "tax:ListTaxRegistrations" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyViewBilling" 
              }, 
              { 
                "Action": [ 
                  "cur:GetUsageReport", 
                  "cur:DescribeReportDefinitions" 
                ], 
                "Resource": [ 
                  "*" 
                ], 
                "Effect": "Allow", 
                "Sid": "ReadOnlyViewUsage" 
              }, 
              { 
                "Action": [ 
                  "s3:GetBucketLocation", 
                  "s3:AbortMultipartUpload", 
                  "s3:ListAccessPoints", 
                  "s3:ListAccessPointsForObjectLambda", 
                  "s3:ListAllMyBuckets", 
                  "s3:ListBucket", 
                  "s3:ListBucketMultipartUploads", 
                  "s3:ListBucketVersions", 
                  "s3:ListJobs", 
                  "s3:ListMultiRegionAccessPoints", 
                  "s3:ListMultipartUploadParts", 
                  "s3:ListStorageLensConfigurations", 
                  "s3:ListStorageLensConfigurations", 
                  "s3:ListTagsForResource", 
                  "s3:PutObject", 
                  "s3:PutObjectTagging", 
                  "s3:PutObjectAcl" 
                ], 
                "Resource": "arn:aws:s3:::sc-customer-*", 
                "Effect": "Allow", 
                "Sid": "S3SyncPermissions" 
              }, 
              { 
                "Action": [ 
                  "s3:ListBucket", 
                  "s3:ListBucketVersions", 
                  "s3:ListBucketMultipartUploads", 
                  "s3:GetBucketLocation" 
                ], 
                "Resource": [ 
                  { "Fn::Join" : [ "", [ "arn:aws:s3:::", { "Ref" : "CostAndUsageBucket" }]]} 
                ], 
                "Effect": "Allow", 
                "Sid": "S3CURBucket" 
              }, 
              { 
                "Action": [ 
                  "s3:Get*", 
                  "s3:List*", 
                  "s3:Describe*" 
                ], 
                "Resource": [ 
                  { "Fn::Join" : [ "", [ "arn:aws:s3:::", { "Ref" : "CostAndUsageBucket" },"/*"]]} 
                ], 
                "Effect": "Allow", 
                "Sid": "S3CURObject" 
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
                "Action": "sts:AssumeRole", 
                "Principal": { 
                  "AWS": ["arn:aws:iam::884866656237:root", 
                          "arn:aws:iam::627743545735:root"] 
                }, 
                "Effect": "Allow" 
              } 
            ] 
          }, 
          "Description" : "Spot by NetApp ReadOnly Finops IAM Role", 
          "ManagedPolicyArns": [ 
            { 
              "Ref": "SpotFinOpsManagedPolicy" 
            } 
          ], 
          "RoleName" : { "Ref" : "RoleName" } 
        } 
      } 
    } 
  } 
```

## Policy Overview

The policy grants the following permissions for operating the Eco system.

- Access to retrieve billing reports using APIs and S3 for the Detailed Billing Report, the Cost Explorer, and the Cost & Usage Report.

## Explanation Of Permissions In Policy

### CloudFormation

The following are permissions are needed for onboarding customers as noted in https://docs.spot.io/eco/getting-started/connect-your-aws-account. 

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
"es:List*"
"es:Describe*"
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

Support permissions allow Eco to create tickets if it hits any reserved instance related service limits.

`"support:*"`

### Account Organization

The following permissions are used to review account organization information if necessary.

```
"organizations:List*"
"organizations:Describe*"
```

### Copy Permissions

The following permissions are required to write information from your AWS Cost & Usage report to the Eco account. These are used to synchronize the Cost & Usage report and are required for the system to work. Do not remove these lines from the policy.

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

### IAM Role

This role and the corresponding permissions are issued to the Eco production and DR accounts.

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
                "arn:aws:iam::393649089167:root",
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

## What's New?

Learn how to [Create an Eco Policy with CloudFormation](eco/tutorials/eco-policy/create-eco-policy-with-cloudformation).
