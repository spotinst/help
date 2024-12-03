# gen23 release notes (2024-08-02)

## Changelog

- Update java 8 base image to Temurin v8u422-b05
- Update java 11 base image to Temurin v11.0.24_8
- Add image for spark v3.3.4
- Add image for spark v3.4.3
- Add image for spark v3.5.1
- Correct wrong version of delta included in spark v3.5.0
- Make sure versions of AWS Java SDK jars are coherent
- Update Delta to v3.2 for spark v3.5.0 and v3.5.1
- Release notes now include release date

## Available tags

### platform-3.3.4-hadoop-3.3.2-java-8-scala-2.12-python-3.10-gen23

#### Additional tags

- `platform-3.3-gen23`
- `platform-3.3.4-gen23`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.2  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.14 |
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

### platform-3.3.4-hadoop-3.3.2-java-11-scala-2.12-python-3.10-gen23

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.2  |
|  Java   |   11    |
|  Scala  | 2.12.15 |
| Python  | 3.10.14 |
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

### platform-3.4.3-hadoop-3.3.4-java-11-scala-2.12-python-3.10-gen23

#### Additional tags

- `platform-3.4-gen23`
- `platform-3.4.3-gen23`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.4.3  |
| Hadoop  |  3.3.4  |
|  Java   |   11    |
|  Scala  | 2.12.17 |
| Python  | 3.10.14 |
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

### platform-3.5.0-hadoop-3.3.4-java-11-scala-2.12-python-3.10-gen23

#### Additional tags

- `platform-3.5.0-gen23`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.0  |
| Hadoop  |  3.3.4  |
|  Java   |   11    |
|  Scala  | 2.12.18 |
| Python  | 3.10.14 |
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
|   Delta   |     3.2.0     |
| Snowflake | Not supported |

### platform-3.5.1-hadoop-3.3.4-java-11-scala-2.12-python-3.10-gen23

#### Additional tags

- `platform-3.5-gen23`
- `platform-3.5.1-gen23`

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.1  |
| Hadoop  |  3.3.4  |
|  Java   |   11    |
|  Scala  | 2.12.18 |
| Python  | 3.10.14 |
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
|   Delta   |     3.2.0     |
| Snowflake | Not supported |

### platform-3.5.1-hadoop-3.3.4-java-8-scala-2.12-python-3.10-gen23

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.5.1  |
| Hadoop  |  3.3.4  |
|  Java   |    8    |
|  Scala  | 2.12.18 |
| Python  | 3.10.14 |
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
|   Delta   |     3.2.0     |
| Snowflake | Not supported |

### platform-3.3.4-nvidia-hadoop-3.3.2-java-8-scala-2.12-python-3.10-gen23

#### Dependency versions

|  name   | version |
| :-----: | :-----: |
|  Spark  |  3.3.4  |
| Hadoop  |  3.3.2  |
|  Java   |    8    |
|  Scala  | 2.12.15 |
| Python  | 3.10.14 |
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
| Rapids-4-Spark Lib | 24.06.0 |

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.12-python-3.7-gen23

#### Additional tags

- `platform-2.4.8-gen23`
- `platform-2.4-gen23`

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

### platform-2.4.8-hadoop-3.1.0-java-8-scala-2.11-python-3.7-gen23

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
