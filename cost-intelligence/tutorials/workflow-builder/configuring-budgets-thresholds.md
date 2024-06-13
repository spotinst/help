# Workflow Builder – Basic Alerts for Budgets and Thresholds 
You can create many kinds of alerts in Workflow Builder, based on budgets and thresholds that you set. They are delivered by email, SMS, or Slack integration.

After a flow has been running for a while, open the flow and review the activity log to make sure the flow is working as expected.

## Configure Your Budget and Thresholds
1. Configure a metric in the Cost Intelligence Dashboards. You can use a prebuilt metric from Billing Engine or Cost Intelligence, or create your own.

2. Go to the Cost Intelligence Workflow Builder and create a new Flow with a trigger.
   For example, we’ll run this flow once a day, every day.

3. Add an <i>If</i> condition to the trigger and change it to <i>Metric</i>.

   <details>
    <summary markdown="span">View image</summary>

    ![image](https://github.com/spotinst/help/assets/167069628/81481441-5f4a-45e6-8229-73fa97d46580)
 
    </details>

4. Select the metric for this budget/threshold flow.
5. Add Actions as needed.

   <details>
    <summary markdown="span">View image</summary>

    ![image](https://github.com/spotinst/help/assets/167069628/fb43a911-f8ca-427a-80f7-1198441456fd)

    </details>

Click **Activate** to start the validation checks.
