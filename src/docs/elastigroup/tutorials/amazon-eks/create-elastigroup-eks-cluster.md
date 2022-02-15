<meta name="robots" content="noindex">

# Create Elastigroup EKS Cluster

This guide covers the requirements to launch Amazon EKS and create an Elastigroup to manage the underlying EC2 Instances.

## Prerequisites

- [kubectl (Amazon EKS-vended)](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
- [awscli 1.16.18+](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- [aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/configure-kubectl.html)

## Step 1: Create an Amazon EKS Cluster and an Elastigroup

To create an EKS cluster and an Elastigroup, launch the CloudFormation template with the link below, complete the parameters in the template, and click Create.

### For existing EKS Clusters

Select 'Connect Existing EKS Cluster' from the creation use case page. Fill in the required details:

- Elastigroup name
- Select the AWS Region your EKS cluster resides in
- Select the Autoscaling Group associated with your existing EKS cluster

## Step 2: Configure Worker Nodes to connect the EKS Cluster

- Download the EKS cluster configuration using the following command:
  ```
  aws eks update-kubeconfig --name $CLUSTER_NAME
  ```
- Connect kubectl to your EKS cluster
  ```
  kubectl get svc
  ```
- Install the [Ocean Controller](ocean/tutorials/spot-kubernetes-controller/)

## Step 3: Update AWS Authentication Config-Map

- Download the AWS authenticator configuration map
  ```
  curl -O https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-06-05/aws-auth-cm.yaml
  ```
- In the aws-auth-cm.yaml file, replace the `<ARN of instance role (not instance profile)>` snippet with the `NodeInstanceRole` value from the Outputs tab of EKS cluster CloudFormation Stack.
- Apply the updated aws-auth-cm.yaml to the cluster.
  ```
  kubectl apply -f aws-auth-cm.yaml
  ```

Do not modify any other lines in this file.

That's it! Elastigroup will now manage the worker nodes, optimizing cluster resource utilization and maximizing savings with Spot instances.
In case of a previously existing cluster, we recommend down-scaling existing ASGs in AWS to 0.

## Troubleshooting

- If you receive the error `"aws-iam-authenticator": executable file not found in $PATH`, then your kubectl is not configured for Amazon EKS. For more information, see [Configure kubectl for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/configure-kubectl.html).
- You can list your cluster nodes with the following command:
  ```
  kubectl get nodes
  ```
