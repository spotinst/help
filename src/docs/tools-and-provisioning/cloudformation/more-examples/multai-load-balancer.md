# Multai Load Balancer

Create a new Multai Load Balancer (MLB), a listener, a deployment group, a target set, and a routing rule.

## Request

Body

```json
{
  "AWSTemplateFormatVersion": "2010-09-09",
  "Parameters": {
    "ServiceToken": {
      "Type": "String",
      "Default": "arn:aws:lambda:us-west-1:178579023202:function:spotinst-cloudformation"
    },
    "accessToken": {
      "NoEcho": "true",
      "Type": "String"
    },
    "accountId": {
      "Type": "String",
      "Default": "act-12345"
    }
  },
  "Metadata": {
    "AWS::CloudFormation::Designer": {
      "76919ebf-50cb-4a8b-b007-d87dad971028": {
        "size": {
          "width": 60,
          "height": 60
        },
        "position": {
          "x": -180,
          "y": 60
        },
        "z": 1,
        "embeds": [],
        "dependson": [
          "dc49365a-25b8-4541-810a-26a55c69c50c",
          "9cbed298-ce58-4b19-ab37-6dbed2aca11c",
          "70ca76ff-9a50-4ff6-b868-1f311372a791"
        ]
      },
      "70ca76ff-9a50-4ff6-b868-1f311372a791": {
        "size": {
          "width": 60,
          "height": 60
        },
        "position": {
          "x": 30,
          "y": 70
        },
        "z": 0,
        "embeds": []
      },
      "aee4b053-31e9-4652-ae12-c770a55789fb": {
        "size": {
          "width": 60,
          "height": 60
        },
        "position": {
          "x": -150,
          "y": 160
        },
        "z": 0
      }
    }
  },
  "Resources": {
    "balancer01": {
      "Type": "Custom::mlb-balancer",
      "Properties": {
        "requestType": "create",
        "resourceType": "Custom::mlb-balancer",
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "balancer": {
          "name": "my-balancer",
          "timeouts": {
            "draining": 300,
            "idle": 60
          },
          "tags": [
            {
              "key": "Creator",
              "value": "Value"
            }
          ]
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Designer": {
          "id": "76919ebf-50cb-4a8b-b007-d87dad971028"
        }
      }
    },
    "listener01": {
      "Type": "Custom::mlb-listener",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "requestType": "create",
        "resourceType": "Custom::mlb-listener",
        "listener": {
          "balancerId": {
            "Ref": "balancer01"
          },
          "protocol": "HTTPS",
          "port": "443",
          "tlsConfig": {
            "minVersion": "TLS10",
            "maxVersion": "TLS12",
            "sessionTicketsDisabled": true,
            "preferServerCipherSuites": true,
            "cipherSuites": [
              "TLS_RSA_WITH_AES_256_CBC_SHA",
              "TLS_RSA_WITH_AES_128_CBC_SHA256"
            ],
            "insecureSkipVerify": false,
            "certificateIds": [
              "ce-12345",
              "ce-67890"
            ]
          },
          "tags": [
            {
              "key": "Creator",
              "value": "Value"
            }
          ]
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Designer": {
          "id": "70ca76ff-9a50-4ff6-b868-1f311372a791"
        }
      },
      "DependsOn": [
        "balancer01"
      ]
    },
    "deployment01": {
      "Type": "Custom::mlb-deployment",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "requestType": "create",
        "resourceType": "Custom::mlb-deployment",
        "deployment": {
          "name": "my-deployment"
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Designer": {
          "id": "70ca76ff-9a50-4ff6-b868-1f311372a791"
        }
      }
    },
    "targetSet01": {
      "Type": "Custom::mlb-targetSet",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "requestType": "create",
        "resourceType": "Custom::mlb-targetSet",
        "targetSet": {
          "name": "my-target-set",
          "balancerId": {
            "Ref": "balancer01"
          },
          "deploymentId": {
            "Ref": "deployment01"
          },
          "protocol": "HTTP",
          "weight": 1,
          "healthCheck": {
            "interval": 10,
            "path": "/healthCheck",
            "port": 80,
            "protocol": "HTTP",
            "timeout": 5,
            "healthyThresholdCount": 2,
            "unhealthyThresholdCount": 3
          },
          "tags": [
            {
              "key": "Environment",
              "value": "Production"
            }
          ]
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Designer": {
          "id": "70ca76ff-9a50-4ff6-b868-1f311372a791"
        }
      },
      "DependsOn": [
        "balancer01",
        "listener01"
      ]
    },
    "routingRule01": {
      "Type": "Custom::mlb-routingRule",
      "Properties": {
        "ServiceToken": {
          "Ref": "ServiceToken"
        },
        "accessToken": {
          "Ref": "accessToken"
        },
        "accountId": {
          "Ref": "accountId"
        },
        "requestType": "create",
        "resourceType": "Custom::mlb-routingRule",
        "routingRule": {
          "balancerId": {
            "Ref": "balancer01"
          },
          "route": "PathRegexp(`/`)",
          "targetSetIds": [
            {
              "Ref": "targetSet01"
            }
          ],
          "listenerId": {
            "Ref": "listener01"
          },
          "priority": 2,
          "tags": [
            {
              "key": "Creator",
              "value": "Value"
            }
          ]
        }
      },
      "Metadata": {
        "AWS::CloudFormation::Designer": {
          "id": "aee4b053-31e9-4652-ae12-c770a55789fb"
        }
      },
      "DependsOn": [
        "balancer01",
        "listener01",
        "targetSet01"
      ]
    }
  }
}
```
