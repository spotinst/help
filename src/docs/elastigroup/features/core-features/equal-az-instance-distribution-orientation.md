# Equal AZ Instance Distribution Orientation

Elastigroups support a high-availability deployment structure to allow you to evenly distribute instances across multiple AZs in a single region. This Elastigroup orientation will guarantee equal capacity across all selected AZs.

Using this option will guarantee capacity even if there are no spot instances available. While no Spot instances are available the Elastigroup will launch on-demand instances instead.

> **Tip**: The target capacity of the group will apply for the entire group. For example, if you want to use X AZs, select a target capacity that is a multiple of X.

## How this works

1. Upon Elastigroup creation or Scale up – Before spinning new instances we will check the current spread of instances, according to the current chosen AZs in the group we will spin up the instances in an equally divided manner across the selected AZs.

2. On Scale down – According to the current spread of instances across the AZs we will detach instances in a way that they remain equally divided.

> **Tip**: When using this strategy, the `Spot Instance Percentage` or `On-Demand Count` settings will apply per AZ and not for the whole group. So for example, a group with 2 AZs and a `Spot Instance Percentage` of 50%, when launching its first 2 instances – they will both be spots, 1 in each AZ.

## Enabling Equal AZ Orientation

This option is available via the API or the `Edit Configuration` option in the UI.

### Using the Spot Console:

While creating a new Elastigroup or Editing an existing Elastigorup configuration:

1. Set up your group
2. Make sure that you select a target capacity that will match (or is a multiple of) the amount of AZs
3. In the Review tab, enable `Edit Mode` and edit the JSON

<img src="/elastigroup/_media/corefeatures-equalaz-01.png" width="600" height="224" />

4. Set the value of `availabilityVsCost` to:`equalAzDistribution`

<img src="/elastigroup/_media/corefeatures-equalaz-02.png" width="600" height="346" />

### Using the API:

While creating an Elastigorup – Use the `equalAzDistribution` in the availabilityVsCost field in the Elastigroup JSON

While updating an Elastigroup – Update the strategy of the Elastigroup. The following is an example JSON:

```json
{
  "group": {
    "strategy": {
      "risk": 100,
      "availabilityVsCost": "equalAzDistribution",
      "drainingTimeout": 60,
      "fallbackToOd": true,
      "persistence": {}
    }
  }
}
```

> **Tip**: Equal AZ Distribution is not supported in conjunction with Reserved Instances Utilization or with Elastigroups that utilize Autoscalers (e.g., Kubernetes, ECS, and Nomad).
