# EKS Permissions 

EKS actions require additional IAM configuration to create a cluster and access it. 

* EKS clusters need an associated service-linked EKS Role to access other AWS services. If this role does not already exist in the account, Create EKS Role provides instructions on how to create it. 
* The Target Account requires some privileges beyond PowerUserAccess to use EKS actions. Add Inline Policy to Target Account provides instructions on how to add these privileges. Using service-linked roles for Amazon EKS - Amazon EKS provides more detail on this requirement. 

## Managing Existing AWS EKS Cluster with Spot Connect 

If you want to use an existing AWS EKS cluster, you must allow one of your Spot Connect [Target Accounts] (AWS account configured) to access the Kubernetes cluster. This can be done by associating a Target Account (AWS account configured) role ARN with a list of Kubernetes groups (i.e. system:masters, system:basic-user). Please follow the instructions in [Managing users or IAM roles for your cluster - Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/add-user-role.html) to complete this process. 

## Prerequisites 

* Configure the steps below in AWS IAM to run EKS Deploy Cluster action. 
* Copy the EKS cluster IAM role ARN to configure resource in EKS Permissions. 

## Step 1: Create IAM Role with EKS – Cluster Use-case 

<img width="468" alt="eks-1" src="https://github.com/spotinst/help/assets/106514736/820fb8b9-9119-4760-a58c-a3f951ea096c">

1. By default, `AmazonEKSClusterPolicy` policy is attached to the `RoleAmazonEKSClusterPolicy` policy that is attached to the role. 

<img width="468" alt="eks-2" src="https://github.com/spotinst/help/assets/106514736/1712efc6-a758-4278-bd9b-0052ef63ec5d">

2. Add Role name. In this example, the role name is `EKS-Test-Cluster-Role`. 

<img width="468" alt="eks-3" src="https://github.com/spotinst/help/assets/106514736/494e0c49-d793-4240-93af-b12977bc006c">

3. Update permissions of `EKS-Test-Cluster-Role` IAM role to create EKS Nodegroup. 

4. Attach AmazonEKSWorkerNodePolicy, AmazonEKS_CNI_Policy, AmazonEC2ContainerRegistryReadOnly policies to EKS role. 

 

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

![eks-10](https://github.com/spotinst/help/assets/106514736/912df9b7-ce5c-45a8-8ace-59012f748715)

#### Output 

![eks-11](https://github.com/spotinst/help/assets/106514736/e7780332-2a5b-421d-bc73-b1df4b9a05a6) 

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

#### Input  

![eks-12](https://github.com/spotinst/help/assets/106514736/0aaca27f-7772-451e-8a46-c67159e2c261)

#### Output  

![eks-13](https://github.com/spotinst/help/assets/106514736/3196a1f8-d7ad-418e-b960-4d013bd52c3d)

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

![eks-14](https://github.com/spotinst/help/assets/106514736/27551bb4-68d2-4120-931e-8817e2f8ff26)

#### Output 

![eks-15](https://github.com/spotinst/help/assets/106514736/6b7e67c5-afa6-4e3c-917b-41a7c55e5efb)

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

![eks-16](https://github.com/spotinst/help/assets/106514736/2244c471-a08a-4344-9749-f5c95ce1c581)

#### Output 

![eks-17](https://github.com/spotinst/help/assets/106514736/37c6940d-ab9a-4722-9e48-0ca0282c8662)

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

<img width="1252" alt="eks-18" src="https://github.com/spotinst/help/assets/106514736/80c0833d-9c84-4e89-bb27-633f9952c5ad">

#### Output 

![eks-19](https://github.com/spotinst/help/assets/106514736/5ced44a7-d55d-4d99-8535-770ee7399965)

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

![eks-20](https://github.com/spotinst/help/assets/106514736/ad2f53d7-867c-4cd0-accf-e63d988bc915)

#### Output

![eks-21](https://github.com/spotinst/help/assets/106514736/935e1a00-0f36-4cb1-96a0-5bd2fd336208)

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

![eks-22](https://github.com/spotinst/help/assets/106514736/e9106a7b-ba2e-434f-9e08-9d3941e8c74d)

#### Output 

![eks-23](https://github.com/spotinst/help/assets/106514736/fb7595a7-5717-458a-9b73-ca448d439ae3)

EKS Get Pods Status 

This node gets the status of pods in AWS EKS cluster. 

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
|      pods_status       |     MapList  |     Status of Pods                     |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)  |
|                        |              |                                        |

#### Action Example 

#### Input 

![eks-24](https://github.com/spotinst/help/assets/106514736/da1d1793-1c0f-4036-b951-34230e0e4ce4)

#### Output 

![eks-25](https://github.com/spotinst/help/assets/106514736/b34db450-f315-4e4e-b2dd-caf2b0ceb966)

EKS Fetch Dead Pods 

This node gets the dead pods from EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      namespace     |     Namespace in EKS cluster                                    |     False      |
|      region_name   |     AWS Region Name                                             |     False      |

#### Output 

|       Parameter        |         Type    |                 Description            |
|------------------------|:---------------:|:--------------------------------------:|
|      count             |     Integer     |     Count of dead pods                 |
|      cluster_name      |     String      |     Name of the AWS EKS cluster        |
|      pod_names         |     StringList  |     Status of Pods                     |
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

![eks-26](https://github.com/spotinst/help/assets/106514736/d865129d-03db-4f7a-9226-5afd71249bf8)

#### Output 

![eks-27](https://github.com/spotinst/help/assets/106514736/87b63c9e-73e0-4b82-97a8-52c215006f36)

EKS Execute 

This node executes the Kubernetes methods for these endpoints https://github.com/kubernetes-client/python/blob/master/kubernetes/README.md  

#### Input 

|       Parameter       |                             Description                         |      Required  |
|-----------------------|:---------------------------------------------------------------:|:--------------:|
|      alias            |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name     |     EKS Cluster name                                            |     True       |
|      function         |                                                                 |                |
|      payload          |                                                                 |                |
|      output_selector  |                                                                 |                |
|      region_name      |     Namespace in EKS cluster                                    |     False      |
|      raw_output       |     AWS Region Name                                             |     False      |

#### Output 

|       Parameter        |         Type    |                 Description            |
|------------------------|:---------------:|:--------------------------------------:|
|      output            |     List        |     List of resources created          |
|      cluster_name      |     String      |     Name of the AWS EKS cluster        |
|      raw_output        |     StringList  |     Output of K8s executed method      |
|      execution_status  |     String      |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

![eks-28](https://github.com/spotinst/help/assets/106514736/ded8eff9-1634-42a5-bc02-8af2011e3ba5)

#### Output 

![eks-29](https://github.com/spotinst/help/assets/106514736/0e21eaa3-8daa-4331-8865-0fed5a1703b1)

EKS Copy Pod Logs 

This node copies logs of Pod to AWS S3 bucket. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      pod_names     |     List of pod names to fetch logs                             |     True       |
|      bucket_name   |     AWS S3 bucket to store pod logs                             |     True       |
|      region_name   |     AWS Region of EKS cluster and S3 bucket                     |     False      |
|      namespace     |     Namespace in EKS cluster                                    |     False      |

#### Output 

|       Parameter        |       Type  |                      Description                 |
|------------------------|:-----------:|:------------------------------------------------:|
|      cluster_name      |     String  |     Name of the AWS EKS cluster                  |
|      bucket_keys       |     String  |     AWS S3 Bucket key where Pod logs are stored  |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)            |

#### Action Example 

#### Input 

![eks-30](https://github.com/spotinst/help/assets/106514736/dc6d28a2-eff5-4bea-9b61-7808105f56d0)

#### Output 

![eks-31](https://github.com/spotinst/help/assets/106514736/137fb8f0-8765-466d-b565-32b288da6533)

EKS Deploy Cluster 

This node creates an AWS EKS cluster in a selected AWS region. 

#### Input 

|       Parameter          |                                      Description                                 |      Required  |
|--------------------------|:--------------------------------------------------------------------------------:|:--------------:|
|      eks_alias           |     EKS Permissions Resource Alias                                               |     True       |
|      alias               |     AWS target account for deploying the EKS cluster                             |     True       |
|      role_arn            |     IAM Role ARN to be used for the EKS cluster                                  |     True       |
|      cluster_name        |     EKS cluster name                                                             |     True       |
|      region_name         |     AWS region name                                                              |     True       |
|      availability_zones  |     AWS Availability Zones for creating subnets                                  |     False      |
|      kubernetes_version  |     Kubernetes Version to use for the cluster (default = latest)                 |     False      |
|      security_group_ids  |     List of strings each containing a security group Id                          |     False      |
|      security_groups     |     Security groups to be used for worker nodes and control plane communication  |     False      |
|      subnet_ids          |     Existing Subnet Ids to be used                                               |     False      |
|      subnet_cidrs        |     List of Subnet CIDRs for creating subnets                                    |     False      |
|      vpc_id              |     Existing VPC Id to be used                                                   |     False      |
|      vpc_cidr            |     CIDR to be used if creating a VPC                                            |     False      |

#### Output 

|      cluster_name               |     String      |     Name of the AWS EKS cluster                  |
|---------------------------------|-----------------|--------------------------------------------------|
|      cluster_status             |     String      |     AWS S3 Bucket key where Pod logs are stored  |
|      cluster_security_group_id  |     String      |     Status of run (ie: S_OK / E_FAIL)            |
|      kubernetes_version         |     String      |     The deployed K8s version                     |
|      security_group_ids         |     StringList  |     Ids of security groups                       |
|      subnet_ids                 |     StringList  |     Ids of subnets                               |
|      vpc_id                     |     String      |     Id of VPC                                    |
|      execution_status           |     String      |     Status of run (ie: S_OK / E_FAIL)            |

#### Action Example 

#### Input 

![eks-32](https://github.com/spotinst/help/assets/106514736/fd44f692-8711-4346-a28b-91522c47d0f4)

#### Output 

![eks-33](https://github.com/spotinst/help/assets/106514736/1e6b4711-fd33-4c01-8d04-e72dc5e7b9ae)

EKS Delete Pods 

The pods to be deleted from AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      namespace     |     Namespace in EKS cluster                                    |     True       |
|      pod_name      |     name for the pod to be deleted                              |     False      |
|      label         |     label filter for selecting specific pods                    |     False      |
|      region_name   |     AWS Region Name                                             |     False      |

#### Output 

|       Parameter        |       Type  |                 Description            |
|------------------------|:-----------:|:--------------------------------------:|
|      cluster_name      |     String  |     Name of the AWS EKS cluster        |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)  |

#### Action Example 

#### Input 

![eks-34](https://github.com/spotinst/help/assets/106514736/77637e53-59bf-49a4-adaa-fcaa20b62848)

#### Output 

![eks-35](https://github.com/spotinst/help/assets/106514736/975e73dd-34d4-4f58-9fe9-ef7a25901f89)

EKS Check Nodes CPU Memory Usage 

This node fetches the CPU and Memory usage of worker nodes in AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      region_name   |     AWS Region Name                                             |     False      |


#### Output 

|       Parameter        |       Type   |                     Description                 |
|------------------------|:------------:|:-----------------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster                 |
|      nodes             |     MapList  |     List of pods with its CPU and Memory usage  |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)           |

#### Action Example 

#### Input 

![eks-36](https://github.com/spotinst/help/assets/106514736/ee90ded3-d5f0-44f6-806a-a43f100b1b12)

#### Output  

![eks-37](https://github.com/spotinst/help/assets/106514736/b11c6483-5056-4164-8819-9f944963d51e)

EKS Check Pods CPU Memory Usage 

This node fetches the CPU and Memory usage of pods in AWS EKS cluster. 

#### Input 

|       Parameter    |                             Description                         |      Required  |
|--------------------|:---------------------------------------------------------------:|:--------------:|
|      alias         |     AWS target account for running the CloudFormation template  |     True       |
|      cluster_name  |     EKS Cluster name                                            |     True       |
|      region_name   |     AWS Region Name                                             |     False      |
|      namespace     |     Namespace to fetch Pods                                     |     False      |


#### Output 

|       Parameter        |       Type   |                     Description                 |
|------------------------|:------------:|:-----------------------------------------------:|
|      cluster_name      |     String   |     Name of the AWS EKS cluster                 |
|      pods              |     MapList  |     List of pods with its CPU and Memory usage  |
|      execution_status  |     String   |     Status of run (ie: S_OK / E_FAIL)           | 

#### Action Example 

#### Input 

![eks-38](https://github.com/spotinst/help/assets/106514736/29418eab-2449-4784-a159-5c67fcea043b)

#### Output 

![eks-39](https://github.com/spotinst/help/assets/106514736/e2ddc78b-630b-4919-a399-0fa7b83b6805)
