# Docker Images

Ocean Spark maintains a popular fleet of Docker images for Apache Spark.

## What's a Docker image for Spark?

When Spark runs on Kubernetes, the driver and executors are Docker containers that execute a Docker image specifically built to run Spark.

## What’s in these Docker Images?

In addition to a version of Spark itself, the `spark:platform` images include connectors to popular [object stores](ocean-spark/configure-spark-apps/docker-images?id=data-source-connectors): (S3, GCS, ADLS), Snowflake, Delta Lake, Python support with pip and conda, Jupyter notebook support, Hadoop, AWS Glue Catalog, and more.

### Images to start with

|               Full Image name                | Spark Version | Scala Version | Python Version | Hadoop Version |
| :------------------------------------------: | :-----------: | :-----------: | :------------: | :------------: |
| gcr.io/ocean-spark/spark:platform-3.4-latest |     3.4.0     |     2.12      |      3.10      |     3.3.4      |
| gcr.io/ocean-spark/spark:platform-2.4-latest |     2.4.8     |     2.12      |      3.7       |     3.1.0      |

### How to use those images for your apps and jobs?

When submitting Spark apps on Ocean for Apache Spark, you can:

- Omit the image field. In this case, `spark:platform` will be used by default according to the Spark version specified in the `sparkVersion` field. If both image and sparkVersion fields are specified, the Spark version of the image takes precedence.
- Specify the image in your configuration with the image field (using a `configOverrides` directly in your API call, or using a configuration template).

### Need another image?

To match different dependencies and version requirements you can find more images in Spot's [Docker registry](https://gcr.io/ocean-spark/spark).

All these dependencies can have different versions. A combination of dependency versions is called a flavor of spark:platform in this page. The image tag indicates the flavor of the image and can be adjusted to fit your needs. Here are two examples of image tags:

```
gcr.io/ocean-spark/spark:platform-3.3.0-latest
gcr.io/ocean-spark/spark:platform-3.3.0-hadoop-3.3.1-java-8-scala-2.12-python-3.8-latest
```

### Need to build your own Image?

You should use one of the spark:platform images as a base. Once your custom image is in your local docker repository you have to Tag and Push it, see [Set up a Docker registry](ocean-spark/configure-spark-apps/package-spark-code?id=set-up-a-docker-registry-and-push-your-image) and push your image.

## Data source connectors

The image tags `gcr.io/ocean-spark/spark:platform` supports for the following data sources:

- AWS S3 (s3a:// or s3:// scheme)
- Google Cloud Storage (gs:// scheme)
- Azure Blob Storage (wasbs:// scheme)
- Azure Datalake generation 1 (adl:// scheme)
- Azure Datalake generation 2 (abfss:// scheme)
- [Snowflake](https://docs.snowflake.com/en/user-guide/spark-connector.html)
- [Delta Lake](https://docs.delta.io/latest/index.html)
- [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html)

To check the versions used by an image, see the [release notes](ocean-spark/docker-images-release-notes/).

## Python support

The image tag `gcr.io/ocean-spark/spark:platform` supports Pyspark applications. When [building a custom image](ocean-spark/configure-spark-apps/package-spark-code) or working from a notebook, additional Python packages can be installed with pip or conda.

## Image tags and flavors

### Flavors

Spot maintains Spark Docker images for multiple combinations of the versions of Spark and some of its dependencies (Hadoop, Java, Scala and Python). These combinations are called flavors.

Note that not all the combinations of versions exist. To list all the flavors for a given image, check out the [Docker registry](https://gcr.io/ocean-spark/spark:platform).

### Generations

When Spot updates images, Spot creates a new generation. Generations can be identified by the suffix `-genXX` in the image tags (`-latest` always points to the latest generation). Each generation contains the following flavors:

- Latest (at the time of the generation's release) Spark 3.x:

  - Java 8 flavor
  - Java 11 flavor

- Latest Spark 2.x:

  - Scala 2.11 flavor
  - Scala 2.12 flavor

- New versions of Spark 3.x that were released since the previous generation.

- EMR compatible flavors:

  - Flavor compatible with latest EMR 6.x
  - Flavor compatible with latest EMR 5.x

### Best practices

There are both long-form tags (like `gcr.io/ocean-spark/spark:platform-3.1.1-java-8-scala-2.12-hadoop-3.2.0-python-3.8-latest`) where all versions are explicitly listed, as well as short-form tags (like `gcr.io/ocean-spark/spark:platform-3.1-latest`).

In general Spot encourages starting with Spot's short-form tags:

- `gcr.io/ocean-spark/spark:platform-3.1.3-latest` contains a Spark 3.1.3 distribution and all other dependencies are set to the latest compatible version. For example, `platform-3.1.3-latest` contains Hadoop 3.2.0, Python 3.8, Scala 2.12, and Java 11. Spot reserves the right to upgrade the version of a dependency if a new, compatible version is released. For example, Spot can upgrade `platform-3.1.3-latest` to Hadoop 3.3.0 once it is compatible with Spark 3.1.3.
- `gcr.io/ocean-spark/spark:platform-3.1-latest` contains the latest Spark version of the 3.1 minor.

Use a long-form only if you need a specific combination. For instance, you can require a specific combination of versions when migrating an existing Scala or Java project to Spark on Kubernetes. On the other hand, new JVM projects and Pyspark projects should work fine with short-form tags.

For production workloads:

- Spot doesn't recommend using the `-latest` tags. To keep the image stable you should use images with an explicit version suffix like `-gen18` below. The following images are the same:
  - `gcr.io/ocean-spark/spark:platform-3.2-gen18`
  - `gcr.io/ocean-spark/spark:platform-3.2.1-gen18`
  - `gcr.io/ocean-spark/spark:platform-3.2.1-hadoop-3.3.1-java-8-scala-2.12-python-3.8-gen18`
- Long-form tag images without the suffix version can change to the exclusion of the Spark, Hadoop, Java, Scala and Python versions specified in the image tag.

See the release notes below to learn about the changes introduced by each version.

## Alternative repositories

In addition to Spot's [GCR](https://gcr.io/ocean-spark/spark) repository, Spot's images are also hosted in a public AWS ECR repository: [public.ecr.aws/ocean-spark/spark](https://gallery.ecr.aws/ocean-spark/spark), and a public Azure repository: `oceanspark.azurecr.io/spark`.

## Release notes

Release notes for each generation can be found [here](ocean-spark/docker-images-release-notes/).

## What’s Next?

Learn how to [add volumes to your Spark applications](ocean-spark/configure-spark-apps/mount-volumes).
