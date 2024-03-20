# Terraform CLI

Terraform CLI executes Terraform templates and connects the execution with other integrations that Spot Connect offers. 

This document describes the Terraform CLI integration, not to be confused with Spot’s support for the Terraform Cloud integration. 

## Configure Terraform CLI in Spot Connect 

Terraform Module `.tf` files are expected to be stored in GitHub Cloud, Bitbucket Cloud, or S3. 

### Files Stored in Github Cloud or Bitbucket Cloud 

1. In the left main menu, click **Connect** and click **Settings**.
2. Under the Integrations tab, select **GitHub/Bitbucket Cloud Instances**. 
3. Follow [GitHub documentation](spot-connect/integrations/git) to set up an integration instance. 

### Files Stored in S3 bucket  

1. In the Settings menu, click **Integrations** and then **S3 Buckets**.  
2. Follow [S3 Buckets](spot-connect/integrations/s3) documentation to set up an integration instance. 

## Set up the Terraform Module Integration  

1. In the left main menu, click **Connect** and click **Settings**.
2. Under the Integrations tab, select **Terraform Modules**. 
3. Click **New Resource**.

|       Parameter      |                                Description                            |      Required  |
|----------------------|:---------------------------------------------------------------------:|:--------------:|
|      Resource Alias  |     A name for the integration instance                               |     True       |
|      Root            |     Terraform module files path inside repository or bucket           |     True       |
|      Source Type     |     Dropdown to select source type                                    |     True       |
|      Git Repo        |     Select a Git repository if Git Repo was selected as Source Type.  |     True       |
|      S3 Bucket       |     Select a S3 bucket if S3 Bucket was selected as Source Type.      |     True       |

4. Provide the information in the following parameters: 

* **Resource Alias**: Add resource alias name. 
* **Root**: Root specifies the Terraform configuration file path in the git repository or S3 bucket. 
* **Source Type**: Select Source Type as Git Repo or S3 bucket as per the previous configuration. 
* **Git Repo**: Select the Git/S3 resource on which Terraform module is present. 

5. Click **Add Resource**.

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Terraform CLI Apply](spot-connect/integrations/terraform-cli?id=terraform-cli-apply) - runs Terraform Apply on the specified module, does not wait for confirmation. 
* Terraform CLI Destroy - runs Terraform Destroy on the specified module, does not wait for confirmation. 
* Terraform CLI Plan - runs Terraform Plan on the specified module. 
* Terraform CLI Show - runs Terraform Show on the specified module.

### Terraform CLI Apply

#### Input 

|       Parameter                 |                                    Description                               |      Required  |
|---------------------------------|:----------------------------------------------------------------------------:|:--------------:|
|      Terraform Module Resource  |     Terraform Module Resource in Spot Connect                                |     True       |
|      S3 Log Bucket              |     S3 integration where logs needs to be uploaded for a given operation     |     True       |
|      Extra Args                 |     Additional CLI arguments for the terraform command                       |     False      |
|      Version                    |     Version of terraform to use (0.11, 0.12, or 0.13)                        |     True       |
|      Workspace                  |     Workspace to use for a terraform command, Default workspace is default   |     False      |

#### Output

|       Parameter        |       Type  |                          Description                      |
|------------------------|:-----------:|:---------------------------------------------------------:|
|      task_arn          |     String  |     AWS Task ARN which is performing Terraform operation  |
|      task_status       |     String  |     AWS task status, ex: PROVISIONING                     |
|      log_bucket        |     String  |     S3 bucket name where logs to be uploaded              |
|      log_key           |     String  |     Terraform logs file name                              |
|      execution_status  |     String  |     Node execution status                              |

#### Action Example 

1. From the left panel, drag and drop the Terraform CLI Apply action node in the workflow builder. 
2. Select a Terraform Module Resource. 
3. Provide S3 Log Bucket. 

#### Input 

<img width="1025" alt="terraform-cli-2" src="https://github.com/spotinst/help/assets/106514736/50d936cc-36a8-434c-a132-e9d547f8ada4">

#### Output 

![terraform-cli-3](https://github.com/spotinst/help/assets/106514736/16ed39c9-4001-483e-a5ef-648589a351be)

## Debug Terraform CLI Actions 

1. Check the execution status of the node, if its E_FAIL there should be an error message. This could happen if Spot Connect is not able to trigger a task to perform Terraform actions in case wrong credentials/params/version are provided.  

2. To debug the Terraform command, check the logs file name added in the output of the action. 
Example: 

```
Error: No configuration files Apply requires configuration to be present. Applying without a configuration would mark everything for destruction, which is normally not what is desired. If you would like to destroy everything, run 'terraform destroy' instead.
```
