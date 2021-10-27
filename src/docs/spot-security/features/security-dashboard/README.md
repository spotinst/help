# Security Dashboard

The Security Dashboard provides you with a high-level summary of your security posture. In addition, the dashboard provides quick access to more detailed information and remediation actions.

The dashboard includes the following main areas:
- Data Filters
- Security Stats
- Risk Trends over Time

To use the dashboard, click Dashboard under Spot Security in the Spot console tree on the left.

## Filter Data to View

The default filter for the Security Dashboard includes all accounts, services, and regions in your organization. You can set the following filters:
- Accounts: Include one or more accounts in your organization.
- Services: Include one or more AWS services that you are using.
- Region: Include one or more regions.

Spot Security currently works only with AWS as the cloud provider.

<img src="/spot-security/_media/a-features-dashboard-01.png" />

To create a particular set of filter settings and save for later use, click [Create Preset](spot-security/features/security-dashboard/create-preset).

## View Security Stats

The large tile at the top provides your main security stats:
- Identified Risks: The total number of security risks identified within the filters or preset chosen. This includes risks found in the latest scan and risks found previously that have not yet been fixed. Click View All Risks to see a detailed listing of all the risks.
- Resources Scanned: Under the Identified Risks, Spot displays the total number of resources scanned for the given analysis.
- Checks Passed: The total number of checks passed within the filters or preset chosen.
- New Risks Identified: Risks identified in the latest scan of your resources.
- Risk Summary Map: The map shows the risks per region in all the regions where you have resources. You can hover the mouse over the circle charts to see specific numbers. The colors are according to the breakdown by severity.
- Breakdown by Severity: A color legend shows the total number of risks per each severity level including High, Medium, and Low. A further breakdown on the right shows the same numerical breakdown of new risks only.

<img src="/spot-security/_media/a-features-dashboard-02.png" />

### Highest Impact Recommendations

This tile enables you to review the highest impact alerts and take remediation actions immediately if you choose.

<img src="/spot-security/_media/features-dashboard-03.png" />

By default, the alert with the highest level impact appears in the tile. You can click the arrow to scroll through up to 10 risks. High impact risks are determined by the risk factor and ease of remediation.

When you click Remediate Risk Now, Spot provides instructions for remediation actions you can take.

### Most Prevalent Alerts

This tile shows the nine most common alerts detected for the filters or preset you have chosen. The default view shows the top three alerts. Click the arrow to see the other top alerts.

<img src="/spot-security/_media/features-dashboard-04.png" />

## View Trends

This Risks over Time chart gives you a view of the risk trends over time. You can view the trends over periods of one day, one week or two weeks. The line represents the number of resources scanned. The bars show the number of risks per time block and are broken down in colors by severity.

<img src="/spot-security/_media/features-dashboard-05.png" />

## What’s Next?

Learn more about the detailed information you can see in the [Risk Analysis](spot-security/features/analyze-risks/) page.
