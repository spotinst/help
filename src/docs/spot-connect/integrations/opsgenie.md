# Opsgenie

Opsgenie is mainly used for on-call, alerting, and incident management. 

Opsgenie integration is intended for users who have Opsgenie set up as the primary alerting and on-call management system. 

The integration between Spot Connect and Opsgenie enables you to trigger a workflow in Spot Connect, when a specific Opsgenie alert goes into the state of ALERT. 

## Configure Opsgenie  

### Step 1: Add Integration 

Follow the steps listed below in your Opsgenie Account. 

1. In your Opsgenie Account, click **Teams** and then **Select your team**.  

![opsgenie-1](https://github.com/spotinst/help/assets/106514736/d08f7c6d-e85e-43b3-9727-7e593c9c8ab6)

2. Click **Integrations** and then **Add Integration**. 

![opsgenie-2](https://github.com/spotinst/help/assets/106514736/cd886c6b-ce13-4ec3-9333-912847bda49d)

3. Select **API** as an integration option. 

![opsgenie-3](https://github.com/spotinst/help/assets/106514736/6275e094-665c-45ff-b4d2-33de51f138c1)

4. Enter a name and assign it to the desired team and provide read-only access. 
5. Copy the API Key and click **Save Integration**. 

![opsgenie-4](https://github.com/spotinst/help/assets/106514736/05ec3982-6803-4d41-9498-876c0b04967a)

### Step 2: Configure the Webhook 

1. Select **Teams** and then **Your Team**. 
2. Click **Actions** and then **Add Action Channel**. 

![opsgenie-5](https://github.com/spotinst/help/assets/106514736/da900f6b-1d3c-4f6e-9573-312d31897715) 

3. Provide a name for the action channel. 

![opsgenie-6](https://github.com/spotinst/help/assets/106514736/55faf35c-0833-44f1-8129-3a90994ad907) 

4. Select **Rest Endpoint** as a type for the action channel. 

![opsgenie-7](https://github.com/spotinst/help/assets/106514736/1106f1d6-11a9-4ab0-b3ba-36e28609131b)

5. Enter the following fields in the action channel: 

* **URL**: Copy Webhook URL from the ‘Workflow Webhook URL’ in the right side panel of your Spot Connect workflow. 
* **Custom Headers**: 
  - Name: x-api-key 
  - Value: add "Webhook API Key value" from the right side panel. 
6. Click **Create** to add Action Channel. 

![opsgenie-8](https://github.com/spotinst/help/assets/106514736/ae0e3b6a-d3b7-4f22-aa3e-72afb41ae51e)

### Step 3: Get Webhook API Key Value 

Copy the Webhook API Key Value from the Webhook API Key Value field in the right panel of your Spot Connect workflow.  

If you do not already have a Spot Connect API Key, create one in the Settings page. In the Settings page, click **Resources** and then **API Keys**. 

![opsgenie-9](https://github.com/spotinst/help/assets/106514736/62a0eba7-2d32-46c7-adb5-982ab5785d59)

### Step 4: Create a Managed Action 

1. Select **Teams** and **Action**.  
2. Click **Add Action**. 

![opsgenie-10](https://github.com/spotinst/help/assets/106514736/a595b003-d185-475a-87f3-45373a7f55ca)

3. Select **REST Endpoint** and then the previously created Action Channel.  
4. Click **Next** and then **Create**.  

![opsgenie-11](https://github.com/spotinst/help/assets/106514736/2a25f7f7-e733-444e-aa73-bbb8576a0a92)

### Step 5: Create Policy for Created Managed Action 

1. Select **Teams** and then **Policies**. 
2. Click **Add Action Policy**.  

![opsgenie-12](https://github.com/spotinst/help/assets/106514736/083228b7-47f4-4b94-8409-701067a154bd)

3. Give the policy a name and description.  
4. Switch ON Enable policy when created, add conditions when you want to trigger Webhooks. 
5. Then click **Create and enable policy**. 

![opsgenie-13](https://github.com/spotinst/help/assets/106514736/8a78fc60-834f-4522-b4f8-4fa1e77b1f2c)

## Integration Actions  

You can add Opsgenie Alert (Trigger) action in the Spot Connect workflow builder as part of your workflow. 

* [Opsgenie Alert](spot-connect/integrations/opsgenie?id=opsgenie-alert) 

### Opsgenie Alert 

You can add this action in the Spot Connect workflow builder, as part of your workflow. 

#### Input  

|       Parameter  |            Description        |      Required  |
|------------------|:-----------------------------:|:--------------:|
|      service_id  |     Opsgenie service id       |     True       |
|      alert_body  |     Alert body from Opsgenie  |     True       |

#### Output  

|       Parameter        |       Type  |                     Description                |
|------------------------|:-----------:|:----------------------------------------------:|
|      Output            |     Object  |     JSON of incoming alert body from Opsgenie  |
|      execution_status  |     String  |     Status of run (ie: S_OK / E_FAIL)          |

### Opsgenie Webhook Trigger 

To automatically execute a Spot Connect workflow with a Opsgenie alert in real-time, follow the steps here to set up a webhook integration between Spot Connect and Opsgenie. 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**. 

#### Create a New Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Opsgenie**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the Opsgenie trigger node to open the right panel. Under Webhook API Key Name, select an API Key you created earlier. 
3. Compose your workflow and save it. 

In the workflow builder, click the Opsgenie trigger node to save the following values from the right panel:  

* **Webhook API Key Value** 
* **Workflow Webhook URL** 

![opsgenie-14](https://github.com/spotinst/help/assets/106514736/da6986d3-1d99-413b-99f6-e2f448ad3ed3)

#### Action Example 

1. Create a new workflow.  
2. Give a name and select Opsgenie as the trigger type. 

![opsgenie-15](https://github.com/spotinst/help/assets/106514736/0a37b0b9-553d-4037-bf95-c15b886a0e0d)

3. Select trigger node. 
4. Select Webhook API key name. 

![opsgenie-16](https://github.com/spotinst/help/assets/106514736/8bb92ca7-bd5c-420f-a612-6e38ab59d3d5) 

5. Copy the Workflow Webhook URL and use it to integrate the workflow with your Opsgenie Alert. 

 
 

 

 
