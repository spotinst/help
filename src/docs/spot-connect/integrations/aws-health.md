# AWS Health

AWS Health Trigger Documentation 

 

Webhooks are automated messages that applications send for notifications and alerts. They contain messages, or payloads which are sent to a unique URL. 

AWS Health provides ongoing visibility into your resource performance and the availability of your AWS services. The AWS Health delivers alerts and notifications triggered by changes in the health of AWS resources. 

 

## Configure AWS Health Trigger 

There are 3 steps we need to follow to configure AWS Health trigger node: 

Setup API Keys 

Create a workflow using AWS Health trigger node 

Create Amazon EventBridge API Destination 

 

Setup API Keys 

Go to Spot Connect → Select Settings in the left nav bar → Under Integrations tab → Go to the resource section and click API Keys → Click on Add New button → Provide API Key Name → Click on Save button
  

NOTE: If API Keys is already created then the above steps are not required 

Workflow creation 

Configure a workflow using AWS Health as trigger node. 

 

Create EventBridge API Destination 

Create EventBridge API Destination by creating a rule under Amazon EventBridge 

Login to your AWS Management Console 

Open Amazon EventBridge console 

Open the Rules page and click Create rule 

Enter rule detail then click Next 

Name: your rule name 

Event bus: default 

Select “Enable the rule on the selected event bus” 

Rule type: Rule with an event pattern 

 

Build event pattern then click Next: 

Event source: AWS events or EventBridge partner events 

Creation method: Use pattern form 

Event pattern 

Event source: AWS services 

AWS service: Health 

Event type: All Events 

 

 

Select a target then click Next: 

Target type: EventBridge API destination 

API destination: select an existing API destination or create a new one 

Name: API destination name 

API destination endpoint: Workflow Webhook URL copied from Spot Connect AWS Health trigger node 

HTTP method: POST 

Connection type: select an existing connection or create a new one 

Connection name: a connection name 

Destination type: Other 

Authorization type: API Key 

API key name: x-api-key 

Value: copy from Spot Connect AWS Health trigger node Webhook API Key Value 

Execution role: Create a new role for this specific resource 

Keep the default role name 

 

 

Review settings and create the rule. 

Workflow Execution 

Spot Connect AWS Health workflow will be triggered when an EventBridge event for Health occurs. 

 

Select Executions in the left navigation to view workflow executions. 

 

  

 

 


