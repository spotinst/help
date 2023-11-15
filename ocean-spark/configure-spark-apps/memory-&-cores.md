# Configure Pod Sizes

This page describes how to configure your Spark pod sizes and select the instances they run on.

## Concepts

Your Ocean Spark cluster uses a variety of instances, such as a combination of instance families (for example on AWS: m5, r5, i3, …), sizes (for example, on AWS: x.large, 2x.large, …) and availability (spot, on-demand).

These instances (called nodes in Kubernetes terminology) are dynamically added to the cluster as they are requested by your Spark applications, and are automatically terminated when they are unused so they do not incur any costs. This is all managed by Ocean through the concept of [Virtual Node Groups](ocean/features/launch-specifications) (VNGs).

A Spark application consists of exactly one Spark driver pod and a varying number (0 to thousands) of Spark executor pods. You can configure your Spark driver independently of your Spark executors. For example, you can request a small container size for the Spark driver, and large container sizes for the Spark executors, or vice-versa. All Spark executors have the same configuration.

## Run on Spot or On-demand Nodes

Your Ocean Spark cluster should have at least two VNGs dedicated to Spark applications: one configured to use only on-demand nodes, one configured to use only spot nodes.

For each application, you can control whether to use spot or on-demand nodes. For example, the following configuration requests that the Spark driver be placed on the on-demand VNG, while the executors will be placed on the Spot VNGs. Note that this is also the default API behavior if you omit these fields.

```json
{ "driver": { "spot": "false" }, "executor": { "spot": "true" } }
```

You can switch the flags to change the behavior. Note that running the Spark driver on spot nodes is risky. If the spot node is terminated, your Spark application will fail.

## Configure the Number of Cores

To control the size of your pods, the main API field is cores, which corresponds to the number of CPU cores allocated to the Spark driver or Spark executor. This field also corresponds to the number of Spark tasks which can be executed in parallel on a Spark executor.
For example, the following configuration requests two cores for the Spark driver and four cores for each Spark executor.

```json
{ "driver": { "cores": 2 }, "executor": { "cores": 4 } }
```

Note that the cores field is optional. If omitted, the Spark driver will have 1 core by default. This is a reasonable default as usually the Spark driver does not do much work and so it is more cost-effective to keep the Spark driver small. If you plan to run heavy operations on the Spark driver, such as running pure Python or Scala code, or collecting large results on it, you should increase the number of cores allocated to it.

For executors, the default number of cores is four. There is no need to change this, unless you have a specific requirement. Instead, you can set the `instances` field to control how many executors to use. Read [How to Control the number of executors](ocean-spark/configure-spark-apps/common-spark-configs?id=control-the-number-of-executors) to learn more about this.

## Configure the Type of Instances

The instanceAllowList field lets you control which type of instances the pods will be placed on. It accepts a list of instance family names or specific instance types.

For example, the configuration below requests:

- That the Spark driver be placed on an r5.large instance (which it would fill entirely, given this instance type has 2 available CPU cores) or an r5.xlarge instance (which it would fill at 50% capacity, leaving room for another pod running on the same node).
- That the 20 requested Spark executors be placed on any of nine families of instances (m5, m5a, ...). For example you could have 20 executors each using an m5.xlarge instance, or you could have 10 executors using m5.xlarge instances, and 10 executors running on 5 m5.2xlarge instances.

```json
{
  "driver": {
    "cores": 2,
    "instanceAllowList": ["r5.large", "r5.xlarge"]
  },
  "executor": {
    "cores": 4,
    "instances": 20,
    "instanceAllowList": [
      "m5",
      "m5a",
      "m5ad",
      "m5d",
      "m5dn",
      "m5n",
      "m5zn",
      "m6a",
      "m6i"
    ]
  }
}
```

Ocean Spark will optimize the choice of nodes (instances) to lower your cloud costs (efficient bin-packing, reusing existing capacity when available, using spot instances as much as possible) and optimize the stability of spot nodes (picking spot instances with a low risk of spot-interruption).

If you have a specific need, you can pick a specific instance type or family, but in general we recommend that you to let Ocean pick which nodes to use across a large list of families. This gives Ocean flexibility to pick an optimal instance type based on the instances available in your cluster and the current Spot market dynamics.

If you omit the instanceAllowList field, your Spark executor pods will be able to run on any instance type, preferably filling up nodes which have available capacity, before adding new nodes to the cluster. This gives Ocean Spark a lot of flexibility to pick Spot nodes at the lowest cost.

## Configure the Memory

You do not need to explicitly request an amount of memory, as Ocean Spark will automatically determine the optimal amount of memory based on the cores and instanceAllowList fields to optimize bin packing.

For example, if you request:

```json
{ "executor": { "cores": 4, "instanceAllowList": ["m5"] } }
```

Ocean Spark will determine how much memory to request so that each Spark executor exactly utilizes the memory available on an m5.xlarge instance (which has 4 available cores), or half of an m5.2xlarge instance (which has eight available cores).

If you allow instance families with different memory/core ratios, Ocean spark will determine the memory amount corresponding to the highest memory/core ratio.

The example below shows an instanceAllowList allowing a wide range of high-memory families for the Spark driver, and an instanceAllowList allowing a wide range of regular-sized families for the executors.

```json
{
  "driver": {
    "instanceAllowList": [
      "r5",
      "r5a",
      "r5ad",
      "r5b",
      "r5d",
      "r5dn",
      "r5n",
      "r6i",
      "i3"
    ]
  },
  "executor": {
    "instanceAllowList": [
      "m5",
      "m5a",
      "m5ad",
      "m5d",
      "m5dn",
      "m5n",
      "m5zn",
      "m6a",
      "m6i"
    ]
  }
}
```

The configured amount of memory will be smaller than the value advertised by the cloud provider due to the following reasons:

- Some memory is reserved for the instance operating system and Kubernetes internal operations.
- The memory field in our UI and API shows you the maximum heap size of the Spark Java Virtual Machine. This is not the same thing as the pod memory request. Read the next section on [Container Memory Overhead](ocean-spark/configure-spark-apps/memory-&-cores?id=container-memory-overhead)) for details about this.

Should you want to control precisely yourself the amount of memory (heap-size) to allocate to the Spark driver or executors, you can configure it as follows:

```json
{ "driver": { "cores": 4, "memory": "8.5g" } }
```

Be careful when entering memory settings manually, as it is easy to make mistakes. You can use the Ocean UI to view your nodes and pods and verify your understanding. In general, we recommend that you only select your pod sizes by using the cores and instanceAllowList fields.

If you would like to investigate some of these configurations further, the official Apache Spark documentation page on [Running Spark on Kubernetes](https://spark.apache.org/docs/latest/running-on-kubernetes.html) contains useful information.

### Memory Auto-tuning Strategies

In addition to hard-coded memory string, two strategies are available to
dynamically adjust the executor memory. These strategies analyze the previous
apps' performance to adjust the memory automatically.

The oomRecovery strategy works like the default autotuning mechanism but it
automatically bumps the memory request up (doubling it by default) if the
previous app with the same job name failed with OOM (Out Of Memory) errors.

```json
{ "executor": { "strategy": "oomRecovery" } }
```

The autotuning strategy expands on the oomRecovery strategy by additionally
adjusting memory request down to match the observed memory usage of previous
apps. The autotuning strategy is only available for Spark 3 apps as it relies on
spark metrics to monitor the memory usage of your apps.

```json
{ "executor": { "strategy": "autotuning" } }
```

You can find more details on how to configure these strategies in the [Ocean Spark API reference ](https://docs.spot.io/api/#operation/OceanSparkClusterApplicationSubmit).

## Container Memory Overhead

If your Spark Driver or Executors are abruptly terminated with a Docker exit code 137, the memory used by the processes running inside your containers have exceeded the memory limit controlled by Kubernetes. This is known as an OOM-Kill (OutOfMemory-kill).

<img src="/ocean-spark/_media/configure-spark-apps-memory-&-cores-01.png" width="612" height="233" />

This can typically occur when you use PySpark because some of your code will be executed by Python processes (one per core) running inside your container (alongside the main Spark executor JVM process).

This also occurs when using Scala or Java because the JVM uses some amount of memory outsides of its heap in [certain situations](https://plumbr.io/blog/memory-leaks/why-does-my-java-process-consume-more-memory-than-xmx).

To remediate this issue, you should increase the memoryOverheadFactor configuration, for example, by using the setting below.

```json
{ "memoryOverheadFactor": "0.5" }
```

## What's Next?

Learn more about [common Spark configurations](ocean-spark/configure-spark-apps/common-spark-configs).
