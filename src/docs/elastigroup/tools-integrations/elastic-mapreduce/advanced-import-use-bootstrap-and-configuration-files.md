# Advanced Import: Use Bootstrap and Configuration Files

While cloning an EMR cluster you can also specify Bootstrap actions and Configuration files in the cluster configuration. These will pull the information from an S3 bucket and apply these while the cluster is created.

Referencing the following JSON body example while Cloning the Cluster:

```

{
  "mrScaler": {
    "name": "my MRScaler",
    "description": "Spotinst MRScaler",
    "region": "us-west-2",
    "strategy": {
      "cloning": {
        "originClusterId": "j-1234567"
      }
    },
    "compute": {
      "availabilityZones": [...],
      "bootstrapActions": {
        "file": {
          "bucket": "emr-test",
          "key": "emr_bootstrap.json"
        }
      },  
      "instanceGroups": {...},
      "configurations": {
        "file": {
          "bucket": "emr-test",
          "key": "emr_configurations.json"
        }
      }
    },
    "scaling": {...}
  }
}

```

The required structure for Bootstrap actions files should hold a JSON of the following format:

```

[
  {
    "name": "cluster_conf",
    "scriptPath": "s3://test.dev/bootstrap.sh",
    "args": [
      "s3://test.dev/bootstrap.properties",
      "bootstrap.properties"
    ]

  },
  {
    "name": "bootstrap_clone",
    "scriptPath": "s3://test.dev/bootstrap_1.sh",
    "args": []
  }
]

```

The required structure for Configuration file should hold a JSON of the following format:

```

[
  {
    "classification": "hive",
    "properties": {
      "hive.exec.dynamic.partition": "true",
      "hive.exec.dynamic.partition.mode": "nonstrict"
    }
  },
  {
    "classification": "hive_1",
    "properties": {
      "hive.metastore-cache-ttl": "1m",
      "hive.s3.staging-directory": "/mnt/tmp/"
    }
  }
]

```
