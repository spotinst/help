# Dynamic Commitment Management

Elastigroup and Ocean automatically revert existing instances using reserved capacity (RI) and savings plans (SP) to spot instances or other commitment deals wherever a reservation is needed elsewhere in your AWS account. This feature optimizes resource allocation and cost efficiency by continuously adjusting to dynamic environment needs. 

This is in accordance with the Ocean and Elastigroup commitment prioritization mechanism, which prioritizes available reserved instances and savings plan commitments over spot or full-priced on-demand instances.
This procedure describes how application workloads that require on-demand instances can always benefit from reservations, even if they were previously prioritized for utilization when available.  

You can track dynamic compute commitment utilization and coverage with your AWS Cost Usage report.

By prioritizing reserved instances and savings plan commitments, this feature continually adapts to the dynamic needs of your environment. Dynamic commitments management lets you:

* Prioritize available reserved instances and savings plans
* Revert from on-demand reserved instances and savings plans
<p id=prioritize-available-ris-and-sps></p>

## Prioritize Available Reserved Instances and Savings Plans

Prioritize available reserved instances and savings plans to prevent their underutilization. 

Elastigroup assists in optimizing the utilization of account commitment plans to ensure minimal waste. Utilize commitment plans enables Elastigroup to check on-demand instances to ensure there aren’t any vacant savings plans or reserved instances that match instance types defined in its configuration.

The default behavior of this feature is to utilize commitment plans associated to the connected cloud account. If you want to enable cross-account utilization, contact the support team.

## Revert from On-demand Reserved Instances and Savings Plans

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

To use this feature in your group, in [Create Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsCreate) or [Update Elastigroup](https://docs.spot.io/api/#tag/Elastigroup-AWS/operation/elastigroupAwsUpdate), set the `utilizecommitments` or `utilizeReservedInstances` parameter to true. 

>**Note**: The default value for the `utilizeReservedInstances` parameter is `true`.

For Ocean, use the [cluster or virtual node group parameters](https://docs.spot.io/ocean/features/dynamic-commitments-aws?id=configure-in-the-api).
