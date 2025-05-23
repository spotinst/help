# Spot Integration 

The Spot integration automates Elastigroup and Ocean operations and optimizes your cloud infrastructure. 

## Configure Spot in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Cloud Services tab, select **Spot by NetApp**.  
3. Configure a new authorization instance with the information below. 

Details needed to set up a Spot Authorization instance in Spot Connect: 

|       Parameter                      |                                           Description                                       |      Required  |   |
|--------------------------------------|:-------------------------------------------------------------------------------------------:|:--------------:|---|
|      Integration Alias               |     A name for the integration instance                                                     |     True       |   |
|      Spot Programmatic Access Token  |     A Spot Programmatic Access Token is recommended or you may use a Personal Access Token  |     True       |   |

Follow the steps below in your Spot account to generate a Spot programmatic access token.  
1. In the top right, click the user icon and click **Settings**.  
2. In the left menu, click **Settings** and click **API**. 
3. Click **Permanent Tokens** and on the top right, click **Generate Token**.

   <img width="400" src="https://github.com/spotinst/help/assets/106514736/bb757911-489f-4770-b305-4bde1dbd2659" />

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

<img width="600" alt="spot-int-2" src="https://github.com/spotinst/help/assets/106514736/864120d9-0552-4d69-9797-8ae06d855c41" />

Complete the following information:  

* Spot Instance: Select a Spot instance. 
* Spot Account: Select a Spot account. 
* Spot Operation: Select a Spot operation.
* Group ID: Provide groupId of Spot Elastigroup AWS for Scale Up.  
* Adjustment (Optional Inputs): Configure optional input for Scale Up.  

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

<img width="400" src="https://github.com/spotinst/help/assets/106514736/b2340039-a227-4201-b21a-fe268608f98c" />

Complete the following information:  

* Spot Instance: Select a Spot instance. 
* Spot Account: Select a Spot account. 
* Spot Operation: Select a Spot operation. 
* OceanClusterId: Provide oceanClusterId for Get Cluster. 

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

<img width="600" src="https://github.com/spotinst/help/assets/106514736/c2fa0145-1099-45cf-94ef-ed87370bf7f1" />

Complete the following information: 

* Spot Instance: Select a Spot instance.  
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

<img width="600" alt="spot-int-5" src="https://github.com/spotinst/help/assets/106514736/797265dc-d932-4fec-b1f8-c94b46ba652c" />

Complete the following information: 

* Spot Instance: Select a Spot instance. 
* Spot Account: Select a Spot account.  
* Managed Instance Ids: Select Spot managed instance IDs. 
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

<img width="600" alt="spot-int-6" src="https://github.com/spotinst/help/assets/106514736/a2b4c2ad-8d62-4e64-9eee-fd59e24d670b" />

Complete the following information: 

* Spot Instance: Select a Spot instance. 
* GitHub Repository: Select a GitHub repository.  
* Spot Account: Select a Spot account. 
* Elastigroup: Select Spot Elastigroup AWS 
* Terminate Instances: Select true or false to confirm whether this action will terminate the instance. 
* Decrement Target Capacity: Select the decrement capacity of target instances 
* Draining timeout: Select the draining timeout (in seconds). 

### Spot Ocean Cluster Copy VNG 

Use this action to create a new virtual node group from an existing Spot Ocean cluster VNG configuration.  

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

<img width="600" alt="spot-int-7" src="https://github.com/spotinst/help/assets/106514736/869bbe24-0483-47fd-89c7-ba61e3afc6ce" />

Complete the following information: 

* Spot Instance: Select a Spot instance. 
* Spot Account: Select a Spot account. 
* Ocean Cluster: Select Spot Ocean AWS cluster. 
* Ocean Cluster VNG: Select Spot Ocean AWS cluster Virtual Node Group. 
* Edit Cluster VNG: Edit the Cluster VNG configuration.  
* Virtual Node Group Name: Enter the name of the Virtual Node Group.   

### Spot Ocean Cost Analyzer 

Use this action to fetch the aggregated cost data for Spot Ocean AWS ECS cluster. 

#### Input

|       Parameter      |                                                                                         Description                                                                                    |                    Required                |
|----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------:|
|      Spot Instance   |     Select a Spot integration instance.                                                                                                                                                |     True                                   |
|      Spot Account    |     Select a Spot account.                                                                                                                                                             |     True                                   |
|      Cluster Type    |     Cluster type can be K8S or ECS                                                                                                                                                     |     True   Note: Only ECS is supported.    |
|      Ocean Cluster   |     Select Spot Ocean Cluster ID from the dropdown                                                                                                                                     |     True                                   |
|      Number Of Days  |     Number of days to collect data for.                                                                                                                                                |     True                                   |
|      End Time        |     End Time.   If provided, Number of Days is calculated backwards from this.   Otherwise, the node will collect data based on number of days for current date when it is triggered.  |     False                                  |

#### Output

|       Parameter        |       Type  |                                      Description                                 |   |
|------------------------|:-----------:|:--------------------------------------------------------------------------------:|---|
|      output_data       |     Object  |     Cost data of selected Spot Ocean AWS Kubernetes/ECS cluster, as JSON Array.  |   |
|      execution_status  |     String  |     Status of run (i.e.: S_OK / E_FAIL)                                          |   |

#### Action Example

<img width="600" alt="spot-int-8" src="https://github.com/spotinst/help/assets/106514736/c455ff33-bf3f-44f1-ae8d-0ca74e34f9a6" />

Complete the following information:  

* Spot Instance: Select a Spot instance.  
* Spot Account: Select a Spot account. 
* Cluster Type: Select Spot Ocean AWS cluster type. 
* Ocean Cluster: Select Spot Ocean AWS cluster. 
* Number of Days: Add the number of days to collect data. 
* End Time (Optional): If provided, the number of days is calculated backward from the selected date.  

### Spot Ocean Rightsizing k8s Resources 

Action to fetch Rightsizing recommendations from Spot Ocean cluster and update Kubernetes resources.  

#### Input

|       Parameter                                       |                                          Description                                      |      Required  |
|-------------------------------------------------------|:-----------------------------------------------------------------------------------------:|:--------------:|
|      Spot API Token/ Alias                            |     Select a Spot integration instance                                                    |     True       |
|      Spot Account                                     |     Select a Spot account                                                                 |     True       |
|      Ocean Cluster                                    |     Select Spot Ocean Cluster from the dropdown                                           |     True       |
|      AWS S3 Bucket with K8s Manifests or Helm Config  |     AWS S3 bucket where K8s Manifests or Helm Config is stored                            |     False      |
|      AWS S3 Prefix                                    |     Complete path in front of the object name (including the bucket name)                 |     False      |
|      Namespace                                        |     Select one or more Kubernetes namespaces for which resources should be updated        |     False      |
|      Deployment Name                                  |     Select one or more Kubernetes deployment names for which resources should be updated  |     False      |
|      Container Name                                   |     Select one or more Kubernetes container names for which resources should be updated   |     False      |
|      Multiplier                                       |     Constant for multiplying CPU and Memory resources (default multiplier value is 1.0)   |     False      |

#### Output

|       Parameter               |         Type    |                                         Description                                     |
|-------------------------------|:---------------:|:---------------------------------------------------------------------------------------:|
|      s3_bucket                |     String      |     AWS S3 bucket where Helm charts are uploaded                                        |
|      skipped_s3_objects       |     Object      |     List of K8s manifest files skipped                                                  |
|      updated_helm_s3_objects  |     StringList  |     List of K8s manifest files updated with Spot Ocean AWS rightsizing recommendations  |
|      execution_status         |     String      |     Status of run (ie: S_OK / E_FAIL)                                                   |                                     |   |

#### Action Example

<img width="600" alt="spot-int-9" src="https://github.com/spotinst/help/assets/106514736/61a24dd8-5efd-4cab-b307-404cd0bf62d3" />

Complete the following information:  

* Spot API Token/Alias: Select a Spot API Token/Alias.  
* Spot Account: Select a Spot account. 
* Ocean AWS Cluster: Select a Spot Ocean AWS cluster.
* AWS S3 Bucket with K8s Manifests or Helm Config: Select AWS S3 bucket.  

Optional:  

* AWS S3 Prefix: Select an AWS S3 prefix with helm charts to be updated with Spot Ocean AWS rightsizing recommendations. 
* Namespace, Deployment Name, and Container Name: Select the namespace deployment name and container name to fetch Spot Ocean AWS rightsizing recommendations and update Helm charts. 
* Multiplier: Provide a multiplier value to multiply CPU and memory resources. The default is 1.0.
