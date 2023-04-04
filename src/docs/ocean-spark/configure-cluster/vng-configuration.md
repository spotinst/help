# VNG configuration

This section shows you how to configure Virtual Node Groups (VNGs) for Ocean for Apache Spark.

- [Automatically created VNGs](ocean-spark/configure-cluster/vng-configuration?id=automatically-created-vngs)
- [Creating ARM VNGs](ocean-spark/configure-cluster/vng-configuration?id=creating-arm-vngs)

## Automatically created VNGs

By default, Ocean for Apache Spark will create three Virtual Node Groups (VNGs) on your Ocean cluster when the Ocean Spark cluster is created:

- ocean-spark-on-demand
- ocean-spark-spot
- ocean-spark-system

If you prefer to create these VNGs through other means, like terraform, you can turn this off.

By default, the automatically created VNGs use taints to prevent non-Spark workloads from running on them. If you desire, you can turn this off as well.

**Example cluster configuration:**

```json
{
  "cluster": {
    "config": {
      "compute": {
        "createVngs": true/false,
        "useTaints": true/false
      }
    }
  }
}
```

Note that these configuration options only have an effect in the initial cluster creation call.

## Creating ARM VNGs

To run ARM workloads on Ocean for Apache Spark, you first need to create VNGs to manage your ARM instances. As with AMD you need to create two VNGs, one for on-demand instances and one for spot instances. Finally, you should dedicate those VNGs to Ocean for Apache Spark.

### ARM VNG setup

This section shows you how to set up ARM VNGs on the different cloud providers.

#### AWS

When creating an ARM VNG you need to select an Amazon Machine Image suitable for ARM. The AMI ID depends on your region so refer to [this list](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html) to select the right image.

<img src="/ocean-spark/_media/configure-cluster-01.png" />

#### GCP

On GCP first create a GKE node pool in which you select the T2A machine type. Then, create a new VNG by importing that node pool into your cluster.

<img src="/ocean-spark/_media/configure-cluster-02.png" />

### App configuration

Once ARM based VNGs have been created on your cluster, **it is important to note that all your apps, including existing ones, should now explicitly target a specific machine type, even AMD-based apps**. Otherwise, your AMD apps may end up running on ARM instances and vice versa. This must be done for both driver and executor in the app configuration. Use the `vngIds` field to target your ARM or AMD VNGs accordingly.

```json
"driver": {
  "coreRequest": "500m",
  "memory": "1000m",
  "spot": false,
  "vngIds": ["ols-848f2cb3"]
},
"executor": {
  "cores": 2,
  "coreRequest": "500m",
  "memory": "1000m",
  "vngIds": ["ols-c1a8ef9c"]
}
```

Alternatively, you can limit the choice of instance type by using the `instanceAllowList` field:

```json
"driver": {
  "coreRequest": "500m",
  "memory": "1000m",
  "spot": false,
  "instanceAllowList": ["c6gn", "c6g", "m6g", "r6g"]
},
"executor": {
  "cores": 2,
  "coreRequest": "500m",
  "memory": "1000m",
  "instanceAllowList": ["c6gn", "c6g", "m6g", "r6g"]
}
```

When setting a value for the image field, make sure to use ARM64 compatible images. Starting with [gen19](ocean-spark/docker-images-release-notes/gen19) the spark images that Ocean for Apache Spark provide are multiarch and compatible with ARM64. These images are used by default if you don’t provide a value for the image field.
