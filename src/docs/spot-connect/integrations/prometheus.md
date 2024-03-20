# Prometheus

Use this integration to monitor machine-centric as well as highly dynamic service-oriented architectures. 

Prometheus is designed to diagnose problems during an outage. Each Prometheus server is standalone and doesn't depend on network storage or other remote services. You can rely on it when other parts of your infrastructure are broken, and you do not need to set up extensive infrastructure to use it. 

This integration covers the alert capability of Prometheus. 

Prometheus in a Spot Connect workflow enables you to trigger a workflow in Spot Connect, when a Prometheus notification is sent by its alert manager.  

The integration between Spot Connect and Prometheus enables you to trigger a workflow in Spot Connect, when a Prometheus notification is sent by its alert manager. 

## Integration Actions 

You can use this action in the Spot Connect workflow builder as part of your workflow. 

* [Prometheus Webhook Trigger](spot-connect/integrations/prometheus?id=prometheus-webhook-trigger) 

## Prometheus Webhook Trigger 

To automatically execute a Spot Connect workflow with a Prometheus event in real-time, complete the following steps to set up a Prometheus webhook integration with Spot Connect. 

#### In Spot Connect 

If you do not already have a Spot Connect API Key, create one by completing the following steps: 

1. In the left main menu, click **Connect** and click **Settings**. 
2. Scroll down and under Resources, click **API Keys**. 
3. Create an API Key and click **Save**. 

### Create a New Workflow 

1. In the left main menu, click **Connect** and click **Workflows**. 
2. Click **New Workflow** and enter a name for the workflow. 
3. Scroll down and select **Prometheus**. 
4. Click **Create Workflow**. 
5. In the center panel of the workflow builder, click the Prometheus trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier. Compose your workflow and save it. 
6. In the workflow builder, click the Prometheus trigger node to save the following values from the right panel: 

* **Webhook API Key Value** 
* **Workflow Webhook URL** 

<img width="689" alt="prometheus-1" src="https://github.com/spotinst/help/assets/106514736/96c9e613-fc53-4004-a269-9b703b7aa2a1">

### In Prometheus 

Complete the following steps in your Prometheus infrastructure to integrate with Spot Connect: 

1. The Prometheus Alertmanager is required for this integration to route alerts from Prometheus to Spot Connect. Install Prometheus Alertmanager if you don't have it installed already and log in to your Prometheus Alertmanager Server. 
2. Open the Alertmanager configuration file, in the receiver's config section create a new webhook configuration for Spot Connect either under an existing receiver or as a new receiver. 

```json
receivers: 
- name: 'spot-connect' 
  webhook_configs: 
  - send_resolved: true 
    url: 'SPOT_CONNECT_WEBHOOK_URL?x-api-key=SPOT_CONNECT_API_KEY' 
    max_alerts: 0 
```

3. In the previous receiver configuration for url in webhook_configs, replace the SPOT_CONNECT_WEBHOOK_URL with the Workflow Webhook URL value saved from your Spot Connect workflow. Replace SPOT_CONNECT_API_KEY with Webhook API Key Value. 
4. Save the Alertmanager configuration. 
5. Start the Alertmanager server or restart to load the updated configuration to take effect if it was already running. 

#### Action Example 

#### Input 

Workflow execution from a Prometheus webhook request: 

![prometheus-2](https://github.com/spotinst/help/assets/106514736/9a8c438a-559e-487d-91c6-943d1b986bad)

#### Output 

![prometheus-3](https://github.com/spotinst/help/assets/106514736/302eb6f6-7d57-41a0-9a66-152d19e78063)
