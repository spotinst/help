<meta name="robots" content="noindex">

# Alerts and Actions Based on Anomaly Detection

You can create a custom series of alerts and actions using the workflow builder based on automatically identified anomalies. 

## Step 1: Configure the Anomaly Detection Metric 

Create a metric in the **Cost Intelligence** dashboards.

1. In the left main menu, select **Cost Intelligence** > **Dashboard**.
2. In the <i>Dashboard</i> dropdown menu on the top right, click **Cost Intelligence Anomaly Metrics**.
3. Click **Actions** > **Edit**.
4. Click **Add Chart**. 

### Example

The example below shows how to generate a metric that identifies the percentage change of compute resources for a specific AWS region, comparing a day to its previous week. 

1. On the left panel, click the **Billing** dataset.
   
   <img width="247" alt="Anomaly1" src="https://github.com/user-attachments/assets/040bd19b-2403-4b51-8ced-125dd9e5bfb4">
   
3. On the right panel, click the Bar chart <img height="18px" src="https://github.com/user-attachments/assets/b2800812-13f5-424e-a8be-087e44d7d372">.
4. On the left panel, drag **ServiceCategory** to the <i>Values</i> field.

   <video src="https://github.com/user-attachments/assets/72f9cbc4-1b49-4182-9125-e8f4111b9bf8" controls>

5. In the <i>Values</i> field, click the three vertical dots <img height="16px" alt="kebab" src="https://github.com/user-attachments/assets/4220ff97-90c3-4801-8edf-06f7addcf60a"> and select **Aggregation** > **Distinct Count**.
6. In the menu in the right panel, click **Comparison**. The <i>Date Column</i> field opens. From the left panel, drag **BillingPeriodStart** into the <i>Date Column</i> field.
7. Select the two time periods to compare between in the <i>Time Period</i> field and the <i>Comparison field</i>. In this example:
    * **Time Period**: select <i>Today</i>.
    * **Comparison field**: select <i>Last Week</i>.

  
  > **Note**: Make sure that the percentage icon is selected for Type. 

## Add Filters

You can add a number of filters:

1. In the right panel, click **Filters**.
2. Click **Add Filters** to open the list of columns for filtering.
3. In the <i>Column</i> field, select **Provider**, and click the <i>is</i> field, select **AWS**. Click **Apply**.
4. Click **Add Filters** again to filter according to a region.
5. In the <i>Column</i> field, select **Region**, and click the <i>is</i> field, select a region or a number of regions. Click **Apply**.
6. Click **Add Filters** again to add a filter. Select **ServiceCategory** from the <i>Columns</i> dropdown list.
7. Search for and select **Compute**. The applied filters should appear as below.
8. Click the <i>Untitled Chart</i> field and enter a unique name for the metric **Anomaly—AWS Compute US-East**.
9. Click **Save**. The workflow is added to the dashboard.
10. Click **Publish Dashboard**. The metric is prepared for the workflow builder to create an anomaly alert.

## Step 2: Create an Anomaly Detection Workflow 

Create an alert flow with the workflow builder.

### Example 

The example below shows how to create an alert flow. You can create more complex flows.

1. In the left menu of the Cost Intelligence console, click **Workflow Builder** > **Create New Flow**.
2. Click the <i>Untitled</i> field and enter a name and description.
3. Click **Trigger - Scheduling** and configure it to start today, to never end, or repeat every 1 day.
4. From the Conditions menu on the right panel, drag **If** to the <i>Trigger</i> widget in the workflow builder.
5. Click the arrow in the <i>If Field</i> widget. Select **If Metric**.
6. Select:
    * **Metric**: Select the metric you created in Step 1. Tip: The metric you recently created is at the bottom of the list.
    * **Type of Value**: Select <i>% Change</i>.
    * **Is**: Select <i>Greater than or equal to</i>.
    * **Value**: Enter an appropriate numeric value of the percentage.
7. From the Send Actions menu on the right panel, drag [Send Email](cost-intelligence/tutorials/workflow-builder/configuring-and-sending-emails) under the **If** condition that was created in the previous steps.
8. Configure the email:
    * **To**: You can configure the email to send to a number of email addresses.
    * **Subject**: Enter the subject of the email.
    * **Message**: Enter the message of the email. In the body of the message, make sure to include the [token](cost-intelligence/tutorials/workflow-builder/?id=tokens) that represents the value of the metric that triggered the email. 

A basic Anomaly Detection flow is configured. Click Activate to validate the configuration and activate the flow. 
