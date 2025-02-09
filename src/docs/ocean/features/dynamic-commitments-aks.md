<meta name="robots" content="noindex">

# Dynamic Commitments (AKS)

Cloud service provider relevance: <font color="#FC01CC">AKS</font>

## Overview

Ocean Elastigroup and Stateful Node automatically revert existing VMs using reserved instances (RI) and savings plans (SP) to spot VMs or other commitment deals wherever a reservation is needed elsewhere in your Azure account. This feature optimizes resource allocation and cost efficiency by continuously adjusting to dynamic environment needs.

This is in accordance with the Ocean, Elastigroup, and Stateful Node commitment prioritization mechanism, which prioritizes available reserved instances and savings plan commitments over spot or full-priced on-demand VMs. This procedure describes how application workloads that require on-demand VMs can always benefit from reservations, even if they were previously prioritized for utilization when available.

You can track dynamic compute commitment utilization and coverage with your Azure Cost Usage report

## Feature Benefits 

By prioritizing reserved instances and savings plan commitments, this feature continually adapts to the dynamic needs of your environment. Dynamic commitments management lets you:

* Prioritize available RIs and SPs.
* Revert from On-demand RI and SPs.

## Prioritize Available RIs and SPs

Prioritize available reserved instances and savings plans to prevent their underutilization. See [Utilize Commitment Plans](elastigroup/features/core-features/spot-reserved-on-demand-instances?id=utilize-commitment-plans). 

##  What are Azure Reservations?
Azure Reservations helps you save money by committing to one-year or three-year plans for multiple products. Committing gets you a discount on the resources you use. Reservations can significantly reduce your resource costs by up to 72% from pay-as-you-go prices. Reservations provide a billing discount and don't affect the runtime state of your resources.  

After purchase, the reservation discount automatically applies to the resource usage that matches the attributes you select when you buy the reservation. Attributes include the SKU, regions (where applicable), and scope. Reservation scope selects where the reservation savings apply. 

##  How are Reservations applied to Azure VM Instances?

You can save money once you commit to an Azure reserved VM instance. The reservation discount is applied automatically to the number of running VMs matching the reservation scope and attributes. You don't need to assign a reservation to a VM to get the discounts. A reserved instance purchase covers only the compute part of your VM usage. For Windows VMs, the usage meter is split into two separate meters. There's a compute meter, which is the same as the Linux meter, and a Windows server license. The charges you see when you purchase are only for the computing costs. Charges don't include Windows software costs. See [Understand Azure Reserved VM Instances Discount - Microsoft Cost Management](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/understand-vm-reservation-charges#how-reservation-discount-is-applied).

##  What are Azure Commitments?

Azure Commitments are agreements customers make to use a certain amount of Azure resources over a specified period, including RIs and Saving Plans.

Commitments Types are as follows:

*  Capacity Commitments: Involves reserving VM capacity to ensure availability and predictability.
*  Cost Commitments: Involves committing to a certain spending level to benefit from discounts.

RIs are best for predictable workloads where you can commit to specific VM types and sizes, while Saving Plans offer more flexibility for varying workloads across different services. Both options help reduce costs through committed usage, ensuring better budget management and resource allocation in Azure.








## Revert from On-demand RIs and SPs

Revert from on-demand reserved instances when they can be used in other workloads to increase commitments coverage replacement. When working with dynamic workloads in the cloud, Elastigroup/Ocean adjusts to changes in the application requirements, needs, and usage at any time. Elastigroup/Ocean tracks commitments as a necessary condition for initiating proactive replacements, thus increasing the account’s commitment coverage to decrease excessive on-demand usage. Ocean/Elastgroup achieves this by reverting to a different allocation plan or potentially using spot instances based on the user's risk configuration, therefore providing ongoing optimal adjustments.

## How It Works

Ocean performs a strategy fix check every 15 minutes to determine if a running reserved instance or savings plan can be replaced to free up the commitment needed elsewhere in the account. 

<img width="902" alt="dynamic-commitment" src="https://github.com/user-attachments/assets/00766f8d-2f81-4219-b394-c9a1004614f0">

1. **Running on-demand (RI/SP)**: A running on-demand instance attached to a certain reserved instance or a savings plan uses a certain commitment. 

2. **Ocean checks if the commitment is needed elsewhere**: Ocean constantly checks if a commitment can be utilized by a different resource in your AWS account, ultimately meeting the risk percentage and required strategy.

3. **Replacement**: If the terms are met, Elastigroup/Ocean performs the replacement.

4. **Launch spot or an on-demand (RI/SP)**: Elastigroup/Ocean launches a different spot or an alternative on-demand reserved instance to ensure a different plan is used. This increases commitment coverage to help reach optimal allocation.

The reversion will not occur if:

* There is no alternative commitment or spot instance to revert back to. 
* It violates the group's on-demand count request. 

## Configure in the API 

You can use this feature at the cluster or virtual node group level:

* [Create cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterCreate) or [Update cluster](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSClusterUpdate)
* [Create virtual node group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecCreate) or [Update virtual node group](https://docs.spot.io/api/#tag/Ocean-AWS/operation/OceanAWSLaunchSpecUpdate)

Set the `utilizecommitments` or `utilizeReservedInstances` parameter to `true`.

>**Note**: The default value for the `utilizeReservedInstances` parameter is `true`.

For Elastigroup, use the [create and update elastigroup parameters](https://docs.spot.io/elastigroup/features/core-features/dynamic-commitment?id=configure-in-the-api).
