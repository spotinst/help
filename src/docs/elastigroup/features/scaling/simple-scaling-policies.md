# Simple Scaling Policies

Simple scaling policies provide the ability to scale up when you need to accommodate increased workloads or to scale down to maximize cost efficiency during quiet hours. Set as many policies as needed to maximize the Elastigroup efficiency.

## How it Works

On a high level, simple scaling policies work according to the following process:
- You assign a metric that best describes the load of your application and set a threshold value for that metric.
- Elastigroup tracks the metric you have chosen. Whenever the threshold is surpassed, a scaling action (e.g., a scale up or a scale down, depending on the type of policy) is triggered.

## Create a Scale Up Policy

You can configure a simple scaling policy when you create an Elastigroup or by editing an existing Elastigroup. Do the following:
1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Up Scaling Policies, click Add, and then click on the policy name to open the form.

<img src="/elastigroup/_media/scaling-simple-scaling-01.png" width="521" height="298" />

3. Complete the following parameters in the form:
   - Policy Name: Enter the name to assign to the policy. It is recommended to use a meaningful name to help you understand scaling actions better in the future.
   - Policy Type: Choose Simple Scaling.
   - Source: The scaling policy can utilize metrics from either AWS CloudWatch or Spectrum.
   - Autoscale Based on: The metric used to trigger the policy's scaling action. Available options:
     - EC2 – CPU Utilization
     - ELB – Latency
     - EC2 – Network Out
     - Other - (used for custom metrics)
   - Threshold: Set the numerical at which a scaling action will be triggered.
   - Action: The action to take when the threshold is surpassed. Available options:
     - Set Capacity Range: Set a new Target-Minimum-Maximum configuration for the Elastigroup.
     - Add: The default value for up scaling. Add a specified amount of instances or vCPU units (according to the group capacity unit, configured under General tab, Advanced section).
     - Set minimum of: Set a new minimum capacity value for the Elastigroup.
     - Increase: Increase capacity by a specified percentage.
   - Amount: The number of instances or vCPUs that will be scaled (you can also specify expressions). If the adjustment is not a whole number, Elastigroup rounds it to the nearest whole.
   - Dimensions: Specify the name of the dimension used and it's value. If no dimension is specified, the default is the average of instances in the group, divided into instance types. Meaning an average value of the sampled metric is calculated for each instance type currently running in the group, and the first value to cross the threshold will trigger the policy. In the case of scaling up, it's likely to be the smallest instance type, as it will be the first to become loaded, while in scaling down the trigger will likely be the largest instance type.
4. To save the configuration, click Next, and then click Create or Update at the bottom of the Review tab.

## Autoscale Based on a Custom Metric

If you want to autoscale based on a custom metric, complete the form described above and choose Other in the Autoscale Based on field.

When you choose Other, you will then need to define the custom metric using the parameters described below.

<img src="/elastigroup/_media/scaling-simple-scaling-02.png" />

- Namespace: The default is
- Statistic: Choose from the list the type of value that will be evaluated.
- Metric Name: Enter the specific metric to be evaluated.
- Operator: Choose the criterion for evaluating the metric, e.g., greater than, less than.
- Threshold: Enter the numerical limit for the metric.
- Unit: Choose the unit of measurement.
- Consecutive Periods: The number of periods in a row to be evaluated before triggering a scale action.
- Period: Choose the amount of time in a single period.
- Action Type: Choose the type of action to be taken.
- Amount: Set the number of instances that fits the expression. This depends on the Action Type you choose.
- Cooldown: After a scaling action, there will be no new scaling action until this amount of time (seconds) has passed.

## Create a  Scale Down Policy

To create a Down scaling policy, do the following:
1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Down Scaling Policies, click Add, and then click on the policy name to open the form.
3. Complete the form for the Down Scale Policy. The form is like that of an Up scale policy, except for the list of actions available in the Action field. Choose from the following Actions:
   - Set Capacity Range: Similar to up scaling.
   - Remove: The default value for down scaling. Remove the specified number of instances or vCPU units.
   - Set maximum of: Set a new maximum capacity value for the Elastigroup.
   - Decrease: Decrease capacity by a specified percentage.

## Advanced Parameters

If necessary, you can also use advance parameters to define the scaling criteria.
- Statistic: The type of value you will utilize. Options are:
  - Average
  - Maximum
  - Minimum`
  - sampleCount
  - Sum
- Operator: This is the relation between the threshold and the sampled value.
- Consecutive Periods: The number of periods in a row to be evaluated before triggering a scale action.
- Period: Choose the amount of time in a single period.
- Cooldown: The time (in seconds) that all scaling activities will be suspended after a scaling policy is triggered. For example, if scaling policy A has Cooldown set to 60 sec. and a scale-down is triggered, then no new scale down will start due to policy A for the next minute. In addition, no new policies can go into effect while policy A is in cooldown.

> **Tip**: The Consecutive Periods setting directly affects the responsiveness of your scaling policy. The threshold must be crossed consistently for the entire duration of the number of consecutive periods for the policy to take effect.

## Configure Simple Scaling with Multiple Metrics

You can configure simple scaling to use multiple metrics when you create an Elastigroup or by editing an existing Elastigroup. Do the following:
1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies, click Up Scaling Policies or Down Scaling Policies.
3. Click Add, and then click on the policy name to open the form.

<img src="/elastigroup/_media/scaling-simple-scaling-04.png" width="522" height="299" />

4. Complete the following in the form:
   - Policy Name: Enter a name identifying your policy.
   - Policy Type: Choose Multiple Metric Scaling.
   - Expression: Enter an expression that uses one or more of the metrics you defined in the Metric List.
   - Operator: Choose the criterion for evaluating the metric, e.g., greater than, less than.
   - Threshold: Enter the numerical limit for the metric.
   - Consecutive Periods: The number of periods in a row to be evaluated before triggering a scale action.
   - Period: Choose the amount of time in a single period.
   - Action: Choose the type of action to be taken.
   - Amount: Set the number of instances that fits the expression. This depends on the Action Type you choose.
   - Cooldown: Enter the cooldown duration in seconds.
5. This policy will be saved when you finish creating or updating the Elastigroup (i.e., when you click Create or Update at the bottom of the Review tab).

> **Tip**: See a list of the [expressions and operators supported](elastigroup/features/scaling/multiple-metrics?id=expressions-and-operators-supported).

## What’s Next?

Learn more about the Metric List and how to set up [Multiple Metrics](elastigroup/features/scaling/multiple-metrics).
