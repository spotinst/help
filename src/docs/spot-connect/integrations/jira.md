# Jira

Use the Jira integration to create new issues inside your Jira sprints. 

One of the most common workflow integrations is the user’s ability to create issues on a Jira board during a workflow run based on a conditional node or any other specific requirements. 

Jira in a Spot Connect workflow enables Ops engineers to track issues in their operations. 

## Configure Jira in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  

2. Under the Integrations tab, select **Jira**.   

3. Configure a new integration instance with the information below. 

Details needed to set up a Jira instance in Spot Connect: 

|       Parameter           |                            Description                        |      Required  |   |
|---------------------------|:-------------------------------------------------------------:|:--------------:|---|
|      Integration Alias    |     A name for the integration instance                       |     True       |   |
|      URL of Jira Account  |     Your Jira SaaS URL, example: https://acme.atlassian.net/  |     True       |   |

A Jira Administrator needs to complete the following steps and they need to be performed only once for each Jira account: 

1. Click the **Jira settings** menu and select **Products**.

![jira-1](https://github.com/spotinst/help/assets/106514736/7f894ea5-ee91-4bb0-b1f2-0a65ec05dbc0)

2. Under Integrations in the left menu, select **Application links** and **Create link**. 

![jira-2](https://github.com/spotinst/help/assets/106514736/b2cbc013-966d-4a2e-8b83-fcf9d7c1ee33)

3. Select **Direct application link** and enter https://api.connect.fylamynt.com/ in the Application URL field and click **Continue**. 

![jira-3](https://github.com/spotinst/help/assets/106514736/3139f379-7ef2-4cad-962e-5b39608baa73)

4. In the New URL field, enter the URL https://api.connect.fylamynt.com/ and click **Continue**. 

![jira-4](https://github.com/spotinst/help/assets/106514736/f93ea210-96fd-4678-9129-87b3b2f181cd)

5. Enter the Application Name field with any name (used for identification, example: Spot Connect) and in the Application Type field, leave **Generic Application** selected. **Note: Do not fill in any other field that is not mentioned in this document**. 

![jira-5](https://github.com/spotinst/help/assets/106514736/c71e95b8-3b2d-4cff-bf76-573c38f28a93)

6. At the bottom of the window, check **Create incoming link**, and click **Continue**. 
7. In the next page, copy-paste the Consumer Key, Consumer Name, and Public Key from the Authorize Spot Connect panel, and click **Continue**. 

![jira-6](https://github.com/spotinst/help/assets/106514736/5a319980-78ce-4a08-b987-f385056e5cf7)

A user with Jira access (admin privileges are **not required**) can complete the following steps to add a new instance (for each new instance):  

1. In the Jira integration page in the Spot Connect console, click **Add Integration**. 

![jira-7](https://github.com/spotinst/help/assets/106514736/912e1e90-1151-43b1-8e1a-b817774ffd83)

2. In the Account URL field, copy the URL of your JIRA account (Example: https://acme.atlassian.net/) and click **Add Instance**. 

![jira-8](https://github.com/spotinst/help/assets/106514736/4afbb991-1d1a-4d08-bae4-42177ae5970f)

3. You will be re-directed to your Jira account to allow access for the Spot Connect domain. Click **Allow** to provide access to Jira. 

![jira-9](https://github.com/spotinst/help/assets/106514736/37dbf0c0-dfdc-4bf0-84e6-75d4519f9c47)

4. When an Access Approved message opens, you can close the tab. 

![jira-10](https://github.com/spotinst/help/assets/106514736/40e7c759-d915-4ed1-a03a-58af7da5b71a)
 
5. You can see your integration instance is now configured with Spot Connect. 

![jira-11](https://github.com/spotinst/help/assets/106514736/a05fc488-0925-4f73-bc26-f88256c4ce75)

**Note**: You will need Administrator permissions in order to configure an application link in a Jira account. 

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Jira Create Issue](spot-connect/integrations/jira?id=jira-create-issue). 
* [Jira Update Issue](spot-connect/integrations/jira?id=jira-update-issue). 

### Jira Create Issue 

Use this integration node to create an issue in Jira. 

#### Input

|       Parameter                          |                       Description                   |      Required  |   |
|------------------------------------------|:---------------------------------------------------:|:--------------:|---|
|      Jira Projects                       |     Select a Jira Project to create a ticket        |     True       |   |
|      Issue Types                         |     Select Jira issue type                          |     True       |   |
|      Description                         |     Add description for Jira issue                  |     True       |   |
|      Summary                             |     Add summary for Jira issue                      |     True       |   |
|      Reporter                            |     Select reporter for Jira issue                  |     False      |   |
|      Priority                            |     Select priority for Jira issue                  |     False      |   |
|      S3 Pre-signed URLs for Attachments  |     List of S3 presigned URLs for attachment files  |     False      |   |

#### Output

|       Parameter  |       Type  |               Description           |   |
|------------------|:-----------:|:-----------------------------------:|---|
|      issue_key   |     String  |     Key of the created Jira issue   |   |
|                  |             |                                     |   |

#### Action Example 

Complete the following information: 

* Jira Instance: Select a Jira instance alias. 
* Project Key: Select a Jira Project to create a ticket. 
* Issue Type: Select an issue type.  
* Summary: Add an issue summary. 

Optional Inputs  

* Priority: Select a priority. 
* Reporter: Select a reporter and priority for the issue. 
* Description: Add an issue description. 
* S3 Pre-signed URLs for Attachments: Add S3-presigned URLs  
The node will upload all the files from S3 presigned URLs to the Jira ticket as attachments. 

<img width="379" alt="jira-12" src="https://github.com/spotinst/help/assets/106514736/5cb61572-9a68-4507-8724-645b65dabaf1">

### Jira Update Issue 

Use this integration node to update an existing issue in Jira. 

#### Input 

|       Parameter     |                   Description              |      Required  |   |
|---------------------|:------------------------------------------:|:--------------:|---|
|      Jira Projects  |     Select a Jira project to fetch issues  |     True       |   |
|      Issue List     |     Select issue to update                 |     True       |   |
|                     |                                            |                |   |

#### Output 

|       Parameter  |       Type  |               Description          |   |
|------------------|:-----------:|:----------------------------------:|---|
|      issue_key   |     String  |     Key of the update Jira issue   |   |
|                  |             |                                    |   |

#### Action Example 

Complete the following information:  

* Jira Instance: Select the Jira Instance from the list. 
* Jira Projects: Select a Jira project and Issue from the list. 
* Issue list: Jira issue details of selected issue. 

![jira-13](https://github.com/spotinst/help/assets/106514736/40253738-2b20-4cee-99b2-35dfda53d6da) 

Select optional parameters to update Jira issue. 

![jira-14](https://github.com/spotinst/help/assets/106514736/c53c5ddd-7896-4f79-932a-734a59769a8e)

 





 
