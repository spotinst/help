# Connect an Existing EKS Cluster

Ocean is a managed infrastructure service for Kubernetes that automatically adjusts infrastructure capacity and size to meet the needs of pods, containers, and applications.   

To enable Ocean to start managing your EKS cluster, you need to connect the cluster to Spot. This page includes the procedures to connect an existing EKS cluster to Ocean using the Spot console. 

## Prerequisites 

* [Connect your AWS account to Spot](https://docs.spot.io/connect-your-cloud-provider/aws-account). 
* Have an EKS cluster up and running. 

## Add Required Permissions  

To import the configurations of your EKS Node Groups, ensure the following permissions are added to the Spot Policy associated with the role of the Spot.io account. 

![connect-eks-cluster-02](https://github.com/spotinst/help/assets/106514736/60e6eb7b-e32f-4790-af64-9162c2ff54e5)

1. Go to the IAM role in your AWS account that is associated with the Spot.io account. It can be found in the [Account](https://console.spotinst.com/spt/auth/signIn) details. 
2. In the AWS IAM console, add the following permissions to your Spot policy. These permissions are used to get the Labels and Taints of the Node Groups. 

```
{ 
 "Sid": "AccessEks", 
 "Action": ["eks:ListClusters", "eks:DescribeNodegroup", "eks:ListNodegroups"], 
 "Effect": "Allow", 
 "Resource": ["*"] 
} 
```

## Get Started 

To connect an existing cluster, complete the following steps:  

1. In the left menu of the Spot Console, choose Ocean. 
2. Click Cloud Clusters and then click Create Cluster. 
 
![connect-eks-cluster-04](https://github.com/spotinst/help/assets/106514736/fcfe9c4a-b079-453e-b284-d2049c501d50)

3. Click Elastic Kubernetes Service (EKS) and Continue.
   
![connect-eks-cluster-01](https://github.com/spotinst/help/assets/106514736/23df760f-2f0c-439b-a63b-53839bfe128c)

## Step 1: Choose EKS Cluster 

The Ocean Cluster Name that is created in this step will also be used as a Cluster Identifier. 

 <img width="621" alt="connect-eks-cluster-00" src="https://github.com/spotinst/help/assets/106514736/d732e75d-cf73-40fb-80c7-9ff9783aa627">

1. Choose the region where the cluster is running.  
2. Choose the EKS cluster you wish to import. The Ocean Cluster Name will automatically generate according to the EKS cluster name and can be edited. For a cluster that you are importing, we recommend that you give it the same name as the original cluster. This will make it easier to identify the Ocean cluster associated with your EKS cluster . 
3. The Ocean name will be also used as a Cluster Identifier which is the unique key used to connect between the Ocean SaaS and the Kubernetes cluster. Click Next.

## Step 2: VNG Template 

In this step, choose one of your EKS Node Groups you want to use as a [template](https://docs.spot.io/ocean/features/vngs/?id=default-vng) for your other custom [VNGs](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups). 

![connect-eks-cluster-03](https://github.com/spotinst/help/assets/106514736/bf017c1a-d942-4850-8fd0-cb796ed47c2b)


The selected EKS Node Group’s configuration will be imported to the template VNG and will be used for other custom VNGs, unless explicitly set in a VNG. For example, all VNGs inherit the image set of the EKS Node Group you imported to the Template VNG unless the custom VNG is set to a different image. 


### Template Configuration 

Complete the VNG template configuration as described below. 

1. Choose a Node Group in the dropdown.  
2. Confirm or change the configuration in the Template Configuration if needed. 

### Instance Types 

All instance types are selected by default to grant Ocean the ability to choose the best types for your workload.  It is recommended to use the automatic configurations.  

There are three options:

* Automatic Selection (recommended) - All instance types are selected to grant Ocean the ability to choose the best types for your workload.  
* Manual Selection – Select the instance family/types for the Ocean cluster’s whitelist. 
* [Advanced Selection](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=select-instance-types-with-advanced-filters) – Use advanced filters to select specific instance families. 

Use the [Instance Type guide](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types?id=let-ocean-manage-machine-types) for more information. 

#### Tags  

Set the tags of the node group. Ensure the EKS required tag appears - 

```
"kubernetes.io/cluster/<clusterName>":"owned". 
```

## Step 3: Virtual Node Groups 

In this step, you can import the existing Node Groups to Ocean by importing their configuration to [Ocean custom VNGs](https://docs.spot.io/ocean/features/vngs/?id=virtual-node-groups). 

### Consolidate Node Groups into a Single VNG 

There are two ways to consolidate node groups: 

**Node groups with different capacity types (Spot and OD)** 

Using Ocean VNGs, you can use only one VNG by setting the Spot percentage so that a specific percentage of the infrastructure will run on an OD instance and a specific percentage on a Spot instance. By default, the VNG is running on spot instances, and in case no spot is available it would fall back to OD instances. 

 ![connect-eks-cluster-09](https://github.com/spotinst/help/assets/106514736/481a0107-55e2-42fa-acc1-6a10ff0772a2)

**Node groups that run on different instance types** 

Ocean is a pod-driven Autoscaler that launches the node that best fits the pod's requirements. Therefore, in Ocean’s VNG you can run the workloads in the same VNG, and Ocean will scale only the  instance type that fits the pod. 

**How to consolidate**: 

Since Ocean provides the flexibility to configure multiple types of infrastructure configurations in the same Ocean cluster, we recommend consolidating node groups that contain similar or the same configurations to one VNG according to the suggestions below:  

If you have two or more node groups that have similar configurations, mark one of them for import and unmark the others.  (In the example below, the two node groups shown will be consolidated into a single VNG called Intelligent-COM-Frozen-46.) 
 
 ![connect-eks-cluster-10](https://github.com/spotinst/help/assets/106514736/7aab974d-6def-48ee-b395-54576f762040)
 
### Choose EKS Node Group to Import 

You can define which EKS Node Group or Node Groups will be imported to a VNG by marking the checkbox by the node group. Once you have chosen the node groups, Ocean imports the compute configurations of the chosen EKS node groups. A virtual node group will be created with the same configurations. A separate VNG is created for each node group you marked. 

In case no VNG is chosen, Ocean will create a VNG based on the Template VNG. 

1. Mark the Node Group or Node Groups you want to import in the checkbox.  
 
 <img width="929" alt="connect-eks-cluster-06" src="https://github.com/spotinst/help/assets/106514736/cde83ef8-bea9-4c4a-82b4-f8d594c8e855">

2. To change the VNG’s configuration, click the Virtual Node Group’s name you want to configure in the corresponding VNG Name row of the Virtual Node Group you marked. The edit VNG page opens. 
 
![connect-eks-cluster-12](https://github.com/spotinst/help/assets/106514736/f263b6fc-73a0-4789-bec3-42b368583802)

Enter your changes for the following parameters: 

* Node Group Name 
* Image 
* Security Groups 
* Subnets 
* Instance Profile 
* Root Volume Size (GiB) 
* User Data (Startup Script on the right) 

#### Node Selection 

This section displays the labels and taints of the imported node group.  

If the [required permissions](https://docs.spot.io/ocean/getting-started/eks/join-an-existing-cluster?id=add-required-permissions) were not set, the labels and taints cannot be imported. In this case you should add the required labels and taints. 

#### Instance Types 

All instance types are selected by default to grant Ocean the ability to choose the best market. While it is recommended to use the automatic configurations. You can select Manual Selection if an adjustment is required. Use the [Instance Type guide](https://docs.spot.io/ocean/tips-and-best-practices/manage-machine-types) for more details.  
You can customize the following parameters: 

* Advanced: 
    * Spot % - Percentage of total instances in this VNG that should be Spot instances. The rest will be on-demand instances. This setting can be used in a VNG configuration only if it is not set already in the cluster configuration (i.e., using the attribute cluster.strategy.spotPercentage). 
    * [Restrict Scale Down](https://docs.spot.io/ocean/features/vngs/attributes-and-actions-per-vng?id=restrict-scale-down-per-vng) 
    * Block Device Mappings 
* Tags – In case any additional tag is added to the VNG, the Template VNG tags are overriden. Make sure to add the required EKS tag. 
* [Headroom](https://docs.spot.io/ocean/features/headroom?id=headroom)

## Step 4: Connectivity 

The Connectivity page provides steps for you to install the Ocean Controller and establish the connection between the Ocean SaaS and the cluster. 
  
![connect-eks-cluster-11](https://github.com/spotinst/help/assets/106514736/b249a59d-a080-4449-b833-fd65f4a4934a)

Complete the following steps: 

1. Create a [Spot Programmatic token](https://docs.spot.io/administration/api/create-api-token) (or use an existing one) and copy it to the text box. 
2. Use the kubectl command-line tool to install the [Ocean Controller Pod](https://docs.spot.io/ocean/overview-kubernetes?id=ocean-controller). Learn more about the Ocean Controller Pod.  
    * (Optional) To install the [Ocean Prometheus Exporter](https://docs.spot.io/ocean/tools-and-integrations/prometheus/), mark the dedicated checkbox. Validate that the [Configure Prometheus](https://docs.spot.io/ocean/tools-and-integrations/prometheus/scrape?id=configure-prometheus) step is complete. 
    * (Optional) To install the [Ocean Network Client](https://docs.spot.io/ocean/tutorials/install-network-client?id=install-the-ocean-network-client-in-the-cluster), mark the dedicated checkbox. 

3. Click Test Connectivity to ensure the controller functionality. Allow approximately two minutes for the test to complete. 
4. Click Next. 

## Step 5: Review  

Review all the Ocean settings you have configured. Click Create to finish or use the JSON or Terraform generated templates to create the Ocean cluster using other tools. 

Ocean will now ensure the most cost-effective capacity and sizing possible for your cluster. 

## What's Next? 

Learn how to [Migrate your Workloads](https://docs.spot.io/ocean/tutorials/migrate-workload) to Ocean. 

