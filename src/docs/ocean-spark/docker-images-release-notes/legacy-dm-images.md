# Legacy images release notes

Before generation 18, images were available in the `gcr.io/datamechanics/spark` repository.

## Release dm18

- Add AWS Glue support for Spark 3 images (Spark 2.4 image do not support Glue)

## Release dm17

- Add new images with Spark 3.1.3 and Spark 3.2.1
- Upgrade Delta version to 1.0.1 with Spark 3.1.x
- Upgrade Snowflake to 2.9.3 for Spark 2 and 2.10.0 for Spark 3

## Release dm16

- Add new images with Spark 3.0.3 and Spark 3.1.2
- Upgrade Snowflake connector to 2.9.2
- Use the newly released Delta version 1.1.0 with Spark 3.2.0

## Release dm15

- Add new images with Spark 3.2.0 and Hadoop 3.3.1
- Upgrade OS packages to apply latest security patches
- Use a JDK base image instead of a JRE base image to include tools like `jstack`
- Upgrade Snowflake connector to 2.9.1
- Pin pip version for Python 2 images. Latest pip versions are not compatible with Python 2 anymore.

## Release dm14

- Use Delta 1.0 on Spark ≥ 3.1

## Release dm13

- `pyarrow` support is added to all images. The version of `pyarrow` is 3.0.0.
- Delta is upgraded to version 0.8.0 for all images with Spark version ≥ 3.0.0. The Delta version for Spark 2.4.x images is 0.6.1 (unchanged). Please note that Delta is still incompatible with Spark 3.1.1 at the time of this release.

## Release dm12

This release includes the first generation of images made available to the public.

- Snowflake version: 2.8.4
- AWS connector: determined by the Hadoop version
- Azure connector: determined by the Hadoop version
- GCS connector: 2.1.5
- Guava version: 29.0
- Delta version: 0.7.0 for Spark 3.0.0 and above, 0.6.1 for Spark 2.4.x
