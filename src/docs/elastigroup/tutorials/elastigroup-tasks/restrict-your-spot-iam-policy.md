# Restrict your Spot IAM Policy

## Introduction

Elastigroup uses the secure Cross-Account Role to access your AWS account. The role includes a restricted list of policies, you could further limit this policy list based on the AWS Resource and apply conditions to restrict it to a specific region or VPC or based on tags.

You can find additional examples in [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html), as well as a simplified way in [Easier way to control access to AWS regions using IAM policies](https://aws.amazon.com/blogs/security/easier-way-to-control-access-to-aws-regions-using-iam-policies/).

An example for each case is shown below.

## Example 1

In case you want to restrict the policy to a specific VPC you can add the following condition:

```
{
  "Statement": [
    {
      "Sid": "ExampleForRestrictVPC",
      "Action": [
        "ec2:RequestSpotInstances"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:vpc": "arn:aws:ec2:REGION:ACCOUNTNUMBER:vpc/VPC-ID"
        }
      },
      "Effect": "Allow"
    }
  ],
  "Version": "2012-10-17"
}
```

## Example 2

Restrict the policy based on Tags:

```
{
  "Statement": [
    {
      "Sid": "ExampleForRestrictTags",
      "Action": [
        "ec2:RequestSpotInstances"
      ],
      "Resource": [
        "*"
      ],
      "Condition": {
        "ForAllValues:StringLike": {
          "aws:TagKeys": [
            "foo",
            "bar"
          ]
        }
      },
      "Effect": "Allow"
    }
  ],
  "Version": "2012-10-17"
}

```

## Example 3

Restrict the policy to a specific Region:

```
{
  "Statement": [
    {
      "Sid": "ExampleForRestrictRegion",
      "Action": [
        "ec2:RequestSpotInstances"
      ],
      "Resource": [
        "*"
      ],
     "Condition": {
        "StringEquals": {
          "ec2:Region": "us-west-1"
        }
      },
      "Effect": "Allow"
    }
  ],
  "Version": "2012-10-17"
}

```

Furthermore, you could use the above Condition statements to restrict a specific AWS resource as shown below:

1. Restrict the access to the EC2 instances in the N. Virginia region:

```
{
  "Statement": [
    {
      "Sid": "GeneralSpotInstancesAccess",
      "Action": [
        "ec2:RequestSpotInstances",
        "ec2:CancelSpotInstanceRequests",
        "ec2:CreateSpotDatafeedSubscription",
        "ec2:Describe*"
         ......
         ......
         ......
         ......
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:Region": "us-east-1"
        }
      }
    }
  ],
  "Version": "2012-10-17"
}

```

2. Restrict the access to ElasticBeanstalk environments in a particular VPC:

```
{
  "Statement": [
    {
    "Sid": "GeneralAccessElaticBeanstalk",
    "Action": [
      "elasticbeanstalk:Describe*",
      "elasticbeanstalk:RequestEnvironmentInfo",
      "elasticbeanstalk:RetrieveEnvironmentInfo",
      "elasticbeanstalk:ValidateConfigurationSettings",
      "elasticbeanstalk:UpdateEnvironment",
      "cloudformation:GetTemplate",
      "cloudformation:DescribeStackResources",
      "cloudformation:DescribeStackResource",
      "cloudformation:DescribeStacks",
      "cloudformation:ListStackResources",
      "cloudformation:UpdateStack",
      "cloudformation:DescribeStackEvent",
      "cloudformation:DescribeStackEvents",
      "logs:PutRetentionPolicy",
      "logs:createLogGroup"
      ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ],
      "Condition": {
        "StringEquals": {
          "ec2:vpc": "arn:aws:ec2:REGION:ACCOUNTNUMBER:vpc/VPC-ID"
        }
      }
    }
  ],
  "Version": "2012-10-17"
}

```

## Example 4

In case you only want to check how much you can save using Spot, you could use only our Spot Analyzer, and it requires the following policies:

```
{
  "Statement": [
    {
      "Sid": "SpotAnalyzer",
      "Action": [
                "ec2:Describe*",
                "ec2:MonitorInstances",
                "elasticloadbalancing:Describe*",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:ListMetrics",
                "iam:ListRoles",
                "iam:ListAccountAliases",
                "iam:GetPolicyVersion",
                "iam:ListPolicies",
                "elasticbeanstalk:Describe*",
                "autoscaling:Describe*",
                "ecs:List*",
                "ecs:Describe*"
                ],
      "Effect": "Allow",
      "Resource": [
        "*"
      ]
      }
    ],
    "Version": "2012-10-17"
}

```

## Example 5

In case you only restrict the creation and termination of instances based on Spot tags:

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PoliciesWithRestrictions",
      "Effect": "Allow",
      "Condition": {
        "StringEquals": {
          "ec2:ResourceTag/spotinst:aws:ec2:group:createdBy": "spotinst"
        }
      },
      "Action": [
        "ec2:StartInstances",
        "ec2:TerminateInstances"
      ],
      "Resource": [
        "*"
      ]
    },
    {
      "Sid": "AllowRunInstancesWithRestrictions",
      "Effect": "Allow",
      "Action": "ec2:RunInstances",
      "Resource": "arn:aws:ec2:*:*:instance/*",
      "Condition": {
        "StringEquals": {
          "ec2:ResourceTag/spotinst:aws:ec2:group:createdBy": "spotinst"
        }
      }
    },
    {
      "Sid": "AllowRunInstances",
      "Effect": "Allow",
      "Action": "ec2:RunInstances",
      "Resource": [
        "arn:aws:ec2:*::image/*",
        "arn:aws:ec2:*::snapshot/*",
        "arn:aws:ec2:*:*:subnet/*",
        "arn:aws:ec2:*:*:network-interface/*",
        "arn:aws:ec2:*:*:security-group/*",
        "arn:aws:ec2:*:*:key-pair/*",
        "arn:aws:ec2:*:*:volume/*",
        "arn:aws:ec2:*:*:launch-template/*",
        "arn:aws:ec2:*:*:placement-group/*"
      ]
    }
  ]
}

```

You may find additional information in [AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html).
