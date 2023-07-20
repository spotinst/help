# Notification

Add a new notification to an existing Elastigroup by creating a new stack and referring to existing groupId, or create a new Elastigroup together with a notification.

`protocol` and `eventType` options are available in the [Subscribe API](https://docs.spot.io/api/#operation/notificationsServiceSubscriptionsSubscribe).

```json
{
  "ElastigroupSubscription": {
    "Type": "Custom::subscription",
    "Properties": {
      "ServiceToken": { "Ref": "ServiceToken" },
      "accessToken": { "Ref": "accessToken" },
      "accountId": { "Ref": "accountId" },
      "subscription": {
        "resourceId": { "Ref": "SpotinstElastigroup" },
        "protocol": "aws-sns",
        "endpoint": "arn:aws:sns:us-west-1:842422002533:yael-topic",
        "eventType": "AWS_EC2_INSTANCE_TERMINATE"
      }
    }
  }
}
```

## Request: Create a Notification and an Elastigroup

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
    "ServiceToken": {
      "Type": "String",
      "Default": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation"
    },
    "accessToken": {
      "NoEcho": "true",
      "Type": "String"
    },
    "accountId": {
      "Type": "String",
      "Default": "act-12345"
    },
    "shouldRoll": {
      "Type": "String",
      "Default": "false",
      "Description": "Should roll when updating"
    },
    "shouldUpdateTargetCapacity": {
      "Type": "String",
      "Default": "true",
      "AllowedValues": ["false", "true"],
      "Description": "Should update target capacity on group update"
    }
  },
  "Resources": {
    "SpotinstElastigroup": {
      "Type": "Custom::elasticgroup",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "updatePolicy": {
          "shouldRoll": {
            "Ref": "shouldRoll"
          },
          "rollConfig": {
            "batchSizePercentage": 50,
            "gracePeriod": 600
          },
          "shouldUpdateTargetCapacity": {
            "Ref": "shouldUpdateTargetCapacity"
          }
        },
        "group": {
          "name": "Yael-CloudFormation-stateless",
          "strategy": {
            "risk": 100,
            "onDemandCount": 0,
            "availabilityVsCost": "costOriented",
            "utilizeReservedInstances": false,
            "fallbackToOd": true
          },
          "capacity": {
            "target": 1,
            "minimum": 1,
            "maximum": 1
          },
          "scaling": {
            "target": [
              {
                "policyName": "target_policy_1",
                "metricName": "CPUUtilization",
                "statistic": "average",
                "source": "cloudWatch",
                "unit": "percent",
                "target": 50,
                "namespace": "AWS/EC2",
                "cooldown": 300
              }
            ]
          },
          "compute": {
            "instanceTypes": {
              "ondemand": "m3.large",
              "spot": ["m3.large", "m4.large", "c3.large", "c4.large"]
            },
            "availabilityZones": [
              {
                "name": "us-west-1c",
                "subnetId": "subnet-12345"
              }
            ],
            "launchSpecification": {
              "monitoring": false,
              "imageId": "ami-12345",
              "keyPair": "Assignment",
              "securityGroupIds": ["sg-12345"]
            },
            "product": "Linux/UNIX"
          },
          "thirdPartiesIntegration": {}
        }
      }
    },
    "ElastigroupSubscription": {
      "Type": "Custom::subscription",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "subscription": {
          "resourceId": {
            "Ref": "SpotinstElastigroup"
          },
          "protocol": "aws-sns",
          "endpoint": "arn:aws:sns:us-west-1:842422002533:my-topic",
          "eventType": "AWS_EC2_INSTANCE_TERMINATE"
        }
      }
    }
  },
  "Outputs": {
    "groupId": {
      "Value": {
        "Ref": "SpotinstElastigroup"
      }
    }
  }
}
```
