# Spot Policy in AWS

The latest Spot policy in AWS appears below.

- You can find and modify your Spot Policy in the [AWS IAM Console](https://console.aws.amazon.com/iam/home#/policies).
- You can [restrict your Spot Policy](elastigroup/tutorials/elastigroup-tasks/restrict-your-spot-iam-policy) using custom AWS IAM Condition Statements.
- Ensure that your policy is always up to date with the latest JSON.

Spot creates two kinds of policies while onboarding your cloud accounts:  

1. Spot Policy: the permissions taken for this policy are listed below. For additional information, see: [Update the Spot Policy](elastigroup/tutorials/elastigroup-tasks/update-spot-policy).
2. [SecurityAudit Policy](https://docs.aws.amazon.com/aws-managed-policy/latest/reference/SecurityAudit.html). SecurityAudit is an AWS managed policy that grants access to read security configuration metadata. This policy is used by Spot with no deviation from the standard AWS Managed Policy. 

```json
{ 
  "Version": "2012-10-17", 
  "Statement": [ 
    { 
      "Sid": "OpsWorks", 
      "Action": [ 
        "opsworks:DeregisterInstance", 
        "opsworks:DescribeInstances", 
        "opsworks:DescribeLayers", 
        "opsworks:DescribeStacks" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "OverviewDashboard", 
      "Action": [ 
        "application-autoscaling:Describe*", 
        "autoscaling:Describe*", 
        "batch:Describe*", 
        "batch:List*", 
        "codedeploy:BatchGetDeployments", 
        "codedeploy:List*", 
        "ec2:Describe*", 
        "ec2:DescribeVolumesModifications", 
        "ecs:Describe*", 
        "ecs:List*", 
        "eks:ListClusters", 
        "elasticbeanstalk:Describe*", 
        "elasticfilesystem:DescribeFileSystems", 
        "elasticfilesystem:DescribeMountTargets", 
        "elasticloadbalancing:Describe*", 
        "elasticmapreduce:Describe*", 
        "elasticmapreduce:List*", 
        "iam:ListAccountAliases", 
        "lambda:ListFunctions", 
        "s3:GetBucketLocation", 
        "s3:List*", 
        "savingsplans:Describe*", 
        "savingsplans:List*" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "OceanEks", 
      "Action": [ 
        "eks:DescribeNodegroup", 
        "eks:ListClusters", 
        "eks:ListNodegroups" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "OceanAndElastigroupBasicActions", 
      "Action": [ 
        "application-autoscaling:Describe*", 
        "application-autoscaling:PutScalingPolicy", 
        "application-autoscaling:RegisterScalableTarget", 
        "autoscaling:*", 
        "autoscaling:Describe*", 
        "ce:getCostAndUsage", 
        "ce:getTags", 
        "cloudwatch:DescribeAlarmHistory", 
        "cloudwatch:DescribeAlarms", 
        "cloudwatch:DescribeAlarmsForMetric", 
        "cloudwatch:GetMetricData", 
        "cloudwatch:GetMetricStatistics", 
        "cloudwatch:ListMetrics", 
        "cloudwatch:PutMetricAlarm", 
        "cloudwatch:PutMetricData", 
        "ec2:AssociateAddress", 
        "ec2:AttachVolume", 
        "ec2:CancelReservedInstancesListing", 
        "ec2:CancelSpotInstanceRequests", 
        "ec2:ConfirmProductInstance", 
        "ec2:CopySnapshot", 
        "ec2:CreateImage", 
        "ec2:CreateReservedInstancesListing", 
        "ec2:CreateSnapshot", 
        "ec2:CreateTags", 
        "ec2:CreateVolume", 
        "ec2:DeleteNetworkInterface", 
        "ec2:DeleteSnapshot", 
        "ec2:DeleteTags", 
        "ec2:DeleteVolume", 
        "ec2:DeregisterImage", 
        "ec2:DetachVolume", 
        "ec2:DisassociateAddress", 
        "ec2:ModifyImageAttribute", 
        "ec2:ModifyInstanceAttribute", 
        "ec2:ModifyNetworkInterfaceAttribute", 
        "ec2:ModifyReservedInstances", 
        "ec2:MonitorInstances", 
        "ec2:RebootInstances", 
        "ec2:RegisterImage", 
        "ec2:RequestSpotInstances", 
        "ec2:RunInstances", 
        "ec2:StartInstances", 
        "ec2:StopInstances", 
        "ec2:TerminateInstances", 
        "ec2:UnassignPrivateIpAddresses", 
        "ecs:Describe*", 
        "ecs:List*", 
        "elasticloadbalancing:AddTags", 
        "elasticloadbalancing:CreateTargetGroup", 
        "elasticloadbalancing:DeleteTargetGroup", 
        "elasticloadbalancing:Deregister*", 
        "elasticloadbalancing:Describe*", 
        "elasticloadbalancing:DescribeTags", 
        "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer", 
        "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer", 
        "elasticloadbalancing:ModifyListener", 
        "elasticloadbalancing:ModifyRule", 
        "elasticloadbalancing:ModifyTargetGroup", 
        "elasticloadbalancing:ModifyTargetGroupAttributes", 
        "elasticloadbalancing:Register*", 
        "elasticloadbalancing:RegisterTargets", 
        "elasticloadbalancing:RemoveTags", 
        "savingsplans:Describe*" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupRoute53", 
      "Action": [ 
        "ec2:AttachVolume", 
        "route53:ChangeResourceRecordSets", 
        "route53:ListHostedZones", 
        "route53:ListResourceRecordSets" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupBatch", 
      "Action": [ 
        "batch:Describe*", 
        "batch:List*" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupStateful", 
      "Action": [ 
        "ec2:CopyImage", 
        "ec2:CopySnapshot", 
        "ec2:CreateImage", 
        "ec2:CreateSnapshot", 
        "ec2:DeleteNetworkInterface", 
        "ec2:DeleteSnapshot", 
        "ec2:DisassociateAddress", 
        "ec2:ModifyImageAttribute", 
        "ec2:ModifyNetworkInterfaceAttribute", 
        "ec2:RegisterImage", 
        "ec2:UnassignPrivateIpAddresses", 
        "elasticbeanstalk:ListTagsForResource" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupBeanstalk", 
      "Action": [ 
        "cloudformation:DescribeStackEvents", 
        "cloudformation:DescribeStackResource", 
        "cloudformation:DescribeStackResources", 
        "cloudformation:DescribeStacks", 
        "cloudformation:GetTemplate", 
        "cloudformation:ListStackResources", 
        "cloudformation:UpdateStack", 
        "elasticbeanstalk:Describe*", 
        "elasticbeanstalk:ListPlatformVersions", 
        "elasticbeanstalk:ListTagsForResource", 
        "elasticbeanstalk:RequestEnvironmentInfo", 
        "elasticbeanstalk:RetrieveEnvironmentInfo", 
        "elasticbeanstalk:UpdateEnvironment", 
        "elasticbeanstalk:ValidateConfigurationSettings", 
        "iam:ListPolicies", 
        "logs:PutRetentionPolicy", 
        "logs:createLogGroup" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupEmr", 
      "Action": [ 
        "elasticmapreduce:*", 
        "elasticmapreduce:List*", 
        "iam:ListPolicies" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "SpotStorage", 
      "Action": [ 
        "ec2:CreateTags", 
        "ec2:CreateVolume", 
        "ec2:ModifyVolume", 
        "elasticfilesystem:DeleteFileSystem", 
        "elasticfilesystem:DeleteMountTarget", 
        "elasticfilesystem:DescribeFileSystems", 
        "elasticfilesystem:DescribeMountTargets" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "AccountOperativeActions", 
      "Action": [ 
        "iam:AddRoleToInstanceProfile", 
        "iam:CreateServiceLinkedRole", 
        "iam:GetInstanceProfile", 
        "iam:GetPolicy", 
        "iam:GetPolicyVersion", 
        "iam:GetRolePolicy", 
        "iam:ListAccountAliases", 
        "iam:ListAttachedRolePolicies", 
        "iam:ListInstanceProfiles", 
        "iam:ListInstanceProfilesForRole", 
        "iam:ListPolicies", 
        "iam:ListRolePolicies", 
        "iam:ListRoles", 
        "iam:PassRole", 
        "iam:PutRolePolicy", 
        "iam:SimulatePrincipalPolicy", 
        "lambda:ListFunctions", 
        "logs:PutRetentionPolicy", 
        "logs:createLogGroup", 
        "organizations:ListAccounts", 
        "pricing:GetProducts", 
        "s3:GetBucketLocation", 
        "s3:GetObject", 
        "s3:List*", 
        "savingsplans:List*", 
        "sns:CreateTopic", 
        "sns:GetTopicAttributes", 
        "sns:ListSubscriptionsByTopic", 
        "sns:ListTopics", 
        "sns:Publish", 
        "sns:Subscribe" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "OceanEcs", 
      "Action": [ 
        "ecs:CreateService", 
        "ecs:DeregisterContainerInstance", 
        "ecs:DescribeContainerInstances", 
        "ecs:DiscoverPollEndpoint", 
        "ecs:Poll", 
        "ecs:RegisterContainerInstance", 
        "ecs:RegisterTaskDefinition", 
        "ecs:StartTask", 
        "ecs:StartTelemetrySession", 
        "ecs:StopTask", 
        "ecs:SubmitContainerStateChange", 
        "ecs:SubmitTaskStateChange", 
        "ecs:UpdateContainerInstancesState", 
        "ecs:putAttributes" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "ElastigroupCodeDeploy", 
      "Action": [ 
        "codedeploy:*" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "*" 
      ] 
    }, 
    { 
      "Sid": "AccesS3forElasticBeanstalk", 
      "Action": [ 
        "s3:*" 
      ], 
      "Effect": "Allow", 
      "Resource": [ 
        "arn:aws:s3:::elasticbeanstalk*" 
      ] 
    } 
  ] 
} 
```
