<meta name="robots" content="noindex">

#  EC2 Instances Created by Ocean Cannot Join EKS Cluster

## Issue

EC2 instances created by Ocean cannot join the EKS cluster. The instance is successfully provisioned but fails to register with the EKS cluster. As a result, nodes are not created, and pods remain in a `Pending` state.

## Cause

Ocean lets you select an instance profile at the virtual node group (VNG) level. When you select an instance profile, the instance uses the IAM role attached to the profile.
If this IAM role is not configured in the EKS cluster’s `aws-auth` ConfigMap, nodes using this role cannot join the cluster. This is the primary reason for nodes failing to register with the EKS cluster.

## Resolution

Assuming the attached IAM role has all the required permissions for EKS, the cluster administrator must modify the `aws-auth` ConfigMap to pre-map the IAM role.
<p>  </p>
Follow these steps to ensure that the EC2 instances created by Ocean successfully join the EKS cluster, enabling proper scheduling of pods:


###  Step 1: Collect Required Information

1.  To update the `aws-auth` ConfigMap, collect the following details:
    *  **EKS Cluster Name**.
    *  **AWS Account ID**.
    *  **IAM Role ARN** attached to the selected Instance Profile.

2.  Run the following command to retrieve the IAM Role ARN:

   ```sh
   aws iam get-instance-profile --instance-profile-name <INSTANCE_PROFILE_NAME>
   ```
   Replace `<INSTANCE_PROFILE_NAME>` with the name of the Instance Profile selected in the VNG.

###  Step 2: Pre-map IAM Role in `aws-auth` ConfigMap

1.  Use the following `eksctl` command to create the IAM identity mapping:
     ```sh
     eksctl create iamidentitymapping \  
       --cluster <EKS_CLUSTER_NAME> \  
       --arn arn:aws:iam::<AWS_ACCOUNT_ID>:role/<NODE_IAM_ROLE> \  
       --username system:node:{{EC2PrivateDNSName}} \  
       --group system:bootstrappers \  
       --group system:nodes
     ```
2.  Replace the placeholders with your actual values:
    *  `<EKS_CLUSTER_NAME>`: Your EKS cluster name
    *  `<AWS_ACCOUNT_ID>`: Your AWS account ID
    *  `<NODE_IAM_ROLE>`: The IAM Role ARN retrieved in the previous step

## Additional Notes

*  Ensure the IAM role has the necessary permissions to join and operate within the EKS cluster.
*  To validate that the node has successfully joined the cluster, run:
  
    ```sh
    kubectl get nodes
    ```
  The newly added nodes should appear in the list.



