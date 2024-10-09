# Cost Intelligence Policy 

Cost Intelligence collects information on various services and metrics in the AWS and Azure infrastructures. It provides reporting and analysis capabilities and is regularly updated to include new services and metrics.  

## Cost Intelligence AWS Policy 

The Cost Intelligence policy contains permissions from the [AWS read only access policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/ReadOnlyAccess.html). There are fewer actions as some of the actions from the read only permissions aren't required for Cost Intelligence.

 <details>
   <summary markdown="span">View Cost Intelligence policy</summary>

   <pre><code>
{
  "Statement": [
    {
      "Action": [
        "access-analyzer:List*",
        "acm:DescribeCertificate",
        "acm:GetCertificate",
        "acm:ListCertificates",
        "autoscaling:Describe*",
        "cloudformation:DescribeStacks",
        "cloudformation:GetStackPolicy",
        "cloudformation:GetTemplate",
        "cloudformation:ListStackResources",
        "cloudformation:ListStacks",
        "cloudfront:GetDistributionConfig",
        "cloudfront:GetStreamingDistributionConfig",
        "cloudfront:List*",
        "cloudhsm:Describe*",
        "cloudhsm:List*",
        "cloudsearch:Describe*",
        "cloudtrail:DescribeTrails",
        "cloudtrail:GetEventSelectors",
        "cloudtrail:GetTrailStatus",
        "cloudwatch:DescribeAlarms",
        "cloudwatch:GetMetricData",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:ListMetrics",
        "cognito-identity:ListIdentities",
        "cognito-identity:ListIdentityPools",
        "cognito-idp:List*",
        "config:Describe*",
        "config:GetComplianceDetailsByConfigRule",
        "datapipeline:DescribePipelines",
        "datapipeline:GetPipelineDefinition",
        "datapipeline:ListPipelines",
        "directconnect:Describe*",
        "dynamodb:DescribeTable",
        "dynamodb:ListTables",
        "dynamodb:ListTagsOfResource",
        "ec2:Describe*",
        "ec2:GetConsoleOutput",
        "ec2:GetEbsEncryptionByDefault",
        "ecs:DescribeClusters",
        "ecs:DescribeContainerInstances",
        "ecs:DescribeServices",
        "ecs:DescribeTaskDefinition",
        "ecs:DescribeTasks",
        "ecs:ListClusters",
        "ecs:ListContainerInstances",
        "ecs:ListServices",
        "ecs:ListTaskDefinitionFamilies",
        "ecs:ListTaskDefinitions",
        "ecs:ListTasks",
        "elasticache:Describe*",
        "elasticache:List*",
        "elasticbeanstalk:Describe*",
        "elasticbeanstalk:List*",
        "elasticfilesystem:DescribeFileSystems",
        "elasticfilesystem:DescribeTags",
        "elasticloadbalancing:Describe*",
        "elasticmapreduce:Describe*",
        "elasticmapreduce:List*",
        "es:DescribeElasticsearchDomains",
        "es:ListDomainNames",
        "es:ListTags",
        "glacier:DescribeJob",
        "glacier:DescribeVault",
        "glacier:GetJobOutput",
        "glacier:GetVaultNotifications",
        "glacier:List*",
        "iam:GenerateCredentialReport",
        "iam:Get*",
        "iam:List*",
        "iam:SimulatePrincipalPolicy",
        "iot:DescribeThing",
        "iot:ListThings",
        "kinesis:DescribeStream",
        "kinesis:GetShardIterator",
        "kinesis:ListStreams",
        "kinesis:ListTagsForStream",
        "kms:DescribeKey",
        "kms:GetKeyRotationStatus",
        "kms:ListAliases",
        "kms:ListGrants",
        "kms:ListKeyPolicies",
        "kms:ListKeys",
        "kms:ListResourceTags",
        "lambda:ListFunctions",
        "lambda:ListTags",
        "organizations:Describe*",
        "organizations:List*",
        "rds:Describe*",
        "rds:List*",
        "redshift:Describe*",
        "route53:ListHealthChecks",
        "route53:ListHostedZones",
        "route53:ListResourceRecordSets",
        "s3:GetBucketACL",
        "s3:GetBucketLocation",
        "s3:GetBucketLogging",
        "s3:GetBucketNotification",
        "s3:GetBucketPolicy",
        "s3:GetBucketPublicAccessBlock",
        "s3:GetBucketTagging",
        "s3:GetBucketVersioning",
        "s3:GetBucketWebsite",
        "s3:GetEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "s3:List*",
        "sdb:DomainMetadata",
        "sdb:ListDomains",
        "ses:GetIdentityDkimAttributes",
        "ses:GetIdentityVerificationAttributes",
        "ses:GetSendQuota",
        "ses:GetSendStatistics",
        "ses:ListIdentities",
        "sns:GetSubscriptionAttributes",
        "sns:GetTopicAttributes",
        "sns:ListSubscriptionsByTopic",
        "sns:ListTopics",
        "sqs:GetQueueAttributes",
        "sqs:ListQueues",
        "ssm:ListResourceDataSync",
        "storagegateway:Describe*",
        "storagegateway:List*",
        "support:*",
        "swf:List*",
        "trustedadvisor:Describe*",
        "wellarchitected:Get*",
        "wellarchitected:List*",
        "workspaces:DescribeWorkspaceBundles",
        "workspaces:DescribeWorkspaceDirectories",
        "workspaces:DescribeWorkspaces"
      ],
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Action": [
        "s3:GetObjectVersion",
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::elasticbeanstalk-env-resources-*/*"
    }
  ],
  "Version": "2012-10-17"
}
</code></pre>

 </details>

## Security Essentials AWS Policy (Optional)

The Security Essentials AWS policy can be added using the cloud formation template.

 <details>
   <summary markdown="span">View Security Essentials AWS policy</summary>

<pre><code>
{
  "Statement": [
    {
      "Action": [
        "s3:GetObject",
        "s3:List*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Sid": "S3AccessForCloudTrail"
    }
  ],
  "Version": "2012-10-17"
}
</code></pre>

 </details>


## Cost Intelligence Azure Policy 

Cost Intelligence gathers information on a wide variety of services and metrics for your Azure infrastructure. Our list of supported services and metrics is constantly being updated and expanded to provide a robust, up-to-date reporting and analysis tool for our customers. Cost Intelligence’s default policy leverages the standard [Azure Reader Role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#reader) and [Blob Storage Reader Role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles/storage#storage-blob-data-reader) (optional for Security Essentials).
