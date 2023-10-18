# Jenkins

Use the Jenkins integration to run Jenkins jobs as part of your automation workflows.  

The primary use case of Jenkins is CI/CD and it supports users that use Jenkins as the primary automation system. It can also be extended to Ops automation for already authored Jenkins jobs. 

Jenkins in a Spot Connect workflow lets you: 

* see the list of available jobs and pick a specific job to run. (Schedule an existing Jenkins job) 
* be able to specify any input parameters needed for the job to run. 

## Configure Jenkins in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Under the Integrations tab, select **Jenkins**.  
3. Configure a new integration instance with the information below. 

Details needed to set up a Jenkins instance in Spot Connect: 

|       Parameter          |                      Description                  |      Required  |   |
|--------------------------|:-------------------------------------------------:|:--------------:|---|
|      Integration Alias   |     A name for the integration instance           |     True       |   |
|      API Token           |     API token from an authorized user in Jenkins  |     True       |   |
|      Jenkins Username    |     Jenkins server (url:port)                     |     True       |   |
|      Jenkins Server URL  |     Jenkins username associated with the token    |     True       |   |
|                          |                                                   |                |   | 

Complete the steps below in your Jenkins Account and get the desired parameters to enter in the Spot Connect console. 

1. Find your Jenkins web URL and port if needed.  Add it to the Spot Connect Jenkins Server URL field. 
2. Log in to your Jenkins Server. 
3. In the left menu, click **People**. 
4. Select the user you want to integrate with and copy the Jenkins User ID to the Spot Connect Jenkins Username field. 
5. In the left menu, click **Configure**. Click **API Token**, generate a new token, and paste the value in the API Token field. 
6. Click **Add Instance**. 

> Note: The Jenkins integration might not work when it is behind a proxy. 

## Integration Actions  

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Jenkins Build](spot-connect/integrations/jenkins?id=jenkins-build) 

### Jenkins Build  

Use the action to start a Jenkins job. 

#### Input 

|       Parameter        |                                Description                            |      Required  |   |
|------------------------|:---------------------------------------------------------------------:|:--------------:|---|
|      Jenkins Instance  |     Select a Jenkins integration instance configured in Spot Connect  |     True       |   |
|      Job Name          |     Name of Jenkins job                                               |     True       |   |
|      Parameters        |     Parameters for the build job                                      |     True       |   |
|                        |                                                                       |                |   |

#### Output 

|       Parameter        |       Type  |                 Description            |   |
|------------------------|:-----------:|:--------------------------------------:|---|
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)  |   |
|                        |             |                                        |   |

 
You can start a Jenkins job from the workflow builder as follows: 

1. From the workflow builder in the left panel, drag and drop a Jenkins action node onto the center panel. 
2. Click the Jenkins Build action node. 
3. Select a Jenkins Instance. 
4. Select a Jenkins job from the Job Name dropdown menu. 
5. Enter JSON input Parameters. 

#### Action Example 

<img width="815" alt="jenkins-1" src="https://github.com/spotinst/help/assets/106514736/9d784c5a-f8c1-4dd4-b828-402945ad29c9">
