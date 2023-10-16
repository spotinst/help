# JDBC

JDBC, or Java Database Connectivity, is an API used in Java programming to interact with databases. It provides a standard abstraction for Java applications to communicate with various databases. JDBC allows applications to send requests made by users to the specified database. It is used to write programs required to access databases. Apache Spark provides a JDBC interface through the HiveThriftServer.

You can execute SQL queries directly by using the JDBC driver in code, a database tool or from another Spark session. Here is a Java example:

```Java
var prop = new Properties();
var query = "select 'apple' as word, 123 as count union all select 'orange' as word, 456 as count";
var jdbcUrl = "jdbc:ofas://api.spotinst.io/"+clusterId+"/"+appId+"?profile=default";

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

## Server Side

To enable JDBC connections to the Spark Application, start the HiveThriftServer.

### Launch a JDBC Server

```json
"mainClass": "com.netapp.spark.HiveThriftServer",
"deps": {
    "packages": ["com.netapp.spark:hive:1.2.1"],
    "repositories": ["https://us-central1-maven.pkg.dev/ocean-spark/ocean-spark-adapters"]
}
```

## Client Side

### Ocean Spark JDBC Driver

Use the Ocean Spark JDBC driver with a database tool or in your code project. The driver is available at the following maven coordinates:

```
com.netapp.spark:ofas-jdbc:1.2.2
```

Use the following public maven repository

```
https://us-central1-maven.pkg.dev/ocean-spark/ocean-spark-adapters
```

The jdbc url looks like

```
jdbc:ofas://api.spotinst.io/{clusterId}/{appId}?profile=default
```

additional url parameters are token, account and mode. 
Mode is the thrift transport mode and can be 'http' or 'thrift'.

### Spotctl

Use the spotctl command line tool with the port option, --port 10000 or --port hive

```
spotctl ocean spark connect --cluster-id osc-cluster --app-id appid --endpoint hive
```

You can now connect to the interactive Spark application through a Hive Thrift library or the Hive JDBC driver.
