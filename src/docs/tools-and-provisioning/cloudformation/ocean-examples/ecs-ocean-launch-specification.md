# ECS Ocean Launch Spec

Create an ECS Ocean Launch Spec with the following CloudFormation template.
The full body attribute list is available on the [Create](https://docs.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/create/) page of the API documentation.

## Request: JSON Example

```json
Body
{
  "Resources": {
    "SpotinstOcean": {
      "Type": "Custom::oceanEcsLaunchSpec",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation",
        "accessToken": "Spotinst Token",
        "accountId": "act-1234",
        "oceanLaunchSpec": {
          "oceanId": "o-12345",
          "imageId": "ami-1234",
          "name": "Test launch config",
          "userData": "",
          "securityGroupIds": [
            "sg-1234"
          ],
          "iamInstanceProfile": {
            "arn": "Instance Profile ARN"
          },
          "attributes": [
            {
              "key": "Description",
              "value": "Test Launch config For Ocean Ecs"
            }
          ],
          "autoScale": {
            "headrooms": [
              {
                "cpuPerUnit": 1024,
                "memoryPerUnit": 512,
                "numOfUnits": 2
              }
            ]
          }
        }
      }
    }
  }
}
```

## Request: YML Example

Body

```yaml
Resources:
  SpotinstOcean:
    Type: Custom::oceanEcsLaunchSpec
    Properties:
      ServiceToken:
        Fn::Sub: arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation
      accessToken: !Ref AccessToken
      accountId: "act-1234"
      oceanLaunchSpec:
        oceanId: "o-12345"
        imageId: "ami-1234"
        name: "Test launch config"
        userData: ""
        securityGroupIds:
          - sg-1234
        iamInstanceProfile:
          arn:
        attributes:
          - key: "Description"
            value: "Test Launch config For Ocean Ecs"
```
