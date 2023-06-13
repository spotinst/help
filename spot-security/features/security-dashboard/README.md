<meta name="robots" content="noindex">

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
* Resources Scanned: Under Identified Risks, Spot displays the total number of resources scanned for the given analysis and the date and time of the last scan.
* New Risks Identified: Number of new risks identified in the latest scan of your assets compared to the last scan.
* Risk Across Regions: The map shows the number of risks in each region where you have resources. Hover over the circle charts to see the number of low, medium, and high risks.
* Breakdown by Severity: A color key shows the total number of risks per severity level including  high, medium, and low, along with the number of new risks identified in the last scan completed.

<img src="/spot-security/_media/spot-security-dashboard-a.png" />

### Filters and Presets

You can use the filters at the top to focus only on the information you need. Once you have set the filters, you can save them as [Presets](spot-security/features/security-dashboard/create-preset) for quick access to your customized view of the dashboard. You can create presets based on the AWS accounts, regions, or asset types that you are responsible for.

<img src="/spot-security/_media/spot-security-dashboard-b1.png" />

### Prioritized Actionable Insights

Spot Security helps you prioritize risks by providing you with the Prioritized Actionbale Insights. The Risks in this table are sorted according to priorities starting from 1 to 100 by default. Spot Security takes into account asset’s status (Internet facing), asset type, severity of the security rule, blast radius and access type (external access, public access) to calculate the priority. You can choose to accept the risks using the supress action and you will be presented with the next set of priorities. You can also filter the table and customize its columns as well as export the table to a CSV file.  

<img src="/spot-security/_media/dashboard-1.png" />

### Most Prevalent Alerts

The table shows the most prevalent alerts detected in your environment. You can  export the complete list of alerts.  

<img src="/spot-security/_media/dashboard-2.png" />

## View Trends

The Risks Over Time chart gives you a view of the risk trends over time. You can view the trends over a period of two weeks, one month or three months. The line represents the number of resources scanned. The bars show the number of risks per time block and are broken down in colors by severity.

<img src="/spot-security/_media/spot-security-dashboard-e.png" />

## What’s Next?

Learn more about the detailed information you can see in the [Risk Analysis](spot-security/features/analyze-risks/) page.
