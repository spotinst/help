# Jupyter Lab

Install and launch JupyterLab server on any Spark application image with Python installed.

## Configuration

To start a Spark application with SparkConnect server, either run the mainClass SparkConnectServer or enable the SparkConnect plugin. Using the Spark Connect plugin, the application can run other tasks or services while enabling Spark Connect.

### Launch JupyterLab using the JupyterLab main class

```json
"mainClass": "com.netapp.spark.JupyterLab",
"deps": {
    "packages": ["com.netapp.spark:jupyter-plugin:1.3.0"],
    "repositories": ["https://us-central1-maven.pkg.dev/ocean-spark/ocean-spark-adapters"]
},
```

### Launch JupyterLab using the spark plugin

```json
"sparkConf": {
    "spark.plugins": "com.netapp.spark.JupyterPlugin",
    "spark.jupyter.work.dir": "/opt/spark/work-dir"
},
"deps": {
    "packages": ["com.netapp.spark:jupyter-plugin:1.3.0"],
    "repositories": ["https://us-central1-maven.pkg.dev/ocean-spark/ocean-spark-adapters"]
},
```

## Access

Access the JupyterLab server from a URL in the following format

```
https://console.spotinst.com/api/ocean/spark/cluster/osc-mycluster/app/spark-myapp/notebook/
```