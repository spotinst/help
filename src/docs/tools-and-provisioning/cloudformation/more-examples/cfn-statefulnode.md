
# Create AWS Stateful Nodes

You can create and manage AWS stateful nodes and managed instances using a CFN resource.

## Sample template with a stateful node

```json
"Resources": {
    "SpotinstStatefulNode": {
      "Type": "Custom::statefulNode",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-west-2:178579023202:function:spotinst-cloudformation",
        "accessToken": "Your Token",
        "accountId": "Your Account ID",
        "autoTag":true,
        "statefulNode":{
          "name":"New Stateful Node",
          "description":"Spotinst Stateful Node",
          "region":"us-west-2",
          "strategy":{
             "fallbackToOd":false
          },
          "persistence": {
             "persistPrivateIp": false,
             "persistBlockDevices": true,
             "persistRootDevice": true,
             "blockDevicesMode": "reattach"
          },
          "healthCheck": {
            "autoHealing": false
          },
          "compute": {
            "subnetIds": [
              "Your Subnet ID",
              "Your Subnet ID"
            ],
            "vpcId": "Your VPC ID",
            "launchSpecification": {
              "instanceTypes": {
                "preferredType": "t3.xlarge",
                  "types": [
                    "t3.xlarge"
                  ]
                },
              "ebsOptimized": false,
              "monitoring": false,
              "imageId": "Your Image ID",
              "tags": [
                {
                  "tagKey": "Creator",
                  "tagValue": "Name"
                }
              ]
            },
            "product": "Linux/UNIX"
          }
        }
      }
    }
  }
```
