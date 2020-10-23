# Clone Cluster

Clone an existing EMR Cluster into an Elastigroup.

| **Parameter**     | **Type**   | **Description**                                     |
| ----------------- | ---------- | --------------------------------------------------- |
| `originClusterId` | **String** | The EMR cluster ID<br>Example: `j-12345`            |
| `strategy`        | **String** | EMR group type- clone or wrap<br>Example: `cloning` |

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
          "name": "emr_clone_cfn",
          "region": "us-west-1",
          "strategy": {
            "cloning": {
              "originClusterId": "j-12345"
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
              "masterGroup": {
                "target": 1,
                "instanceTypes": ["c3.xlarge"],
                "lifeCycle": "SPOT"
              },
              "coreGroup": {
                "instanceTypes": ["c3.xlarge"],
                "lifeCycle": "SPOT",
                "capacity": {
                  "target": 1,
                  "minimum": 0,
                  "maximum": 1
                }
              },
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
          },
          "coreScaling": {
            "up": [
              {
                "policyName": "Task_policy_1",
                "metricName": "CPUUtilization",
                "statistic": "average",
                "unit": "percent",
                "threshold": 50,
                "action": {
                  "type": "adjustment",
                  "adjustment": 2
                },
                "namespace": "AWS/EC2",
                "period": "300",
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
