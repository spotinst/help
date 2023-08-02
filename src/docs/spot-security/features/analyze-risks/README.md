<meta name="robots" content="noindex">

# Analyze Risks

The risk analysis feature provides visibility into your risks on several levels of granularity including a top-level aggregation per risk level, a list of all risks, and a drill-down level of [Risk Details](spot-security/features/analyze-risks/view-risk-details) for each risk.

To analyze your risks, go to Spot Security in the left menu of the console and click Risk Analysis.

## Filters and Presets

You can use the filters to customize the findings as per their requirements. Different teams can create presets based on the cloud providers, account names, regions, and asset types that they are responsible for. You can also set a preset as a default view that stays steady throughout the console to help focus only on the necessary findings.

## Risk Table

The risk distribution at the top gives the total number of open and suppressed risks for each severity-level and acts as a quick filter when you click on each level. Spot Security has comprehensive security rules for over 25 different asset types including EC2, S3 buckets, IAM groups, Virtual Machines etc.

For each rule, you can see the:

* Security Rule Name
* Severity  
* Asset Type
* Cloud
* Compliance
* Failed Assets
* Suppressed Assets
* Remediation Effort  

<img src="/spot-security/_media/risk-analysis-1.png" />

You can click the filter icon and filter the list by severity level (low, medium or high), remediation effort (advanced or easy) and asset type (S3, Virtual Machine etc.).

<img src="/spot-security/_media/risk-analysis-2.png" />

Click Export to export the data to an Excel sheet.

## View Failed Assets

Click a failed asset of an Asset Name in the Failed Asset column to view the Failed Asset list that presents the assets at risk due to a specific security rule that is failing in the asset.

<img src="/spot-security/_media/risk-analysis-3.png" />

For each asset, you can see the:

* Asset Name
* Asset ID
* Risk Attribute
* Asset Type
* Cloud Provider
* Cloud Account ID
* Open Since
* First Discovered
* Last Scanned
* Remediation   

Click an asset to view the Risk Details page. The Risk Details page provides you with risk maps and affected assets due to the failing rules and more.  

Click [Remediation Steps](spot-security/features/analyze-risks/remediate) to view a step by step guide of how to remediate the risk.   

### Suppress a Rule  

You can also accept a risk by selecting the check box near the Sevurity Rule Name and clicking Suppress in the Actions menu. This removes the risk from your list. You can suppress one or multiple rules.

<img src="/spot-security/_media/risk-analysis-4.png" />

You can also suppress specific assets for selected security rules by following these steps:

1. Click the number of failed assets for the security rule name you want to view.  
2. Select the asset name or names you want to suppress and click Suppress in the Actions menu on the top right.  

<img src="/spot-security/_media/risk-analysis-5.png" />

To view the suppressed rules:  

* Click the Show Suppressed toggle in the Risk table.

To view the suppressed assets: 

* Click Supressed Assets Column in the Risk Table **or** 
* Click the Show Suppressed Assets toggle in the Failed Asset table. 


## What’s Next?
Learn more about how you can [remediate](spot-security/features/analyze-risks/remediate) your risks.
