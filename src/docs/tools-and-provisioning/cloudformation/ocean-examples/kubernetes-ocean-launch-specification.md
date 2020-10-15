# Kubernetes Ocean Launch Spec

Create an Ocean Launch Spec with the following CloudFormation template.

The full body attribute list is available on the [Create](https://docs.spot.io/spotinst-api/ocean/ocean-cloud-api/ocean-for-aws/create/) page of the API documentation.

1. test
        1. test
                      1. test
                                            1. test
                                            2. test
                      2. test


## Request

Body

```
{
  "Resources": {
    "SpotinstOcean": {
      "Type": "Custom::oceanLaunchSpec",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:${Region}:178579023202:function:spotinst-cloudformation",
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
