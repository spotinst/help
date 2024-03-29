# gen21 release notes

## Changelog

Generation 21 contains images for Apache Spark version 3.3.3, 3.4.1 and 3.5.0. All the older images have also been rebased on `eclipse-temurin` following the deprecation of `openjdk` docker images.

## Available tags

### platform-3.3.3-hadoop-3.3.2-java-8-scala-2.12-python-3.10-gen21

#### Additional tags

- `platform-3.3-gen21`
- `platform-3.3.3-gen21`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.3  |
| Hadoop  |  3.3.2  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.10 |
|  Hive   |  2.3.9  |
| Pyarrow | 11.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.1026    |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.13.0 |

### platform-3.3.3-hadoop-3.3.2-java-11-scala-2.12-python-3.10-gen21

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.3  |
| Hadoop  |  3.3.2  |
|  Java   |   11    |
|  Scala  | 2.12.15 |
| Python  | 3.10.10 |
|  Hive   |  2.3.9  |
| Pyarrow | 11.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.1026    |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.13.0 |

### platform-3.4.1-hadoop-3.3.4-java-11-scala-2.12-python-3.10-gen21

#### Additional tags

- `platform-3.4-gen21`
- `platform-3.4.1-gen21`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.4.1  |
| Hadoop  |  3.3.4  |
|  Java   |   11    |
|  Scala  | 2.12.17 |
| Python  | 3.10.10 |
|  Hive   |  2.3.9  |
| Pyarrow | 11.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.262     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   |     2.4.0     |
| Snowflake | Not supported |

### platform-3.5.0-hadoop-3.3.4-java-11-scala-2.12-python-3.10-gen21

#### Additional tags

- `platform-3.5-gen21`
- `platform-3.5.0-gen21`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.0  |
| Hadoop  |  3.3.4  |
|  Java   |   11    |
|  Scala  | 2.12.18 |
| Python  | 3.10.10 |
|  Hive   |  2.3.9  |
| Pyarrow | 11.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.262     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   |     0.8.0     |
| Snowflake | Not supported |

### platform-3.3.3-nvidia-hadoop-3.3.2-java-8-scala-2.12-python-3.10-gen21

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.3  |
| Hadoop  |  3.3.2  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.10 |
|  Hive   |  2.3.9  |
| Pyarrow | 11.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.1026    |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.13.0 |

#### GPU Nvidia

|        name        | version |
| :----------------: | :-----: |
|    Cuda Driver     | 11.8.89 |
| Rapids-4-Spark Lib | 23.10.0 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.12-python-3.7-gen21

#### Additional tags

- `platform-2.4.8-gen21`
- `platform-2.4-gen21`

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |    2.12.10    |
| Python  |    3.7.13     |
|  Hive   | Not supported |
| Pyarrow |     8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.5    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 5.4.0 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 5.4.0 |
|            AWS Glue             |    Not supported    |

#### Additional formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |         0.6.1         |
| Snowflake | Spark Snowflake 2.9.3 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.11-python-3.7-gen21

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |    2.11.12    |
| Python  |    3.7.13     |
|  Hive   | Not supported |
| Pyarrow |     8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.5    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 5.4.0 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 5.4.0 |
|            AWS Glue             |    Not supported    |

#### Additional formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |         0.6.1         |
| Snowflake | Spark Snowflake 2.9.3 |

### platform-3.3.0-hadoop-3.3.3-java-8-scala-2.12-python-3.7-gen21

#### Additional tags

- `platform-aws-emr-6.9-gen21`
- `platform-aws-emr-6-gen21`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.0  |
| Hadoop  |  3.3.3  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.7.13  |
|  Hive   |  2.3.9  |
| Pyarrow |  8.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.1026    |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.13.0 |

### platform-2.4.8-hadoop-2.10.1-java-8-scala-2.11-python-3.7-gen21

#### Additional tags

- `platform-aws-emr-5.36-gen21`
- `platform-aws-emr-5-gen21`

#### Dependency versions

|  name   |   version    |
| :-----: | :----------: |
|  Spark  |    2.4.8     |
| Hadoop  |    2.10.1    |
|  Java   |      8       |
|  Scala  |   2.11.12    |
| Python  |    3.7.13    |
|  Hive   | 1.2.1.spark2 |
| Pyarrow |    8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |    Not supported    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.3    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |    Not supported    |

#### Additional formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |         0.6.1         |
| Snowflake | Spark Snowflake 2.9.3 |
