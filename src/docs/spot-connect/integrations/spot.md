# Spot Integration 

The Spot by NetApp integration automates Elastigroup and Ocean operations and optimizes your cloud infrastructure. 

## Configure Spot by NetApp in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Cloud Services tab, select **Spot by NetApp**.  
3. Configure a new authorization instance with the information below. 

Details needed to set up a Spot Authorization instance in Spot Connect: 

|       Parameter                      |                                           Description                                       |      Required  |   |
|--------------------------------------|:-------------------------------------------------------------------------------------------:|:--------------:|---|
|      Integration Alias               |     A name for the integration instance                                                     |     True       |   |
|      Spot Programmatic Access Token  |     A Spot Programmatic Access Token is recommended or you may use a Personal Access Token  |     True       |   |

Follow the steps below in your Spot by NetApp account to generate Spot Programmatic Access Token.  
1. In the top right, click the user icon and click **Settings**.  
2. In the left menu, click Settings and click **API**. 
3. Click **Permanent Tokens** and on the top right, click **Generate Token**.

<img width="433" alt="spot-int-1" src="https://github.com/spotinst/help/assets/106514736/d155c0ce-c6ec-4690-b64f-881993e85e9c">

4. Select Programmatic User to generate a new permanent access token. 
5. Enter a Token name and click **Generate**.

## Integration Actions  

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Spot Elastigroup AWS](spot-connect/integrations/spot?id=spot-elastigroup-aws) 
* [Spot Ocean AWS](spot-connect/integrations/spot?id=spot-ocean-aws) 
* [Spot Elastigroup Detach Instance](spot-connect/integrations/spot?id=spot-elastigroup-detach-instance) 
* [Spot AWS Update Stateful Instance](spot-connect/integrations/spot?id=spot-aws-update-stateful-instance) 
* [Spot Remove Idle GitHub Runner](spot-connect/integrations/spot?id=spot-remove-idle-github-runner) 
* [Spot Ocean Cluster Copy VNG](spot-connect/integrations/spot?id=spot-ocean-cluster-copy-vng) 
* [Spot Ocean Cost Analyzer](spot-connect/integrations/spot?id=spot-ocean-cost-analyzer) 
* [Spot Ocean Rightsizing k8s Resources](spot-connect/integrations/spot?id=spot-ocean-rightsizing-k8s-resources) 

### Spot Elastigroup AWS 

Use this action to run a selected Spot Elastigroup AWS operation.   

### Input

|       Parameter      |                     Description                |      Required  |   |
|----------------------|:----------------------------------------------:|:--------------:|---|
|      Spot Instance   |     Select a Spot integration instance         |     True       |   |
|      Spot Account    |     Select a Spot account                      |     True       |   |
|      Spot Operation  |     Select operation for Spot Elastigroup AWS  |     True       |   |

There can be additional required or optional input values to enter based on the Spot Operation selected. 

### Output

|       Parameter        |       Type  |                            Description                       |   |
|------------------------|:-----------:|:------------------------------------------------------------:|---|
|      output            |     Map     |     Output of Spot Elastigroup AWS operation in Map type     |   |
|      output_json       |     Object  |     Output of Spot Elastigroup AWS operation in Object type  |   |
|      execution_status  |     String  |     Status of run (i.e.: S_OK / E_FAIL)                      |   |

#### Action Example  

<img width="1229" alt="spot-int-2" src="https://github.com/spotinst/help/assets/106514736/864120d9-0552-4d69-9797-8ae06d855c41">

Complete the following information:  

* Spot Instance: Select a Spot by NetApp instance. 
* Spot Account: Select a Spot account. 
* Spot Operation: Select a Spot operation.
* Group ID: Provide groupId of Spot Elastigroup AWS for Scale Up operation.  
* Adjustment (Optional Inputs): Configure optional input for Scale Up operation.  

### Spot Ocean AWS 

Use this action to run a selected Spot Ocean AWS operation. 

#### Input 

|       Parameter      |                  Description             |      Required  |   |
|----------------------|:----------------------------------------:|:--------------:|---|
|      Spot Instance   |     Select a spot integration instance   |     True       |   |
|      Spot Account    |     Select a Spot account                |     True       |   |
|      Spot Operation  |     Select operation for Spot Ocean AWS  |     True       |   |

There can be additional required or optional input values to enter based on the Spot Operation selected. 

### Output

|       Parameter        |       Type  |                            Description                       |   |
|------------------------|:-----------:|:------------------------------------------------------------:|---|
|      output            |     Map     |     Output of Spot Elastigroup AWS operation in Map type     |   |
|      output_json       |     Object  |     Output of Spot Elastigroup AWS operation in Object type  |   |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)                        |   |

#### Action Example 

<img width="518" alt="spot-int-3" src="https://github.com/spotinst/help/assets/106514736/b2340039-a227-4201-b21a-fe268608f98c">

Complete the following information:  

* Spot Instance: Select a Spot by NetApp instance. 
* Spot Account: Select a Spot account. 
* Spot Operation: Select a Spot operation. 
* OceanClusterId: Provide oceanClusterId for Get Cluster operation. 

### Spot Elastigroup Detach Instance 

Use this action to detach an instance from Spot Elastigroup AWS. 

#### Input 

|       Parameter                  |                        Description                    |      Required  |   |
|----------------------------------|:-----------------------------------------------------:|:--------------:|---|
|      Spot Instance               |     Select a spot integration instance                |     True       |   |
|      Spot Account                |     Select a Spot account                             |     True       |   |
|      Group Id                    |     Select a Spot Account Group                       |     True       |   |
|      Instance Id to Detach       |     Add Instance Id to be detached                    |     True       |   |
|      Terminate Instances         |     Should Terminate Instances Criteria               |     True       |   |
|      Decrement Target Capacity   |     Should Decrement Target Capacity Criteria         |     True       |   |
|      Draining Timeout (Seconds)  |     Time to drain the instance before it is detached  |     True       |   |

#### Output

|       Parameter        |       Type  |                  Description             |   |
|------------------------|:-----------:|:----------------------------------------:|---|
|      group_id          |     String  |     Group Id of Spot Elastigroup AWS     |   |
|      execution_status  |     String  |     Status of run (i.e.: S_OK / E_FAIL)  |   |
|      instance_id       |     String  |     Detached instance_id                 |   |

#### Action Example

<img width="1022" alt="spot-int-4" src="https://github.com/spotinst/help/assets/106514736/c2fa0145-1099-45cf-94ef-ed87370bf7f1">

Complete the following information: 

* Spot Instance: Select a Spot by NetApp instance.  
* Spot Account: Select a Spot account.  
* Group ID: Select Elastigroup Id. 
* Instance Id to Detach: Enter an instance ID to detach.  
* Terminate Instances: Select true or false to confirm whether this action will terminate the instance.  
* Decrement Target Capacity: Select a Decrement Target Capacity. 
* Draining Timeout: Select the draining timeout (in seconds).

### Spot AWS Update Stateful Instance 

Use this action to update a stateful instance.  

#### Input 

|       Parameter            |                 Description             |      Required  |   |
|----------------------------|:---------------------------------------:|:--------------:|---|
|      Spot Instance         |     Select a spot integration instance  |     True       |   |
|      Spot Account          |     Select a Spot account               |     True       |   |
|      Managed Instance Ids  |     Select a Spot Managed Instance ids  |     True       |   |
|      Operation             |     Select Stateful Instance Operation  |     True       |   |

#### Output

|       Parameter        |         Type    |                           Description                      |   |
|------------------------|:---------------:|:----------------------------------------------------------:|---|
|      successful_ids    |     StringList  |     List of stateful instances successfully updated state  |   |
|      failed_ids        |     StringList  |     List of stateful instances failed to update state      |   |
|      execution_status  |     String      |     Status of run (i.e.: S_OK / E_FAIL)                    |   |

#### Action Example

<img width="1277" alt="spot-int-5" src="https://github.com/spotinst/help/assets/106514736/797265dc-d932-4fec-b1f8-c94b46ba652c">

Complete the following information: 

* Spot Instance: Select a Spot by NetApp instance. 
* Spot Account: Select a Spot account.  
* Managed Instance Ids: Select Spot managed instance Ids. 
* Operation: Select operation on stateful instance.

### Spot Remove Idle GitHub Runner 

Use this action to detach a Spot Elastigroup AWS instance and remove idle GitHub runner. 

#### Input 

|       Parameter                  |                        Description                    |      Required  |   |
|----------------------------------|:-----------------------------------------------------:|:--------------:|---|
|      Spot Instance               |     Select a spot integration instance                |     True       |   |
|      GitHub Repository           |     Select a Github repository                        |     True       |   |
|      Spot Account                |     Select a Spot account                             |     True       |   |
|      Instance Ids                |     Add instances ids                                 |     True       |   |
|      Terminate Instances         |     Select Stateful Instance Operation                |     True       |   |
|      Decrement Target Capacity   |     Should Decrement Target Capacity Criteria         |     True       |   |
|      Draining Timeout (Seconds)  |     Time to drain the instance before it is detached  |     True       |   |

#### Output

|       Parameter             |         Type    |                          Description                      |   |
|-----------------------------|:---------------:|:---------------------------------------------------------:|---|
|      detached_instance_ids  |     StringList  |     List of instances detached from Spot Elastigroup AWS  |   |
|      execution_status       |     String      |     Status of run (i.e.: S_OK / E_FAIL)                   |   |
|      removed_runner_ids     |     StringList  |     List of runners removed from GitHub                   |   |

#### Action Example

<img width="1257" alt="spot-int-6" src="https://github.com/spotinst/help/assets/106514736/a2b4c2ad-8d62-4e64-9eee-fd59e24d670b">

Complete the following information: 

* Spot Instance: Select a Spot by NetApp instance. 
* GitHub Repository: Select a GitHub repository.  
* Spot Account: Select a Spot account. 
* Elastigroup: Select Spot Elastigroup AWS 
* Terminate Instances: Select true or false to confirm whether this action will terminate the instance. 
* Decrement Target Capacity: Select Decrement capacity of target instances 
* Draining timeout: Select the draining timeout (in seconds). 

### Spot Ocean Cluster Copy VNG 

Use this action to create a new Virtual Node Group from an existing Spot Ocean Cluster VNG configuration.  

#### Input

|       Parameter               |                     Description                |      Required  |   |
|-------------------------------|:----------------------------------------------:|:--------------:|---|
|      Spot Instance            |     Select a Spot integration instance         |     True       |   |
|      Spot Account             |     Select a Spot account                      |     True       |   |
|      Ocean Cluster            |     Select a Spot Ocean Cluster                |     True       |   |
|      Ocean Cluster VNG        |     Select a Spot Ocean Cluster VNG            |     True       |   |
|      Edit Cluster VNG         |     Spot Ocean cluster VNG configuration JSON  |     True       |   |
|      Virtual Node Group Name  |     Name of the new virtual node group         |     True       |   |

#### Output

|       Parameter        |       Type  |                          Description                      |   |
|------------------------|:-----------:|:---------------------------------------------------------:|---|
|      ocean_id          |     String  |     List of instances detached from Spot Elastigroup AWS  |   |
|      source_vng_id     |     String  |     Source Virtual Node Group Id                          |   |
|      execution_status  |     String  |     Status of run (i.e.: S_OK / E_FAIL)                   |   |
|      dest_vng_id       |     String  |     Destination Virtual Node Group Id                     |   |
|      dest_vng_name     |     String  |     Destination Virtual Node Group Name                   |   |

#### Action Example

<img width="1085" alt="spot-int-7" src="https://github.com/spotinst/help/assets/106514736/869bbe24-0483-47fd-89c7-ba61e3afc6ce">

Complete the following information: 

* Spot Instance: Select a Spot by NetApp instance. 
* Spot Account: Select a Spot account. 
* Ocean Cluster: Select Spot Ocean AWS cluster. 
* Ocean Cluster VNG: Select Spot Ocean AWS cluster Virtual Node Group. 
* Edit Cluster VNG: Edit the Cluster VNG configuration.  
* Virtual Node Group Name: Enter the name of the Virtual Node Group.   

### Spot Ocean Cost Analyzer 

Use this action to fetch the aggregated cost data for Spot Ocean AWS ECS cluster. 

#### Input

|       Parameter      |                                                                                         Description                                                                                    |      Required  |   |
|----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Spot Instance   |     Select a Spot integration instance.                                                                                                                                                |     True       |   |
|      Spot Account    |     Select a Spot account.                                                                                                                                                             |     True       |   |
|      Cluster Type    |     Select a cluster type. Currently only ECS is supported.                                                                                                                            |     True       |   |
|      Ocean Cluster   |     Select Spot Ocean Cluster ID from the dropdown                                                                                                                                     |     True       |   |
|      Number Of Days  |     Number of days to collect data for.                                                                                                                                                |     True       |   |
|      End Time        |     End Time.   If provided, Number of Days is calculated backwards from this.   Otherwise, the node will collect data based on Number of Days for current date when it is triggered.  |     False      |   |

#### Output

|       Parameter        |       Type  |                                      Description                                 |   |
|------------------------|:-----------:|:--------------------------------------------------------------------------------:|---|
|      output_data       |     Object  |     Cost data of selected Spot Ocean AWS Kubernetes/ECS cluster, as JSON Array.  |   |
|      execution_status  |     String  |     Status of run (i.e.: S_OK / E_FAIL)                                          |   |

#### Action Example

<img width="1331" alt="spot-int-8" src="https://github.com/spotinst/help/assets/106514736/c455ff33-bf3f-44f1-ae8d-0ca74e34f9a6">

Complete the following information:  

* Spot Instance: Select a Spot instance.  
* Spot Account: Select a Spot account. 
* Cluster Type: Select Spot Ocean AWS cluster type. 
* Ocean Cluster: Select Spot Ocean AWS cluster. 
* Number of Days: Add the number of days to collect data. 
* End Time (Optional): If provided, the number of days is calculated backwards from the selected date.  

### Spot Ocean Rightsizing k8s Resources 

Action to fetch Rightsizing recommendations from Spot Ocean cluster and update Kubernetes resources.  

#### Input

|       Parameter                      |                                          Description                                     |      Required  |   |
|--------------------------------------|:----------------------------------------------------------------------------------------:|:--------------:|---|
|      Spot Instance                   |     Select a Spot integration instance                                                   |     True       |   |
|      Spot Account                    |     Select a Spot account                                                                |     True       |   |
|      Ocean Cluster                   |     Select Spot Ocean Cluster from the dropdown                                          |     True       |   |
|      AWS S3 Bucket with Helm config  |     AWS S3 bucket where Helm config file is stored                                       |     False      |   |
|      AWS S3 Prefix                   |     Complete path in front of the object name (including the bucket name)                |     False      |   |
|      Deployment YAML or Values YAML  |     Helm config resources to be updated as per the Spot Ocean Recommendation             |     False      |   |
|      Namespace                       |     Select a Kubernetes namespace for which resources to be updated                      |     False      |   |
|      Deployment Name                 |     Select a Kubernetes deployment name for which resources to be updated                |     False      |   |
|      Container Name                  |     Select a Kubernetes container name for which resources to be updated                 |     False      |   |
|      Multiplier                      |     Constant for multiplying CPU and Memory resources (default multiplier value is 1.0)  |     False      |   |

#### Output

|       Parameter               |         Type    |                                      Description                                 |   |
|-------------------------------|:---------------:|:--------------------------------------------------------------------------------:|---|
|      values_yaml              |     String      |     Updated helm chart with Spot Ocean AWS rightsizing recommendations           |   |
|      s3_bucket                |     String      |     AWS S3 bucket where helm charts are uploaded                                 |   |
|      updated_helm_s3_objects  |     StringList  |     List of helm charts updated with Spot Ocean AWS rightsizing recommendations  |   |
|      execution_status         |     String      |     Status of run (i.e.: S_OK / E_FAIL)                                          |   |

#### Action Example

<img width="1088" alt="spot-int-9" src="https://github.com/spotinst/help/assets/106514736/444f6bc4-3791-46d7-9ce4-33927a41872c">

Complete the following information:  

* Spot Instance: Select a Spot by NetApp instance. 
* Spot Account: Select a Spot account. 
* Ocean Cluster: Select a Spot Ocean AWS cluster. 

Optional:  

* AWS S3 Bucket with Helm Config: Select AWS S3 bucket and S3 prefix with helm charts to be updated with Spot Ocean AWS rightsizing recommendations. 
* Namespace, Deployment Name, and Container Name: Select namespace deployment name and container name to fetch Spot Ocean AWS rightsizing recommendations and update helm charts. 
* Multiplier: Provide multiplier value to multiply CPU and memory resources, default is 1.0. 

 

 
