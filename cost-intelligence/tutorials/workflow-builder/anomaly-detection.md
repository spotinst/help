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
   
3. On the right panel, click the Indicator chart <img height="18" alt="Anomaly-indicatorChart" src="https://github.com/user-attachments/assets/7b750c6f-e8c2-483b-b9fd-c603eb93d22f">.

4. On the left panel, drag **ServiceCategory** to the <i>Values</i> field.

   <video width=800 src="https://github.com/user-attachments/assets/26f8591c-46a6-453f-a660-fa4d896653b1" controls>

5. In the <i>Values</i> field, click the three vertical dots <img height="16px" alt="kebab" src="https://github.com/user-attachments/assets/4220ff97-90c3-4801-8edf-06f7addcf60a"> and select **Distinct Count**.
6. In the menu in the right panel, click **Comparison**. The <i>Date Column</i> field opens. From the left panel, drag **BillingPeriodStart** into the <i>Date Column</i> field.

   <video width=800 src="https://github.com/user-attachments/assets/61f78cd1-882f-4457-81d4-7865e69db7e1" controls>
   
8. Select the two time periods to compare between in the <i>Time Period</i> field and the <i>Comparison field</i>. In this example:
    * **Time Period**: select <i>Today</i>.
    * **Comparison field**: select <i>Last Week</i>.
  
9. Make sure that the **Type** is percent **%**.

10. You can add a number of filters. For example, you can filter on provider, specific regions, and service category:
    
    <ol style="list-style-type: lower-alpha;">
    <li>In the right panel, click <b>Filters</b>.</li>
    <li>Click <b>Add Filters</b> to open the list of columns for filtering.</li>
    <li>In the <i>Column</i> field, select <b>Provider</b>, and click the <i>is</i> field, select <b>AWS</b>. Click <b>Apply</b>.</li>
    <li>Click <b>Add Filters</b> again to filter according to a region.</li>
    <li>In the <i>Column</i> field, select <b>Region</b>, and select the relevant regions. Click <b>Apply</b>.</li>
    <li>Click <b>Add Filters</b> again to add a filter. Select <b>ServiceCategory</b> from the <i>Columns</i> dropdown list.</li>
    <li>Search for and select <b>Compute</b>.</li>
       
    The applied filters should appear as:
    
    <img width="150" alt="Anomaly-filters" src="https://github.com/user-attachments/assets/8a77ad68-7a92-4445-8b0b-c9f90bf2a90e">

    </ol>

11. Click the <i>Untitled Chart</i> field and enter a unique name for the metric, such as **Anomaly—AWS Compute US-East**.
12. Click **Save**. The workflow is added to the dashboard.
13. Click **Publish Dashboard**. The metric is prepared for the workflow builder to create an anomaly alert.

## Step 2: Create an Anomaly Detection Workflow 

Create an alert flow with the workflow builder.

### Example 

The example below shows how to create an alert flow. You can create more complex flows.

1. In the left menu of the Cost Intelligence console, click **Workflow Builder** > **Create New Flow**.
2. Click the <i>Untitled</i> field and enter a name and description.
3. Go to **Triggers** and drag **Scheduling** to <i>Add a trigger to start</i>. Configure it to start today, to never end, and repeat every 1 day.
   
   <video width=800 src="https://github.com/user-attachments/assets/6154d0ce-73a8-4829-b02a-37f5ada5d2a3" controls>
 
4. From the Conditions menu on the right panel, drag **If** to the <i>Trigger</i> widget in the workflow builder.

   <video width=800 src="https://github.com/user-attachments/assets/716c4092-6b2d-4491-9eab-8d1d5e110cf5" controls>

5. Click the arrow in the <i>If Field</i> widget. Select **If Metric**.
6. Select:
    * **Metric**: Select the metric you created in Step 1. Tip: The metric you recently created is at the bottom of the list.
    * **Type of Value**: Select <i>% Change</i>.
    * **Is**: Select <i>Greater than or equal to</i>.
    * **Value**: Enter an appropriate numeric value of the percentage.
7. From the Send Actions menu on the right panel, drag [Send Email](cost-intelligence/tutorials/workflow-builder/configuring-and-sending-emails) under the **If** condition that was created in the previous steps.

      <video width=800 src="https://github.com/user-attachments/assets/e2eddd9f-a3f5-420a-adc4-adc92faa7b75" controls>

8. Configure the email:
    * **To**: You can configure the email to send to a number of email addresses.
    * **Subject**: Enter the subject of the email.
    * **Message**: Enter the message of the email. In the body of the message, make sure to include the [token](cost-intelligence/tutorials/workflow-builder/?id=tokens) that represents the value of the metric that triggered the email.

9. A basic anomaly detection flow is configured. Click **Activate** to validate the configuration and activate the flow.
