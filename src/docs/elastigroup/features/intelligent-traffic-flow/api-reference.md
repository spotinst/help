<meta name="robots" content="noindex">

# API Reference for Intelligent Traffic Flow

To use Intelligent Traffic Flow (ITF) through the API commands, the following Elastigroup commands are required:

- [Create Elastigroup](https://docs.spot.io/api/#operation/elastigroupAwsCreate): To create a new ITF Elastigroup.
- [Update Elastigroup](https://docs.spot.io/api/#operation/elastigroupAwsUpdate): To add an ITF object to an existing Elastigroup or to change parameters in an existing ITF object.

In all of the APIs, the “itf” object is located under the “launchSpecification” object of the Elastigroup, as shown in the example below.

```json
{
  "group": {
    "compute": {
      "launchSpecification": {
        "itf": {
          "loadBalancers": [
            {
              "loadBalancerArn": "string",
                "listenerRules": [
                {
                  "ruleArn": "string"
                }
              ]
            }
          ],
          "migrationHealthinessThreshold": "integer",
          "fixedTargetGroups": "boolean",
          "weightStrategy": "string",
          "targetGroupConfig": {
            "vpcId" : "string"
            "healthCheckIntervalSeconds": "integer",
            "healthCheckPath": "string",
            "healthCheckPort": "integer",
            "healthCheckProtocol": "string",
            "healthCheckTimeoutSeconds": "integer",
            "healthyThresholdCount": "integer",
            "unhealthyThresholdCount": "integer",
            "matcher": {
              "httpCode": "string"
            },
            "port": "integer",
            "protocol": "String",
            "protocolVersion": "String",
            "tags": [
              {
                "tagKey": "string",
                "tagValue": "string"
              }
            ]
          }
        }
      }
    }
  }
}
```

The table below shows the description of each object and parameter in the API.

| Parameter                                    | Type                | Mandatory/ Optional                                | Valid Values                                                                                                | Description                                                                                                                                                                                                               |
| -------------------------------------------- | ------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| loadBalancers                                | Array of LB objects | Mandatory                                          | List with minimum size of 1.                                                                                | Array of LoadBalancer Object                                                                                                                                                                                              |
| loadBalancers.loadBalancerArn                | String              | Mandatory                                          |                                                                                                             | The ARN of the Application load balancer that is going to be managed in the group.                                                                                                                                        |
| loadBalancers. listenerRules                 | Array of ‘rules’    | Mandatory                                          | List with minimum size of 1.                                                                                | The ARNs of the listener rules that should be maintained by ITF.                                                                                                                                                          |
| loadBalancers.listenerRules.rule.ruleArn     | String              | Mandatory                                          |                                                                                                             | ARN of a rule that is going to be managed by Elastigroup.                                                                                                                                                                 |
| weightStrategy                               | String              | Optional                                           | “custom“ or “vcpu“                                                                                          | Distribution strategy (either vCPU or custom weights). Custom strategy can be set only when group has custom weights.                                                                                                     |
| fixedTargetGroups                            | Boolean             | Optional                                           | “true” or “false”                                                                                           | Boolean to control whether to keep the set of target groups fixed. When set to true, all target groups will be created in advance upon create or update group, and will not be deleted, even when not being used anymore. |
| migrationHealthinessThreshold                | Integer             | Optional, default value is 50                      | Integer between 0-100.                                                                                      | Threshold for the minimum healthiness level of the target groups that is needed before activating the ITF rules (integer representing the percentage of healthy instances within the target groups).                      |
| targetGroupConfig.vpcId                      | String              | Mandatory                                          | Any string which is not empty or null.                                                                      | The ID of the Amazon Virtual Private Cloud for the creation of the target groups.                                                                                                                                         |
| targetGroupConfig.healthCheckPath            | String              | Mandatory                                          | Use the default path of “/“ to ping the root, or specify a custom path if preferred. Up to 1024 characters. | The destination for health checks on the targets.                                                                                                                                                                         |
| targetGroupConfig.healthCheckProtocol        | String              | Optional (default value “HTTP”)                    | Allow values: “HTTP or HTTPS“                                                                               | The protocol to use to connect with the target. HTTP or HTTPS.                                                                                                                                                            |
| targetGroupConfig.healthCheckPort            | Integer             | Optional (Default value: 80)                       | “1-65535“                                                                                                   | The port to use to connect with the target.                                                                                                                                                                               |
| targetGroupConfig.healthCheckIntervalSeconds | Integer             | Optional (Default value: 30)                       | 5-300                                                                                                       | The approximate amount of time, in seconds, between health checks of an individual target.                                                                                                                                |
| targetGroupConfig.healthCheckTimeoutSeconds  | Integer             | Optional (Default value: 5)                        | 2-120                                                                                                       | The amount of time, in seconds, during which no response means a failed health check.                                                                                                                                     |
| targetGroupConfig.healthyThresholdCount      | Integer             | Optional (Default value: 5)                        | “2-10“                                                                                                      | The number of consecutive health check successes required before considering an unhealthy target healthy.                                                                                                                 |
| targetGroupConfig.unhealthyThresholdCount    | Integer             | Optional (Default value: 2)                        | “2-10“                                                                                                      | The number of consecutive health check failures required before considering the target unhealthy.                                                                                                                         |
| targetGroupConfig.matcher                    | Map                 | Optional (Default value: “httpCode“ : “200”)       | “httpCode : xxx”                                                                                            |                                                                                                                                                                                                                           |
| targetGroupConfig.matcher.httpCode           | String              | Optional (Default value: “200”)                    | Number between 200 and 499, or multiple values (200,202) or a range of values (200-299)                     | Codes to use when checking for a successful response from a target. Can be set only when HTTP protocol version is set.                                                                                                    |
| targetGroupConfig.matcher.grpcCode           | String              | Optional (Default value: “12”)                     | Number between 0 and 99. or multiple values ("0,1"), or a range (0-5).                                      | Codes to use when checking for a successful response from a target. Can be set only when the GRCP protocol version is set.                                                                                                |
| targetGroupConfig.port                       | Integer             | Mandatory                                          | 1-65535                                                                                                     | The port on which the targets are listening. Not used if the target is a Lambda function.                                                                                                                                 |
| targetGroupConfig.protocol                   | String              | Mandatory                                          | “HTTP or HTTPS“                                                                                             | The protocol to use for routing traffic to the targets. The possible values are HTTP and HTTPS.                                                                                                                           |
| targetGroupConfig.protocolVersion            | String              | Optional (default value "HTTP1")                   | Allow values: “GRPC, HTTP1, HTTP2“                                                                          | The protocol version. The possible values are GRPC, HTTP1, and HTTP2.                                                                                                                                                     |
| targetGroupConfig.tags                       | array of object     | Optional (default empty)                           |                                                                                                             | The tags to assign to the target group.                                                                                                                                                                                   |
| targetGroupConfig.tags.tagKey                | String              | Optional (required - can’t create tag without key) |                                                                                                             |                                                                                                                                                                                                                           |
| targetGroupConfig.tags.tagValue              | String              | Optional (default empty string)                    |                                                                                                             |                                                                                                                                                                                                                           |

## What's Next?

Learn more about the Spot by NetApp [API Reference](https://docs.spot.io/api/).
