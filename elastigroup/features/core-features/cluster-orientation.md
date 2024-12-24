# Group Orientation

Elastigroup is designed to take advantage of costs savings without compromising availability.

You can choose to have Elastigroup take a more aggressive cost-savings approach by proactively replacing instances whenever a less expensive option becomes available, or conversely replace instances only when the cloud provider interrupts services.

## Elastigroup Orientations

Elastigroup supports the following Orientations:

- Balanced
- Availability
- Cost

### Balanced (Default)

Optimize for both continuity and cost-effective infrastructure. Spot highly recommends using this orientation, which provides the optimal balance between cost-savings and availability.

> **Note**: Spot highly recommends the Balanced Cluster Orientation.

### Availability

Optimize towards the continuity of your instances. While using the high availability orientation an Elastigroup will abstain from replacing spot instances due to interruptions or cost optimization for as long as possible.

Additionally, in the case of fall back to On-Demand instances – the Elastigroup will keep these instances running and will not revert back to spot instances automatically (as it does with balanced and cost orientations).

The Availability orientation is primarily suitable for `jobs` or `batch` computing with a high importance of running a single machine for a limited amount of time, as well as NoSQL databases such as Cassandra or MongoDB, when they are part of a fault tolerant architecture.

> **Note**: No instance replacement will take place – neither while replacing On-demand instances nor replacement of expensive spot Instances.

### Cost

Optimize towards the most cost-effective infrastructure.

In addition to basic cost optimization of moving workloads from on-demand to spot, Elastigroup will take an aggressive approach to cost-savings by replacing spot instances with less expensive instances whenever a less expensive market becomes available, even when no interruption is anticipated.

# Equal Area Zone Instance Distribution Orientation

Elastigroups support a high-availability deployment structure, allowing you to evenly distribute instances across multiple area zones in a single region. This Elastigroup orientation guarantees equal capacity across all selected area zones (AZ).

Using this option ensures capacity availability even when no spot instances are accessible. In the absence of available spot instances, Elastigroup launches on-demand instances instead.

> **Note**: The target capacity of the group applies to the entire group. For example, if you want to use X area zones, select a target capacity that is a multiple of X.

## How it Works

* When creating an Elastigroup or scaling up: Before spinning new instances, Elastigroup checks the current spread of instances. Elastigroup will distribute the instances evenly across the selected availability zones based on the specified area zones in the group.

* When scaling down: Based on the current spread of instances across the area zones, Spot detaches instances so that they remain equally divided.

> **Note**: When using this strategy, the `Spot Instance Percentage` or `On-Demand Count` settings will apply per area zone and not for the whole group. For example, a group with 2 area zones and a `Spot Instance Percentage` of 50%- when launching its first 2 instances, they will both be spots, 1 in each area zone.

## Enable Equal Area Zone Orientation

You can enable the equal area zone orientation by using the API or the `Edit Configuration` option in the Spot console.

### Use the Spot Console

While creating a new Elastigroup or editing an existing Elastigorup configuration:

1. Set up your group.
2. Make sure that you select a target capacity that will match (or is a multiple of) the amount of area zones.
3. In the **Review** tab, turn on `Edit Mode` and edit the JSON.
4. Set the value of `availabilityVsCost` to:`equalAzDistribution`

![image](https://github.com/user-attachments/assets/286a1217-559f-4dbd-96c0-dfd84f585a23)

### Use the API

* Create an Elastigorup- Use the `equalAzDistribution` in the availabilityVsCost field in the Elastigroup JSON

* Update an Elastigroup- Update the strategy of the Elastigroup. An example JSON:

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

> **Note**: Equal AZ Distribution is not supported in conjunction with Reserved Instances Utilization or with Elastigroups that utilize Autoscalers (e.g., Kubernetes, ECS, and Nomad).
