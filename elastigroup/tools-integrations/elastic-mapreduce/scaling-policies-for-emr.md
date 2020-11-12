# Scaling Policies for EMR

Elastigroup provides scale up and scale down policy (rule) options for Core and Task nodes managed by Elastigroup. Scaling policies are based on Cloudwatch metrics such as ContainerPending or YARNMemoryAvailablePercentage.

## How Elastigroup's Scaling Policies for EMR are Used

The structure and options for scaling up or scaling down are the same.

- Policy Name determines the name for the Scaling Policy.
- Auto Scale Based On is the Cloudwatch metric to watch which triggers the scaling activity. To use a metric other than the default options select Other.
- The default metrics offer a simplified process, requiring only to define the Threshold at which the Scaling Policy is triggered and the Action to execute when a trigger occurs.
- If Other is selected under Auto Scale Based On, choose the Cloudwatch Namespace for the desired metric.
- The selected Metric Name must match the Cloudwatch metric name.
- Consecutive Periods are used to determine how long the Threshold must be met before the Action is triggered.
- Cooldown is the grace period used to ensure that the cluster stabilizes after a scaling activity before the metric is evaluated again.

## Example

Here's an example of an Up Scaling Policy, using the YARNMemoryAvailablePercentage metric from the ElasticMapReduce namespace. When the average YARNMemoryAvailablePercentage is below 40 percent for 2 consecutive periods of 5 minutes the Action is triggered and 2 instances are added. The Scaling Policy then enters a cool down period of 120 seconds before resuming.

## What's Next?

- To clone an existing EMR into an Elastigroup check out the EMR tutorial [here](elastigroup/tools-integrations/elastic-mapreduce/).
- To run task nodes on Spot instances managed by Elastigroup go to the [Import EMR Task Nodes tutorial](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes).
