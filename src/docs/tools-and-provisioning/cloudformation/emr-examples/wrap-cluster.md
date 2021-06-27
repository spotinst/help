# Wrap Cluster

The Spot Elastigroup integration with EMR clusters can help you quickly Wrap your existing cluster with Spot instances as Task nodes.

This option lets you keep the original EMR Primary and Core configuration, and launch task nodes as part of the elastigroup.

Use the same template and change the strategy to the following:

```json
{
  "strategy": {
    "wrapping": {
      "sourceClusterId": "j-12345"
    }
  }
}
```

| **Parameter**     | **Type**   | **Description**                                        |
| ----------------- | ---------- | ------------------------------------------------------ |
| `sourceClusterId` | **String** | The EMR cluster ID. Example: `j-12345`                 |
| `strategy`        | **String** | EMR group type: `clone` or `wrap`. Example: `wrapping` |

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "ElastigroupEMR": {
      "Type": "Custom::mrScaler",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation",
        "accessToken": "YOUR_TOKEN_HERE",
        "mrScaler": {
          "name": "emr_wrap_cfn",
          "region": "us-west-1",
          "wrapping": {
            "cloning": {
              "sourceClusterId": "j-12345"
            }
          },
          "compute": {
            "availabilityZones": [
              {
                "name": "us-west-1c",
                "subnetId": "subnet-12345"
              }
            ],
            "instanceGroups": {
              "taskGroup": {
                "instanceTypes": ["c3.xlarge"],
                "capacity": {
                  "target": 1,
                  "minimum": 0,
                  "maximum": 1
                },
                "lifeCycle": "SPOT"
              }
            },
            "tags": [
              {
                "tagKey": "Name",
                "tagValue": "foo"
              },
              {
                "tagKey": "Creator",
                "tagValue": "bar"
              }
            ]
          },
          "scaling": {
            "up": [
              {
                "policyName": "task_policy_1",
                "metricName": "CPUUtilization",
                "statistic": "average",
                "unit": "percent",
                "threshold": 50,
                "action": {
                  "type": "updateCapacity",
                  "target": 4,
                  "minimum": 0,
                  "maximum": 4
                },
                "namespace": "AWS/EC2",
                "dimensions": [
                  {
                    "name": "InstanceId",
                    "value": "%instance-id%"
                  }
                ],
                "period": "900",
                "evaluationPeriods": 50,
                "cooldown": 600,
                "operator": "gte"
              }
            ]
          }
        }
      }
    }
  }
}
```
