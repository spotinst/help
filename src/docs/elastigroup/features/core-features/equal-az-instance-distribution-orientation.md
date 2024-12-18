# Equal Area Zone Instance Distribution Orientation

Elastigroups support a high-availability deployment structure, allowing you to evenly distribute instances across multiple area zones in a single region. This Elastigroup orientation guarantees equal capacity across all selected area zones (AZ).

Using this option ensures capacity availability even when no spot instances are accessible. In the absence of available spot instances, Elastigroup launches on-demand instances instead.

> **Note**: The target capacity of the group applies to the entire group. For example, if you want to use X area zones, select a target capacity that is a multiple of X.

## How it Works

1. When creating an Elastigroup or scaling up: Before spinning new instances, Elastigroup checks the current spread of instances. Elastigroup will distribute the instances evenly across the selected availability zones based on the specified area zones in the group.

2. When scaling down: According to the current spread of instances across the area zones we will detach instances in a way that they remain equally divided.

> **Note**: When using this strategy, the `Spot Instance Percentage` or `On-Demand Count` settings will apply per area zone and not for the whole group. For example, a group with 2 area zones and a `Spot Instance Percentage` of 50%- when launching its first 2 instances, they will both be spots, 1 in each area zone.

## Enabling Equal Area Zone Orientation

This option is available via the API or the UI's `Edit Configuration` option in the Spot console.

### Use the Spot Console

While creating a new Elastigroup or editing an existing Elastigorup configuration:

1. Set up your group.
2. Make sure that you select a target capacity that will match (or is a multiple of) the amount of area zones.
3. In the **Review** tab, turn on `Edit Mode` and edit the JSON.
4. Set the value of `availabilityVsCost` to:`equalAzDistribution`

![image](https://github.com/user-attachments/assets/286a1217-559f-4dbd-96c0-dfd84f585a23)

### Use the API

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
