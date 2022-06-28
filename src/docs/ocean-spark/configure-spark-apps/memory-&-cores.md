# Configure Pod Sizes

This page describes how to configure your Spark pod sizes and select the instances on which they run.

## Concepts

Your Ocean Spark cluster uses a variety of instances, such as a mix of instance families (for example on AWS: m5, r5, i3, …), sizes (for example, on AWS: x.large, 2x.large, …) and availability (spot, on-demand).

These instances (called nodes in Kubernetes terminology) are dynamically added to the cluster as they are requested by your Spark applications, and are automatically terminated when they are unused so they do not incur any costs. This is all managed by Ocean through the concept of [Virtual Node Groups](ocean/features/launch-specifications) (VNGs).

A Spark application consists of exactly one Spark driver pod and a varying number (0 to thousands) of Spark executor pods. You can configure your Spark driver independently of your Spark executors. For example, you can request a small container size for the Spark driver, and large container sizes for the Spark executors, or vice-versa. All Spark executors have the same configuration.

## Running on spot or on-demand nodes

Your Ocean Spark cluster should have at least two VNGs dedicated to Spark applications: one configured to use only on-demand nodes, one configured to use only spot nodes.

For each application, you can control whether to use spot or on-demand nodes. For example, the following configuration requests that the Spark driver be placed on the on-demand VNG, while the executors will be placed on the Spot VNGs. Note that this is also the default API behavior if you omit these fields.

```json
{ "driver": { "spot": "false" }, "executor": { "spot": "true" } }
```

You can switch the flags to change the behavior. Note that running the Spark driver on spot nodes is risky. If the spot node is terminated, your Spark application will fail.

## Configuring the number of cores

To control the size of your pods, the main API field is cores, which corresponds to the number of CPU cores allocated to the Spark driver or Spark executor. This field also corresponds to the number of Spark tasks which can be executed in parallel on a Spark executor.
For example, the following configuration requests two cores for the Spark driver and four cores for each Spark executor.

```json
{ "driver": { "cores": 2 }, "executor": { "cores": 4 } }
```

Note that the cores field is optional. If omitted, the Spark driver will have 1 core by default. This is a reasonable default as usually the Spark driver does not do much work and so it is more cost-effective to keep the Spark driver small. If you plan to run heavy operations on the Spark driver, such as running pure Python or Scala code, or collecting large results on it, you should increase the number of cores allocated to it.

The default number of cores per executor is four. This is also a reasonable default, and we don’t recommend changing it unless you have a specific need. We recommend setting the instances field to control how many Spark executors you’d like to use. Read [How to Control the number of executors](ocean-spark/configure-spark-apps/common-spark-configs?id=control-the-number-of-executors) to learn more about this.

## Configuring the type of instances

The instanceAllowList field lets you control which type of instances the pods will be placed on. It accepts a list of instance family names or specific instance types.

For example, the configuration below requests that the Spark driver be placed on an r5.large or an r5.xlarge instance, while the Spark executors can be placed on any instance types of the r5d family (r5d.xlarge, r5d.2xlarge, r5d.4xlarge, etc).

```json
{
  "driver":{
    "cores":2,
    "instanceAllowList":["r5.large", "r5d.xlarge"]
  },
  "executor":{
    "cores":4,
    "instanceAllowList":["r5d"]
  }
}
```

So if you have a specific need, you can pick a specific instance type. In most cases, we recommend you to target an entire instance family. This gives Ocean the flexibility to pick an optimal instance type based on the instances available in your cluster and the current Spot market dynamics.

If you omit the instanceAllowList field, your Spark executor pods will be able to run on any instance type, preferably filling up nodes which have available capacity, before adding new nodes to the cluster. This gives Ocean Spark a lot of flexibility to pick Spot nodes at the lowest cost. However, Spark applications can perform differently depending on the instance family on which they run (e.g. due to network and disk performance). For this reason, we recommend targeting a specific instance family using the instanceAllowList field to ensure the deterministic and reliable performance of your production workloads.

## Configuring the memory

You do not need to explicitly request an amount of memory, as Ocean Spark will automatically determine the optimal amount of memory based on the cores and instanceAllowList fields to maximize bin packing.

For example, if you request:

```json
{ "executor": { "cores": 4, "instanceAllowList": ["m5"] } }
```

Ocean Spark will determine how much memory to request so that each Spark executor exactly utilizes the memory available on an m5.xlarge instance (which has four available cores), or half of an m5.2xlarge instance (which has eight available cores). If you select multiple instance families with different memory/core ratios, Ocean spark will fit the pods to the smallest memory/core ratio to maximize bin packing.

If you want to allocate a lot of memory to your Spark driver, you could set the following configuration:

```json
{ "driver": { "cores": 4, "instanceAllowList": ["r5.xlarge"] } }
```

This will guarantee that the Spark driver fits tightly into an r5.xlarge instance. Note that the configured amount of memory will be smaller than the value advertised by the cloud provider due to the following reasons: There is little memory overhead reserved for the instance operating system and Kubernetes internal operations. Our UI and API shows you the maximum heap memory given to the Java Virtual Machine, while the actual container memory limit is set to a higher number (see next section on container memory overhead).

Should you want to control precisely yourself the amount of memory (heap-size) to allocate to the Spark driver or executors, you can control it as follows:

```json
{ "driver": { "cores": 4, "memory": "8.5g" } }
```

Be careful when entering memory settings manually, as it is easy to make mistakes. You can use the Ocean UI to view your nodes and pods and verify your understanding. In general, we recommend that you only select your pod sizes by using the cores and instanceAllowList fields.
For advanced Kubernetes users, the memory field is not the Kubernetes memory request of the driver pod. As explained above, it is the maximum heap memory given to the JVM. Spark derives a Kubernetes memory request from this input — more details on this calculation below.

If you would like to investigate some of these configurations further, the official Apache Spark documentation page on [Running Spark on Kubernetes](https://spark.apache.org/docs/latest/running-on-kubernetes.html) contains useful information.

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
