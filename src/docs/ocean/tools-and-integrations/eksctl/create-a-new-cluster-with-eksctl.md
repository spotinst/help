# Create a new Cluster with eksctl

In this procedure, you will create an Ocean Kubernetes cluster with [eksctl](https://eksctl.io/) and migrate existing unmanaged nodegroups into Ocean-managed ones so you can spend more time with other tasks instead of managing infrastructure.

## Prerequisites

- Ensure you have an [IAM user](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) in your AWS account with both Console and Programmatic Access credentials.
- [Connect your AWS account to Spot](connect-your-cloud-provider/aws-account).
- Install [awscli](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) v2.0 or later and [configure AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config). If you already have awscli installed, run `aws --version` to verify the version.
- Install [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) (provided by Amazon EKS).
- If you are going to use `spotctl` commands, [install spotctl](https://github.com/spotinst/spotctl#getting-started).

## Configure your Spot Credentials

To configure your Spot credentials using environment variables, run the following commands.

```sh
$ export SPOTINST_TOKEN=<spotinst_token>
$ export SPOTINST_ACCOUNT=<spotinst_account>
```

Alternatively, you can configure your Spot credentials using a `spotctl` command or manually create an INI formatted file. For more information, see the `spotctl` [Getting Started](https://github.com/spotinst/spotctl#getting-started).

## Configure your AWS Credentials

To use environment variables, run the following commands.

```sh
$ export AWS_ACCESS_KEY_ID=<aws_access_key>
$ export AWS_SECRET_ACCESS_KEY=<aws_secret_access_key>
```

Alternatively, you can use the AWS credentials file. For more information, see [Quick Configuration](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config) with aws configure.

## Install eksctl

1. Download and extract the `eksctl` binary with the following command from the spotinst eksctl github repo.

```sh
$ curl -sfL https://spotinst-public.s3.amazonaws.com/integrations/kubernetes/eksctl/eksctl.sh | sh
```

2. Move the extracted binary.

```sh
$ sudo mv ./bin/eksctl /usr/local/bin && rm -rf ./bin
```

3. Test that your installation was successful with the following command.

```sh
$ eksctl version
```

## Create your EKS Cluster and Worker Nodes

### Using CLI Flags

Create your cluster and worker nodes with the following command. Replace the example values with your own values.

```sh
$ eksctl create cluster \
    --name prod \
    --nodegroup-name standard-workers \
    --spot-ocean
```

The spot-ocean command-line flag enables Ocean integration.

### Using Config Files

Alternatively, you can create a cluster using configuration files.

1. Create a `cluster.yaml` file to hold your cluster and worker nodes configuration.
   The `spotOcean: {}` section below enables Ocean integration. This section can remain empty, using all defaults, or if you'd like to configure your Ocean integration, create a `cluster.yaml` file with the following configuration:

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig
metadata:
 name: prod
 tags:
   creator: bob
   environment: prod

spotOcean:
  strategy:
    utilizeReservedInstances: true
    fallbackToOnDemand: true

nodeGroups:
 - name: standard-workers
   [... nodegroup standard fields; ssh, tags, etc.]
   spotOcean:
     strategy:
      # Percentage of Spot instances that would spin up from the desired
      # capacity.
       spotPercentage: 100

     autoScaler:
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
           numOfUnits: 1
     compute:
       instanceTypes:
        # Instance types allowed in the Ocean cluster.
       - t2.large
       - c5.large
```

2. Create your Amazon EKS cluster and worker nodes with the following command.

```sh
$ eksctl create cluster -f cluster.yaml
```

> **Tip**: Cluster provisioning usually takes between 10 and 15 minutes.

## Verifications

Perform the following steps to verify your `kubectl` and Ocean controller installations. These steps are optional.

1. When your cluster is ready, enter the command below to test that your `kubectl` configuration is correct.

```sh
$ kubectl get svc
NAME           TYPE      CLUSTER-IP EXTERNAL-IP PORT(S) AGE
svc/kubernetes ClusterIP 10.100.0.1 <none>      443/TCP 1m
```

> **Tip**: If you receive the error `aws-iam-authenticator`: executable file not found in `$PATH`, your `kubectl` is not configured for Amazon EKS. For more information, see [Installing aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html).

2. Enter the command below to test the installation of the Ocean controller.

```sh
$ kubectl get deployment --namespace kube-system
NAME                                   READY UP-TO-DATE AVAILABLE AGE
spotinst-kubernetes-cluster-controller 1/1   1          1         5m
```

That's it! Your Ocean cluster is up and will now ensure the most cost-effective capacity and sizing possible for your cluster.

## What's Next?

Learn how to [Connect an Existing Cluster](ocean/tools-and-integrations/eksctl/join-an-existing-cluster) to Ocean using eksctl.
