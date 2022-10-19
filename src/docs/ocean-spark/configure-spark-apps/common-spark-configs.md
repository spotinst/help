# Common Spark Configurations

This page describes some common Spark configurations relevant to Ocean Spark.

## Control the number of executors

A Spark application can either use a fixed number of executors, or it can dynamically adjust the number
of Spark executors at runtime based on the load (dynamic allocation).

Dynamic allocation is enabled by default for interactive notebooks. For applications submitted through the API,
by default Ocean Spark will use 6 executors.

You can control how many executors to use by modifying this configuration:
```json
{
  "sparkConf": {
    "spark.dynamicAllocation.enabled": "false"
  },
  "executor": {
    "instances": 6
  }
}
```

## Dynamic allocation

For Spark versions 3.0 and above, dynamic allocation is enabled by default on your notebooks.

It will cause the Spark driver to dynamically adjust the number of Spark executors at runtime based on load:
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

## Application Timeout

You can configure a duration after which a Spark application will be forcibly terminated (timeout).
By default, Ocean Spark sets a 24-hour (1440 minutes) timeout on Spark applications.

You can change this timeout duration by using the following configuration:
```json
"timeout": {
    "minutes": 120,
    "policy": "KILL"
}
```

You can also disable this timeout entirely - for example if you're running streaming applications, as follows:
```json
"timeout": "DISABLED"
```

Additional notes:
- Timed out applications wll enter the terminal "Timed Out" state.
- The timeout clock starts ticking once you make the API call to submit a Spark application, or once you 
open up a notebook. This can be a few seconds or a few minutes before your Spark code starts running.
- Ocean Spark checks applications every 5 minutes to enforce their timeout. As a result, setting a very short
timeout (or a very precise timeout) may not produce the desired effect. Applications should be
timed out a few minutes after they reach their configuration timeout duration.

## Enable Adaptive Query Execution (AQE)

[Adaptive Query Execution](https://spark.apache.org/docs/latest/sql-performance-tuning.html#adaptive-query-execution) is a Spark performance optimization feature available from Spark 3.0 and enabled by default from Spark 3.2. You can enable or disable it by switching the corresponding sparkConf flag:

```json
{
  "sparkConf": {
    "spark.sql.adaptive.enabled": "true"
  }
}
```

## Graceful executor decommissioning

This Spark feature is available, and automatically enabled, for Spark versions 3.1 and above.
When enabled, an executor will try to move its shuffle and RDD blocks to another executor before exiting.
In particular, in the event of a spot instance termination, Ocean Spark will leverage the termination notice period
given by the cloud provider, to proactively move the shuffle files and hence avoid any disruption.

Here are the 4 main Spark configuration flags to enable this feature:

```json
{
  "sparkConf": {
    "spark.decommission.enabled": "true",
    "spark.storage.decommission.enabled": "true",
    "spark.storage.decommission.rddBlocks.enabled": "true",
    "spark.storage.decommission.shuffleBlocks.enabled": "true"
  }
}
```

You can add an additional flag to handle the situation where a single executor is decomissioned.
In this scenario, there's no other executor who can receive the shuffle files, so you can configure to use
an object storage as fallback storage. Here's an example configuration:

```json
{
  "sparkConf": {
    "spark.storage.decommission.fallbackStorage.path": "s3a://<my-S3-bucket>/decom/"
  }
}
```

Spark executors will need to have read and write permissions to the target storage.

## Using the S3A protocol instead of S3

The [S3 protocol has been deprecated in favor of S3A since Hadoop 3.x](https://hadoop.apache.org/docs/current3/hadoop-aws/tools/hadoop-aws/index.html#Introducing_the_Hadoop_S3A_client.), because S3A provides better performance and security. 

You should therefore always use S3 paths starting with "s3a://", attempting to use an "s3://" path would give you an error "No FileSystem for scheme 's3'". 

If you can't change the path, there's a workaround to instruct Spark to actually use the S3AFileSystem when it encounters an "s3://" path, by adding the following configuration to your applications:

```json
{
  "sparkConf": {
    "spark.hadoop.fs.s3.impl": "org.apache.hadoop.fs.s3a.S3AFileSystem"
  }
}
```

## What’s Next?

Learn more about [secrets and environment variables](ocean-spark/configure-spark-apps/secrets-environment-variables).
