# Plans 

A plan takes cost modifications from your rules and makes them into a template. You can then use this template for many cloud accounts.

Plans are different than strategies. Plans are specifically linked to individual commercial offerings or special agreements you and your end user may want to show.

Rule types let you adjust billing data for all cloud providers:

* **Markup/Markdown** modifies existing line items based on the configured percentage against the filters.
* **OneTimeFee/OneTimeDiscount** is a one-time fee or discount.
* **Upcharge/Discount** is a percentage determined by a filter, and if configured, it can also include pricing tiers.

Rules let you apply a configured amount against various elements of the plan’s usage.

 <details>
   <summary markdown="span">Examples of elements</summary>

 * Billing Account ID
 * Sub Account ID
 * Billing Family
 * Service Name
 * Service Category
 * Region
 * Availability Zone
 * Resource ID
 * Operation
 * Usage Type
 * Charge Type
 * Native Charge Type
 * Provider Tag Key
 * Provider Tag Value

 </details>

Once a plan and its rules are configured, you can use it for specific cloud accounts or all cloud accounts in a single family. A plan and its rules affect all provider usage that qualifies based on the filters you defined in your rules.

## Create a Plan
1. Go to **Rules** > **Plans**.
2. Click **+ Create Plan** and enter a unique name for the plan. Select filters to apply the rules to.
3. If you want to assign an account to the plan, click **+ Assign Accounts**.
4. You can also create rules to apply to usage for any or all of the assigned accounts:
   * **Markup/Markdown** modifies existing line items based on the configured percentage against the filters.
   * **OneTimeFee/OneTimeDiscount** is a one-time fee or discount.
   * **Upcharge/Discount** is a percentage determined by a filter, and if configured, it can also include pricing tiers.

   <details>
     <summary markdown="span">View image</summary>

   <img alt="plans1" src="https://github.com/spotinst/help/assets/167069628/dae3c261-5669-40c0-84c8-9d603468769a">

   </details>

5. Click **Create**.
