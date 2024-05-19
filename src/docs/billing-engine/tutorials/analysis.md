# Billing Analysis 

The Billing Analysis page presents your cloud expenditure and detailed information, providing a deeper understanding of your financial activities within the cloud environment.

Billing Engine supports the FinOps Foundation's FOCUS Specifications, although some fields are unique to Billing Engine and Cost Intelligence. 

You can sort your data according to the following columns:

* Billing Period Start 
* Billing Period End 
* Charge Period Start 
* Charge Period End 
* Billing Account Id 
* Billing Account Name 
* Sub Account Id 
* Sub Account Name 
* Resource ID 
* Billing Family ID 
* Service 
* Service Category 
* Region 
* Availability Zone 
* Provider 
* Publisher 
* Invoice Issuer 
* Charge Category 
* Charge Category Native 
* Pricing Category 
* SKU ID 
* SKU Price ID 
* Pricing Unit 
* Usage Type 
* Commitment Discount ID 
* Commitment Discount Name 
* Commitment Discount Type 
* Commitment Discount Category 
* Operation 
* Description 
* Charge Frequency 
* Resource Name 
* Resource Type 
* Provider Tag Key 
* Provider Tag Value 
* Billing Currency 
* Provider Cost
* List Cost 
* Profit 
* Usage Quantity

The total values are calculated based on the groupings: Billing Currency, Provider Cost, List Cost, Profit, Usage Quantity, List Unit Price, and Pricing Quantity.

You can click on the column icon to add the additional filters: 

![billing-analysis-1](https://github.com/spotinst/help/assets/106514736/8fccc756-99ff-4119-8368-112813cca095)

## Billing Rules

The Billing Rule table shows the impact of the rules you have chosen to apply. Select **Show Rules** to see how the rules you applied affected your list cost. 

![billing-analysis-2](https://github.com/spotinst/help/assets/106514736/9083ebd8-c580-4f4e-8f37-ba3c71f8f170)

## Provider Cost 

This column shows the cost of the Cloud Provider (AWS, Azure, GCP). 

![billing-analysis-3](https://github.com/spotinst/help/assets/106514736/ef1c8cec-65a8-4076-a0bc-ff83983dcfd3)

## List Cost 

This is the cost after the rules you chose are applied.  

![billing-analysis-4](https://github.com/spotinst/help/assets/106514736/7c6e78f5-82e4-4b60-ab90-5acf07861c12)
  
## Profit 

The profit is calculated by subtracting the provider cost from the list cost. 

![billing-analysis-5](https://github.com/spotinst/help/assets/106514736/f3c96432-93d7-4f13-b05e-d6bcea6ff0f7)
