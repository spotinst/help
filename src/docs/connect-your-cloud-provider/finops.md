# Connect Your Billing and Resource Data for FinOps

The Spot FinOps suite helps you manage and control your cloud expenses. You connect your cloud accounts to:

* [Billing Engine](connect-your-cloud-provider/finops.md#connect-billing-data-for-billing-engine) to collect cost data.
* [Cost Intelligence](connect-your-cloud-provider/finops.md#connect-your-subaccount-resource-data-for-cost-intelligence) to collect inventory data.

Billing Engine and Cost Intelligence work together to give an end-to-end solution. They are powered by data from multiple cloud and software vendors:

* Billing Engine requires access to vendor usage and billing files to give you visibility and control of your costs.
* Cost Intelligence requires access to resource data from onboarded accounts. Cost Intelligence uses this information to provide insight into inventory and utilization of vendor resources. Cost Intelligence is also able to leverage your cost data from Billing Engine.

## Connect Billing Data for Billing Engine
Connect your cost data by onboarding as many of your billing accounts as you like. You can onboard your AWS, Azure, and Google Cloud billing accounts. Once onboarded, you can review cost data and create dashboards in Cost Intelligence using the same cost data.

You can create rules in Billing Engine to change how the different cost types present your cost data. This lets you control and recalculate specific aspects of the cost data. Billing Engine also gets the cost data from subaccounts in the bills owned by the billing accounts you onboarded.

To get the full benefits of the cloud financial management platform, onboard your subaccounts to Cost Intelligence after you connect your billing accounts to Billing Engine. Keep in mind, to achieve the full FinOps value of Spot, also onboard to [Elastigroup and Ocean](connect-your-cloud-provider/first-account/).

Onboard your accounts to Billing Engine:

* [AWS](billing-engine/get-started/connect-aws)

   Your AWS billing account data is stored in the master AWS account. Onboarding AWS billing accounts (payers/master accounts) lets you onboard the cost data owned by the master account. It will not include inventory data from subaccounts for Cost Intelligence.


* [Azure](billing-engine/get-started/connect-azure)

   Your Azure billing data is tied to your Azure agreement type. Giving Billing Engine access to the usage detail lets you onboard the cost data for your subaccounts. It will not include inventory data from subaccounts for Cost Intelligence.

* [Google Cloud](billing-engine/get-started/connect-google)

  Your Google Cloud billing account data is pulled from BigQuery. Giving Billing Engine access to the BigQuery Table lets you onboard the cost data for your subaccounts. It will not include inventory data from subaccounts for Cost Intelligence.


## Connect Resource Data for Cost Intelligence

Connecting your resource data centralizes all your inventory data in a single location. This lets you analyze a holistic view of your cloud resources and services. This inventory and usage data is then processed by the Cost Intelligence Best Practice Check to identify and recommend ways to improve efficiency, availability, and reduce costs.

Connect each individual subaccount/subscription so Cost Intelligence can analyze your data:
* [AWS](cost-intelligence/get-started/connect-aws)
* [Azure](cost-intelligence/get-started/connect-azure)

If you have many subaccounts, you can onboard them at the same time:
* [AWS connection with StackSets](cost-intelligence/get-started/connect-aws-stacksets)
* [Azure connection with CLI](cost-intelligence/get-started/connect-with-azure-cli)

## Connect Your SaaS Vendor Data for Cost Intelligence

You can [integrate](cost-intelligence/tutorials/integrations/) Cost Intelligence with software-as-a-service (SaaS) platforms to get raw billing and usage metrics. You can then use these datasets for analysis and cost optimization in the Cost Intelligence [dashboard](cost-intelligence/tutorials/dashboard/).
 

