# Allocate Assignments

Allocation Assignments let you allocate costs for different tasks and generate reports that facilitate chargeback or showback of costs based on specific identifiers relevant to your usage.  You can create identifiers based on specific conditions and apply them to resources, enabling more granular cost reporting and analysis.

You can associate accounts with specific entities or identifiers, such as parts of an organization or individual customers. 

You can track costs at a more granular level by using resource-based allocation tags. For example, resources can be allocated within an AWS account for production and development purposes. To differentiate these resources, you can use allocation tags, such as the native AWS tags. These allocation tags flag resources and associate them with specific entities, identifiers, or purposes.  

**Examples of Allocation Assignments Usage**

* **Tag Governance/Hygiene**: This use case addresses the need to remap and aggregate pre-existing tags that do not align with the desired strategy. By creating mappings, you can ensure proper cost reporting to stakeholders.
* **Cost Allocation**: This use case involves utilizing tags to tag costs based on various parameters and using those tags to generate reports and invoices for stakeholders. It helps you maintain visibility into costs associated with specific resources or teams.
* **Cost Splitting**: This use case is relevant for organizations that operate in a shared model, where multiple teams utilize resources within the same account. You can map these resources and split the costs based on your configuration, allowing for accurate chargeback to the respective teams.

## Direct and Split Allocations

Allocation of assignments can be done in two ways:

* **Direct Allocation**: Takes a cost sum and directly allocates it to a specific identifier. You can create groupable and filterable mappings in reports, associating costs with values derived from defined conditions.

* **Split Allocation**: Cost data derived from user-defined conditions is mapped, and the total cost is split among multiple allocations. This allows for the distribution of the original total cost.

A direct or split allocation is determined by the number of values assigned to the configuration. If the configuration has more than one value, it is automatically categorized as a Split Allocation.

You can view, create, update, and delete allocation assignments.

To create an allocation assignment: 

1. In the Spot console, click **Billing Engine** > **Allocation Assignments** > **Create Allocation Assignment**.
2. Enter a **Key** for the allocation assignment.
3. Click **Add Condition Set**. Conditions determine the sum of the provider cost allocated to your configured assignment key.
4. Select a **Key** for the condition, an **operator**, and a **value**. You can add multiple conditions and condition sets.
5. In **Value Allocations**, you select the percentages to assign to different values.
6. Click **Refresh Preview** to get updated month-to-date amounts for the different values.

## Configure Allocation Assignments  

To configure an allocation assignment, go to the Allocation Assignments page and click on the assignment you want to configure. From there, you can create tags to apply to resources and define additional conditions and parameters.

Create a tag key and assign it to various values for different resources to incorporate these tags and their corresponding values into the billing data, enabling their utilization in reports and breakdowns.

When configuring allocation assignments, it is important to ensure that the percentage values assigned add up to 100%. This ensures accurate cost allocation and prevents discrepancies in reporting.

## Create Filter Conditions

When creating allocation assignments, you can utilize various Billing Engine dimensions as conditions to define the scope of the allocation. The following dimensions can be used as conditions:

`BillingFamilyName`, `BillingAccountId`, `BillingAccountName`, `SubAccountId`, `SubAccountName`, `Service`, `ServiceCategory`, `ChargeCategory`, `ChargeCategoryNative`, `ChargeFrequency`, `PricingCategory`, `SkuId`, `AvailabilityZone`, `Region`, `CommitmentDiscountCategory`, `CommitmentDiscountId`, `CommitmentDiscountName`, `ResourceId`, `ResourceName`, `Provider Tag Key & Provider Tag Value`.

<img width="1113" alt="allocation-1" src="https://github.com/user-attachments/assets/da1552a3-b536-4d69-9ec0-76b1352fbeb2">

You can combine multiple conditions using the logical operators AND and OR to create complex filtering rules. When you create conditions, you can preview the monthly-to-date (MTD) cost associated with them.

**Processing and Refreshing Data**

When you create or update allocation assignment configurations, Billing Engine automatically processes the data for the configurations to take effect. This processing occurs every 4 hours. 

Historic month data may require a support ticket to refresh the billing data.

**Note**: There might be a delay before the configurations are fully reflected in the reports and analysis.

