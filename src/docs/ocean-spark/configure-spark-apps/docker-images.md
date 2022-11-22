# Docker Images

Ocean Spark maintains a popular fleet of Docker images for Apache Spark.

## What's a Docker image for Spark?

When Spark runs on Kubernetes, the driver and executors are Docker containers that execute a Docker image specifically built to run Spark.

## What’s in these Docker Images?

In addition to a version of Spark itself, the `spark:platform` images include connectors to popular [object stores](ocean-spark/configure-spark-apps/docker-images?id=data-source-connectors): (S3, GCS, ADLS), Snowflake, Delta Lake, Python support with pip and conda, Jupyter notebook support, Hadoop, AWS Glue Catalog, and more.

### Images to start with

|                Full Image name                 | Spark Version | Scala Version | Python Version | Hadoop Version |
| :--------------------------------------------: | :-----------: | :-----------: | :------------: | :------------: |
| gcr.io/ocean-spark/spark:platform-2.4-latest |     2.4.7     |     2.12      |      3.7       |     3.1.0      |
| gcr.io/ocean-spark/spark:platform-3.0-latest |     3.0.3     |     2.12      |      3.8       |     3.2.0      |
| gcr.io/ocean-spark/spark:platform-3.1-latest |     3.1.3     |     2.12      |      3.8       |     3.2.0      |
| gcr.io/ocean-spark/spark:platform-3.2-latest |     3.2.1     |     2.12      |      3.8       |     3.3.1      |

### How to use those images for your apps and jobs?

When submitting Spark apps on Ocean for Apache Spark, you can:

- Omit the image field. In this case, `spark:platform` will be used by default according to the Spark version specified in the `sparkVersion` field. If both image and sparkVersion fields are specified, the Spark version of the image takes precedence.
- Specify the image in your configuration with the image field (using a `configOverrides` directly in your API call, or using a configuration template).

### Need another image?

To match different dependencies and version requirements you can find more images in our [Docker registry](https://gcr.io/ocean-spark/spark:platform).

All these dependencies can have different versions. A combination of dependency versions is called a flavor of spark:platform in this page. The image tag indicates the flavor of the image and can be adjusted to fit your needs.Here are two examples of image tags:

```
gcr.io/ocean-spark/spark:platform-3.2.1-latest
gcr.io/ocean-spark/spark:platform-3.2.1-hadoop-3.3.1-java-8-scala-2.12-python-3.8-latest
```

### Need to build your own Image?

You should use one of the spark:platform images as a base. Once your custom image is in your local docker repository you have to Tag and Push it, see [Set up a Docker registry](ocean-spark/configure-spark-apps/package-spark-code?id=set-up-a-docker-registry-and-push-your-image) and push your image.

## Data source connectors

The image tages `gcr.io/ocean-spark/spark:platform` supports for the following data sources:

- AWS S3 (s3a:// scheme)
- Google Cloud Storage (gs:// scheme)
- Azure Blob Storage (wasbs:// scheme)
- Azure Datalake generation 1 (adl:// scheme)
- Azure Datalake generation 2 (abfss:// scheme)
- [Snowflake](https://docs.snowflake.com/en/user-guide/spark-connector.html)
- [Delta Lake](https://docs.delta.io/latest/index.html)
- [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)

The versions of those connectors depend on the versions of Spark and Hadoop. Here are the versions per spark:platform image:

|                               |        platform-2.4-latest         |        platform-3.0-latest         |        platform-3.1-latest         |        platform-3.2-latest         |
| ----------------------------- | :--------------------------------: | :--------------------------------: | :--------------------------------: | :--------------------------------: |
| S3 (s3a://)                   |    Hadoop 3.1.0 - AWS 1.11.271     |    Hadoop 3.2.0 - AWS 1.11.375     |    Hadoop 3.2.0 - AWS 1.11.375     |    Hadoop 3.3.1 - AWS 1.11.901     |
| ADLS gen1 (adl://)            |   Hadoop 3.1.0 - ADLS SDK 2.2.5    |   Hadoop 3.2.0 - ADLS SDK 2.2.9    |   Hadoop 3.2.0 - ADLS SDK 2.2.9    |   Hadoop 3.3.1 - ADLS SDK 2.3.9    |
| Azure Blob Storage (wasbs://) | Hadoop 3.1.0 - Azure Storage 5.4.0 | Hadoop 3.2.0 - Azure Storage 7.0.0 | Hadoop 3.2.0 - Azure Storage 7.0.0 | Hadoop 3.3.1 - Azure Storage 7.0.1 |
| ADLS gen2 (abfss://)          | Hadoop 3.1.0 - Azure Storage 5.4.0 | Hadoop 3.2.0 - Azure Storage 7.0.0 | Hadoop 3.2.0 - Azure Storage 7.0.0 | Hadoop 3.3.1 - Azure Storage 7.0.1 |
| GCS                           |               2.1.5                |               2.1.5                |               2.1.5                |               2.1.5                |
| Delta                         |               0.6.1                |               0.8.0                |               1.0.1                |               1.1.0                |
| Snowflake                     |               2.9.3                |               2.10.0               |               2.10.0               |               2.10.0               |
| Pyarrow                       |               3.0.0                |               3.0.0                |               3.0.0                |               3.0.0                |
| AWS Glue                      |           Not Supported            |     Hadoop 3.2.0 - Hive 2.3.7      |      Hadoop 3.2.0 - Hive 2.3.7     |     Hadoop 3.3.1 - Hive 2.3.9      |

To check these versions, you may also run the image locally and list the JARs in /opt/spark/jars/:

```
$ docker run -ti gcr.io/ocean-spark/spark:platform-3.1-latest ls -1 /opt/spark/jars | grep delta
delta-core_2.12-0.7.0.jar
```

## Python support

The image tag `gcr.io/ocean-spark/spark:platform` supports Pyspark applications. When [building a custom image](ocean-spark/configure-spark-apps/package-spark-code) or working from a notebook, additional Python packages can be installed with pip or conda.

## Image tags and flavors

Spark Docker images for multiple combinations of the versions of the dependencies included with Spark. These combinations are called flavors. Here's the matrix of versions that we provide:

| Component |     Available versions      |
| :-------: | :-------------------------: |
|   Spark   |       2.4.5 to 3.2.1        |
|  Hadoop   | 2.6, 2.7, 3.1, 3.2, and 3.3 |
|   Java    |          8 and 11           |
|   Scala   |        2.11 and 2.12        |
|  Python   |         2.7 to 3.8          |

Note that not all the combinations in the matrix exist. To list all the flavors for a given image, check out our [Docker registry](https://gcr.io/ocean-spark/spark:platform).

There are both long-form tags (like `gcr.io/ocean-spark/spark:platform-3.1.1-java-8-scala-2.12-hadoop-3.2.0-python-3.8-latest`) where all versions are explicitly listed, as well as short-form tags (like `gcr.io/ocean-spark/spark:platform-3.1-latest`).

In most cases, we encourage starting with our short-form tags:

- `gcr.io/ocean-spark/spark:platform-3.1.3-latest` contains a Spark 3.1.3 distribution and all other dependencies are set to the latest compatible version. For example, platform-3.1.3-latest contains Hadoop 3.2.0, Python 3.8, Scala 2.12, and Java 11. We reserve the right to upgrade the version of a dependency if a new, compatible version is released. For example, we may upgrade platform-3.1.3-latest to Hadoop 3.3.0 once it is compatible with Spark 3.1.3.
- `gcr.io/ocean-spark/spark:platform-3.1-latest` contains the latest Spark version of the 3.1 minor.

Please use a long-form only if you need a specific combination. For instance, you may require a specific combination of versions when migrating an existing Scala or Java project to Spark on Kubernetes. On the other hand, new JVM projects and Pyspark projects should work fine with short-form tags.

For production workloads:

- We don't recommend using the `-latest` tags. To keep the image stable you should use images with an explicit version suffix like `-dm18` below. The following images are the same:
  - gcr.io/ocean-spark/spark:platform-3.2-dm18
  - gcr.io/ocean-spark/spark:platform-3.2.1-dm18
  - gcr.io/ocean-spark/spark:platform-3.2.1-hadoop-3.3.1-java-8-scala-2.12-python-3.8-dm18
- Long-form tag images without the suffix version can change to the exclusion of the Spark, Hadoop, Java, Scala and Python versions specified in the image tag.

See the release notes below to learn about the changes introduced by each version.

## Dockerhub repository

These images are also published on a [public Dockerhub repository](https://hub.docker.com/r/ocean-spark/spark). It is not recommended to pull images directly from Dockerhub in production (it’s best to use our [GCR](https://gcr.io/ocean-spark/spark) repository instead) as free users of DockerHub are subject to rate-limiting.

## Docker image release notes

Ocean Spark regularly updates its publicly available Docker images for Spark. This section contains the release notes of those images, indicating what changed in each version.

### Release dm18 (latest)

- Add AWS Glue support for spark 3 images (Spark 2.4 image do not support Glue)

### Release dm17

- Add new images with Spark 3.1.3 and Spark 3.2.1
- Upgrade Delta version to 1.0.1 with Spark 3.1.x
- Upgrade Snowflake to 2.9.3 for Spark 2 and 2.10.0 for Spark 3

### Release dm16

- Add new images with Spark 3.0.3 and Spark 3.1.2
- Upgrade Snowflake connector to 2.9.2
- Use the newly released Delta version 1.1.0 with Spark 3.2.0

### Release dm15

- Add new images with Spark 3.2.0 and Hadoop 3.3.1
- Upgrade OS packages to apply latest security patches
- Use a JDK base image instead of a JRE base image to include tooks like `jstack`
- Upgrade Snowflake connector to 2.9.1
- Pin pip version for Python 2 images. Latest pip versions are not compatible with Python 2 anymore.

### Release dm14#

- Use delta 1.0 on Spark ≥ 3.1

### Release dm13#

- `pyarrow` support is added to all images. The version of `pyarrow` is 3.0.0.
- Delta is upgraded to version 0.8.0 for all images with Spark version ≥ 3.0.0. The Delta version for Spark 2.4.x images is 0.6.1 (unchanged). Please note that Delta is still incompatible with Spark 3.1.1 at the time of this release.

### Release dm12

This release includes the first generation of images made available to the public.

- Snowflake version: 2.8.4
- AWS connector: determined by the Hadoop version
- Azure connector: determined by the Hadoop version
- GCS connector: 2.1.5
- Guava version: 29.0
- Delta version: 0.7.0 for Spark 3.0.0 and above, 0.6.1 for Spark 2.4.x

## What’s Next?

Learn how to [add volumes to your Spark applications](ocean-spark/configure-spark-apps/mount-volumes).
