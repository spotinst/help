<meta name="robots" content="noindex">

# Configure Kubectl for EKS & Install Controller

## Prerequisites

Complete the following prerequisites, unless you started with [Running Elastigroup For EKS](elastigroup/tutorials/amazon-eks/create-elastigroup-eks-cluster.md):

- [kubectl (Amazon EKS-vended)](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)
- [awscli 1.16.18+](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
- [aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/configure-kubectl.html)
- Amazon EKS cluster on ElastiGroup exists. If cluster not present, please create using step 1 from [this guide](elastigroup/tutorials/amazon-eks/create-elastigroup-eks-cluster.md).

## Mac Version

```bash
#!/bin/bash
# Configure the following parameters
export CLUSTER_NAME="" # Name of the EKS cluster
export SPOTINST_TOKEN="" # Spot Token
export SPOTINST_ACCOUNT="" # Spot Account ID
export INSTANCE_ROLE_ARN="" # The full ARN of the instance role created (not instance profile
echo "Configuring kubectl to work with the EKS Cluster"
aws eks update-kubeconfig --name $CLUSTER_NAME
kubectl get svc
echo "Installing Spot Kuberenets Controller"
# Downloading and updating configMap.yaml
# This link should be in spotinst public s3 bucket
curl -o configMap.yaml https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/templates/spotinst-kubernetes-controller-config-map.yaml
# Updating configMap.yaml
sed -i '' -e "s@@$SPOTINST_TOKEN@g" configMap.yaml
sed -i '' -e "s@@$SPOTINST_ACCOUNT@g" configMap.yaml
sed -i '' -e "s@@$CLUSTER_NAME@g" configMap.yaml
# Installing controller
kubectl apply -f configMap.yaml
kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml
# Attaching Instances to the group
curl -O https://amazon-eks.s3-us-west-2.amazonaws.com/cloudformation/2018-12-10/aws-auth-cm.yaml
# Updating aws-auth-cm.yaml file
sed -i '' -e "s@@$INSTANCE_ROLE_ARN@g" aws-auth-cm.yaml
kubectl apply -f aws-auth-cm.yaml
echo "Printing cluster Nodes"
sleep 15s
kubectl get nodes
echo "Finished configuring kubectl and installing Spot k8s controller"
```

## Linux Version

```bash
#!/bin/bash
# Configure the following parameters
export CLUSTER_NAME="" # Name of the EKS cluster
export SPOTINST_TOKEN="" # Spot Token
export SPOTINST_ACCOUNT="" # Spot Account ID
export INSTANCE_ROLE_ARN="" # The full ARN of the instance role created (not instance profile)
echo "Configuring kubectl to work with the EKS Cluster"
aws eks update-kubeconfig --name $CLUSTER_NAME
kubectl get svc
echo "Installing Spot Kuberenets Controller"
# Downloading and updating configMap.yaml
# This link should be in spotinst public s3 bucket
curl -o configMap.yaml https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/templates/spotinst-kubernetes-controller-config-map.yaml
# Updating configMap.yaml
sed -i '' -e "s@@$SPOTINST_TOKEN@g" configMap.yaml
sed -i '' -e "s@@$SPOTINST_ACCOUNT@g" configMap.yaml
sed -i '' -e "s@@$CLUSTER_NAME@g" configMap.yaml
# Installing controller
kubectl apply -f configMap.yaml
kubectl apply -f https://s3.amazonaws.com/spotinst-public/integrations/kubernetes/cluster-controller/spotinst-kubernetes-cluster-controller-ga.yaml
# Attaching Instances to the group
curl -O https://amazon-eks.s3-us-west-2.amazonaws.com/cloudformation/2018-12-10/aws-auth-cm.yaml
# Updating aws-auth-cm.yaml file
sed -i '' -e "s@@$INSTANCE_ROLE_ARN@g" aws-auth-cm.yaml
kubectl apply -f aws-auth-cm.yaml
echo "Printing cluster Nodes"
sleep 15s
kubectl get nodes
echo "Finished configuring kubectl and installing Spot k8s controller"
```

## Troubleshooting

If you receive the error `"aws-iam-authenticator": executable file not found` in \$PATH, then your kubectl is not configured for Amazon EKS.

You can list your cluster nodes with the following command:
`kubectl get nodes`
