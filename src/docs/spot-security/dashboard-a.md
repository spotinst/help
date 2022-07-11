# Security Dashboard

The Security Dashboard provides you with a high-level summary of your cloud security posture. In addition, the dashboard provides quick access to more detailed information and remediation actions.

The dashboard includes the following main areas:
* Security Summary
* Highest Impact Recommendations
* Most Prevalent Alerts
* Risks Over Time

To use the dashboard, click Dashboard under Spot Security in the Spot console tree on the left.

## Security Summary

The large tile at the top provides your main security stats:
* Identified Risks: The total number of security risks currently found in your environment (or based on the filters applied). Click View All Risks to see a detailed listing of all the risks.
* Checks Passed: The total number of security rules passed for all of your assets
* Resources Scanned: Under Identified Risks, Spot displays the total number of resources scanned for the given analysis and the date and time of the last Scan.
* New Risks Identified: Number of new risks identified in the latest scan of your assets compared to the last scan.
* Risk Across Regions: The map shows the number of risks in each region where you have resources. Hover over the circle charts to see the number of Low, Medium, and High risks.
* Breakdown by Severity: A color key shows the total number of risks per severity level including High, Medium, and Low, along with the number of new risks identified in the last scan completed.

<img src="/spot-security/_media/spot-security-dashboard-a.png" />

### Filters and Presets

You can use the filters at the top to focus on only the information you need. Once you have set the filters, you can save them as Presets for quick access to your customized view of the dashboard. You can create presets based on the AWS accounts, regions, or asset types that you are responsible for.

<img src="/spot-security/_media/spot-security-dashboard-b.png" />

### Highest Impact Recommendations

Spot Security helps you prioritize risks by giving recommendations of risks with the highest impact.

<img src="/spot-security/_media/spot-security-dashboard-c.png" />

By default, the alert with the highest level impact appears in the tile. You can click the arrow to scroll through up to five risks. If a risk is remediated, the next risk with the highest impact will appear here. Highest Impact Recommendations are determined by considering the Risk Score of the Assets, the number of Affected Resources, and if the asset is or is linked to an internet-facing asset.
When you click Remediate Risk Now, Spot Security provides guided remediation actions to fix the security issue.

### Most Prevalent Alerts

This tile shows the most prevalent alerts detected in your environment. The default view shows the top three alerts. Click the arrow to see the other top alerts.

<img src="/spot-security/_media/spot-security-dashboard-d.png" />

## View Trends

The Risks Over Time chart gives you a view of the risk trends over time. You can view the trends over a period of two weeks, one month or three months. The line represents the number of resources scanned. The bars show the number of risks per time block and are broken down in colors by severity.

<img src="/spot-security/_media/spot-security-dashboard-e.png" />

## What’s Next?

Learn more about the detailed information you can see in the Risk Analysis(link to the Risk Analysis documentation page) page.
