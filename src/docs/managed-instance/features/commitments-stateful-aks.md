<meta name="robots" content="noindex">

# Commitments (AKS)

Cloud service provider relevance: <font color="#FC01CC">Azure Kubernetes</font>

>Prerequisites: Before you can utilize commitments in Stateful Node , you must first purchase commitments from Azure.

##  Azure Commitments

Azure Commitments are agreements you make to use a certain amount of Azure resources over a specified period, including RIs and Saving Plans.

Commitment types are as follows:

*  Capacity Commitments: Involves reserving VM capacity to ensure availability and predictability.
*  Cost Commitments: Involves committing to a certain spending level to benefit from discounts.

RIs are best for predictable workloads where you can commit to specific VM types and sizes, while SPs offer more flexibility for varying workloads across different services. Both options help reduce costs through committed usage, ensuring better budget management and resource allocation in Azure. 
You can prioritize available RIs and SPs: Prioritize to prevent their underutilization.

###  Azure Reserved Instances

Azure RIs let you reserve VMs in Azure for a one- or three-year term, providing significant cost savings compared to pay-as-you-go pricing, and provide the following benefits:

*  Cost Savings: Typically offers discounts of up to 72% compared to on-demand prices.
*  Predictable Billing: Helps budget and forecast costs as you pre-purchase capacity.
*  Flexibility: You can exchange or cancel RIs, providing flexibility in your commitment.

###  Azure Savings Plans

Azure SPs offer a flexible pricing model that lets you save up to 65% on your Azure compute costs in exchange for a commitment to spend a specific amount over a one- or three-year period and provide the following benefits:

*  Flexibility: Unlike RIs, SPs apply to a broader range of services and can adjust based on your usage patterns.
*  Automatic Savings: Automatically applies savings to eligible resources, making managing costs across multiple services easier.
*  No Commitment to Specific VM Sizes: You can switch between different VM sizes and types without losing savings.


## Commitments Scenarios

<img width="1000" src="https://github.com/user-attachments/assets/ae781249-3fff-4647-9cc4-35bd8573abf8" />


###  Launching a VM

As part of the scale-up process, Stateful Node checks if an RI or SP applies to the market selection. If so,  utilizes that RI/SP.

###  Running Spot VMs

As part of the revert to commitments process, Stateful Node replaces spot VMs with regular VMs and utilizes RI/SP if applicable.

###  Running Regular VMs

As part of the revert to commitments process, Stateful Node utilizes RI/SP as a wrapper for a regular VM if applicable to cost savings.

###  Running Regular (RI/SP) VMs

This is the dynamic commitments scenario. Stateful Node Checks if RI/SP is needed elsewhere. If so, Stateful Node replaces it with a spot or regular (RI/SP) from a different plan, as follows:

Stateful Node performs a strategy fix check every **xx (to check)** minutes to determine if a running RI or SP can be replaced to free up the commitment needed elsewhere in the account. 

1. **Running regular (RI/SP)**: A running regular VM attached to a specific RI or SP uses a particular commitment. 

2. **Stateful Node checks if the commitment is required elsewhere**: Stateful Node constantly checks if a different resource can utilize a commitment in your Azure account, ultimately meeting the risk percentage and required strategy.

3. **Replacement**: Stateful Node will replace if the terms are met.

4. **Launch spot or regular (RI/SP)**: Stateful Node launches a different spot or an alternative regular RI/SP to ensure a different plan is used. This increases commitment coverage to help reach optimal allocation.

The reversion will not occur if:

* There is no alternative commitment or spot VM to revert back to. 
* It violates the group's regular VM count request. 

