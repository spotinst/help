# DBT (https://getdbt.com)

DBT is a SQL-first transformation workflow that lets teams quickly and collaboratively deploy analytics code following software engineering best practices like modularity, portability, CI/CD, and documentation. DBT is supported in Ocean for Apache Spark through the dbt-ocean-spark adaptor.

## Server side

Launch a Ocean Spark application with the HiveThriftServer running on port 8080 and with http transport mode enabled. Use the following Java options.

```
-Dhive.server2.transport.mode=http
-Dhive.server2.thrift.http.port=8080
-Dhive.server2.thrift.http.path=""
```

or use arguments

```json
"mainClass": "com.netapp.spark.HiveThriftServer",
"deps": {
    "packages": ["com.netapp.spark:hive:1.2.1"],
    "repositories": ["https://us-central1-maven.pkg.dev/ocean-spark/ocean-spark-adapters"]
},
"arguments": [
  8080,
  "http"
]
```

Install the dbt-ocean-spark dbt adaptor python package (https://pypi.org/project/dbt-ocean-spark/)

## Client side

```sh
pip install dbt-ocean-spark
```

Add entry to the ~/.dbt/profiles.yaml

```yaml
jaffle_shop:
  outputs:
    dev:
      host: api.spotinst.io
      method: http
      port: 443
      schema: jaffle
      threads: 1
      cluster: [clusterId]
      account: [accountId]
      app: [appId]
      type: ocean_spark
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

[aws-glue-catalog](ocean-spark/tools-integrations/aws-glue-catalog)
[hive-metastore](https://docs.spot.io/ocean-spark/tools-integrations/hive-metastore)
