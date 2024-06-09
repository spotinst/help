# Billing Analysis 

The Analysis page shows your cloud expenditures and detailed information. You can view your cloud spending across AWS, Microsoft Azure, and Google Cloud. Your data is processed at specific intervals to give you a quick turnaround from when the cloud provider publishes the data to when you can view the data in the Spot console. As Billing Engine processes your cloud data, the more specific details from the bill are translated into the [FOCUS](https://focus.finops.org/) model. The data is then displayed in different reports, including Analysis. This lets you analyze your data in real time. You can create a pivot report to focus on different data points.

**What can you do in Analysis?**
* Add fields to the report. Click <img width="23" alt="fields" src="https://github.com/spotinst/help/assets/167069628/83a14e59-6b07-4305-a76e-e8d8846cf0ae"> and then check the box next to the fields you want to add to the report.
* Drag fields to group the data. The group includes all values in that column. You can add more groups to nest the values under each parent group’s values.

  <details>
    <summary markdown="span">View the list of fields that can be grouped</summary>

  * Billing Period Start 
  * Billing Period End 
  * Charge Period Start 
  * Charge Period End 
  * Billing Account Id 
  *  Billing Account Name 
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

  </details><br>

* Click **Show Rules** to view the list of rule columns. Rule columns give you insight into the cost impacts of the rules.

**Understanding the fields in the list**

* **Provider cost**: the cost data pulled directly from your usage file for AWS, Microsoft Azure, and Google Cloud.

* **Billed cost**: the final results of all billing rules you have turned on in Billing Engine.  Billed cost does not include amortization.

* **Profit**: profit is calculated by subtracting the provider list from the list cost. If you don’t have rules turned on for the usage row, the expected profit is $0.00. Profit can be positive or negative. It depends on the rules and usage.

* **Effective cost**: the final results of all billing rules you have turned on in Billing Engine. It always includes amortization for the upfront costs related to reserved instances and saving plans.

* **List cost**: the on-demand price and comes from the cloud providers.
