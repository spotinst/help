# gen24 release notes (2024-10-16)

## Changelog

- Update hadoop to hadoop v3.3.6
- Update spark 3.5 to v3.5.3
- Update hadoop gcs connector v2.2.25
- Update guava to v32.0
- spark_snowflake to:
  - v2.16 for spark 3.3
  - v3.0 for spark 3.4 and 3.5
- update scala 2.12 to v2.12.20
- update scala 2.13 to v2.13.15
- update nvidia rapids to v24.08.1
- update to python 3.10 for 2.4 images
- Python updates:
  - updated future to v1.0.0
  - update jupyter_client to 8.6.3
  - update pandas to 2.2.3

## Available tags

### platform-3.3.4-hadoop-3.3.6-java-8-scala-2.12-python-3.10-gen24

#### Additional tags

- `platform-3.3-gen24`
- `platform-3.3.4-gen24`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.6  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.16.0 |

### platform-3.3.4-hadoop-3.3.6-java-11-scala-2.12-python-3.10-gen24

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.6  |
|  Java   |   11    |
|  Scala  | 2.12.15 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.16.0 |

### platform-3.4.3-hadoop-3.3.6-java-11-scala-2.12-python-3.10-gen24

#### Additional tags

- `platform-3.4-gen24`
- `platform-3.4.3-gen24`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.4.3  |
| Hadoop  |  3.3.6  |
|  Java   |   11    |
|  Scala  | 2.12.17 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   |     2.4.0     |
| Snowflake | Not supported |

### platform-3.5.3-hadoop-3.3.6-java-11-scala-2.12-python-3.10-gen24

#### Additional tags

- `platform-3.5-gen24`
- `platform-3.5.3-gen24`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.3  |
| Hadoop  |  3.3.6  |
|  Java   |   11    |
|  Scala  | 2.12.18 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   | Not supported |
| Snowflake | Not supported |

### platform-3.5.3-hadoop-3.3.6-java-8-scala-2.12-python-3.10-gen24

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.3  |
| Hadoop  |  3.3.6  |
|  Java   |    8    |
|  Scala  | 2.12.18 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |    version    |
| :-------: | :-----------: |
|   Delta   | Not supported |
| Snowflake | Not supported |

### platform-3.3.4-nvidia-hadoop-3.3.6-java-8-scala-2.12-python-3.10-gen24

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.6  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.15 |
|  Hive   |  2.3.9  |
| Pyarrow | 17.0.0  |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.12.367     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.3.9    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 7.0.1 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 7.0.1 |
|            AWS Glue             |     Hive 2.3.9      |

#### Additional formats

|   name    |        version         |
| :-------: | :--------------------: |
|   Delta   |         2.3.0          |
| Snowflake | Spark Snowflake 2.16.0 |

#### GPU Nvidia

|        name        | version |
| :----------------: | :-----: |
|    Cuda Driver     | 11.8.89 |
| Rapids-4-Spark Lib | 24.08.1 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.12-python-3.7-gen24

#### Additional tags

- `platform-2.4.8-gen24`
- `platform-2.4-gen24`

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |    2.12.10    |
| Python  |    3.7.10     |
|  Hive   | Not supported |
| Pyarrow |     8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.5    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 5.4.0 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 5.4.0 |
|            AWS Glue             |    Not supported    |

#### Additional formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |         0.6.1         |
| Snowflake | Spark Snowflake 2.9.3 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.11-python-3.7-gen24

#### Dependency versions

|  name   |    version    |
| :-----: | :-----------: |
|  Spark  |     2.4.8     |
| Hadoop  |     3.1.0     |
|  Java   |       8       |
|  Scala  |    2.11.12    |
| Python  |    3.7.10     |
|  Hive   | Not supported |
| Pyarrow |     8.0.0     |

#### Supported connectors

|              name               |       version       |
| :-----------------------------: | :-----------------: |
|    S3 (`s3a://` or `s3://`)     |    AWS 1.11.271     |
|          GCS (`gs://`)          |       2.2.25        |
|      ADLS gen1 (`adl://`)       |   ADLS SDK 2.2.5    |
|     ADLS gen2 (`abfss://`)      | Azure Storage 5.4.0 |
| Azure Blob Storage (`wasbs://`) | Azure Storage 5.4.0 |
|            AWS Glue             |    Not supported    |

#### Additional formats

|   name    |        version        |
| :-------: | :-------------------: |
|   Delta   |         0.6.1         |
| Snowflake | Spark Snowflake 2.9.3 |
