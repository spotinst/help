# Strategies 

The calculations and logic associated to strategies are what would be used broadly by an organization as a default. As organizations purchase and sell Reserved Instances (RI) and Savings Plans, as well as manage discounts, the Strategies feature assists in establishing default methods to handle these processes. The feature also enables you to create exceptions for cases where the usage may need to be treated differently than what would be considered the default for a given Billing Strategy. Billing Strategies are available for AWS, Azure, and Google Cloud. 

To find the Strategies page complete the following steps:  
1. In the left main menu, click **Billing Engine** and click **Rules**.  
2. Click **Strategies**.   

![strategies-1](https://github.com/spotinst/help/assets/106514736/ef5b9f73-5ffc-40f0-9023-88c436fede02)

Types of strategies:  

* Remove Published Taxes 
* Eco AWS Cost Sharing 
* AWS Billing Account Strategy 
* AWS Custom Support 
* Amortize Azure Reserved Instances 

## Remove Published Taxes 

You can choose to remove taxes. If you turn the **Removed Published Taxes** toggle on, you are electing to remove published taxes from the cloud provider.  

## Eco AWS Cost Sharing 

You can choose to share the cost of Eco RI or savings plan-related savings with consumers of the savings. 

### Percentage 

The percentage option enables you to add a charge proportionate to the overall savings provided by Eco. You can enter the exact same percentage as your contract with Spot, or you may enter a different percentage depending on your business model. It is possible for an account to appear in the report, but if no Eco-generated savings are attributed to it, then no Eco fee will be attributed to it.

### Flat Fee 

The Flat Fee option enables you to add a fee to each subset or account. The fee will be the same each month.  

### Distributed Eco 

The Distributed Eco option enables you to distribute the fee evenly across accounts based on usage. From this option, you can choose Estimate or Spot Billing Cycle Actuals.  
* Estimate: Distributes the fee based on a tentative estimate of the usage. 
* Spot Billing Cycle Actuals: Leverages data from the previous month to distribute the fee accordingly. 

## AWS Billing Accounts Strategy

Select a billing account strategy to optimize cost management and maximize financial efficiency. 

### Amortize Reserved Instances 

Recalculate the pricing with your AWS accounts based on how you grouped accounts together into billing families. 

### Recalculate Pricing Tiers based on Billing Families 

By selecting this option, you will be recalculating the pricing with your AWS accounts based on how you grouped accounts together into Billing Families. 

### Recalculate RI Volume Discounts based on Billing Families 

Recalculate your Reserved Instance Volume discounts based on how you chose to group accounts into billing families.  

## AWS Custom Support 

You can apply Custom AWS Support Charges or repress existing published support charges. By default, Billing Engine returns what is published by AWS.  

### Repress Custom Support Charges 

If you choose to repress custom support charges, Billing Engine removes those customer support charges. 

### Apply Custom Support Charges  

If you choose to apply custom support charges, you have the option to apply these charges based on several options. 

#### Developer 

This option charges 3% of Monthly AWS usage.  

#### Business 

This option applies a tiered charge based on: 
• 10% of monthly AWS charges for first $0 to $10,000. 
• 7% of monthly AWS charges from $10,001 to $80,000. 
• 5% of monthly AWS charges from $80,001 to $250,000. 
• 3% of monthly AWS charges over $250,000. 

#### Enterprise On-Ramp 

This option charges 10% of Monthly AWS usage. 

#### Enterprise  

This option applies a tiered charge based on: 
• 10% of monthly AWS charges for first $0 to $150,000. 
• 7% of monthly AWS charges from $150,001 to $500,000. 
• 5% of monthly AWS charges from $500,001 to $1,000,000. 
• 3% of monthly AWS charges over $1,000,000. 

## Amortize Azure Reserved Instances 

If you turn the **Amortize Azure Reserved Instances** toggle on, Billing Engine applies amortization to Azure Reserved Instances. 

## Reserved Instances 

### Amortization 

Amortization in a Cloud Computing sense is the even spreading of the upfront fees out for the duration of the reservation. For example, if you purchased a 1-year reservation with $1200 in upfront fees, costing $500 per month, your records would reflect the $500 per month charge plus $100 per month in amortization ($1200/12 months).  

![strategies-2](https://github.com/spotinst/help/assets/106514736/a8feac6a-4fe3-49db-8bae-30f7025b93a1)

This rule affects accounts that are using a reservation. The account using the reservation will be allocated a proportional amount of the reservation fees equal to its usage. 

By default, this is DISABLED, but you can always enable it as need be.  

## Managing Discounts and Credits 

### Provider Credits 

Provider credits are credits and discounts that are provided from AWS, Azure, or Google Cloud to lower the costs of your bill for a variety of reasons: 

#### AWS 

* EDP - Enterprise Discount Program 
* Data Egress Waiver 
* APN Partner Accelerator 
* Solution Provider Program 

#### Azure 

* Hybrid Benefit 
* BYOL 
* Reservations 
* Savings Plans 
* Credits 
* Program discounts are baked into the rate associated to the EA/MCA/CSP 

#### Google Cloud 

* Sustained Use Discounts (SUDs) 
* Committed Used Discounts (CUDs) 
* Credits 

With these credits, Spot offers several options: 

* Show All Credits - All credits will be reflected in the end list cost 
* Show All But - AWS offers a variety of discounts, and with that, we give you the opportunity to remove discounts as needed. **For AWS Only** 
* Hide All Credits - All Credits will be removed from the end list cost. 

### Credit Memos 

To mirror how cloud providers handle discounts like credits, you may want the ability to create your own values that the providers would not have created themselves. These credits are created to discount the usage for several reasons, but the originator of the credit becomes the Billing Engine user looking to rebill their consumption to their potential end customer. This functionality affects providers. 

#### Create a Credit Memo 

To create a new Credit Memo, select **Create a Credit Memo**. 

![strategies-3](https://github.com/spotinst/help/assets/106514736/e4afb381-d468-442b-916f-9505c4ba57a2)

1. Provide a description for the Credit Memo. Ideally your name for the Credit Memo should describe the reason for the Credit Memo. These names do not have to be unique. 
2. Enter the amount for the credit. This can be positive or negative. Then, assign the credit memo to your desired accounts or billing families. 
3. Click Create to create the Credit Memo.
 
#### Edit a Credit Memo 

To edit a Credit Memo, click **Edit**. From here, you can edit the memo as needed. 

#### Delete a Credit Memo 

To delete a Credit Memo, click the trash icon on the chart.  
