# Simple Scaling Policies

Simple scaling policies provide the ability to accommodate increased workloads or alternatively scale down to maximize cost efficiency during quiet hours. Set as many policies as needed to maximize the Elastigroup's efficiency.

## Scaling Policy Parameters

Each Simple Scaling Policy has the following set of parameters:

- Policy Name: The name to assign to the policy. It's recommended using a meaningful name to help you understand scaling actions better in the future.
- Source: The scaling policy can utilize metrics from either AWS CloudWatch or Spot Spectrum.
- Auto Scale Based On: The metric used to trigger the policy's scaling action. Available options:
  - EC2 – CPU Utilization
  - ELB – Latency
  - EC2 – Network Out
  - Other (used for custom metrics).
- Threshold: The numerical value used to set the point of scaling.
- Action Type: The action to take when the trigger defined under Auto Scale Based On is met. Available options:
  - Set Capacity Range: Set a new Target-Minimum-Maximum configuration for the Elastigroup.
  - Add: The default value for up scaling. Add a specified amount of instances or vCPU units (according to the group “capacity unit”, configured under General tab, Advanced section).
  - Set minimum of: Set a new minimum capacity value for the Elastigroup.
  - Increase: Increase capacity by a specified percentage.
- Downscaling options:
  - Set Capacity Range: Similar to up scaling.
  - Remove: The default value for down scaling. Remove the specified amount of instances or vCPU units.
  - Set maximum of: Set a new maximum capacity value for the Elastigroup.
  - Decrease: Decrease capacity by a specified percentage.
- Amount: How many instances or vCPU will be scaled (you can also specify expressions). If the adjustment isn't whole, Elastigroup rounds it to the nearest whole.
- Dimensions: Specify the name of the dimension used and it's value. If no dimension is specified, the default is the average of instances in the group, divided into instance types. Meaning an average value of the sampled metric is calculated for each instance type currently running in the group, and the first value to cross the threshold will trigger the policy. In the case of scaling up, it's likely to be the smallest instance type, as it will be the first to become loaded, while in scaling down the trigger will likely be the largest instance type.

## Advanced Parameters

- Statistic: The type of statistic you will utilize. Options are:
  - average
  - maximum
  - minimum
  - sampleCount
  - sum
- Operator: Setting the relation between the threshold and the sampled value.
  For / Period: The length of time to collect and evaluate the metric. Sets the length of a single period, and the amount of periods.
- Cooldown: The time (in seconds) that all scaling activities will be suspended after the scaling policy is triggered.

---

**Tip**: The consecutive periods setting directly affects the responsiveness of your scaling policy. The threshold must be crossed consistently for the entire duration of the number of consecutive periods for the policy to take effect.

---
