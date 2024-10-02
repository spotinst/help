# Best Practice Checks  

Cloud service providers have many options to customize your deployment. Using best practice checks helps you identify:
* Optimization of available resources.
* Beneficial features that are hidden in an API.
* Cost-effective deployment options.

Select one or more cloud providers, accounts, and a date.

You can click on a card to filter the checks and failed resources by importance or category. For example, click **Availability Category** to see a list of the failed resources for Availability.

Click **Export** to export your data to a CSV file.

![bestpracticechecks1](https://github.com/user-attachments/assets/16a1c43f-708a-46ee-83b3-8c9b345914b8)

## Categories

Cost Intelligence makes sure your infrastructure is configured correctly and highlights areas that may be a cause for concern.

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

## Check Detail Page

When you click on the name of a check, you can see its details, including the specific resources that triggered it.

You can click info <img height="14" alt="i" src="https://github.com/user-attachments/assets/534c7442-32fe-48c1-996b-d54d9f956281"> to see more details about the issue.

Sort the best practice checks by the Remediation Effort column to identify items to remediate. Click **Remediate** for step-by-step instructions on how to fix the issue.

![bestpracticechecks2](https://github.com/user-attachments/assets/d734dde0-224e-41a4-9f14-40914fdde363)


## Remediation

You can fix failures identified in Cost Intelligence using remediation. You can remediate:

* Manually from Best Practice Checks in Cost Intelligence: click a best practice check name and then **Remediate**.
* From the cloud service provider console (AWS, Microsoft Azure).

## Untagged Resources

Cost Intelligence automatically checks if all resources have tags. Any resources that are missing tags get marked as failures. The best practice check is named <i>Untagged Resources</i>.
