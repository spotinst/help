# Target Scaling

Target scaling policies are autoscaling policies that track a specified metric relative to your desired target value and automatically adjust your Elastigroup scale to meet this target.

## How it Works

- You assign a metric that best describes the load of your application, and set a target value.
- Elastigroup takes over and manages your capacity for you, keeping your desired metric at the selected target value.
- Elastigroup will manage scaling policies for you in real time to ensure your target metric at, or close to, the specified target value.

For example, you could use target tracking scaling to:

- Configure a target tracking scaling policy to keep the average aggregate CPU utilization of your Elastigroup instances at 50%.
- Configure a target tracking scaling policy to keep the incoming traffic at 1000000 bytes per second to each of your instances.

## Which Metrics should I use?

When assigning a metric, take note that not all metrics are suited for target tracking scaling policies. The metric must be a valid utilization metric that describes how ‘busy’ an instance is running your workload. The metric value must be affected by a number of instances in your Elastigroup with a proportional correlation to your application’s load, so that the metric data can be used to scale out or in the number of instances.

For example, the CPU utilization of an Auto Scaling group (i.e., the Amazon Cloudwatch metric `CPUUtilization`) works, if the load on the Auto Scaling group is distributed evenly across the instances.

Note that the time frame the metric is aggregated for depends on whether you have Detailed Monitoring enabled for the group or not. If you do – the time frame is 1 minute. Otherwise, it is 5 minutes.

## Configure Target Scaling

1. Edit or create an Elastigroup.
2. Navigate to the Scaling tab.
3. Add a Target scaling policy.
4. Select a metric from the predefined options.
5. Input the target value and you’re ready to go.

---

**Tip**: Some experimentation may be required to achieve the right target value. We encourage you to test your target value in order to find that sweet balance between over-provisioning and cost optimization.

---
