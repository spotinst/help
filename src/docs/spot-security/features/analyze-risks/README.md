# Analyze Risks

Risk analysis gives you visibility into your misconfigurations on several levels:
* Top-level aggregation per security level
* List of all risks
* Drilldown level of [risk details](spot-security/features/analyze-risks/view-risk-details) per risk

Spot Security has comprehensive security rules with many different asset types, including EC2, S3 buckets, IAM groups, and virtual machines.

To analyze your risks, go to **Spot Security** > **Risk Analysis**.

You can create filter presets based on the cloud providers, account names, regions, and asset types. For example, you can create presets for different teams so they have just the assets they’re responsible for. You can also set a preset as a default view to help focus only on the necessary findings.

Risk distribution cards show the total number of open and suppressed risks for each severity level. You can click them to filter the results. For example, you can click on High Risks to filter on the high risks.

You can export the data as a CSV.

## Notification Policies

You can create notifications for failing security rules. You decide:
* The security rules
* How often to send the notifications
* A password for the email attachment, and how long the attachment link is valid for
  Keep in mind, you can only see the password when you are creating the notification. This password is used for opening the email attachment. If you lose it, you can change the password in **Spot Security** > **Administration** > **Webhooks**.
* Who to send the notifications to
  You can enter multiple email addresses, separated by a comma

Select the security rules you want to create notifications for and click Actions > Set Up Notifications.

You can view all your rules in the **Spot Security** > **Administration** > **Webhooks**. Select **Notification Type** as <i>Security Rules</i> to view only these webhooks.

 <details>
   <summary markdown="span">View image</summary>

<img width="880" alt="analyze-risks1" src="https://github.com/user-attachments/assets/cf915942-29d4-4771-89cf-7abf9288cdb3">

 </details>

## View Failed Assets

Click the failed asset number to view the list of failed assets for that security rule.

You can click on the name of an asset to view the risk details, such as risk maps and affected assets.

Click Remediation Steps for instructions on how to remediate the risk.

## Suppress a Rule

You can also accept a risk by selecting the security rules from the list and clicking **Actions** > **Suppress**. This removes the risk from your list.

If you want to suppress specific assets instead of rules, click the number of failed assets and then click **Actions** > **Suppress**.

To see the suppressed rules, click **Show Suppressed** in the Risk table.

You can see suppressed assets by clicking:
* **Show Suppressed** in the Risk table, then clicking on the number in Suppressed Assets.
* **Show Suppressed Assets** in the Failed Asset table.
