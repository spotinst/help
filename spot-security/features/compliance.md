# Compliance

Spot Security provides information on how compliant your organization is with global security standards.  

To view your compliance with global security standards, go to Spot Security in the left menu of the console and click Compliance.

## Security Compliance

You can review the compliance of your assets under two tabs:  
* Total Compliance: Provides information on how your organization complies with global security standards.
* CIS Benchmark: Provides compliance information against CIS recommended standards.

## Favorite Standards Chart

You can select a compliance from the provided list as a favorite.   

The line graph shows the compliance of the assets in your cloud infrastructure with the global security standards marked as favorite. You can select the time frames of two weeks, one month, or three months. You can also view the compliance of assets on a specific date using Snapback. Click **Export** to export the summary of the compliance to an Excel sheet.

<img src="/spot-security/_media/compliance-1a.png" />

Hovering over a specific line that represents a global security standard shows the percentage of the compliance of the global security standard.

## CIS Benchmark

<img src="/spot-security/_media/compliance-2a.png" />

The CIS benchmark section shows the compliance of your cloud infrastructure with CIS standards. Move the View toggle to view Level 1 and Level 2 to check the compliance with each level. You can view the detailed controls with:

1. Control ID
2. Control Description
3. Non-Conformant Assets
4. Compliance Status
5. Category
6. Scoring

Each control is mapped to the security rules that were defined in the [Analyze Risk](spot-security/features/analyze-risks/) page. You can also view the compliance of assets on a specific date using Snapback. Click Excel to export the details of the compliance to an Excel sheet.

## Compliance Standards 

This section displays the global standards that are tracked for an asset and they are mapped to the security rules that are on the Risk Analysis page.

<img src="/spot-security/_media/compliance-4a.png" />

The toggle Show Favorites Only is turned on by default. To see all of the global compliance standards, turn the toggle off. Click the pin in the top right corner of each compliance standard to mark specific standards as favorites. The percentage in the compliance bar shows how compliant your cloud infrastructure is to the standard.

### Compliance Standard Details

In the Compliance Standards section, click a standard to view the standard compliance overview page.  

The overview page lists the controls that the compliance defines. The security rules are mapped into each control and you can find the following information:
* ID
* Control Description
* Non-Comformant Assets
* Compliance Status

<img src="/spot-security/_media/compliance-3a.png" />

You can also view the compliance of assets on a specific date using Snapback. Click Export to view the details of the compliance to an Excel sheet.

To see the rules associated with compliance controls, click Control ID or Control Descriptions. You can click on the filter icon and filter the rules by severity level (low, medium or high), remediation effort (advanced or easy) and asset type (S3, Virtual Machine, etc.).  

<img src="/spot-security/_media/compliance-5a.png" />

### Remediate Failed Assets

You can remediate failed assets by completing the following steps:  

1. Click Failed Assets to view the list of assets that are at risk due to a specific security rule failing on it.  
2. Click [Remediation](spot-security/features/analyze-risks/remediate) for a step by step guide on how to remediate the risk.

<img src="/spot-security/_media/compliance-6a.png" />

You can also accept the risk by clicking Suppress. This removes the risk from your list. You can suppress one or multiple rules by selecting them and clicking Suppress in the Actions Menu. You can suppress a security rule completely for all assets. To learn more about security rules see the Analyze Risk Page.

## What’s Next?
Learn more about Spot Security [features](spot-security/features/).
