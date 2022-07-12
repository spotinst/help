# Analyze Risks

The risk analysis feature provides visibility into your risks on several levels of granularity including a top-level aggregation per risk level, a list of all risks, and a drill-down level of Risk Details(link to Risk Details page) per each risk.

To analyze your risks, go to Spot Security in the left tree of the console and click Risk Analysis.

## Filters and Presets

You can use the filters to customize the findings as per their requirements. Different teams can create presets based on the AWS accounts, regions, or asset types that they are responsible for. You can also set a preset as a default view to help focus only on the necessary findings.

## Risk Totals per Level

This top-level view shows the total number of risks per risk-level. Each level also shows the number of new risks identified since the last scan.
Clicking on a specific risk level will open the rules and specify the category of assets it belongs to.

<img src="/spot-security/_media/risk-analysis-a.png" />

## List of Risks

Spot Security has a library of over 150 Security Rules that they assess 12+ different Asset Types including EC2, S3 buckets, IAM groups, etc.

<img src="/spot-security/_media/risk-analysis-b.png" />

The example above shows the expanded list of high risks. You can filter the list by risk score, by recommended remediation effort (advanced or low), services and/or by risk status (open, remediated or new).
Expanding on any of the security rules gives you the list of assets which are at risk because of that security rule. Clicking on any of the assets will give the user further information of the asset.

### Risk Info Panel

To get more details about a Risk, click on Asset Name and a panel opens on the right with details about the asset and suggestions for further action.

Items that are marked as Easy Remediation are items that can be remediated immediately.

<img src="/spot-security/_media/risk-analysis-h.png" width="346"/>

The risk panel includes the risk title, a brief description, and an option to change the risk level. You can change the risk level only if you have the permissions to do so. The panel also includes the following information about the risk:
* Severity and Rule ID of the security rule failing at that asset
* Resources Affected gives a view of the assets that are further impacted by this asset
* The cloud account the asset belongs to
* Status of the security rule
* Number of days the issue is open
* Last date scanned
* First date discovered
* User

### View Affected Resources

To view the affected resources, click on View Affected Resources in the bottom of the sidebar.

 <img src="/spot-security/_media/risk-analysis-i.png" width="339"/>

The following information appears:
* A Risk Impact Map: provides information on how many other assets are linked to each asset. To learn more about the Risk Impact Map, click here link to RIsk Details page.
* Affected Resources details: shows a summary of affected resources which includes the total number of each type of resource. To learn more about the Affected Resources, click here link to RIsk Details page.

 <img src="/spot-security/_media/risk-analysis-d.png" />

 To see a list of resources in each type, click the arrow.

 To view more details of a risk, click here Risk Details(link to description of Risk Details) page, which shows more information about the risk, including a risk impact map.

### Remediation Steps

To receive a recommendation to remediate a risk, click Remediation Steps. If you decide to take the recommendation, you can take immediate action.
To learn more about remediating, click here (link to Remediation page).

## Actions

In the Actions column in the asset list, click the three dots of an asset to do the following:
1. Remediate: view information of the remediation steps.
2. View Details: view the Risk Map of the asset along with the asset details and affected resources.
3. Update Severity Level: change the severity level of the particular security rule.
4. Mark as Remediated: gain quick access to mark the security rule as remediated for an asset.

## Suppress Risks

You can also choose to accept the risk by using the Suppress function which removes the risk from your list.  

 <img src="/spot-security/_media/risk-analysis-e.png" />

To suppress all of the rules together:
1. Move the Show Suppressed Risks toggle to ON. This shows us all of the risks under a specific rule.
2. Click the eye icon.
3. Click Yes, Suppress.

To suppress individual rules:
1. Move the Show Suppressed Risks toggle to OFF.
2. Choose a rule.
3. Click the eye of the rule to suppress.

You can click “Show Suppressed Risks” on the top right corner of the table to show the suppressed risks in the table.

## What’s Next?
Learn more about how you can Remediate your risks.
