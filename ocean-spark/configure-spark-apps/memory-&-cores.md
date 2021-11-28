# Memory and Cores

This page describes how to configure your Spark pod sizes and select the instances on which they run.

## Concepts

Your Ocean Spark cluster uses a variety of instances, using a mix of instance families (for example on AWS: m5, r5, i3, …), sizes (for example, on AWS: x.large, 2x.large, …) and availability (spot, on-demand).

These instances (called Nodes in Kubernetes terminology) are dynamically added to the cluster as they are requested by your Spark applications, and are automatically terminated when they are unused so they do not incur any costs. This is all managed by Ocean through the concept of [Virtual Node Groups](ocean/features/launch-specifications).

A Spark application is made of exactly one Spark driver pod and a varying number of Spark executor pods (0 to thousands of them). You can configure your Spark driver independently of your Spark executors. For example, you can request a small container size for the Spark driver, and large container sizes for the Spark executors, or vice-versa. All Spark executors have the same size.

## Configuring the number of cores

To control the size of your pods, the main API field is `cores`, which corresponds to the number of CPU cores allocated to the Spark driver or Spark executor. This field also corresponds to the number of Spark tasks which can be executed in parallel on a Spark executor.

For example, the following configuration requests two cores for the Spark driver and four cores for each Spark executor.

```json
{
  "driver": {
    "cores": 2,
  },
  "executor": {
    "cores": 4,
  },
}
```

Note that the `cores` field is optional. It defaults to 1 for the driver and to 4 for executors. This is a reasonable default as usually the Spark driver does not do much work and so it is more cost-effective to keep the Spark driver small. If you plan to run heavy operations on the Spark driver, such as running pure Python or Scala code, or collecting large results on it, you should increase the number of cores allocated to it.

## Configuring the type of instances

The `instanceTypes` field lets you control which type of instances the containers will be placed on. It accepts an array of specific instance types or instance families.

For example, the configuration below requests that the Spark driver be placed on an m5.large instance (without any other choice), while the Spark executors can be placed on any instance types of the r5 or i3 families.

```json
{
  "driver": {
    "cores": 2,
    "instanceTypes": ["m5.large"]
  },
  "executor": {
    "cores": 4,
    "instanceTypes": ["r5", "i3"]
  }
}
```

This field gives you enough control so that you can pick an exact instance type if you have a specific need. In most cases, we recommend you to target an entire instance family. This gives Ocean more flexibility to pick an optimal instance type based on the current instances currently available in your cluster and the current Spot market dynamics.

## Configuring the memory

You do not need to explicitly request an amount of memory, as Ocean Spark will automatically determine the optimal amount of memory based on the `cores` and `instanceTypes` fields to maximize bin-packing.

For example, if you request:

```json
{
  "executor": {
    "cores": 4,
    "instanceTypes": ["r5"]
  }
}
```

Ocean Spark will determine how much memory to request so that each Spark executor exactly utilizes the memory available on an r5.xlarge instance (which has four available cores), or  half of an r5.2xlarge instance (which has eight available cores).

If you want to allocate a lot of memory to your Spark driver, you could set the following configuration:

```json
{
  "driver": {
    "cores": 4,
    "instanceTypes": ["r5.xlarge"]
  }
}
```

This will guarantee that the Spark driver fits tightly into an r5.xlarge instance. Note that the configured amount of memory will be smaller than the value advertised by the cloud provider due to the following reasons:
There is little memory overhead reserved for the instance operating system and Kubernetes internal operations.
Our UI and API shows you the maximum heap memory given to the Java Virtual Machine, while the actual container memory limit is set to a higher number (see next section on container memory overhead).

Should you want to control precisely yourself the amount of memory (heap-size) to allocate to the Spark driver or executors, you can control it as follows:

```json
{
  "driver": {
    "cores": 4,
    "memory": "8.5g"
  }
}
```

Be careful when entering memory settings manually, as it is easy to make mistakes. You can use the Ocean UI to view your nodes and pods and verify your understanding. In general, we recommend that you only select your pod sizes by using the `cores` and `instanceTypes` fields.

For advanced Kubernetes users, the memory field is not the Kubernetes memory request of the driver pod. As explained above, it is the maximum heap memory given to the JVM. Spark derives a Kubernetes memory request from this input — more details on this calculation below.

If you'd like to investigate some of these configurations further, the official Apache Spark documentation page on [Running Spark on Kubernetes](https://spark.apache.org/docs/latest/running-on-kubernetes.html) contains useful information.

## Container Memory Overhead

If your Spark Driver or Executors are abruptly terminated with a Docker exit code 137, it means that the memory used by the processes running inside your containers have exceeded the memory limit controlled by Kubernetes. This is known as an OOM-Kill (OutOfMemory-kill).

<img src="/ocean-spark/_media/configure-spark-apps-memory-&-cores-01.png" width="612" height="233" />

A common situation when this can occur is when you use PySpark because some of your code will be executed by Python processes (1 per core) running inside your container (alongside the main Spark executor JVM process).

This also occurs when using Scala or Java because the JVM uses some amount of memory outsides of its heap in [certain situations](https://plumbr.io/blog/memory-leaks/why-does-my-java-process-consume-more-memory-than-xmx).

To remediate this issue, you should increase the memoryOverheadFactor configuration, for example, by using the setting below.

```json
{
 "memoryOverheadFactor": "0.5",
}
```

 ## What's Next?

 Learn more about [common Spark configurations](ocean-spark/configure-spark-apps/common-spark-configs).
