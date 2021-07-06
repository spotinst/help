# Parameters

AWS CloudFormation allows customizing templates and inputting custom values to templates when creating or updating a stack. When creating a template, define a default value which will be used to provision the stack unless a different value is provided. Define the parameter value in the parameter block and use it in the resources block.

Below are several examples where we defined parameters to use inside the Spot resources, but any field is definable as a parameter.

## Defining a parameter:

```json
{
  "accountId": {
    "Type": "String",
    "Default": "act-12345"
  }
}
```

## Using a parameter value:

```json
{ "accountId": { "Ref": "accountId" } }
```

## Common Spot Parameters

| **Parameter**                 | **Type**    | **Description**                                                                                                                                         |
| ----------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shouldRoll                    | **Boolean** | Determines if the group should perform a blue-green deployment after an update to the cloud formation. Example: `True`                                  |
| shouldUpdateTargetCapacity    | **Boolean** | Determines if the groups target should update upon configuration updates. Example: `True`                                                               |
| shouldResumeStateful          | **Boolean** | Determines if the group's stateful instances should resume upon capacity changes. Example: `True`                                                       |
| shouldDeleteSnapshots         | **Boolean** | Determines if the group's EBS Volume snapshots collected from instances should be deleted once the group is deleted. Example: `True`                    |
| shouldDeleteVolumes           | **Boolean** | Determines if the group's EBS Volumes collected from instances should be deleted once the group is deleted. Example: `True`                             |
| shouldDeleteNetworkInterfaces | **Boolean** | Determines if the Elastic Network Interfaces associated with the instances should be deleted once the group is deleted. Example: `True` Default: `True` |
| ServiceToken                  | **String**  | Use the Spot Lambda. Example: `Arn:aws:lambda:ca-central-1:178579023202:function:spotinst-cloudformation`                                               |
| accessToken                   | **String**  | Spot API access token                                                                                                                                   |
| accountId                     | **String**  | Spot account ID. Example: `act-12345`                                                                                                                   |

## Request JSON Example:

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
        "group": {}
      }
    }
  }
}
```

## Request JSON Example: Using sensitive information as parameters in multiple resources

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
        "group": {}
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
          "resourceId": "...",
          "protocol": "aws-sns",
          "endpoint": "arn:aws:sns:us-west-1:842422002533:my-topic",
          "eventType": "AWS_EC2_INSTANCE_TERMINATE"
        }
      }
    }
  }
}
```

## Request JSON Example: Adding Auto Tags to Elastigroup

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
        "autoTag": true,
        "group": {}
      }
    }
  }
}
```
