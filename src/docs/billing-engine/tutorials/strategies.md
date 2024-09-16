# Strategies 

Strategies are the highest-level calculations most commonly used across individual cloud organizations.

## Reserved Instance and Savings Plan Discount Sharing

Billing Engine lets you deactivate sharing discounts for reserved instances and savings plans. This means the Billed Cost is the full-priced, on-demand cost instead of the reserved instance or savings plan price.

Unshare AWS/Azure Reserved Instances and Savings Plans is only applicable for AWS and Microsoft Azure accounts.

## Amortization (Reservations)
It can be hard to amortize reserved instance costs for each team in your organization. When you have reserved instances, you need to amortize based on usage hours. The instance payment is prorated by usage hour for each team using tags. Tags are assigned to resources to tie them back to the reserved instance usage. The result is that the upfront and recurring costs of reserved instance and saving plan benefits are amortized.

Amortization is only applicable for AWS and Microsoft Azure accounts.


 <details>
   <summary markdown="span">Example</summary>

   A payer account has purchased 1,000 reserved instances with an upfront amortized fee of $1,000 per month. There are 500 instances running 24/7 for the month across the consolidated billing family.

   One payee is using 100 instances running 24/7 for the month. That payee is allocated $200 per month of reserved instance upfront fees: 
   <i>$1,000 / 500 total instances x 100 instances used = $200</i>
   
 </details>

## Eco Cost Sharing

You can share the cost of Eco reserved instance savings or savings plan-related savings with consumers of the savings:

* **Percentage** lets you add a charge relative to the overall savings provided by Eco. For example, you can enter the same percentage as your contract with Spot, or a percentage depending on your business model.
  An account only has Eco-generated fees showing for it if there are Eco-generated savings attributed to it.

* **Flat Fee** lets you add a fixed monthly fee to each family or account.
* **Distributed Eco** lets you spread the fee evenly across accounts based on usage. You can choose <i>Estimate</i> or <i>Spot Billing Cycle Actuals</i>. Estimate distributes the fee based on a tentative estimate of the usage. <i>Spot Billing Cycle Actuals</i> divides the fee using data from the previous month.

Eco Cost Sharing is only applicable for AWS accounts.

## Recalculating Pricing Tiers

Recalculating pricing tiers is the actual spend per family by tier. The standard pricing tiers and discounts are not taken into consideration. This gives you a more accurate bill by family.

This is only applicable for AWS accounts.

## Recalculating AWS Reserved Instance Volume Discounts

Calculate the volume discounts based on costs associated with the family by tier. The volume discounts are based on the costs associated with the family itself. This gives you a more accurate bill by family.

This is only applicable for AWS accounts.

## Custom AWS Support Tiering

You can calculate the pricing of support more accurately for an entity. With Custom AWS Support Tiering, you can recalculate AWS support plans and their tiers.

This is only applicable for AWS accounts.

By default, Billing Engine always includes what is published to the native usage file. You can also select how the plans are applied:

* Suppress lets you hide the published charges from AWS. This is commonly used in cases where you are not charging or reporting on AWS Support in any way. 

* Developer applies a charge based on 3% of monthly spend.
  You also choose to include or exclude the $29 minimum charge and if the tier costs are applied based on account or family spend.

* Business applies charges based on the following tiers:
  * 10% of monthly AWS charges for first $0 to $10,000.
  * 7% of monthly AWS charges from $10,001 to $80,000.
  * 5% of monthly AWS charges from $80,001 to $250,000.
  * 3% of monthly AWS charges over $250,000.
  You also choose to include or exclude the $100 minimum charge and if the tier costs are applied based on account or family spend.

* Enterprise On-Ramp applies a charge based on 10% of monthly spend.
  You also choose to include or exclude the $5,500 minimum charge and if the tier costs are applied based on account or family spend.

* Enterprise applies charges based on the following tiers:
  * 10% of monthly AWS charges for first $0 to $150,000.
  * 7% of monthly AWS charges from $150,001 to $500,000.
  * 5% of monthly AWS charges from $500,001 to $1,000,000.
  * 3% of monthly AWS charges over $1,000,000.
  You also choose to include or exclude the $15,000 minimum charge and if the tier costs are applied based on account or family spend.

## Remove Published Taxes

This removes the published tax-related usage rows from the bill.

This is only applicable  for AWS and Google Cloud usage data. Provider cost from Microsoft usage data does not include tax data.

## Managing Credits

Credit functionality is split into two concepts:

* Provider driven and published credits.
* Credit memos applied by Billing Engine.

You can manage your credit memos in Credit Management. Credits can be set to:

* **Show All Credits** shows the usage rows published by the provider for various discounts and credits from the resulting List Cost.  It does not include discounts related to reserved instances and savings plans.

* **Hide All Credits** removes the usage rows published by the provider for various discounts and credits from the resulting List Cost.  It does not include discounts related to reserved instances and savings plans.

* **Hide All Credits, Except…** is only available for AWS. You can exclude these credit and discount types:

  * Private Pricing Agreements
  * CloudFront Security Bundles
  * SPP
  * EDP
  * Tax Refunds

  All credits and discounts are hidden from the List Cost except the selected types. It does not include discounts related to reserved instances and savings plans. This lets you show true credits, while excluding credits that are meant to benefit your margin enhancement activities.
