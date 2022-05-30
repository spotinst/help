# AWS Glue Catalog

You can use the [AWS Glue Data Catalog](https://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) as a metastore to persist metadata about your Spark tables - definition, location, statistics, etc.  
This is an alternative to using a [Hive Metastore](https://docs.spot.io/ocean-spark/tools-integrations/hive-metastore) - the main benefit of Glue is that it natively allows querying from other AWS services such as Athena, Redshift, etc. 

Our [Spark docker images](https://docs.spot.io/ocean-spark/configure-spark-apps/docker-images) (Spark 3.0 and later since dm18) support connecting to Glue as the metastore since May 2022.  
Once you’re using a compatible image, you will need to configure your Spark applications to use Glue.  
The instructions differ depending on whether Ocean Spark is deployed in the same AWS account as Glue, or whether they’re in separate accounts.

## If Ocean Spark is deployed in the same AWS account as Glue
The first step is to create an IAM policy granting your Spark applications access to Glue.  
You can do this in the AWS console, under IAM > Policies > Create policy, by entering the following JSON block.  
You should replace the `<AWS ACCOUNT ID>` with your actual account id.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "glue:*",
            "Resource": [
                "arn:aws:glue:*:<AWS ACCOUNT ID>:catalog",
                "arn:aws:glue:*:<AWS ACCOUNT ID>:database/*",
                "arn:aws:glue:*:<AWS ACCOUNT ID>:table/*/*"
            ]
        }
    ]
}
```

You should then attach this policy to the IAM role used by your Spark applications.  
Identify the Virtual Node Groups used by your Spark applications, and the IAM role they are using.  
Refer to our documentation on [how to configure data access](https://docs.spot.io/ocean-spark/configure-spark-apps/access-your-data?id=your-data-is-in-the-same-aws-account-as-the-ocean-spark-cluster) to get a better understanding of this.

The final step is to pass the following configuration to your Spark applications.  
You can put it in a configuration template, or pass this directly in your API calls as configOverrides.  
In the example below, replace <AWS ACCOUNT ID> with your AWS account id.

```json
{
  "sparkConf": {
    "spark.sql.catalogImplementation": "hive"
  },
  "hadoopConf": {
    "hive.metastore.glue.catalogid": "<AWS ACCOUNT ID>",
    "hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory"
  }
}

```

## If Ocean Spark is deployed in a different AWS account
The explanations below are based on the official AWS Glue documentation available at https://docs.aws.amazon.com/glue/latest/dg/cross-account-access.html 

In this example, we’ll assume that Ocean Spark is deployed in `<AWS ACCOUNT ID A>` and that Glue is deployed in `<AWS ACCOUNT ID B>`.  
Glue is deployed in an AWS region `<REGION>`, which could be for example us-west-2.

You should first identify the IAM role(s) used by your Spark applications. Let’s assume that there’s a single IAM role called `<OCEAN-NODE-INSTANCE-ROLE>` - but there could be more than one role. We will grant this IAM role access to Glue. We’ll need to make changes from two places.

From the AWS console on account B, go to Glue > Settings, and add the following permissions:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "glue:*",
            "Principal": {
              "AWS": [ "<OCEAN-NODE-INSTANCE-ROLE>" ]
            },
            "Resource": [
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:database/*",                                                     
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:catalog",
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:table/*/*"
            ]
        }
    ]
}
```

<img src="/ocean-spark/_media/tools-aws-glue-catalog-01.png" width="650" height="370" />

Then from the AWS console on account A, create the following IAM policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "glue:*",
            "Resource": [
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:database/*",                                                     
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:catalog",
                "arn:aws:glue:<REGION>:<AWS ACCOUNT ID B>:table/*/*"
            ]
        }
    ]
}
```

Attach this policy to the IAM role(s) used by your Spark applications.

The final step is to pass the following configuration to your Spark applications.  
You can use a configuration template, or pass this directly in your API calls as configOverrides:

```json
{
  "sparkConf": {
    "spark.sql.catalogImplementation": "hive"
  },
  "hadoopConf": {
    "hive.metastore.glue.catalogid": "<AWS ACCOUNT ID B>",
    "hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory"
  }
}
```

## Testing Glue functionality
To test querying the Glue catalog, you can [start a Jupyter notebook](https://docs.spot.io/ocean-spark/tools-integrations/connect-jupyter-notebooks) using a configuration template with the above configurations.

In this example, we will use the database "db_film" of the Glue Catalog.

<img src="/ocean-spark/_media/tools-aws-glue-catalog-02.png"/>

This database has an S3 bucket location (using S3A protocol), and tables in parquet format.

<img src="/ocean-spark/_media/tools-aws-glue-catalog-03.png"/>

You can show the available database by running `spark.sql("SHOW DATABASES")`  
You can describe a database by running `spark.sql("DESCRIBE DATABASE db_film")`

<img src="/ocean-spark/_media/tools-aws-glue-catalog-04.png"/>

You can list the tables within a database with `spark.sql("SHOW TABLES db_film")`  
You can then query these tables, as well as create new ones, or create a new database. 
<img src="/ocean-spark/_media/tools-aws-glue-catalog-05.png"/>
