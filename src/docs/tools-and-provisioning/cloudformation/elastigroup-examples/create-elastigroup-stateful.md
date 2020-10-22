# Create Elastigroup – Stateful

Create a new Elastigroup – Stateful configuration.

You should make sure to specify the stateful deallocation configuration under the `deletePolicy` section. For more information about the parameters, see [Delete Elastigroup](https://docs.spot.io/api/#operation/elastigroupAwsDelete) in the API documentation.

The full body attribute list is available on the [Create](https://docs.spot.io/api/#operation/elastigroupAwsCreate) page in the API documentation.

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
    "shouldUpdateTargetCapacity": {
      "Type": "String",
      "Default": "true",
      "AllowedValues": ["false", "true"],
      "Description": "Should update target capacity on group update"
    },
    "shouldResumeStateful": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should resume stateful instances on group update"
    },
    "shouldDeleteImages": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should delete images for stateful instances on group delete"
    },
    "shouldDeleteNetworkInterfaces": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should delete network interfaces for stateful instances on group delete"
    },
    "shouldDeleteVolumes": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should delete volumes for stateful instances on group delete"
    },
    "shouldDeleteSnapshots": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should delete snapshots for stateful instances on group delete"
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
          "shouldResumeStateful": {
            "Ref": "shouldResumeStateful"
          },
          "shouldUpdateTargetCapacity": {
            "Ref": "shouldUpdateTargetCapacity"
          }
        },
        "deletePolicy": {
          "shouldDeleteImages": {
            "Ref": "shouldDeleteImages"
          },
          "shouldDeleteNetworkInterfaces": {
            "Ref": "shouldDeleteNetworkInterfaces"
          },
          "shouldDeleteVolumes": {
            "Ref": "shouldDeleteVolumes"
          },
          "shouldDeleteSnapshots": {
            "Ref": "shouldDeleteSnapshots"
          }
        },
        "group": {
          "name": "CloudFormation-Stateful",
          "strategy": {
            "risk": 100,
            "availabilityVsCost": "costOriented",
            "fallbackToOd": true,
            "persistence": {
              "blockDevicesMode": "reattach",
              "shouldPersistRootDevice": true,
              "shouldPersistBlockDevices": true,
              "shouldPersistPrivateIp": true
            }
          },
          "capacity": {
            "target": 1,
            "minimum": 1,
            "maximum": 1
          },
          "scaling": {},
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
          "scheduling": {},
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
