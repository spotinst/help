# Shuffle data reuse

Shuffle data reuse is a feature that writes Spark shuffle data to a shared remote filesystem, such as S3.
This allows reusing shuffle data from failed Spark tasks avoiding task retries. 
This feature is also useful with dynamic allocation enabled, 
as it allows scaling down Spark executors that are kept running solely because of the data they contain.
Reusing the shuffle data can save time and resources.

## Configuration

To enable shuffle data reuse, set the following configuration in your Spark application:

```json
{
  "shuffle": {
    "enabled": "true",
    "rootDir": "s3a://<bucket>/path/to/shuffle"
  }
}
```

The `shuffle.rootdir` configuration is the location where the shuffle data will be written.
The shuffle reuse feature uses hadoop filesystem to write the shuffle data, and as such supports any filesystem that hadoop supports.
The rootdir option can be a local path, HDFS path, or any other hadoop supported filesystem.
A shared remote drive such as FSx or S3 CSI, must be mounted on all the executors in the cluster when using a local path.

For instance

```json
{
  "shuffle": {
    "rootDir": "/opt/spark/work-dir/shuffle"
  },
  "volumes": [
    {
      "name": "spark-data",
      "persistentVolumeClaim": {
        "claimName": "s3-claim"
      }
    }
  ],
  "driver": {
    "volumeMounts": [
      {
        "mountPath": "/opt/spark/work-dir/shuffle",
        "name": "spark-data"
      }
    ]
  },
  "executor": {
    "volumeMounts": [
      {
        "mountPath": "/opt/spark/work-dir/shuffle",
        "name": "spark-data"
      }
    ]
  }
}
```

## Limitations

- The shuffle data reuse feature is only available for Spark 3.2 and later.