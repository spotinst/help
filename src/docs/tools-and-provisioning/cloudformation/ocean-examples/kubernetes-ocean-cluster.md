# Kubernetes Ocean Cluster

Create an Ocean Cluster with the following CloudFormation template.

Supports Update Policy:

```
shouldUpdateTargetCapacity
```

For more information on UpdatePolicy, see [Parameters](tools-and-provisioning/cloudformation/template-structure/parameters).

The full body attribute list is available on the [Create](https://docs.spot.io/api/#operation/OceanAWSClusterCreate) page of the API documentation.

## Request: JSON Example

```json
{
  "Resources": {
    "SpotOcean": {
      "Type": "Custom::ocean",
      "Properties": {
        "ServiceToken": {
          "Fn::Sub": "arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation"
        },
        "accessToken": { "Ref": "token" },
        "accountId": { "Ref": "accountId" },
        "autoTag": true,
        "updatePolicy": {
          "shouldUpdateTargetCapacity": false
        },
        "ocean": {
          "name": "Your Ocean Name",
          "controllerClusterId": "Your Ocean Name",
          "region": {
            "Fn::Sub": "${AWS::Region}"
          },
          "autoScaler": {
            "isEnabled": true,
            "down": {
              "maxScaleDownPercentage": 50
            },
            "autoHeadroomPercentage": 5,
            "isAutoConfig": true,
            "resourceLimits": {
              "maxMemoryGib": 100000,
              "maxVCpu": 20000
            }
          },
          "capacity": {
            "target": 0,
            "minimum": 0,
            "maximum": 1000
          },
          "strategy": {
            "spotPercentage": 100,
            "fallbackToOd": true,
            "utilizeReservedInstances": false
          },
          "compute": {
            "subnetIds": ["subnet-123456789", "subnet-123456789"],
            "instanceTypes": {
              "blacklist": ["c5.16xlarge"]
            },
            "launchSpecification": {
              "imageId": "ami-123456789",
              "userData": {
                "Fn::Base64": {
                  "Fn::Join": [
                    "",
                    ["#!/bin/bash", "/etc/eks/bootstrap.sh mycluster"]
                  ]
                }
              },
              "securityGroupIds": ["sg-123456789", "sg-123456789"],
              "iamInstanceProfile": {
                "arn": "arn:aws:iam::123456789:instance-profile/eks-worker-123456789"
              },
              "tags": [
                {
                  "tagKey": "Application",
                  "tagValue": "kubernetes"
                },
                {
                  "tagKey": "env",
                  "tagValue": "dev"
                },
                {
                  "tagKey": "kubernetes.io/cluster/mycluster",
                  "tagValue": "owned"
                }
              ],
              "rootVolumeSize": 20
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
        region: !Ref: "AWS::Region"
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
          maximum: 1000
          target: 0
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
            userData:
              Fn::Base64: !Sub |
                #!/bin/bash -xe
                yum update -y aws-cfn-bootstrap
            securityGroupIds:
              - ""
            iamInstanceProfile:
              arn: ""
            keyPair: ""
            tags:
              - tagKey: "creator"
```
