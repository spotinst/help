# Publish Metrics to CloudWatch

Elastigroup can optionally publish custom metrics to CloudWatch. These metrics can be used to report data to any third party tool, such as DataDog or Grafana.

Elastigroup reports the following metrics per AWS account:

- Number of instances (OD and Spot) per instance type
- CPU
- Memory
- Disk
- NetworkIn
- NetworkOut

The custom namespace of these metrics is 'Spotinst' with 2 dimensions of Elastigroup ID and instance type.

To publish these metrics to CloudWatch add the following permission to the IAM Policy:

```
cloudWatch:PutMetricData

```

Once this is done, contact your account manager to have Spot begin publishing the Elastigroup metrics for you. At Spotinst, your data privacy is of utmost importance, which is why we require your confirmation before publishing data of any kind to third-party tools such as CloudWatch.
