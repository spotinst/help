# Splunk On-Call (VictorOps)

Splunk On-Call (VictorOps) is a collaboration and incident management platform for on-call teams. This integration can be used to trigger workflows when it receives any incoming signal for alerts. With the help of the integration, incidents can be rerouted or resolved in the workflows.  

Splunk On-Call (VictorOps) in a Spot Connect workflow enables you to: 

* Trigger a Spot Connect workflow when there is an alert. 
* Reroute Splunk On-Call (VictorOps) incidents. 
* Resolve Splunk On-Call (VictorOps) incidents. 

## Configure Splunk On-Call (VictorOps) in Spot Connect 

1. In the left main menu, click **Connect** and click **Settings**.  
2. Under the Integrations tab, select **Splunk On-Call (VictorOps)**. 
3. Configure a new integration instance with the information below. 

Details needed to set up a Splunk On-Call (VictorOps) instance in Spot Connect: 

|       Parameter         |                        Description                    |      Required  |
|-------------------------|:-----------------------------------------------------:|:--------------:|
|      Integration Alias  |     A name for the integration instance               |     True       |
|      App ID             |     API ID obtained from Splunk On-Call (VictorOps)   |     True       |
|      App Key            |     API Key obtained from Splunk On-Call (VictorOps)  |     True       |

Follow these steps in your Splunk On-Call (VictorOps) account to obtain the desired parameter values to enter in Spot Connect: 

1. Log in to your Splunk On-Call (VictorOps) account using your credentials. 
2. In the top navigation bar, click **Integrations**.

![splunk-victor-1](https://github.com/spotinst/help/assets/106514736/c3efa41f-ff04-4a52-926d-bec4e2c52337)

3. Next to **Third Party Integrations** tab, click the **API** tab. 
4. Copy your **API ID**. 

![splunk-victor-2](https://github.com/spotinst/help/assets/106514736/8fb62c00-308e-4b4c-9a44-fe7005fdece3)

5. Click **New Key**. 
6. Enter a descriptive name for the API key in the **Description** field. 
7. (Optional) Mark the **Read-only** checkbox if you want to restrict the key's permissions to GET requests. 
8. Click **Create Key**. 

![splunk-victor-3](https://github.com/spotinst/help/assets/106514736/0d9ff482-a36c-4b5f-9ed6-0684ba905261)

9. Retrieve your API Key. 
10. In the Spot Connect console, click the **Integrations** page. 
11. Click **Add Integration**. 
12. Enter a name for the integration alias.  
13. Paste **API ID** and **API Key** previously retrieved. 
14. Click **Add Instance**.   

## Integration Actions 

You can add these actions in the Spot Connect workflow builder as part of your workflow. 

* [Splunk On-Call (VictorOps) Trigger](spot-connect/integrations/splunk_on_call?id=splunk-on-call-victorops-trigger)  
* [Splunk On-Call Resolve Incidents](spot-connect/integrations/splunk_on_call?id=splunk-on-call-resolve-incidents)  
* [Splunk On-Call Reroute Incidents](spot-connect/integrations/splunk_on_call?id=splunk-on-call-reroute-incidents)

### Splunk On-Call (VictorOps) Trigger

To automatically execute a Spot Connect workflow with a Splunk On-Call (VictorOps) alert in real-time, complete the following steps to set up a webhook integration between Spot Connect and Splunk On-Call (VictorOps). 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**. 

#### Create a New Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Splunk On-Call (VictorOps)**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the **Splunk On-Call (VictorOps)** trigger node to open the right panel. Under Webhook API Key Name, select an API Key you created earlier. 
6. Compose your workflow and save it. 

![splunk-victor-4](https://github.com/spotinst/help/assets/106514736/7660fe5b-1f67-43e7-a8ca-42149dfca010)

#### In Splunk On-Call (VictorOps) 

1. Log in to your Splunk On-Call (VictorOps) account using your credentials. 
2. In the top navigation bar, click **Integrations**. 
3. Click **Outgoing Webhooks**. 

![splunk-victor-5](https://github.com/spotinst/help/assets/106514736/0719fdc4-588a-4082-a5b8-0d534a68aea7)

4. Click **Add Webhook**.  
5. Select your desired event type.  
6. Select method to POST.  
7. Add custom header. Put `x-api-key` in Key input field.  
8. Go to your workflow. Select trigger node. From the right panel, copy the Webhook API Key Value. Paste it into the Value input field.  
9. Copy and paste Workflow Webhook URL from your workflow into the ‘To:’ input field. 

![splunk-victor-6](https://github.com/spotinst/help/assets/106514736/9969321a-d610-4bad-96f4-cdf7462f8707)

10. Click **Save**.

#### Action Example 

In your Splunk On-Call (VictorOps) account:  

1. Click **Incidents** and then **Create Incident**. 

![splunk-victor-7](https://github.com/spotinst/help/assets/106514736/cd74ba37-f2b0-48f6-80e0-d1c335e22f59)

2. Select **Teams/Policies**. 
3. Enter an Incident Description.  
4. Enter an Incident Body.  

![splunk-victor-8](https://github.com/spotinst/help/assets/106514736/a2df7957-72e8-4cf5-b0f9-7c53bd7d6e13)

5. Click **Create Incident**.  
6. Spot Connect receives the incident webhook request and triggers your workflow. 

![splunk-victor-9](https://github.com/spotinst/help/assets/106514736/d07a7c99-35ad-48e5-9237-1c9fbb216a93)

Execution:  

![splunk-victor-10](https://github.com/spotinst/help/assets/106514736/309f3cbc-86b9-41c7-bc78-273baff1a3d7)

### Splunk On-Call Resolve Incidents 

Use this action node to resolve a list of Splunk On-Call (VictorOps) incidents.

#### Input

|       Parameter               |                        Description                    |      Required  |
|-------------------------------|:-----------------------------------------------------:|:--------------:|
|      Splunk On-Call Instance  |     Splunk On-Call (VictorOps) integration instance.  |     True       |
|      Incident Numbers         |     List of incidents to reroute                      |     True       |
|      Username                 |     User to resolve incidents                         |     True       |


#### Output

|       Parameter         |       Type  |                         Description                    |
|-------------------------|:-----------:|:------------------------------------------------------:|
|      execution_message  |     Object  |     JSON of Splunk On-Call resolve incident execution  |
|      execution_status   |     String  |     Status of run (ie: S_OK / E_FAIL)                  |

#### Action Example 

1. In the Spot Connect console click **Workflows** and then **New Workflow**. 
2. Give your workflow a name and select **Manual Trigger**. 
3. Click **Create Workflow**. 
4. From the left panel, drag and drop Splunk On-Call Resolve Incidents action node in the workflow builder.  
5. Select an instance in the Splunk On-Call Resolve Incidents drop-down menu and then your Splunk On-Call Instance.  
6. Provide the Incident Number(s) you want to resolve.  
7. Select **Username** and click **Run Now**. 

#### Input

![splunk-victor-11](https://github.com/spotinst/help/assets/106514736/2d358d32-0d50-4841-96b8-8f7279795869)

#### Output

![splunk-victor-12](https://github.com/spotinst/help/assets/106514736/6dbc5cbb-e947-487e-a547-8374e4442532)

#### Splunk On-Call Reroute Incidents 

Use this action node to reroute a list of Splunk On-Call (VictorOps) incidents. 

#### Input

|       Parameter               |                              Description                         |      Required  |
|-------------------------------|:----------------------------------------------------------------:|:--------------:|
|      Splunk On-Call Instance  |     Splunk On-Call (VictorOps) integration instance              |     True       |
|      Incident Numbers         |     List of incidents to reroute                                 |     True       |
|      Username                 |     User to reroute incidents                                    |     True       |
|      Target Users             |     Select one or more users to reroute incidents to             |     False *    |
|      Target Policies          |     Select one or more escalation policies to reroute incidents  |     False *    |

* Target Users and/or Target Policies are required for rerouting incidents. 

#### Output

|       Parameter         |      Description  |                           Required                      |
|-------------------------|:-----------------:|:-------------------------------------------------------:|
|      execution_message  |     Object        |     JSON of Splunk On-Call reroute incidents execution  |
|      execution_status   |     String        |     Status of run (ie: S_OK / E_FAIL)                   |

#### Action Example

In Spot Connect:  

1. In the Spot Connect console click **Workflows** and then **New Workflow**. 
2. Give your workflow a name and select **Manual Trigger**. 
3. Click **Create Workflow**. 
4. From the left panel, drag and drop Splunk On-Call Reroute Incidents action node in your workflow builder.  
5. Select an instance in the Splunk On-Call Reroute Incidents drop-down menu and then your Splunk On-Call Instance. 
6. Provide Incident Number(s) you want to reroute.  
7. Select Username and click **Run Now**.  

#### Input

![splunk-victor-13](https://github.com/spotinst/help/assets/106514736/f6560ea5-16db-44a2-a08c-9a262ff7dd6b)

#### Output

![splunk-victor-14](https://github.com/spotinst/help/assets/106514736/f481cf10-e86f-426c-aa12-e76bc796f215)
