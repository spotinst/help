# Elastigroup Budgets

Elastigroup Budgets gives you budget management capabilities for all of your clusters. Get deeper visibility and control over your cloud expenses by setting budgets to clusters, defining alert thresholds, together with an email/SNS notification in case of budget deviation.

With Elastigroup Budgets, you can monitor and control your workload budget on a weekly basis, and identify upcoming spending trends.

Elastigroup Budgets lets you set a soft and hard limit budget on your workload, and once the budget threshold is exceeded, Elastigroup will notify you.

## Configure Budgets

You can set a budget for an Elastigroup:

- From the Elastigroup Dashboard
  
  In the Elastigroup dashboard, on the Costs tab, click **Set Budget**.

  <img src="/elastigroup/_media/configure-budgets_1.png" />

- From the Budgets Dashboard
  
  <img src="/elastigroup/_media/configure-budgets_2.png" />

  1. To access the Budgets dashboard, click **Budgets** > **Elastigroups**.

     <img src="/elastigroup/_media/configure-budgets_4.png" />

  You can see all the Elastigroups that are part of your account and don't have a budget configured yet.
    - Last Month Spend – Operational costs of the Elastigroup last month
    - Month to Date Spend – Operational costs of the EG so far

  <img src="/elastigroup/_media/configure-budgets_5.png" />

1. To set a budget for one of the Elastigroup in the list, click **Set Budget**.

2. In the Set Budget screen, you configure 2 variables:

   - Desired Monthly Budget of the Elastigroup in USD \$.
   - Thresholds

   <img src="/elastigroup/_media/configure-budgets_6.png" />

3. Click **Add Threshold**.

   <img src="/elastigroup/_media/configure-budgets_7.png" />

4. For a threshold you have the option to define 2 types of variables:

   - Percentage of the budget: For example, 75% of the budget.

     A threshold can be over 100%. For example 150% of the budget

   - Dollars: For example, 200\$.

5. For each threshold you configure, you can select the alerting type, either email or SMS.

6. You can define several thresholds for an Elastigroup.

7. Click **Set Budget**.


## Monitor Budgets

In the main Budgets dashboard you can monitor the budgets.

<img src="/elastigroup/_media/monitor-budgets_1.png" />

In the graph on the left, you can view the budget segmentation of **Total Spend** (costs so far) against the **Total Current Budget** (all budgets configured). This gives  you a Macro view of the total cost of your Elastigroup clusters.

The graph provides a breakdown of the Elastigroup costs for the last month's period, and also a prediction of the cost (according to the data of the month).

You can view the budget progress bar of each Elastigroup in Budgeted Elastigroups and identify if that specific Elastigroup has a budget deviation or if it's close to a budget deviation.

**Budget Alerts** shows if a threshold has been crossed.
