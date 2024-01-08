# Create an Ocean Spark Cluster

There are several ways to deploy an Ocean Spark cluster:

- Create a new Kubernetes cluster from scratch
- Import an existing Kubernetes cluster to Ocean Spark
- Import an existing Ocean cluster to Ocean Spark

Each method is described below. Choose the method right for you.

## Create a New Kubernetes Cluster from Scratch

### Using spotctl (AWS only)

1. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (and configure it for your AWS account), the Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) utility, and the [spotctl command-line tool](https://github.com/spotinst/spotctl#installation).

2. Create a cluster by running the command:

```
$ spotctl ocean spark create cluster --region $YOUR_REGION --cluster-name $MY_CLUSTER_NAME
```

This command will create a new EKS cluster, a new VPC, subnets, and other resources required to make Ocean Spark functional.

### Using Terraform

**Option 1**: Deploy Ocean Spark cluster in an existing VPC.
Follow [this example on AWS](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-private-vpc) or [this example on GCP](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-from-vpc) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

**Option 2**: Deploy Ocean Spark cluster in a new VPC.
Follow [this example on AWS](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/from-scratch) or [this example on GCP](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-from-scratch) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

### Additional Method

You can also follow the documentation on how to get started with Ocean, and then use the method described below to import an existing Ocean cluster into Ocean Spark.

## Import an Existing Kubernetes Cluster to Ocean Spark

### Using Terraform

Follow [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/import-eks-cluster) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest) to import an existing EKS cluster (AWS) into Ocean Spark. To import an existing GKE cluster (GCP), use [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/gcp-import-gke-cluster).

### Additional Method

You can also follow the documentation on [how to get started with Ocean](ocean/getting-started/), and then use the method described below to import an existing Ocean cluster into Ocean Spark.

## Import an Existing Ocean Cluster to Ocean Spark

Ocean Spark leverages Ocean under the hood, so it’s easy to import an existing Ocean cluster into Ocean Spark. Running this step will install a few additional pods on your Ocean cluster. These pods will enable the features related to monitoring and optimization specific to Apache Spark.

### Using spotctl (AWS only)

1. Make sure you can connect to the target Kubernetes cluster with the Kubernetes [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) utility. On AWS, install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (and configure it for your AWS account).
2. Install the [spotctl command-line tool](https://github.com/spotinst/spotctl#installation).
3. Create a cluster by running this command, where the Ocean cluster ID is of the format o-XXXXXXXX:

```
$ spotctl ocean spark create cluster --cluster-id $YOUR_OCEAN_CLUSTER_ID
```

### Using Terraform

Follow [this example](https://github.com/spotinst/terraform-spotinst-ocean-spark/tree/main/examples/import-ocean-cluster) from the [ocean-spark Terraform module](https://registry.terraform.io/modules/spotinst/ocean-spark/spotinst/latest).

## Monitor your Ocean Spark Cluster Deployment

When you start running the script or command to create the cluster, the following major events take place:

* Kubernetes cluster creation (if creating a cluster from scratch). The duration of this step varies depending on the cloud provider, but this can take 20 minutes or more. You may be able to track progress from your cloud provider console.
* Ocean controller installation. The Ocean controller is installed on the cluster. The cluster is then registered with Spot and will be visible in the Spot console (under the Ocean UI).
* Ocean Spark controller installation. The Ocean Spark components are then installed, and the cluster will be visible in the Spot console (under the Ocean Spark UI).

You can view the status of the newly created cluster on the Cluster page of the Ocean Spark console. The cluster status should move from Progressing to Available as the creation completes. Other statuses indicate an error. You can troubleshoot in the list of common issues below.

## Requirements for a Functioning Ocean Spark Cluster

This section provides a list of requirements for an Ocean Spark cluster deployment.

**General Availability** versions are fully enabled for customer usage, ready for production use, and have no restrictions on support. These versions are recommended for the cluster underlying new applications as they provide customers with the most complete range of features and fixes. There is no set time on how long versions remain in the General Availability state; they will be moved to the Deprecated state according to the timetable of the cloud provider tables that are referenced below. 

**Deprecated versions** are fully supported and tested but are not our recommended choice for the cluster underlying new applications. There is no set time on how long versions remain in the Deprecated state; they will be moved to the Retired state according to the timetable of the cloud provider tables that are referenced below. 

**Retired versions** are no longer supported. We require that these clusters are upgraded or replaced. Versions will be moved to the Retired state according to the timetable of the cloud provider tables that are referenced below. Any issues encountered with a Retired cluster underlying your application will not be supported by us, but we will advise you during your update of the cluster to a more suitable version. 

### AWS

- The Kubernetes cluster should use a [version supported by Amazon](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-versions.html). Spot will begin supporting, with General Availability, a version two months after the Amazon EKS release column date listed in that linked table. Spot will treat the version as Deprecated at the End of standard support column date listed in that linked table. Spot will treat the version as Retired at the End of extended support column date listed in that linked table. 
- The VPC subnets should have the [proper tags](https://aws.amazon.com/premiumsupport/knowledge-center/eks-vpc-subnet-discovery/) to be discoverable by Kubernetes:
  - On all subnets: `kubernetes.io/cluster/<eks-cluster-name>: shared`
  - On public subnets: `kubernetes.io/role/elb: 1`
- The instance profile assumed by cluster nodes should have:
  - The [required permissions](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) for EKS
- The permission to create security groups within the VPC
- The cluster nodes should be in a security group that allows them:
  - To connect to one another
  - To reach the Internet
  - To connect to the Kubernetes API (which is in the cluster security group)
- If nodes are run in private subnets, make sure a NAT gateway is available in the cluster to enable egress to the Internet.
- All the Ocean Spark Virtual Node Groups (VNGs) should have access to the same subnets, or at least to the same availability zones (AZs).

### GCP

- The Kubernetes cluster should use a [version supported by GCP](https://cloud.google.com/kubernetes-engine/docs/release-schedule). Spot will begin supporting, with General Availability, a version two months after the Stable - Available column date listed in that linked table. Spot will treat the version as Deprecated six months before the End of life column date listed in that linked table. Spot will treat the version as Retired at the End of life column date listed in that linked table.
- The service account assumed by cluster nodes should have at least the following roles: `monitoring.viewer`, `monitoring.metricWriter`, `logging.logWriter`, and `stackdriver.resourceMetadata.writer`. More details in [this section of GCP doc](https://cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster#use_least_privilege_sa)
- If Spark applications use custom Docker images stored in Container Registry, the node service account should also have `objectViewer` access to the GCS bucket where the Docker images are stored.
- The cluster nodes should be allowed:
  - To connect to one another
  - To reach the Internet
  - To connect to the Kubernetes API
- If the cluster nodes are private, make sure a NAT service is installed in the Cloud Router of the VPC.
- All the Ocean Spark Virtual Node Groups (VNGs) should have access to the same subnets, or at least to the same locations (also called availability zones by analogy with AWS).

### Azure

- The Kubernetes cluster should use a [version supported by Azure](https://learn.microsoft.com/en-us/azure/aks/supported-kubernetes-versions?tabs=azure-cli.). We will begin supporting, with General Availability, a version two months after the AKS GA column date listed in that linked table. We will treat the version as Deprecated at the End of life column date listed in that linked table. We will treat the version as Retired at the Platform support column date listed in that linked table. 

## What’s Next?

Learn how to [submit your first Spark application](ocean-spark/getting-started/run-your-first-app).
