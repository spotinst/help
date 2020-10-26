# Termination Policies for EMR

Elastigroup provides termination policies for EMR cluster. Termination policies are based on CloudWatch Metrics that can be specified by the customer on the termination policy definition. This can be used for different use cases, for example, the shutdown of a cluster when it is idle.

## How Elastigroup Termination Policies for EMR are Used

Elastigroup provides the ability to terminate a cluster based on specified requirements in the termination policy which are based on CloudWatch EMR metrics.

Currently, termination policies are supported using the API. The termination policy is part of the Create/Update Elastigroup request. Termination Policies is an array in the API request that can contain multiple policies with multiple metric statements.

A statement in the policy is based on a metric from the AWS/ElasticMapReduce namespace, a threshold, a period, and an operator. You can combine an unlimited number of metrics statements in a policy. When all the requirements in the policy are met, the policy will run.

It is possible to define multiple policies. There is no dependency between them.

## Example

```json
"terminationPolicies": [
           {
           	"statements": [
               {
                   "namespace": "AWS/ElasticMapReduce",
                   "metricName": "AppsRunning",
                   "statistic": "sum",
                   "unit": "count",
                   "threshold": 0,
                   "period": 300,
                   "evaluationPeriods": 3,
                   "operator": "lte"
               },
               {
                   "namespace": "AWS/ElasticMapReduce",
                   "metricName": "AppsPending",
                   "statistic": "average",
                   "unit": "count",
                   "threshold": 0,
                   "period": 300,
                   "evaluationPeriods": 3,
                   "operator": "lte"
               }
           	]
           }
]
```

In this example we can see one policy with two different metrics statements. The first statements collect data from the AppsRunning metric, over a period of 300 seconds. When the value 0 is received three times, the criteria is met.

The second metrics statement is based on AppsPending. In this way, we can identify an idle cluster with no running or pending jobs for 15 minutes. If such a cluster exists, Spot terminates the cluster.

## What's Next?

- To clone an existing EMR into an Elastigroup, check out the EMR tutorial [here](elastigroup/tools-integrations/elastic-mapreduce/).
- To run Task nodes on Spot instances managed by Elastigroup, go to the tutorial [here](elastigroup/tools-integrations/elastic-mapreduce/import-elastic-mapreduce-task-nodes).
