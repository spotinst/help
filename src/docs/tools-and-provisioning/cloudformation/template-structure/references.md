# References

AWS CloudFormation provides a built-in function that helps to reuse parameters and different resources managed by the stack:

- When specifying the logical name of a parameter, the value of the parameter is returned.
- When specifying the logical name of a resource, it returns a value that can be used to refer to that resource, such as a physical ID.

To set up, use: `` "Ref": "logical-name" ``

## Using Parameters

Define a parameter:

```json
{
  "Parameters": {
    "accountId": {
      "Type": "String",
      "Default": "act-12345"
    }
  }
}
```

Reference the parameter as a resource property:

```json
{ "accountId": { "Ref": "accountId" } }
```

## Using Resource IDs

Create a custom resource: `SpotinstElastigroup`

```json
{
  "SpotinstElastigroup": {
    "Type": "Custom::elasticgroup",
    "Properties": {}
  }
}
```

Create a subscription to the group which was created, while referencing the group ID:

```json
{ "resourceId": { "Ref": "SpotinstElastigroup" } }
```

Request: Create Elastigroup and notification by references

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
          "name": "Group-CF",
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
          "endpoint": "arn:aws:sns:us-west-1:842422002533:ex-topic",
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

A full example is available [here](tools-and-provisioning/cloudformation/beanstalk-examples/create-new-environment).
