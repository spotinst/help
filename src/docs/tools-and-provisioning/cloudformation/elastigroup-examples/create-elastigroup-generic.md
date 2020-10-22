# Create Elastigroup – Generic

Create a new Elastigroup – generic with basic scaling.

The full body attribute list is available on the [Create page](https://docs.spot.io/api/#operation/elastigroupAwsCreate) of the API documentation.

The product value should be `Linux/UNIX (Amazon VPC)` for accounts that support EC2-classic (AWS accounts created before 2013-12-04).

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
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
        "ServiceToken": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation",
        "accessToken": "YOUR_TOKEN_HERE",
        "accountId": "act-12345",
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
          "name": "CloudFormation-stateless",
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
                "subnetId": "subnet-85e0dddd"
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
          "scheduling": {
            "tasks": [
              {
                "frequency": "hourly",
                "taskType": "backup_ami"
              }
            ]
          },
          "thirdPartiesIntegration": {}
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
