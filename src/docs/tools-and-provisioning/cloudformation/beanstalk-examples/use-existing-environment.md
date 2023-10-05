# Use Existing Environment

| **Attribute**                                                                       | **Type**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| beanstalkElastigroup.beanstalk.environmentId \*                                     | **String**  | The beanstalk environment ID<br>Example: `e-12345`                                                                                                                                                                                                                                                                                                                                                        |
| beanstalkElastigroup.beanstalk.managedActions                                       | **Object**  | managedActions schema                                                                                                                                                                                                                                                                                                                                                                                     |
| beanstalkElastigroup.beanstalk.managedActions.platformUpdate                        | **Object**  | platformUpdate schema                                                                                                                                                                                                                                                                                                                                                                                     |
| beanstalkElastigroup.beanstalk.managedActions.platformUpdate.performAt              | **String**  | Either never or timeWindow. if set to timeWindow then timeWindow parameter must be set                                                                                                                                                                                                                                                                                                                    |
| beanstalkElastigroup.beanstalk.managedActions.platformUpdate.timeWindow             | **String**  | Time window range<br>Example: `ddd:hh:mm-ddd:hh:mm`                                                                                                                                                                                                                                                                                                                                                       |
| beanstalkElastigroup.beanstalk.managedActions.platformUpdate.updateLevel            | **String**  | Can be either patch or minorAndPatch (default)                                                                                                                                                                                                                                                                                                                                                            |
| beanstalkElastigroup.beanstalk.managedActions.platformUpdate.instanceRefreshEnabled | **Boolean** | If the flag is set to true and at the end of the time window there is no available update, the group will be rolled                                                                                                                                                                                                                                                                                       |
| beanstalkElastigroup.beanstalk.deploymentPreferences                                | **String**  | deploymentPreferences schema                                                                                                                                                                                                                                                                                                                                                                              |
| beanstalkElastigroup.beanstalk.deploymentPreferences.automaticRoll                  | **String**  | Should roll automatically                                                                                                                                                                                                                                                                                                                                                                                 |
| beanstalkElastigroup.beanstalk.deploymentPreferences.batchSizePercentage            | **String**  | Size of patch for roll as a percent                                                                                                                                                                                                                                                                                                                                                                       |
| beanstalkElastigroup.beanstalk.deploymentPreferences.gracePeriod                    | **String**  | Amount of time between each batch in a roll                                                                                                                                                                                                                                                                                                                                                               |
| beanstalkElastigroup.beanstalk.deploymentPreferences.strategy                       | **String**  | Strategy schema                                                                                                                                                                                                                                                                                                                                                                                           |
| beanstalkElastigroup.beanstalk.deploymentPreferences.strategy.action                | **String**  | Action type<br>Example: `REPLACE_SERVER`, `RESTART_SERVER`                                                                                                                                                                                                                                                                                                                                                |
| beanstalkElastigroup.beanstalk.deploymentPreferences.strategy.shouldDrainInstances  | **String**  | Should instances be drained while rolling                                                                                                                                                                                                                                                                                                                                                                 |
| beanstalkElastigroup.ignoreInitHealthChecks                                         | **String**  | Determines whether Elasitgroup should wait for the instances to be healthy in order to complete the group's creation<br>Example: `False`                                                                                                                                                                                                                                                                  |
| beanstalkElastigroup.name \*                                                        | **String**  | The name to give the Spot Elastigroup<br>Example: `MyBeanstalkEG`                                                                                                                                                                                                                                                                                                                                         |
| beanstalkElastigroup.region \*                                                      | **String**  | The region of the existing Beanstalk environment. The new Elastigroup will be created in the same region.<br>Example: `us-west-2`                                                                                                                                                                                                                                                                         |
| beanstalkElastigroup.healthCheckType                                                | **String**  | How Elastigroup will perform health checks. Valid values: TARGET_GROUP, ELB, EC2, NONE                                                                                                                                                                                                                                                                                                                   |
| beanstalkElastigroup.healthCheckGracePeriod                                         | **Integer** | Time to wait before starting health checks on the instances in the Elastigroup.<br>Example: `600`                                                                                                                                                                                                                                                                                                         |
| beanstalkElastigroup.capacity.target \*                                             | **Integer** | The number of instances the Elastigroup will launch.<br>Example: `2`                                                                                                                                                                                                                                                                                                                                      |
| beanstalkElastigroup.capacity.minimum \*                                            | **Integer** | The minimum number of instances allowed in the Elastigroup.<br>Example: `1`                                                                                                                                                                                                                                                                                                                               |
| beanstalkElastigroup.capacity.maximum \*                                            | **Integer** | The maximum number of instances allowed in the Elastigorup.<br>Example: `3`                                                                                                                                                                                                                                                                                                                               |
| beanstalkElastigroup.product \*                                                     | **String**  | A valid AWS product type.<br>Example: `Linux/UNIX`                                                                                                                                                                                                                                                                                                                                                        |
| beanstalkElastigroup.spotInstanceTypes \*                                           | **Array**   | A list of EC2 instance types that the Elastigroup is allowed to choose from.<br>Example: `["m3.large", "m4.large"]`                                                                                                                                                                                                                                                                                       |
| beanstalkElastigroup.groupConfig                                                    | **Object**  | Additional Elastigroup properties that will be merged with the imported Beanstalk configuration. Valid parameters include those listed in the official Elastigroup API, found here: [AWS Elastigroup Definition](https://docs.spot.io/api/#operation/elastigroupAwsCreate)<br>Example: `{"scheduling": { "tasks": [{"taskType": "roll", "cronExpression": "0 0 * * 0", "batchSizePercentage": 20 } ] } }` |

## Request

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Description": "Template Example For Creating an Elastigroup in an Existing Beanstalk environment ",
  "Parameters": {
    "ignoreInitHealthChecks": {
      "Type": "String",
      "Default": "false",
      "AllowedValues": ["false", "true"],
      "Description": "Should wait for instances to be healthy on group create"
    }
  },
  "Resources": {
    "SampleSpotinstElastigroup": {
      "Type": "Custom::beanstalkElastigroup",
      "Properties": {
        "ServiceToken": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation",
        "accessToken": "YOUR_TOKEN_HERE",
        "accountId": "act-12345",
        "createPolicy": {
          "ignoreInitHealthChecks": {
            "Ref": "ignoreInitHealthChecks"
          }
        },
        "beanstalkElastigroup": {
          "beanstalk": {
            "environmentId": "e-3tkmbj7hzc",
            "managedActions": {
              "platformUpdate": {
                "performAt": "timeWindow",
                "timeWindow": "Sun:01:00-Sun:02:00",
                "updateLevel": "minorAndPatch",
                "instanceRefreshEnabled": true
              }
            },
            "deploymentPreferences": {
              "automaticRoll": true,
              "batchSizePercentage": 100,
              "gracePeriod": 0,
              "strategy": {
                "action": "REPLACE_SERVER",
                "shouldDrainInstances": false
              }
            }
          },
          "name": "beanstalk-test",
          "region": "us-west-1",
          "healthCheckType": "TARGET_GROUP",
          "healthCheckGracePeriod": 600,
          "capacity": {
            "target": 1,
            "minimum": 1,
            "maximum": 1
          },
          "product": "Linux/UNIX",
          "spotInstanceTypes": ["m3.large", "m4.large"],
          "groupConfig": {}
        }
      }
    }
  }
}
```
