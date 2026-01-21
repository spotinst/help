# Webhooks

Webhooks are automated messages sent from applications when specific events occurs. They contain a payload and are sent to a unique URL. This simple mechanism allows nearly every service to integrate with Spot Connect using webhooks.

Webhook integration in a Spot Connect workflow lets you trigger an execution of a workflow after validating the webhook input. When creating a workflow, Spot Connect provides a generic webhook trigger node that can be invoked by any external application to automatically execute the workflow.

## Integration Actions

Within the Spot Connect workflow builder, you can utilize the following action as part of your workflow:

## Generic Webhook Trigger

To automatically execute a Spot Connect workflow with a Generic Webhook event, complete the following steps to set up a webhook integration between Spot Connect and the third-party application.

### Configure in Spot Connect

If you do not already have a Spot Connect API Key, create one by completing the following steps:  

1. In the main menu on the left, click **Connect**, then select **Settings**.
2. Scroll down to the Resources section and click **API Keys**.  
3. Create an API Key and click **Save**.

#### Create a New Workflow

1. In the main menu on the left, click **Connect** and click **Workflows**.  
2. Click **New Workflow** and enter a name for the workflow.
3. Scroll down and select **Generic Webhook**.
4. Click **Create Workflow**.  

<img src="/spot-connect/_media/general-webhook-integration-1.png" />

5. In the center panel of the workflow builder, click the Generic Webhook trigger node to open the right panel. Under Webhook API Key Name, select the API Key you created earlier.  
6. Compose your workflow and save it.

In the workflow builder, click the copy icon in each of the Webhook API Key Value and the Workflow Webhook URL fields to save the values. You can paste and save them into your text editor for later use when configuring the third-party application.

<img src="/spot-connect/_media/general-webhook-integration-2.png" />  

### Connect to a Third-party Application

To trigger the execution of the Spot Connect workflow you created, a third-party system needs to send a POST request to a specific webhook URL, with an authorized API key included in the request header x-api-key. You can use Postman to test this setup.  

1. Log in to Postman.
2. Create a new POST request using Workflow Webhook URL value saved from Spot Connect.
3. Add a custom header.
    * Key: x-api-key.
    * Value: Webhook API Key Value saved from Spot Connect.
4. Enter a JSON string as the request Body.
5. Send the request.

You can find the workflow execution listed in the Spot Connect Executions page.

#### Action Example

Create a webhook request from Postman to trigger a workflow execution in Spot Connect.

<img src="/spot-connect/_media/general-webhook-integration-3.png" />   

The workflow execution resulting from the webhook request will be displayed accordingly.

<img src="/spot-connect/_media/general-webhook-integration-4.png" />

## Testing Webhooks

### Beeceptor

[Beeceptor](https://beeceptor.tech/webhook-integration/) allows developers to create mock API endpoints effortlessly, enabling the capture and inspection of HTTP traffic in real-time. This is particularly useful for testing webhooks during development.

It’s local tunneling feature enables developers to route external event payloads directly to their local development environment. This capability facilitates immediate testing and debugging without necessitating repeated deployments, thereby expediting the development process.

**Key Benefits**:
- **Immediate Testing and Debugging**: Developers can test and debug in real-time within their local setup.
- **Faster Integration**: By eliminating the need for frequent deployments, the integration process is significantly accelerated.

### ngrok

[ngrok](https://ngrok.com/) provides a public URL that forwards requests to your local server, enabling you to test webhooks without deploying your application to a public environment. This setup is particularly useful for debugging and validating webhook integrations in real-time.

> **Note:** Exercise caution when using external tools to avoid exposing sensitive information or compromising system security.

## Security Best Practices for Webhooks
Implementing robust security measures is crucial when handling webhooks to protect your system from unauthorized access and data breaches. Key practices include:

- **Use HTTPS and SSL Verification**: Ensure that your webhook endpoints are accessible over HTTPS to encrypt data in transit, preventing interception and tampering.
- **Verify Payloads with Secrets**: Utilize a shared secret between Spot Connect and your application to validate incoming webhook requests, confirming their authenticity.
- **Validate Incoming Data**: Implement rigorous validation and sanitization procedures for any data received through webhooks, and always treat incoming data as untrusted.

## Logging and Monitoring Webhook Events
Maintaining comprehensive logs and monitoring systems is vital for tracking webhook events and diagnosing issues.

- **Log Webhook Events**: Record details of incoming webhook requests, including headers, payloads, and response statuses, to facilitate debugging and auditing.
- **Monitor for Anomalies**: Set up alerts to detect unusual patterns, such as a sudden spike in webhook traffic or repeated failures, enabling prompt investigation and resolution.
