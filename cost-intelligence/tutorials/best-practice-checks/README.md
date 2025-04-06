<meta name="robots" content="noindex">

# Best Practice Checks  

Cloud service providers have many options to customize your deployment. Using best practice checks helps you identify:
* Optimization of available resources.
* Beneficial features that are hidden in an API.
* Cost-effective deployment options.

Select one or more cloud providers, accounts, and a date.

* You can click on a widget to filter the checks and failed resources by importance or category. For example, click **Availability Category** to see a list of the failed resources for Availability.

* You can choose to **show checks with no infractions**. 

* Click **Export** to export your data to a CSV file.

![image](https://github.com/user-attachments/assets/e8d73f06-7fc8-4e45-93bd-165cbe16447a)

## Categories

Cost Intelligence ensures your infrastructure is configured correctly and highlights areas that may be a cause for concern.

Health checks focus on these critical areas:

* **Availability**

  Cost Intelligence makes sure that your deployment is:
   * Working correctly.
   * Configured to handle situations such as unhealthy instances or unreachable data centers.
* **Cost**

  Cost Intelligence identifies unused items. It provides cost checks to suggest savings by:
   * Making reserved instance purchases.
   * Optimizing your subscriptions.
   * Leveraging any available discounts.

  Cost Intelligence also migrates resources to current generation offering types.

* **Usage**

  Cost Intelligence reviews your architecture to see if:
   * Autoscaling is configured properly on your servers.
   * Users in your identity management portals are created according to best practices.
   * Backups are done automatically and retained for an appropriate amount of time.
   * Resources are being properly utilized.

## Source

Best practice checks take data from:

* **Cost Intelligence**

   Checks that Cost Intelligence builds and runs against inventory data that Cost Intelligence collects.

* **Ocean**

   Identifies if the resources are managed by Ocean. If not, you can onboard the resource to Ocean to save cost and utilization.

* **AWS Trusted Advisor**

  Cost Intelligence lets you view the checks for all your AWS accounts in one place. Data is shown for any account that has been onboarded to Cost Intelligence and that has the recommendations set up in AWS.

* **Microsoft Azure Advisor**

   Cost Intelligence lets you view the checks for all your Azure accounts in one place. Data is shown for any account that has been onboarded to Cost Intelligence and that has the recommendations set up in Azure.

## Check Detail Page

When you click on the name of a check, you can see its details, including the specific resources that triggered it.

You can click info <img height="18" src="https://github.com/user-attachments/assets/534c7442-32fe-48c1-996b-d54d9f956281"> to see more details about the issue.

Sort the best practice checks by the Remediation Effort column to identify items to remediate. Click **Remediate** for step-by-step instructions on how to fix the issue.

<img width=900 src="https://github.com/user-attachments/assets/c92f82ad-ed25-4c80-8f40-d9a9e6cdf4a7">

## Remediation

You can fix failures identified in Cost Intelligence using remediation. You can remediate:

* Manually from Best Practice Checks in Cost Intelligence: click a best practice check name and then **Remediate**.
* From the cloud service provider console (AWS, Microsoft Azure).

## Untagged Resources

Cost Intelligence automatically checks if all resources have tags. Any resources that are missing tags get marked as failures. The best practice check is named <i>Untagged Resources</i>.
