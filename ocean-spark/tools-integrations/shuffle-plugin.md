# External Shuffle Storage

When External Shuffle Storage is turned on, Spark writes shuffle data to a shared remote filesystem, such as S3 or FSx for NetApp ONTAP.
This allows recovering shuffle data written by failed Spark kubernetes pods, avoiding task retries.
External Shuffle Storage is also useful with dynamic allocation enabled, as it allows scaling down Spark executors that are kept running to serve shuffle data for other tasks.
Storing shuffle data on a remote drive accessible from all executors can save time and resources.

## Configuration

To turn on External Shuffle Storage, add the following configuration in your Spark application:

```json
{
  "shuffle": {
    "enabled": "true",
    "rootDir": "s3a://<bucket>/path/to/shuffle"
  }
}
```

The `shuffle.rootdir` configuration is the location where the shuffle data will be written.
The shuffle reuse feature writes the shuffle data to the Hadoop filesystem and, as such, supports any filesystem that Hadoop supports.
The root dir option can be a local path, HDFS path, or any other Hadoop-supported filesystem.
A shared remote drive such as FSx NetApp ONTAP or S3 CSI, must be mounted on all the executors in the cluster when using a local path.

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

## Optimizations

The External Shuffle Storage plugin shards the shuffle files on different S3 folder prefixes for better performance.
The configuration key `spark.shuffle.s3.folderPrefixes` can be used to control the number of partitions, with the default of 10.
This configuration can be used with multiple FSx volumes as well, to shard the shuffle data across different volumes.

```json
{
  "shuffle": {
    "rootDir": "/shuffle"
  },
  "sparkConf": {
    "spark.shuffle.s3.folderPrefixes": "2"
  },
  "volumes": [
    {
      "name": "spark-vol1",
      "persistentVolumeClaim": {
        "claimName": "fsx-claim-1"
      }
    },
    {
      "name": "spark-vol2",
      "persistentVolumeClaim": {
        "claimName": "fsx-claim-2"
      }
    }
  ],
  "driver": {
    "volumeMounts": [
      {
        "mountPath": "/shuffle/0",
        "name": "spark-vol1"
      },
      {
        "mountPath": "/shuffle/1",
        "name": "spark-vol2"
      }
    ]
  },
  "executor": {
    "volumeMounts": [
      {
        "mountPath": "/shuffle/0",
        "name": "spark-vol1"
      },
      {
        "mountPath": "/shuffle/1",
        "name": "spark-vol2"
      }
    ]
  }
}
```

The above configuration will shard the shuffle data across two different PVC volumes defined in kubernetes, such as

```json
{
  "apiVersion": "v1",
  "kind": "PersistentVolumeClaim",
  "metadata": {
    "name": "fsx-claim-1"
  },
  "spec": {
    "accessModes": ["ReadWriteMany"],
    "resources": {
      "requests": {
        "storage": "200Gi"
      }
    },
    "storageClassName": "sc-ontap-nas"
  }
}
```

To configure FSx for NetApp ONTAP, refer to the [Use Astra Trident with Amazon FSx for NetApp ONTAP](https://docs.netapp.com/us-en/trident/trident-use/trident-fsx.html) documentation.

When using S3 as the shuffle storage medium, altering the `spark.hadoop.fs.s3a.block.size` and `spark.hadoop.fs.s3a.multipart.size` configurations can also improve performance.

## Limitations

- Shuffle Data reuse is only available for Spark 3.2 and later.
- Preferably set the `spark.dynamicAllocation.shuffleTracking.enabled` to false when using External Shuffle Storage.




