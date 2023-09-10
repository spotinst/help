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
      "Sid": "GeneralSpotInstancesAccess",
      "Action": [
        "ec2:RequestSpotInstances",
        "ec2:CancelSpotInstanceRequests",
        "ec2:CreateSpotDatafeedSubscription",
        "ec2:Describe*",
        "ec2:AssociateAddress",
        "ec2:AttachVolume",
        "ec2:ConfirmProductInstance",
        "ec2:CopyImage",
        "ec2:CopySnapshot",
        "ec2:CreateImage",
        "ec2:CreateSnapshot",
        "ec2:CreateTags",
        "ec2:CreateVolume",
        "ec2:DeleteTags",
        "ec2:DisassociateAddress",
        "ec2:ModifyImageAttribute",
        "ec2:ModifyInstanceAttribute",
        "ec2:MonitorInstances",
        "ec2:RebootInstances",
        "ec2:RegisterImage",
        "ec2:RunInstances",
        "ec2:StartInstances",
        "ec2:StopInstances",
        "ec2:TerminateInstances",
        "ec2:UnassignPrivateIpAddresses",
        "ec2:DeregisterImage",
        "ec2:DeleteSnapshot",
        "ec2:DeleteVolume",
        "ec2:ModifyReservedInstances",
        "ec2:CreateReservedInstancesListing",
        "ec2:CancelReservedInstancesListing",
        "ec2:ModifyNetworkInterfaceAttribute",
        "ec2:DeleteNetworkInterface"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessELB",
      "Action": [
        "elasticloadbalancing:Describe*",
        "elasticloadbalancing:Deregister*",
        "elasticloadbalancing:Register*",
        "elasticloadbalancing:RemoveTags",
        "elasticloadbalancing:RegisterTargets",
        "elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer",
        "elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer",
        "elasticloadbalancing:DescribeTags",
        "elasticloadbalancing:CreateTargetGroup",
        "elasticloadbalancing:DeleteTargetGroup",
        "elasticloadbalancing:ModifyRule",
        "elasticloadbalancing:AddTags",
        "elasticloadbalancing:ModifyTargetGroupAttributes",
        "elasticloadbalancing:ModifyTargetGroup",
        "elasticloadbalancing:ModifyListener"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessCloudWatch",
      "Action": [
        "cloudwatch:DescribeAlarmHistory",
        "cloudwatch:DescribeAlarms",
        "cloudwatch:DescribeAlarmsForMetric",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:GetMetricData",
        "cloudwatch:ListMetrics",
        "cloudwatch:PutMetricData",
        "cloudwatch:PutMetricAlarm"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessSNS",
      "Action": [
        "sns:Publish",
        "sns:ListTopics",
        "sns:CreateTopic",
        "sns:GetTopicAttributes",
        "sns:ListSubscriptionsByTopic",
        "sns:Subscribe"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessIAM",
      "Action": [
        "iam:AddRoleToInstanceProfile",
        "iam:ListInstanceProfiles",
        "iam:ListInstanceProfilesForRole",
        "iam:PassRole",
        "iam:ListRoles",
        "iam:ListAccountAliases",
        "iam:GetPolicyVersion",
        "iam:ListPolicies",
        "iam:GetPolicy",
        "iam:ListAttachedRolePolicies",
        "organizations:ListAccounts",
        "iam:CreateServiceLinkedRole",
        "iam:PutRolePolicy",
        "iam:GetInstanceProfile",
        "iam:GetRolePolicy",
        "iam:ListRolePolicies",
        "iam:SimulatePrincipalPolicy"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "GeneralAccessElaticBeanstalk",
      "Action": [
        "elasticbeanstalk:Describe*",
        "elasticbeanstalk:RequestEnvironmentInfo",
        "elasticbeanstalk:RetrieveEnvironmentInfo",
        "elasticbeanstalk:ValidateConfigurationSettings",
        "elasticbeanstalk:UpdateEnvironment",
        "elasticbeanstalk:ListPlatformVersions",
        "cloudformation:GetTemplate",
        "cloudformation:DescribeStackResources",
        "cloudformation:DescribeStackResource",
        "cloudformation:DescribeStacks",
        "cloudformation:ListStackResources",
        "cloudformation:UpdateStack",
        "cloudformation:DescribeStackEvents",
        "logs:PutRetentionPolicy",
        "logs:createLogGroup",
        "elasticbeanstalk:ListTagsForResource"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessAutoScalingGroups",
      "Action": [
        "autoscaling:*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessEks",
      "Action": [
        "eks:ListClusters",
        "eks:DescribeNodegroup",
        "eks:ListNodegroups"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessEMR",
      "Action": [
        "elasticmapreduce:*",
        "s3:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessECS",
      "Action": [
        "ecs:List*",
        "ecs:Describe*",
        "ecs:DeregisterContainerInstance",
        "ecs:UpdateContainerInstancesState",
        "ecs:RegisterTaskDefinition",
        "ecs:CreateService",
        "application-autoscaling:PutScalingPolicy",
        "application-autoscaling:RegisterScalableTarget",
        "application-autoscaling:Describe*",
        "ecs:putAttributes"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessBatch",
      "Action": [
        "batch:List*",
        "batch:Describe*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessOpsWorks",
      "Action": [
        "opsworks:DeregisterInstance",
        "opsworks:DescribeInstances",
        "opsworks:DescribeStacks",
        "opsworks:DescribeLayers"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessCodeDeploy",
      "Action": [
        "codedeploy:*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessGeneralS3",
      "Action": [
        "s3:GetObject",
        "s3:List*",
        "s3:GetBucketLocation"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccessRoute53",
      "Action": [
        "route53:ListHostedZones",
        "route53:ListResourceRecordSets",
        "route53:ChangeResourceRecordSets"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AccesS3forElasticBeanstalk",
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::elasticbeanstalk*"
      ]
    },
    {
      "Sid": "DockerBasedBeanstalkEnvironments",
      "Action": [
        "ecs:Poll",
        "ecs:DiscoverPollEndpoint",
        "ecs:StartTelemetrySession",
        "ecs:StartTask",
        "ecs:StopTask",
        "ecs:DescribeContainerInstances",
        "ecs:RegisterContainerInstance",
        "ecs:DeregisterContainerInstance",
        "ecs:SubmitContainerStateChange",
        "ecs:SubmitTaskStateChange"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "ElasticFileSystem",
      "Action": [
        "elasticfilesystem:DescribeFileSystems"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "Pricing",
      "Action": [
        "pricing:GetProducts"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "SavingsPlan",
      "Action": [
        "savingsplans:Describe*",
        "savingsplans:List*"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "Lambda",
      "Action": [
        "lambda:ListFunctions"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "GeneralSpotStorageAccess",
      "Action": [
        "ec2:ModifyVolume",
        "ec2:DetachVolume",
        "ec2:DescribeVolumes",
        "ec2:DescribeVolumesModifications",
        "ec2:DescribeSnapshots",
        "elasticfilesystem:DeleteFileSystem",
        "elasticfilesystem:DescribeMountTargets",
        "elasticfilesystem:DeleteMountTarget",
        "fsx:DescribeFileSystems"
      ],
      "Effect": "Allow",
      "Resource": ["*"]
    },
    {
      "Sid": "AccessCostExplorer",
      "Action": [
        "ce:GetCostAndUsage"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
    }
  ]
}
```
