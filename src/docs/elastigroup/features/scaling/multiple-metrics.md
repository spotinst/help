# Multiple Metrics

In its simplest form, autoscaling is based on tracking of a metric you choose, for example, Average CPU or Latency. When the metric exceeds a defined threshold, then a scaling action is triggered.

With Elastigroup, you can utilize more sophisticated autoscaling by creating and maintaining a list of many different metrics. This enables you to create complex criteria for scaling up or down by creating expressions that use data from several different metrics.

## How it Works

On a high level, Elastigroup uses scaling policies with multiple metrics according to the following process:

1. In the Scaling tab of the Elastigroup, you define several metrics in the Metric List.
2. You go to either [Simple Scaling Policies](elastigroup/features/scaling/simple-scaling-policies) or [Target Scaling Policies](elastigroup/features/scaling/target-scaling) and set up an autoscaling policy. In the policy, you define the Policy Type as Multiple Metric Scaling, and then define an expression that Elastigroup will use to evaluate a threshold.
3. Once the scaling policy is active, Elastigroup continually tracks the metrics and evaluates the expression you defined. When the expression surpasses your defined threshold, then a scaling action is triggered.

For example, you could create a scaling action based on the ratio of average CPU utilization to average memory utilization or an action based on the ratio of CPU utilization to 400 errors.

## Create a New Metric

To create a new metric, do the following:

1. In your Elastigroup, go to the Scaling tab and click Add New Metric.

<img src="/elastigroup/_media/scaling-multiple-metrics-01.png" />

2. Complete the information in the popup form as described below, and then click Add New Metric at the bottom.

<img src="/elastigroup/_media/scaling-multiple-metrics-02.png" width="574" height="247" />

### Metric Details

- Name: User-defined name of the metric. This name will be used in expressions you define in scaling policies.
- Autoscale based on: Choose one of the (AWS Cloudwatch) parameters in the list or choose Other. If you choose Other, complete the additional fields:
- Namespace: Choose from the list or choose Custom. If you choose Custom, you also need to enter a name for the Custom Namespace.
  - AWS Metric Name: The actual AWS metric, e.g., CPU Utilization.
  - Statistic: Type of value such as average, maximum or minimum.
- Unit: Choose the unit of measurement.
- Dimensions: (Optional) Choose from a list and set a value.

<img src="/elastigroup/_media/scaling-multiple-metrics-03.png" width="572" height="341" />

## View Metric List

Once you have created one or more metrics, you can view your full list of metrics. In your Elastigroup, just go to the Scaling tab and click Metric List.

<img src="/elastigroup/_media/scaling-multiple-metrics-04.png" />

## Edit a Metric

1. To edit a metric, click on the metric name in the Metric List.
2. Click Edit and update the fields.
3. Save your changes.

## Delete a Metric

1. To delete a metric, click on the metric name in the Metric List.
2. Click Remove Metric and confirm the removal.

## Expressions and Operators Supported

For creating expressions with multiple metrics in the simple scaling and target scaling policies, basic arithmetic expressions are supported.

### Expressions

In addition, the following types expressions are supported:

- SUM([m1,m2])/AVG(m2)
- AVG(METRICS())
- CEIL(m1)
- CEIL(METRICS())
- SUM(CEIL(METRICS()))
- FILL(m1, 10)
- FILL(METRICS(), 0)
- FILL(m1, MIN(m1))

### Comparison Operators

The following types of comparison operators are supported:

- ==
- !=
- <=
- \>=
- <
- \>

### Logical Operators

The following types of logical operators are supported:

- AND or &&
- OR or ||

## Use Multiple Metrics with Simple Scaling

You can configure simple scaling to use multiple metrics when you create an Elastigroup or by editing an existing Elastigroup. To create a new simple scaling policy, do the following:

1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies, click Up Scaling Policies or Down Scaling Policies.
3. Click Add Policy.

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

This policy will be saved when you finish creating or updating the Elastigroup (i.e., when you click Create or Update at the bottom of the Review tab).

## Use Multiple Metrics with Target Scaling

You can configure target scaling to use multiple metrics when you create an Elastigroup or by editing an existing Elastigroup. To create a new policy, do the following:

1. In the Elastigroup, go to the Scaling tab.
2. Under Target Scaling Policies, click Add Policy.

<img src="/elastigroup/_media/scaling-target-scaling-policy-02a.png" width="660" height="174" />

3. Complete the following in the form:
   - Policy Name: Enter a name identifying your policy.
   - Policy Type: Choose Multiple Metric Scaling.
   - Expression: Enter an expression that uses one or more of the metrics you defined in the Metric List.
   - Target Value: The desired average value of the evaluated expression that will be tracked.
   - Cooldown: Enter the cooldown duration in seconds.

This policy will be saved when you finish creating or updating the Elastigroup (and you click Create or Update at the bottom of the Review tab).

## What’s Next?

Learn how to create a scaling policy that uses multiple metrics in:

- [Simple Scaling Policies](elastigroup/features/scaling/simple-scaling-policies)
- [Target Scaling Policies and Predictive Autoscaling](elastigroup/features/scaling/target-scaling)
