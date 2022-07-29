# Use Virtual Node Groups with Ocean Spark

Ocean for Apache Spark (also referred to as Ocean Spark) is built on top of [Ocean](ocean/), the engine automating cloud infrastructure management for containers. As a result, when Ocean Spark customers run Spark applications, they benefit from all the features of Ocean at no additional cost. For example, your Ocean Spark cluster is also visible from the Ocean user interface, giving you visibility over its nodes, pods, and cloud provider costs in real time.

You can use the same cluster to run both Spark and non-Spark workloads. In this situation:
- The Spark workloads will benefit from the features of Ocean Spark and will be charged a fee according to the Ocean Spark pricing, and nothing else.
- The non-Spark workloads will benefit from the features of Ocean only and will be charged a fee according to the Ocean pricing, and nothing else.

To implement this mechanism and to have a clear distinction between Spark and non-Spark workloads, Ocean for Apache Spark applications run on dedicated [Virtual Node Groups](ocean/features/vngs/) (VNGs). This means the set of nodes on which Spark workloads run is separate from the nodes used by non-Spark workloads.

## Automatically created VNGs

When you create an Ocean Spark cluster, two VNGs called ocean-spark-on-demand and ocean-spark-spot are automatically created. You can see them in the Ocean interface under the Virtual Node Groups tab.

<img src="/ocean-spark/_media/use-vngs-with-ocean-spark-01.png" />

These VNGs are dedicated to Ocean Spark, and they have certain best practice configurations automatically set in them (root volume size and a user data script to mount local SSDs when they are available).

The on-demand VNG is configured to use on-demand nodes, while the spot VNG is configured to use spot nodes. Note that this is a best-effort attempt, but that in some cases on-demand instances can be launched on the spot VNG, as Ocean will fall back to using on-demand instances if it failed to launch spot ones. If this occurs, you can track it in the Log tab.

## Adding, Modifying, and Deleting VNGs

You can add, modify, or delete VNGs as long as these changes maintain the requirement to have two VNGs dedicated to Ocean Spark at all times (one configured to use on-demand nodes, and the other configured to use spot nodes).

Additional VNGs can be created in the console, using Terraform, or using the Spot API. In the console, a checkbox shown in the example below gives you the option to dedicate a VNG to Ocean Spark.

<img src="/ocean-spark/_media/use-vngs-with-ocean-spark-02.png" />

## VNG Applications

VNGs are a powerful abstraction, you can use them to:
- Control the instance profile (IAM role) or service account. This is a convenient way to give your Spark applications access to the data they need.
- Define headroom and reduce your Spark application startup time.
- Control scaling by setting minimum and maximum sizes on a VNG, restricting the list of allowed instance types, or setting the percentage of nodes that can be scaled down in a single operation (we recommend 100% for fast scale down).
- Control networking by configuring the security groups and subnets in use.
- Define custom cloud tags, node labels, and taints.

## What’s Next?

Learn more about these features in the Ocean documentation about [Virtual Node Groups](ocean/features/vngs/).
