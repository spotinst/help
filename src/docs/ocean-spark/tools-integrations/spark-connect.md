# Spark Connect

In Apache Spark 3.4, Spark Connect introduced a decoupled client-server architecture that allows remote connectivity to Spark clusters using the DataFrame API and unresolved logical plans as the protocol. The separation between client and server allows Spark and its open ecosystem to be leveraged from everywhere. It can be embedded in modern data applications, in IDEs, Notebooks and programming languages. Ocean Spark support Spark Connect, and that can be especially useful for the direct execution of Spark SQL.

Once you are connected to the remote application (as described in the Client side section below) you can execute SQL queries directly from code, notebook or pyspark shell.

```Python
df = spark.sql("select 'apple' as word, 123 as count union all select 'orange' as word, 456 as count")
df.write.save("s3://results_bucket/fruits.parquet")
```

## Server Side

To start a Spark application with SparkConnect server, either run the mainClass SparkConnectServer or enable the SparkConnect plugin. Using the Spark Connect plugin, the application can run other tasks or services while enabling Spark Connect.

### Spark Connect Launch using the SparkConnectServer

```json
"mainClass": "org.apache.spark.connect.sql.service.SparkConnectServer",
"deps": {
    "packages": ["org.apache.spark:spark-connect_2.12:3.4.1"]
}
```

### Spark Connect Launch using the Spark Connect plugin

```json
"sparkConf": {
    "spark.plugins": "org.apache.spark.sql.connect.SparkConnectPlugin"
},
"deps": {
    "packages": ["org.apache.spark:spark-connect_2.12:3.4.1"]
}
```

## Client Side

### Python Library

On the client side use the ocean-spark-connect (https://pypi.org/project/ocean-spark-connect) python library to interact with the Spark Connect session.

```python
from ocean_spark_connect.ocean_spark_session import OceanSparkSession

spark = OceanSparkSession.Builder().cluster_id("osc-cluster").appid("appid").profile("default").getOrCreate()
spark.sql("select random()").show()
spark.stop()
```

The profile is read from ~/.spotinst/credentials with the following format:

```
[default]
token   = MYTOKEN
account = act-xxx
```

Instead of using a profile you can specify the token and account directly as builder options.

```python
spark = OceanSparkSession.Builder().cluster_id("osc-cluster").appid("appid").account("acc-xxx").token("MYTOKEN")
```

### Spotctl

Use the spotctl command line tool to open a websocket proxy to the interactive Spark application.

```sh
brew install spotinst/tap/spotctl
spotctl configure
```

```sh
spotctl ocean spark connect --cluster-id osc-cluster --app-id appid
```

spotctl will start a service on port 15002 (the default Spark Connect port)

```sh
pyspark --remote sc://localhost
```

## Example

Start the application using Postman, from the console or the command line.

```sh
curl -k -X POST 'https://api.spotinst.io/ocean/spark/cluster/{clusterId}/app?accountId={accountId}' -H 'Content-Type: application/json' -H 'Authorization: Bearer {token}' -d '
```

```json
{
  "jobId": "spark-connect",
  "configOverrides": {
    "type": "Scala",
    "sparkVersion": "3.4.0",
    "mainClass": "org.apache.spark.connect.sql.service.SparkConnectServer",
    "deps": {
      "packages": ["org.apache.spark:spark-connect_2.12:3.4.1"]
    }
  }
}
```
