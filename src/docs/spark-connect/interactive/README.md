# Ocean Spark Interactive Applications

## Introduction

An interactive Spark application is a long-running application which the user can interact with on runtime. This can be a notebook application or applications running [Spark Connect](https://spark.apache.org/docs/latest/spark-connect-overview.html) or a [Thrift Hive Server](https://cwiki.apache.org/confluence/display/hive/hiveserver). Spark Connect supports languages such as Python, Scala and Go and potentially all languages supported by [gRPC](https://grpc.io). The Thrift Hive Server offers SQL interaction through JDBC.

## Spark Connect

In Apache Spark 3.4, Spark Connect introduced a decoupled client-server architecture that allows remote connectivity to Spark clusters using the DataFrame API and unresolved logical plans as the protocol. The separation between client and server allows Spark and its open ecosystem to be leveraged from everywhere. It can be embedded in modern data applications, in IDEs, Notebooks and programming languages. Ocean Spark support Spark Connect, and that can be especially useful for the direct execution of Spark SQL.

Once connected to the remote application (as described in the Client side section below) the user can execute SQL queries directly from code, notebook or pyspark shell

```Python
df = spark.sql("select 'apple' as word, 123 as count union all select 'orange' as word, 456 as count")
df.write.save("s3://results_bucket/fruits.parquet")
```

### Server side

To start a Spark application with SparkConnect server, either run the mainClass SparkConnectServer or enable the SparkConnect plugin. Using the Spark Connect plugin, the application can run other tasks or services while enabling Spark Connect.

#### Spark Connect launch using the SparkConnectServer

```json
"mainClass": "org.apache.spark.connect.sql.service.SparkConnectServer",
"deps": {
    "packages": ["org.apache.spark:spark-connect_2.12:3.5.0"]
}
```

#### Spark Connect launch using the Spark Connect plugin

```json
"sparkConf": {
    "spark.plugins": "org.apache.spark.sql.connect.SparkConnectPlugin"
},
"deps": {
    "packages": ["org.apache.spark:spark-connect_2.12:3.5.0"]
}
```

### Client side

#### Python library

On the client side use the ocean-spark-connect (https://pypi.org/project/ocean-spark-connect) python library to interact with the Spark Connect session

```python
from ocean_spark_connect.ocean_spark_session import OceanSparkSession

spark = OceanSparkSession.Builder().cluster_id("osc-cluster").appid("appid").profile("default").getOrCreate()
spark.sql("select random()").show()
spark.stop()
```

#### Spotctl

Use the spotctl command line tool to open a websocket proxy to the interactive Spark application

```sh
brew install spotinst/tap/spotctl
spotctl configure
```

```sh
spotctl ocean spark --clusterid osc-cluster --appid appid --profile default
```

spotctl will start a service on port 15002 (the default Spark Connect port)

```sh
pyspark --remote sc://localhost
```

### Example

Start the application using Postman, from the console or the command line

```sh
curl -k -X POST 'https://api.spotinst.io/ocean/spark/cluster/{clusterId}/app?accountId={accountId}' -H 'Content-Type: application/json' -H 'Authorization: Bearer {token}' -d '
```

```json
{
  "jobId": "spark-connect",
  "configOverrides": {
    "mainClass": "org.apache.spark.connect.sql.service.SparkConnectServer",
    "deps": {
      "packages": ["org.apache.spark:spark-connect_2.12:3.5.0"]
    }
  }
}
```

## JDBC

JDBC, or Java Database Connectivity, is an API used in Java programming to interact with databases. It provides a standard abstraction for Java applications to communicate with various databases1. JDBC allows applications to send requests made by users to the specified database1. It is used to write programs required to access databases. Apache Spark provides a JDBC interface through the HiveThriftServer.

The user can execute SQL queries directly by using the JDBC driver in code, a database tool or from another Spark session. Here is a Java example

```Java
var prop = new Properties();
var query = "select 'apple' as word, 123 as count union all select 'orange' as word, 456 as count";
var jdbcUrl = "jdbc:ofas://api.spotinst.io/"+clusterId+"/"+appId+"?profile=default";
//var hiveUrl = "jdbc:hive2://localhost:10000";

try (var conn = DriverManager.getConnection(jdbcUrl, prop); var stmt = conn.createStatement(); var rs = stmt.executeQuery(query)) {
  var metadata = rs.getMetaData();
  int columnCount = metadata.getColumnCount();
  while(rs.next()) {
      var row = new StringBuilder();
      int i;
      for (i = 1; i < columnCount; i++) {
          row.append(rs.getString(i)).append(", ");
      }
      row.append(rs.getString(i));
      System.out.println(row);
  }
}
```

### Server side

To enable JDBC connections to the Spark Application, start the HiveThriftServer

#### Launch a JDBC server

```json
"mainClass": "com.netapp.spark.HiveThriftServer",
"deps": {
    "packages": ["com.netapp.spark:hive:1.2.0"],
    "repositories": ["https://us-central1-maven.pkg.dev/ocean-spark/spark-code-submission-plugin"]
}
```

### Client side

#### Ocean Spark JDBC driver

Use the Ocean Spark JDBC driver with database tool or in your code project. The driver available at the following maven coordinates

```
com.netapp.spark:ofas-jdbc:1.2.0
```

Use the following public maven repository

```
https://us-central1-maven.pkg.dev/ocean-spark/spark-code-submission-plugin
```

#### Spotctl

Use the spotctl command line tool as above, with the port option, --port 10000 or --port hive

```
spotctl ocean spark --clusterid osc-cluster --appid appid --profile default --port hive
```

The user can now connect to the interactive Spark application through a Hive Thrift library or the Hive JDBC driver.

### Using DBT (https://getdbt.com)

With the spotctl tool running on port 10000 forwarded to the remote hive port the thrift server is accessible on the client side. Start by installing dbt-spark

```sh
pip install dbt-spark
pip install "dbt-spark[PyHive]"
```

Add entry to the ~/.dbt/profiles.yaml

```yaml
jaffle_shop:
  outputs:
    dev:
      host: localhost
      method: thrift
      port: 10000
      schema: jaffle
      threads: 1
      type: spark
  target: dev
```

For demo purposes, checkout the demo dbt project jaffle-shop and run the seed

```sh
git clone https://github.com/dbt-labs/jaffle_shop
cd jaffle_shop
dbt seed
```

Finally run dbt to provision the database

```sh
dbt run
```

To enable hive metastore or use AWS Glue Catalog follow these instructions

https://docs.spot.io/ocean-spark/tools-integrations/aws-glue-catalog
https://docs.spot.io/ocean-spark/tools-integrations/hive-metastore
