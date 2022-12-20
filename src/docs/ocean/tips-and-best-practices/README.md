# Tips & Best Practices

This page presents a collection of tips, suggestions, and recommendations to help you become an expert Ocean user and get the most out of your Ocean experience. To learn more, click on a topic below.

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
