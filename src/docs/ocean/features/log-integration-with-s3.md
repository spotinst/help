# Log Integration with S3

There are several ways to view the Ocean logs, for example, you can view them directly in the Spot console or use the [Spot OpenAPI](https://docs.spot.io/api/) to fetch them.

This page describes Ocean’s log integration with AWS S3. You can configure Ocean to export its logs to an S3 bucket. You can then use your central monitoring tool to access the logs in the S3 bucket. This enables you to read and troubleshoot the Ocean logs in the same central interface where you access all of your other logs. An example of a specific case would be to use [AWS Lambda to send logs from S3](https://docs.newrelic.com/docs/logs/enable-log-management-new-relic/enable-log-monitoring-new-relic/aws-lambda-sending-logs-s3/) to the New Relic monitoring application.

## Prerequisite

You will need to add to the Spot policy permissions to write to your S3 bucket. For example:

```json
{
  "Sid": "statement1",
  "Effect": "Allow",
  "Action": ["s3:PutObject"],
  "Resource": "arn:aws:s3:::awsexamplebucket1/*"
}
```

## Setup in Ocean

The integration consists of two parts:

- Defining the data integration between the Spot platform and an S3 bucket. This definition is at the Spot account level and can then be used by one or more Ocean clusters.
- Defining the usage of the data integration by an ocean cluster. This activates the logging export to the S3 bucket defined in the data integration.

Once you set up the integration, Ocean will start sending log files from the defined cluster to your S3 bucket.

To set up the integration in Ocean, do the following:

1. Use the [Create Data Integration](https://docs.spot.io/api/#operation/DataIntegrationCreate) API to configure the basic parameters of the integration such as the vendor name, a name identifying the integration (as you may want to create several integrations and keep them separate), the S3 bucket name, and the destination sub-directory for the exported log files.

```json
{
  "dataIntegration": {
    "vendor": "S3",
    "name": "production-logs",
    "config": {
      "bucketName": "my-bucket-name",
      "subdir": "dev-423a"
    }
  }
}
```

2. When you get the response to the Create Data Integration API, copy the integration ID returned. You will need it for the next step. In the example below, you would copy di-123.

```json
  "response": {
    "status": {
      "code": 200,
      "message": "OK"
    },
    "items": [
      {
        "id": "di-123",
        "vendor": "s3",
        "name": "production-logs",
        "status": "enabled",
        "health": "valid",
        "code": 200,
        "message": "ok",
        "lastHealthCheck": "2021-08-1T10:00:00.000Z",
        "config": {
          "bucketName": "my-bucket-name",
          "subdir": "dev-423a"
        }
      }
    ],
  }
```

Use either the [Create Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterCreate) or [Update Cluster](https://docs.spot.io/api/#operation/OceanAWSClusterUpdate) (if your cluster already exists) API to enter the integration ID in the Ocean cluster that you want to export. (This is the ID that you copied in Step 2.)

```json
{
  "cluster": {
    "logging": {
      "export": {
        "s3": {
          "id": "di-123"
        }
      }
    }
  }
}
```

If you want to monitor several Ocean clusters, repeat the same procedure for each cluster. You will be able to use the name format of the log files (described below) to distinguish between the logs from different clusters.

### Log Files

Each Ocean log file on S3 contains three minutes of logging and has the following format for the filename:

`accountId_oceanId_oceanName_startDate.log`

For example, a filename would look like:

`act-12345_o-12345678_cluster.k8s.com_2021-08-18T08:06:00Z.log`

## What’s Next?

Learn more about related APIs: [List Data Integration](https://docs.spot.io/api/#operation/dataIntegrationList), [Update](https://docs.spot.io/api/#operation/updateDataIntegration), [Get](https://docs.spot.io/api/#operation/dataIntegrationGet), and [Delete](https://docs.spot.io/api/#operation/dataIntegrationDelete).
