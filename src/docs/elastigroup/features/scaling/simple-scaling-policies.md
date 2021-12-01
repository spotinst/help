# Simple Scaling Policies

Simple scaling policies provide the ability to scale up when you need to accommodate increased workloads or to scale down to maximize cost efficiency during quiet hours. Set as many policies as needed to maximize the Elastigroup efficiency.

## How it Works

On a high level, simple scaling policies work according to the following process:

- You assign a metric that best describes the load of your application and set a threshold value for that metric.
- Elastigroup tracks the metric you have chosen. Whenever the threshold is surpassed, a scaling action (e.g., a scale up or a scale down, depending on the type of policy) is triggered.

## Create a Simple Scaling Policy

You can configure a simple scaling policy when you create an Elastigroup or by editing an existing Elastigroup. A simple scaling policy consists of an Up Scaling policy and a Down Scaling policy. The parameters for Up Scaling and Down Scaling are the same, except that the options for Actions are different.
Complete the steps below:

1. In the Elastigroup, go to the Scaling tab.
2. Under Simple Scaling Policies/Up Scaling Policies, click Add Policy.

<img src="/elastigroup/_media/scaling-simple-scaling-01.png" width="651" height="372" />

3. Complete the following parameters in the form:

   - Policy Name: Enter the name to assign to the policy. It is recommended to use a meaningful name to help you understand scaling actions better in the future.
   - Policy Type: Choose Simple Scaling.
   - Source: The scaling policy can utilize metrics from either AWS CloudWatch or Spectrum.
   - Autoscale Based on: The metric used to trigger the policy's scaling action. Available options:
     - EC2: CPU Utilization
     - ELB: Latency
     - EC2: Network Out
     - Other: This is used for custom metrics. See below for more information about using [custom metrics](elastigroup/features/scaling/simple-scaling-policies?id=autoscale-based-on-a-custom-metric).
   - Threshold: Set the numerical at which a scaling action will be triggered.
   - Action: The action to take when the threshold is surpassed. The following options are available for Up Scaling:
     - Set Capacity Range: Set a new Target-Minimum-Maximum configuration for the Elastigroup.
     - Add: The default value for up scaling. Add a specified amount of instances or vCPU units (according to the group capacity unit, configured under General tab, Advanced section).
     - Set minimum of: Set a new minimum capacity value for the Elastigroup.
     - Increase: Increase capacity by a specified percentage.

   The following Actions are available for Down Scaling:

   - Set Capacity Range: Similar to up scaling.
   - Remove: The default value for down scaling. Terminates the specified number of instances or vCPU units.
   - Set maximum of: Sets a new upper limit capacity for the Elastigroup.
   - Decrease: Reduces the capacity by a specified percentage.
   - Amount: The number of instances or vCPUs that will be scaled (you can also specify expressions). If the adjustment is not a whole number, Elastigroup rounds it to the nearest whole.
   - Dimensions: Specify the name of the dimension used and it's value. If no dimension is specified, the default is the average of instances in the group, divided into instance types. Meaning an average value of the sampled metric is calculated for each instance type currently running in the group, and the first value to cross the threshold will trigger the policy. In the case of scaling up, it's likely to be the smallest instance type, as it will be the first to become loaded, while in scaling down the trigger will likely be the largest instance type.

4. To save the configuration, click Next, and then click Create or Update at the bottom of the Review tab.

### Autoscale Based on a Custom Metric

If you want to autoscale based on a custom metric, complete the form described above and choose Other in the Autoscale Based on field.

When you choose Other, then the Namespace field appears. You can choose one of the AWS namespaces or you can choose Custom. If you choose Custom, you will then need to define the custom metric using the parameters described below.

<img src="/elastigroup/_media/scaling-simple-scaling-02.png" />

- Namespace: The namespace taken from AWS.
- Statistic: Choose from the list the type of value that will be evaluated.
- Metric Name: Enter the specific metric to be evaluated. The metric names available depend on the namespace you choose. If you entered Custom for Namespace, you can make up your own metric name.
- Operator: Choose the criterion for evaluating the metric, e.g., greater than, less than.
- Threshold: Enter the numerical limit for the metric.
- Unit: Choose the unit of measurement.
- Consecutive Periods: The number of periods in a row to be evaluated before triggering a scale action.
- Period: Choose the amount of time in a single period.
- Action Type: Choose the type of action to be taken.
- Amount: Set the number of instances that fits the expression. This depends on the Action Type you choose.
- Cooldown: After a scaling action, there will be no new scaling action until this amount of time (seconds) has passed.

### Advanced Parameters

If necessary, you can also use advanced parameters to define the scaling criteria.

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

## Create a Step Scaling Policy

Step scaling is a scaling method that enables you to configure different steps in the same scaling policy. All of the steps are based on a single metric that you configure, but each step has its own threshold and can use a different action type.

In some cases, you may want to set different actions for different thresholds based on data of the same CloudWatch metric. For example, you want your Elastigroup to run at about 50% CPU utilization. So when the threshold of 60% is exceeded, you will launch only one instance, but if there is a peak of 80% utilization or more you want to scale up five instances.

Step scaling is available in Simple Scaling policies and can be configured for both Up Scaling and Down Scaling.

### Configure Step Scaling

You can configure step scaling when you create a new Elastigroup or when you edit the configuration of an existing group.

1. In the Scaling tab, go to Simple Scaling and Up Scaling Policies.

<img src="/elastigroup/_media/scaling-simple-scaling-02a.png" width="820" height="337" />

2. Open an existing policy or click the plus to create a new policy.
3. To enable step scaling, click the toggle switch, then fill in the parameters for each of the steps you want to define.

<img src="/elastigroup/_media/scaling-simple-scaling-02b.png" width="654" height="256" />

### Step Scaling Parameters

The step scaling parameters (e.g., Action Type, Threshold, Amount) are the same as for simple scaling, and the relevant actions (e.g., Increase, Decrease) are used when your steps are Up Scaling or Down Scaling. For each step, you choose an action type for that step and then enter the parameter values relevant to that action.

## Configure Simple Scaling with Multiple Metrics

You can configure simple scaling to use multiple metrics when you create an Elastigroup or by editing an existing Elastigroup. For the detailed procedure, see [Use Multiple Metrics with Simple Scaling](elastigroup/features/scaling/multiple-metrics?id=use-multiple-metrics-with-simple-scaling).

## What’s Next?

Learn more about the Metric List and how to set up [Multiple Metrics](elastigroup/features/scaling/multiple-metrics).
