# Get Started with Ocean for Apache Spark

The Ocean for Apache Spark (also referred to as Ocean Spark) environment includes the Ocean Spark components installed in a Kubernetes cluster integrated with Spot Ocean. The cluster creation and deployment of the whole stack is really simple using the *spotctl* command-line tool.

## Stages of Ocean Spark Setup

The Ocean Spark setup has the following major parts:
- Prerequisites
- Create an Ocean Spark Cluster
- Run Your First App

Each of these parts is described below.

## Prerequisites

Before you can start the setup of an Ocean Spark cluster, you will need to have the following in place:
- Your [AWS account connected](connect-your-cloud-provider/aws-account) to Spot
- Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) (provided by Amazon EKS) installed
- The AWS CLI installed and configured for your AWS account (by running `aws configure`)
- Command-line tool spotctl installed (see instructions below)

### Install spotctl

Complete the [spotctl installation procedure](https://github.com/spotinst/spotctl#installation) on the Spot Github site.

## Create an Ocean Spark Cluster

You can create a new Ocean Spark cluster from scratch, or import an existing AWS Ocean cluster.

### New Ocean Spark Cluster

To create a new Ocean Spark cluster, enter the following command:

`$ spotctl ocean spark create cluster --region $YOUR_REGION --cluster-name $SOME_NAME`

The `--cluster-name` argument is optional. A name will be generated for you if you omit it.

### Import Existing Cluster

To import an existing AWS Ocean cluster, enter the following command:

  `$ spotctl ocean spark create cluster --cluster-id $YOUR_OCEAN_CLUSTER_ID`

Your Ocean cluster ID is of the form o-XXXXXXXX. To find your Ocean cluster ID, you can run the following command:

  `$ spotctl ocean get cluster kubernetes`

Note that your kubectl installation must be configured to talk to your Ocean cluster in order to import it into Ocean Spark.

For more information about the available arguments, you can run the following command:

  `$ spotctl ocean spark create cluster --help`

### Creation Process in Background

After you enter the creation command, the following major events take place:
(**If creating a new Ocean cluster**) EKS Cluster Creation: The entire cluster creation process takes 20-25 minutes. You can check the progress bar during this process. If you examine your AWS console, you will see CloudFormation activity.
**Ocean Controller Installation**: After the EKS cluster is created, the Ocean Controller is installed. The cluster is registered with Spot and will be visible in the Spot console.
**Ocean for Spark Installation**: The Ocean Spark components are installed and the cluster is registered as an Ocean Spark cluster.

### View Cluster State

To view the state of the newly created cluster, go to the Cluster Overview page of the Ocean Spark console. You should see your cluster there marked as available.

Once the cluster has been created, your kubectl installation will have been automatically configured to communicate with it.

## Run Your First App

### Prerequisites

To run your first app, you will need to have:
- The Ocean Spark cluster ID of the cluster you just created (of the format osc-e4089a00). You can find this in the console in the [list of clusters](ocean-spark/product-tour/manage-clusters), or by using the Get Cluster List in the API.
- A [Spot token](administration/api/create-api-token) to interact with [Spot API](https://docs.spot.io/api/).

Using the [Ocean Spark API](https://docs.spot.io/api/#tag/Ocean-Spark), you can run, configure, and monitor applications using the different endpoints available.

To know more about the API endpoints and parameters, check out the API reference.

### Run Pi App

The command below will run the classic Monte-Carlo Pi computation contained in all Spark distributions:

```yaml
curl -X POST \
 https://api.spotinst.io/ocean/spark/cluster/osc-e4089a00/app \
 -H 'Content-Type: application/json' \
 -H 'Authorization: Bearer 4536dc4418995c553df9c0c0e1d31866453bcec3df0f31f97003926d67ff1e00

' \
 -d '{
 "job-id": "spark-pi",
 "configOverrides": {
   "type": "Scala",
   "sparkVersion": "3.2.0",
   "mainApplicationFile": "local:///opt/spark/examples/jars/examples.jar",
   "mainClass": "org.apache.spark.examples.SparkPi",
   "arguments": ["1000"]
 }
}'
```

Here's a breakdown of the payload:
- We assign the job ID "spark-pi" to the application. A job is a logical grouping of applications. It is typically a scheduled workload that runs every day or every hour. Every run of a job is called an application in Ocean Spark. In the console, the Jobs view lets you track performance of jobs over time. A unique app ID will be generated from the job ID (although you can specify one yourself).
- Default configurations are overridden in configOverrides:
  - This is a Scala application running Spark 3.2.0.
  - The command to run is specified by mainApplicationFile, mainClass, and arguments.

The API then returns something like:

```yaml
{
    "request": {
        "id": "39e2b4a4-46c9-4ff3-bc3a-e5d3f2432549",
        "url": "/ocean/spark/cluster/osc-e4089a00/app",
        "method": "POST",
        "timestamp": "2021-11-14T21:28:35.546Z"
    },
    "response": {
        "status": {
            "code": 200,
            "message": "OK"
        },
        "kind": "spotinst:ocean:spark:application",
        "items": [
            {
                "internalId": "8ec73ba0-c7df-4b25-b21e-efaeb7c4bfe2",
                "id": "spark-pi-2a201099-4ce9-4220-805e-049363174528",
                "displayName": "spark-pi-2a201099-4ce9-4220-805e-049363174528",
                "accountId": "act-27419163",
                "organizationId": 606079874885,
                "userId": 42,
                "clusterId": "osc-e4089a00",
                "controllerClusterId": "arnar-rokkar-111",
                "appState": "NEW",
                "submissionSource": "public-api",
                "createdAt": "2021-11-14T21:28:35.546Z",
                "updatedAt": "2021-11-14T21:28:35.546Z",
                "job": {
                    "id": "spark-pi",
                    "displayName": "spark-pi"
                },
                "config": {
                    "type": "Scala",
                    "sparkVersion": "3.2.0",
                    "image": "gcr.io/datamechanics/spark:platform-3.2.0-dm15",
                    "mainApplicationFile": "local:///opt/spark/examples/jars/examples.jar",
                    "mainClass": "org.apache.spark.examples.SparkPi",
                    "arguments": ["1000"],
                    "sparkConf": {
            "spark.kubernetes.allocation.batch.size": "10",
            "spark.sql.execution.arrow.enabled": "true",
            "spark.kubernetes.allocation.driver.readinessTimeout": "120s",
            "spark.sql.execution.arrow.pyspark.enabled": "true",
            "spark.sql.execution.arrow.sparkr.enabled": "true",
            "spark.sql.adaptive.enabled": "true",
            "spark.storage.decommission.shuffleBlocks.enabled": "true",
            "spark.storage.decommission.rddBlocks.enabled": "true",
            "spark.storage.decommission.enabled": "true",
            "spark.decommission.enabled": "true",
            "spark.dynamicAllocation.enabled": "true",
            "spark.dynamicAllocation.shuffleTracking.enabled": "true",
            "spark.dynamicAllocation.maxExecutors": "100",
            "spark.dynamicAllocation.executorAllocationRatio": "0.33",
            "spark.dynamicAllocation.sustainedSchedulerBacklogTimeout": "30",
            "spark.cleaner.periodicGC.interval": "1min",
                    },
                    "driver": {
            "cores": 4,
            "coreRequest": "3460m",
            "memory": "8192m",
                        "envVars": {
                            "KUBERNETES_REQUEST_TIMEOUT": "30000",
                            "KUBERNETES_CONNECTION_TIMEOUT": "30000"
                        },
                        "affinity": “{...}”,
                        "instanceType": "m5.xlarge",
                        "spot": false
                    },
                    "executor": {
            "cores": 4,
            "coreRequest": "3460m",
            "memory": "8192m",
                        "affinity": “{...}”,
                        "instanceType": "m5.xlarge",
                        "spot": true
                    },
                    "priority": "normal"
                }
            }
]
```

Note that some additional configurations are automatically set by Ocean Spark.
In particular, the `appId` is a unique identifier of this Spark application on your cluster. Here it has been generated automatically from the jobId, but you can set it yourself in the payload of your request to launch an app.

Beside the `appId`, Ocean Spark also set some defaults to increase the stability and performance of the app. Learn more about [configuration management](ocean-spark/configure-spark-apps/) and auto-tuning.

The application you just created should appear in the Ocean Spark console:

<img src="/ocean-spark/_media/getting-started-01.png" />

Clicking on the application opens the [application page](ocean-spark/product-tour/view-application-details). At this point, you can open the Spark UI, follow the live log stream, or kill the app.

<img src="/ocean-spark/_media/getting-started-02.png" />

This example uses a JAR embedded in the Spark Docker image and neither reads nor writes data. For a more real-world use case, learn how to [access your own data](ocean-spark/configure-spark-apps/access-your-data).

## What’s Next?

- Learn how to [Manage your Ocean Spark clusters](ocean-spark/product-tour/manage-clusters).
- Learn more in the [Ocean Spark Cluster Overview](ocean-spark/product-tour/view-cluster-details).
