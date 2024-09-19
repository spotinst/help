<meta name="robots" content="noindex">

# Datadog Usage Metric

Use Datadog integration to collect billable and usage metrics for your organization.

## Configure Datadog in Spot Connect

1. Sign in to your Datadog account.
2. [Create an API key](https://docs.datadoghq.com/account_management/api-app-keys/#add-an-api-key-or-client-token) in Datadog.
3. Copy the API key value.
4. [Create an application key](https://docs.datadoghq.com/account_management/api-app-keys/#add-application-keys) in Datadog.
5. Copy the application key.
6. In the Spot console, go to **Connect** > **Settings** > **Integrations**.
7. Click  **Datadog** > **Add Integration**.
8. Paste the application key in <i>Datadog Application Key</i>.
9. Paste the API key in <i>Datadog API Key</i>.
11. Click **Add Instance**.

##  Integration Action: Hourly Usage by Product Family

1. [Set up usage metering](https://docs.datadoghq.com/api/latest/scopes/#:~:text=Get%20user%20memberships-,Usage%20Metering,-SCOPE%20NAME) in Datadog: [Get hourly usage by product family](https://docs.datadoghq.com/api/latest/usage-metering/#get-hourly-usage-by-product-family).
2. In the Spot console, select **Connect** > **Workflows**.
3. Click **New Workflow** and enter a name for the workflow.
4. Select **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> > **Create Workflow**.
5. In the center panel of the workflow builder, click the **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> node to open the right panel.
6. In the **Webhook API Key Name**, select the API key you created earlier.
7. <font color="#FC01CC">We need to run this snippet node within loop node as it exceeds more than 5 mins of run time for longer time frame (start month and end month). --- **how do you do this?** and what's the next step?</font>
8. Add a **Loop** action with <font color="#FC01CC">what does the loop action need?</font>.
9. In the **Loop** action, add a **Datadog Usage Metering** action. Make sure to select **Usage category** > <i>Hourly usage by product family</i>.
10. Click **Save Workflow**.

#### Input

| Parameter           | Description                                                         | Required  |
|---------------------|---------------------------------------------------------------------|-----------|
| Datadog Instance    | The instance added in the integration                               | Required  |
| Usage Category      | Hourly usage by product family                                      | Required  |
| Product families    | The list of product families to retrieve                            | Required  |
| Start Time          | Date for usage starting at a specific time, such as 2024-03-01 T06  | Required  |
| End time            | Date for usage ending at a specific time, such as 2024-05-01 T06    | Optional  |
| Include descendants | Include child org usage in response (true/false)                    | Optional  |
| S3 Bucket           | The S3 bucket to store the query result.                            | Optional  |
| S3 Bucket Key       | Name of S3 key                                                      | Optional  |


#### Output

| Parameter        | Type   | Description                           |
|------------------|--------|---------------------------------------|
| execution_status | String | Status of run (such as S_OK / E_FAIL) |
| output           | Map    | Usage API response                    |
| s3_url           | String | URL where the data/output is saved    |

##  Integration Action: Billable Across Account<font color="#FC01CC"> is each action supposed to be its own flow or are all the actions just nodes in a single flow?</font>

1. [Set up usage metering](https://docs.datadoghq.com/api/latest/scopes/#:~:text=Get%20user%20memberships-,Usage%20Metering,-SCOPE%20NAME) in Datadog: [Get billable usage across your account](https://docs.datadoghq.com/api/latest/usage-metering/#get-billable-usage-across-your-account).
2. In the Spot console, select **Connect** > **Workflows**.
3. Click **New Workflow** and enter a name for the workflow.
4. Select **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> > **Create Workflow**.
5. In the center panel of the workflow builder, click the **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> node to open the right panel.
6. In the **Webhook API Key Name**, select the API key you created earlier.
7. Add a **Datadog Usage Metering** action. Make sure to select **Usage category** > <i>Billable across account</i>.
8. Click **Save Workflow**.


#### Input

| Parameter           | Description                                                         | Required  |
|---------------------|---------------------------------------------------------------------|-----------|
| Datadog Instance    | The instance added in the integration                               | Required  |
| Usage Category      | Billable across account                                             | Required  |
| Start Month         | Date for usage starting at a specific time, such as 2024-03-01 T06  | Required  |
| S3 Bucket           | The S3 bucket to store the query result.                            | Optional  |
| S3 Bucket Key       | Name of S3 key                                                      | Optional  |


#### Output

| Parameter        | Type   | Description                           |
|------------------|--------|---------------------------------------|
| execution_status | String | Status of run (such as S_OK / E_FAIL) |
| output           | Map    | Usage API response                    |
| s3_url           | String | URL where the data/output is saved    |

##  Integration Action: Usage Across Account<font color="#FC01CC"> is each action supposed to be its own flow or are all the actions just nodes in a single flow?</font>

1. [Set up usage metering](https://docs.datadoghq.com/api/latest/scopes/#:~:text=Get%20user%20memberships-,Usage%20Metering,-SCOPE%20NAME) in Datadog: [Get usage across your account](https://docs.datadoghq.com/api/latest/usage-metering/#get-usage-across-your-account).
2. In the Spot console, select **Connect** > **Workflows**.
3. Click **New Workflow** and enter a name for the workflow.
4. Select **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> > **Create Workflow**.
5. In the center panel of the workflow builder, click the **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> node to open the right panel.
6. In the **Webhook API Key Name**, select the API key you created earlier.
7. Add a **Datadog Usage Metering** action. Make sure to select **Usage category** > <i>Usage across account</i>.
8. Click **Save Workflow**.

#### Input

| Parameter           | Description                                                         | Required  |
|---------------------|---------------------------------------------------------------------|-----------|
| Datadog Instance    | The instance added in the integration                               | Required  |
| Usage Category      | Usage across account                                                | Required  |
| Start month         | Date for usage starting at a specific time, such as 2024-03-01 T06  | Required  |
| End month           | Date for usage ending at a specific time, such as 2024-05-01 T06    | Optional  |
| Include org details | Include usage summaries for each suborg (true/false)                | Optional  |
| S3 Bucket           | The S3 bucket to store the query result.                            | Optional  |
| S3 Bucket Key       | Name of S3 key                                                      | Optional  |


#### Output

| Parameter        | Type   | Description                           |
|------------------|--------|---------------------------------------|
| execution_status | String | Status of run (such as S_OK / E_FAIL) |
| output           | Map    | Usage API response                    |
| s3_url           | String | URL where the data/output is saved    |

##  Integration Action: Historical Cost Across Account<font color="#FC01CC"> is each action supposed to be its own flow or are all the actions just nodes in a single flow?</font>

1. [Set up usage metering](https://docs.datadoghq.com/api/latest/scopes/#:~:text=Get%20user%20memberships-,Usage%20Metering,-SCOPE%20NAME) in Datadog: [Get historical cost across your account](https://docs.datadoghq.com/api/latest/usage-metering/#get-historical-cost-across-your-account).
2. In the Spot console, select **Connect** > **Workflows**.
3. Click **New Workflow** and enter a name for the workflow.
4. Select **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> > **Create Workflow**.
5. In the center panel of the workflow builder, click the **Datadog** <font color="#FC01CC">manual trigger or datadog?</font> node to open the right panel.
6. In the **Webhook API Key Name**, select the API key you created earlier.
7. Add a **Datadog Usage Metering** action. Make sure to select **Usage category** > <i>Historical cost across account</i>.
8. Click **Save Workflow**.

#### Input

| Parameter           | Description                                                         | Required  |
|---------------------|---------------------------------------------------------------------|-----------|
| Datadog Instance    | The instance added in the integration                               | Required  |
| Usage Category      | Historical cost across account                                      | Required  |
| Start month         | Date for usage starting at a specific time, such as 2024-03-01 T06  | Required  |
| End month           | Date for usage ending at a specific time, such as 2024-05-01 T06    | Optional  |
| Include org details | Include usage summaries for each suborg (true/false)                | Optional  |
| S3 Bucket           | The S3 bucket to store the query result.                            | Optional  |
| S3 Bucket Key       | Name of S3 key                                                      | Optional  |


#### Output

| Parameter        | Type   | Description                           |
|------------------|--------|---------------------------------------|
| execution_status | String | Status of run (such as S_OK / E_FAIL) |
| output           | Map    | Usage API response                    |
| s3_url           | String | URL where the data/output is saved    |
