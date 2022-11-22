# Package Spark Code

In this page, we describe how to package your Spark code so that it can be run on an Ocean Spark cluster.

There are two options available:

- Add your code to a Docker image
- Host your code on an object storage

> **Tip**: You need to call spark.stop() at the end of your application code, where spark can be your Spark session or Spark context. Otherwise your application may keep running indefinitely.

## Add your code to a Docker image

Using Docker images makes dependency management easy, particularly for Python workloads. Docker images let you have tight control over your environment. You can run the same Docker image locally during development and on an Ocean Spark cluster for production.

In this section, you will learn how to build a Docker image from your code, set up a container registry, and push the Docker image to the container registry.

### Build a Docker image and run it locally

You must have [Docker](https://www.docker.com/get-started) installed on your machine.

For compatibility reasons, you must use one of our published Docker images as a base, then add your dependencies on top. Building an entirely custom Docker image is not supported.

[Docker images](https://gcr.io/ocean-spark/spark) are offered by Ocean Spark and documented in the [user documentation](ocean-spark/configure-spark-apps/docker-images).

<details>
  <summary markdown="span">Python</summary>

In this example, the Python project uses the main Docker image offered by Ocean Spark, `spark:platform`. It includes Python support and connectors to popular data sources. The latest image is `gcr.io/ocean-spark/spark:platform-3.2.0-latest`.

We'll assume your project directory has the following structure:

- A main Python file e.g., `main.py`
- A `requirements.txt` file specifying project dependencies
- A global Python package called `src`, containing all project sources. This package can contain modules and packages and does not require source files to be flattened. Because `src` is a p
  Python package, it must contain an `__init__.py file`.

```
|____ main.py
|____ requirements.txt
|____ src/
  |____ __init__.py
  |____ mod1.py
  |____ mod2.py
  |____ pkg1/
     |____ pkg1_mod1.py
     |____ ...
  |___ ...
```

1. Add a file called Dockerfile to the project directory with the following content:

```
FROM gcr.io/ocean-spark/spark:platform-3.2.0-latest`

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY src/ src/
COPY main.py .
```

2. Build the Docker image by running this command in the project directory:

`docker build -t my-app:dev`

3. Run it locally with:

`docker run -e SPARK_LOCAL_IP=127.0.0.1 my-app:dev driver local:///opt/spark/work-dir/main.py <args>`

where `<args>` are the arguments to be passed to the main script `main.py`.

> **Tip**: The environment variable `SPARK_LOCAL_IP=127.0.0.1` is only required when running the image locally with docker.

</details><br>

<details>
  <summary markdown="span">Java & Scala</summary>

We'll assume you have assembled your application into a fat or [uber JAR](https://stackoverflow.com/questions/11947037/what-is-an-uber-jar) called `main.jar`.

For this example project, we'll use the main Docker image offered by Ocean for Spark, `spark:platform`. It includes Python support and connectors to popular data sources. The latest image is `gcr.io/ocean-spark/spark:platform-3.2.0-latest`.

1. Add a file called Dockerfile to the directory where `main.jar` resides:

```
FROM gcr.io/ocean-spark/spark:platform-3.2.0-latest

COPY main.jar .
```

2. Build the Docker image by running this command in the project directory:

`docker build -t my-app:dev`

3. Run it locally with

`docker run -e SPARK_LOCAL_IP=127.0.0.1 my-app:dev driver --class <className> local:///opt/spark/work-dir/main.jar <args>`

where `<args>` are the arguments to be passed to the application main class `<className>`.

> **Tip**: The environment variable `SPARK_LOCAL_IP=127.0.0.1` is only required when running the image locally with Docker.

</details><br>

### Set up a Docker registry and push your image

The simplest option on AWS is to use the Elastic Container Registry (ECR) of the account where the Ocean Spark platform is deployed. This way, the Spark pods can pull the Docker images without needing extra permissions.

1. Navigate to the [ECR console](https://console.aws.amazon.com/ecr/repositories) and create a repository with name my-app in the account where the Ocean Spark cluster is deployed. Make sure to create it in the same region as the Ocean Spark cluster to avoid transfer costs. Please refer to the [AWS documentation](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-create.html) in case of issue.
2. Generate a temporary token so that Docker can access ECR for 12 hours with the following:

`aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <account-id>.dkr.ecr.<region>.amazonaws.com`

This complex command can be found in the AWS console by clicking the "View push commands" button.

<img src="/ocean-spark/_media/configure-spark-apps-package-spark-code-01.png" />

3. You can now re-tag the Docker image we built above and push it to the ECR repository:

```
docker tag my-app:dev <account-id>.dkr.ecr.<region>.amazonaws.com/my-app:dev
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/my-app:dev
```

Please refer to the [AWS documentation about ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html) in case of issue.

### Run your image on Ocean Spark

The Spark application can now be run on Ocean Spark:

<details>
  <summary markdown="span">Python</summary>

```
curl -X POST \
'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>
       --data-raw '{
         "jobId": "my-job",
         "configOverrides": {
           "type": "Python",
           "sparkVersion": "3.2.0",
           "image": "<account-id>.dkr.ecr.<region>.amazonaws.com/my-app:dev",
           "mainApplicationFile": "local:///opt/spark/work-dir/main.py",
           "arguments": [<args>]
         }
       }'
```

</details><br>

<details>
  <summary markdown="span">Java & Scala</summary>

```
curl -X POST \
  'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>
       --data-raw '{
         "jobId": "my-job",
         "configOverrides": {
           "type": "Scala",
           "sparkVersion": "3.2.0",
           "image": "<account-id>.dkr.ecr.<region>.amazonaws.com/my-app:dev",
           "mainApplicationFile": "local:///opt/spark/work-dir/main.jar",
           "mainClass": "<className>",
           "arguments": [<args>]
         }
       }'
```

</details>

## Host your code on an object storage

In this section, you will learn how to package your code, upload it to an object storage, and make it accessible to an Ocean Spark cluster.

> **Tip**: If possible, use [Building a Docker image](ocean-spark/configure-spark-apps/package-spark-code?id=build-a-docker-image-and-run-it-locally) containing your source code. It is more robust and more convenient, especially for Python.

<details>
  <summary markdown="span">Python</summary>

### Project structure

In order to run on your cluster, your Spark application project directory must fit the following structure:

- A main python file e.g., `main.py`
- A `requirements.txt` file specifying project dependencies
- A global python package named `src` containing all project sources. This package can contain modules and packages and does not require source files to be flattened. Because src is a python package it must contain a `__init__.py` file.

### Package Python libraries

Run the following command at the root of your project, where the requirements.txt file is located.

```
rm -rf tmp_libs
pip wheel -r requirements.txt -w tmp_libs
cd tmp_libs
for file in $(ls) ; do
   unzip $file
   rm $file
done
zip -r ../libs.zip .
cd ..
rm -rf tmp_libs
```

All your dependencies are now zipped into a libs.zip file.

### Package project source files

Zip your project source files from the global package src. This package will be consumed by your Spark application main file using python imports such as:

- import src.your_module
- from src.your_package.your_module import your_object

Zip the src global package:

`zip -r ./src.zip ./src`

All your sources modules/packages are now zipped into a src.zip file.

### Upload project files

Upload prepared files to your cloud storage:

```
aws s3 cp libs.zip s3://<s3-folder>/libs.zip
aws s3 cp src.zip s3://<s3-folder>/src.zip
aws s3 cp <your_main_application_file.py> s3://<s3-folder>/<your_main_application_file.py>
```

### Run the application

All required files are uploaded in your cloud storage. The Spark application can now be started:

```
curl -X POST \
 'https://api.spotinst.io/ocean/spark/cluster/<your cluster id>/app?accountId=<your accountId>' \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>
 --data-raw '{
   "jobId": "my-job",
   "configOverrides": {
     "type": "Python",
     "sparkVersion": "3.2.0",
     "image": "<account-id>.dkr.ecr.<region>.amazonaws.com/my-app:dev",
     "mainApplicationFile": "s3a://<s3-folder>/<your_main_application_file.py>",
     "deps": {
       "pyFiles": [
         "s3a://<s3-folder>/libs.zip",
         "s3a://<s3-folder>/src.zip",
       ]
     }
   }
 }'
```

Note that Ocean Spark automatically chooses a Spark image for your app based on the sparkVersion.

For AWS, if you are referencing s3 for the main application file or Dockerfile, you must use the file format s3a, otherwise spark will throw an exception.

You can access the Ocean Spark console in order to monitor your Spark application execution.

</details><br>

<details>
  <summary markdown="span">Java & Scala</summary>

The procedure is simpler for JVM-based languages, as Spark has been designed with these in mind.
Once your application is compiled, upload it to your cloud storage:

```
aws s3 cp <main-jar>.jar s3://<s3-folder>/<main-jar>.jar
```

Reference your JAR (and its dependencies if it has any) in the configuration of your Spark application:

```
curl -X POST \
 https://api.spotinst.io/ocean/spark/cluster/osc-e4089a00/app \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer <your-spot-token>
 --data-raw '{
   "jobId": "my-job",
   "configOverrides": {
     "type": "Scala",
     "sparkVersion": "3.2.0",
     "mainApplicationFile": "s3a://<s3-folder>/<main-jar>.jar",
     "image": "gcr.io/ocean-spark/spark:platform-3.2-latest",
     "deps": {
       "jars": [
         "s3a://<s3-folder>/<dep1>.jar",
         "s3a://<s3-folder>/<dep2>.jar"
       ]
     }
   }
 }'
```

Note that Ocean Spark automatically chooses a Spark image for your app based on the sparkVersion.

For AWS, if you are referencing s3 for the main application file or Dockerfile, you must use the file format s3a, otherwise spark will throw an exception.

You can access the [Ocean Spark console]() in order to monitor your Spark application execution.

If you need to import a dependency directly from a repository like Maven, the `deps->jars` list accepts URLs, like:

```
https://repo1.maven.org/maven2/org/influxdb/influxdb-java/2.14/influxdb-java-2.14.jar
```

</details><br>

## What's Next?

Learn more about [memory and cores](ocean-spark/configure-spark-apps/memory-&-cores).
