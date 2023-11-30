# EKS Permissions 

EKS actions require additional IAM configuration to create a cluster and access it. 

EKS clusters need an associated service-linked EKS Role to access other AWS services. If this role does not already exist in the account, Create EKS Role provides instructions on how to create it. 

The Target Account requires some privileges beyond PowerUserAccess to use EKS actions. Add Inline Policy to Target Account provides instructions on how to add these privileges. Using service-linked roles for Amazon EKS - Amazon EKS provides more detail on this requirement. 

Managing Existing AWS EKS Cluster with Spot Connect 

If you want to use an existing AWS EKS cluster, you must allow one of your Spot Connect Target Accounts (AWS account configured) to access the Kubernetes cluster. This can be done by associating a Target Account (AWS account configured) role ARN with a list of Kubernetes groups (i.e. system:masters, system:basic-user). Please follow the instructions in Managing users or IAM roles for your cluster - Amazon EKS to complete this process. 

Prerequisites 

Configure the steps below in AWS IAM to run EKS Deploy Cluster action. 

Copy the EKS cluster IAM role ARN to configure resource in EKS Permissions. 

Step 1: Create IAM Role with EKS – Cluster Use-case. 

 

By default, `AmazonEKSClusterPolicy` policy is attached to `RoleAmazonEKSClusterPolicy` policy is attached to the role. 

 

Add Role name. In this example, the role name is `EKS-Test-Cluster-Role`. 

 

Update permissions of `EKS-Test-Cluster-Role` IAM role to create EKS Nodegroup. 

Attach AmazonEKSWorkerNodePolicy, AmazonEKS_CNI_Policy, AmazonEC2ContainerRegistryReadOnly policies to EKS role. 

 

In the Edit Trust Policy panel, run the following command to update trust relationship to include Cloud Compute Capacity - Amazon EC2 - AWS service.  

        { 

            "Effect": "Allow", 

            "Principal": { 

                "Service": "ec2.amazonaws.com" 

            }, 

            "Action": "sts:AssumeRole" 

        } 

Step 2: Update Target Account Role with Inline Policy 

In the Specify Permissions panel, click JSON on the top right and run the policy below with previously created IAM `EKS-Test-Cluster-Role` role ARN.  

{ 

    "Version": "2012-10-17", 

    "Statement": [ 

        { 

            "Effect": "Allow", 

            "Action": [ 

                "iam:GetRole", 

                "iam:PassRole", 

                "iam:ListAttachedRolePolicies" 

            ], 

            "Resource": "arn:aws:iam::948274114318:role/EKS-Test-Cluster-Role" 

        } 

    ] 

} 

 

 

 

Provide a name for Inline policy and click Create Policy. 

 

 

Step 3: Create IAM role with EKS – Nodegroup Use-case 

In the Trusted entity type window, select ASW service and then EKS- Nodegroup.  

 

 

 

 

Step 4: Update Target Account Role with Inline Policy 

In the Specify Permissions panel, click JSON in the top right and run the policy below with the IAM that was previously created: `AWSServiceRoleForAmazonEKSNodegroup` role ARN. 

 

{ 

	"Version": "2012-10-17", 

	"Statement": [ 

		{ 

			"Effect": "Allow", 

			"Action": [ 

				"iam:GetRole", 

				"iam:PassRole" 

			], 

			"Resource": "arn:aws:iam::948274114318:role/aws-service-role/eks-nodegroup.amazonaws.com/AWSServiceRoleForAmazonEKSNodegroup" 

		} 

	] 

} 

 

Click Next. 

 

Provide a name for the Inline policy and click Create Policy. 

 

 

  

Configure the Resource 

In the left main menu, click Connect and click Settings.  

Under the Resources tab, select EKS Permissions.  

Click Add Resource to create a new resource instance. 

 

Details needed to provide EKS Permissions to SpotConnect: 

Parameter 

Description 

Required 

Resource Alias 

Alias for EKS permissions resource instance 

True 

Target Account 

AWS Target account for the EKS cluster role 

True 

Cluster Role ARN 

IAM Role ARN to be used for the EKS cluster 

True 

Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* EKS Kubectl Run command 
* EKS Get Namespaces 
* EKS Get Deployments Name Only 
* EKS Get Nodes 
* EKS Get Pods 
* EKS Get Running Pods 
* EKS Get Not Running Pods 
* EKS Get Pods Status 
* EKS Fetch Dead Pods 
* EKS Execute 
* EKS Copy Pod Logs 
* EKS Deploy Cluster 
* EKS Delete Pods 
* EKS Check Nodes CPU Memory Usage 
* EKS Check Pods CPU Memory Usage 

### EKS Kubectl Run Command 

This node runs a `kubectl` command on an AWS EKS cluster. 

#### Input 

|       Parameter    |                                     Description                                |      Required  |
|--------------------|:------------------------------------------------------------------------------:|:--------------:|
|      alias         |     Target account alias to be used to perform EKS Kubectl Run command action  |     True       |
|      region_name   |     AWS region name                                                            |     True       |
|      cluster_name  |     EKS Cluster name                                                           |     True       |
|      arguments     |     Command Line Arguments to pass to kubectl                                  |     True       |
|      log_bucket    |     S3 bucket for storing output from the command                              |     False      |

#### Output 

|       Parameter        |         Type    |                          Description                     |
|------------------------|:---------------:|:--------------------------------------------------------:|
|      output_str        |     StringList  |     IDs of filtered resources                            |
|      output_json       |     Object      |     The output of kubectl operation                      |
|      log_bucket        |     String      |     S3 bucket where the output of the command is stored  |
|      log_key           |     String      |     S3 object where the output of the command is stored  |
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)                    |

#### Action Example 

#### Input  

 

#### Output 

 

  

EKS Get Namespaces 

This node gets details of namespaces in AWS EKS cluster. 

#### Input 

|       Parameter    |                                  Description                              |      Required  |
|--------------------|:-------------------------------------------------------------------------:|:--------------:|
|      alias         |     Target account alias to be used to perform EKS Get Namespaces action  |     True       |
|      cluster_name  |     EKS Cluster name                                                      |     True       |
|      namespace     |     Namespace in EKS cluster                                              |     True       |
|      region_name   |     AWS Region Name                                                       |     True       |
|                    |                                                                           |                |

#### Output 

|       Parameter        |       Type   |                     Description                |
|------------------------|:------------:|:----------------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster                |
|      namespaces        |     MapList  |     Details of AWS EKS namespaces              |
|      count             |     Integer  |     The count of returned AWS EKS namespaces   |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)          |
|                        |              |                                                |

#### Action Example 

#### Input -  

 

#### Output -  

 

  

EKS Get Deployments Name Only 

This node fetches the list of deployments in an AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      region_name   |     AWS Region Name                                             |     False      |
|      namespace     |     Namespace in EKS cluster                                    |     False      | 

#### Output 

|       Parameter        |       Type   |                 Description             |
|------------------------|:------------:|:---------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster         |
|      deployment_names  |     String   |     Details of deployments              |
|      count             |     Integer  |     The count of returned deployments   |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)   |

#### Action Example 

#### Input  

 

#### Output 

 

  

EKS Get Nodes 

This node gets the details of nodes for AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      node          |     AWS Region Name                                             |     False      |
|      region_name   |     Namespace in EKS cluster                                    |     False      |

#### Output 

|       Parameter        |       Type   |                 Description            |
|------------------------|:------------:|:--------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster        |
|      nodes             |     String   |     Details of nodes                   |
|      count             |     Integer  |     The count of returned nodes        |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

 

#### Output 

 

  

EKS Get Pods 

This node gets the details of pods for AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      region_name   |     AWS Region Name                                             |     False      |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|      pod_name      |     Pod name to filter                                          |     False      | 

#### Output 

|       Parameter        |       Type   |                 Description            |
|------------------------|:------------:|:--------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster        |
|      pods              |     String   |     Details of pods                    |
|      count             |     Integer  |     The count of returned nodes        |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |
|                        |              |                                        |

#### Action Example 

#### Input 

 

#### Output 

 

  

EKS Get Running Pods 

This node gets the details of pods in running state for AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      region_name   |     AWS Region Name                                             |     False      |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|                    |                                                                 |                | 

#### Output 

|       Parameter        |       Type   |                 Description            |
|------------------------|:------------:|:--------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster        |
|      pods              |     String   |     Details of pods                    |
|      count             |     Integer  |     The count of returned nodes        |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|      region_name   |     AWS Region Name                                             |     False      | 

#### Output 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|      region_name   |     AWS Region Name                                             |     False      | 

EKS Get Not Running Pods 

This node gets the details of pods that are not in running state for AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|      region_name   |     AWS Region Name                                             |     False      |

#### Output 

|       Parameter        |       Type   |                 Description            |
|------------------------|:------------:|:--------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster        |
|      pod_names         |     String   |     Name of Pods not in running state  |
|      count             |     Integer  |     The count of returned nodes        |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

 

#### Output 

 

  

EKS Get Pods Status 

This node gets the status of pods in AWS EKS cluster. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

namespace 

Namespace in EKS cluster 

False 

region_name 

AWS Region Name 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

pods_status 

MapList 

Status of Pods 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

#### Output 

 

EKS Fetch Dead Pods 

This node gets the dead pods from EKS cluster. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

namespace 

Namespace in EKS cluster 

False 

region_name 

AWS Region Name 

False 

#### Output 

Parameter 

Type 

Description 

count 

Integer 

Count of dead pods 

cluster_name 

String 

Name of the AWS EKS cluster 

pod_names 

StringList 

Status of Pods 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

#### Output 

 

EKS Execute 

This node executes the Kubernetes methods for these endpoints https://github.com/kubernetes-client/python/blob/master/kubernetes/README.md  

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

function 

  

  

payload 

  

  

output_selector 

  

  

region_name 

Namespace in EKS cluster 

False 

raw_output 

AWS Region Name 

False 

#### Output 

Parameter 

Type 

Description 

#### Output 

List 

List of resources created 

cluster_name 

String 

Name of the AWS EKS cluster 

raw_output 

StringList 

Output of K8s executed method 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

#### Output 

 

EKS Copy Pod Logs 

This node copies logs of Pod to AWS S3 bucket. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

pod_names 

List of pod names to fetch logs 

True 

bucket_name 

AWS S3 bucket to store pod logs 

True 

region_name 

AWS Region of EKS cluster and S3 bucket  

False 

namespace 

Namespace in EKS cluster 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

bucket_keys 

String 

AWS S3 Bucket key where Pod logs are stored 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

 

#### Output 

 

 

EKS Deploy Cluster 

This node creates an AWS EKS cluster in a selected AWS region. 

#### Input 

Parameter 

Description 

Required 

eks_alias 

EKS Permissions Resource Alias 

True 

alias 

AWS target account for deploying the EKS cluster 

True 

role_arn 

IAM Role ARN to be used for the EKS cluster 

True 

cluster_name 

EKS cluster name 

True 

region_name 

AWS region name 

True 

availability_zones 

AWS Availability Zones for creating subnets 

False 

kubernetes_version 

Kubernetes Version to use for the cluster (default = latest) 

False 

security_group_ids 

List of strings each containing a security group Id 

False 

security_groups 

Security groups to be used for worker nodes and control plane communication 

False 

subnet_ids 

Existing Subnet Ids to be used 

False 

subnet_cidrs 

List of Subnet CIDRs for creating subnets 

False 

vpc_id 

Existing VPC Id to be used 

False 

vpc_cidr 

CIDR to be used if creating a VPC 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

cluster_status 

String 

AWS S3 Bucket key where Pod logs are stored 

cluster_security_group_id 

String 

Status of run (ie: S_OK / E_FAIL) 

kubernetes_version 

String 

The deployed K8s version 

security_group_ids 

StringList 

Ids of security groups 

subnet_ids 

StringList 

Ids of subnets 

vpc_id 

String 

Id of VPC 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

 

 

#### Output 

 

 

EKS Delete Pods 

The pods to be deleted from AWS EKS cluster. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

namespace 

Namespace in EKS cluster 

True 

pod_name 

name for the pod to be deleted 

False 

label 

label filter for selecting specific pods 

False 

region_name 

AWS Region Name 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

 

#### Output 

  

 

EKS Check Nodes CPU Memory Usage 

This node fetches the CPU and Memory usage of worker nodes in AWS EKS cluster. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

region_name 

AWS Region Name 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

nodes 

MapList 

List of nodes with its CPU and Memory usage 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

 

#### Output  

 

 

EKS Check Pods CPU Memory Usage 

This node fetches the CPU and Memory usage of pods in AWS EKS cluster. 

#### Input 

Parameter 

Description 

Required 

alias 

AWS target account for running the CloudFormation template 

True 

cluster_name 

EKS Cluster name 

True 

region_name 

AWS Region Name 

False 

namespace 

Namespace to fetch Pods 

False 

#### Output 

Parameter 

Type 

Description 

cluster_name 

String 

Name of the AWS EKS cluster 

pods 

MapList 

List of pods with its CPU and Memory usage 

execution_status 

String 

Status of run (ie: S_OK / E_FAIL) 

#### Action Example 

#### Input 

 

 

#### Output 

 

 
