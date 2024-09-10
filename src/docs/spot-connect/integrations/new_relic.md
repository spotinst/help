<meta name="robots" content="noindex">

# New Relic

New Relic is a cloud-based observability platform built to help you create more perfect software. It includes these core components:
* **Full-Stack Observability** lets you easily visualize, analyze, and troubleshoot your entire software stack in one connected experience. With rich analytics and a curated user experience, Full-Stack Observability surfaces the context your teams need to pinpoint and resolve problems within your infrastructure, applications, and end-user experience faster.
* **Applied Intelligence**
* **Telemetry Data**

New Relic in a Spot Connect workflow lets you:

* [Run New Relic NRQL Query](spot-connect/integrations/new_relic?id=integration-action-new-relic-nrql-query) to gather data from curated monitoring that spans your entire estate, from applications and infrastructure to logs and serverless apps.
* [Trigger a workflow in Spot Connect](spot-connect/integrations/new_relic?id=integration-action-new-relic-webhook-trigger) when a specific New Relic Alert condition goes into the state of <i>Alert</i>.

## Configure New Relic in Spot Connect

1. Sign in to your New Relic account.
2. [Create a user key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/) in New Relic.
3. Copy the user key value.
4. In the Spot console, go to **Connect** > **Settings** > **Integarations**.
5. Click  **New Relic** > **Add Integration**.
6. Copy the [Account ID](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/) from New Relic.
7. Paste the Account ID from New Relic in <i>New Relic Account Id</i>.
8. Paste the user key value from New Relic in <i>New Relic API Key</i>.
9. Click **Add Instance**.

## Integration Action: New Relic NRQL Query

Use the action to run New Relic NRQL Query and retrieve data in Spot Connect

#### Input

| Parameter          | Description                                                        | Required |
|--------------------|--------------------------------------------------------------------|----------|
| New Relic Instance | Select a New Relic integration instance configured in Spot Connect | Required |
| NRQL Query         | NRQL query to be run on the given New Relic account                | Required |
| S3 Bucket          | An S3 bucket to store the query and the result.                    | Optional |

#### Output

| Parameter           | Type    | Description                                                   |
|---------------------|---------|---------------------------------------------------------------|
| result              | Object  | The output of the NRQL Query                                  |
| is_result_truncated | Boolean | Boolean value which denotes if the result is truncated or not |
| result_bucket_key   | String  | Name of the file where result is written                      |
| s3_bucket           | String  | Name of the bucket                                            |
| execution_status    | String  | The execution status of the query run (ie: S_OK / E_FAIL)     |

#### Action Example

1. Drag and drop the New Relic NRQL Query action node onto the workflow builder center panel.
2. Select the New Relic NRQL Query action node.
3. Select New Relic Instance.
4. Enter the NRQL Query.
5. You can select the S3 bucket name for the query output.

## Integration Action: New Relic Webhook Trigger

You can automatically execute a Spot Connect workflow with a New Relic alert in realtime after you set up a webhook integration between Spot Connect and New Relic:

1. Set up an [API key](spot-connect/integrations/apikeys) if you don't already have one.
2. In the Spot console, select **Connect** > **Workflows**.  
3. Click **New Workflow** and enter a name for the workflow.
4. Select **New Relic** > **Create Workflow**.

   <details>
   <summary markdown="span">View image</summary>
   <img width=900 src="/spot-connect/_media/general-webhook-integration-1.png" />

   </details>

4. In the center panel of the workflow builder, click the New Relic trigger node to open the right panel.
5. In the **Webhook API Key Name**, select the API key you created earlier.  
6. Compose your workflow and save it.
7. In the workflow builder, click the New Relic trigger node and copy the Webhook API Key Value and the Workflow Webhook URL.

   <details>
   <summary markdown="span">View image</summary>
     
    <img width="700" src="https://github.com/user-attachments/assets/458cf53c-84cd-4199-a389-bf0143ecb404">

   </details>
8. In New Relic, [set up a webhook destination](https://docs.newrelic.com/docs/alerts/get-notified/notification-integrations/#set-webhook-destination):
    * Paste the New Relic Workflow Webhook URL from the Spot Connect workflow builder in the **Endpoing URL**.
    * If you want to set up a custom header:
       <ol style="list-style-type: lower-alpha;">
         <li>Click <b>+ custom headers</b> and enter <i>x-api-key</i> as the custom header <bname</b.</li>
         <li>Paste the Webhook API Key Value from the Spot Connect workflow builder in the custom header <b>value</b>.</li>
       </ol>
