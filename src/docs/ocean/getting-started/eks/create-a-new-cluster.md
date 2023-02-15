# Create a New EKS Cluster

In this procedure, you complete the steps to create an Amazon EKS cluster directly from the Spot Console and an Ocean object to manage the cluster worker nodes.

## Prerequisites

- Ensure you have an IAM user in your AWS account with both Console and Programmatic Access credentials. If you do not have one, you can follow this [AWS procedure](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) to create one or refer to your account administrator for the necessary permissions.
- [Connect your AWS account to Spot](connect-your-cloud-provider/aws-account).
- Install [awscli](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) 1.16.18+ and configure [AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config).
- Install [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) (Amazon EKS-vended).
- Install [aws-iam-authenticator](https://docs.aws.amazon.com/eks/latest/userguide/install-aws-iam-authenticator.html) (only for awscli versions below 1.16.156).

## Get Started

1. In the left menu of the Spot Console, click Ocean/Cloud Clusters, and click Create Cluster.

<img src="/ocean/_media/create-cluster.png" />

2. When the Create Ocean Cluster page appears, you will need to choose a use case template. Under Create a New Cluster, click Create an EKS Cluster.

<img src="/ocean/_media/create-new-eks.png" width="500" height="320" />

Complete the steps described in the Create Cluster page. The steps are also described below.

## Step 1: Create a Spot Token or Use an Existing One

Click Generate Token or use an existing Spot token. If you already have a token, you can paste it in the text box. The Spot token will be used later in the process to authenticate the Ocean Controller with Ocean SaaS, so be sure to save a copy in a safe place.

<img src="/ocean/_media/new-eks-step1.png" />

## Step 2: Set the Generated EKS Cluster Parameters

Fill in general details including Cluster Name, Region, and the Key Pair used for the EC2 instances.

<img src="/ocean/_media/new-eks-step2.png" width="600" height="196" />

## Step 3: Provision Resources

Provision the cluster resources using a CloudFormation template.

1. Use existing VPC & Subnets. Mark this box to launch CloudFormation with your existing VPC & Subnets. Leave unchecked to launch within a new VPC that CloudFormation will create for you.
   2.Click Launch CloudFormation Stack.

<img src="/ocean/_media/new-eks-step3.png" />

To launch the stack mark the checkbox at the bottom confirming CloudFormation will create IAM resources, and click Create stack.

<img src="/ocean/_media/new-eks-step3-a.png" />

Before you can continue to the next step, CloudFormation must complete creation of all of the resources in the EKS stack. You can check the status on the CloudFormation page that opens.

## Step 4: Install the Ocean Controller on the Newly Created EKS Cluster

1. Connect your workstation to the EKS cluster by copying the command shown in Step 4 of the Create page and running it in your command-line interface. Note that the command must include the Ocean Cluster Name that you entered previously.

> **Tip**: Click on the command to copy it.

<img src="/ocean/_media/new-eks-step4-c.png" />

2. Verify that kubectl is connected to your EKS cluster by running the next command shown:
   `kubectl get svc`
3. To install the controller on the EKS cluster, run the predefined script from your command line.

(Optional) To install the [Ocean Prometheus Exporter](ocean/tools-and-integrations/prometheus/scrape), mark the checkbox. Validate that the [Configure Prometheus](ocean/tools-and-integrations/prometheus/) step is complete.

<img src="/ocean/_media/new-eks-step4-d.png" />

## Step 5: Update AWS Authentication ConfigMap

1. Download the AWS authenticator configuration map:
   `curl -O https://amazon-eks.s3-us-west-2.amazonaws.com/1.10.3/2018-06-05/aws-auth-cm.yaml`
2. In the `aws-auth-cm.yaml` file, replace the `<ARN of instance role (not instance profile)>` snippet with the `NodeInstanceRole` value from the Outputs tab of EKS cluster CloudFormation Stack.
3. Apply the updated `aws-auth-cm.yaml` to the cluster:
   `kubectl apply -f aws-auth-cm.yaml`

> **Note**: Do not modify any other lines in this file.

<img src="/ocean/_media/new-eks-step5.png" />

That's it! Ocean will now manage the worker nodes, optimizing cluster resource utilization and maximizing savings with Spot instances.

## Troubleshooting

If you receive the error "aws-iam-authenticator": executable file not found in \$PATH, then your kubectl is not configured for Amazon EKS. For more information, see [Configure kubectl for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/configure-kubectl.html).
You can list your cluster nodes with the following command:
`kubectl get nodes`.

- Learn more about [eksctl](https://github.com/spotinst/weaveworks-eksctl).
