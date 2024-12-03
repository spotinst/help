# gen25 release notes (2024-11-26)

## Changelog

- upgrade spark 3.4 images to spark 3.4.4
- upgrade Nvidia images from spark 3.3.4 to spark 3.4.3
- images now have a named 'spark' user matching user id 185
- aws sdk upgraded to v1.12.777
- pyarrow upgraded to v18.0.0
- ipython upgraded to v8.29.0
- guava upgraded to v32.1.3
- deltalake upgraded to v3.2.1

## Available tags

### platform-3.4.4-hadoop-3.3.6-java-11-scala-2.12-python-3.10-gen25

#### Additional tags

- `platform-3.4-gen25`
- `platform-3.4.3-gen25`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.4.4  |
| Hadoop  |  3.3.6  |
|  Java   |   11    |
|  Scala  | 2.12.17 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 18.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |    2.2.11-shaded    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   |     2.4.0     |
| Snowflake | Not supported |

### platform-3.5.3-hadoop-3.3.6-java-11-scala-2.12-python-3.10-gen25

#### Additional tags

- `platform-3.5-gen25`
- `platform-3.5.3-gen25`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.3  |
| Hadoop  |  3.3.6  |
|  Java   |   11    |
|  Scala  | 2.12.18 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 18.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |    2.2.14-shaded    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   | Not supported |
| Snowflake | Not supported |

### platform-3.5.3-hadoop-3.3.6-java-8-scala-2.12-python-3.10-gen25

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.3  |
| Hadoop  |  3.3.6  |
|  Java   |    8    |
|  Scala  | 2.12.18 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 18.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |    2.2.14-shaded    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   | Not supported |
| Snowflake | Not supported |

### platform-3.4.3-nvidia-hadoop-3.3.6-java-8-scala-2.12-python-3.10-gen25

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.4.3  |
| Hadoop  |  3.3.6  |
|  Java   |    8    |
|  Scala  | 2.12.17 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 18.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |    2.2.11-shaded    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   |     2.4.0     |
| Snowflake | Not supported |

#### GPU Nvidia

|        name        | version |
| :----------------: | :-----: |
|    Cuda Driver     | 11.8.89 |
| Rapids-4-Spark Lib | 24.10.0 |
