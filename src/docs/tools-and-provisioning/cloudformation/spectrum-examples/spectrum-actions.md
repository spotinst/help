# Spectrum Actions

Spectrum Actions add purpose to Alerts by sending messages to SNS, Email, and Slack.  A full list of action integrations along with parameters are detailed in the [Spectrum Action API](https://docs.spot.io/spotinst-api/spectrum/actions/create-action/).

## Request: Cloud Formation – JSON

Body

```json
"SpectrumAction": {
    "Type": "Custom::spectrumAction",
    "Properties": {
      "ServiceToken": {
        "Ref": "SpotinstServiceToken"
      },
      "accessToken": {
        "Ref": "SpotinstAccessToken"
      },
      "accoundId": {
        "Ref": "SpotinstAccountId"
      },
      "action": {
        "enabled": true,
        "name": "SpotinstEmailAction",
        "type": "EMAIL",
        "params": {
          "email": "noreply@spotinst.com"
        }
      }
    }
  }
  ```

## Request: Cloud Formation – YAML

Body
```yaml
SpectrumAction:
    Type: Custom::spectrumAction
    Properties:
      ServiceToken:
        Ref: SpotinstServiceToken
      accessToken:
        Ref: SpotinstAccessToken
      accoundId:
        Ref: SpotinstAccountId
      action:
        enabled: true
        name: SpotinstEmailAction
        type: EMAIL
        params:
          email: noreply@spotinst.com
```
