# Kubernetes Ocean Launch Spec

Create an Ocean Launch Spec with the following CloudFormation template. The full body attributes list is available on our main [creation](https://docs.spot.io/api/#operation/OceanAWSLaunchSpecCreate) page.

## Request

```json
{
  "Resources": {
    "SpotinstOcean": {
      "Type": "Custom::oceanLaunchSpec",
      "Properties": {
        "ServiceToken": {
          "Fn::Sub": "arn:aws:lambda:${AWS::Region}:178579023202:function:spotinst-cloudformation"
        },
        "accessToken": "YOUR TOKEN",
        "accountId": "YOUR ACCOUNT ID",
        "oceanLaunchSpec": {
          "oceanId": "",
          "imageId": "",
          "userData": "",
          "labels": [
            {
              "key": "",
              "value": ""
            }
          ],
          "taints": [
            {
              "key": "",
              "value": "",
              "effect": ""
            }
          ],
          "autoScale": {
            "headrooms": [
              {
                "cpuPerUnit": 1000,
                "memoryPerUnit": 2048,
                "gpuPerUnit": 0,
                "numOfUnits": 4
              }
            ]
          }
        }
      }
    }
  }
}
```
