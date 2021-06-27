# Configure Nomad Autoscaler

This procedure provides the steps necessary to set up your Nomad Autoscaler.

## Configure the Nomad Integration

In the Spot Console, set the fields in the Integration portion under the `Compute` tab of the Elastigroup creation wizard:

<img src="/elastigroup/_media/configure-nomad-autoscaler-01.png" />

Provide the Nomad server address (IP) and port and test the connection to the server with a valid Nomad API call.

When Nomad AutoScaler is enabled, weighted scaling is disabled.

You can add the following arguments to the Elastigroup configuration with an API call to update the Elastigroup Update API while using the following body (make sure to adjust the IP and Host):

```json
{
  "group": {
    "thirdPartiesIntegration": {
      "nomad": {
        "masterHost": "12.123.123.123",
        "masterPort": 1234,
        "autoScale": {
          "isEnabled": true,
          "cooldown": 300,
          "headroom": {
            "cpuPerUnit": 1000,
            "memoryPerUnit": 2000,
            "numOfUnits": 1
          },
          "down": {
            "evaluationPeriods": 5
          },
          "constraints": [
            {
              "key": "${meta.myKey}",
              "value": "myValue"
            },
            {
              "key": "${attr.kernel.name}",
              "value": "linux"
            }
          ]
        }
      }
    }
  }
}
```

You can also use the Review Tab in the Elastigroup configuration and edit the JSON:

<img src="/elastigroup/_media/configure-nomad-autoscaler-02.png" />

And add the following to the Elastigroup JSON:

```JSON
{
  "group": {
    "thirdPartiesIntegration": {
      "nomad": {
        "masterHost": "12.123.123.123",
        "masterPort": 1234,
        "autoScale": {
          "isEnabled": true,
          "cooldown": 300,
         "headroom": {
            "cpuPerUnit": 1000,
            "memoryPerUnit": 2000,
            "numOfUnits": 1
          },
          "down": {
            "evaluationPeriods": 5
          },
          "constraints": [
           {
             "key":"${meta.myKey}",
             "value": "myValue"
           },
           {
             "key":"${attr.kernel.name}",
             "value": "linux"
           }
          ]
        }
      }
    }
  }
}
```

## Advanced: Constraints

The Nomad Autoscaler now supports job-level constraints. In your job configuration, you can define multiple constraints, that will determine the nodes that are applicable to run this job.

In order to support job constraints in your Nomad Autoscaler, you should create an Elastigroup for each combination of constraints, and integrate it with your primary host as shown below. Under your Nomad Autoscaler integration, you can add multiple constraints in a key-value definition (Up to 30 constraints). The key format must be identical to the constraint definition in your job configuration.

For example, let's say that you want to run your jobs only on nodes that are marked as owned by Spot. In your job configuration in Nomad, it will look like this:

```JSON
job "myJob" {
    .
    .
    .
    constraint {
        attribute = "${meta.owner}"
        value     = "Spot"
    }
}
```

Then, in your Elastigroup Nomad integration, you should have the following:

<img src="/elastigroup/_media/configure-nomad-autoscaler-03.png" />

You will have to add appropriate meta-data configuration in your client.hcl so the launched instances will support the required constraints. It should look like this:

```hcl
# Setup data dir
data_dir = "/tmp/client1"

# Enable the client
client {
    enabled = true
    servers = ["<NomadServerElasticIP>"]
    meta {
    "owner" = "Spot"
  }
}
```

If you require constraints support in your Nomad Autoscaler, make sure you create an Elastigroup for each of your constraints combinations, because each group will be responsible for auto-scaling the nodes relevant for this constraints combination only. If you'll have jobs without constraints, make sure to create an Elastigroup without constraints which will be responsible for auto-scaling these jobs only.
