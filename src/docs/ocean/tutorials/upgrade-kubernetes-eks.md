# Upgrade Kubernetes Version in an Ocean EKS Cluster

This page describes the procedures for upgrading the Kubernetes version in an Ocean cluster.

After you have completed all the steps described, all new nodes launched by Ocean will be launched with the new Kubernetes version.

## Step 1: Upgrade your EKS Control Plane Version

You can upgrade the [EKS control plane](https://docs.aws.amazon.com/eks/latest/userguide/update-cluster.html) in AWS. When the upgrade is complete, complete the following step.

## Step 2: Update Nodes to the Same Kubernetes Version as your Control Plane

After the EKS control plane is upgraded, you need to change the AMI in Ocean, based on the Kubernetes version you upgraded. In the AWS documentation, you can view the list of [EKS Optimized AMIs](https://docs.aws.amazon.com/eks/latest/userguide/eks-optimized-ami.html).

If you use the same AMI for all of your workloads, you should change the AMI on the Ocean cluster level [(Default VNG/ Template VNG)](ocean/features/vngs/?id=default-vng). You can do this in the Spot console or in the [Spot API](https://docs.spot.io/api/#operation/OceanAWSClusterUpdate).

**If you are using this method make sure that the AMI value in the VNG is null.**

If you prefer to use a different AMI per VNG you can change the value in the Spot Console or in the Spot API.

>**Tip: You should change the AMI of custom VNGs if they use different AMIs than the default VNG.**

## Step 3: Roll the Cluster

The [cluster roll](ocean/features/roll?id=create-a-roll) process enables you to perform changes in order to align cluster infrastructure with a new image, user data, or security groups, without having to disable the Ocean autoscaler or manually detach nodes in the cluster.

Rolls can be triggered for the whole Ocean cluster, per VNG, or per instance. You may trigger the process using the [Spot console](ocean/features/roll?id=start-a-cluster-roll) or the [API](https://docs.spot.io/api/#operation/oceanAwsRollInit).

Once the roll is complete, all of the nodes in the cluster will have the new Kubernetes version.

>**Tip**: New Kubernetes versions sometimes introduce significant changes. Therefore, it is recommended to test the behavior of your applications in a Dev cluster against a new Kubernetes version before you update your production clusters.

## What's Next?
