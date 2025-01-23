# Dynamic Commitments 

Cloud service provider relevance: <font color="#FC01CC">EKS</font>

## Overview

Elastigroup and Ocean automatically revert existing instances using reserved capacity (RI) and savings plans (SP) to spot instances or other commitment deals wherever a reservation is needed elsewhere in your AWS account. This feature optimizes resource allocation and cost efficiency by continuously adjusting to dynamic environment needs. 

This is in accordance with the Ocean and Elastigroup commitment prioritization mechanism, which prioritizes available reserved instances and savings plan commitments over spot or full-priced on-demand instances.
This procedure describes how application workloads that require on-demand instances can always benefit from reservations, even if they were previously prioritized for utilization when available.  

You can track dynamic compute commitment utilization and coverage with your AWS Cost Usage report.

## Feature Benefits 

By prioritizing reserved instances and savings plan commitments, this feature continually adapts to the dynamic needs of your environment. Dynamic commitments management lets you:

* Prioritize available RIs and SPs.
* Revert from On-demand RI and SPs.

## Prioritize Available RIs and SPs

Prioritize available reserved instances and savings plans to prevent their underutilization. See [Utilize Commitment Plans](elastigroup/features/core-features/spot-reserved-on-demand-instances?id=utilize-commitment-plans). 

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
