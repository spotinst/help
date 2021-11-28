# Common Spark Configurations

This page describes some common Spark configurations relevant to Ocean Spark.

## Control the number of executors

For Spark versions 3.0 and above, dynamic allocation is enabled by default for your workloads. It will cause the Spark driver to dynamically adjust the number of Spark executors at runtime based on load:
- When there are pending tasks, the Spark driver will request more executors.
- When an executor is idle for a while (not running any task), it is removed.

Here is an example configuration fragment to enable dynamic allocation. The fields should be self-explanatory.

```json
{
 "sparkConf": {
   "spark.dynamicAllocation.enabled": "true",
   "spark.dynamicAllocation.minExecutors": "0",
   "spark.dynamicAllocation.maxExecutors": "25",
   "spark.dynamicAllocation.initialExecutors": "1"
 }
}
```

Dynamic Allocation works both for batch and for streaming queries. You can read more about it in the [Apache Spark documentation](https://spark.apache.org/docs/latest/configuration.html#dynamic-allocation).

Dynamic allocation is a great way to save on your cloud costs for interactive workloads (notebooks) where using a fixed number of executors often leads to wasted resources.

You can disable dynamic allocation and control exactly the number of executors to allocate to your application using the following configuration fragment:

```json
{
  "sparkConf": {
    "spark.dynamicAllocation.enabled": "false"
 },
  "executor": {
    "instances": 10
  }
}
```

## Enable Adaptive Query Execution (AQE)

[Adaptive Query Execution](https://spark.apache.org/docs/latest/sql-performance-tuning.html#adaptive-query-execution) is a Spark performance optimization feature available from Spark 3.0 and enabled by default from Spark 3.2. You can enable or disable it by switching the corresponding sparkConf flag:

```json
{
 "sparkConf": {
   "spark.sql.adaptive.enabled": "true"
 }
}
```

## What’s Next?

Learn more about [secrets and environment variables](ocean-spark/configure-spark-apps/secrets-environment-variables).
