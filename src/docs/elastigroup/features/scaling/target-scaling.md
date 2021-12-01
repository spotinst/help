# Target Scaling Policies and Predictive Autoscaling

Target scaling policies are autoscaling policies that track a specified metric relative to your desired target value and automatically adjust your Elastigroup scale to meet this target.

## How it Works

- You assign a metric that best describes the load of your application, and set a target value.
- Elastigroup takes over and manages your capacity for you, keeping your desired metric at the selected target value.
- Elastigroup will manage scaling policies for you in real time to ensure your target metric remains at or close to the specified target value.

For example, you could use target tracking scaling to:

- Configure a target tracking scaling policy to keep the average aggregate CPU utilization of your Elastigroup instances at 50%.
- Configure a target tracking scaling policy to keep the incoming traffic at 1,000,000 bytes per second to each of your instances.

## Metric Tracking Options

You can choose from the following metrics:

- Average CPU Utilization (as %)
- Average Network In (bytes)
- Average Network Out (bytes)
- ALB Request Count per Target

### ALB Request Count per Target

This metric is available only if at least one target group was selected in the [Load Balancer](elastigroup/tools-integrations/aws-load-balancers-elb-alb) section of the Elastigroup configuration (under the Compute tab).

When you choose this option, you must also specify a Target Group. The list of available target groups includes only the target groups that were configured in the Load Balancer configuration for the Elastigroup.

<img src="/elastigroup/_media/scaling-target-scaling-policy-01.png" />

### Metric Aggregation Period

Spot aggregates the metric for averaging over a default time period of five minutes. When Detailed Monitoring is enabled, the aggregation period is one minute.

### Cooldown

Whenever Spot performs a scaling action, there is a cooldown period during which no further scaling action takes place. After the cooldown period, another scaling action can take place if required.

## Predictive Autoscaling

When you choose Average CPU Utilization as the metric tracking option, you also have the option to enable Predictive Autoscaling. Predictive autoscaling enables Spot to predict when your Elastigroup will experience load and then scale the number of instances in advance to meet your business needs.

### Concepts

- Target: The number of active instances that Elastigroup should have.
- Effective Minimum: The value that determines the lowest number of instances Elastigroup should have to accommodate the load required by the predicted metric. When this value is greater than the target value, Elastigroup will scale up instances to meet the effective minimum, depending on your predictive scaling configuration.
- Predicted Metric: The parameter that Elastigroup actively tracks and evaluates in order to determine future load and scaling requirements for the group.

### How it Works

Once predictive autoscaling is set on an Elastigroup, a backend process for evaluating the chosen metric begins. Spot uses machine learning algorithms to predict and determine the value of the predicted metric for up to two days in advance.

Once the predicted metric value is determined, an effective-minimum calculation begins to determine the minimum number of instances required to handle the predicted load. This enables your application to be ready in advance for any workload bursts.

Predictive autoscaling can work in the following modes:

- Predict and Scale
- Predict Only

### Predict and Scale Mode

In Predict and Scale mode, Elastigroup presents its predicted metric values and predicted effective-minimum values, as well as the actual metric measured and aggregated by Elastigroup. Once the metric is predicted, an effective-minimum value is calculated.

Elastigroup scales up instances and changes its target value to meet the effective-minimum value, ensuring that you have enough instances for the predicted loads.

### Predict Only Mode

In Predict Only mode, Elastigroup presents its predicted data, but scales instances normally, according to the regular target-based scaling behavior.

This allows you to observe Elastigroup's prediction and predicted metric values, without scaling the group according to these values.

## Configure Target Scaling

You can configure target scaling when you create an Elastigroup or by editing an existing Elastigroup. Do the following:

1. In the Elastigroup, go to the Scaling tab.
2. Under Target Scaling Policies, click Add, and then click on the policy name to open the form.

<img src="/elastigroup/_media/scaling-target-scaling-policy-02.png" />

3. Complete the following in the form:
   - Policy Name: Enter a name identifying your policy.
   - Policy Type: Choose Target Scaling.
   - Metric Name: Choose a metric from the dropdown list. If you choose [ALB Request Count per Target](elastigroup/features/scaling/target-scaling?id=alb-request-count-per-target), you also need to choose a Target Group.
   - Target Value: The desired average value of the metric that will be tracked.
   - Cooldown: Enter the cooldown duration in seconds.
4. To save the configuration, click Next, and then click Create or Update at the bottom of the Review tab.

> **Tip**: Some experimentation may be required to achieve the right target value. We encourage you to test your target value in order to find that sweet balance between over-provisioning and cost optimization.

## Configure Predictive Autoscaling

Predictive Autoscaling is configured in a Target Scaling Policy. You can enable it when you create an Elastigroup or by editing an existing Elastigroup. Do the following:

1. In the Elastigroup, go to the Scaling tab.
2. Under Target Scaling Policies, click Add, and then click on the policy name to open the form.
3. Complete the following in the form:
   - Policy Name: Enter a name identifying your policy.
   - Metric Name: Choose Average CPU Utilization.
   - Target Value: The desired average value of the metric that will be tracked.
   - Cooldown: Enter the cooldown duration in seconds.
4. Mark Use Predictive Autoscaling, and choose the mode:
   - Predict and scale
   - Predict only

<img src="/elastigroup/_media/scaling-target-scaling-policy-03.png" />

5. To save the configuration, click Next, and then click Create or Update at the bottom of the Review tab.

After you enable the scaling policy with predictive autoscaling, additional graphs will appear in the Elastigroup [Overview](elastigroup/tutorials/elastigroup-actions-menu/elastigroup-overview) page that show Activity & Prediction.

<img src="/elastigroup/_media/scaling-target-scaling-policy-04.png" />

## Configure Target Scaling with Multiple Metrics

You can configure target scaling to use multiple metrics when you create an Elastigroup or by editing an existing Elastigroup. For the detailed procedure, see [Use Multiple Metrics with Target Scaling](elastigroup/features/scaling/multiple-metrics?id=use-multiple-metrics-with-target-scaling).

## What’s Next?

Learn more about [Simple Scaling Policies](elastigroup/features/scaling/simple-scaling-policies).
