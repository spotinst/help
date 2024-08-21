<meta name="robots" content="noindex">

# Security Dashboard

The Security Dashboard provides you with a high-level summary of your cloud security posture. In addition, the dashboard provides quick access to more detailed information and remediation actions.

The dashboard includes the following main areas:
* Security Summary
* Highest Impact Recommendations
* Most Prevalent Alerts
* Risks Over Time

To use the dashboard, in the left main menu, click **Spot Security** and then **Dashboard**. 

## Security Summary

The large tile at the top provides your main security stats:
* Identified Risks: The total number of security risks currently in your environment (or based on the filters applied). Click **View All Risks** to see a detailed list of all the risks.
* Checks Passed: The total number of security rules passed for all of your assets.
* Resources Scanned: Under Identified Risks, Spot displays the total number of resources scanned for the given analysis and the date and time of the last scan.
* New Risks Identified: Number of new risks identified in the latest scan of your assets compared to the last scan.
* Risk Across Regions: The map shows the number of risks in each region where you have resources. Hover over the circle charts to see the number of low, medium, and high risks.
* Breakdown by Severity: A color key shows the total number of risks per severity level including  high, medium, and low, along with the number of new risks identified in the last scan completed.

<img src="/spot-security/_media/spot-security-dashboard-a.png" />

### Filters and Presets

You can use the filters at the top to focus only on the information you need. Once you have set the filters, you can save them as [Presets](spot-security/features/security-dashboard/create-preset) for quick access to your customized dashboard view. You can create presets based on the AWS accounts, regions, or asset types for which you are responsible.

<img src="/spot-security/_media/spot-security-dashboard-b1.png" />

### Prioritized Risk Analysis

Spot Security helps you prioritize risks by providing the Prioritized Actionbale Insights. The Risks in this table are sorted according to priorities, starting from 1 to 100 by default. Spot Security considers asset’s status (Internet facing), asset type, severity of the security rule, blast radius and access type (external access, public access) to calculate the priority. You can accept the risks using the Suppress action, and you will be presented with the next set of priorities. You can also filter the table, customize its columns, and export the table to a CSV file.  

<img src="/spot-security/_media/dashboard-1.png" />

### Prioritised Vulnerability

The Prioritized Vulnerabilities table presents the vulnerability findings based on their priorities, ranging from 1 to 100 by default. Spot Security considers multiple criteria to provide you with a contextual ranking for the CVE (Common Vulnerabilities and Exposures) and the asset. This feature lets you identify and address the most critical vulnerabilities first.

![dashboard-5](https://github.com/spotinst/help/assets/106514736/cb2872db-e221-469e-a92d-658feacd6e88)

Click the number of the Total Findings column of a vulnerability to view additional information, such as the OS, packages, etc.

![dashboard-6](https://github.com/spotinst/help/assets/106514736/d75dbf9d-44f0-472a-87c2-b615497082d6)

### Most Prevalent Alerts

The table shows the most prevalent alerts detected in your environment. You can  export the complete list of alerts.  

<img src="/spot-security/_media/dashboard-2.png" />

## View Trends

The Risks Over Time chart gives you a view of the risk trends over time. You can view the trends over a period of two weeks, one month or three months. The line represents the number of resources scanned. The bars show the number of risks per time block and are broken down in colors by severity.

<img src="/spot-security/_media/spot-security-dashboard-e.png" />
