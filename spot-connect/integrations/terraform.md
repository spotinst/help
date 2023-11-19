# Terraform Cloud

Terraform Cloud is used to manage cloud infrastructure including Amazon Web Services, Google Cloud Platform, and Microsoft Azure efficiently and remotely by managing Terraform code. 

Use this integration to create workflows to manage cloud infrastructure using Terraform. 

### Configure Terraform Cloud in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Terraform Cloud**. 
3. Configure a new integration instance with the information below. 

Details needed to set up a Terraform Cloud instance in Spot Connect: 

|       Parameter         |                         Description                    |      Required  |   |
|-------------------------|:------------------------------------------------------:|:--------------:|---|
|      Integration Alias  |     A name for the integration instance                |     True       |   |
|      Token              |     Terraform Cloud API token                          |     True       |   |
|      Organization       |     Name of target Organization from Terraform Cloud   |     True       |   |

Follow these steps in your Terraform Cloud account to obtain the desired parameter values to enter in Spot Connect. 

#### Create a Terraform API Token 

1. Sign in to Terraform Cloud. 
2. Click the user icon on the top left and click **User Settings**. 

![terraform-1](https://github.com/spotinst/help/assets/106514736/b12def85-9377-4df2-801b-7d980a042d35)

3. Click Tokens and click **Create an API Token**.  

![terraform-2](https://github.com/spotinst/help/assets/106514736/cc11e92f-3c7b-4d4d-a5f0-e949fcdc5a5b)

4. Add a description and expiration time.
5. Click **Generate Token**.  

![terraform-3](https://github.com/spotinst/help/assets/106514736/1a6ebb21-2ccd-42aa-895a-5755645ae58d)

6. Copy the token and paste it into the Token field of the Add Integration Instance window in the Spot Connect console. 

#### Obtain the Terraform Organization Name 

1. Click the user icon on the top left and click **User Settings**. 
2. Click **Organizations**. 

![terraform-4](https://github.com/spotinst/help/assets/106514736/f93aa9bb-998f-4954-a980-2372bac61e23)

3. Copy the Organization name and paste it into the Organization field of Add Integration Instance box in the Spot Connect console.  

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow: 

* [Terraform Cloud Apply](spot-connect/integrations/terraform?id=terraform-cloud-apply) 
* [Terraform Cloud Destroy](spot-connect/integrations/terraform?id=terraform-cloud-destroy) 
* [Terraform Cloud Discard](spot-connect/integrations/terraform?id=terraform-cloud-discard) 
* [Terraform Cloud Plan](spot-connect/integrations/terraform?id=terraform-cloud-plan)  
* [Terraform Cloud Show](spot-connect/integrations/terraform?id=terraform-cloud-show) 
* [Terraform Cloud Update Vars](spot-connect/integrations/terraform?id=terraform-cloud-update-vars)  

### Terraform Cloud Apply 

Use the action to send an http request to Terraform Cloud and apply the request.  

#### Input 

|       Parameter                |                        Description                   |      Required  |   |
|--------------------------------|:----------------------------------------------------:|:--------------:|---|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect      |     True       |   |
|      Run Id                    |     String representing Id of the run to be applied  |     True       |   |

#### Output 

|       Parameter        |       Type  |                 Description            |   |
|------------------------|:-----------:|:--------------------------------------:|---|
|      apply_result      |     String  |                                        |   |
|      workspace_id      |     String  |     Workspace id from Terraform Cloud  |   |
|      execution_status  |     String  |     Node execution status              |   |  

#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Apply node in the workflow builder. 
2. Select a Terraform Cloud Instance.  
3. Provide a run ID of the run you want to apply. 

#### Input 

![terraform-6](https://github.com/spotinst/help/assets/106514736/a16e2054-6735-4279-9ec2-ffe38b939ee5)

#### Output  

![terraform-7](https://github.com/spotinst/help/assets/106514736/4e973ef8-9bb3-4b44-b399-9baf81d71738)

### Terraform Cloud Destroy 

Use the action node to destroy infrastructure that was deployed with Terraform. 

#### Input 

|       Parameter                |                         Description                    |      Required  |   |
|--------------------------------|:------------------------------------------------------:|:--------------:|---|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect        |     True       |   |
|      Workspace Name            |     String representing Terraform Cloud workspace Id.  |     True       |   |

#### Output 

|       Parameter        |       Type  |                      Description                 |   |
|------------------------|:-----------:|:------------------------------------------------:|---|
|      run_id            |     String  |     String representing Id of the run destroyed  |   |
|      run_status        |     String  |     String representing status of the run        |   |
|      run_data          |     String  |     JSON object containing data of the run       |   |
|      execution_status  |     String  |     Node execution status                        |   |  

#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Destroy node in the workflow builder. 
2. Select a Terraform Cloud Instance.  
3. Select a workspace name to remove the deployed infrastructure from. 

#### Input 

![terraform-8](https://github.com/spotinst/help/assets/106514736/8fec7fa5-8825-4731-89b2-fa46649a9040)

#### Output 

![terraform-9](https://github.com/spotinst/help/assets/106514736/a292fb6b-ce30-4c20-b788-b84b1562bc14)

### Terraform Cloud Discard 

Use the action node to discard Terraform run and unlock a workspace. 

#### Input 

|       Parameter                |                                              Description                                         |      Required  |   |
|--------------------------------|:------------------------------------------------------------------------------------------------:|:--------------:|---|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect                                                  |     True       |   |
|      Workspace Name            |     Terraform Cloud workspace to be unlocked; must be specified if no Run Id is given            |     False      |   |
|      Run Id                    |     Specific run Id that needs to be discarded; must be specified if no Workspace Name is given  |     False      |   |

#### Output 

|       Parameter        |       Type  |             Description        |
|------------------------|:-----------:|:------------------------------:|
|      run_id            |     String  |     Run id that was discarded  |
|      execution_status  |     String  |     Node execution status      |

 
#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Discard node in the workflow builder. 
2. Select a Terraform Cloud Instance.  
3. Select a workspace name to discard a run from, or provide a run ID.  

#### Input  

![terraform-10](https://github.com/spotinst/help/assets/106514736/789eb091-b6cf-4abc-bee0-571c7b4bc4b3) 

#### Output 

![terraform-11](https://github.com/spotinst/help/assets/106514736/48f6a3d8-3ec1-41e3-be7d-aa3a7d841d8f) 

### Terraform Cloud Plan 

Use the action node to plan a Terraform run. 

#### Input 

|       Parameter                |                         Description                    |      Required  |
|--------------------------------|:------------------------------------------------------:|:--------------:|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect        |     True       |
|      Workspace Name            |     String representing Terraform Cloud workspace Id.  |     True       |

#### Output 

|       Parameter        |       Type  |                      Description                 |
|------------------------|:-----------:|:------------------------------------------------:|
|      run_id            |     String  |     String representing Id of the plan created   |
|      run_status        |     String  |     String representing status of the plan       |
|      run_data          |     String  |     JSON object containing data of the plan      |
|      execution_status  |     String  |     Node execution status                        |

#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Plan node in the workflow builder.  
2. Select a Terraform Cloud Instance.  
3. Select a workspace name you want to send a plan request to.   

#### Input 

![terraform-12](https://github.com/spotinst/help/assets/106514736/af6b27d4-3428-40b7-8f64-8e910b1fedc9)

#### Output 

![terraform-13](https://github.com/spotinst/help/assets/106514736/e30d5022-419b-4310-8c36-64913c4d7139) 

### Terraform Cloud Show 

Use the action node to extract Terraform State and save to an S3 location if specified. 

#### Input 

|       Parameter                |                          Description                      |      Required  |
|--------------------------------|:---------------------------------------------------------:|:--------------:|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect           |     True       |
|      Workspace Name            |     String representing Terraform Cloud workspace Id.     |     True       |
|      S3 Bucket                 |     An S3 bucket to store the extracted Terraform state.  |     False      |
|      Target Alias              |     AWS target account for the above selected S3 bucket   |     False      |

#### Output 

|       Parameter        |       Type  |                     Description                 |
|------------------------|:-----------:|:-----------------------------------------------:|
|      bucket            |     String  |     Name of S3 bucket where data was stored     |
|      is_truncated      |     boolen  |     Whether output exceeded 100 KB              |
|      key               |     String  |     Key name for file in which data was stored  |
|      show              |     String  |     Last 100 KB of the showed data              |
|      execution_status  |     String  |     Node execution status                       |

#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Show node in the workflow builder. 
2. Select a Terraform Cloud Instance.  
3. Select a workspace name that has the state you want to extract from.  

#### Input 

![terraform-14](https://github.com/spotinst/help/assets/106514736/3bd0ef27-7d3b-41fb-b35f-8a7480d4ce22)

#### Output  

![terraform-15](https://github.com/spotinst/help/assets/106514736/36411337-2b26-4c18-b5a1-1dae5dc09740)

### Terraform Cloud Update Vars 

Use the action snippet to update Terraform Cloud workspace variables. 

#### Input 

|       Parameter                |                         Description                    |      Required  |
|--------------------------------|:------------------------------------------------------:|:--------------:|
|      Terraform Cloud Instance  |     Terraform Cloud integration in Spot Connect        |     True       |
|      Workspace Name            |     String representing Terraform Cloud workspace Id.  |     True       |
|      Variables                 |     List of terraform variables needed to update       |     True       |

#### Output 

|       Parameter        |       Type  |                      Description                 |
|------------------------|:-----------:|:------------------------------------------------:|
|      run_id            |     String  |     String representing Id of the run destroyed  |
|      run_status        |     String  |     Status of the run                            |
|      run_data          |     String  |     Response data of the run                     |
|      execution_status  |     String  |     Node execution status                        |

#### Action Example 

1. From the left panel, drag and drop the Terraform Cloud Update Vars node in the workflow builder. 
2. Select a Terraform Cloud Instance.  
3. Select a workspace name that has a variable you want to update. 
4. Hover over the variable you want to edit. Click **Open JSON** editor.  
5. Make changes and click **Save**.

![terraform-14](https://github.com/spotinst/help/assets/106514736/bf229541-3686-438d-aac9-96a534292109)


#### Input 

![terraform-16](https://github.com/spotinst/help/assets/106514736/be559cea-f329-416a-9903-7b7c4bc04a71)

#### Output 

![terraform-17](https://github.com/spotinst/help/assets/106514736/771eef0c-f577-42a6-a8c1-629f9e784e52)
