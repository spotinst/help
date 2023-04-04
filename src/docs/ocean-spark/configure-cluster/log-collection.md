# Log collection

The Ocean Spark platform will collect logs from Spark applications. These logs are:

- The Spark event log
- The Spark driver log
- The Spark executor logs

The Spark event log contains information from the Spark runtime. It is used to e.g. calculate metrics for the Spark application, analyse its efficiency and identify issues. It is also used to power the Spark UI, after the Spark application has finished.

The Spark driver and executor logs are the log streams from the Spark pods. They are collected and made available for download after the Spark application has finished.

You can turn off driver and executor log collection on your Ocean Spark cluster.

## Example cluster configuration

```json
{
  "cluster": {
    "config": {
      "logCollection": {
        "collectDriverLogs": false
      }
    }
  }
}
```
