# Python Exec 

Python Exec enables you to check out a python-based code repo from GitHub/ Bitbucket and execute a designated script in a repo within a Docker container running on your target AWS account, in a safe and secure manner. 

Python Exec is built using the native AWS Lambda support for container images. Instead of an AWS base image for python, a standard Spot Connect base image is used to execute the desired script. You may also choose to override the Spot Connect base image with another custom-built Docker image of their choice, hosted within their AWS ECR repository. 

Python Exec provides a clean and sanitized environment, with sufficient air gap, to check out any GitHub/Bitbucket repo for repetitive tasks. The script you want to run, along with arguments (optional), may be specified as an action node parameter while building a workflow. 

Python Exec can be effectively used where you: 

* have a set of automation scripts located in a source code repository which needs to be run on a scheduled basis. 
* want to perform an operation on your target account in a safe and secure manner using Python-based scripts. 
* already have built a script with a specific functionality in mind and you want to execute this script by importing the code base during run-time and cleaning up once the job is complete.

## Configure Python Execute in Spot Connect 

Follow the configuration steps that need to be completed before using the `Python Execute` action node. 

### Configure AWS Target Account 

Follow [the instructions](https://docs.spot.io/spot-connect/integrations/aws) to configure the target AWS account where you want to execute the `Python Execute` action. 

### Configure GitHub Cloud or Bitbucket Cloud 

Follow [the instructions](https://docs.spot.io/spot-connect/integrations/git) to configure the preferred script execution account and repository on either GitHub Cloud or Bitbucket Cloud. 

### Configure Target Role IAM Permissions 

Configure your target account with necessary permissions and trust. 

**Definitions** 

|       Name                                    |                                                                                                                          Description                                                                                                                      |   |
|-----------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
|      Target AWS Account                       |     AWS Account ID of the Target Account for customer.                                                                                                                                                                                                    |   |
|      Target Account Assumed Role              |     IAM role created in Target Account during the Spot Connect onboarding process. This role gives Spot Connect permissions to operate on Target Account resources.                                                                                       |   |
|      Target Account External ID (EXTERNALID)  |     ID randomly generated for Target Account during the Spot Connect onboarding process. It is used as an external ID in the Target Account Assumed Role trust relationship. The ID can be found in Spot Connect settings screen for the Target Account.  |   |

#### IAM Role Permissions on Target Account 

1. Add AWS managed policy `AWSLambda_FullAccess` to Target Account Assumed Role. 
2. Create an inline policy in Target Account Assumed Role to pass role to the lambda service in Target Account. 
3. Use the permission `PassRoleToLambdaServiceForTargetAccount` defined below. 
4. Replace `SPOTCONNECTACCOUNT` with correct AWS account ID in line #8.

| Name                                          |                                                                                                                                                                                                                       Definition                                                                                                                                                                                                                       |                             Comment                         |
|-----------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------:|
|      PassRoleToLambdaServiceForTargetAccount  |     {      "Version": "2012-10-17",      "Statement": [          {              "Sid": "VisualEditor0",              "Effect": "Allow",              "Action": "iam:PassRole",              "Resource": "arn:aws:iam::SPOTCONNECTACCOUNT:role/*AssumeRole*",              "Condition": {                  "StringEquals": {                      "iam:PassedToService": "lambda.amazonaws.com"                  }              }          }      ]  }  |     Used to pass role to lambda service on Target Account.  |
|                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                             |
|                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                             |
|                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                             |
|                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                             |
|                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                             |

5. Create an inline policy in Target Account Assumed Role to onboard Spot user policy on the Target Account. Use the policy definition `OnboardSpotUserPolicyForTargetAccount` below.

|       Name                                  |                                                                                                                                                                                                                                                                                                                                                                                                                            Definition                                                                                                                                                                                                                                                                                                                                                                                                                       |                            Comment                       |
|---------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------:|
|      OnboardSpotUserPolicyForTargetAccount  |     {      "Version": "2012-10-17",      "Statement": [          {              "Action": [                  "s3:GetObject",                  "iam:GetRole",                  "iam:GetPolicy",                  "iam:DeletePolicy",                  "iam:CreateRole",                  "iam:DeleteRole",                  "iam:AttachRolePolicy",                  "iam:CreatePolicy",                  "iam:DetachRolePolicy",                  "iam:ListPolicyVersions",                  "iam:DeleteRolePolicy",                  "iam:UpdateRole",                  "iam:CreatePolicyVersion",                  "iam:DeletePolicyVersion",                  "cloudformation:CreateStackInstances",                  "cloudformation:CreateStackSet"              ],              "Resource": "*",              "Effect": "Allow"          }      ]  }  |     Used to onboard Spot user policy on Target Account.  |
|                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                          |
|                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                          |
|                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                          |
|                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                          |
|                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                          |

6. Create an inline policy in Target Account Assumed Role for ECR-related access for Spot Connect on the Target Account. Use the policy definition `ECR-Related-Policy-For-Spot-ConnectForTargetAccount` below. 

* If needed, the ECR Resource on line #34 can be narrowed down further by setting it to `"Resource": "arn:aws:ecr:us-west-2:SPOTCONNECTACCOUNT:repository/spot-connect-lambda/python-exec-engine"`

| Name                                                |                                                                                                                                                                                                                                                                                                                                                                              Definition                                                                                                                                                                                                                                                                                                                                                                              |                                Comment                                |
|-----------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------:|
| ECR-Related-Policy-For-Spot-ConnectForTargetAccount | { "Version": "2012-10-17", "Statement": [ { "Sid": "VisualEditor0", "Effect": "Allow", "Action": [ "ecr:DescribeImageScanFindings", "ecr:GetLifecyclePolicyPreview", "ecr:GetDownloadUrlForLayer", "ecr:DescribeImageReplicationStatus", "ecr:ListTagsForResource", "ecr:ListImages", "ecr:BatchGetRepositoryScanningConfiguration", "ecr:BatchGetImage", "ecr:DescribeImages", "ecr:DescribeRepositories", "ecr:BatchCheckLayerAvailability", "ecr:GetRepositoryPolicy", "ecr:GetLifecyclePolicy" ], "Resource": "*" }, { "Sid": "VisualEditor1", "Effect": "Allow", "Action": [ "ecr:GetRegistryPolicy", "ecr:DescribeRegistry", "ecr:DescribePullThroughCacheRules", "ecr:GetAuthorizationToken", "ecr:GetRegistryScanningConfiguration" ], "Resource": "*" } ] } | Used to allow Target Account to access Spot Connect Host Account ECR. |

#### Trust Relationships on Target Account 

Modify the `TrustRelationShipForTargetAccount` template defined below with appropriate values for `SPOTCONNECTACCOUNT and EXTERNALID. Append it to the existing list of Trust Relationships for Target Account Assumed Role. 

|       Name                              |                                                                                                                                                                                                Definition                                                                                                                                                                                           |                                        Comment                                    |
|-----------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
|      TrustRelationShipForTargetAccount  |     { "Version": "2012-10-17", "Statement": [ { "Sid": "Statement1", "Effect": "Allow", "Principal": { "AWS": "arn:aws:iam::SPOTCONNECTACCOUNT:root" }, "Action": "sts:AssumeRole", "Condition": { "StringEquals": { "sts:ExternalId": "EXTERNALID" } } }, { "Sid": "LambdaServicePolicy", "Effect": "Allow", "Principal": { "Service": "lambda.amazonaws.com" }, "Action": "sts:AssumeRole" } ] }  |     Used to establish trust relationship for Spot Connect in the Target Account.  |

### Integration Actions 

#### Python Execute 

1. Navigate to the Spot Connect workflow editor. 
2. From the left-hand side Add Actions window, search and select Python Execute node.  
3. Drag the node to the editor. 
4. Enter the mandatory arguments `Target Account Alias`,` GitHub Resource`, `Executor Script with Relative Path`. 
5. If necessary, add the optional details like `Python Script Arguments`, `Memory Size (MB)`, `Timeout (Seconds)`, `S3 Bucket`. 
6. Click **Save New Version** to save the workflow after connecting the node to the rest of the workflow appropriately.

#### Input 

|       Parameter Name                     |                                      Description                                  |      Required  |
|------------------------------------------|:---------------------------------------------------------------------------------:|:--------------:|
|      Target Account Alias                |     Select a Target account alias to be used to perform given operation           |     True       |
|      GitHub Resource                     |     GitHub resource with target repository details                                |     True       |
|      Executor Script With Relative Path  |     Path of the script to be executed from the repository root, preceded by “/”   |     True       |
|      Python Script Arguments             |     Possible input arguments for the executor script                              |     False      |
|      Memory Size (MB)                    |     Request memory in MB for lambda execution (> 128M)                            |     False      |
|      Timeout (Seconds)                   |     Reduce execution timeout in seconds if different from the default 15 minutes  |     False      |
|      S3 bucket                           |     S3 bucket for storing output                                                  |     False      |

#### Output

|       Parameter Name   |       Type  |                        Description                    |
|------------------------|:-----------:|:-----------------------------------------------------:|
|      output            |     Object  |     Output from container image                       |
|      bucket            |     String  |     S3 bucket for output if specified                 |
|      log               |     String  |     Log output from customer lambda invocation        |
|      key               |     String  |     S3 object key for output if bucket was specified  |
|      execution_status  |     String  |     Node execution status                             |

#### Action Example  

Python Execute action node with arguments.  

<img width="732" alt="python-exec" src="https://github.com/spotinst/help/assets/106514736/5504ed75-3cfc-42da-87c0-e5d650b9a356">
