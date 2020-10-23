# Scaling Policies for GCP Elastigroup

Simple scaling policies provide the ability to accommodate increased workloads or alternatively scale down to maximize cost efficiency during quiet hours.

Set as many policies as needed to maximize the Elastigroup's efficiency.

## Scaling Policy Parameters

Each Simple Scaling Policy has the following set of parameters:

- Policy Name: The name to assign to the policy. It's recommended using a meaningful name to help you understand scaling actions better in the future.
- Source: The scaling policy can utilize metrics from either GCP Stackdriver or Spot Spectrum.
- Namespace: A container for metrics. If the source chosen is Spectrum, the namespace is custom, while for Stackdriver the available namespaces are 'compute' or 'pubsub'
- Scale based on:
  - Trigger:
    - Statistic: The type of statistic you will utilize. Options are:
      - `average`
      - `maximum`
      - `minimum`
      - `sum`
    - Metric Name: The metric used to trigger the policy's scaling action. Available options:
      - If the chosen namespace is 'compute':
        - `instance/cpu/utilization`
      - If the chosen namespace is 'pubsub':
        - `subscription/num_outstanding_messages`
        - `subscription/backlog_bytes`
        - `subscription/num_undelivered_messages`
        - `subscription/oldest_retained_acked_message_age_by_region`
        - `subscription/oldest_unacked_message_age`
        - `subscription/unacked_bytes_by_region`
        - `subscription/oldest_unacked_message_age_by_region`
  - Behavior:
    - Operator: Setting the relation between the threshold and the sampled value.
    - Threshold: The numerical value used to set the point of scaling.
    - Unit
    - Dimensions: Specify the name of the dimension used and it's value. For example, if you'd like to scale upon pubsub metrics, the metric's key would be 'subscription_id' and the metric's value would be the subscription's id in pubsub.
  - Duration:
    - Evaluation Periods & Period: The length of time to collect and evaluate the metric. Sets the length of a single period, and the amount of periods.
  - Action:
    - Action Type: The action to take when the Trigger defined above is met.Available options:
      - Add: The default value for up scaling. Add a specified amount of instances.
      - Remove: The default value for down scaling. Removes a specified amount of instances.
    - Amount of Instances: How many instances will be scaled.
  - Cooldown:
    - Wait Period: The time (in seconds) that all scaling activities will be suspended after the scaling policy is triggered.
