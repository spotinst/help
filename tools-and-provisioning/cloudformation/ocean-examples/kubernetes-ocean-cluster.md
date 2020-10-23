# Kubernetes Ocean Cluster

Create an Ocean Cluster with the following CloudFormation template.

Supports Update Policy:

```
shouldUpdateTargetCapacity
```

For more information on UpdatePolicy, see [Parameters](tools-and-provisioning/cloudformation/template-structure/parameters).

The full body attribute list is available on the [Create](https://help.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/create-2/) page of the API documentation.

## Request: JSON Example

```json
{
  "Resources": {
    "SpotinstOcean": {
      "Type": "Custom::ocean",
      "Properties": {
        "ServiceToken": {
          "AWS::Sub": ["arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation"]
        },
        "accessToken": "Spot Token",
        "accountId": "Spot Account ID",
        "autoTag": true,
        "updatePolicy": {
          "shouldUpdateTargetCapacity": false
        },
        "ocean": {
          "name": "Your Ocean Name",
          "controllerClusterId": "ocean.k8s",
          "region": {
            "AWS::Sub": ["${AWS::Region}"]
          },
          "autoScaler": {
            "isEnabled": true,
            "cooldown": 180,
            "resourceLimits": {
              "maxMemoryGib": 1500,
              "maxVCpu": 750
            },
            "down": {
              "evaluationPeriods": 3
            },
            "headroom": {
              "cpuPerUnit": 2000,
              "memoryPerUnit": 0,
              "numOfUnits": 4
            },
            "isAutoConfig": false
          },
          "capacity": {
            "minimum": 0,
            "maximum": 1,
            "target": 1
          },
          "strategy": {
            "spotPercentage": 100,
            "fallbackToOd": true,
            "utilizeReservedInstances": false
          },
          "compute": {
            "subnetIds": [""],
            "instanceTypes": {
              "whitelist": ["c4.8xlarge"]
            },
            "launchSpecification": {
              "imageId": "",
              "userData": "12345678987654321",
              "securityGroupIds": [""],
              "iamInstanceProfile": {
                "arn": ""
              },
              "keyPair": "",
              "tags": {
                "tagKey": "creator",
                "tagValue": "test"
              }
            }
          }
        }
      }
    }
  }
}
```

## Request: YAML Example

```yaml
Resources:
  SpotinstOcean:
    Type: "Custom::ocean"
    Properties:
      ServiceToken: !Sub arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation
      accessToken: !Ref SpotinstToken
      accountId: !Ref SpotinstAccountId
      autoTag: true
      updatePolicy:
        shouldUpdateTargetCapacity: false
      ocean:
        name: !Ref OceanName
        controllerClusterId: "ocean.k8s"
        region: !Sub ${AWS::Region}
        autoScaler:
          isEnabled: true
          cooldown: 180
          resourceLimits:
            maxMemoryGib: 1500
            maxVCpu: 750
          down:
            evaluationPeriods: 3
          headroom:
            cpuPerUnit: 2000
            memoryPerUnit: 0
            numOfUnits: 4
          isAutoConfig: false
        capacity:
          minimum: 0
          maximum: 1
          target: 1
        strategy:
          spotPercentage: 100
          fallbackToOd: true
          utilizeReservedInstances: false
        compute:
          subnetIds:
            - ""
          instanceTypes:
            whitelist:
              - "c4.8xlarge"
          launchSpecification:
            imageId: ""
            userData: "12345678987654321"
            securityGroupIds:
              - ""
            iamInstanceProfile:
              arn: ""
            keyPair: ""
            tags:
              - tagKey: "creator"
```
