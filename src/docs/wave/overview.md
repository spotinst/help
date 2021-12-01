<meta name="robots" content="noindex">

# Wave Overview

Wave is a management and optimization tool for big data workflows. Running on the Spot platform, Wave enables you to run Apache Spark on Kubernetes without managing servers. Wave provides reliable, automated, and continuously optimized cloud infrastructure for big data workloads resulting in significant time and cost savings.

## Key Features

Wave automates and optimizes infrastructure for big data applications in the cloud. Wave makes it possible for data scientists and data engineers to focus on using data without worrying about infrastructure, while big data platform teams can deploy and operate the infrastructure for big data at a fraction of the cost and operational burden.

Wave meets you where you are. Wave includes pre-built integrations with Spark Operator, Jupyter Enterprise Gateway, Spark History Server, and spark-submit. Wave configures Jupyter Notebooks while executing Spark applications on Kubernetes remotely. With spark-submit support built in, there is no need to learn new workflows. Some of the key Wave features include:

- Optimization engine - Leveraging advanced AI algorithms, Wave automatically chooses the best infrastructure to run an application at the highest performance, matching CPU, RAM and other resources in real-time to application specifications.
- Spark application right-sizing - Wave compares compute and memory configurations with actual usage to right-size applications and reduce overprovisioning, avoiding CPU throttling and out-of-memory conditions.
- Container bin packing - Wave optimizes resource allocations via bin packing algorithms that recognize when multiple containers should be placed on the same instances or when they should be spread across a group.
- Warm startup - Wave maintains automatic headroom so Spark applications can run instantaneously without waiting for infrastructure to provision new capacity.

## Kubernetes for Spark

Wave is the ideal solution for cloud-native big data. With Wave, you can bring infrastructure management under the same roof with Kubernetes as your big data cluster orchestrator:

- Deploying multiple workloads on the same Spark cluster
- Reducing dependency management when moving workloads to different environments
- Maximizing node utilization and cluster efficiency

## Conceptual Overview

Wave utilizes Ocean’s serverless architecture, enabling you to run Spark workloads on Kubernetes without worrying about the underlying infrastructure. The diagram below shows an overview of the Wave architecture.

<img src="/wave/_media/overview-01.png" width="476" height="330" />

- Wave UI Control Plane: Provides the user full visibility of monitoring, system health, and cost analysis data and enables management of Wave clusters.
- Wave Cluster: Kubernetes cluster environment including the Wave and Ocean execution components.
- Cloud Control Plane: This layer represents the spot instances where the system components are running.

### Data Flow Overview

The illustration below describes the basic data flow and control at an overview level.

<img src="/wave/_media/overview-02.png" width="785" height="508" />

- Wave Console: The user manages Wave clusters in the Wave console and views monitoring and cost analysis information.
- SparkSubmit: The user initiates Spark jobs using SparkSubmit. SparkSubmit sends the job via Kubernetes API to the SparkDriverPod.
- SparkDriverPod:
  - Driver: Reads from the Spark Config and sends commands to the Spark ExecutorPod and the Spark Data.
  - StorageSync: Writes events to an S3 bucket.
- SparkExecutorPod: Executes commands on the Spark data.
- Spark Data: The subject data for Spark can be internal or external to the cluster.
- WaveOperator: Controls operations and encapsulates job submits such as Spark runs.
- SparkHistoryServer: Provides Spark history for the Wave console.
- WaveSparkApplication: Manages monitoring information for the Wave console.

## What’s Next?

- If you are new to Spot, [connect your cloud provider](connect-your-cloud-provider/aws-account) to Spot.
- If you are already a Spot user, go ahead and [Get Started with Wave](wave/getting-started/).
