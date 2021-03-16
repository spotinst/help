## Get Started with Wave

The Wave environment includes the Wave components installed in a Kubernetes cluster integrated with Spot Ocean. The cluster creation and deployment of the whole stack is really simple using the spotctl command-line tool.

## Stages of Wave Setup

The Wave setup has the following major parts:
- Prerequisites
- Create a Wave Cluster
- Submit Spark Application with Spark-submit
- Submit Spark Application with Spark Operator
- Install Jupyter Notebook
- View Spark History

Each of these parts is described below.

## Prerequisites

Before you can start the set up a Wave cluster, you will need to have the following in place:
- Your AWS account connected to Spot
- Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) (provided by Amazon EKS) installed
- Command-line tool spotctl installed (See instructions below)
- Apache Spark and Java installed locally

### Install spotctl

Complete the [spotctl installation procedure](https://github.com/spotinst/spotctl#installation) on the Spot Github site.

## Create a Wave Cluster

1. Create a cluster.yaml file to hold your Wave cluster configuration. Below is an example of the cluster.yaml, with a cluster named “wave-abcde”. The `spotOcean: {}` section below enables Ocean integration.

```YAML
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
  name: wave-abcde
  tags:
    creator: somebody@netapp.com
    environment: big-data-labs
  region: us-west-2


nodeGroups:
  - name: standard-workers
    minSize: 1
    ssh:
      allow: true # will use ~/.ssh/id_rsa.pub as the default ssh key
    spotOcean:

      metadata:
        # these metadata fields will be deprecated in the future, but
        # are necessary for autoscaling today
    	 defaultLaunchSpec: true
    	 useAsTemplateOnly: false


      strategy:
        # Percentage of Spot instances that would spin up from the desired
        # capacity.
        spotPercentage: 60

        # Allow Ocean to utilize any available reserved instances first before
        # purchasing Spot instances.
        utilizeReservedInstances: true

        # Launch On-Demand instances in case of no Spot instances available.
        fallbackToOnDemand: true

      autoScaler:
        # Enable the Ocean autoscaler.
        enabled: true

        # Cooldown period between scaling actions.
        cooldown: 300

        # Spare resource capacity management enabling fast assignment of Pods
        # without waiting for new resources to launch.
        headrooms:
            # Number of CPUs to allocate. CPUs are denoted in millicores, where
            # 1000 millicores = 1 vCPU.
          - cpuPerUnit: 2

            # Number of GPUs to allocate.
            gpuPerUnit: 0

            # Amount of memory (MB) to allocate.
            memoryPerUnit: 64

            # Number of units to retain as headroom, where each unit has the
            # defined CPU and memory.
            numOfUnits: 2
      compute:
        instanceTypes:
          # Instance types allowed in the Ocean cluster. Cannot be configured
          # if the blacklist is configured.
          whitelist: # OR blacklist
            - t2.large
            - c5.large
```

2. To create the cluster, enter the following command:

`$ spotctl wave create -f cluster.yaml`

### Creation Process in Background

After you enter the creation command, the following major events take place:
1. EKS Cluster Creation. The entire cluster creation process takes 20-25 minutes. You will see a moving bar on the right indicating that the process is progressing in the background and the EKS cluster is being created. If you examine your AWS console, you will see CloudFormation activity.
2. Controller Installation. After the EKS cluster is created, the Spot Kubernetes Controller is installed. The cluster is registered with Spot and will be visible in the Spot console.
3. Wave Operator Installation. The wave-operator is installed and the wave components are registered.

### View Cluster State

To view the state of the newly created cluster, do the following:
1. Get the cluster-id by running the command below. A list of all the Wave clusters appears.

`$ spotctl wave get cluster
ID NAME STATE CREATED UPDATED
wc-ade635c8e90542d4 natef-1615242717 AVAILABLE 3 days ago 9 seconds ago
`
2. In the list of clusters, find the one just created and copy the cluster-id.
3. Enter the command below using the relevant cluster-id, for example:

`spotctl wave describe cluster --cluster-id wc-ade635c8e90542d4`

This will return a full JSON descriptor of the cluster.
4. To see component information as shown in the table below, use the following command:

`spotctl wave describe components --cluster-id wc-ade635c8e90542d4`

The output will show metadata about the four Wave components created. The first two columns of the `describe components` output show the component conditions, which will eventually show that they are fully available, i.e., the components will have the condition “Available=True”.

```
component           	condition
--------------------	--------------------
enterprise-gateway  	Available=True
--------------------	--------------------
ingress-nginx       	Available=True
--------------------	--------------------
spark-history-server	Available=True
--------------------	--------------------
spark-operator      	Available=True
--------------------	--------------------
```

The next columns of the `describe components` output show the properties (if applicable) of the particular component. The login information is also available in the Cluster Overview page of the Wave Console.

```
property            	value
 --------------------	--------------------
 Endpoint            	acf612903d5d344afb015d0ff3c0ace3-1464411549.us-west-2.elb.amazonaws.com/gateway
 Token               	GxRIX8nZiqHYmkwTu6Gf2AluP1mx
 --------------------	--------------------

 --------------------	--------------------
 Endpoint              acf612903d5d344afb015d0ff3c0ace3-1464411549.us-west-2.elb.amazonaws.com/
 LogDirectory        	s3a://spark-history-wave-abcde
 Password            	26j9njnv
 SparkVersion        	3.0.1
 User                	spark
 --------------------	--------------------

 --------------------	--------------------
```

The enterprise-gateway and the spark-history-server show properties such as the HTTPS endpoint and access credentials.

### View Cluster State with Helm

You can also check the status of the system with Helm.  There are six charts installed by wave.

```
❯ helm list -A
NAME                	    CHART                        APP VERSION
cert-manager              cert-manager-v1.1.0  	      v1.1.0
spotctl-wave-operator     wave-operator-0.1.7  	      0.1.7
wave-enterprise-gateway   enterprise-gateway-2.3.0
wave-ingress-nginx  	    ingress-nginx-3.7.1  	      0.40.2
wave-spark-history-server spark-history-server-1.4.0   2.4.0
wave-sparkoperator        sparkoperator-0.8.4          v1beta2-1.2.0-3.0.0
```

The Spark History Server has created an S3 bucket to store spark application event logs.

Check for a spark history bucket for your cluster by running: `aws s3 ls`  

The name of the bucket will be: `spark-history-[cluster name from yaml file]`

When you create a Spark application from any heritage, the driver pod has a second container that writes event logs to S3. When the Spark application completes, there should be a new file in your S3 bucket subdirectory.

## Submit Spark Application with Spark-submit

Try out the system by using spark-submit to initiate a job in cluster mode. This example runs the trivial “spark-pi” computation that is included in the [Spark GitHub repository](https://github.com/apache/spark/blob/master/examples/src/main/java/org/apache/spark/examples/JavaSparkPi.java). You will also need the Kubernetes master API endpoint.

Usually, your Spark Scala code is included in the Docker image that you are using.  In this case, a Spark-3.0.0 Docker image is hosted in a public NetApp repository.  You can run one of the Spark examples found there.

The Wave installation is configured with a namespace `spark-jobs`, with a serviceAccount `Spark` that has the required Kubernetes access rights. Enter the following:

```
spark-submit \
--master k8s://${K8S_ENDPOINT} \
--deploy-mode cluster \
--name spark-submit-pi \
--conf spark.executor.instances=1 \
--conf spark.executor.memory=512m \
--conf spark.kubernetes.container.image=public.ecr.aws/l8m2k1n1/netapp/spark:3.0.0 \
--conf spark.kubernetes.authenticate.driver.serviceAccountName=spark \
--conf spark.kubernetes.namespace=spark-jobs \
--class org.apache.spark.examples.SparkPi \
local:///opt/spark/examples/jars/spark-examples_2.12-3.0.0.jar 20000
```

## Submit Spark Application with Spark Operator

The Spark Operator is available on the Wave cluster. To submit the same spark-pi application as above, apply the following Spark application yaml definition (in spark-pi.yaml):

```YAML
apiVersion: "sparkoperator.k8s.io/v1beta2"
kind: SparkApplication
metadata:
  name: spark-operator-pi
  namespace: spark-jobs
spec:
  type: Scala
  mode: cluster
  image: public.ecr.aws/l8m2k1n1/netapp/spark:3.0.0
  imagePullPolicy: IfNotPresent
  mainClass: org.apache.spark.examples.SparkPi
  mainApplicationFile: "local:///opt/spark/examples/jars/spark-examples_2.12-3.0.0.jar"
  sparkVersion: "3.0.0"
  arguments:
  - "20000"
  restartPolicy:
    type: Never
  driver:
    cores: 1
    coreLimit: "1200m"
    memory: "512m"
    serviceAccount: spark
  executor:
    cores: 1
    instances: 2
    memory: "512m"
```

This yaml definition can be applied to the cluster using the following kubectl command:

`kubectl apply -f spark-pi.yaml`

## Install Jupyter Notebook
### Use pip

The easiest way to get started with Jupyter is to install it with pip according to the [instructions](https://jupyter.org/install).

`pip install notebook`

### Connect Enterprise Gateway

Once you have the notebook client, you can connect to the enterprise gateway in the Wave cluster.  
1. Get the endpoint for the gateway using the `spotctl wave describe` command.  
2. Use the command below to connect.

`export GATEWAY=http://ab6178bfbe4a54c98a259523c4a9bc98-875627885.us-west-2.elb.amazonaws.com/gateway`

### Use Existing Notebook

Alternatively, you can use a notebook that already exists on your local machine.  (For more information, see this [example](https://gist.github.com/ntfrnzn/7c5befcde7d659988c03db9cc365f16c).)  

Navigate to the folder containing the notebook and run:

```
$ export GATEWAY=https://acf612903d5d344afb015d0ff3c0ace3-1464411549.us-west-2.elb.amazonaws.com/gateway
$ export JUPYTER_GATEWAY_VALIDATE_CERT=no
$ export JUPYTER_GATEWAY_AUTH_TOKEN=GxRIX8nZiqHYmkwTu6Gf2AluP1mx
$ jupyter notebook  \
--gateway-url=${GATEWAY} --GatewayClient.request_timeout=600
```

The GatewayClient.request_timeout parameter specifies how long Jupyter will wait for the Spark application running on the cluster to start. We recommend setting this parameter to allow time for the cluster to scale up if necessary.

Now the notebook interface is running in your browser, and is communicating with a Jupyter server running on localhost.

When you open or start a Spark notebook, Jupyter communicates with the enterprise gateway and starts the kernel in a driver pod in the cluster. As you step through the notebook, the spark driver and executors will perform operations.  

To exit the notebook and terminate the Spark application, go to the File menu and select Close and Halt.

## View Spark History

The event logs for all the spark applications have been saved to an S3 bucket, and the history server is reading from that bucket. The history server is exposed through an AWS load-balancer, with a self-signed certificate.

To see the endpoint, username, and password, enter the command:

`spotctl wave describe components --cluster-id ${CLUSTER_ID}`

CLUSTER_ID is the ID of your Wave cluster.

The certificate has been issued from the Wave cluster and is unique to this endpoint. The self-signed cert is created with [cert-manager](https://cert-manager.io/docs/) running in the cluster. When you try to reach the page, some browser warnings may appear, which you should cancel.

## What’s Next?
- Learn how to Manage your Wave clusters.
- Learn more about the information available in the [Wave Cluster Overview](wave/wave-overview).
