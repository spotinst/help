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
6. Provide a descriptive name for the API key in the **Description** field. 
7. (Optional) check the **Read-only** checkbox if you want to restrict the key's permissions to GET requests. 
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

* Splunk On-Call (VictorOps) Trigger 
* Splunk On-Call Resolve Incidents  
* Splunk On-Call Reroute Incidents

## Splunk On-Call (VictorOps) Trigger  

To automatically execute a Spot Connect workflow with a Splunk On-Call (VictorOps) alert in real-time, complete the following steps to set up a webhook integration between Spot Connect and Splunk On-Call (VictorOps). 

### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**. 

### Create a New Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Splunk On-Call (VictorOps)**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the **Splunk On-Call (VictorOps)** trigger node to open the right panel. Under Webhook API Key Name, select an API Key you created earlier. 
6. Compose your workflow and save it. 

![splunk-victor-4](https://github.com/spotinst/help/assets/106514736/7660fe5b-1f67-43e7-a8ca-42149dfca010)

### 

