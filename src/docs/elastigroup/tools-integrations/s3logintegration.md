# Log Integration with S3

There are several ways to view logs. For example, you can view them directly in the Spot console or use the [Spot OpenAPI](https://docs.spot.io/api/) to fetch them.

You can configure Elastigroup to export logs to an S3 bucket. You can then use your central monitoring tool to access the logs in the S3 bucket. This lets you read and troubleshoot Elastigroup logs in the same central interface where you access all of your other logs. An example of a specific case would be to use [AWS Lambda to send logs from S3](https://docs.newrelic.com/docs/logs/enable-log-management-new-relic/enable-log-monitoring-new-relic/aws-lambda-sending-logs-s3/) to the New Relic monitoring application.

## Prerequisite

You must add Spot policy write permissions for the S3 bucket. For example:

```json
{
  "Sid": "statement1",
  "Effect": "Allow",
  "Action": ["s3:PutObject"],
  "Resource": "arn:aws:s3:::awsexamplebucket1/*"
}
```

## Setup in Spot

The integration consists of two parts:

- Defining the data integration between the Spot platform and an S3 bucket. This definition is at the Spot account level and can then be used by one or more Elastigroups.
- Defining the usage of the data integration by an Elastigroup. This activates the logging export to the S3 bucket defined in the data integration.

Once you set up the integration, Elastigroup will start sending log files from the group to your S3 bucket.

1. [Create a data integration](https://docs.spot.io/api/#operation/DataIntegrationCreate) to configure the basic parameters of the integration such as the vendor name, a name identifying the integration (as you may want to create several integrations and keep them separate), the S3 bucket name, and the destination subdirectory for the exported log files.

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

2. When you get the response to the API, copy the integration ID returned. You will need it for the next step. In the example below, you would copy <i>di-123</i>.

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

3. [Create Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) or [update Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsUpdate) and enter the integration ID in the Elastigroup you want to export. This is the ID that you copied from the API response.

   ```json
   {
     "group": {
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

If you want to monitor several groups, repeat the same procedure for each group. The name of the log file includes the name of Elastigroup.

### Log Files

Each Elastigroup log file on S3 contains three minutes of logging. The file name is formatted as `accountId_oceanId_oceanName_startDate.log`, for example, `act-12345_o-12345678_cluster.k8s.com_2021-08-18T08:06:00Z.log`.
