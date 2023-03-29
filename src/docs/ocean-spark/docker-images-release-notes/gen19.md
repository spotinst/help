# gen19 release notes

## Changelog

- support multi-platform `linux/amd64` and `linux/arm64`
- available on public acr, ecr and gcr registries:
  - `oceanspark.azurecr.io/spark`
  - https://gallery.ecr.aws/ocean-spark/spark
  - https://gcr.io/ocean-spark/spark

## Available tags

### platform-3.3.1-hadoop-3.3.2-java-8-scala-2.12-python-3.8-gen19

#### Additional tags

- `platform-3.3-gen19`
- `platform-3.3.1-gen19`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.1  |
| Hadoop  |  3.3.2  |
|  Java   |    8    |
|  Scala  |  2.12   |
| Python  |   3.8   |
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

#### Additonnal formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.1.1          |
| Snowflake | Spark Snowflake 2.11.0 |

### platform-3.2.2-hadoop-3.3.1-java-8-scala-2.12-python-3.8-gen19

#### Additional tags

- `platform-3.2-gen19`
- `platform-3.2.2-gen19`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.2.2  |
| Hadoop  |  3.3.1  |
|  Java   |    8    |
|  Scala  |  2.12   |
| Python  |   3.8   |
|  Hive   |  2.3.9  |
| Pyarrow |  8.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.901     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additonnal formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |     Not supported      |
| Snowflake | Spark Snowflake 2.11.0 |

### platform-3.3.1-hadoop-3.3.2-java-11-scala-2.12-python-3.8-gen19

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.1  |
| Hadoop  |  3.3.2  |
|  Java   |   11    |
|  Scala  |  2.12   |
| Python  |   3.8   |
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

#### Additonnal formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.1.1          |
| Snowflake | Spark Snowflake 2.11.0 |

### platform-3.2.2-hadoop-3.3.1-java-11-scala-2.12-python-3.8-gen19

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.2.2  |
| Hadoop  |  3.3.1  |
|  Java   |   11    |
|  Scala  |  2.12   |
| Python  |   3.8   |
|  Hive   |  2.3.9  |
| Pyarrow |  8.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.901     |
|          GCS (`gs://`)          |        2.1.5        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additonnal formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |     Not supported      |
| Snowflake | Spark Snowflake 2.11.0 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.12-python-3.7-gen19

#### Additional tags

- `platform-2.4.8-gen19`
- `platform-2.4-gen19`

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |     2.12      |
| Python  |      3.7      |
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
|            AWS Glue             | Hive Not supported  |

#### Additonnal formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |     Not supported     |
| Snowflake | Spark Snowflake 2.9.3 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.11-python-3.7-gen19

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |     2.11      |
| Python  |      3.7      |
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
|            AWS Glue             | Hive Not supported  |

#### Additonnal formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |     Not supported     |
| Snowflake | Spark Snowflake 2.9.3 |

### platform-3.3.0-hadoop-3.3.3-java-8-scala-2.12-python-3.7-gen19

#### Additional tags

- `platform-aws-emr-6.9-gen19`
- `platform-aws-emr-6-gen19`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.0  |
| Hadoop  |  3.3.3  |
|  Java   |    8    |
|  Scala  |  2.12   |
| Python  |   3.7   |
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

#### Additonnal formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.1.1          |
| Snowflake | Spark Snowflake 2.11.0 |

### platform-2.4.8-hadoop-2.10.1-java-8-scala-2.11-python-3.7-gen19

#### Additional tags

- `platform-aws-emr-5.36-gen19`
- `platform-aws-emr-5-gen19`

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |    2.10.1     |
|  Java   |       8       |
|  Scala  |     2.11      |
| Python  |      3.7      |
|  Hive   | Not supported |
| Pyarrow |     8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |    Not supported    |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.3    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             | Hive Not supported  |

#### Additonnal formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |     Not supported     |
| Snowflake | Spark Snowflake 2.9.3 |
