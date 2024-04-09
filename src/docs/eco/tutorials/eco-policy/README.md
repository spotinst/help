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

The following are permissions that are needed for onboarding customers as noted in https://docs.spot.io/eco/getting-started/connect-your-aws-account.

```
"cloudformation:Describe*", 
"cloudformation:EstimateTemplateCost", 
"cloudformation:Get*", 
"cloudformation:List*", 
"cloudformation:ValidateTemplate", 
"cloudformation:Detect*"
```

### ElasticSearch 

The following are permissions that are needed to provide the Eco team with information about reserved instance offerings and view details of reserved ES instances.

```
"es:ListElasticsearchInstanceTypes", 
"es:DescribeReservedElasticsearchInstanceOfferings",
"es:DescribeReservedElasticsearchInstances"
```

### RDS 

The following are permissions that are needed to provide the Eco team with information about reserved DB instance details and available offerings. 
 
```
  "rds:DescribeReservedDBInstances", 
  "rds:DescribeDBInstances", 
  "rds:DescribeReservedDBInstancesOfferings", 
  "rds:ListTagsForResource"
``` 

### Redshift 

 
The following are permissions that are needed to provide the Eco team with information about all Redshift instance details and available offerings. 

```
  "redshift:DescribeReservedNodeOfferings", 
  "redshift:DescribeReservedNodes", 
  "redshift:DescribeClusters" 
```

### Elasticache 

 
The following are permissions that are needed to provide the Eco team with information about all Elasticache instance details and available offerings. 

```
  "redshift:DescribeReservedNodeOfferings", 
  "redshift:DescribeReservedNodes", 
  "redshift:DescribeClusters" 
``` 

### DynamoDB 
 
The following are permissions that are needed to provide the Eco team with information about all Dynmo instance details and available offerings. 

```
  "redshift:DescribeReservedNodeOfferings", 
  "redshift:DescribeReservedNodes", 
  "redshift:DescribeClusters" 
``` 

### EC2 

The following are permissions that are needed to provide the Eco team with information about all EC2 instance details and available offerings. 

```
      "ec2:DescribeHostReservations", 
     "ec2:DescribeReservedInstances" 
```
 
### SavingsPlans 
 
The following are permissions that are needed to provide the Eco team with information about Savings Plan details and available offerings. 

```
        "savingsplans:DescribeSavingsPlanRates", 
        "savingsplans:DescribeSavingsPlans", 
        "savingsplans:DescribeSavingsPlansOfferingRates", 
        "savingsplans:DescribeSavingsPlansOfferings", 
        "savingsplans:ListTagsForResource" 
```
 

 

### Account, Billing, Cost Explorer, Cost and Usage Report, Invoicing, Payments and Taxes 

 
The following are permissions that are needed to provide the Eco team with access to Billing, Cost Explorer, Cost and Usage Report, Invoicing, Payments and Tax Details that are used to analyze spend and determine savings. 

``` 
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
                  "cur:GetUsageReport", 
                  "cur:DescribeReportDefinitions" 
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
```

### S3 

The following permissions are required to write information from your AWS Cost & Usage report to the Eco account. These are used to synchronize the Cost & Usage report and are required for the system to work. Do not remove these lines from the policy. 

```
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

### IAM Role 

This role and the corresponding permissions are issued to the Eco production accounts. 

```json
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
``` 

