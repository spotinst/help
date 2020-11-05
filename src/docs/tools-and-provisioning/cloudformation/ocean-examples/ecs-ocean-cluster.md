# ECS Ocean Cluster

Create an ECS Ocean Cluster with the following CloudFormation template.

Supports Update Policy:

`shouldUpdateTargetCapacity`

For more information on UpdatePolicy, see [Parameters](tools-and-provisioning/cloudformation/template-structure/parameters).

The full body attribute list is available on the [Create](https://docs.spot.io/api/#operation/OceanECSClusterCreate) page of the API documentation.

## Request: JSON Example

```json
{
  "Resources": {
    "SpotinstOcean": {
      "Type": "Custom::oceanEcs",
      "Properties": {
        "ServiceToken": {
          "Fn::Sub": "arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation"
        },
        "accessToken": "Spot Token",
        "accountId": "Spot Account ID",
        "updatePolicy": {
          "shouldUpdateTargetCapacity": false
        },
        "oceanEcs": {
          "region": "us-west-2",
          "name": "test-cluster",
          "clusterName": "ECS Cluster Name",
          "autoScaler": {
            "resourceLimits": {
              "maxMemoryGib": 100000,
              "maxVCpu": 20000
            }
          },
          "capacity": {
            "target": 1,
            "minimum": 0,
            "maximum": 1000
          },
          "compute": {
            "subnetIds": ["subnet-1234"],
            "instanceTypes": {},
            "launchSpecification": {
              "imageId": "ami-12345",
              "userData": "",
              "securityGroupIds": ["sg-1234"],
              "iamInstanceProfile": {
                "arn": "Instance Profile ARN"
              },
              "tags": [
                {
                  "tagKey": "Description",
                  "tagValue": "This instance is the part of the Auto Scaling group which was created through ECS Console"
                }
              ],
              "monitoring": true,
              "associatePublicIpAddress": true
            }
          },
          "strategy": {
            "drainingTimeout": 120,
            "fallbackToOd": true
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
    Type: Custom::oceanEcs
    Properties:
      ServiceToken:
        Fn::Sub: arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation
      accessToken: !Ref AccessToken
      accountId: !Ref AccountID
      updatePolicy:
        shouldUpdateTargetCapacity: false
      oceanEcs:
        region: us-west-2
        name: test-cluster
        clusterName: !Ref ECSName
        autoScaler:
          resourceLimits:
            maxMemoryGib: 100000
            maxVCpu: 20000
        capacity:
          target: 1
          minimum: 0
          maximum: 1000
        compute:
          subnetIds:
            - subnet-1234
          instanceTypes: {}
          launchSpecification:
            imageId: ami-12345
            userData: ""
            securityGroupIds:
              - sg-1234
            iamInstanceProfile:
              arn: !GetAtt "ECSInstanceProfile.Arn"
            tags:
              - tagKey: Description
                tagValue:
                  This instance is the part of the Auto Scaling group which was created
                  through ECS Console
            monitoring: true
            associatePublicIpAddress: true
        strategy:
          drainingTimeout: 120
          fallbackToOd: true
```
