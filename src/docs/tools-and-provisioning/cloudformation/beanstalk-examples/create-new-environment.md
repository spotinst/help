# Create New Environment

To create an Elastigroup in the same template that creates a Beanstalk environment, create the following in your template:

1. Create a new beanstalk environment.
2. Create a new Elastigroup which is dependent on the new Beanstalk Environment.

`"DependsOn": "SampleEnv"`

3. Under the Elastigroup Beanstalk property, use `EnvironmentName` parameter instead of `environmentId`, and reference (ref) to the new environment name.

In order to view the full list of all available Beanstalk parameters, please follow this [link](tools-and-provisioning/cloudformation/beanstalk-examples/use-existing-environment).

```json
{
  "beanstalk": {
    "environmentName": {
      "Ref": "SampleEnv"
    }
  }
}
```

| Parameter         | Type   | Description                                             |
| ----------------- | ------ | ------------------------------------------------------- |
| `environmentName` | String | The new Beanstalk Environment name Example: `SampleEnv` |

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": "Template Example For Creating Beanstalk Environment together with an Elastigroup",
  "Resources": {
    "ApplicationVersion": {
      "Type": "AWS::ElasticBeanstalk::ApplicationVersion",
      "Properties": {
        "ApplicationName": {
          "Ref": "SampleApp"
        },
        "Description": "Version 1.0",
        "SourceBundle": {
          "S3Bucket": "",
          "S3Key": ""
        }
      }
    },
    "SampleApp": {
      "Properties": {
        "Description": "Sample app"
      }
    },
    "SampleEnv": {
      "Type": "AWS::ElasticBeanstalk::Environment",
      "Properties": {
        "ApplicationName": {
          "Ref": "SampleApp"
        },
        "OptionSettings": [
          {
            "Namespace": "",
            "OptionName": "",
            "Value": ""
          }
        ],
        "SolutionStackName": "",
        "VersionLabel": {
          "Ref": "ApplicationVersion"
        }
      }
    },
    "SampleAppInstanceSecurityGroup": {
      "Type": "AWS::EC2::SecurityGroup",
      "Properties": {
        "GroupDescription": "Enable SSH and standard Sample app ports",
        "SecurityGroupIngress": [
          {
            "CidrIp": "172.16.4.0/22",
            "FromPort": "22",
            "IpProtocol": "tcp",
            "ToPort": "22"
          }
        ],
        "VpcId": {
          "Ref": "VPC"
        }
      }
    },
    "SampleSpotinstElastigroup": {
      "Type": "Custom::beanstalkElastigroup",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-west-2:178579023202:function:spotinst-cloudformation",
        "accessToken": "YOUR_TOKEN_HERE",
        "accountId": "act-1234567",
        "beanstalkElastigroup": {
          "DependsOn": "SampleEnv",
          "beanstalk": {
            "environmentId": "e-3tkmbj7hzc",
            "managedActions": {
              "platformUpdate": {
                "performAt": "timeWindow",
                "timeWindow": "Sun:01:00-Sun:02:00",
                "updateLevel": "minorAndPatch"
              }
            },
            "deploymentPreferences": {
              "automaticRoll": true,
              "batchSizePercentage": 100,
              "gracePeriod": 0,
              "strategy": {
                "action": "ROLL",
                "shouldDrainInstances": false
              }
            }
          },
          "name": "test",
          "region": "us-west-2",
          "capacity": {
            "maximum": "1",
            "minimum": "1",
            "target": "1"
          },
          "product": "Linux/UNIX",
          "spotInstanceTypes": ["m3.large", "m4.large"]
        }
      }
    }
  }
}
```
