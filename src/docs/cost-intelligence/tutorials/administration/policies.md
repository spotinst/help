<meta name="robots" content="noindex">

# FinOps Permission Policies

FinOps permission policies are managed policies that only apply to Cost Intelligence and Billing Engine. Spot Organization Administrators can assign users to these policies in FinOps User Admin. This is supported for AWS, Azure, and Google Cloud users.

## Default FinOps Permission Policies

* **Billing Engine Admin**: View and manage all features for all accounts in Billing Engine. This policy requires access to all accounts in Billing Engine.
  
* **Billing Engine Managed Rules and Config**: View and manage Rules (Strategies, Credit Management, Plans) and Families for all accounts. This policy requires access to all accounts in Billing Engine.
  
* **Billing Engine View All Only**: View all features for all accounts in Billing Engine. This policy requires access to all accounts in Billing Engine.
  
* **Billing Engine Analysis Only**: View the Billing Engine landing page and Analysis.
  
* **Billing Engine View Rules and Config**: View Rules (Strategies, Credit Management, Plans) and Families for all accounts. This policy requires access to all accounts in Billing Engine.
  
* **Cost Intelligence Admin**: View and manage all features for all accounts in Cost Intelligence, including setting the Org Default dashboard. This policy requires access to all accounts in Cost Intelligence.
  
* **Cost Intelligence Best Practice Checks**: View Best Practice Checks.
  
* **Cost Intelligence Creator**: View, create, and manage Cost Intelligence Dashboards.
  
* **Cost Intelligence Inventory**: View Inventory Reports.
  
* **Cost Intelligence Dashboards View Only**: View Cost Intelligence Dashboards.
  
* **Cost Intelligence View Data Only**: View Dashboards, Best Practice Checks, and Inventory.

* **Asset Groups**: View and manage asset groups across Cost Intelligence and Billing Engine.

**Cost Type Permissions** 

FinOps users can additionally select which cost types to assign to them. By default, all cost types are assigned to users. 

* **Provider Cost**: The cost type in the Billing Engine will reflect the values directly obtained from the provider's usage data. This includes the Unblended AWS cost, the agreement pricing for an Azure EA, or the agreement pricing for a Google Cloud deployment. 

* **List Cost**: This cost type represents the public on-demand price equivalent to the usage you would have paid if you had purchased the same consumption from the provider directly with no benefits. 

* **Billed Cost**: While using Billing Engine, you can create rules that manipulate the provider cost of the provider usage. This cost type will represent the results of the adjustments applied to the Billing Engine usage, excluding any calculation or inclusion of amortization.

* **Effective Cost**: Similar to Billed Cost, when rules are applied, adjustments to the usage will be present within Effective Cost. One key difference is that this cost type will include the amortization of Reservations and Savings Plans. 
