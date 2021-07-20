# Tips & Best Practices

This page presents a collection of tips, suggestions, and recommendations to help you become an expert Ocean user and get the most out of your Ocean experience. To learn more, click on a topic below.

<details>
  <summary markdown="span">Let Ocean Manage Machine Types</summary>

## Let Ocean Manage Machine Types

Ocean operation is based on containers, and as such, Ocean is free to utilize all types of cloud infrastructure, distribute optimally, and focus on cutting costs. Therefore, when it comes to machine types, it is usually best practice to let Ocean make the intelligent decisions about which machine family to launch.

In the Machine Types definition of the Compute tab, all of the machine types are already selected by default. Just leave this default setting on so that Ocean can choose from all possibilities. Ocean will then carefully match the node type to the specifications of the scheduled user workloads.

### Opt out of Machine Types

If you have a reason not to use certain machine types, you can simply deselect those family types. For example, your application may be specifically tuned for newer versions of CPU offered in the later families, and the older models cause performance issues. Simply deselect those families.

<img src="/ocean/_media/tips-image-types-01.png" />

You can use the `instanceTypes` attribute in the API to specify machine types that are allowed or not allowed in the cluster. The following options are available:

- `instanceTypes.blacklist` - Specify instance types to avoid in the cluster.
- `instanceTypes.whitelist` - Specify instance types that are allowed in the cluster.

The following rules apply to these:

- The permit list and the deny list may not be used at the same time.
- If no instance types are defined for both options, then all instance types are available.

### Set Instance Size Ranges

In some use cases, it is good practice to increase the minimum CPU or RAM of the individual nodes Ocean launches for your containerized workloads.

For example, you may want to increase the minimum machine size if you run many DaemonSets (that require a lot of resources) or you have any DaemonSets that are licensed based on machine count.

Increasing the minimum machine size helps to limit the node count by not allowing very small nodes that can host only a very small number of containers. Efficiency is achieved by bin packing more containers per node.

Alternatively, depending on the sensitivity of your workloads and the general size of your cluster, you may wish to decrease the maximum CPU or RAM per node to limit the number of containers that will be affected in the event of a node replacement.

<img src="/ocean/_media/tips-image-types-02.png" /><br><br>

</details><br>

<details>
  <summary markdown="span">Match Kubernetes Version and Built-in Labels</summary>

## Match Kubernetes Version and Built-in Labels

Ocean obeys Kubernetes labels wherever you apply them. However, labels are specific to Kubernetes cluster versions. Keep an eye on the labels you are using and ensure that they are correct for your version of the cluster. This is especially important during cluster version upgrades.

For example, `beta.kubernetes.io/instance-type` applies to Kubernetes version 1.16 and before, while `nodes.kubernetes.io/instance-type` applies to Kubernetes version 1.17 and later.

</details><br>

<details>
  <summary markdown="span">Minimize Service Interruptions using Spot Labels</summary>

## Minimize Service Interruptions using Spot Labels

Ways to reduce interruptions of workloads using the `restrict-scale-down` and `node-lifecycle` labels are described in detail in [Spot Labels](ocean/features/labels-and-taints). Note that setting the workload to run on OD instances does not prevent Ocean from bin packing the cluster by scaling down. Therefore, to ensure workloads running on OD instances are not interrupted by scale down, You can use both these labels together. This will ensure that Ocean will not scale down OD instances running critical applications due to efficiency considerations.

</details><br>

<details>
  <summary markdown="span">Underlying Elastigroup</summary>

## Underlying Elastigroup

The Ocean internal architecture utilizes the Elastigroup engine, a core component of the Spot platform. Therefore, whenever an Ocean cluster is created, an underlying Elastigroup is also created. Although this underlying Elastigroup still appears in the Elastigroup area of the Spot console, management of the Ocean cluster is not allowed there. The cluster is managed only in the Ocean area of the console.

<img src="/ocean/_media/tips-underlying-eg-01.png" /><br><br>

</details><br>

<details>
  <summary markdown="span">Utilize Reserved Instances (For AWS users)</summary>

## Utilize Reserved Instances (For AWS users)

If you have [reserved instances](elastigroup/features/core-features/spot-reserved-on-demand-instances) (RIs) and they are available, Ocean will utilize them by default before purchasing spot instances, (i.e., the API attribute `utilizeReservedInstances` is set to True by default upon Ocean creation). If you would like to change this, set this attribute to False using this [API](https://docs.spot.io/api/#operation/OceanAWSClusterCreate). In addition, if you would like to take advantage of [AWS Savings Plans](https://aws.amazon.com/savingsplans/pricing/), you can opt in using the API.

If you are using RI sharing across multiple AWS accounts, you can take advantage of the Cross RI Utilization feature to further optimize your RI usage. This feature will consider RI contracts and consumption across all relevant accounts. This is useful when a single account cannot consume the full RI capacity. Additional accounts can then use the excess capacity up to the maximum capacity of the RI. To activate this feature, do the following:

1. [Connect](https://docs.spot.io/connect-your-cloud-provider/aws-account) all the accounts with RI contracts to the Spot platform. (This can also be done using a read-only policy.)
2. Reach out to Spot Support and request enablement of Cross RI Utilization for your Spot organization.

</details><br>

## What’s Next?

Learn more about some useful [troubleshooting](ocean/troubleshooting/troubleshoot-controller) techniques in Ocean.
