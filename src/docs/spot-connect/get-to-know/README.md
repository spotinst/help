# Get to Know the Workflow Builder

In the workflow interface you can drag, drop and connect nodes on the canvas to create a workflow that suits your needs.

1. In the left menu, click **Connect** and then **Workflows**.  
2. Click **New Workflow**. The Create New Workflow window opens and displays all the workflows created by users within the Spot Organization.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-1.png" />

3. In the Workflow Name field, enter a suitable workflow name. Workflow names cannot start with aws, amazon, or amz.

4. Select the trigger type.

* You can select the trigger type once the integration is configured and authorized on the Settings page.
* Generic Webhook can be used for any third-party application that supports webhook as a notification.

5. Click **Create Workflow**.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-2.png" />

**The interface consists of three panels to create your workflow**:

* **Left Panel** – A library of integration actions. Click the + icon in the top left to open and close the library.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-3.png" width="400" height="650" />

* **Center Panel** - A canvas where you can drag and drop action nodes to connect them and create a workflow.

* **Right Panel** – An action configuration panel where you select the integration instance, account, and operation, enter the input parameters, and explore the output of your chosen action.

**Workflows in Action**

The following methods are supported to run workflows in Spot Connect:

* Manually run a workflow: from the Workflow Builder page.  
* Schedule a workflow on a specific interval: from the Workflow Builder page.
* Automatically execute a workflow using a webhook.
  - Workflows can be triggered automatically from any third-party application that supports webhooks.
  - Select the Trigger Type when a new workflow is created.

The trigger types shown provide the default JSON schema body in the output of the trigger node. However, the generic webhook trigger can be selected for any third-party application. There are no restrictions.  

## Webhook Trigger

After creating the workflow, click the trigger node to select the API key.

Click **Settings** and then **Resources** to create the API Key.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-4.png" width="500" height="500" />

Once the key is selected, the API key and Webhook URL can be copied.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-6.png" />

Webhook URL requires an API key to authenticate. For instance, the API key can be added as a query parameter or be embedded in the URL for usage with AWS SNS Topics.

Postman can be used to quickly test the execution of the workflow with example data provided in the body.

<img src="/spot-connect/_media/get-to-know-wkflw-bldr-7.png" />

## What's Next?

Create your first workflow with [Spot integration](spot-connect/get-to-know/create-first-workflow-spot) or [AWS integration](spot-connect/get-to-know/create-first-workflow-aws).
