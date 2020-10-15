# Spectrum Alert

Spectrum Alerts trigger when a metric passes a defined threshold.  Triggers can be linked to [Spectrum Actions](https://support.spot.io/provisioning-and-cicd/cloudformation/provisioning-and-cicd/cloudformation/spectrum-examples/spectrum-actions/).

For a complete list of parameters, see the [Spectrum Alert API](https://docs.spot.io/spotinst-api/spectrum/alerts/create-alert/).

## Request: CloudFormation – JSON

Body

```json
"SpectrumAlert": {
    "Type": "Custom::spectrumAlert",
    "Properties": {
      "ServiceToken": {
        "Ref": "SpotinstServiceToken"
      },
      "accessToken": {
        "Ref": "SpotinstToken"
      },
      "accoundId": {
        "Ref": "SpotinstAccountId"
      },
      "alert": {
        "enabled": true,
        "name": "Spotinst Test | spot_instances",
        "description": "Test for spot instances",
        "documentation": "test for number of spot instances",
        "namespace": "elastigroup",
        "metricName": "spot_instances",
        "dimensions": [
          {
            "name": "group_id",
            "value": {
              "Ref": "ElastigroupId"
            }
          }
        ],
        "period": "1h",
        "consecutivePeriods": 2,
        "statistic": "count",
        "conditions": {
          "warning": {
            "threshold": 2,
            "operator": "lt"
          },
          "error": {
            "threshold": 1,
            "operator": "le"
          },
          "critical": {
            "threshold": 0,
            "operator": "le"
          }
        },
        "actionsEnabled": true,
        "actions": {
          "unknownActionIds": [

          ],
          "okActionIds": [

          ],
          "warningActionIds": [
            {
              "Ref": "SpectrumWarningAction"
            }
          ],
          "errorActionIds": [
            {
              "Ref": "SpectrumErrorAction"
            }
          ],
          "criticalActionIds": [
            {
              "Ref": "SpectrumCriticalAction"
            }
          ]
        }
      }
    }
  }
  ```

## Request: CloudFormation – YAML

Body

```YML
SpectrumAlert:
    Type: Custom::spectrumAlert
    Properties:
      ServiceToken:
        Ref: SpotinstServiceToken
      accessToken:
        Ref: SpotinstToken
      accoundId:
        Ref: SpotinstAccountId
      alert:
        enabled: true
        name: Spotinst Test | spot_instances
        description: Test for spot instances
        documentation: test for number of spot instances
        namespace: elastigroup
        metricName: spot_instances
        dimensions:
        - name: group_id
          value:
            Ref: ElastigroupId
        period: 1h
        consecutivePeriods: 2
        statistic: count
        conditions:
          warning:
            threshold: 2
            operator: lt
          error:
            threshold: 1
            operator: le
          critical:
            threshold: 0
            operator: le
        actionsEnabled: true
        actions:
          unknownActionIds: []
          okActionIds: []
          warningActionIds:
          - Ref: SpectrumWarningAction
          errorActionIds:
          - Ref: SpectrumErrorAction
          criticalActionIds:
          - Ref: SpectrumCriticalAction
```
