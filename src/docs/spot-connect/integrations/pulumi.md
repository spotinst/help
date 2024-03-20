# Pulumi

Use the Pulumi integration to execute Pulumi templates and connect the execution with other integrations that Spot Connect offers. 

Pulumi is a modern infrastructure as a code platform. It leverages existing programming languages—TypeScript, JavaScript, Python, Go, and .NET—and their native ecosystem to interact with cloud resources through the Pulumi SDK. 

You can run multiple types of code (e.g. Terraform templates, Ansible playbooks, Python scripts) to automate their tasks. This integration supports the execution of Pulumi Programs. 
The integration between Spot Connect and Pulumi enables you to execute: 

* **Pulumi Up** for the specified project and stack. Create the set of resources specified in the project. 

* **Pulumi Stack** Output for the specified project and stack. The output is in JSON format and can be pulled from specified log_bucket and log_key for further processing. 

* **Pulumi Destroy** for the specified project and stack. It also removes the provisioned resources. 

## Configure Pulumi in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Pulumi**. 
3. To configure a new integration instance, click **Add Integration**.  

Details needed to set up a **Pulumi** instance with Spot Connect: (either **Token** or **Backend** [with a **Passphrase** protecting the content] can be specified) 
 
 
|       Parameter         |                                                                        Description                                                                   |                                Required                            |
|-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------:|
|      Integration Alias  |     A name for the integration instance                                                                                                              |     True                                                           |
|      Token              |     Access Token obtained from Pulumi Web console                                                                                                    |     If Backend is not specified                                    |
|      Backend            |     An S3 bucket that will store Pulumi config and state. The target account(s) for Pulumi operations should have read/write access to this bucket.  |     If Token is not specified                                      |
|      Passphrase         |     The passphrase for accessing the Pulumi config.                                                                                                  |     If backend is specified                                        |
|      Organization       |     Organization under which Pulumi projects should be run.                                                                                          |     Optional. If specified, all workflows share the organization.  |

## Create an Access Token 

If you choose to configure Pulumi in Spot Connect using an access token, complete the following steps. 

1. Log in to the Pulumi web console.  

![pulumi-1](https://github.com/spotinst/help/assets/106514736/5f4856b5-aa31-4407-94b0-a52ae2524f19)

2. Click the **Settings** tab and then click **Access Tokens** in the left menu.   

![pulumi-2](https://github.com/spotinst/help/assets/106514736/824ce9dc-68a4-4063-821c-d91bd1f9176b)

3. Click **Create token**. Enter a name and click **Create token**. 

![pulumi-3](https://github.com/spotinst/help/assets/106514736/bd00ef54-c2e3-4a97-9ff1-00f8b5adef36)

4. Copy the generated Access Token into the Token parameter in the Spot Connect configuration.  

![pulumi-4](https://github.com/spotinst/help/assets/106514736/fd20c694-3474-444b-85e8-527f41593812)

## Integration Actions 

Spot only supports Pulumi Python projects with an AWS provider. Before using any Pulumi integration action, a project needs to be defined, either in the GitHub Repos resource or the S3 Buckets resource. 

* **[Pulumi Up](spot-connect/integrations/pulumi?id=pulumi-up)** - Runs command `pulumi up` for the specified project and stack. Creates the set of resources specified in the project.
* **[Pulumi Stack Output](spot-connect/integrations/pulumi?id=pulumi-stack-output)** - Runs command `pulumi stack output` for the specified project and stack. The output is in JSON format and can be pulled from specified `log_bucket` and `log_key` for further processing. 
* **[Pulumi Destroy](spot-connect/integrations/pulumi?id=pulumi-destroy)** - Runs command `pulumi destroy` for the specified project and stack and removes the provisioned resources. 

### Pulumi Up

Runs the command `pulumi up` for the specified project and stack. Creates the set of resources specified in the project. 

#### Input 

|       Parameter Name    |                                                            Description                                                        |              Required          |
|-------------------------|:-----------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
|      Pulumi Instance    |     Target account alias for running the Pulumi action. It needs to have access to the Backend S3 bucket                      |     True                       |
|      Project Stack      |     The Pulumi stack used for the action. Pulumi support running the same project against different stacks.                   |     True                       |
|      Log Bucket         |     An S3 bucket for writing logs from the Pulumi command execution. The target account needs to have access to this bucket.  |     True                       |
|      Project Git Repo   |     A GitHub Repos resource with a Pulumi Python project with an AWS provider.                                                |     If S3 Bucket is not added  |
|      Project S3 Bucket  |     A S3 Buckets resource with a Pulumi Python project with an AWS provider                                                   |     If Git Repo is not added   |

#### Output 

|       Parameter Name   |       Type   |                         Description                     |
|------------------------|:------------:|:-------------------------------------------------------:|
|      task_arn          |     string   |     The task ARN for the asynchronous Pulumi task       |
|      task_status       |     string   |     The task status when the action returns.            |
|      log_bucket        |     string   |     log_bucket from the Input parameters                |
|      log_key           |     string   |     name of system created log file                     |
|      execution_status  |     boolean  |     returns true if pulumi node is executed correctly.  |

#### Action Example 

#### Input 
 
<img width="1044" alt="pulumi-5" src="https://github.com/spotinst/help/assets/106514736/d8312f30-5dad-4b3d-be64-61048aa95083">

#### Output 

![pulumi-6](https://github.com/spotinst/help/assets/106514736/f172ea48-8909-45a7-a59a-38f2473ea1b0)

### Pulumi Stack Output

Runs command pulumi stack output for the specified project and stack. The output is in JSON format and can be pulled from specified log_bucket and log_key for further processing. 

#### Input 

|       Parameter Name    |                                                            Description                                                        |              Required          |
|-------------------------|:-----------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
|      Pulumi Instance    |     Target account alias for running the Pulumi action. It needs to have access to the Backend S3 bucket                      |     True                       |
|      Project Stack      |     The Pulumi stack used for the action. Pulumi support running the same project against different stacks.                   |     True                       |
|      Log Bucket         |     An S3 bucket for writing logs from the Pulumi command execution. The target account needs to have access to this bucket.  |     True                       |
|      Project Git Repo   |     A GitHub Repos resource with a Pulumi Python project with an AWS provider.                                                |     If S3 Bucket is not added  |
|      Project S3 Bucket  |     A S3 Buckets resource with a Pulumi Python project with an AWS provider                                                   |     If Git Repo is not added   | 

#### Output 

|       Parameter Name   |       Type   |                         Description                     |
|------------------------|:------------:|:-------------------------------------------------------:|
|      task_arn          |     string   |     The task ARN for the asynchronous Pulumi task       |
|      task_status       |     string   |     The task status when the action returns.            |
|      log_bucket        |     string   |     log_bucket from the Input parameters                |
|      log_key           |     string   |     name of system created log file                     |
|      execution_status  |     boolean  |     returns true if pulumi node is executed correctly.  |
 
### Pulumi Destroy

Runs command pulumi destroy for the specified project and stack, and removes the provisioned resources. 

#### Input 

|       Parameter Name    |                                                            Description                                                        |              Required          |
|-------------------------|:-----------------------------------------------------------------------------------------------------------------------------:|:------------------------------:|
|      Pulumi Instance    |     Target account alias for running the Pulumi action. It needs to have access to the Backend S3 bucket                      |     True                       |
|      Project Stack      |     The Pulumi stack used for the action. Pulumi support running the same project against different stacks.                   |     True                       |
|      Log Bucket         |     An S3 bucket for writing logs from the Pulumi command execution. The target account needs to have access to this bucket.  |     True                       |
|      Project Git Repo   |     A GitHub Repos resource with a Pulumi Python project with an AWS provider.                                                |     If S3 Bucket is not added  |
|      Project S3 Bucket  |     A S3 Buckets resource with a Pulumi Python project with an AWS provider                                                   |     If Git Repo is not added   |

#### Output 

|       Parameter Name   |       Type   |                         Description                     |
|------------------------|:------------:|:-------------------------------------------------------:|
|      task_arn          |     string   |     The task ARN for the asynchronous Pulumi task       |
|      task_status       |     string   |     The task status when the action returns.            |
|      log_bucket        |     string   |     log_bucket from the Input parameters                |
|      log_key           |     string   |     name of system created log file                     |
|      execution_status  |     boolean  |     returns true if pulumi node is executed correctly.  |
