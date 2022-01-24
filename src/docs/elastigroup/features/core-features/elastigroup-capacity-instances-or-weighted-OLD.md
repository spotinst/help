<meta name="robots" content="noindex">

# Elastigroup Capacity: Instances or Weighted

Each Elastigroup has a dedicated setting to control the group Capacity. The Capacity of the group provides the option to control the minimal, maximal and the target numerical value representing the number of instances in the group. The amount can be a direct number of instances or a weighted representation of vCPUs.

When you launch an Elastigroup, you can define the capacity units that each instance type would contribute to your application's performance and availability. By using Instance Weighting you can now define more flexible scaling rules and to maximize overall cost efficiency while putting zero DevOps efforts.

Normally, when an application scales, it typically does that in instance units, meaning, one or more Instances at a time. In most of the cases – it is the same instance type or size, for example, my application scales from 5 instances of c3.2xlarge to 15 instances of c3.2xlarge at peak hours.

When you use the Elastigroup weighting feature, you can define a target vCPU capacity for your application and specify a vCPU count.

## How to enable Weighted Configuration

1. Create a new Elastigroup
2. Move to the `General` configuration Tab
3. Expand the `ADVANCED` option menu
4. Change the Capacity Unit to vCPU

<img src="/elastigroup/_media/corefeatures-capacity-01.png" />

Elastigroup calculates the number of instances to launch by dividing the target capacity by the instance weight. In case that the result isn't an integer, Elastigroup rounds it up to the next integer, so that the size of your cluster is not below its target capacity. But, first and foremost, Elastigroup will pick up the best server size or family according to their overall availability, pricing, and durability.

You can now run, scale and manage heterogeneous clusters with ease.

> **Tip**: Using weighted `vCPU` capacity units is not supported for Autoscaler enabled Elastigroups (e.g., Kubernetes, ECS, Nomad).

## Advanced Custom Weights

To allow this option, the Group Capacity should be set using the vCPU unit.

If you want instances to be weighted based on custom units – you can add the weights parameter to the Elastigroup configuration JSON. This will allow you to gain higher accuracy in selecting the instances that will operate the workload. This can be based on ECU or available Memory.

> **Tip**: If a running instance is not configured with a custom weight, its weight will be determined by the number of its vCPUs.

Elastigroup configuration Example:

```json
{
  "group": {
    "compute": {
      "instanceTypes": {
        "weights": [
          {
            "instanceType": "m4.xlarge",
            "weightedCapacity": 16
          },
          {
            "instanceType": "m4.2xlarge",
            "weightedCapacity": 32
          },
          {
            "instanceType": "m4.4xlarge",
            "weightedCapacity": 64
          },
          {
            "instanceType": "m4.10xlarge",
            "weightedCapacity": 160
          },
          {
            "instanceType": "m3.xlarge",
            "weightedCapacity": 15
          },
          {
            "instanceType": "m3.2xlarge",
            "weightedCapacity": 30
          },
          {
            "instanceType": "c4.2xlarge",
            "weightedCapacity": 15
          },
          {
            "instanceType": "c4.4xlarge",
            "weightedCapacity": 30
          }
        ]
      }
    }
  }
}
```
