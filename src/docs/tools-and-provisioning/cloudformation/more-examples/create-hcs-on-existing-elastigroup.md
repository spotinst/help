# Create HCS on Existing Elastigroup

Once the Spot Health Check Service is Installed on an instance, set the Spot Health Check configuration in Elastigroup using Cloud Formation templates.

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Resources": {
    "SpotinstHCS": {
      "Type": "Custom::healthCheck",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation",
        "accessToken": "YOUR_TOKEN_HERE",
        "accountId": "act-12345",
        "healthCheck": {
          "resourceId": "sig-12345",
          "name": "Service-1-healthCheck",
          "proxyAddress": "51.22.125.47",
          "check": {
            "protocol": "http",
            "port": 80,
            "endpoint": "index.html",
            "interval": 30,
            "timeout": 60,
            "unhealthyThreshold": 2,
            "healthyThreshold": 2
          }
        }
      }
    }
  }
}
```
